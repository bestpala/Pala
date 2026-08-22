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
            <span className="site-header__edition">A PERSONAL MAGAZINE</span>
          </Link>

          <nav className="site-header__desktop" aria-label="主导航">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href}>
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
