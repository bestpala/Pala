import { getFeaturedTimeline } from "@/lib/timeline";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import Link from "next/link";

const typeLabels: Record<string, string> = {
  conference: "大会",
  community: "社区",
  work: "作品",
  post: "文章",
  project: "项目",
};

export function TimelineTeaser() {
  const items = getFeaturedTimeline(6);

  return (
    <Section>
      <div className="mb-8 flex items-end justify-between gap-4">
        <SectionLabel className="mb-0">时间线</SectionLabel>
        <TextLink href="/archive" className="text-sm">
          完整档案
        </TextLink>
      </div>
      <ol className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={`${item.year}-${item.title}`} className="bg-surface p-6 sm:p-7">
            <p className="font-mono text-xs tabular-nums tracking-widest text-muted-light">
              {item.year}
            </p>
            {item.href ? (
              <Link
                href={item.href}
                className="mt-3 block text-base font-medium leading-snug text-foreground transition-colors hover:text-accent"
              >
                {item.title}
              </Link>
            ) : (
              <p className="mt-3 text-base font-medium leading-snug text-foreground">
                {item.title}
              </p>
            )}
            <p className="mt-2 font-inter text-[11px] uppercase tracking-wider text-muted-light">
              {typeLabels[item.type] ?? item.type}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
