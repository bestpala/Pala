import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllWorks } from "@/lib/works";
import { getAllProjects } from "@/lib/projects";
import { workTypeLabels, projectStatusLabels } from "@/lib/types";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Projects", description: "我参与建设的品牌、内容、社区与行业项目，以及它们留下的方法与问题。" };
export default function ProjectsPage() {
  const works = getAllWorks(); const projects = getAllProjects();
  return <><PageHeader title="Projects" description="Things I’ve helped build — 不只展示结果，也讲清楚它为什么存在、如何被推动，以及我从中学到了什么。" /><section className="project-stories"><Container narrow>
    <ol>{works.map((work, index) => <li key={work.slug}><Link href={`/projects/${work.slug}`}><div className="project-stories__meta font-mono"><span>0{index + 1}</span><span>{workTypeLabels[work.type]}</span></div><h2>{work.title}</h2><p>{work.summary}</p><div className="project-stories__role"><span>MY PART</span>{work.role}</div><span className="project-stories__link">Read project story <ArrowUpRight aria-hidden="true" /></span></Link></li>)}</ol>
    {projects.length > 0 && <div className="project-stories__ongoing"><p className="editorial-eyebrow font-mono">ONGOING / SMALLER BETS</p>{projects.map((project) => <article key={project.slug}><div><h3>{project.title}</h3><p>{project.summary}</p></div><span>{projectStatusLabels[project.status]}</span></article>)}</div>}
  </Container></section></>;
}
