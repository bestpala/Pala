import { getFeaturedTimeline } from "@/lib/timeline";
import { Container } from "@/components/ui/Container";
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
    <section className="py-14 sm:py-16">
      <Container>
        <div className="mb-6 flex items-end justify-between gap-4">
          <SectionLabel>时间线</SectionLabel>
          <TextLink href="/archive" className="text-sm">
            完整档案
          </TextLink>
        </div>
        <ol className="relative border-l border-border pl-6">
          {items.map((item) => (
            <li key={`${item.year}-${item.title}`} className="pb-8 last:pb-0">
              <span className="absolute -left-[5px] mt-1.5 h-2 w-2 rounded-full bg-border" />
              <p className="text-xs tabular-nums text-muted-light">{item.year}</p>
              {item.href ? (
                <Link
                  href={item.href}
                  className="mt-1 block text-base font-medium text-foreground hover:text-accent"
                >
                  {item.title}
                </Link>
              ) : (
                <p className="mt-1 text-base font-medium text-foreground">
                  {item.title}
                </p>
              )}
              <p className="mt-0.5 text-xs text-muted-light">
                {typeLabels[item.type] ?? item.type}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
