import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { Divider } from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "关于",
  description: "史皓天的职业经历与能力概览，涵盖技术品牌传播、内容策划、市场活动与开发者社区运营。",
};

export default function AboutPage() {
  const { author, links, hero } = siteConfig;

  return (
    <>
      <PageHeader
        title={`关于${author.name}`}
        description="7 年技术品牌、市场传播与开发者社区运营经验"
      />

      <Container narrow>
        <div className="prose max-w-none py-14 sm:py-16">
          <section>
            <h2>职业定位</h2>
            <p>
              我是{author.name}（{author.englishName}），{author.role}。
              {author.englishName} 是我的英文名，也是这个站的域名 pala.cn。
            </p>
            <p>{hero.intro}</p>
          </section>

          <Divider />

          <section>
            <h2>近期经历</h2>
            <p>
              2024 年 9 月至 2026 年 6 月，我在北京青云科技负责 KubeSphere
              开源项目的品牌传播与技术内容。工作覆盖品牌定位、内容栏目、城市沙龙与海外渠道。
            </p>
            <p>
              期间发布技术周刊 30 余期、双周报 10 余期，整体阅读量提升 30%。
              我也组织了 4 场城市技术沙龙，连接 300 余名开发者，并推动 GitHub 发帖量增长 20%。
            </p>
          </section>

          <Divider />

          <section>
            <h2>长期项目</h2>
            <p>
              2019 年至 2024 年，我联合创办边缘计算社区，从品牌定位、内容传播、
              行业活动和合作资源开始，逐步建立 10 万余人规模的行业社区。
            </p>
            <p>
              <TextLink href={links.community} external>
                边缘计算社区（byjs.com.cn）
              </TextLink>
              是这个项目持续公开的载体。
            </p>
          </section>

          <Divider />

          <section>
            <h2>代表成果</h2>
            <ul>
              <li>
                发起并主理{" "}
                <TextLink href={links.conference} external>
                  全球边缘计算大会（gecc.cn）
                </TextLink>
                ，成功举办 9 届，累计参会 4500 余人；
              </li>
              <li>策划并出版《一本书读懂边缘计算》系列，累计销量破万册；</li>
              <li>曾参与优云品牌从 0 到 1 建设，也负责过 ASO 行业的品牌内容与活动；</li>
              <li>长期撰写技术传播、行业观察和产品市场内容。</li>
            </ul>
          </section>

          <Divider />

          <section>
            <h2>能承担的工作</h2>
            <ul>
              <li>企业品牌定位、对外口径与品牌资料</li>
              <li>产品卖点梳理、内容策划与传播方案</li>
              <li>公众号、海外社交媒体与开发者社区运营</li>
              <li>行业大会、技术沙龙、展会与市场活动支持</li>
            </ul>
          </section>

          <Divider />

          <section>
            <h2>联系</h2>
            <p>如果你正在招聘技术品牌、市场传播或内容运营岗位，欢迎通过邮件联系我。</p>
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
