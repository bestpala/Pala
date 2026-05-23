export const siteConfig = {
  name: "皓天",
  englishName: "Pala",
  slogan: "相信边缘的力量",
  title: "皓天 · 相信边缘的力量",
  description:
    "相信边缘的力量。边缘计算社区负责人皓天的长期记录：大会、社区、作品与技术写作。",
  url: "https://pala.cn",
  since: "2018",

  author: {
    name: "皓天",
    englishName: "Pala",
    role: "边缘计算社区负责人",
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
    { label: "写作", href: "/blog" },
    { label: "大会", href: "/conference" },
    { label: "作品", href: "/works" },
    { label: "社区", href: "/community" },
    { label: "关于", href: "/about" },
    { label: "联系", href: "/contact" },
  ],

  footerNav: [
    { label: "项目", href: "/projects" },
    { label: "档案", href: "/archive" },
    { label: "写作", href: "/blog" },
    { label: "联系", href: "/contact" },
  ],

  hero: {
    slogan: "相信边缘的力量",
    tagline:
      "这里记录我对边缘计算、技术社区、开发者生态与产业基础设施的长期观察。",
    intro:
      "我是皓天，边缘计算社区负责人。相信边缘的力量——技术从云中心走向边缘与真实场景，产业与开发者也在边缘相遇。曾主理全球边缘计算大会，长期建设边缘计算社区，通过写作与项目留下可检索的行业档案。",
  },

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
