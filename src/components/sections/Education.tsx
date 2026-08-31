import { awards, education, languages } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Certifications } from "@/components/sections/Certifications";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Background"
      title="Education & credentials"
      intro="A dual major in Computer Science and Statistics — the reason system design and data analysis tend to arrive together in my work."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Degree */}
        <Reveal>
          <article className="h-full rounded-3xl bg-teal p-8 text-cream sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-soft">
              {education.period}
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold leading-tight">
              {education.degree}
            </h3>
            <p className="mt-2 text-teal-soft">{education.school}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-cream/15 px-4 py-2 text-sm font-medium">
                GPA {education.gpa}
              </span>
              <span className="rounded-full bg-yellow px-4 py-2 text-sm font-semibold text-ink">
                {education.honors}
              </span>
            </div>

            <div className="mt-8 border-t border-cream/20 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-soft">
                Thesis
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/90">
                {education.thesis}
              </p>
            </div>
          </article>
        </Reveal>

        {/* Awards + languages */}
        <div className="flex flex-col gap-6">
          <Reveal delay={0.08}>
            <article className="rounded-3xl border border-line bg-paper p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">
                Awards &amp; activities
              </h3>
              <ul className="mt-5 space-y-4">
                {awards.map((award) => (
                  <li
                    key={award}
                    className="relative pl-6 text-sm leading-relaxed text-muted"
                  >
                    <span className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rounded-full bg-yellow" />
                    {award}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.14}>
            <article className="rounded-3xl border border-line bg-paper p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-coral">
                Languages
              </h3>
              <ul className="mt-5 space-y-3">
                {languages.map((language) => (
                  <li
                    key={language.name}
                    className="flex items-baseline justify-between gap-4 text-sm"
                  >
                    <span className="font-medium text-ink">{language.name}</span>
                    <span className="text-muted">{language.level}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>

      <Certifications />
    </Section>
  );
}
