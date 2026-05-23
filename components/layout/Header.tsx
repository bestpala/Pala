import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="border-b border-border bg-background/90 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between gap-8">
          <Link
            href="/"
            className="group flex shrink-0 flex-col leading-none"
          >
            <span className="text-base font-medium tracking-tight text-foreground">
              {siteConfig.name}
            </span>
            <span className="mt-0.5 text-[11px] text-muted-light">
              {siteConfig.englishName}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="flex items-center gap-4 md:hidden">
            {siteConfig.nav.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted"
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
