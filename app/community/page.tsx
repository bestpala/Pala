import type { Metadata } from "next";
import { getCommunityData } from "@/lib/community";
import { siteConfig } from "@/site.config";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { Divider } from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "边缘计算社区",
  description:
    "边缘计算社区介绍、使命、关注方向、活动记录与加入方式。日常运营见 byjs.com.cn。",
};

export default function CommunityPage() {
  const data = getCommunityData();

  return (
    <>
      <PageHeader title={data.name} description={data.mission}>
        <div className="mt-8">
          <TextLink href={siteConfig.links.community} external>
            进入社区网站 →
          </TextLink>
        </div>
      </PageHeader>

      <Container narrow>
        <div className="py-14 sm:py-16">
          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-light">
              社区介绍
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              {data.introduction}
            </p>
          </section>

          <Divider className="my-12" />

          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-light">
              关注方向
            </h2>
            <ul className="mt-5 space-y-3">
              {data.focusAreas.map((area) => (
                <li
                  key={area}
                  className="border-l-2 border-border pl-4 text-muted"
                >
                  {area}
                </li>
              ))}
            </ul>
          </section>

          <Divider className="my-12" />

          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-light">
              活动记录
            </h2>
            <ul className="mt-5 space-y-8">
              {data.activities.map((activity) => (
                <li key={activity.title}>
                  <p className="text-xs text-muted-light">{activity.date}</p>
                  <h3 className="mt-1 font-medium text-foreground">
                    {activity.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {activity.description}
                  </p>
                  {activity.url && (
                    <div className="mt-2">
                      <TextLink href={activity.url} external className="text-sm">
                        了解更多
                      </TextLink>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <Divider className="my-12" />

          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-light">
              内容栏目
            </h2>
            <ul className="mt-5 space-y-6">
              {data.columns.map((column) => (
                <li key={column.title}>
                  <h3 className="font-medium text-foreground">
                    {column.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{column.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <Divider className="my-12" />

          <section>
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-light">
              加入方式
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              {data.join}
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-muted-light">
              合作方式
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              {data.collaboration}
            </p>
            <div className="mt-6">
              <TextLink href="/contact">联系合作 →</TextLink>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
