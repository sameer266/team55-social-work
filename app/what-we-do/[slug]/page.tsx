import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { PageHero } from "@/components/ui/page-hero"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProjectCard } from "@/components/projects/project-card"
import { TestimonialCard } from "@/components/sections/testimonials"
import { GetInvolved } from "@/components/projects/get-involved"
import { focusAreas } from "@/lib/focus-areas"
import { socialProjects } from "@/lib/social-projects"
import { testimonials } from "@/lib/site-content"

type FocusAreaPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return focusAreas.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({ params }: FocusAreaPageProps): Promise<Metadata> {
  const { slug } = await params
  const area = focusAreas.find((item) => item.slug === slug)
  if (!area) return { title: "Not found | Team555 Nepal" }
  return {
    title: `${area.title} | What We Do | Team555 Nepal`,
    description: `${area.tagline} ${area.summary}`,
  }
}

export default async function FocusAreaPage({ params }: FocusAreaPageProps) {
  const { slug } = await params
  const area = focusAreas.find((item) => item.slug === slug)
  if (!area) notFound()

  const projects = socialProjects.filter((project) => project.category === area.category)
  const voice = testimonials.find((testimonial) => testimonial.category === area.category)
  const otherAreas = focusAreas.filter((item) => item.slug !== area.slug)

  return (
    <>
      <PageHero
        tagline={area.title}
        title={area.tagline}
        description={area.summary}
        imageSrc={area.image}
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/what-we-do", label: "What we do" },
        ]}
      />

      {/* Outcomes at a glance */}
      <section aria-label={`${area.title} results`} className="border-b border-border bg-card">
        <div className="site-container">
          <dl className="grid grid-cols-2 divide-x divide-y divide-border lg:grid-cols-4 lg:divide-y-0">
            {area.outcomes.map((outcome) => (
              <div key={outcome.label} className="flex flex-col-reverse px-4 py-8 text-center sm:px-8 sm:py-10">
                <dt className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{outcome.label}</dt>
                <dd className="font-serif text-4xl text-foreground sm:text-5xl">{outcome.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Context: why this matters */}
      <section className="section-y bg-background">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Why it matters"
                title={
                  <>
                    The need behind <em>the work</em>
                  </>
                }
              />
              <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {area.context.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted lg:col-span-6">
              <Image src={area.image} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-card text-primary shadow-lg">
                <area.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-y bg-secondary">
        <div className="site-container">
          <div className="mb-14 lg:mb-16">
            <SectionHeading
              eyebrow="Our approach"
              title={
                <>
                  How we make a <em>difference</em>
                </>
              }
            />
          </div>
          <ol className="grid gap-5 md:grid-cols-3">
            {area.approach.map((item, index) => (
              <li key={item.title} className="rounded-2xl border border-border bg-card p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-serif text-sm italic text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Programs in this area */}
      <section className="section-y bg-background">
        <div className="site-container">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Programs"
              title={
                <>
                  Projects in <em>{area.title.toLowerCase()}</em>
                </>
              }
            />
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent-ink">
              All projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {voice && (
            <div className="mt-20">
              <TestimonialCard testimonial={voice} />
            </div>
          )}
        </div>
      </section>

      {/* Other areas */}
      <section className="border-t border-border bg-background py-14">
        <div className="site-container">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Explore other areas</p>
          <ul className="grid gap-3 sm:grid-cols-3">
            {otherAreas.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/what-we-do/${other.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent-ink/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <other.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="flex-1 font-serif text-lg text-foreground">{other.title}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent-ink" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GetInvolved />
    </>
  )
}
