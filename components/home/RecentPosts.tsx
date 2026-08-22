import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { Section } from "@/components/ui/Section";

export function RecentPosts() {
  const posts = getFeaturedPosts(6);

  return (
    <Section className="writing-index" containerClassName="max-w-6xl">
      <div className="editorial-heading">
        <div>
          <p className="editorial-eyebrow font-mono">07 / WRITING</p>
          <h2>把观察变成<br />可复用的判断</h2>
        </div>
        <Link href="/blog" className="editorial-index-link">全部写作 <ArrowUpRight aria-hidden="true" /></Link>
      </div>
      <ol>
        {posts.map((post, index) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <span className="writing-index__number font-mono">{String(index + 1).padStart(2, "0")}</span>
              <time className="font-mono">{formatDate(post.date)}</time>
              <div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ol>
    </Section>
  );
}

