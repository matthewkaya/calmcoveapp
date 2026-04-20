import { CampaignCard } from "@/components/ui/CampaignCard";
import { KPIStatCard } from "@/components/ui/KPIStatCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { PaidCampaignContent } from "@/lib/types";

export function PaidCampaignSection({
  paidCampaign,
}: {
  paidCampaign: PaidCampaignContent;
}) {
  const { campaign } = paidCampaign;

  return (
    <section id="paid-campaign" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Section 09"
          title={paidCampaign.title}
          description={paidCampaign.intro}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_22px_60px_rgba(22,49,58,0.08)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2e6a69]">
              Campaign concept
            </p>
            <h3 className="mt-4 font-display text-5xl text-[#14313a]">
              {campaign.name}
            </h3>
            <p className="mt-6 text-base leading-8 text-[#4b5d64]">
              <span className="font-semibold text-[#14313a]">Objective:</span>{" "}
              {campaign.objective}
            </p>
            <p className="mt-4 text-base leading-8 text-[#4b5d64]">
              <span className="font-semibold text-[#14313a]">Big idea:</span>{" "}
              {campaign.bigIdea}
            </p>
            <p className="mt-4 text-base leading-8 text-[#4b5d64]">
              <span className="font-semibold text-[#14313a]">Emotional hook:</span>{" "}
              {campaign.emotionalHook}
            </p>
            <p className="mt-4 text-base leading-8 text-[#4b5d64]">
              <span className="font-semibold text-[#14313a]">Tagline:</span>{" "}
              {campaign.tagline}
            </p>
            <p className="mt-4 text-base leading-8 text-[#4b5d64]">
              <span className="font-semibold text-[#14313a]">Audience summary:</span>{" "}
              {campaign.audienceSummary}
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#14313a]">
                  Targeting Plan
                </h4>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#4b5d64]">
                  {campaign.targetingPlan.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#14313a]">
                  Platforms & Placements
                </h4>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#4b5d64]">
                  {campaign.placementPlan.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[#f7f3eb] p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#14313a]">
                  Mock Budget
                </h4>
                <div className="mt-4 space-y-4">
                  {campaign.mockBudget.map((item) => (
                    <div
                      key={item.item}
                      className="flex items-center justify-between gap-4 border-b border-[#e7ddd0] pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="text-sm text-[#4b5d64]">{item.item}</span>
                      <span className="text-sm font-semibold text-[#14313a]">
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-[#eef4f2] p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#14313a]">
                  Expected Outcomes
                </h4>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#4b5d64]">
                  {campaign.expectedOutcomes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {campaign.metrics.map((metric) => (
                <KPIStatCard
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                  detail={metric.detail}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {campaign.adMockups.map((ad) => (
            <CampaignCard
              key={ad.headline}
              title={ad.headline}
              body={ad.adCopy}
              cta={ad.cta}
              visual={ad.visual}
              alt={ad.visualAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

