import { siteConfig } from "@/site.config";
import { Section } from "@/components/ui/Section";

export function IdentityIntro() {
  return (
    <Section variant="alt" className="editorial-intro" containerClassName="max-w-6xl">
      <div className="editorial-intro__top">
        <p className="editorial-eyebrow font-mono">01 / POSITIONING</p>
        <p className="editorial-intro__copy">{siteConfig.hero.intro}</p>
      </div>

      <dl className="proof-grid">
        {siteConfig.proofPoints.map((item, index) => (
          <div key={item.label} className="proof-grid__item">
            <span className="proof-grid__index font-mono">{String(index + 1).padStart(2, "0")}</span>
            <dt>{item.value}</dt>
            <dd>{item.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

