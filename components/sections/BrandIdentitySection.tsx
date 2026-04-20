import { SectionHeader } from "@/components/ui/SectionHeader";
import { CmsImage } from "@/components/ui/CmsImage";
import type { HomeContent, SiteSettings } from "@/lib/types";

type BrandIdentitySectionProps = {
  brandIdentity: HomeContent["brandIdentity"];
  mark: SiteSettings["logos"]["mark"];
};

export function BrandIdentitySection({
  brandIdentity,
  mark,
}: BrandIdentitySectionProps) {
  return (
    <section id="brand-identity" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Section 04"
          title={brandIdentity.title}
          description={brandIdentity.intro}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[1.75rem] border border-white/70 bg-white/85 p-7 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur">
              <h3 className="font-display text-3xl text-[#14313a]">
                Brand Personality
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {brandIdentity.personality.map((trait) => (
                  <span
                    key={trait}
                    className="rounded-full bg-[#eef4f2] px-4 py-2 text-sm font-medium text-[#2e6a69]"
                  >
                    {trait}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-[#4b5d64]">
                <span className="font-semibold text-[#14313a]">Tone of voice:</span>{" "}
                {brandIdentity.toneOfVoice}
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-white/70 bg-white/85 p-7 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur">
              <h3 className="font-display text-3xl text-[#14313a]">
                Value Proposition
              </h3>
              <p className="mt-5 text-sm leading-7 text-[#4b5d64]">
                {brandIdentity.valueProposition}
              </p>
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#6a8480]">
                  Typography
                </p>
                <p className="mt-3 text-sm leading-7 text-[#4b5d64]">
                  <span className="font-semibold text-[#14313a]">Heading:</span>{" "}
                  {brandIdentity.typography.heading}
                </p>
                <p className="text-sm leading-7 text-[#4b5d64]">
                  <span className="font-semibold text-[#14313a]">Body:</span>{" "}
                  {brandIdentity.typography.body}
                </p>
                <p className="text-sm leading-7 text-[#4b5d64]">
                  <span className="font-semibold text-[#14313a]">Direction:</span>{" "}
                  {brandIdentity.typography.accent}
                </p>
              </div>
            </article>

            <article className="rounded-[1.75rem] border border-white/70 bg-white/85 p-7 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur md:col-span-2">
              <h3 className="font-display text-3xl text-[#14313a]">
                Color Palette Preview
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-5">
                {brandIdentity.colors.map((color) => (
                  <div key={color.hex} className="space-y-3">
                    <div
                      className="h-24 rounded-[1.5rem] border border-white/80"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#14313a]">
                        {color.name}
                      </p>
                      <p className="text-sm text-[#4b5d64]">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_22px_60px_rgba(22,49,58,0.08)] backdrop-blur">
            <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,#eef5f2_0%,#faf6ef_100%)] p-6">
              <CmsImage
                src={mark}
                alt="CalmCove brand mark"
                className="h-20 w-20"
                width={120}
                height={120}
              />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#2e6a69]">
                Imagery Direction
              </p>
              <p className="mt-4 text-sm leading-7 text-[#4b5d64]">
                {brandIdentity.imageryDirection}
              </p>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#2e6a69]">
                Logo Direction
              </p>
              <p className="mt-4 text-sm leading-7 text-[#4b5d64]">
                {brandIdentity.logoDirection}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
