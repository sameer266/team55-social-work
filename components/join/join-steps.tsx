import { HandHeart, ListChecks, Send, Users } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"

const steps = [
  {
    icon: ListChecks,
    title: "Choose your path",
    description: "Volunteer, donate, partner, or host an event. Pick what fits your time.",
  },
  {
    icon: Send,
    title: "Send your application",
    description: "Tell us about yourself and the causes you care about. It takes a few minutes.",
  },
  {
    icon: Users,
    title: "Meet your chapter",
    description: "Connect with your local chapter and the volunteers near you.",
  },
  {
    icon: HandHeart,
    title: "Start serving",
    description: "Join your first activity. Training is provided, and no experience is needed.",
  },
]

/** Sets expectations between choosing a path and filling in the form. */
export function JoinSteps() {
  return (
    <section id="how-it-works" className="border-y border-border bg-card py-16 md:py-20">
      <div className="site-container">
        <div className="mb-12">
          <SectionHeading
            eyebrow="How joining works"
            title={
              <>
                Four steps to <em>your first day</em>
              </>
            }
          />
        </div>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-4 lg:flex-col">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-serif text-sm italic text-muted-foreground">Step {index + 1}</p>
                <h3 className="mt-1 font-serif text-xl text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
