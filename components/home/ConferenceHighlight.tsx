import { getConferenceData } from "@/lib/conference";
import { siteConfig } from "@/site.config";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";

export function ConferenceHighlight() {
  const conference = getConferenceData();
  const statsPreview = conference.stats.slice(0, 3);

  return (
    <Section variant="invert" id="conference">
      <SectionLabel invert>全球边缘计算大会</SectionLabel>
      <div className="grid gap-12 lg:grid-cols-[1.2fr_auto] lg:gap-20">
        <div>
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            {conference.title}
          </h2>
          <p className="mt-3 font-inter text-sm tracking-wide text-invert-muted">
            {conference.subtitle}
          </p>
          <p className="mt-8 max-w-xl text-base leading-[1.85] text-invert-muted">
            {conference.summary}
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <TextLink href="/conference" invert>
              查看大会档案
            </TextLink>
            <TextLink href={siteConfig.links.conference} external invert>
              大会官网 gecc.cn
            </TextLink>
          </div>
        </div>

        <dl className="grid grid-cols-3 gap-6 border-t border-invert-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          {statsPreview.map((stat) => (
            <div key={stat.label}>
              <dt className="font-inter text-[10px] uppercase tracking-[0.18em] text-invert-muted">
                {stat.label}
              </dt>
              <dd className="mt-2 font-serif text-2xl font-medium tabular-nums sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
