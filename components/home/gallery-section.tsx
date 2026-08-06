"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
    title: "Education Initiative",
    category: "Education",
    size: "large",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80",
    title: "Tree Plantation Drive",
    category: "Environment",
    size: "small",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
    title: "Community Health Camp",
    category: "Healthcare",
    size: "small",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    title: "Youth Leadership",
    category: "Leadership",
    size: "medium",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
    title: "Cultural Festival",
    category: "Culture",
    size: "medium",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    title: "Disaster Relief",
    category: "Relief",
    size: "large",
  },
]

export function GallerySection() {
  return (
    <section className="py-24 md:py-32 bg-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent/50" />
              <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs">
                Our Gallery
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-background leading-tight">
              Moments of <span className="text-accent italic">Impact</span>
            </h2>
          </div>
          <Link 
            href="/gallery" 
            className="group flex items-center gap-2 text-background/60 hover:text-accent transition-colors"
          >
            <span className="text-sm font-medium tracking-wide uppercase">View All</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-8 max-w-6xl mx-auto">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden cursor-pointer group rounded-xl ${
                item.size === "large" ? "md:col-span-2 md:row-span-2" : 
                item.size === "medium" ? "md:row-span-2" : ""
              }`}
            >
              <div className={`relative w-full h-full min-h-[280px] ${
                item.size === "large" ? "aspect-[4/3] md:aspect-auto" : 
                item.size === "medium" ? "aspect-[3/4] md:aspect-auto" : "aspect-square"
              }`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-accent text-xs font-medium tracking-wider uppercase mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
