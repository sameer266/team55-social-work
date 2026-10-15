import { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { StorySection } from "@/components/about/story-section"
import { MissionSection } from "@/components/sections/mission-section"
import { ValuesSection } from "@/components/about/values-section"
import { TimelineSection } from "@/components/about/timeline-section"
import { TeamSection } from "@/components/about/team-section"
import { JoinCTA } from "@/components/about/join-cta"

export const metadata: Metadata = {
  title: "About Us - Team555 Nepal",
  description: "Learn about Team555 Nepal's mission, values, and the passionate team of young Nepalis driving change in their communities.",
}

// Flow: where we came from -> what we stand for -> how we got here -> who we are today -> next step
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <MissionSection showAboutLink={false} />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <JoinCTA />
    </>
  )
}
