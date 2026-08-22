import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllWorks, getWorkBySlug } from "@/lib/works";
import { workTypeLabels } from "@/lib/types";
import { siteConfig } from "@/site.config";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return getAllWorks().map((work) => ({ slug: work.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const work = getWorkBySlug((await params).slug); if (!work) return {}; return { title: work.title, description: work.summary, alternates: { canonical: `/projects/${work.slug}` }, openGraph: { title: work.title, description: work.summary, url: `${siteConfig.url}/projects/${work.slug}`, images: [] }, twitter: { images: [] } }; }
const reflections: Record<string, { why: string; learned: string }> = {
  "kubesphere-brand": { why: "开源技术的价值常常很难被非技术受众理解。这个项目关心的不是制造声量，而是让产品能力、社区实践与真实使用者之间形成稳定的表达。", learned: "技术品牌的核心不是把语言变简单，而是在不损失专业性的前提下，找到能被共同使用的叙事与内容节奏。" },
  "edge-community": { why: "边缘计算需要一个让分散从业者持续交换经验、形成行业共同语言的地方。社区从内容和活动开始，逐渐变成连接开发者、企业与高校的长期节点。", learned: "社区不是流量池，而是一套降低协作摩擦的关系基础设施；真正的资产是持续出现的参与者与共同记忆。" },
  "global-edge-conference": { why: "行业大会的价值不只在一天的议程，而在于把趋势、实践者和真实问题组织到同一个现场，让行业看见自己正在发生什么。", learned: "一个行业 IP 的形成来自稳定主题、可信内容和一次次兑现承诺，而不是单次活动规模。" },
  "edge-infra-observation": { why: "复杂技术如果没有进入更广泛的公共语言，就很难形成真正的行业认知。图书系列尝试为产业读者提供一条更清晰的理解入口。", learned: "科普不是削弱复杂度，而是重建理解顺序；内容产品需要同时照顾知识结构、阅读体验与长期传播。" },
};
export default async function ProjectStoryPage({ params }: Props) {
  const work = getWorkBySlug((await params).slug); if (!work) notFound(); const reflection = reflections[work.slug];
  return <article className="project-story"><header><Container narrow><Link href="/projects" className="text-sm text-accent">← All projects</Link><p className="font-mono">{workTypeLabels[work.type]} / PROJECT STORY</p><h1>{work.title}</h1><p>{work.summary}</p></Container></header><Container narrow><div className="project-story__body">
    <section><h2>Why it mattered</h2><p>{reflection?.why ?? work.summary}</p></section><section><h2>My part</h2><p>{work.role}</p></section><section><h2>What happened</h2><p>{work.impact}</p></section><section><h2>What I learned</h2><p>{reflection?.learned ?? "这段实践让我继续思考，如何把一次交付变成可积累的方法、关系与内容资产。"}</p></section>
    {work.links?.length ? <section><h2>Visit</h2><div className="flex flex-wrap gap-5">{work.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="text-accent">{link.label} <ArrowUpRight className="inline h-4 w-4" /></a>)}</div></section> : null}
  </div></Container></article>;
}
