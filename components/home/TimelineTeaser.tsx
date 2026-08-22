import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";

const items = [
  { year: "To C", title: "Starbucks · 从日常体验理解品牌选择", type: "Consumer" },
  { year: "To C", title: "蝉大师 · 从增长现场理解内容与市场", type: "Growth" },
  { year: "To B", title: "优云 · 参与企业技术品牌从 0 到 1", type: "Enterprise" },
  { year: "To B", title: "青云 / KubeSphere · 在开源与企业之间搭建表达", type: "Open Source" },
  { year: "Community", title: "边缘计算社区 · 把长期关系做成基础设施", type: "Community" },
];

export function TimelineTeaser() {
  return (
    <Section variant="alt" className="career-timeline" containerClassName="max-w-6xl">
      <div className="career-timeline__layout">
        <div className="career-timeline__intro">
          <p className="editorial-eyebrow font-mono">WHERE I LEARNED</p>
          <h2>从消费者，<br />到公司与社区。</h2>
          <p>这不是一份职位清单，而是一条理解品牌如何被感知、被信任、被共同建设的路径。</p>
          <Link href="/about">Read my story <ArrowRight aria-hidden="true" /></Link>
        </div>

        <ol className="career-timeline__list">
          {items.map((item, index) => (
            <li key={`${item.year}-${item.title}`}>
              <span className="career-timeline__year font-inter">{item.year}</span>
              <span className="career-timeline__dot" aria-hidden="true" />
              <div>
                <span className="font-mono">{String(index + 1).padStart(2, "0")} / {item.type}</span>
                <p>{item.title}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
