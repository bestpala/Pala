import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getCommunityData } from "@/lib/community";
import { siteConfig } from "@/site.config";
import { Section } from "@/components/ui/Section";

export function CommunityTeaser() {
  const community = getCommunityData();
  const activities = community.activities.slice(0, 2);

  return (
    <Section className="community-panel" containerClassName="max-w-6xl">
      <div className="community-panel__header">
        <p className="editorial-eyebrow font-mono">05 / COMMUNITY</p>
        <p className="community-panel__count font-inter">100K<span>+</span></p>
        <p className="font-mono">MEMBERS / BUILDERS / PARTNERS</p>
      </div>
      <div className="community-panel__layout">
        <div className="community-panel__intro">
          <h2>{community.name}</h2>
          <p>{community.mission}</p>
          <div>
            <Link href="/community">了解社区 <ArrowUpRight aria-hidden="true" /></Link>
            <a href={siteConfig.links.community} target="_blank" rel="noreferrer">BYJS.COM.CN <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <ol className="community-panel__activity">
          {activities.map((activity, index) => (
            <li key={activity.title}>
              <div><span className="font-mono">0{index + 1}</span><time className="font-mono">{activity.date}</time></div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

