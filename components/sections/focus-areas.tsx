import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { focusAreas } from "@/lib/focus-areas"
import { cn } from "@/lib/utils"

/** The four focus areas as wide cards, each linking to its detail page. */
export function FocusAreasGrid() {
  return (
    <ul className="grid gap-5 lg:grid-cols-2">
      {focusAreas.map((area) => (
        <li key={area.slug}>
          <Link
            href={`/what-we-do/${area.slug}`}
            className="group grid h-full overflow-hidden rounded-2xl border border-border bg-card transition-[box-shadow,border-color] duration-300 hover:border-accent-ink/30 hover:shadow-xl hover:shadow-foreground/5 sm:grid-cols-5"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-muted sm:col-span-2 sm:aspect-auto sm:min-h-[260px]">
              <Image
                src={area.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col p-6 sm:col-span-3 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <area.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <ArrowUpRight
                  className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-foreground">{area.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{area.summary}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5">
                {area.outcomes.slice(0, 2).map((outcome) => (
                  <div key={outcome.label} className="flex flex-col-reverse">
                    <dt className="text-xs text-muted-foreground">{outcome.label}</dt>
                    <dd className="font-serif text-2xl text-foreground">{outcome.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function FocusAreasSection({ className }: { className?: string }) {
  return (
    <section className={cn("section-y bg-secondary", className)}>
      <div className="site-container">
        <div className="mb-14 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Four paths to a <em>brighter tomorrow</em>
              </>
            }
            description="Every action matters. We channel our energy into four areas where young volunteers can make the biggest difference."
          />
          <Link
            href="/what-we-do"
            className="inline-flex h-11 shrink-0 items-center gap-2 self-start rounded-full border border-foreground/20 px-5 text-sm font-semibold text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background lg:self-auto"
          >
            Explore our work
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <FocusAreasGrid />
      </div>
    </section>
  )
}
