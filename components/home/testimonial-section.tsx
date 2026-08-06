"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "Team555 changed my life. Through their scholarship program, I was able to complete my education and now I'm giving back to my community as a teacher.",
    author: "Srijana Tamang",
    role: "Scholarship Recipient, 2019",
    location: "Sindhupalchok",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
  },
  {
    id: 2,
    quote: "The reforestation project in our village brought our community together. We planted over 5,000 trees and learned sustainable farming practices that transformed our lives.",
    author: "Ram Bahadur Gurung",
    role: "Community Leader",
    location: "Kaski",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  },
  {
    id: 3,
    quote: "When the earthquake destroyed our village, Team555 was there within days. They helped us rebuild not just our homes, but our hope for the future.",
    author: "Maya Devi Shrestha",
    role: "Earthquake Survivor",
    location: "Gorkha",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
  },
]

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent/50" />
              <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs">
                Testimonials
              </span>
              <div className="h-px w-10 bg-accent/50" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-tight">
              Voices of <span className="text-accent italic">Change</span>
            </h2>
          </div>

          {/* Testimonial */}
          <div className="relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === currentIndex 
                    ? "opacity-100 relative" 
                    : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              >
                <blockquote className="text-center">
                  <Quote className="w-8 h-8 text-accent/30 mx-auto mb-6" />
                  <p className="font-serif text-xl md:text-2xl lg:text-3xl text-primary-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden mb-4 ring-2 ring-white/20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <cite className="not-italic">
                      <div className="text-sm font-medium text-primary-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-primary-foreground/50 text-xs mt-1">
                        {testimonial.role} · {testimonial.location}
                      </div>
                    </cite>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-white/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-primary-foreground" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "w-8 bg-accent" 
                      : "w-1.5 bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-white/30 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
