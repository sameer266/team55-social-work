"use client"

import { useEffect, useRef, useState } from "react"
import { SectionHeading } from "@/components/ui/section-heading"
import { siteStats } from "@/lib/site-content"

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    // Respect reduced-motion: show the final number straight away
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value)
      setHasAnimated(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={ref} className="font-serif text-5xl tabular-nums text-background sm:text-6xl">
      {count.toLocaleString()}
      <span className="text-accent">{suffix}</span>
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="section-y bg-foreground">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              tone="dark"
              eyebrow="Our impact"
              title={
                <>
                  Numbers that <em>matter</em>
                </>
              }
              description="Every figure is a person, a classroom, or a village that our volunteers have shown up for."
            />
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:col-span-7 lg:gap-x-10">
            {siteStats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse border-t border-background/15 pt-6">
                <dt className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-background/60">{stat.label}</dt>
                <dd>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
