import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedTimeline } from "@/lib/timeline";
import { Section } from "@/components/ui/Section";

const typeLabels: Record<string, string> = {
  conference: "大会",
  community: "社区",
  work: "作品",
  post: "文章",
  project: "项目",
};

export function TimelineTeaser() {
  const items = getFeaturedTimeline(6);

  return (
    <Section variant="alt" className="career-timeline" containerClassName="max-w-6xl">
      <div className="career-timeline__layout">
        <div className="career-timeline__intro">
          <p className="editorial-eyebrow font-mono">03 / EXPERIENCE</p>
          <h2>从内容执行，<br />到品牌系统。</h2>
          <p>职业路径不是职位列表，而是一条持续扩大影响力半径的实践轨迹。</p>
          <Link href="/archive">完整档案 <ArrowRight aria-hidden="true" /></Link>
        </div>

        <ol className="career-timeline__list">
          {items.map((item, index) => (
            <li key={`${item.year}-${item.title}`}>
              <span className="career-timeline__year font-inter">{item.year}</span>
              <span className="career-timeline__dot" aria-hidden="true" />
              <div>
                <span className="font-mono">{String(index + 1).padStart(2, "0")} / {typeLabels[item.type] ?? item.type}</span>
                {item.href ? <Link href={item.href}>{item.title}</Link> : <p>{item.title}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

