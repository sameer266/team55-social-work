"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useEffect, useState } from "react"
import { StoryVideoModal } from "./story-video-modal"


const heroImages = [
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80",
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80",
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images with Crossfade */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 md:pt-28">
        <div className="max-w-2xl">
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-white/40" />
            <span className="text-white/70 font-medium tracking-[0.2em] uppercase text-xs">
              Youth Service Organization
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1] tracking-tight">
            <span className="block">Empowering Youth,</span>
            <span className="block text-accent italic">Building Nepal.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/70 mb-10 max-w-lg leading-relaxed">
            A movement of young Nepalis choosing every day to serve their communities,
            lift their neighbors, and build something lasting.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-13 text-sm font-medium rounded-lg transition-colors"
            >
              <Link href="/join">
                Join the Movement
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              variant="outline"
              size="lg"
              className="px-8 h-13 text-sm border-white/20 text-white hover:bg-white/10 rounded-lg bg-transparent"
            >
              <span className="flex items-center justify-center gap-3">
                <span className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                  <Play className="w-3 h-3 ml-0.5" />
                </span>
                Watch Our Story
              </span>
            </Button>
          </div>

          {/* Stats Row */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 max-w-md">
            <div>
              <div className="text-3xl sm:text-4xl font-serif text-white">5K+</div>
              <div className="text-white/50 text-xs font-medium tracking-wider uppercase mt-1">Volunteers</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif text-white">150+</div>
              <div className="text-white/50 text-xs font-medium tracking-wider uppercase mt-1">Projects</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif text-white">75</div>
              <div className="text-white/50 text-xs font-medium tracking-wider uppercase mt-1">Districts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 right-6 md:right-10 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-8 h-0.5 transition-all ${
              index === currentImage ? "bg-white" : "bg-white/20"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <StoryVideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  )
}
