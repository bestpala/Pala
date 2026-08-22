import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/site.config";
import { Section } from "@/components/ui/Section";

export function ThemeEntries() {
  return (
    <Section variant="alt" className="signal-matrix" containerClassName="max-w-6xl">
      <div className="signal-matrix__heading">
        <p className="editorial-eyebrow font-mono">WHAT I EXPLORE</p>
        <h2>五个持续追问的<br />主题</h2>
      </div>
      <ul>
        {siteConfig.themes.map((theme, index) => (
          <li key={theme.slug}>
            <Link href={`/topics/${theme.slug}`}>
              <span className="font-mono">{String(index + 1).padStart(2, "0")}</span>
              <strong>{theme.label}</strong><small>{theme.description}</small>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
