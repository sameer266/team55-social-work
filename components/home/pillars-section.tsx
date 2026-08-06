"use client"

import Image from "next/image"
import { BookOpen, Leaf, Heart, Users, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const pillars = [
  {
    icon: BookOpen,
    title: "Education & Growth",
    description: "Nurturing beautiful minds with caring mentorship, joyful learning, and supportive resources.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    stats: "2,500+ Friends",
    link: "/projects#education",
  },
  {
    icon: Leaf,
    title: "Earth Love",
    description: "Tending to our precious planet with gentle hands, planting seeds of hope and harmony.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    stats: "50,000+ Trees",
    link: "/projects#environment",
  },
  {
    icon: Heart,
    title: "Healing & Care",
    description: "Sharing comforting smiles, listening ears, and essential medical care with vulnerable communities.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    stats: "15,000+ Smiles",
    link: "/projects#healthcare",
  },
  {
    icon: Users,
    title: "Community Bonds",
    description: "Fostering deeply connected, loving neighborhoods where everyone feels they truly belong.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    stats: "75 Hubs of Love",
    link: "/projects#community",
  },
]

export function PillarsSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent/50" />
              <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs">
                What We Do
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
              Paths to a <br className="hidden sm:block" />
              <span className="text-primary italic">Brighter Tomorrow</span>
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-sm text-[15px]">
            Every action matters. We channel our love into these vital areas to bring warmth and support to those who need it most.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-6 max-w-[1400px] mx-auto">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="group">
              {/* Image */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-5">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                
                {/* Overlay content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-accent/80 text-xs font-medium tracking-wider uppercase mb-1">
                    {pillar.stats}
                  </span>
                  <h3 className="font-serif text-2xl text-white">
                    {pillar.title}
                  </h3>
                </div>
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {pillar.description}
              </p>
              
              <Link 
                href={pillar.link}
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
              >
                Learn More
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
