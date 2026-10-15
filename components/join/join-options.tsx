import { Users, Heart, Building2, Calendar, Check } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { formatStat, siteStats } from "@/lib/site-content"

const options = [
  {
    id: "volunteer",
    icon: Users,
    title: "Become a Volunteer",
    description: `Join our network of ${formatStat(siteStats[0])} active volunteers working across Nepal.`,
    features: ["Flexible scheduling", "Training provided", "Local chapter support", "Certificate of service"],
  },
  {
    id: "donate",
    icon: Heart,
    title: "Make a Donation",
    description: "Your financial support helps us reach more communities and respond to emergencies.",
    features: ["100% goes to programs", "Tax deductible", "Impact reports", "Choose your cause"],
  },
  {
    id: "partner",
    icon: Building2,
    title: "Corporate Partnership",
    description: "Partner with us for meaningful CSR initiatives and employee volunteer programs.",
    features: ["Custom programs", "Brand visibility", "Employee engagement", "Impact measurement"],
  },
  {
    id: "event",
    icon: Calendar,
    title: "Host an Event",
    description: "Organize a fundraiser or volunteer drive in your community.",
    features: ["Planning support", "Marketing materials", "Speaker availability", "Event toolkit"],
  },
]

export function JoinOptions() {
  return (
    <section id="options" className="section-y bg-background">
      <div className="site-container">
        {/* Header */}
        <div className="mb-14 lg:mb-16">
          <SectionHeading
            align="center"
            eyebrow="Ways to help"
            title={
              <>
                Choose your <em>path</em>
              </>
            }
          />
        </div>

        {/* Options Grid */}
        <ul className="grid gap-6 md:grid-cols-2">
          {options.map((option) => (
            <li
              key={option.title}
              id={option.id}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-[border-color,box-shadow] duration-300 hover:border-accent-ink/40 hover:shadow-xl hover:shadow-foreground/5 target:border-accent-ink target:ring-2 target:ring-accent-ink/20 md:p-10"
            >
              <span
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full ${
                  option.id === "donate" ? "bg-marigold/20 text-marigold-ink" : "bg-primary/10 text-primary"
                }`}
              >
                <option.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-2xl text-foreground">{option.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{option.description}</p>

              <ul className="mt-7 grid grid-cols-1 gap-3 border-t border-border pt-6 sm:grid-cols-2">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <Check className="h-4 w-4 shrink-0 text-accent-ink" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
