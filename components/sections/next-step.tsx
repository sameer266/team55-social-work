import Link from "next/link"
import { ReactNode } from "react"
import { ArrowRight } from "lucide-react"

interface NextStepProps {
  eyebrow?: string
  title: ReactNode
  description: string
  primary: { href: string; label: string }
  secondary?: { href: string; label: string }
}

/** Closing band that hands each page off to the next logical one, so no page is a dead end. */
export function NextStep({ eyebrow = "Next step", title, description, primary, secondary }: NextStepProps) {
  return (
    <section className="section-y bg-background">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center sm:px-12 md:py-20">
          {/* Fine rule frame and soft glow: quiet classic details */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-3 rounded-2xl border border-primary-foreground/15 sm:inset-4" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-primary-foreground sm:text-4xl lg:text-5xl [&_em]:font-normal [&_em]:italic [&_em]:text-accent">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-primary-foreground/80">{description}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={primary.href}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                {primary.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              {secondary && (
                <Link
                  href={secondary.href}
                  className="inline-flex h-12 items-center rounded-full border border-primary-foreground/30 px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
