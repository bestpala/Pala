import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";

const quickLinks = [
  { label: "写作", href: "/blog" },
  { label: "大会", href: "/conference" },
  { label: "作品", href: "/works" },
  { label: "社区", href: "/community" },
  { label: "关于", href: "/about" },
];

export function Hero() {
  const { author, hero, links, since } = siteConfig;

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <Container wide className="relative">
        <div className="flex min-h-[min(88vh,760px)] flex-col justify-end pb-16 pt-20 sm:pb-20 sm:pt-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,1.1fr)] lg:items-end lg:gap-16">
            <div>
              <p className="font-mono text-xs tracking-widest text-muted-light">
                SINCE {since}
                <span className="mx-2 text-border-strong">/</span>
                EDGE · COMMUNITY · INFRA
              </p>
              <h1 className="mt-6 text-[clamp(2.75rem,8vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground">
                {author.name}
              </h1>
              <p className="mt-4 text-lg text-muted sm:text-xl">{author.role}</p>
              <p className="mt-2 font-inter text-sm tracking-wide text-muted-light">
                {author.englishName} · pala.cn
              </p>
            </div>

            <div className="lg:pb-2">
              <p className="font-serif text-[clamp(1.75rem,4.5vw,2.75rem)] font-medium leading-[1.25] tracking-[-0.02em] text-foreground">
                {hero.slogan}
              </p>
              <p className="mt-6 max-w-xl text-base leading-[1.8] text-muted sm:text-lg">
                {hero.tagline}
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-border bg-surface/80 px-4 py-2 text-sm text-muted backdrop-blur-sm transition-colors hover:border-border-strong hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
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
        </div>
      </Container>
    </section>
  );
}
