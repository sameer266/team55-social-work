import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Heart, Building } from "lucide-react"

const options = [
  {
    icon: Users,
    title: "Join as a Volunteer",
    description: "Contribute your time and skills to any of our ongoing projects.",
    href: "/join",
  },
  {
    icon: Heart,
    title: "Donate",
    description: "Support our work financially to help us reach more communities.",
    href: "/join#donate",
  },
  {
    icon: Building,
    title: "Partner With Us",
    description: "Organizations and businesses can collaborate with Team555 to scale impact.",
    href: "/join#partner",
  },
]

export function GetInvolved() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-accent/50" />
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs">
              Get Involved
            </span>
            <div className="h-px w-10 bg-accent/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            Be Part of <span className="text-primary italic">These Stories</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 lg:px-8 mb-14">
          {options.map((option) => (
            <Link
              key={option.title}
              href={option.href}
              className="group p-8 rounded-2xl border border-border/50 hover:border-primary/20 transition-colors text-center"
            >
              <option.icon className="w-5 h-5 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {option.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {option.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-12 text-sm font-medium rounded-lg transition-colors"
          >
            <Link href="/join">
              Start Your Journey Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
