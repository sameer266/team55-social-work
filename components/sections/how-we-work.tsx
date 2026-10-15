import { SectionHeading } from "@/components/ui/section-heading"
import { howWeWork } from "@/lib/site-content"
import { cn } from "@/lib/utils"

/** Four-step process, so visitors understand how a project actually runs. */
export function HowWeWork({ className }: { className?: string }) {
  return (
    <section className={cn("section-y bg-background", className)}>
      <div className="site-container">
        <div className="mb-14 grid gap-6 lg:mb-16 lg:grid-cols-2 lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                From listening to <em>lasting change</em>
              </>
            }
          />
          <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:justify-self-end">
            Every project follows the same four steps, so the work fits the community and the results are there for everyone to see.
          </p>
        </div>

        <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Connecting rule behind the step markers on desktop */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          {howWeWork.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-4">
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-accent-ink shadow-sm">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-serif text-sm italic text-muted-foreground">Step 0{index + 1}</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
