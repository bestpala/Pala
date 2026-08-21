import type { Work } from "@/lib/types";
import { workTypeLabels } from "@/lib/types";
import { formatDate, isExternalUrl } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type WorkListProps = {
  works: Work[];
};

export function WorkList({ works }: WorkListProps) {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {works.map((work) => (
        <li id={work.slug} key={work.slug} className="scroll-mt-24 py-8 sm:py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs text-muted-light">
                <span>{formatDate(work.date)}</span>
                <span>·</span>
                <span>{workTypeLabels[work.type]}</span>
              </div>
              <h2 className="mt-2 text-lg font-medium text-foreground">
                {work.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {work.summary}
              </p>
              <dl className="mt-5 grid gap-4 border-l-2 border-accent/70 pl-4 text-sm sm:grid-cols-2 sm:gap-8">
                <div>
                  <dt className="font-inter text-[11px] uppercase tracking-[0.16em] text-muted-light">我的职责</dt>
                  <dd className="mt-2 leading-relaxed text-foreground">{work.role}</dd>
                </div>
                <div>
                  <dt className="font-inter text-[11px] uppercase tracking-[0.16em] text-muted-light">结果与影响</dt>
                  <dd className="mt-2 leading-relaxed text-muted">{work.impact}</dd>
                </div>
              </dl>
            </div>
            {work.links && work.links.length > 0 && (
              <ul className="flex shrink-0 flex-col gap-2 text-sm">
                {work.links.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target={isExternalUrl(link.url) ? "_blank" : undefined}
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
          </div>
        </li>
      ))}
    </ul>
  );
}
