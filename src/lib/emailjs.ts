/**
 * Server-side EmailJS transport.
 *
 * The browser SDK is deliberately not used: the rate limit has to be enforced
 * where the real client IP is visible, and the private key must never ship to
 * the client. EmailJS blocks non-browser calls by default — switch on
 * "Allow API calls from non-browser applications" under Account → Security,
 * otherwise every request comes back 403.
 */

/**
 * Overridable so the contact route can be exercised end-to-end against a local
 * stub without sending real mail. Leave unset everywhere but local testing.
 */
const ENDPOINT =
  process.env.EMAILJS_ENDPOINT || "https://api.emailjs.com/api/v1.0/email/send";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export class EmailConfigError extends Error {}
export class EmailSendError extends Error {}

function requiredEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new EmailConfigError(`Missing environment variable: ${key}`);
  }
  return value;
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const body = {
    service_id: requiredEnv("EMAILJS_SERVICE_ID"),
    template_id: requiredEnv("EMAILJS_TEMPLATE_ID"),
    user_id: requiredEnv("EMAILJS_PUBLIC_KEY"),
    accessToken: requiredEnv("EMAILJS_PRIVATE_KEY"),
    template_params: {
      from_name: payload.name,
      from_email: payload.email,
      reply_to: payload.email,
      message: payload.message,
    },
  };

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    // Never let a hung provider hold a serverless invocation open.
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new EmailSendError(
      `EmailJS responded ${response.status}: ${detail.slice(0, 300)}`,
    );
  }
}
