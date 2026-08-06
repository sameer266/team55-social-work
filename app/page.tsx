import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { PillarsSection } from "@/components/home/pillars-section"
import { FeaturedWorkSection } from "@/components/home/featured-work-section"
import { GallerySection } from "@/components/home/gallery-section"
import { TestimonialSection } from "@/components/home/testimonial-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <PillarsSection />
      <FeaturedWorkSection />
      <GallerySection />
      <TestimonialSection />
      <CTASection />
    </>
  )
}
