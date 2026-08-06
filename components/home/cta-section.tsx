import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Calendar } from "lucide-react"

const ctaOptions = [
  {
    icon: Users,
    title: "Become a Volunteer",
    description: "Join thousands of young Nepalis making a difference in their communities.",
    link: "/join",
    linkText: "Join Now"
  },
  {
    icon: Heart,
    title: "Support Our Cause",
    description: "Your contribution helps us reach more communities and create lasting change.",
    link: "/donate",
    linkText: "Donate"
  },
  {
    icon: Calendar,
    title: "Partner With Us",
    description: "Organizations and businesses can collaborate with us for greater impact.",
    link: "/partner",
    linkText: "Learn More"
  },
]

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent/50" />
              <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs">
                Get Involved
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-background mb-5 leading-tight">
              Ready to Make a <span className="text-accent italic">Difference?</span>
            </h2>
            <p className="text-background/60 text-base leading-relaxed mb-8 max-w-md">
              Whether you want to volunteer, support our initiatives, or partner with us, 
              there are many ways to be part of this movement.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg h-12 px-8 text-sm font-medium transition-colors"
            >
              <Link href="/join">
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {ctaOptions.map((option) => (
              <Link
                key={option.title}
                href={option.link}
                className="group flex items-start gap-5 p-6 border border-background/10 rounded-xl hover:bg-background/5 transition-colors"
              >
                <option.icon className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-base font-medium text-background mb-1 group-hover:text-accent transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-background/50 text-sm leading-relaxed">
                    {option.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-background/30 group-hover:text-accent ml-auto mt-0.5 shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
