import { Section } from "@/components/ui/Section";

const chapters = [
  { label: "Consumers", title: "选择从感受开始", body: "在消费场景里学习体验、审美与记忆，理解人为什么愿意靠近一个品牌。" },
  { label: "Companies", title: "信任需要被解释", body: "在企业与技术场景里，把复杂产品翻译成清晰价值，让专业能力可以被理解。" },
  { label: "Communities", title: "关系带来长期复利", body: "在社区与大会里，让内容、连接与共同语言沉淀为可持续的行业基础设施。" },
];

export function NarrativeArc() {
  return <Section className="magazine-arc" containerClassName="max-w-6xl">
    <div className="editorial-heading"><div><p className="editorial-eyebrow font-mono">A THREAD THROUGH THE WORK</p><h2>Consumers → Companies<br />→ Communities</h2></div></div>
    <ol>{chapters.map((chapter, index) => <li key={chapter.label}><span className="font-mono">0{index + 1} / {chapter.label}</span><h3>{chapter.title}</h3><p>{chapter.body}</p></li>)}</ol>
  </Section>;
}
