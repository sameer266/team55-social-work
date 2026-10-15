import { HeroSection } from "@/components/home/hero-section"
import { MissionSection } from "@/components/sections/mission-section"
import { FocusAreasSection } from "@/components/sections/focus-areas"
import { HowWeWork } from "@/components/sections/how-we-work"
import { StatsSection } from "@/components/home/stats-section"
import { FeaturedWorkSection } from "@/components/home/featured-work-section"
import { GoalsSection } from "@/components/sections/goals-section"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { GallerySection } from "@/components/home/gallery-section"
import { CTASection } from "@/components/home/cta-section"

// Story order: who we are -> what we do -> how -> proof -> where we're going -> voices -> act
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <FocusAreasSection />
      <HowWeWork />
      <StatsSection />
      <FeaturedWorkSection />
      <GoalsSection />
      <TestimonialsSection />
      <GallerySection />
      <CTASection />
    </>
  )
}
