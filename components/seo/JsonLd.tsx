import { siteConfig } from "@/site.config";

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    alternateName: siteConfig.author.englishName,
    url: siteConfig.url,
    email: siteConfig.author.email,
    jobTitle: "品牌实践者、内容创作者与社区 Builder",
    description: siteConfig.description,
    sameAs: [siteConfig.links.github, siteConfig.links.community, siteConfig.links.conference],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const jsonLd = { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, url: siteConfig.url, description: siteConfig.description, author: { "@type": "Person", name: siteConfig.author.name } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
