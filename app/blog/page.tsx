import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { postFormatLabels, postTopicLabels, type PostFormat, type PostTopic } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "Writing", description: "关于品牌、技术、社区、内容与商业的文章、案例和现场笔记。" };
type Props = { searchParams: Promise<{ topic?: string; format?: string }> };

export default async function BlogPage({ searchParams }: Props) {
  const filters = await searchParams;
  const allPosts = getAllPosts();
  const posts = allPosts.filter((post) => (!filters.topic || post.topic === filters.topic) && (!filters.format || post.format === filters.format));
  const [lead, ...rest] = posts;

  return <>
    <PageHeader title="Writing" description="Essays, cases, field notes and ideas in progress — 写下长期问题，也保留思考发生的现场。" />
    <section className="magazine-index"><Container narrow>
      <div className="magazine-filters" aria-label="文章筛选">
        <Link href="/blog" className={!filters.topic && !filters.format ? "is-active" : ""}>All</Link>
        {(Object.keys(postTopicLabels) as PostTopic[]).map((topic) => <Link key={topic} href={`/blog?topic=${topic}`} className={filters.topic === topic ? "is-active" : ""}>{postTopicLabels[topic]}</Link>)}
        {(Object.keys(postFormatLabels) as PostFormat[]).map((format) => <Link key={format} href={`/blog?format=${format}`} className={filters.format === format ? "is-active" : ""}>{postFormatLabels[format]}</Link>)}
      </div>
      {lead ? <>
        <article className="magazine-index__lead"><p className="font-mono">FEATURED / {postTopicLabels[lead.topic]} / {formatDate(lead.date)}</p><h2><Link href={`/blog/${lead.slug}`}>{lead.title}</Link></h2><p>{lead.description}</p><Link href={`/blog/${lead.slug}`}>Read the piece <ArrowUpRight aria-hidden="true" /></Link></article>
        <ol className="magazine-index__list">{rest.map((post, index) => <li key={post.slug}><Link href={`/blog/${post.slug}`}><span className="font-mono">{String(index + 2).padStart(2, "0")}</span><div><p className="font-mono">{postTopicLabels[post.topic]} · {postFormatLabels[post.format]} · {post.readingTime}</p><h2>{post.title}</h2><p>{post.description}</p></div><time dateTime={post.date}>{formatDate(post.date)}</time></Link></li>)}</ol>
      </> : <p className="py-20 text-muted">这个分类还没有公开文章。新的内容正在路上。</p>}
    </Container></section>
  </>;
}
