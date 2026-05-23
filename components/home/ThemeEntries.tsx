import { siteConfig } from "@/site.config";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ThemeEntries() {
  return (
    <Section>
      <SectionLabel>关注主题</SectionLabel>
      <ul className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
        {siteConfig.themes.map((theme, index) => (
          <li key={theme.slug} className="bg-surface">
            <Link
              href={`/blog?tag=${theme.slug}`}
              className="group flex items-center justify-between px-5 py-5 transition-colors hover:bg-background-alt sm:px-6 sm:py-6"
            >
              <div className="flex items-baseline gap-4">
                <span className="post-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base text-foreground transition-colors group-hover:text-accent">
                  {theme.label}
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-light transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
