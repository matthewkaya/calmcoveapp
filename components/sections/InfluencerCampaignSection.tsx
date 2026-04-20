import { CampaignCard } from "@/components/ui/CampaignCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { InfluencerCampaignContent } from "@/lib/types";

export function InfluencerCampaignSection({
  influencerCampaign,
}: {
  influencerCampaign: InfluencerCampaignContent;
}) {
  const { campaign } = influencerCampaign;

  return (
    <section id="influencer-campaign" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Section 10"
          title={influencerCampaign.title}
          description={influencerCampaign.intro}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_22px_60px_rgba(22,49,58,0.08)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2e6a69]">
              Creator fit
            </p>
            <h3 className="mt-4 font-display text-5xl text-[#14313a]">
              {campaign.name}
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <p className="text-sm leading-7 text-[#4b5d64]">
                <span className="font-semibold text-[#14313a]">Handle:</span>{" "}
                {campaign.handle}
              </p>
              <p className="text-sm leading-7 text-[#4b5d64]">
                <span className="font-semibold text-[#14313a]">Follower count:</span>{" "}
                {campaign.followerCount}
              </p>
              <p className="text-sm leading-7 text-[#4b5d64]">
                <span className="font-semibold text-[#14313a]">Platform:</span>{" "}
                {campaign.primaryPlatform}
              </p>
              <p className="text-sm leading-7 text-[#4b5d64]">
                <span className="font-semibold text-[#14313a]">Audience:</span>{" "}
                {campaign.audienceDemographics}
              </p>
            </div>
            <p className="mt-5 text-sm leading-7 text-[#4b5d64]">
              <span className="font-semibold text-[#14313a]">Content style:</span>{" "}
              {campaign.contentStyle}
            </p>
            <p className="mt-4 text-sm leading-7 text-[#4b5d64]">
              <span className="font-semibold text-[#14313a]">Why they fit:</span>{" "}
              {campaign.whyFit}
            </p>
            <p className="mt-4 text-sm leading-7 text-[#4b5d64]">
              <span className="font-semibold text-[#14313a]">Campaign concept:</span>{" "}
              {campaign.concept}
            </p>

            <div className="mt-8 rounded-[1.5rem] bg-[#f7f3eb] p-5">
              <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#14313a]">
                Sample Outreach Email
              </h4>
              <p className="mt-4 text-sm leading-7 text-[#4b5d64]">
                {campaign.outreachEmail}
              </p>
            </div>
          </article>

          <div className="space-y-6">
            <article className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur">
              <h4 className="font-display text-3xl text-[#14313a]">Deliverables</h4>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[#4b5d64]">
                {campaign.deliverables.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur">
              <h4 className="font-display text-3xl text-[#14313a]">
                Organic Growth Tactics
              </h4>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[#4b5d64]">
                {campaign.organicGrowthTactics.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {campaign.mockups.map((mockup, index) => (
            <div key={`${mockup.cta}-${index}`} className="space-y-5">
              <CampaignCard
                title={`Influencer Mockup ${index + 1}`}
                body={mockup.caption}
                cta={mockup.cta}
                visual={mockup.visual}
                alt={mockup.visualAlt}
              />
              <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur">
                <p className="text-sm font-medium text-[#2e6a69]">
                  {mockup.hashtags.join(" ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

