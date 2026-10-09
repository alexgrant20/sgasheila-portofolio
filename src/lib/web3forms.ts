/**
 * Client-side Web3Forms transport.
 *
 * The site is a static export with no server, so the form posts straight to
 * Web3Forms. The access key is public by design (it only routes mail to the
 * owner's inbox); abuse defense comes from the reCAPTCHA token, which
 * Web3Forms verifies server-side against the secret key stored in its
 * dashboard — see README for setup.
 */

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  /** Token from the reCAPTCHA widget; omitted when reCAPTCHA is not configured. */
  captchaToken?: string;
};

export class ContactConfigError extends Error {}
export class ContactSendError extends Error {}

const ENDPOINT = "https://api.web3forms.com/submit";

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  // Must stay a literal `process.env.X` access — Next.js only inlines
  // NEXT_PUBLIC_ vars for the browser that way.
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new ContactConfigError(
      "Missing environment variable: NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY",
    );
  }

  const body: Record<string, string> = {
    access_key: accessKey,
    subject: `Portfolio message from ${payload.name}`,
    from_name: "Portfolio contact form",
    name: payload.name,
    email: payload.email,
    message: payload.message,
  };
  if (payload.captchaToken) body["g-recaptcha-response"] = payload.captchaToken;

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });

  const result = (await response.json().catch(() => null)) as {
    success?: boolean;
    message?: string;
  } | null;

  if (!response.ok || !result?.success) {
    throw new ContactSendError(result?.message ?? `HTTP ${response.status}`);
  }
}
