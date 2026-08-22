import { Hero } from "@/components/home/Hero";
import { IdentityIntro } from "@/components/home/IdentityIntro";
import { FeaturedWorks } from "@/components/home/FeaturedWorks";
import { TimelineTeaser } from "@/components/home/TimelineTeaser";
import { ConferenceHighlight } from "@/components/home/ConferenceHighlight";
import { CommunityTeaser } from "@/components/home/CommunityTeaser";
import { ThemeEntries } from "@/components/home/ThemeEntries";
import { RecentPosts } from "@/components/home/RecentPosts";
import { ContactTeaser } from "@/components/home/ContactTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IdentityIntro />
      <FeaturedWorks />
      <TimelineTeaser />
      <ConferenceHighlight />
      <CommunityTeaser />
      <ThemeEntries />
      <RecentPosts />
      <ContactTeaser />
    </>
  );
}

