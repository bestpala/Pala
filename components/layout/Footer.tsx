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
            <p className="font-serif text-3xl font-medium tracking-tight">PALA</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-invert-muted">{slogan}。一份由 {author.name} 持续更新的个人刊物。</p>
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
          <TextLink href={links.conference} external invert>GECC</TextLink>
          <TextLink href={links.community} external invert>Edge Community</TextLink>
        </div>

        <p className="mt-10 font-inter text-[11px] tracking-wide text-invert-muted">
          © {new Date().getFullYear()} {author.name} · Built as a living archive
        </p>
      </Container>
    </footer>
  );
}
