import Image from "next/image"
import { SectionHeading } from "@/components/ui/section-heading"
import { formatStat, siteStats } from "@/lib/site-content"

export function StorySection() {
  return (
    <section id="story" className="section-y bg-background">
      <div className="site-container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Our story"
              title={
                <>
                  A community built on <em>compassion and kindness</em>
                </>
              }
            />
            <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Team555 began with a simple belief: that everyone has the power to brighten
                someone else's day. We saw our neighbors facing challenges and realized that
                together, we could be the helping hands they needed.
              </p>
              <p>
                What started as a few friends sharing kindness has blossomed into a beautiful
                family of volunteers. Every day, more uplifting individuals join our community
                to share their love, time, and resources.
              </p>
              <p>
                Today, our warm community stretches across all corners of Nepal. From students
                to professionals, we are all united by a shared purpose: to uplift each other,
                foster human connection, and create a world where everyone feels supported.
              </p>
            </div>
            <blockquote className="mt-10 max-w-xl border-l-2 border-accent-ink pl-6">
              <p className="font-serif text-xl italic leading-snug text-foreground">
                "We don't need a grand reason to help. Kindness itself is the purpose."
              </p>
            </blockquote>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:col-start-8 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                alt="Team555 volunteers working together"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 left-4 rounded-xl bg-primary px-6 py-5 text-primary-foreground shadow-xl shadow-foreground/15 sm:-left-6">
              <div className="font-serif text-4xl">{formatStat(siteStats[0])}</div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/75">{siteStats[0].label}</p>
            </div>

            {/* Year badge */}
            <div className="absolute right-4 top-6 rounded-xl border border-border bg-card px-5 py-4 text-foreground shadow-lg shadow-foreground/10 sm:-right-6">
              <div className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Established</div>
              <div className="font-serif text-2xl text-accent-ink">2018</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
