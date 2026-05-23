import type { Post } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Tag } from "@/components/ui/Tag";

type PostListProps = {
  posts: Post[];
};

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <p className="text-muted">暂无文章，敬请期待。</p>
    );
  }

  return (
    <ul className="space-y-12">
      {posts.map((post) => (
        <li key={post.slug}>
          <article>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-light">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h2 className="mt-2">
              <Link
                href={`/blog/${post.slug}`}
                className="text-xl font-medium leading-snug text-foreground transition-colors hover:text-accent sm:text-2xl"
              >
                {post.title}
              </Link>
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
          </article>
        </li>
      ))}
    </ul>
  );
}
