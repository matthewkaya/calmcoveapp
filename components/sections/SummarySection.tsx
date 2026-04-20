import type { HomeContent } from "@/lib/types";

export function SummarySection({ summary }: { summary: HomeContent["summary"] }) {
  return (
    <section id="summary" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/70 bg-[linear-gradient(135deg,#15313b_0%,#2c6665_55%,#8dc9c1_100%)] p-8 text-white shadow-[0_30px_90px_rgba(22,49,58,0.18)] md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d7efeb]">
            Section 12
          </p>
          <h2 className="font-display text-5xl leading-tight text-white md:text-6xl">
            {summary.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-[#e8f5f2] md:text-lg">
            {summary.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            {summary.successPoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 text-sm leading-7 text-[#e8f5f2]"
              >
                {point}
              </div>
            ))}
          </div>

          <aside className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d7efeb]">
              Group Members
            </p>
            <ul className="mt-6 space-y-4">
              {summary.groupMembers.map((member) => (
                <li key={member} className="font-display text-3xl text-white">
                  {member}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
