import { Metadata } from "next"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { GalleryCategories } from "@/components/gallery/gallery-categories"

export const metadata: Metadata = {
  title: "Gallery - Team555 Nepal",
  description: "Explore our gallery of impactful moments, community events, and transformative projects across Nepal.",
}

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryCategories />
      <GalleryGrid />
    </>
  )
}
