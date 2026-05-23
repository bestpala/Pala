import type { Metadata } from "next";
import { getAllPosts, getPostsByTag, getAllTags } from "@/lib/posts";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { PostList } from "@/components/blog/PostList";
import { Tag } from "@/components/ui/Tag";
import Link from "next/link";

export const metadata: Metadata = {
  title: "写作",
  description: "边缘计算、AI Infra、开发者生态与技术社区的长期观察。",
};

type BlogPageProps = {
  searchParams: Promise<{ tag?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { tag } = await searchParams;
  const posts = tag ? getPostsByTag(tag) : getAllPosts();
  const tags = getAllTags();

  return (
    <>
      <PageHeader
        title="写作"
        description="边缘计算、云计算、AI Infra、开发者生态、技术社区与产业观察的长期记录。"
      />
      <section className="py-14 sm:py-16">
        <Container narrow>
          {tags.length > 0 && (
            <div className="mb-12 flex flex-wrap gap-x-4 gap-y-2 border-b border-border pb-8">
              <Link
                href="/blog"
                className={`text-sm ${!tag ? "text-foreground" : "text-muted-light hover:text-accent"}`}
              >
                全部
              </Link>
              {tags.map((t) => (
                <Tag key={t} label={t} href={`/blog?tag=${t}`} />
              ))}
            </div>
          )}
          {tag && (
            <p className="mb-8 text-sm text-muted">
              筛选标签：<span className="text-foreground">{tag}</span>
            </p>
          )}
          <PostList posts={posts} />
        </Container>
      </section>
    </>
  );
}
