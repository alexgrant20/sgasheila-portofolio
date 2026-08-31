import { stats, yearsOfExperience } from "@/content/site";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  const items = [
    { value: yearsOfExperience(), suffix: "+", label: "Years in IT" },
    ...stats,
  ];

  return (
    <section className="bg-paper px-6 pb-20 sm:px-10 lg:px-16 lg:pb-28">
      <div className="mx-auto w-full max-w-6xl rounded-[2rem] bg-teal px-8 py-12 sm:px-12">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-5">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <div>
                <dd className="font-display text-4xl font-semibold leading-none text-cream sm:text-5xl">
                  <CountUp
                    value={item.value}
                    decimals={"decimals" in item ? item.decimals : 0}
                    suffix={"suffix" in item && item.suffix ? item.suffix : ""}
                  />
                </dd>
                <dt className="mt-3 text-sm leading-snug text-teal-soft">
                  {item.label}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
