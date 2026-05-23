import { getCommunityData } from "@/lib/community";
import { siteConfig } from "@/site.config";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";

export function CommunityTeaser() {
  const community = getCommunityData();
  const recentActivities = community.activities.slice(0, 2);

  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionLabel>边缘计算社区</SectionLabel>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-medium tracking-tight text-foreground">
            {community.name}
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{community.mission}</p>
        </div>
        <ul className="mt-10 space-y-6 border-t border-border pt-10">
          {recentActivities.map((activity) => (
            <li key={activity.title}>
              <p className="text-xs text-muted-light">{activity.date}</p>
              <p className="mt-1 font-medium text-foreground">
                {activity.title}
              </p>
              <p className="mt-1 text-sm text-muted">{activity.description}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          <TextLink href="/community">了解社区</TextLink>
          <TextLink href={siteConfig.links.community} external>
            进入 byjs.com.cn
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
