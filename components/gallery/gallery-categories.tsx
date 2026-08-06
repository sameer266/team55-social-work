"use client"

import { useState } from "react"
import { Images, BookOpen, Leaf, Heart, Users, Calendar } from "lucide-react"

const categories = [
  { id: "all", label: "All Photos", icon: Images },
  { id: "education", label: "Education", icon: BookOpen },
  { id: "environment", label: "Environment", icon: Leaf },
  { id: "healthcare", label: "Healthcare", icon: Heart },
  { id: "community", label: "Community", icon: Users },
  { id: "events", label: "Events", icon: Calendar },
]

export function GalleryCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-6 sm:py-8 border-b border-border/50 bg-background/95 backdrop-blur-md sticky top-16 sm:top-20 md:top-24 z-40">
      <div className="container mx-auto px-4">
        <div className="flex sm:flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 sm:pb-0 -mb-4 sm:-mb-0 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full whitespace-nowrap text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 shrink-0 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50 hover:border-primary/30"
              }`}
            >
              <category.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{category.label}</span>
              <span className="sm:hidden">{category.label.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
