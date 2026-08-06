"use client"

import { useState } from "react"
import { BookOpen, TreePine, Building2, Heart, Layers } from "lucide-react"

const categories = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "education", label: "Education", icon: BookOpen },
  { id: "environment", label: "Environment", icon: TreePine },
  { id: "heritage", label: "Heritage", icon: Building2 },
  { id: "relief", label: "Community Relief", icon: Heart },
]

export function ProjectCategories() {
  const [active, setActive] = useState("all")

  return (
    <section className="py-6 sm:py-8 bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-16 sm:top-20 md:top-24 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 sm:pb-2 -mb-4 sm:-mb-2 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActive(category.id)}
              className={`flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full whitespace-nowrap text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 shrink-0 ${
                active === category.id
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50 hover:border-primary/30"
              }`}
            >
              <category.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
