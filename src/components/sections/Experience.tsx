import { experience, yearsOfExperience } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      title="My work experience"
      intro={`${yearsOfExperience()} years and ${experience.length} roles inside the IT Division of Bina Nusantara Group — moving from writing code to owning the analysis and the delivery.`}
    >
      <ol className="relative border-l border-line pl-8 sm:pl-12">
        {experience.map((job, i) => (
          <li key={job.role} className="relative pb-14 last:pb-0">
            {/* Timeline node */}
            <span
              className={`absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-cream sm:-left-[57px] ${
                job.current ? "bg-coral" : "bg-teal"
              }`}
            >
              {job.current && (
                <span className="h-1.5 w-1.5 rounded-full bg-cream" />
              )}
            </span>

            <Reveal delay={i * 0.05}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-teal">{job.org}</p>
                </div>
                <p className="shrink-0 text-sm font-semibold uppercase tracking-[0.12em] text-muted">
                  {job.period}
                </p>
              </div>

              <ul className="mt-5 space-y-3">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-6 text-[15px] leading-relaxed text-muted"
                  >
                    <span className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-yellow" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
