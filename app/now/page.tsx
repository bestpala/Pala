import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Now", description: "Pala 当前正在关注、建设与学习的事情。" };
export default function NowPage() { return <><PageHeader title="Now" description="What I’m focused on now — 一页会持续更新的近况，而不是一条需要表演的动态流。" /><Container narrow><div className="now-page">
  <p className="now-page__updated font-mono">UPDATED / AUGUST 2026</p>
  <section><h2>正在建设</h2><p>把 Pala.cn 从一份求职作品集，重构为关于品牌、技术、内容、社区与商业的长期个人刊物；同时继续整理边缘计算社区与行业大会积累下来的公共内容。</p></section>
  <section><h2>正在写</h2><p>关注技术品牌如何建立信任、社区为什么是一种基础设施，以及内容如何从单次发布变成可持续复用的知识资产。</p></section>
  <section><h2>正在寻找</h2><p>愿意认真讨论品牌、技术与社区长期价值的人，也欢迎具体的内容、访谈、分享或项目合作。</p></section>
  <p className="now-page__foot">如果你想从更完整的文章开始，可以去 <Link href="/blog">Writing</Link>；如果想了解实践现场，可以去 <Link href="/projects">Projects</Link>。</p>
  </div></Container></> }
