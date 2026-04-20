import { PostCard } from "@/components/ui/PostCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { SocialPostsContent } from "@/lib/types";

export function SocialPostsSection({
  socialPosts,
}: {
  socialPosts: SocialPostsContent;
}) {
  return (
    <section id="social-posts" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Section 07"
          title={socialPosts.title}
          description={socialPosts.intro}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {socialPosts.posts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

