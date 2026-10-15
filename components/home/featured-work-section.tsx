import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProjectCard } from "@/components/projects/project-card"
import { socialProjects } from "@/lib/social-projects"

const projects = socialProjects.slice(0, 3)

export function FeaturedWorkSection() {
  return (
    <section className="section-y bg-background">
      <div className="site-container">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Featured projects"
            title={
              <>
                Practical work, <em>rooted in community</em>
              </>
            }
          />
          <Link
            href="/projects"
            className="inline-flex h-11 shrink-0 items-center gap-2 self-start rounded-full border border-foreground/20 px-5 text-sm font-semibold text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background md:self-auto"
          >
            View all projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
