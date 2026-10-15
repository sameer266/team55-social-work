import { Metadata } from "next"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { NextStep } from "@/components/sections/next-step"

export const metadata: Metadata = {
  title: "Gallery - Team555 Nepal",
  description: "Explore our gallery of impactful moments, community events, and transformative projects across Nepal.",
}

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <NextStep
        eyebrow="Be part of the story"
        title={
          <>
            Be in the <em>next photo</em>
          </>
        }
        description="Every moment here started with someone deciding to show up. Find a project near you and join the next one."
        primary={{ href: "/join", label: "Become a volunteer" }}
        secondary={{ href: "/projects", label: "Browse projects" }}
      />
    </>
  )
}
