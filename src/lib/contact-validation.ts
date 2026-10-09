/** Length limits for the contact form. Mirrored by `maxLength` on the inputs. */
export const LIMITS = {
  name: { min: 4, max: 50 },
  email: { max: 50 },
  message: { min: 21, max: 500 },
} as const;

export type ContactFields = { name: string; email: string; message: string };
export type ContactErrors = Partial<Record<keyof ContactFields, string>>;

// Deliberately simple: one @, no spaces, a dot in the domain. The server has the final say.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(fields: ContactFields): ContactErrors {
  const errors: ContactErrors = {};
  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();

  if (name.length < LIMITS.name.min || name.length > LIMITS.name.max) {
    errors.name = `Name must be ${LIMITS.name.min} to ${LIMITS.name.max} characters.`;
  }

  if (email.length > LIMITS.email.max) {
    errors.email = `Email must be at most ${LIMITS.email.max} characters.`;
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (message.length < LIMITS.message.min || message.length > LIMITS.message.max) {
    errors.message = `Message must be ${LIMITS.message.min} to ${LIMITS.message.max} characters.`;
  }

  return errors;
}
