export const siteConfig = {
  name: "PALA",
  englishName: "Pala",
  slogan: "Brands, Technology & People",
  title: "PALA — Brands, Technology & People",
  description: "一份关于品牌如何在技术、商业与人之间建立认知与信任的长期个人刊物。",
  url: "https://pala.cn",
  since: "2018",

  author: {
    name: "史皓天",
    englishName: "Pala",
    role: "品牌实践者、内容创作者与社区 Builder",
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
    { label: "Writing", href: "/blog" },
    { label: "Topics", href: "/topics" },
    { label: "Projects", href: "/projects" },
    { label: "Now", href: "/now" },
    { label: "About", href: "/about" },
    { label: "Search", href: "/search" },
  ],

  footerNav: [
    { label: "Writing", href: "/blog" },
    { label: "Topics", href: "/topics" },
    { label: "Projects", href: "/projects" },
    { label: "Archive", href: "/archive" },
    { label: "Now", href: "/now" },
    { label: "About", href: "/about" },
  ],

  hero: {
    slogan: "Brands, technology, and the people who make them matter.",
    tagline: "品牌不只是一套表达。它是在技术、商业与人之间，持续建立认知与信任的过程。",
    intro: "这里记录我对品牌、技术、内容、社区与商业的长期观察，也保存那些把想法变成项目的现场经验。",
  },

  proofPoints: [
    { value: "To C", label: "从消费者品牌理解体验与选择" },
    { value: "To B", label: "从技术品牌理解产品与信任" },
    { value: "Community", label: "从社区实践理解关系与共同语言" },
  ],

  themes: [
    { label: "Brand", slug: "brand", description: "品牌如何建立认知、记忆与长期资产。" },
    { label: "Technology", slug: "technology", description: "技术趋势背后的产品、商业与信任问题。" },
    { label: "Community", slug: "community", description: "社区如何降低摩擦、形成关系与共同语言。" },
    { label: "Content", slug: "content", description: "内容如何从一次传播变成可复用的品牌资产。" },
    { label: "Business", slug: "business", description: "公司、产品、增长、组织与市场的长期观察。" },
  ],

  contactScenarios: [
    { title: "内容与采访", description: "品牌、技术、社区与产业相关的采访、写作和内容合作。" },
    { title: "社区共建", description: "行业社区、内容栏目、线下活动与生态协作。" },
    { title: "分享与对谈", description: "围绕品牌传播、技术社区和行业活动的经验分享。" },
    { title: "项目合作", description: "品牌叙事、内容体系与行业项目的合作讨论。" },
  ],

  locale: "zh-CN",
  defaultOgImage: "/og.png",
} as const;

export type SiteConfig = typeof siteConfig;
