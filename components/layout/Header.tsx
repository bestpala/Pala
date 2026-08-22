import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="site-header">
      <Container wide>
        <div className="site-header__inner">
          <Link href="/" className="site-header__brand">
            <span>{siteConfig.name}</span>
            <i aria-hidden="true" />
            <span>{siteConfig.slogan}</span>
          </Link>

          <nav className="site-header__desktop" aria-label="主导航">
            {siteConfig.nav.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <span className="font-mono">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

