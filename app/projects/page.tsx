import { Metadata } from "next"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectCategories } from "@/components/projects/project-categories"
import { AllProjects } from "@/components/projects/all-projects"
import { ImpactMetrics } from "@/components/projects/impact-metrics"
import { GetInvolved } from "@/components/projects/get-involved"

export const metadata: Metadata = {
  title: "Our Projects - Team555 Nepal",
  description: "Explore Team555 Nepal's community projects spanning education, environment, heritage, and relief across 15 districts.",
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectCategories />
      <AllProjects />
      <ImpactMetrics />
      <GetInvolved />
    </>
  )
}
