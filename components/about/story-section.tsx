import Image from "next/image"

export function StorySection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent/50" />
              <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs">
                Our Story
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
              A Community Built on
              <span className="text-primary italic block mt-1">Compassion & Kindness</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px] max-w-[500px] mx-auto lg:mx-0 pr-4">
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
            <blockquote className="mt-8 pt-8 border-t border-border max-w-[500px] mx-auto lg:mx-0">
              <p className="font-serif text-lg text-primary italic">
                "We don't need a grand reason to help. Kindness itself is the purpose."
              </p>
            </blockquote>
          </div>
          
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                alt="Team555 volunteers working together"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-2xl text-accent-foreground">
              <div className="text-4xl font-serif font-bold">5K+</div>
              <p className="text-xs font-medium uppercase tracking-wider text-accent-foreground/80 mt-1">Active Members</p>
            </div>

            {/* Year badge */}
            <div className="absolute top-6 -right-4 sm:-right-6 bg-background px-5 py-4 rounded-2xl border border-border text-foreground">
              <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-0.5">Established</div>
              <div className="text-2xl font-serif font-bold text-primary">2018</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
