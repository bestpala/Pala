import { getFeaturedPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import Link from "next/link";

export function RecentPosts() {
  const posts = getFeaturedPosts(6);

  return (
    <Section>
      <div className="mb-8 flex items-end justify-between gap-4">
        <SectionLabel className="mb-0">最近在写</SectionLabel>
        <TextLink href="/blog" className="text-sm">
          全部写作
        </TextLink>
      </div>
      <ul>
        {posts.map((post, index) => (
          <li
            key={post.slug}
            className="border-t border-border first:border-t-0"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-4 py-8 transition-colors sm:grid-cols-[4rem_1fr] sm:gap-10 sm:py-10"
            >
              <span className="post-index pt-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <time className="font-mono text-xs tracking-wide text-muted-light">
                  {formatDate(post.date)}
                </time>
                <h3 className="mt-3 font-serif text-xl font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {post.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
