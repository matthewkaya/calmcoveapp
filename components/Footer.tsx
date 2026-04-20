import type { SiteSettings } from "@/lib/types";

export function Footer({ siteSettings }: { siteSettings: SiteSettings }) {
  return (
    <footer className="px-5 pb-10 pt-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-3xl text-[#14313a]">
            {siteSettings.brand.name}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-[#4b5d64]">
            {siteSettings.brand.footerNote}
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-[#264148] md:items-end">
          <div className="flex flex-wrap gap-4">
            {siteSettings.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium transition hover:text-[#2e6a69]"
              >
                {link.platform}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#top" className="font-semibold text-[#2e6a69]">
              Back to top
            </a>
            <a href="/admin" className="font-semibold text-[#2e6a69]">
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
