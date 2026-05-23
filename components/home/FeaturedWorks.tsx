import { getFeaturedWorks } from "@/lib/works";
import { workTypeLabels } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import Link from "next/link";

export function FeaturedWorks() {
  const works = getFeaturedWorks(4);

  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="mb-6 flex items-end justify-between gap-4">
          <SectionLabel>代表作品</SectionLabel>
          <TextLink href="/works" className="text-sm">
            全部作品
          </TextLink>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {works.map((work) => (
            <li key={work.slug}>
              <Link
                href="/works"
                className="group block py-5 transition-colors"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs text-muted-light">
                  <span>{formatDate(work.date)}</span>
                  <span>·</span>
                  <span>{workTypeLabels[work.type]}</span>
                </div>
                <h3 className="mt-2 text-lg font-medium text-foreground group-hover:text-accent">
                  {work.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                  {work.summary}
                </p>
                <p className="mt-2 text-xs text-muted-light">
                  {work.role}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
