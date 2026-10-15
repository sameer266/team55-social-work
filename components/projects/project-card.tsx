import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react"
import type { SocialProject } from "@/lib/social-projects"

/** Standard card used in grids and on the project detail page's "related" row. */
export function ProjectCard({ project }: { project: SocialProject }) {
  return (
    <Link
      id={`project-${project.id}`}
      href={`/projects/${project.id}`}
      className="group block scroll-mt-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl bg-muted">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent-ink">{project.category}</p>
      <h3 className="font-serif text-2xl leading-snug text-foreground transition-colors group-hover:text-accent-ink">
        {project.title}
      </h3>
      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
        <div className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          <dd>{project.location}</dd>
        </div>
        <div className="inline-flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5" aria-hidden="true" />
          <dd>{project.volunteers} volunteers</dd>
        </div>
        <div className="inline-flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          <dd>{project.year}</dd>
        </div>
      </dl>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
        Read the project
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  )
}

/** Wide, two-column feature card for the first project when the list is unfiltered. */
export function FeaturedProjectCard({ project }: { project: SocialProject }) {
  return (
    <Link
      id={`project-${project.id}`}
      href={`/projects/${project.id}`}
      className="group grid scroll-mt-40 overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-xl hover:shadow-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:grid-cols-2"
    >
      <div className="relative min-h-[260px] overflow-hidden bg-muted lg:min-h-[440px]">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent-ink">
          Featured · {project.category}
        </p>
        <h3 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">{project.title}</h3>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="mt-7 space-y-2.5">
          {project.achievements.map((achievement) => (
            <li key={achievement} className="flex items-start gap-3 text-sm text-foreground">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-ink" />
              {achievement}
            </li>
          ))}
        </ul>

        <dl className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-6 text-xs text-muted-foreground">
          <div className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <dd>{project.location}</dd>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            <dd>{project.volunteers} volunteers</dd>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            <dd>{project.year}</dd>
          </div>
        </dl>

        <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
          Read the project
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
