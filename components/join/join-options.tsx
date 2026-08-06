import { Users, Heart, Building2, Calendar } from "lucide-react"

const options = [
  {
    icon: Users,
    title: "Become a Volunteer",
    description: "Join our network of 5,000+ active volunteers working across Nepal.",
    features: ["Flexible scheduling", "Training provided", "Local chapter support", "Certificate of service"],
  },
  {
    icon: Heart,
    title: "Make a Donation",
    description: "Your financial support helps us reach more communities and respond to emergencies.",
    features: ["100% goes to programs", "Tax deductible", "Impact reports", "Choose your cause"],
  },
  {
    icon: Building2,
    title: "Corporate Partnership",
    description: "Partner with us for meaningful CSR initiatives and employee volunteer programs.",
    features: ["Custom programs", "Brand visibility", "Employee engagement", "Impact measurement"],
  },
  {
    icon: Calendar,
    title: "Host an Event",
    description: "Organize a fundraiser or volunteer drive in your community.",
    features: ["Planning support", "Marketing materials", "Speaker availability", "Event toolkit"],
  },
]

export function JoinOptions() {
  return (
    <section id="options" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-accent/50" />
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs">
              Ways to Help
            </span>
            <div className="h-px w-10 bg-accent/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            Choose Your <span className="text-primary italic">Path</span>
          </h2>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-2 gap-6 px-4 lg:px-8 max-w-5xl mx-auto">
          {options.map((option) => (
            <div
              key={option.title}
              className="p-8 md:p-10 rounded-2xl border border-border/50 hover:border-primary/20 transition-colors"
            >
              <div className="flex items-start gap-5">
                <option.icon className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-3">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {option.description}
                  </p>
                  
                  <ul className="grid grid-cols-2 gap-3">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-foreground/60">
                        <div className="w-1 h-1 bg-accent/50 rounded-full shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
