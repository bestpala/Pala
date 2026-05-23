import { getCommunityData } from "@/lib/community";
import { siteConfig } from "@/site.config";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";

export function CommunityTeaser() {
  const community = getCommunityData();
  const recentActivities = community.activities.slice(0, 2);

  return (
    <Section variant="alt">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionLabel>边缘计算社区</SectionLabel>
          <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
            {community.name}
          </h2>
          <p className="mt-5 leading-[1.85] text-muted">{community.mission}</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <TextLink href="/community">了解社区</TextLink>
            <TextLink href={siteConfig.links.community} external>
              进入 byjs.com.cn
            </TextLink>
          </div>
        </div>

        <ul className="space-y-0 divide-y divide-border border-y border-border">
          {recentActivities.map((activity, index) => (
            <li key={activity.title} className="py-6 sm:py-7">
              <p className="post-index">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-2 font-mono text-xs text-muted-light">
                {activity.date}
              </p>
              <p className="mt-2 font-medium text-foreground">
                {activity.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {activity.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
