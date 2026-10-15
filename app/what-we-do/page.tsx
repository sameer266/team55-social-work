import type { Metadata } from "next"
import { PageHero } from "@/components/ui/page-hero"
import { focusAreas } from "@/lib/focus-areas"
import { SectionHeading } from "@/components/ui/section-heading"
import { FocusAreasGrid } from "@/components/sections/focus-areas"
import { HowWeWork } from "@/components/sections/how-we-work"
import { GoalsSection } from "@/components/sections/goals-section"
import { GetInvolved } from "@/components/projects/get-involved"

export const metadata: Metadata = {
  title: "What We Do - Team555 Nepal",
  description:
    "Team555 Nepal works in four areas: education, environmental action, community health, and community response. See how we work and the goals we are working toward.",
}

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        tagline="What We Do"
        title={
          <>
            Four areas, one <em>commitment</em>
          </>
        }
        description="We focus where young volunteers can make the biggest difference: keeping children in school, restoring forests and rivers, bringing care to remote villages, and standing with communities after disaster."
        imageSrc="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
        jumpLinks={focusAreas.map((area) => ({ href: `/what-we-do/${area.slug}`, label: area.title }))}
      />

      <section className="section-y bg-background">
        <div className="site-container">
          <div className="mb-14 lg:mb-16">
            <SectionHeading
              eyebrow="Our focus areas"
              title={
                <>
                  Where our volunteers <em>show up</em>
                </>
              }
              description="Each area has its own programs, goals, and results. Choose one to see the full picture."
            />
          </div>
          <FocusAreasGrid />
        </div>
      </section>

      <HowWeWork className="bg-secondary" />
      <GoalsSection className="bg-background" />
      <GetInvolved />
    </>
  )
}
