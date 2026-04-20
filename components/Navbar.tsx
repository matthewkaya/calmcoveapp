import type { NavItem, SiteSettings } from "@/lib/types";
import { CmsImage } from "@/components/ui/CmsImage";

type NavbarProps = {
  brand: SiteSettings["brand"];
  navigation: NavItem[];
  logo: string;
};

export function Navbar({ brand, navigation, logo }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[rgba(251,248,242,0.78)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 py-4 md:px-8">
        <div className="flex items-center justify-between gap-6">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <CmsImage
              src={logo}
              alt={`${brand.name} logo`}
              className="h-10 w-10 shrink-0"
              width={120}
              height={120}
              priority
            />
            <div className="min-w-0">
              <p className="truncate font-display text-2xl text-[#14313a]">
                {brand.name}
              </p>
              <p className="truncate text-xs uppercase tracking-[0.25em] text-[#6a8480]">
                {brand.projectLabel}
              </p>
            </div>
          </a>

          <a
            href="/admin"
            className="rounded-full border border-[#2e6a69]/20 bg-white/70 px-4 py-2 text-sm font-semibold text-[#14313a] transition hover:border-[#2e6a69]/40 hover:text-[#2e6a69]"
          >
            Admin
          </a>
        </div>

        <nav
          aria-label="Section navigation"
          className="mt-4 flex gap-5 overflow-x-auto pb-1 text-sm font-medium text-[#264148]"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition hover:text-[#2e6a69]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
