import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/site.config";
import { Section } from "@/components/ui/Section";

export function ThemeEntries() {
  return (
    <Section variant="alt" className="signal-matrix" containerClassName="max-w-6xl">
      <div className="signal-matrix__heading">
        <p className="editorial-eyebrow font-mono">06 / SIGNAL MATRIX</p>
        <h2>长期关注的<br />技术与产业信号</h2>
      </div>
      <ul>
        {siteConfig.themes.map((theme, index) => (
          <li key={theme.slug}>
            <Link href={`/blog?tag=${theme.slug}`}>
              <span className="font-mono">{String(index + 1).padStart(2, "0")}</span>
              <strong>{theme.label}</strong>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

