import { CalendarGrid } from "@/components/ui/CalendarGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { ContentCalendar, HomeContent } from "@/lib/types";

type ContentStrategySectionProps = {
  strategy: HomeContent["contentStrategy"];
  calendar: ContentCalendar;
};

export function ContentStrategySection({
  strategy,
  calendar,
}: ContentStrategySectionProps) {
  return (
    <section id="content-strategy" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Section 06"
          title={strategy.title}
          description={strategy.intro}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          <article className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur">
            <h3 className="font-display text-3xl text-[#14313a]">Content Pillars</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#4b5d64]">
              {strategy.contentPillars.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur">
            <h3 className="font-display text-3xl text-[#14313a]">Post Formats</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#4b5d64]">
              {strategy.postFormats.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur">
            <h3 className="font-display text-3xl text-[#14313a]">Frequency</h3>
            <p className="mt-5 text-sm leading-7 text-[#4b5d64]">
              {strategy.postingFrequency}
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur">
            <h3 className="font-display text-3xl text-[#14313a]">Engagement</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#4b5d64]">
              {strategy.engagementMethods.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-8">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#2e6a69]">
                One Month Content Calendar
              </p>
              <h3 className="mt-2 font-display text-4xl text-[#14313a]">
                {calendar.month}
              </h3>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[#4b5d64]">
              {strategy.calendarIntro}
            </p>
          </div>
          <CalendarGrid entries={calendar.entries} />
        </div>
      </div>
    </section>
  );
}

