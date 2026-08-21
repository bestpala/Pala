import { siteConfig } from "@/site.config";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function IdentityIntro() {
  const { proofPoints } = siteConfig;

  return (
    <Section variant="alt">
      <div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        <SectionLabel className="mb-0 lg:pt-1">职业定位</SectionLabel>
        <div>
          <p className="text-lg leading-[1.85] text-muted sm:text-xl sm:leading-[1.8]">
            {siteConfig.hero.intro}
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
            {proofPoints.map((item) => (
              <div key={item.label} className="bg-surface px-4 py-6 sm:px-5">
                <dt className="text-2xl font-medium tracking-tight text-foreground">
                  {item.value}
                </dt>
                <dd className="mt-2 text-xs leading-relaxed text-muted-light">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
