import { PersonaCard } from "@/components/ui/PersonaCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { PersonasContent } from "@/lib/types";

export function PersonasSection({ personas }: { personas: PersonasContent }) {
  return (
    <section id="personas" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Section 03"
          title={personas.title}
          description={personas.intro}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {personas.items.map((persona) => (
            <PersonaCard key={persona.name} persona={persona} />
          ))}
        </div>
      </div>
    </section>
  );
}

