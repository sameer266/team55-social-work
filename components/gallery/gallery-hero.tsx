import { PageHero } from "@/components/ui/page-hero"

export function GalleryHero() {
  return (
    <PageHero
      tagline="Our Gallery"
      title={
        <>
          Moments of <span className="text-accent italic">Impact</span>
        </>
      }
      description="Every photo and video tells a story of hope, community, and transformation. Explore our journey through the lens of change."
      imageSrc="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&q=80"
      height="md"
      centered
    />
  )
}
