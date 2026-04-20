type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignmentClass =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <header className={alignmentClass}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#2e6a69]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-tight text-[#14313a] md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[#4b5d64] md:text-lg">
        {description}
      </p>
    </header>
  );
}

