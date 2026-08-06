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
    <section className="py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-accent/50" />
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs">
              Our Journey
            </span>
            <div className="h-px w-10 bg-accent/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            Milestones <span className="text-primary italic">Along the Way</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-[16px] md:left-1/2 w-2 h-2 rounded-full bg-primary md:-translate-x-1 mt-2.5" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                  }`}>
                    <span className="text-accent font-serif text-lg font-bold">{milestone.year}</span>
                    <h3 className="text-base font-semibold text-foreground mt-1">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
