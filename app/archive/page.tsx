import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { getArchiveByYear } from "@/lib/archive";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "档案",
  description: `按年份归档的文章、作品、项目与重要节点。${siteConfig.slogan}`,
};

export default function ArchivePage() {
  const archive = getArchiveByYear();

  return (
    <>
      <PageHeader
        title="档案"
        description="按年份沉淀的文章、作品、项目与活动——个人品牌的时间轴。"
      />
      <section className="py-14 sm:py-16">
        <Container narrow>
          {archive.length === 0 ? (
            <p className="text-muted">暂无归档内容。</p>
          ) : (
            <div className="space-y-16">
              {archive.map((yearGroup) => (
                <div key={yearGroup.year}>
                  <h2 className="text-3xl font-medium tabular-nums text-foreground">
                    {yearGroup.year}
                  </h2>
                  <ul className="mt-6 divide-y divide-border border-y border-border">
                    {yearGroup.items.map((item, index) => (
                      <li key={`${item.href}-${index}`} className="py-4">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                          <Link
                            href={item.href}
                            className="font-medium text-foreground hover:text-accent"
                          >
                            {item.title}
                          </Link>
                          <div className="flex shrink-0 gap-3 text-xs text-muted-light">
                            <span>{item.type}</span>
                            <time dateTime={item.date}>
                              {formatDate(item.date, {
                                month: "short",
                                day: "numeric",
                              })}
                            </time>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
