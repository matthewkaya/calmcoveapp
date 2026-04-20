import { SectionHeader } from "@/components/ui/SectionHeader";
import { StrategyCard } from "@/components/ui/StrategyCard";
import type { HomeContent } from "@/lib/types";

export function PlatformStrategySection({
  platformStrategy,
}: {
  platformStrategy: HomeContent["platformStrategy"];
}) {
  return (
    <section id="platform-strategy" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Section 05"
          title={platformStrategy.title}
          description={platformStrategy.intro}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {platformStrategy.platforms.map((platform) => (
            <StrategyCard
              key={platform.name}
              title={platform.name}
              eyebrow={platform.role}
              description={platform.why}
              bullets={platform.focusAreas}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

