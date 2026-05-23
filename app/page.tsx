import { Hero } from "@/components/home/Hero";
import { IdentityIntro } from "@/components/home/IdentityIntro";
import { ThemeEntries } from "@/components/home/ThemeEntries";
import { ConferenceHighlight } from "@/components/home/ConferenceHighlight";
import { FeaturedWorks } from "@/components/home/FeaturedWorks";
import { RecentPosts } from "@/components/home/RecentPosts";
import { CommunityTeaser } from "@/components/home/CommunityTeaser";
import { TimelineTeaser } from "@/components/home/TimelineTeaser";
import { ContactTeaser } from "@/components/home/ContactTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IdentityIntro />
      <ThemeEntries />
      <ConferenceHighlight />
      <FeaturedWorks />
      <RecentPosts />
      <CommunityTeaser />
      <TimelineTeaser />
      <ContactTeaser />
    </>
  );
}
