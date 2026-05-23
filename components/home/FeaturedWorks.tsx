import { getFeaturedWorks } from "@/lib/works";
import { workTypeLabels } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import Link from "next/link";

export function FeaturedWorks() {
  const works = getFeaturedWorks(4);

  return (
    <Section variant="alt">
      <div className="mb-8 flex items-end justify-between gap-4">
        <SectionLabel className="mb-0">代表作品</SectionLabel>
        <TextLink href="/works" className="text-sm">
          全部作品
        </TextLink>
      </div>
      <ul className="divide-y divide-border">
        {works.map((work, index) => (
          <li key={work.slug}>
            <Link
              href="/works"
              className="group grid gap-4 py-7 transition-colors sm:grid-cols-[4rem_1fr] sm:gap-8 sm:py-8"
            >
              <span className="post-index pt-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs text-muted-light">
                  <span>{formatDate(work.date)}</span>
                  <span className="text-border-strong">·</span>
                  <span>{workTypeLabels[work.type]}</span>
                </div>
                <h3 className="mt-2 text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
                  {work.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                  {work.summary}
                </p>
                <p className="mt-2 text-xs text-muted-light">{work.role}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
