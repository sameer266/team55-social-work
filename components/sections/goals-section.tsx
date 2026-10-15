import { SectionHeading } from "@/components/ui/section-heading"
import { goals } from "@/lib/site-content"
import { cn } from "@/lib/utils"

/** Where we are heading and how far we have come. Progress bars only appear where there is a real measured figure. */
export function GoalsSection({ className }: { className?: string }) {
  return (
    <section className={cn("section-y bg-secondary", className)}>
      <div className="site-container">
        <div className="mb-14 lg:mb-16">
          <SectionHeading
            eyebrow="Our goals"
            title={
              <>
                What we are <em>working toward</em>
              </>
            }
            description="Clear goals keep us honest. Here is what we are aiming for, and where we stand today."
          />
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {goals.map((goal, index) => (
            <li
              key={goal.title}
              className={cn(
                "flex flex-col rounded-2xl border border-border bg-card p-7",
                // Two wide cards on top, three below, so five goals fill the grid evenly
                index < 2 ? "lg:col-span-3" : "lg:col-span-2",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <goal.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-serif text-sm italic text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-foreground">{goal.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{goal.description}</p>

              <div className="mt-6 border-t border-border pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Where we are</p>
                <p className="mt-1.5 text-sm font-semibold text-foreground">{goal.progressLabel}</p>
                {goal.progress !== undefined && (
                  <div
                    role="progressbar"
                    aria-label={`${goal.title} progress`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(goal.progress * 100)}
                    className="mt-3 h-2 overflow-hidden rounded-full bg-muted"
                  >
                    <div className="h-full rounded-full bg-accent-ink" style={{ width: `${Math.round(goal.progress * 100)}%` }} />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
