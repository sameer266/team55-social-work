import { TrendingUp, Users, MapPin, Calendar } from "lucide-react"

const metrics = [
  { icon: TrendingUp, value: "30+", label: "Active Projects", description: "Ongoing initiatives across all focus areas" },
  { icon: Users, value: "500+", label: "Volunteers", description: "Dedicated members driving change" },
  { icon: MapPin, value: "15", label: "Districts", description: "Geographic reach across Nepal" },
  { icon: Calendar, value: "7", label: "Years", description: "Of continuous community service" },
]

export function ImpactMetrics() {
  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-accent/50" />
            <span className="text-primary-foreground/60 font-medium tracking-[0.2em] uppercase text-xs">
              Our Impact
            </span>
            <div className="h-px w-10 bg-accent/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-tight">
            Numbers That Tell <span className="text-accent italic">Our Story</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {metrics.map((metric) => (
            <div key={metric.label} className="bg-primary p-8 md:p-10 text-center">
              <metric.icon className="w-5 h-5 text-primary-foreground/40 mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-2">
                {metric.value}
              </div>
              <p className="text-accent text-xs font-medium uppercase tracking-wider mb-1">
                {metric.label}
              </p>
              <p className="text-primary-foreground/40 text-xs">
                {metric.description}
              </p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
