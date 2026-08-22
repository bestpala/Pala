import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getFeaturedPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

const themes = ["Brand", "Technology", "Community", "Content", "Business"];

export function Hero() {
  const [latest] = getFeaturedPosts(1);

  return (
    <section className="magazine-hero" aria-labelledby="magazine-hero-title">
      <Container wide>
        <div className="magazine-hero__issue font-mono">
          <span>PALA.CN / AN INDEPENDENT JOURNAL</span>
          <span>BRANDS · TECHNOLOGY · PEOPLE</span>
        </div>

        <p className="magazine-hero__masthead" aria-hidden="true">PALA</p>

        <div className="magazine-hero__body">
          <div className="magazine-hero__identity">
            <p className="editorial-eyebrow font-mono">IDEAS / PROJECTS / FIELD NOTES</p>
            <h1 id="magazine-hero-title">
              Brands, technology,<br />
              <em>and the people</em> who<br />
              make them matter.
            </h1>
            <p>关于品牌如何在技术、商业与人之间建立认知、信任与长期关系。</p>
            <Link href="/about">About Pala <ArrowDownRight aria-hidden="true" /></Link>
          </div>

          {latest && (
            <article className="magazine-hero__latest">
              <div className="magazine-hero__latest-meta font-mono">
                <span>LATEST THINKING</span>
                <time dateTime={latest.date}>{formatDate(latest.date)}</time>
              </div>
              <h2><Link href={`/blog/${latest.slug}`}>{latest.title}</Link></h2>
              <p>{latest.description}</p>
              <Link href={`/blog/${latest.slug}`} className="magazine-hero__read">
                READ THE ESSAY <ArrowUpRight aria-hidden="true" />
              </Link>
            </article>
          )}
        </div>

        <nav className="magazine-hero__themes" aria-label="长期关注主题">
          <span className="font-mono">EXPLORE</span>
          {themes.map((theme, index) => (
            <Link key={theme} href={`/blog?topic=${theme.toLowerCase()}`}>
              <small className="font-mono">0{index + 1}</small>{theme}
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}
