import { profile, projectCountByTag, services } from "@/content/site";
import {
  IconDatabase,
  IconQA,
  IconRequirements,
} from "@/components/ui/art";
import { Reveal } from "@/components/ui/Reveal";

const icons = {
  "Requirement Analysis": IconRequirements,
  Database: IconDatabase,
  Testing: IconQA,
} as const;

const accents = {
  teal: "bg-teal text-cream",
  yellow: "bg-yellow text-ink",
  coral: "bg-coral text-cream",
} as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-paper px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Cards */}
        <div className="flex flex-col gap-5">
          {services.map((service, i) => {
            const Icon = icons[service.tag as keyof typeof icons];
            const count = projectCountByTag(service.tag);

            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <article className="flex items-start gap-5 rounded-3xl border border-line bg-cream p-6 transition-transform duration-300 hover:-translate-y-1">
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${accents[service.accent]}`}
                  >
                    {Icon ? <Icon className="h-7 w-7" /> : null}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-coral">
                      {count} projects
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {service.blurb}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Copy */}
        <div className="lg:pt-6">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-coral">
              What I do
            </p>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
              What do I help with?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {profile.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
