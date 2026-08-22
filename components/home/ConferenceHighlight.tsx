import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getConferenceData } from "@/lib/conference";
import { siteConfig } from "@/site.config";
import { Section } from "@/components/ui/Section";

export function ConferenceHighlight() {
  const conference = getConferenceData();
  const proof = siteConfig.proofPoints[2];

  return (
    <Section variant="invert" id="conference" className="conference-panel" containerClassName="max-w-6xl">
      <div className="conference-panel__meta font-mono">
        <span>04 / INDUSTRY IP</span>
        <span>EDGE COMPUTING × AI INFRA</span>
      </div>
      <div className="conference-panel__hero">
        <p className="conference-panel__number">{proof.value.replace(" 届", "")}</p>
        <div>
          <h2>{conference.title}</h2>
          <p className="font-inter">{conference.subtitle}</p>
        </div>
      </div>
      <div className="conference-panel__bottom">
        <p>{conference.summary}</p>
        <div className="conference-panel__links">
          <Link href="/conference">大会档案 <ArrowUpRight aria-hidden="true" /></Link>
          <a href={siteConfig.links.conference} target="_blank" rel="noreferrer">GECC.CN <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
    </Section>
  );
}

