import { siteConfig } from "@/site.config";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function IdentityIntro() {
  return (
    <Section variant="alt">
      <div className="grid gap-8 lg:grid-cols-[200px_1fr] lg:gap-16">
        <SectionLabel className="mb-0 lg:pt-1">关于我</SectionLabel>
        <p className="text-lg leading-[1.85] text-muted sm:text-xl sm:leading-[1.8]">
          {siteConfig.hero.intro}
        </p>
      </div>
    </Section>
  );
}
