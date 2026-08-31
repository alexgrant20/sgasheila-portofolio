import { NextResponse } from "next/server";
import { z } from "zod";
import { EmailConfigError, sendContactEmail } from "@/lib/emailjs";
import { LIMIT, check, record } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().max(120),
  message: z.string().trim().min(10).max(2000),
  // Honeypot: real people never see this field, bots fill everything.
  company: z.string().max(200).optional(),
});

/** Best available client IP behind Vercel / a reverse proxy. */
function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the form and try again.",
        issues: parsed.error.issues.map((i) => ({
          field: i.path.join("."),
          message: i.message,
        })),
      },
      { status: 400 },
    );
  }

  const { name, email, message, company } = parsed.data;

  // Silently accept and discard bot submissions — telling them would only help.
  if (company && company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const ip = clientIp(request);
  const limit = check(ip);
  if (!limit.ok) {
    return NextResponse.json(
      {
        error: `You have already sent ${LIMIT} messages. Please try again shortly.`,
        retryAfter: limit.retryAfter,
      },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  try {
    await sendContactEmail({ name, email, message });
  } catch (error) {
    // Full detail stays in the server log; the client gets nothing exploitable.
    console.error("[contact] send failed:", error);

    if (error instanceof EmailConfigError) {
      return NextResponse.json(
        { error: "The contact form is not configured yet." },
        { status: 500 },
      );
    }
    return NextResponse.json(
      { error: "Could not send your message right now. Please try again." },
      { status: 502 },
    );
  }

  // Only a delivered message counts against the sender's allowance.
  record(ip);

  return NextResponse.json({ ok: true, remaining: limit.remaining - 1 });
}
