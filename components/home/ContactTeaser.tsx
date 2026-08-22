import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/site.config";
import { Section } from "@/components/ui/Section";

export function ContactTeaser() {
  return (
    <Section variant="invert" className="contact-stage" containerClassName="max-w-6xl">
      <div className="contact-stage__meta font-mono">
        <span>08 / NEXT MOVE</span>
        <span>SHANGHAI / CHINA</span>
      </div>
      <h2>LET’S BUILD<br /><span>THE NEXT SIGNAL.</span></h2>
      <div className="contact-stage__bottom">
        <p>如果你正在寻找懂技术、也懂品牌与内容落地的长期合作者，我们可以从一次具体的问题开始。</p>
        <div>
          <a href={`mailto:${siteConfig.links.email}`}>{siteConfig.links.email} <ArrowUpRight aria-hidden="true" /></a>
          <Link href="/contact">查看合作方式</Link>
        </div>
      </div>
    </Section>
  );
}

