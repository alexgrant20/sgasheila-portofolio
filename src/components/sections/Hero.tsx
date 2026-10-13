import { profile, yearsOfExperience } from "@/content/site";
import {
  BrushStroke,
  CredentialStamp,
  IconDownload,
} from "@/components/ui/art";
import { Portrait } from "@/components/ui/Portrait";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Hero section layout:
 * - Left: Headline, email, CV download, and years of experience.
 * - Centre: Portrait layered over a teal brush stroke.
 * - Right: Introductory text and credential stamp.
 */
export function Hero() {
  const years = yearsOfExperience();

  return (
    // Crop the artwork at the section boundaries and prevent horizontal overflow.
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-y-10 pt-8 lg:min-h-[34rem] lg:grid-cols-12 lg:gap-x-6 lg:pt-12">
          {/* Left column: Introduction and experience */}
          <div className="flex flex-col lg:col-span-4 lg:pb-14">
            <Reveal>
              <h1 className="font-hero text-[clamp(2.25rem,5.2vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.02em] text-navy">
                Hey There,
                <br />
                I&apos;m {profile.firstName}
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 lg:mt-16">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[0.95rem] font-medium text-coral transition-colors hover:text-ink"
                >
                  {profile.email}
                </a>
                <div className="mt-5">
                  <a
                    href={profile.resume}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-paper px-5 py-2.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
                  >
                    <IconDownload className="h-4 w-4" />
                    Download CV
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex items-center gap-4 lg:mt-auto lg:pt-14">
                <span className="font-hero text-[2.75rem] font-bold leading-none text-navy">
                  {years}+
                </span>
                <span className="text-[0.7rem] font-semibold uppercase leading-[1.5] tracking-[0.18em] text-muted">
                  Years
                  <br />
                  Experience
                </span>
              </div>
            </Reveal>
          </div>

          {/* Centre column: Portrait layered over the brush stroke.
              On mobile and tablet, clip the top and bottom while keeping the
              artwork's left and right edges visible. On desktop, allow the
              artwork to extend beyond the column as before. */}
          <div className="relative -mt-20 min-h-[24rem] [clip-path:inset(0_-100vw)] sm:-mt-24 sm:min-h-[32rem] lg:col-span-4 lg:mt-0 lg:min-h-0 lg:[clip-path:none]">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0 z-0 lg:-inset-x-[10%]">
              {/* Adjust the horizontal translation to align the brush stroke
                  with the portrait. Update the -translate-x values if needed. */}
              <div className="absolute inset-0 origin-bottom -translate-x-[5%] scale-[0.8] sm:-translate-x-[9%] sm:scale-90 lg:-translate-x-[35%] lg:scale-110">
                <BrushStroke className="h-full w-full" />
              </div>

              {/* Position the portrait above the brush stroke. */}
              <div className="absolute inset-x-0 bottom-0 top-[12%] lg:-inset-x-[12%] lg:-top-[8%]">
                <Portrait alt={`Portrait of ${profile.name}`} />
              </div>
            </div>
          </div>

          {/* Right column: Introduction and credentials.
              Keep the content above the artwork using z-10. */}
          <div className="relative z-10 flex flex-col gap-10 pt-2 lg:col-span-4 lg:items-end lg:gap-14 lg:pb-14 lg:pt-0">
            <Reveal delay={0.08}>
              <p className="max-w-[15rem] text-sm leading-[1.75] text-muted">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={0.24} className="lg:mt-auto">
              <CredentialStamp label={profile.badge} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
