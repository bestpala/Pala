import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/site.config";
import { Section } from "@/components/ui/Section";

export function ContactTeaser() {
  return (
    <Section variant="invert" className="contact-stage" containerClassName="max-w-6xl">
      <div className="contact-stage__meta font-mono">
        <span>KEEP THE CONVERSATION GOING</span>
        <span>PALA.CN</span>
      </div>
      <h2>IDEAS GROW<br /><span>IN CONVERSATION.</span></h2>
      <div className="contact-stage__bottom">
        <p>如果这里的某个问题也在困扰你，或者你想一起做内容、社区、访谈与品牌项目，欢迎从一封具体的邮件开始。</p>
        <div>
          <a href={`mailto:${siteConfig.links.email}`}>{siteConfig.links.email} <ArrowUpRight aria-hidden="true" /></a>
          <Link href="/about">About Pala</Link>
        </div>
      </div>
    </Section>
  );
}
