import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/site.config";
import { getPostsByTopic } from "@/lib/posts";
import type { PostTopic } from "@/lib/types";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Topics", description: "贯穿 Pala.cn 的五个长期研究主题。" };
export default function TopicsPage() { return <><PageHeader title="Topics" description="不是一次性的栏目，而是五个会被长期追问、彼此连接的主题。" /><section className="topics-page"><Container narrow><ol>{siteConfig.themes.map((theme, index) => { const count = getPostsByTopic(theme.slug as PostTopic).length; return <li key={theme.slug}><Link href={`/topics/${theme.slug}`}><span className="font-mono">0{index + 1}</span><div><h2>{theme.label}</h2><p>{theme.description}</p></div><small>{count} {count === 1 ? "piece" : "pieces"}</small><ArrowUpRight aria-hidden="true" /></Link></li> })}</ol></Container></section></> }
