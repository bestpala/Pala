import { siteConfig } from "@/site.config";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";

export function ContactTeaser() {
  return (
    <Section variant="alt" className="!pb-24 sm:!pb-28">
      <SectionLabel>联系与合作</SectionLabel>
      <div className="grid gap-10 sm:grid-cols-2">
        {siteConfig.contactScenarios.slice(0, 4).map((scenario, index) => (
          <div
            key={scenario.title}
            className="border-t border-border pt-6 sm:pt-8"
          >
            <p className="post-index">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 text-lg font-medium text-foreground">
              {scenario.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {scenario.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 border-t border-border pt-10">
        <TextLink href="/contact">查看全部合作方式 →</TextLink>
      </div>
    </Section>
  );
}
