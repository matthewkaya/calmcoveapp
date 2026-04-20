import { CmsImage } from "@/components/ui/CmsImage";
import type { SocialPostsContent } from "@/lib/types";

type Post = SocialPostsContent["posts"][number];

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/85 shadow-[0_18px_45px_rgba(22,49,58,0.08)] backdrop-blur">
      <CmsImage
        src={post.visual}
        alt={post.visualAlt}
        className="h-60 w-full object-cover"
        width={900}
        height={900}
      />
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-2xl text-[#14313a]">{post.title}</h3>
          <span className="rounded-full bg-[#eef4f2] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2e6a69]">
            {post.objective}
          </span>
        </div>
        <p className="text-sm leading-7 text-[#4b5d64]">{post.caption}</p>
        <p className="text-sm font-medium text-[#2e6a69]">
          {post.hashtags.join(" ")}
        </p>
        <p className="text-sm font-semibold text-[#14313a]">{post.cta}</p>
      </div>
    </article>
  );
}
