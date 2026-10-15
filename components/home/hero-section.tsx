import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react"
import { formatStat, organization, siteStats } from "@/lib/site-content"

const trustPoints = [
  { icon: CalendarDays, label: `Serving since ${organization.founded}` },
  { icon: MapPin, label: "Active in all 7 provinces" },
  { icon: Users, label: `${formatStat(siteStats[0])} volunteers` },
]

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[600px] items-end overflow-hidden bg-foreground sm:min-h-[640px] lg:min-h-[min(88svh,820px)] lg:items-center">
      <Image
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=85"
        alt="Young volunteers sharing time with children in their community"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-foreground/92 via-foreground/60 to-foreground/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground/70 via-transparent to-transparent lg:from-foreground/40" />

      <div className="site-container pb-16 pt-28 sm:pb-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent sm:text-xs sm:tracking-[0.2em]">
            <span aria-hidden="true" className="h-px w-10 bg-accent/70" />
            Team555 Nepal · Youth service organization
          </p>
          <h1 className="font-serif text-[2.75rem] leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Young people, working for a <em className="font-normal italic text-accent">stronger Nepal.</em>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            We bring young people together to support communities through education, environmental action, health, and local service.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Explore our projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/join"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/60 px-7 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-foreground"
            >
              How to get involved
            </Link>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/80">
            {trustPoints.map((point) => (
              <li key={point.label} className="inline-flex items-center gap-2">
                <point.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                {point.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
