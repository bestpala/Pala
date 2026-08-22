import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { getPostsByTopic } from "@/lib/posts";
import type { PostTopic } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return siteConfig.themes.map((theme) => ({ slug: theme.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const theme = siteConfig.themes.find((item) => item.slug === slug); return theme ? { title: theme.label, description: theme.description } : {}; }
export default async function TopicPage({ params }: Props) { const slug = (await params).slug; const theme = siteConfig.themes.find((item) => item.slug === slug); if (!theme) notFound(); const posts = getPostsByTopic(slug as PostTopic); return <><PageHeader title={theme.label} description={theme.description} /><section className="topic-detail"><Container narrow><Link href="/topics" className="text-sm text-accent">← All topics</Link><ol>{posts.map((post) => <li key={post.slug}><Link href={`/blog/${post.slug}`}><time dateTime={post.date}>{formatDate(post.date)}</time><h2>{post.title}</h2><p>{post.description}</p></Link></li>)}</ol>{!posts.length && <p className="py-20 text-muted">这个主题的第一篇文章正在写。</p>}</Container></section></> }
