"use client"

import { useEffect, useState, useRef } from "react"
import { Users, FolderOpen, MapPin, HeartHandshake } from "lucide-react"

const stats = [
  { value: 5000, suffix: "+", label: "Active Volunteers", icon: Users },
  { value: 150, suffix: "+", label: "Projects Completed", icon: FolderOpen },
  { value: 75, suffix: "", label: "Districts Reached", icon: MapPin },
  { value: 50000, suffix: "+", label: "Lives Impacted", icon: HeartHandshake },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
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
    <div ref={ref} className="font-serif text-4xl sm:text-5xl text-foreground font-bold tracking-tight">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-accent/50" />
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs">
              Our Impact
            </span>
            <div className="h-px w-10 bg-accent/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            Numbers That <span className="text-primary italic">Matter</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="bg-background p-8 md:p-10 text-center group hover:bg-muted/30 transition-colors duration-300"
            >
              <stat.icon className="w-5 h-5 text-accent mx-auto mb-5 opacity-60" />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground text-xs font-medium tracking-wider uppercase mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
