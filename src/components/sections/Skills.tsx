import { skillGroups, toolGroups } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

type Group = { title: string; items: readonly string[] };

/**
 * One labelled row per category: the label sits in its own column so the eye
 * can run down the list of categories without wading through the pills.
 */
function GroupRows({ groups, tone }: { groups: Group[]; tone: "solid" | "soft" }) {
  return (
    <ul className="divide-y divide-line">
      {groups.map((group, i) => (
        <li key={group.title}>
          <Reveal delay={Math.min(i, 5) * 0.04}>
            <div className="grid gap-3 py-5 sm:grid-cols-[13rem_1fr] sm:gap-8 sm:py-6">
              <h4 className="text-sm font-semibold leading-snug text-ink">
                {group.title}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-full px-3.5 py-1.5 text-sm ${
                      tone === "solid"
                        ? "bg-teal-soft text-teal-deep"
                        : "border border-line bg-cream text-muted"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 bg-paper px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-coral">
            Toolkit
          </p>
          <h2 className="max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Skills &amp; tools I reach for
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="border-b-2 border-teal pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Technical skills
            </h3>
            <GroupRows groups={skillGroups} tone="solid" />
          </div>

          <div>
            <h3 className="border-b-2 border-yellow pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
              Tools
            </h3>
            <GroupRows groups={toolGroups} tone="soft" />
          </div>
        </div>
      </div>
    </section>
  );
}
