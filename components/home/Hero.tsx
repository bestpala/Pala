import { siteConfig } from "@/site.config";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";

export function Hero() {
  const { author, hero, links, since } = siteConfig;

  return (
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-16">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm text-muted-light">
            自 {since} 年起 · 边缘计算 · 技术社区
          </p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            {author.name}
          </h1>
          <p className="mt-3 text-lg text-muted">{author.role}</p>
          <p className="mt-10 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            {hero.slogan}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
            {hero.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {links.email && (
              <TextLink href={`mailto:${links.email}`}>Email</TextLink>
            )}
            {links.github && (
              <TextLink href={links.github} external>
                GitHub
              </TextLink>
            )}
            <TextLink href={links.rss}>RSS</TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
