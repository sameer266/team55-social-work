import Link from "next/link"
import { ArrowRight, Building, Heart, Users } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"

const options = [
  {
    icon: Users,
    title: "Volunteer",
    description: "Give your time and skills to any ongoing project. Training is provided.",
    href: "/join#register",
    action: "Sign up to volunteer",
  },
  {
    icon: Heart,
    title: "Donate",
    description: "Fund the programs that reach the most communities. Every rupee goes to the work.",
    href: "/join#donate",
    action: "Make a donation",
  },
  {
    icon: Building,
    title: "Partner",
    description: "Companies and organizations can run CSR programs and volunteer days with us.",
    href: "/join#partner",
    action: "Start a partnership",
  },
]

export function GetInvolved() {
  return (
    <section className="border-t border-border bg-card section-y">
      <div className="site-container">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Get involved"
            title={
              <>
                Be part of <em>these stories</em>
              </>
            }
            description="Every project runs on people. Pick the way you want to help."
          />
        </div>

        <div className="mx-auto grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {options.map((option) => (
            <Link
              key={option.title}
              href={option.href}
              className="group flex flex-col bg-card p-8 transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring md:p-10"
            >
              <option.icon
                className={`mb-6 h-6 w-6 ${option.title === "Donate" ? "text-marigold-ink" : "text-accent-ink"}`}
                aria-hidden="true"
              />
              <h3 className="font-serif text-2xl text-foreground">{option.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{option.description}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                {option.action}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
