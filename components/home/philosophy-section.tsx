import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, BookOpen, Building2, Shield } from "lucide-react"

const focusAreas = [
  { icon: Leaf, label: "Environmental Action" },
  { icon: BookOpen, label: "Education Support" },
  { icon: Building2, label: "Cultural Preservation" },
  { icon: Shield, label: "Community Safety" },
]

export function PhilosophySection() {
  return (
    <section className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Quote */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Our Philosophy</p>
          <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed">
            "We are not waiting to grow up to change Nepal. We are changing it now."
          </blockquote>
        </div>

        {/* Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Team555 began with a powerful belief: the youth of Nepal hold the energy, 
              creativity, and resilience to solve the challenges facing our communities 
              today — not tomorrow.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From environmental action to educational support, cultural preservation to 
              community relief, we mobilize passionate young leaders across all 7 provinces 
              to serve with purpose and lead with integrity.
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/about">Read Our Full Story</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {focusAreas.map((area) => (
              <div 
                key={area.label}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <area.icon className="w-8 h-8 text-primary mb-3" />
                <p className="font-medium text-foreground">{area.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
