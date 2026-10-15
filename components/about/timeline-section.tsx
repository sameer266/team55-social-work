import { SectionHeading } from "@/components/ui/section-heading"

const milestones = [
  { year: "2018", title: "The Beginning", description: "Five friends in Kathmandu start weekend neighborhood cleanup drives." },
  { year: "2019", title: "First 100 Members", description: "Word spreads through universities. Team555 reaches 100 active volunteers." },
  { year: "2020", title: "COVID Response", description: "Pivoted to emergency relief during the pandemic, delivering supplies to 2,000+ families." },
  { year: "2021", title: "Provincial Expansion", description: "Expanded operations to 7 provinces with dedicated regional coordinators." },
  { year: "2022", title: "Education Initiative", description: "Launched school supply program reaching 50+ rural schools." },
  { year: "2023", title: "500+ Members", description: "Crossed 500 active members and completed 30+ community projects." },
  { year: "2024", title: "Cultural Revival", description: "Started heritage preservation program restoring 5 ancient monuments." },
  { year: "2025", title: "Looking Forward", description: "Launching youth leadership academy and expanding to all 77 districts." },
]

export function TimelineSection() {
  return (
    <section id="journey" className="section-y bg-secondary">
      <div className="site-container">
        <div className="mb-14 lg:mb-16">
          <SectionHeading
            align="center"
            eyebrow="Our journey"
            title={
              <>
                Milestones <em>along the way</em>
              </>
            }
          />
        </div>

        {/* Reads as a timeline: a rule with a marker per year, laid out in rows of four on desktop */}
        <ol className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((milestone, index) => {
            const isLast = index === milestones.length - 1
            return (
              <li key={milestone.year} className="relative border-t border-foreground/15 pt-7">
                <span
                  aria-hidden="true"
                  className={`absolute -top-[7px] left-0 h-3.5 w-3.5 rounded-full border-2 ${
                    isLast ? "border-accent-ink bg-background" : "border-accent-ink bg-accent-ink"
                  }`}
                />
                <p className="font-serif text-3xl text-accent-ink">{milestone.year}</p>
                <h3 className="mt-3 text-base font-semibold text-foreground">{milestone.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{milestone.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
