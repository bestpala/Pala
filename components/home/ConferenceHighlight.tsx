import { getConferenceData } from "@/lib/conference";
import { siteConfig } from "@/site.config";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";

export function ConferenceHighlight() {
  const conference = getConferenceData();
  const statsPreview = conference.stats.slice(0, 3);

  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionLabel>全球边缘计算大会</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-medium tracking-tight text-foreground">
              {conference.title}
            </h2>
            <p className="mt-2 text-muted">{conference.subtitle}</p>
            <p className="mt-6 leading-relaxed text-muted">{conference.summary}</p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              <TextLink href="/conference">查看大会档案</TextLink>
              <TextLink href={siteConfig.links.conference} external>
                大会官网 gecc.cn
              </TextLink>
            </div>
          </div>
          <dl className="flex gap-8 lg:flex-col lg:gap-6 lg:border-l lg:border-border lg:pl-10">
            {statsPreview.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-wider text-muted-light">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-2xl font-medium tabular-nums text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
