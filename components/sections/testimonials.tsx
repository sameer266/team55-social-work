import Image from "next/image"
import { Quote } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { testimonials, type Testimonial } from "@/lib/site-content"

/** One voice, large. Used on detail pages next to the matching work. */
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="relative overflow-hidden rounded-2xl bg-foreground p-8 sm:p-12">
      <Quote className="h-9 w-9 text-accent" aria-hidden="true" />
      <blockquote className="mt-6 font-serif text-2xl leading-snug text-background sm:text-3xl">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-background/20">
          <Image src={testimonial.image} alt="" fill sizes="48px" className="object-cover" />
        </span>
        <span>
          <span className="block text-sm font-semibold text-background">{testimonial.author}</span>
          <span className="block text-xs text-background/60">
            {testimonial.role} · {testimonial.location}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}

/** All voices side by side, so none hides behind a carousel. */
export function TestimonialsSection() {
  return (
    <section className="section-y bg-foreground">
      <div className="site-container">
        <div className="mb-14 lg:mb-16">
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="Voices of change"
            title={
              <>
                In their <em>own words</em>
              </>
            }
          />
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.author}>
              <figure className="flex h-full flex-col rounded-2xl border border-background/10 bg-background/[0.04] p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <Quote className="h-7 w-7 text-accent" aria-hidden="true" />
                  <span className="rounded-full border border-background/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-background/70">
                    {testimonial.category}
                  </span>
                </div>
                <blockquote className="mt-6 flex-1 font-serif text-xl leading-snug text-background">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-background/10 pt-6">
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-background/15">
                    <Image src={testimonial.image} alt="" fill sizes="44px" className="object-cover" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-background">{testimonial.author}</span>
                    <span className="block text-xs text-background/60">
                      {testimonial.role} · {testimonial.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
