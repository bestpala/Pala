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
        <li key={work.slug} className="py-6 sm:py-7">
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
              <p className="mt-2 text-xs text-muted-light">{work.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {work.impact}
              </p>
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
