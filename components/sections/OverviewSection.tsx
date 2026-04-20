import { SectionHeader } from "@/components/ui/SectionHeader";
import { CmsImage } from "@/components/ui/CmsImage";
import type { HomeContent, SiteSettings } from "@/lib/types";

type OverviewSectionProps = {
  overview: HomeContent["brandOverview"];
  logo: SiteSettings["logos"]["primary"];
};

export function OverviewSection({ overview, logo }: OverviewSectionProps) {
  const cards = [
    { title: "What CalmCove is", body: overview.whatItIs },
    { title: "What it offers", body: overview.whatItOffers },
    { title: "Why it exists", body: overview.whyItExists },
    { title: "Who it is for", body: overview.whoItIsFor },
    { title: "What makes it different", body: overview.differentiator },
  ];

  return (
    <section id="overview" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Section 01"
          title={overview.title}
          description={overview.intro}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur"
              >
                <h3 className="font-display text-2xl text-[#14313a]">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#4b5d64]">{card.body}</p>
              </article>
            ))}

            <article className="rounded-[1.75rem] border border-[#dce9e5] bg-[#eef6f4] p-6 md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#2e6a69]">
                Mission Statement
              </p>
              <p className="mt-4 font-display text-3xl text-[#14313a]">
                {overview.mission}
              </p>
              <p className="mt-6 text-sm leading-7 text-[#4b5d64]">
                <span className="font-semibold text-[#14313a]">Positioning:</span>{" "}
                {overview.positioning}
              </p>
            </article>
          </div>

          <aside className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_22px_60px_rgba(22,49,58,0.08)] backdrop-blur">
            <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,#eef5f3_0%,#faf6ef_100%)] p-5">
              <CmsImage
                src={logo}
                alt="CalmCove wordmark"
                className="h-14 w-auto"
                width={420}
                height={120}
              />
              <CmsImage
                src={overview.appPreviewImage}
                alt={overview.appPreviewAlt}
                className="mt-6 h-[29rem] w-full rounded-[1.5rem] object-cover"
                width={1000}
                height={1400}
              />
              <p className="mt-5 text-sm leading-7 text-[#4b5d64]">
                The brand system is designed to feel calm and premium, with app-like
                previews that make the concept feel presentation-ready and real.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
