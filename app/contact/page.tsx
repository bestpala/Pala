import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";

export const metadata: Metadata = {
  title: "联系",
  description:
    "演讲邀请、社区共建、媒体采访、内容转载与产业合作联系方式。",
};

export default function ContactPage() {
  const { author, links, contactScenarios } = siteConfig;

  return (
    <>
      <PageHeader
        title="联系与合作"
        description="如果你希望就以下场景建立连接，欢迎通过邮件联系。"
      />

      <section className="py-14 sm:py-16">
        <Container narrow>
          <ul className="space-y-10">
            {contactScenarios.map((scenario) => (
              <li
                key={scenario.title}
                className="border-b border-border pb-10 last:border-0"
              >
                <h2 className="text-lg font-medium text-foreground">
                  {scenario.title}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                  {scenario.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-16 border-t border-border pt-12">
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-light">
              直接联系
            </h2>
            <div className="mt-6 space-y-3 text-base">
              {links.email && (
                <p>
                  <TextLink href={`mailto:${links.email}`}>
                    {links.email}
                  </TextLink>
                </p>
              )}
              {links.github && (
                <p>
                  <TextLink href={links.github} external>
                    GitHub
                  </TextLink>
                </p>
              )}
              <p>
                <TextLink href={links.rss}>RSS 订阅</TextLink>
              </p>
            </div>
          </div>

          <div className="mt-12 text-sm text-muted">
            <p>
              内容转载请注明作者 {author.name} 与原文链接。演讲与社区合作请提前
              2–4 周联系，以便安排议程与资源。
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
