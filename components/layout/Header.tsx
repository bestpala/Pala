import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/75 backdrop-blur-md backdrop-saturate-150">
      <Container wide>
        <div className="flex h-[4.25rem] items-center justify-between gap-8">
          <Link href="/" className="group flex shrink-0 items-baseline gap-3">
            <span className="text-[15px] font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
              {siteConfig.name}
            </span>
            <span className="hidden h-3 w-px bg-border sm:block" aria-hidden />
            <span className="hidden font-inter text-[11px] tracking-[0.12em] text-muted-light sm:inline">
              {siteConfig.slogan}
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="flex items-center gap-5 md:hidden">
            {siteConfig.nav.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] text-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
