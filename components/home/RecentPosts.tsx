import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { postFormatLabels, postTopicLabels } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { Section } from "@/components/ui/Section";

export function RecentPosts() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <Section className="writing-index" containerClassName="max-w-6xl">
      <div className="editorial-heading">
        <div><p className="editorial-eyebrow font-mono">LATEST THINKING</p><h2>正在形成的<br />判断与问题</h2></div>
        <Link href="/blog" className="editorial-index-link">Browse all writing <ArrowUpRight aria-hidden="true" /></Link>
      </div>
      <ol>
        {posts.map((post, index) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <span className="writing-index__number font-mono">{String(index + 1).padStart(2, "0")}</span>
              <time className="font-mono">{formatDate(post.date)} · {postTopicLabels[post.topic]}</time>
              <div>
                <h3>{post.title}</h3>
                <p>{post.description} <span className="font-mono">{postFormatLabels[post.format]} · {post.readingTime}</span></p>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ol>
    </Section>
  );
}
