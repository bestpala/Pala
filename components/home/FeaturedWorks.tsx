import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedWorks } from "@/lib/works";
import { workTypeLabels } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { Section } from "@/components/ui/Section";

export function FeaturedWorks() {
  const [leadWork, ...otherWorks] = getFeaturedWorks(4);

  return (
    <Section className="work-showcase" containerClassName="max-w-6xl">
      <div className="editorial-heading">
        <div>
          <p className="editorial-eyebrow font-mono">02 / SELECTED WORK</p>
          <h2>复杂技术的<br />品牌化实践</h2>
        </div>
        <Link href="/works" className="editorial-index-link">全部作品 <ArrowUpRight aria-hidden="true" /></Link>
      </div>

      {leadWork && (
        <Link href={`/works#${leadWork.slug}`} className="lead-case">
          <div className="lead-case__visual" aria-hidden="true">
            <span className="font-mono">CASE / 01</span>
            <strong>KS</strong>
            <span className="lead-case__orbit">OPEN SOURCE<br />BRAND SYSTEM</span>
          </div>
          <div className="lead-case__content">
            <div className="lead-case__meta font-mono">
              <span>{formatDate(leadWork.date)}</span>
              <span>{workTypeLabels[leadWork.type]}</span>
            </div>
            <h3>{leadWork.title}</h3>
            <p className="lead-case__summary">{leadWork.summary}</p>
            <dl>
              <div><dt>ROLE</dt><dd>{leadWork.role}</dd></div>
              <div><dt>IMPACT</dt><dd>{leadWork.impact}</dd></div>
            </dl>
            <span className="lead-case__action">VIEW CASE <ArrowUpRight aria-hidden="true" /></span>
          </div>
        </Link>
      )}

      <ol className="case-index">
        {otherWorks.map((work, index) => (
          <li key={work.slug}>
            <Link href={`/works#${work.slug}`}>
              <span className="case-index__number font-mono">0{index + 2}</span>
              <div className="case-index__title">
                <span className="font-mono">{workTypeLabels[work.type]} / {formatDate(work.date)}</span>
                <h3>{work.title}</h3>
              </div>
              <p className="case-index__role">{work.role}</p>
              <p className="case-index__impact">{work.impact}</p>
              <ArrowUpRight className="case-index__arrow" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ol>
    </Section>
  );
}

