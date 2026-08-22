import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { getAllWorks } from "@/lib/works";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SearchClient, type SearchItem } from "@/components/search/SearchClient";

export const metadata: Metadata = { title: "Search", description: "搜索 Pala.cn 的文章、笔记与项目。", robots: { index: false, follow: true } };
export default function SearchPage() {
  const items: SearchItem[] = [...getAllPosts().map((post) => ({ title: post.title, description: post.description, href: `/blog/${post.slug}`, kind: "Writing", keywords: `${post.topic} ${post.format} ${post.tags.join(" ")}` })), ...getAllWorks().map((work) => ({ title: work.title, description: work.summary, href: `/projects/${work.slug}`, kind: "Project", keywords: `${work.type} ${work.role}` }))];
  return <><PageHeader title="Search" description="从文章、笔记与项目故事中，重新找到一个曾经出现过的想法。" /><Container narrow><SearchClient items={items} /></Container></>;
}
