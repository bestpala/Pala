import type { Metadata } from "next";
import { getConferenceData } from "@/lib/conference";
import { siteConfig } from "@/site.config";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { Divider } from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "全球边缘计算大会",
  description:
    "全球边缘计算大会案例档案：定位、背景、影响力、嘉宾议题与内容资产。完整资料见 gecc.cn。",
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-12 first:pt-0">
      <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-light">
        {title}
      </h2>
      <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

export default function ConferencePage() {
  const data = getConferenceData();

  return (
    <>
      <PageHeader title={data.title} description={data.subtitle}>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          <TextLink href={siteConfig.links.conference} external>
            访问官网 gecc.cn
          </TextLink>
          <TextLink href={siteConfig.links.community} external>
            边缘计算社区
          </TextLink>
        </div>
      </PageHeader>

      <Container narrow>
        <div className="py-14 sm:py-16">
          <dl className="grid gap-8 border-y border-border py-10 sm:grid-cols-3">
            {data.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-wider text-muted-light">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-3xl font-medium tabular-nums text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <Section id="summary" title="简介">
            <p>{data.summary}</p>
          </Section>
          <Divider />

          <Section id="positioning" title="定位">
            <p>{data.positioning}</p>
          </Section>
          <Divider />

          <Section id="background" title="举办背景">
            <p>{data.background}</p>
          </Section>
          <Divider />

          <section id="themes" className="scroll-mt-24 py-12">
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-light">
              核心主题
            </h2>
            <ul className="mt-5 space-y-3">
              {data.themes.map((theme) => (
                <li
                  key={theme}
                  className="border-l-2 border-border pl-4 text-muted"
                >
                  {theme}
                </li>
              ))}
            </ul>
          </section>
          <Divider />

          <section id="editions" className="scroll-mt-24 py-12">
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-light">
              历届概览
            </h2>
            <ul className="mt-5 divide-y divide-border border-y border-border">
              {data.editions.map((edition) => (
                <li
                  key={edition.year}
                  className="flex flex-wrap items-baseline justify-between gap-2 py-4"
                >
                  <span className="font-medium text-foreground">
                    {edition.year}
                  </span>
                  <span className="text-muted">{edition.theme}</span>
                </li>
              ))}
            </ul>
          </section>
          <Divider />

          <section id="speakers" className="scroll-mt-24 py-12">
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-light">
              嘉宾与议题
            </h2>
            <ul className="mt-5 space-y-6">
              {data.speakers.map((speaker) => (
                <li key={speaker.name}>
                  <p className="font-medium text-foreground">{speaker.name}</p>
                  <p className="text-sm text-muted">{speaker.title}</p>
                  {speaker.topic && (
                    <p className="mt-1 text-sm text-muted-light">
                      {speaker.topic}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
          <Divider />

          {data.agenda && (
            <>
              <section id="agenda" className="scroll-mt-24 py-12">
                <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-light">
                  议程结构
                </h2>
                <div className="mt-5 space-y-8">
                  {data.agenda.map((block) => (
                    <div key={block.title}>
                      <h3 className="font-medium text-foreground">
                        {block.title}
                      </h3>
                      <ul className="mt-3 space-y-2 text-muted">
                        {block.items.map((item) => (
                          <li key={item}>· {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
              <Divider />
            </>
          )}

          <section id="role" className="scroll-mt-24 py-12">
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-light">
              我的角色与贡献
            </h2>
            <ul className="mt-5 space-y-8">
              {data.myRole.map((item) => (
                <li key={item.title}>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <Divider />

          <section id="assets" className="scroll-mt-24 py-12">
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-light">
              内容资产
            </h2>
            <ul className="mt-5 space-y-3">
              {data.assets.map((asset) => (
                <li key={asset.url}>
                  <TextLink href={asset.url} external>
                    {asset.title}
                  </TextLink>
                  <span className="ml-2 text-xs text-muted-light">
                    {asset.type}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {data.media.length > 0 && (
            <>
              <Divider />
              <section id="media" className="scroll-mt-24 py-12">
                <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-light">
                  相关报道
                </h2>
                <ul className="mt-5 space-y-4">
                  {data.media.map((item) => (
                    <li key={item.url}>
                      <TextLink href={item.url} external>
                        {item.title}
                      </TextLink>
                      <p className="mt-0.5 text-xs text-muted-light">
                        {item.source}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          <div className="mt-8 border-t border-border pt-12 pb-20">
            <p className="text-muted">
              完整议程、报名与历届资料请访问大会官网。
            </p>
            <div className="mt-4">
              <TextLink href={data.website} external>
                gecc.cn →
              </TextLink>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
