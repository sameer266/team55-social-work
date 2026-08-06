"use client"

import { useEffect, useState, useRef } from "react"

const impactStats = [
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 30, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "", label: "Districts Reached" },
  { value: 10000, suffix: "+", label: "Lives Touched" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-primary-foreground">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export function ImpactSection() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary-foreground/70 mb-2 font-medium">Our Reach</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            The Numbers That Matter
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {impactStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/80 mt-3 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
