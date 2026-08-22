import { Hero } from "@/components/home/Hero";
import { IdentityIntro } from "@/components/home/IdentityIntro";
import { FeaturedWorks } from "@/components/home/FeaturedWorks";
import { TimelineTeaser } from "@/components/home/TimelineTeaser";
import { ThemeEntries } from "@/components/home/ThemeEntries";
import { RecentPosts } from "@/components/home/RecentPosts";
import { ContactTeaser } from "@/components/home/ContactTeaser";
import { NarrativeArc } from "@/components/home/NarrativeArc";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RecentPosts />
      <ThemeEntries />
      <NarrativeArc />
      <FeaturedWorks />
      <TimelineTeaser />
      <IdentityIntro />
      <ContactTeaser />
    </>
  );
}
