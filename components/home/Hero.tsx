import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/site.config";

const disciplines = ["TECH BRAND", "AI INFRA", "EDGE COMPUTING"];

export function Hero() {
  const { author, hero, links, since } = siteConfig;

  return (
    <section className="control-hero" aria-labelledby="home-hero-title">
      <div className="control-hero__grid" aria-hidden="true" />
      <Container wide className="control-hero__inner">
        <div className="control-hero__status font-mono">
          <span>PALA / {since}—2026</span>
          <span className="control-hero__signal"><i aria-hidden="true" /> BRAND SYSTEM ONLINE</span>
          <span className="control-hero__coordinates">31.2304° N / 121.4737° E</span>
        </div>

        <div className="control-hero__headline">
          <p className="control-hero__kicker font-mono">BRAND OPERATOR FOR COMPLEX TECHNOLOGY</p>
          <h1 id="home-hero-title">
            <span>BUILDING</span>
            <span className="control-hero__headline-row">TECH BRANDS <ArrowDownRight aria-hidden="true" /></span>
          </h1>
        </div>

        <div className="control-hero__lower">
          <div className="control-hero__identity">
            <p className="control-hero__monogram" aria-hidden="true">P</p>
            <div>
              <p className="control-hero__name">{author.name} <span>/ {author.englishName}</span></p>
              <p className="control-hero__role">{author.role}</p>
            </div>
          </div>

          <div className="control-hero__statement">
            <p className="font-serif">{hero.slogan}</p>
            <p>{hero.tagline}</p>
            <div className="control-hero__actions">
              <Link href="/works" className="control-button control-button--primary">查看代表作品 <ArrowRight aria-hidden="true" /></Link>
              <Link href="/about" className="control-button">了解职业经历</Link>
            </div>
          </div>
        </div>

        <div className="control-hero__footer font-mono">
          <div className="control-hero__disciplines" aria-label="专注领域">
            {disciplines.map((item, index) => <span key={item}>{String(index + 1).padStart(2, "0")} {item}</span>)}
          </div>
          <div className="control-hero__links">
            {links.email && <a href={`mailto:${links.email}`}>EMAIL ↗</a>}
            {links.github && <a href={links.github} target="_blank" rel="noreferrer">GITHUB ↗</a>}
          </div>
        </div>
      </Container>
    </section>
  );
}
