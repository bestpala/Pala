import { getFeaturedPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import Link from "next/link";

export function RecentPosts() {
  const posts = getFeaturedPosts(6);

  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="mb-6 flex items-end justify-between gap-4">
          <SectionLabel>最近在写</SectionLabel>
          <TextLink href="/blog" className="text-sm">
            全部写作
          </TextLink>
        </div>
        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <time className="text-sm text-muted-light">
                  {formatDate(post.date)}
                </time>
                <h3 className="mt-2 text-xl font-medium leading-snug text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {post.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
