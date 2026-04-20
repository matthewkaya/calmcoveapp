import { CmsImage } from "@/components/ui/CmsImage";
import type { PersonasContent } from "@/lib/types";

type Persona = PersonasContent["items"][number];

export function PersonaCard({ persona }: { persona: Persona }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_24px_60px_rgba(22,49,58,0.08)] backdrop-blur">
      <CmsImage
        src={persona.image}
        alt={persona.imageAlt}
        className="h-64 w-full object-cover"
        width={800}
        height={900}
      />
      <div className="space-y-5 p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-3xl text-[#14313a]">
              {persona.name}
            </h3>
            <p className="mt-1 text-sm uppercase tracking-[0.25em] text-[#73928d]">
              Age {persona.age}
            </p>
          </div>
          <span className="rounded-full bg-[#e8f2ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2e6a69]">
            Persona
          </span>
        </div>

        <p className="text-sm leading-7 text-[#4b5d64]">{persona.lifestyle}</p>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#14313a]">
              Pain Points
            </h4>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#4b5d64]">
              {persona.painPoints.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#14313a]">
              Goals
            </h4>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#4b5d64]">
              {persona.goals.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#14313a]">
              Platforms
            </h4>
            <p className="mt-3 text-sm leading-6 text-[#4b5d64]">
              {persona.platformsUsed.join(" • ")}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#14313a]">
              Purchase Behavior
            </h4>
            <p className="mt-3 text-sm leading-6 text-[#4b5d64]">
              {persona.purchaseBehavior}
            </p>
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-[#f7f3eb] p-5">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#14313a]">
            Narrative
          </h4>
          <p className="mt-3 text-sm leading-7 text-[#4b5d64]">
            {persona.narrative}
          </p>
        </div>
      </div>
    </article>
  );
}
