import { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { StorySection } from "@/components/about/story-section"
import { ValuesSection } from "@/components/about/values-section"
import { TeamSection } from "@/components/about/team-section"
import { TimelineSection } from "@/components/about/timeline-section"
import { JoinCTA } from "@/components/about/join-cta"

export const metadata: Metadata = {
  title: "About Us - Team555 Nepal",
  description: "Learn about Team555 Nepal's mission, values, and the passionate team of young Nepalis driving change in their communities.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />
      <JoinCTA />
    </>
  )
}
