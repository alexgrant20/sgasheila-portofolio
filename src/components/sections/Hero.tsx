import { profile, yearsOfExperience } from "@/content/site";
import {
  BrushStroke,
  CredentialStamp,
  IconDownload,
} from "@/components/ui/art";
import { Portrait } from "@/components/ui/Portrait";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Three zones across the band, as in the reference layout:
 *   left   — headline, then email, then the years-of-experience mark
 *   centre — the figure standing on a teal brush stroke, cropped by the
 *            section's bottom edge
 *   right  — the one-line pitch up top, the credential stamp down below
 */
export function Hero() {
  const years = yearsOfExperience();

  return (
    // overflow-hidden crops the figure at the section's bottom edge, and keeps
    // the brush stroke from widening the page on phones.
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-y-10 pt-8 lg:min-h-[34rem] lg:grid-cols-12 lg:gap-x-6 lg:pt-12">
          {/* Left */}
          <div className="flex flex-col lg:col-span-5 lg:pb-14">
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
                  {years}
                </span>
                <span className="text-[0.7rem] font-semibold uppercase leading-[1.5] tracking-[0.18em] text-muted">
                  Years
                  <br />
                  Experience
                </span>
              </div>
            </Reveal>
          </div>

          {/* Centre — figure on the brush stroke */}
          <div className="relative min-h-[22rem] sm:min-h-[28rem] lg:col-span-4 lg:min-h-0">
            {/* The art is allowed to spill past its column, as in the
                reference, so the figure reads at full scale. */}
            <div className="absolute -inset-x-[14%] bottom-0 top-0">
              {/* Full height, so the stroke stands behind the figure from the
                  top of the frame all the way down to the crop. */}
              <BrushStroke className="absolute inset-0 h-full w-full" />
              <div className="absolute inset-x-0 bottom-0 top-[12%]">
                <Portrait alt={`Portrait of ${profile.name}`} />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-10 lg:col-span-3 lg:gap-14 lg:pb-14">
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
