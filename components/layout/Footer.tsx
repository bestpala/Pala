import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";

export function Footer() {
  const { author, links, footerNav } = siteConfig;

  return (
    <footer className="mt-auto border-t border-border py-12">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">
              {author.name}
              <span className="mx-2 text-muted-light">·</span>
              {author.englishName}
            </p>
            <p className="mt-1 text-sm text-muted">{author.role}</p>
            <p className="mt-3 text-xs text-muted-light">
              {siteConfig.url.replace("https://", "")}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-8 text-sm text-muted">
          {links.email && (
            <TextLink href={`mailto:${links.email}`}>{links.email}</TextLink>
          )}
          {links.github && (
            <TextLink href={links.github} external>
              GitHub
            </TextLink>
          )}
          <TextLink href={links.rss}>RSS</TextLink>
          <TextLink href={links.conference} external>
            全球边缘计算大会
          </TextLink>
          <TextLink href={links.community} external>
            边缘计算社区
          </TextLink>
        </div>

        <p className="mt-8 text-xs text-muted-light">
          © {new Date().getFullYear()} {author.name}. {siteConfig.slogan}
        </p>
      </Container>
    </footer>
  );
}
