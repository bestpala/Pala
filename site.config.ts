export const siteConfig = {
  name: "史皓天",
  englishName: "Pala",
  slogan: "相信边缘的力量",
  title: "史皓天 · 技术品牌传播与市场运营",
  description:
    "史皓天的技术品牌作品集。7 年品牌传播、内容策划、市场活动与开发者社区运营经验。",
  url: "https://pala.cn",
  since: "2018",

  author: {
    name: "史皓天",
    englishName: "Pala",
    role: "品牌宣传经理 · 技术品牌传播负责人",
    email: "hello@pala.cn",
    github: "https://github.com/bestpala/Pala",
  },

  links: {
    email: "hello@pala.cn",
    github: "https://github.com/bestpala/Pala",
    rss: "/rss.xml",
    conference: "https://gecc.cn",
    community: "https://byjs.com.cn",
  },

  nav: [
    { label: "作品", href: "/works" },
    { label: "关于", href: "/about" },
    { label: "写作", href: "/blog" },
    { label: "大会", href: "/conference" },
    { label: "社区", href: "/community" },
    { label: "联系", href: "/contact" },
  ],

  footerNav: [
    { label: "项目", href: "/projects" },
    { label: "档案", href: "/archive" },
    { label: "写作", href: "/blog" },
    { label: "联系", href: "/contact" },
  ],

  hero: {
    slogan: "把复杂技术，讲成清晰、有传播力的品牌故事",
    tagline:
      "7 年技术与硬科技品牌经验，覆盖品牌定位、产品传播、内容体系、行业活动与开发者社区运营。",
    intro:
      "我先后参与企业技术品牌从 0 到 1 建设、KubeSphere 开源项目品牌传播，并联合创办边缘计算社区。我的工作贯穿品牌表达、内容策划、活动落地与行业资源连接，既能搭建传播框架，也能持续完成具体内容。",
  },

  proofPoints: [
    { value: "7 年", label: "技术品牌与市场传播" },
    { value: "30%", label: "KubeSphere 内容阅读量提升" },
    { value: "9 届", label: "全球边缘计算大会" },
    { value: "10 万+", label: "边缘计算行业社区" },
  ],

  themes: [
    { label: "边缘计算", slug: "edge-computing" },
    { label: "云计算", slug: "cloud" },
    { label: "AI Infra", slug: "ai-infra" },
    { label: "开发者生态", slug: "developer-ecosystem" },
    { label: "技术社区", slug: "community" },
    { label: "行业观察", slug: "industry" },
    { label: "产品思考", slug: "product" },
    { label: "创业与组织", slug: "organization" },
  ],

  contactScenarios: [
    {
      title: "演讲邀请",
      description: "边缘计算、AI Infra、技术社区与产业基础设施相关主题。",
    },
    {
      title: "社区共建",
      description: "边缘计算社区活动、内容栏目与生态协作。",
    },
    {
      title: "媒体采访",
      description: "行业观察、大会与社区建设相关报道。",
    },
    {
      title: "内容转载",
      description: "请通过邮件联系，注明出处与原文链接。",
    },
    {
      title: "产业合作",
      description: "大会、社区、研究内容与生态合作洽谈。",
    },
  ],

  locale: "zh-CN",
  defaultOgImage: "/og/default.png",
} as const;

export type SiteConfig = typeof siteConfig;
