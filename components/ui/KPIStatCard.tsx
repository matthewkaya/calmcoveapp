type KPIStatCardProps = {
  label: string;
  value: string;
  detail?: string;
  trend?: string;
};

export function KPIStatCard({ label, value, detail, trend }: KPIStatCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-white/70 bg-white/85 p-5 shadow-[0_14px_35px_rgba(22,49,58,0.08)] backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6a8480]">
        {label}
      </p>
      <p className="mt-4 text-3xl font-semibold text-[#14313a]">{value}</p>
      {trend ? (
        <p className="mt-2 text-sm font-medium text-[#2e6a69]">{trend}</p>
      ) : null}
      {detail ? <p className="mt-3 text-sm leading-6 text-[#4b5d64]">{detail}</p> : null}
    </article>
  );
}

