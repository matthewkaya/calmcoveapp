import { KPIStatCard } from "@/components/ui/KPIStatCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { AnalyticsContent } from "@/lib/types";

export function AnalyticsSection({
  analytics,
}: {
  analytics: AnalyticsContent;
}) {
  const maxReach = Math.max(...analytics.channelPerformance.map((item) => item.reach));
  const maxConversions = Math.max(...analytics.weeklyTrend.map((item) => item.conversions));

  return (
    <section id="analytics" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Section 11"
          title={analytics.title}
          description={analytics.intro}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {analytics.kpis.map((kpi) => (
            <KPIStatCard
              key={kpi.label}
              label={kpi.label}
              value={kpi.value}
              trend={kpi.trend}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_22px_60px_rgba(22,49,58,0.08)] backdrop-blur">
            <h3 className="font-display text-4xl text-[#14313a]">
              Channel Performance
            </h3>
            <div className="mt-8 space-y-5">
              {analytics.channelPerformance.map((item) => (
                <div key={item.channel} className="space-y-3">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-[#14313a]">{item.channel}</p>
                      <p className="text-sm text-[#4b5d64]">
                        {item.engagementRate}% engagement • {item.ctr}% CTR •{" "}
                        {item.conversions} conversions
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-[#2e6a69]">
                      {item.reach.toLocaleString()} reach
                    </p>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-[#e7f0ee]">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#8dc9c1_0%,#2e6a69_100%)]"
                      style={{ width: `${(item.reach / maxReach) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_22px_60px_rgba(22,49,58,0.08)] backdrop-blur">
            <h3 className="font-display text-4xl text-[#14313a]">Weekly Growth Arc</h3>
            <div className="mt-8 grid h-72 grid-cols-4 items-end gap-4">
              {analytics.weeklyTrend.map((week) => (
                <div key={week.week} className="flex h-full flex-col justify-end gap-3">
                  <div className="rounded-[1.5rem] bg-[#eef4f2] p-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#2e6a69]">
                    {week.conversions}
                  </div>
                  <div className="relative flex-1 overflow-hidden rounded-[1.5rem] bg-[#f4f0e8]">
                    <div
                      className="absolute bottom-0 left-0 right-0 rounded-[1.5rem] bg-[linear-gradient(180deg,#b7ddd8_0%,#2e6a69_100%)]"
                      style={{
                        height: `${(week.conversions / maxConversions) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-[#14313a]">{week.week}</p>
                    <p className="text-xs text-[#4b5d64]">
                      Reach {Math.round(week.reach / 1000)}K
                    </p>
                    <p className="text-xs text-[#4b5d64]">{week.engagement}% eng.</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <article className="mt-8 rounded-[1.75rem] border border-[#d6e4df] bg-[#eef4f2] p-7">
          <h3 className="font-display text-4xl text-[#14313a]">
            Optimization Recommendations
          </h3>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {analytics.recommendations.map((item) => (
              <li
                key={item}
                className="rounded-[1.5rem] bg-white/80 p-5 text-sm leading-7 text-[#4b5d64]"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

