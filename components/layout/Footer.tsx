import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";

export function Footer() {
  const { author, links, footerNav, slogan } = siteConfig;

  return (
    <footer className="mt-auto border-t border-border bg-invert text-[#e8e8e4]">
      <Container wide className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_auto] lg:gap-20">
          <div>
            <p className="font-serif text-2xl font-medium tracking-tight">
              {slogan}
            </p>
            <p className="mt-4 text-sm text-invert-muted">
              {author.name}
              <span className="mx-2 opacity-40">·</span>
              {author.englishName}
              <span className="mx-2 opacity-40">·</span>
              {author.role}
            </p>
            <p className="mt-2 font-inter text-xs tracking-wide text-invert-muted">
              {siteConfig.url.replace("https://", "")}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-invert-muted transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-invert-border pt-8 text-sm">
          {links.email && (
            <TextLink href={`mailto:${links.email}`} invert>
              {links.email}
            </TextLink>
          )}
          {links.github && (
            <TextLink href={links.github} external invert>
              GitHub
            </TextLink>
          )}
          <TextLink href={links.rss} invert>
            RSS
          </TextLink>
          <TextLink href={links.conference} external invert>
            全球边缘计算大会
          </TextLink>
          <TextLink href={links.community} external invert>
            边缘计算社区
          </TextLink>
        </div>

        <p className="mt-10 font-inter text-[11px] tracking-wide text-invert-muted">
          © {new Date().getFullYear()} {author.name}
        </p>
      </Container>
    </footer>
  );
}
