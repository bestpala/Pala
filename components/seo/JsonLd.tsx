import { siteConfig } from "@/site.config";

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    alternateName: siteConfig.author.englishName,
    url: siteConfig.url,
    email: siteConfig.author.email,
    jobTitle: siteConfig.author.role,
    description: siteConfig.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
