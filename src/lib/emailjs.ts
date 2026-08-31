/**
 * Client-side EmailJS transport.
 *
 * The site is a static export with no server to hold a private key or see the
 * caller's real IP, so this uses EmailJS's browser SDK with the public key
 * only. Abuse defense is whatever EmailJS's own dashboard limits and
 * domain-restriction offer — see README for setup.
 */

import emailjs from "@emailjs/browser";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export class EmailConfigError extends Error {}

function requiredEnv(key: string, value: string | undefined): string {
  if (!value) {
    throw new EmailConfigError(`Missing environment variable: ${key}`);
  }
  return value;
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  // Next.js only inlines NEXT_PUBLIC_ vars for the browser when accessed as a
  // static `process.env.X` — a dynamic `process.env[key]` lookup is never
  // replaced and is always undefined client-side. Each access must stay literal.
  const serviceId = requiredEnv(
    "NEXT_PUBLIC_EMAILJS_SERVICE_ID",
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  );
  const templateId = requiredEnv(
    "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID",
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  );
  const publicKey = requiredEnv(
    "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  );

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: payload.name,
      from_email: payload.email,
      reply_to: payload.email,
      message: payload.message,
    },
    { publicKey },
  );
}
