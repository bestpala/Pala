import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import { projectStatusLabels } from "@/lib/types";
import { formatDate, isExternalUrl } from "@/lib/utils";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "项目",
  description: "正在做与过去做过的技术、社区与内容项目。",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <PageHeader
        title="项目"
        description="技术项目、社区平台与内容工程——持续进行中的工作。"
      />
      <section className="py-14 sm:py-16">
        <Container narrow>
          <ul className="divide-y divide-border border-y border-border">
            {projects.map((project) => (
              <li key={project.slug} className="py-6 sm:py-7">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs text-muted-light">
                  <span>{formatDate(project.date)}</span>
                  <span>·</span>
                  <span>{projectStatusLabels[project.status]}</span>
                </div>
                <h2 className="mt-2 text-lg font-medium text-foreground">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
                <p className="mt-2 text-xs text-muted-light">{project.role}</p>
                {project.tags.length > 0 && (
                  <p className="mt-3 text-xs text-muted-light">
                    {project.tags.join(" · ")}
                  </p>
                )}
                {project.links && project.links.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-4 text-sm">
                    {project.links.map((link) => (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          target={
                            isExternalUrl(link.url) ? "_blank" : undefined
                          }
                          rel={
                            isExternalUrl(link.url)
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="inline-flex items-center gap-1 text-accent hover:underline"
                        >
                          {link.label}
                          {isExternalUrl(link.url) && (
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
