import type { Post } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Tag } from "@/components/ui/Tag";

type PostListProps = {
  posts: Post[];
};

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return <p className="text-muted">暂无文章，敬请期待。</p>;
  }

  return (
    <ul>
      {posts.map((post, index) => (
        <li key={post.slug} className="border-t border-border first:border-t-0">
          <article>
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-4 py-8 sm:grid-cols-[4rem_1fr] sm:gap-10 sm:py-10"
            >
              <span className="post-index pt-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-wide text-muted-light">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="text-border-strong">·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-3 font-serif text-xl font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {post.description}
                </p>
                {post.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                    {post.tags.map((tag) => (
                      <Tag
                        key={tag}
                        label={tag}
                        href={`/blog?tag=${tag}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}
