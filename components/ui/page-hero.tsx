"use client"

import Image from "next/image"
import { ReactNode } from "react"

interface PageHeroProps {
  tagline: string
  title: ReactNode
  description: string
  imageSrc: string
  centered?: boolean
  height?: "sm" | "md" | "lg"
}

const heightClasses = {
  sm: "min-h-screen",
  md: "min-h-screen",
  lg: "min-h-screen",
}

export function PageHero({
  tagline,
  title,
  description,
  imageSrc,
  centered = false,
  height = "md",
}: PageHeroProps) {
  return (
    <section className={`relative ${heightClasses[height]} flex items-center overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlays */}
        <div className={`absolute inset-0 ${
          centered 
            ? "bg-gradient-to-b from-black/70 via-black/50 to-black/70" 
            : "bg-gradient-to-r from-black/85 via-black/60 to-black/30"
        }`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`${centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
          {/* Tagline */}
          <div className={`flex items-center gap-3 mb-6 md:mb-8 ${centered ? "justify-center" : ""}`}>
            <div className="h-px w-8 sm:w-12 bg-accent" />
            <span className="text-accent font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm">
              {tagline}
            </span>
            {centered && <div className="h-px w-8 sm:w-12 bg-accent" />}
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 md:mb-6 leading-[1.15] tracking-tight text-balance">
            {title}
          </h1>

          {/* Description */}
          <p className={`text-base sm:text-lg md:text-xl text-white/80 leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}>
            {description}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
