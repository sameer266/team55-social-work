import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronRight,
  CircleCheck,
  Heart,
  Lightbulb,
  ListChecks,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react"
import { socialProjects } from "@/lib/social-projects"
import { focusAreaForCategory } from "@/lib/focus-areas"
import { testimonials } from "@/lib/site-content"
import { ProjectCard } from "@/components/projects/project-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { TestimonialCard } from "@/components/sections/testimonials"

type ProjectPageProps = {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return socialProjects.map((project) => ({ id: project.id }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params
  const project = socialProjects.find((item) => item.id === id)

  if (!project) return { title: "Project not found | Team555 Nepal" }

  return {
    title: `${project.title} | Team555 Nepal`,
    description: project.description,
  }
}

const sectionTitle = "flex items-center gap-3 font-serif text-2xl text-foreground sm:text-3xl"
const sectionIcon = "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const index = socialProjects.findIndex((item) => item.id === id)

  if (index === -1) notFound()

  const project = socialProjects[index]
  const area = focusAreaForCategory(project.category)
  const voice = testimonials.find((testimonial) => testimonial.category === project.category)

  // Same-area projects first, then the rest, so the related row is never empty
  const related = [
    ...socialProjects.filter((item) => item.id !== project.id && item.category === project.category),
    ...socialProjects.filter((item) => item.id !== project.id && item.category !== project.category),
  ].slice(0, 3)

  const previous = socialProjects[index - 1]
  const next = socialProjects[index + 1]

  const facts = [
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Users, label: "Volunteers", value: project.volunteers },
    { icon: CalendarDays, label: "Timeline", value: project.year },
  ]

  return (
    <article>
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="site-container pb-14 pt-28 lg:pb-20 lg:pt-36">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-1.5">
                <Link href="/projects" className="hover:text-foreground">Projects</Link>
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </li>
              {area && (
                <li className="flex items-center gap-1.5">
                  <Link href={`/what-we-do/${area.slug}`} className="hover:text-foreground">{area.title}</Link>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </li>
              )}
              <li aria-current="page" className="font-medium text-foreground">{project.title}</li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-ink">
                {area && <area.icon className="h-3.5 w-3.5" aria-hidden="true" />}
                {project.category}
              </span>
              <h1 className="mt-6 font-serif text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">{project.title}</h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{project.description}</p>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {facts.map((fact) => (
                  <li key={fact.label} className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-foreground">
                    <fact.icon className="h-4 w-4 text-accent-ink" aria-hidden="true" />
                    <span className="sr-only">{fact.label}:</span>
                    {fact.value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <Image src={project.image} alt="" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="site-container section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-16 lg:col-span-8">
            <section aria-labelledby="challenge">
              <h2 id="challenge" className={sectionTitle}>
                <span className={sectionIcon}><Lightbulb className="h-5 w-5" aria-hidden="true" /></span>
                The challenge
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{project.challenge}</p>
            </section>

            <section aria-labelledby="approach">
              <h2 id="approach" className={sectionTitle}>
                <span className={sectionIcon}><ListChecks className="h-5 w-5" aria-hidden="true" /></span>
                Our approach
              </h2>
              <ol className="mt-8 space-y-4">
                {project.approach.map((step, stepIndex) => (
                  <li key={step} className="flex gap-5 rounded-xl border border-border bg-card p-5 sm:p-6">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-sm text-primary-foreground">
                      {stepIndex + 1}
                    </span>
                    <p className="pt-1.5 text-base leading-relaxed text-foreground">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="highlights">
              <h2 id="highlights" className={sectionTitle}>
                <span className={sectionIcon}><Sparkles className="h-5 w-5" aria-hidden="true" /></span>
                Project highlights
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {project.achievements.map((achievement) => (
                  <li key={achievement} className="rounded-xl border border-border bg-secondary p-5">
                    <CircleCheck className="h-5 w-5 text-accent-ink" aria-hidden="true" />
                    <p className="mt-4 font-serif text-xl leading-snug text-foreground">{achievement}</p>
                  </li>
                ))}
              </ul>
            </section>

            {voice && <TestimonialCard testimonial={voice} />}
          </div>

          {/* Sidebar: facts and actions stay in view while reading */}
          <aside className="lg:col-span-4">
            <div className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
                <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">At a glance</h2>
                <dl className="mt-5 divide-y divide-border">
                  {facts.map((fact) => (
                    <div key={fact.label} className="flex items-center gap-4 py-3.5">
                      <fact.icon className="h-4 w-4 shrink-0 text-accent-ink" aria-hidden="true" />
                      <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                      <dd className="ml-auto text-right text-sm font-semibold text-foreground">{fact.value}</dd>
                    </div>
                  ))}
                  {area && (
                    <div className="flex items-center gap-4 py-3.5">
                      <area.icon className="h-4 w-4 shrink-0 text-accent-ink" aria-hidden="true" />
                      <dt className="text-sm text-muted-foreground">Focus area</dt>
                      <dd className="ml-auto text-right text-sm font-semibold">
                        <Link href={`/what-we-do/${area.slug}`} className="text-foreground underline underline-offset-4 hover:text-accent-ink">
                          {area.title}
                        </Link>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="rounded-2xl bg-foreground p-6 sm:p-7">
                <h2 className="font-serif text-2xl text-background">Be part of this work</h2>
                <p className="mt-2 text-sm leading-relaxed text-background/65">
                  Give your time as a volunteer, or fund the next phase of the project.
                </p>
                <div className="mt-6 space-y-3">
                  <Link
                    href="/join#register"
                    className="flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                  >
                    Volunteer for this project <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/join#donate"
                    className="flex h-12 items-center justify-center gap-2 rounded-full bg-marigold px-5 text-sm font-semibold text-marigold-foreground transition-colors hover:bg-marigold/85"
                  >
                    <Heart className="h-4 w-4" aria-hidden="true" /> Support with a donation
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Previous / next */}
        <nav aria-label="More projects" className="mt-20 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
          {previous ? (
            <Link href={`/projects/${previous.id}`} className="group rounded-xl p-4 transition-colors hover:bg-muted">
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Previous project</span>
              <span className="mt-1 flex items-center gap-2 font-serif text-lg text-foreground">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                {previous.title}
              </span>
            </Link>
          ) : <span />}
          {next && (
            <Link href={`/projects/${next.id}`} className="group rounded-xl p-4 text-right transition-colors hover:bg-muted">
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Next project</span>
              <span className="mt-1 flex items-center justify-end gap-2 font-serif text-lg text-foreground">
                {next.title}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          )}
        </nav>
      </div>

      <section className="border-t border-border bg-secondary section-y">
        <div className="site-container">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Related work"
              title={
                <>
                  More projects you could <em>join</em>
                </>
              }
            />
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent-ink">
              View all projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
