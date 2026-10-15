import { Metadata } from "next"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ImpactMetrics } from "@/components/projects/impact-metrics"
import { AllProjects } from "@/components/projects/all-projects"
import { GetInvolved } from "@/components/projects/get-involved"

export const metadata: Metadata = {
  title: "Our Projects - Team555 Nepal",
  description: "Explore Team555 Nepal's initiatives in education, environmental action, healthcare, and community response. Search, filter, and find a project to join.",
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ImpactMetrics />
      <AllProjects />
      <GetInvolved />
    </>
  )
}
