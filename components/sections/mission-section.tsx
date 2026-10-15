import Link from "next/link"
import { ArrowRight, Eye, Quote, Target } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { organization } from "@/lib/site-content"

/** Who we are, mission, vision and philosophy: the context block used on Home and About. */
export function MissionSection({ showAboutLink = true }: { showAboutLink?: boolean }) {
  return (
    <section id="mission" className="section-y bg-background">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Who we are"
              title={
                <>
                  Youth-led, community&#8209;first, <em>since {organization.founded}</em>
                </>
              }
            />
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              {organization.whoWeAre.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {showAboutLink && (
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:text-accent-ink hover:underline"
              >
                Read our full story
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <article className="rounded-2xl border border-border bg-card p-7 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent-ink">Our mission</h3>
              <p className="mt-3 font-serif text-xl leading-snug text-foreground">{organization.mission}</p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-7 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Eye className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent-ink">Our vision</h3>
              <p className="mt-3 font-serif text-xl leading-snug text-foreground">{organization.vision}</p>
            </article>
            <figure className="relative overflow-hidden rounded-2xl bg-foreground p-7 sm:col-span-2 sm:p-10">
              <Quote className="h-8 w-8 text-accent" aria-hidden="true" />
              <blockquote className="mt-5 font-serif text-2xl italic leading-snug text-background sm:text-3xl">
                {organization.philosophy}
              </blockquote>
              <figcaption className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-background/60">
                Our philosophy
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
