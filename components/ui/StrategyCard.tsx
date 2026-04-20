type StrategyCardProps = {
  title: string;
  eyebrow: string;
  description: string;
  bullets: string[];
};

export function StrategyCard({
  title,
  eyebrow,
  description,
  bullets,
}: StrategyCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/70 bg-white/80 p-7 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2e6a69]">
        {eyebrow}
      </p>
      <h3 className="mt-4 font-display text-3xl text-[#14313a]">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#4b5d64]">{description}</p>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-[#27424a]">
        {bullets.map((bullet) => (
          <li key={bullet}>• {bullet}</li>
        ))}
      </ul>
    </article>
  );
}

