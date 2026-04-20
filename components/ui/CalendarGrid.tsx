import type { ContentCalendar } from "@/lib/types";

export function CalendarGrid({ entries }: { entries: ContentCalendar["entries"] }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_22px_60px_rgba(22,49,58,0.08)] backdrop-blur">
      <div className="hidden grid-cols-[0.8fr_1fr_1fr_0.9fr_1.4fr_1fr] gap-4 border-b border-[#d7e3e0] bg-[#eef4f2] px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#27424a] lg:grid">
        <span>Date</span>
        <span>Platform</span>
        <span>Theme</span>
        <span>Format</span>
        <span>Purpose</span>
        <span>CTA</span>
      </div>

      <div className="divide-y divide-[#e5ece8]">
        {entries.map((entry) => (
          <article
            key={`${entry.date}-${entry.platform}-${entry.theme}`}
            className="grid gap-3 px-6 py-5 lg:grid-cols-[0.8fr_1fr_1fr_0.9fr_1.4fr_1fr] lg:items-start lg:gap-4"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b8481] lg:hidden">
                Date
              </p>
              <p className="text-sm font-semibold text-[#14313a]">{entry.date}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b8481] lg:hidden">
                Platform
              </p>
              <p className="text-sm text-[#4b5d64]">{entry.platform}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b8481] lg:hidden">
                Theme
              </p>
              <p className="text-sm text-[#4b5d64]">{entry.theme}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b8481] lg:hidden">
                Format
              </p>
              <p className="text-sm text-[#4b5d64]">{entry.format}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b8481] lg:hidden">
                Purpose
              </p>
              <p className="text-sm text-[#4b5d64]">{entry.purpose}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b8481] lg:hidden">
                CTA
              </p>
              <p className="text-sm font-medium text-[#2e6a69]">{entry.cta}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

