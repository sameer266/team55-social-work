import { Heart, Users, Target, Sparkles, Shield, Globe } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"

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
    <section id="values" className="section-y bg-foreground">
      <div className="site-container">
        <div className="mb-14 lg:mb-16">
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="Our values"
            title={
              <>
                The principles that <em>guide us</em>
              </>
            }
          />
        </div>

        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-background/10 bg-background/10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <li key={value.title} className="bg-foreground p-8 transition-colors duration-300 hover:bg-background/[0.04] md:p-10">
              <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                <value.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl text-background">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-background/65">{value.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
