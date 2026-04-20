import { CmsImage } from "@/components/ui/CmsImage";

type CampaignCardProps = {
  title: string;
  body: string;
  cta: string;
  visual: string;
  alt: string;
};

export function CampaignCard({
  title,
  body,
  cta,
  visual,
  alt,
}: CampaignCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/85 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur">
      <CmsImage
        src={visual}
        alt={alt}
        className="h-64 w-full object-cover"
        width={1000}
        height={900}
      />
      <div className="space-y-4 p-6">
        <h3 className="font-display text-3xl text-[#14313a]">{title}</h3>
        <p className="text-sm leading-7 text-[#4b5d64]">{body}</p>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e6a69]">
          {cta}
        </p>
      </div>
    </article>
  );
}
