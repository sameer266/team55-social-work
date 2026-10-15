import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Users, Calendar } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"

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
    link: "/join#donate",
    linkText: "Donate"
  },
  {
    icon: Calendar,
    title: "Partner With Us",
    description: "Organizations and businesses can collaborate with us for greater impact.",
    link: "/join#partner",
    linkText: "Learn More"
  },
]

export function CTASection() {
  return (
    <section className="section-y relative isolate overflow-hidden bg-foreground">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-foreground/90" />

      <div className="site-container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          {/* Left */}
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Get involved"
              title={
                <>
                  Ready to make a <em>difference?</em>
                </>
              }
              description="Whether you want to volunteer, support our initiatives, or partner with us, there are many ways to be part of this movement."
            />
            <Link
              href="/join"
              className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Right */}
          <ul className="space-y-3">
            {ctaOptions.map((option) => (
              <li key={option.title}>
                <Link
                  href={option.link}
                  className="group flex items-start gap-5 rounded-xl border border-background/15 bg-background/[0.03] p-6 transition-colors hover:border-accent/50 hover:bg-background/[0.07]"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                      option.link === "/join#donate" ? "bg-marigold/15 text-marigold" : "bg-accent/15 text-accent"
                    }`}
                  >
                    <option.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-serif text-xl text-background">{option.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-background/65">{option.description}</span>
                    <span
                      className={`mt-3 inline-flex items-center gap-1.5 text-sm font-semibold ${
                        option.link === "/join#donate" ? "text-marigold" : "text-accent"
                      }`}
                    >
                      {option.linkText}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
