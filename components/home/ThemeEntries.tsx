import { siteConfig } from "@/site.config";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ThemeEntries() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionLabel>关注主题</SectionLabel>
        <ul className="divide-y divide-border border-y border-border">
          {siteConfig.themes.map((theme) => (
            <li key={theme.slug}>
              <Link
                href={`/blog?tag=${theme.slug}`}
                className="group flex items-center justify-between py-4 transition-colors"
              >
                <span className="text-base text-foreground group-hover:text-accent">
                  {theme.label}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-light transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
