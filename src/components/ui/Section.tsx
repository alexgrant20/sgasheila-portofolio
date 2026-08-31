import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Keeps the heading block narrow so long intros stay readable. */
  align?: "left" | "center";
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  align = "left",
}: Props) {
  const centered = align === "center";

  return (
    <section
      id={id}
      className={`scroll-mt-28 px-6 py-20 sm:px-10 lg:px-16 lg:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        {(eyebrow || title || intro) && (
          <div
            className={`mb-12 max-w-2xl lg:mb-16 ${centered ? "mx-auto text-center" : ""}`}
          >
            {eyebrow && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-coral">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl">
                {title}
              </h2>
            )}
            {intro && (
              <div className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                {intro}
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
