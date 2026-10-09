"use client";

import { useRef, useState, type FormEvent } from "react";
import { profile } from "@/content/site";
import {
  IconArrow,
  IconLinkedIn,
  IconMail,
  IconPhone,
  IconPin,
} from "@/components/ui/art";
import { Reveal } from "@/components/ui/Reveal";
import { Hcaptcha, type HcaptchaHandle } from "@/components/ui/Hcaptcha";
import {
  LIMITS,
  validateContact,
  type ContactErrors,
} from "@/lib/contact-validation";
import { sendContactEmail } from "@/lib/web3forms";

type Status = "idle" | "sending" | "sent" | "error";

const empty = { name: "", email: "", message: "", company: "" };

export function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState<ContactErrors>({});
  const captcha = useRef<HcaptchaHandle>(null);

  const update = (field: keyof typeof empty) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear a field's error as soon as the visitor edits it.
    if (field !== "company") setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    // Silently accept and discard bot submissions — telling them would only help.
    if (form.company.trim() !== "") {
      setStatus("sent");
      setFeedback("Thank you — your message is on its way. I will reply soon.");
      setForm(empty);
      return;
    }

    const found = validateContact(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("error");
      setFeedback("Please fix the highlighted fields.");
      return;
    }

    const captchaToken = captcha.current?.getToken() ?? "";
    if (!captchaToken) {
      setStatus("error");
      setFeedback("Please complete the captcha before sending.");
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      await sendContactEmail({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        captchaToken,
      });
      setStatus("sent");
      setFeedback("Thank you — your message is on its way. I will reply soon.");
      setForm(empty);
    } catch {
      setStatus("error");
      setFeedback("Could not send your message right now. Please try again.");
    } finally {
      // An hCaptcha token is single-use, success or not.
      captcha.current?.reset();
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-line bg-paper px-5 py-3.5 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-teal focus:outline-none";

  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-teal px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
        {/* Left — pitch + details */}
        <div>
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-yellow">
              Contact
            </p>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-cream sm:text-5xl">
              Let&apos;s build something
              <span className="block italic text-yellow">reliable together</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-teal-soft">
              Have a system that needs analysing, documenting, or rescuing? Send
              me the details and I will get back to you.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-5">
              {[
                {
                  Icon: IconMail,
                  label: profile.email,
                  href: `mailto:${profile.email}`,
                },
                {
                  Icon: IconPhone,
                  label: profile.phone,
                  href: `tel:${profile.phoneHref}`,
                },
                {
                  Icon: IconLinkedIn,
                  label: profile.linkedin,
                  href: profile.linkedinHref,
                },
                { Icon: IconPin, label: profile.location },
              ].map(({ Icon, label, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/10 text-yellow">
                    <Icon className="h-5 w-5" />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noreferrer noopener"
                          : undefined
                      }
                      className="text-cream underline decoration-cream/30 underline-offset-4 transition-colors hover:decoration-cream"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-cream">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Right — form */}
        <Reveal delay={0.06}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-[2rem] bg-cream p-7 sm:p-9"
          >
            <h3 className="font-display text-2xl font-semibold text-ink">
              Start by saying hi
            </h3>

            <div className="mt-7 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  type="text"
                  required
                  maxLength={LIMITS.name.max}
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update("name")(e.target.value)}
                  placeholder="Your name"
                  className={inputClass}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-coral">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  type="email"
                  required
                  maxLength={LIMITS.email.max}
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email")(e.target.value)}
                  placeholder="you@company.com"
                  className={inputClass}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-coral">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  required
                  maxLength={LIMITS.message.max}
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message")(e.target.value)}
                  placeholder="Tell me about the system or project."
                  className={`${inputClass} resize-y`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-coral">
                    {errors.message}
                  </p>
                )}
                <p
                  className={`mt-2 text-right text-xs ${
                    form.message.trim().length >= LIMITS.message.min
                      ? "font-semibold text-yellow"
                      : "text-muted"
                  }`}
                >
                  {form.message.length}/{LIMITS.message.max}
                </p>
              </div>

              {/* Honeypot — hidden from people, irresistible to bots */}
              <div aria-hidden="true" className="hidden">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={(e) => update("company")(e.target.value)}
                />
              </div>

              <Hcaptcha ref={captcha} />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`mt-4 min-h-[1.5rem] text-sm ${
                status === "error" ? "text-coral" : "text-teal"
              }`}
            >
              {feedback}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
