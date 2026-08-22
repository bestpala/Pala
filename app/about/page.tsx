import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = { title: "About", description: "关于 Pala：从消费者品牌、企业技术品牌到行业社区的一条实践路径。" };
const chapters = [
  ["Consumers", "我最早在 Starbucks 与蝉大师相关的消费、内容和增长场景里工作。那段经验让我看见：人并不是先理解一套品牌理论，再做出选择；他们往往先感受到体验、语气与关系。"],
  ["Companies", "后来进入优云与青云 / KubeSphere 这样的企业技术环境，我开始处理另一种问题：复杂产品如何被准确解释，专业能力如何变成可信的品牌认知。"],
  ["Communities", "在边缘计算社区和全球边缘计算大会的长期实践里，我逐渐理解，品牌也可以是一种关系基础设施。内容、活动和共同语言，让分散的人开始彼此认识并持续协作。"],
];

export default function AboutPage() {
  return <><PageHeader title="About Pala" description="品牌实践者、内容创作者与社区 Builder。这里不是一份展开的简历，而是我如何理解品牌、技术与人的故事。" />
    <article className="about-story"><Container narrow>
      <div className="about-story__opening"><p>我是史皓天，也使用 Pala 这个名字。</p><p>我长期做的事情，是在品牌、技术、内容与社区之间建立连接：让复杂的产品更容易被理解，让零散的经验形成公共语言，也让一次项目留下可以继续生长的资产。</p></div>
      <div className="about-story__chapters">{chapters.map(([title, body], index) => <section key={title}><span className="font-mono">0{index + 1}</span><h2>{title}</h2><p>{body}</p></section>)}</div>
      <section className="about-story__beliefs"><p className="editorial-eyebrow font-mono">WHAT I BELIEVE</p><h2>品牌不是装饰在产品外面的故事。</h2><p>它是公司如何理解自己、如何解释价值、如何兑现承诺，以及人们如何在一次次接触中形成信任。内容是这种信任的载体，社区则让信任从单向传播变成共同建设。</p></section>
      <section className="about-story__now"><h2>What I’m doing now</h2><p>我正在把过去分散在项目、文章和现场里的经验，整理成一份可以长期阅读、检索和复用的个人刊物。</p><div><Link href="/now">See what I’m doing now →</Link><Link href="/projects">Explore selected projects →</Link><a href={`mailto:${siteConfig.links.email}`}>Write to me →</a></div></section>
    </Container></article>
  </>;
}
