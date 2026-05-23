import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { Divider } from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "关于",
  description: `${siteConfig.slogan}。皓天（Pala）— 边缘计算社区负责人，全球边缘计算大会主理人。`,
};

export default function AboutPage() {
  const { author, links, hero } = siteConfig;

  return (
    <>
      <PageHeader
        title={`关于${author.name}`}
        description={siteConfig.slogan}
      />

      <Container narrow>
        <div className="prose max-w-none py-14 sm:py-16">
          <section>
            <h2>我是谁</h2>
            <p>
              我是{author.name}（{author.englishName}），{author.role}。
              {author.englishName} 是我的英文名，也是这个站的域名 pala.cn。
            </p>
            <p>{hero.intro}</p>
          </section>

          <Divider />

          <section>
            <h2>为什么关注边缘计算</h2>
            <p>
              云计算把算力集中到极致之后，真实世界的问题又把人带向边缘：延迟、
              隐私、离线、成本、场景化部署。边缘计算不是「云的对立面」，而是
              基础设施自然延伸的一翼。
            </p>
            <p>
              我关注它，是因为这里同时有技术深度、产业变化与开发者生态的交汇——
              值得被长期记录，而不只是一次性热点。
            </p>
          </section>

          <Divider />

          <section>
            <h2>为什么做社区</h2>
            <p>
              技术扩散最快的方式，往往不是一篇官宣，而是一个能持续对话的结构。
              社区降低的是协作摩擦：让实践者看见彼此，让产业方理解开发者，
              让写作与活动形成可检索的时间档案。
            </p>
            <p>
              <TextLink href={links.community} external>
                边缘计算社区（byjs.com.cn）
              </TextLink>
              是我投入最多的公共产品之一。
            </p>
          </section>

          <Divider />

          <section>
            <h2>做过的重要事情</h2>
            <ul>
              <li>
                发起并主理{" "}
                <TextLink href={links.conference} external>
                  全球边缘计算大会（gecc.cn）
                </TextLink>
                ，建设行业聚会与内容资产；
              </li>
              <li>负责边缘计算社区的长期运营与生态连接；</li>
              <li>持续写作，记录边缘计算、AI Infra 与开发者生态观察；</li>
              <li>通过 pala.cn 沉淀个人思想、项目与行业档案。</li>
            </ul>
          </section>

          <Divider />

          <section>
            <h2>现在关注什么</h2>
            <ul>
              <li>边缘推理下沉与 AI Infra 分工</li>
              <li>云边协同与分布式系统实践</li>
              <li>开发者工具链与开源生态</li>
              <li>技术社区如何沉淀为基础设施</li>
            </ul>
          </section>

          <Divider />

          <section>
            <h2>希望连接的人</h2>
            <p>如果你属于以下任意一类，我很乐意建立连接：</p>
            <ul>
              <li>在边缘、云边协同或 AI Infra 一线实践的开发者与架构师；</li>
              <li>建设技术社区、开发者生态的运营者与组织者；</li>
              <li>关注基础设施演进的产业方与研究者；</li>
              <li>愿意做深度内容、演讲与生态合作的朋友。</li>
            </ul>
            <p className="mt-6">
              <TextLink href="/contact">联系我 →</TextLink>
              <span className="mx-2 text-muted-light">·</span>
              <TextLink href="/archive">查看时间档案 →</TextLink>
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
