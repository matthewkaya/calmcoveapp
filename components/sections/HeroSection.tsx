import type { HomeContent, SiteSettings } from "@/lib/types";
import { CmsImage } from "@/components/ui/CmsImage";

type HeroSectionProps = {
  brand: SiteSettings["brand"];
  hero: HomeContent["hero"];
  logo: string;
};

export function HeroSection({ brand, hero, logo }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(141,201,193,0.34),_transparent_58%)]" />
      <div className="absolute left-0 top-24 -z-10 h-64 w-64 rounded-full bg-[#d8c6af]/30 blur-3xl" />
      <div className="absolute right-0 top-10 -z-10 h-80 w-80 rounded-full bg-[#8dc9c1]/25 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-[#2e6a69]/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#2e6a69]">
            {brand.projectLabel}
          </p>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#6a8480]">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-6xl leading-none text-[#14313a] md:text-7xl">
            {brand.name}
          </h1>
          <p className="mt-4 text-2xl font-medium text-[#2e6a69] md:text-3xl">
            {brand.tagline}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#475960]">
            {hero.title} {hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={hero.primaryCtaHref}
              className="rounded-full bg-[#17313b] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#244752]"
            >
              {hero.primaryCtaLabel}
            </a>
            <a
              href={hero.secondaryCtaHref}
              className="rounded-full border border-[#17313b]/15 bg-white/70 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#17313b] transition hover:border-[#17313b]/35"
            >
              {hero.secondaryCtaLabel}
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-white/70 bg-white/80 p-5 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-[#6a8480]">
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl font-semibold text-[#14313a]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 hidden h-24 w-24 rounded-[2rem] border border-white/60 bg-white/50 backdrop-blur lg:block" />
          <div className="animate-float overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/85 p-4 shadow-[0_28px_80px_rgba(22,49,58,0.12)] backdrop-blur">
            <div className="rounded-[2rem] bg-[linear-gradient(180deg,#eef6f4_0%,#f9f5ed_100%)] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CmsImage
                    src={logo}
                    alt={`${brand.name} mark`}
                    className="h-12 w-12"
                    width={120}
                    height={120}
                    priority
                  />
                  <div>
                    <p className="font-display text-2xl text-[#14313a]">{brand.name}</p>
                    <p className="text-sm text-[#5e7772]">{brand.tagline}</p>
                  </div>
                </div>
                <div className="rounded-full bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#2e6a69]">
                  Launch concept
                </div>
              </div>
              <CmsImage
                src={hero.visual.src}
                alt={hero.visual.alt}
                className="h-[30rem] w-full rounded-[1.75rem] object-cover"
                width={1200}
                height={900}
                priority
              />
              <p className="mt-4 text-sm text-[#5e7772]">{hero.visual.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
