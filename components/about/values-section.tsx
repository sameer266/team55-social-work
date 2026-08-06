import { Heart, Users, Target, Sparkles, Shield, Globe } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "We lead with empathy, showing up for friends and strangers alike with an open heart and warm smile.",
  },
  {
    icon: Users,
    title: "Beautiful Connections",
    description: "We truly believe that authentic relationships and shared joy are the foundations of any thriving community.",
  },
  {
    icon: Target,
    title: "Joyful Actions",
    description: "Whether small or grand, every supportive action we take is rooted in the joy of making someone's day.",
  },
  {
    icon: Sparkles,
    title: "Uplifting Growth",
    description: "We inspire each other to grow in kindness, patience, and love every single day.",
  },
  {
    icon: Shield,
    title: "Trust & Warmth",
    description: "We create safe, welcoming spaces where everyone feels comfortable being their true, beautiful selves.",
  },
  {
    icon: Globe,
    title: "Global Harmony",
    description: "While we start at home, our ultimate dream is a deeply connected world where everyone cares for one another.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-24 md:py-32 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-accent/50" />
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs">
              Our Values
            </span>
            <div className="h-px w-10 bg-accent/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-background leading-tight">
            The Principles That <span className="text-accent italic">Guide Us</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 rounded-2xl overflow-hidden">
            {values.map((value) => (
              <div 
                key={value.title}
                className="p-8 md:p-10 bg-foreground hover:bg-background/5 transition-colors duration-300"
              >
              <value.icon className="w-5 h-5 text-accent mb-5 opacity-70" />
              <h3 className="font-serif text-xl text-background mb-3">
                {value.title}
              </h3>
              <p className="text-background/50 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
