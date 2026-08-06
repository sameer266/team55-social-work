"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Shiksha Sathi Smiles",
    category: "Education",
    description: "Bringing joy and warmth to students in remote villages by sharing heartfelt educational resources.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80",
    stats: { friends: "500+", schools: "25", villages: "12" }
  },
  {
    id: 2,
    title: "Hariyo Nepal Harmony",
    category: "Environment",
    description: "Nurturing our beautiful planet together by planting lush trees and fostering green communities.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    stats: { trees: "50K", helpers: "2K", hectares: "100" }
  },
  {
    id: 3,
    title: "Wellness & Warmth",
    category: "Healthcare",
    description: "Sharing care, compassion, and comforting medical attention with those living in distant areas.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
    stats: { smiles: "15K", camps: "120", angels: "45" }
  },
]

export function FeaturedWorkSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent/50" />
              <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs">
                Featured Projects
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
              Creating a Kinder <span className="text-primary italic">World Together</span>
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-lg h-11 px-6 text-sm border-border hover:bg-foreground hover:text-background transition-colors">
            <Link href="/projects" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`}
              className="group block"
            >
              <article>
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-foreground text-[10px] font-medium tracking-widest uppercase rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex gap-5 pt-4 border-t border-border/50">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-base font-semibold text-foreground">{value}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{key}</div>
                    </div>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
