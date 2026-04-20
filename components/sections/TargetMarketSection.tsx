import { SectionHeader } from "@/components/ui/SectionHeader";
import type { HomeContent } from "@/lib/types";

export function TargetMarketSection({
  targetMarket,
}: {
  targetMarket: HomeContent["targetMarket"];
}) {
  const groups = [
    { title: "Demographics", items: targetMarket.demographics },
    { title: "Psychographics", items: targetMarket.psychographics },
    { title: "Behavioral Insights", items: targetMarket.behavioralInsights },
  ];

  return (
    <section id="target-market" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Section 02"
          title={targetMarket.title}
          description={targetMarket.intro}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {groups.map((group) => (
            <article
              key={group.title}
              className="rounded-[1.75rem] border border-white/70 bg-white/85 p-7 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur"
            >
              <h3 className="font-display text-3xl text-[#14313a]">{group.title}</h3>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-[#4b5d64]">
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-[#d6e4df] bg-[#eef4f2] p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2e6a69]">
            Where they spend time online
          </p>
          <p className="mt-4 text-base leading-8 text-[#30454c]">
            {targetMarket.onlineHabitText}
          </p>
        </div>
      </div>
    </section>
  );
}

