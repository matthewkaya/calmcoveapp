import { CampaignCard } from "@/components/ui/CampaignCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { YouTubeContent } from "@/lib/types";

export function YouTubeStrategySection({
  youtube,
}: {
  youtube: YouTubeContent;
}) {
  return (
    <section id="youtube-strategy" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Section 08" title={youtube.title} description={youtube.intro} />

        <div className="mt-8 rounded-[1.75rem] border border-[#d6e4df] bg-[#eef4f2] p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2e6a69]">
            Why YouTube Fits
          </p>
          <p className="mt-4 text-base leading-8 text-[#30454c]">{youtube.whyItFits}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {youtube.concepts.map((concept) => (
            <div key={concept.title} className="space-y-5">
              <CampaignCard
                title={concept.title}
                body={concept.purpose}
                cta={concept.cta}
                visual={concept.storyboardVisual}
                alt={concept.storyboardAlt}
              />
              <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur">
                <p className="text-sm leading-7 text-[#4b5d64]">
                  <span className="font-semibold text-[#14313a]">Target viewer:</span>{" "}
                  {concept.targetViewer}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#4b5d64]">
                  <span className="font-semibold text-[#14313a]">Key message:</span>{" "}
                  {concept.keyMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

