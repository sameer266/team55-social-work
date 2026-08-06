"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const interests = [
  "Education", "Environment", "Healthcare", "Community", 
  "Leadership", "Events", "Media", "Fundraising"
]

export function JoinForm() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    )
  }

  return (
    <section id="register" className="py-24 md:py-32 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent/50" />
              <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs">
                Register
              </span>
              <div className="h-px w-10 bg-accent/50" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-background leading-tight">
              Join <span className="text-accent italic">Team555</span>
            </h2>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="px-5 py-3.5 bg-background/5 border border-background/10 rounded-xl text-background text-sm placeholder:text-background/30 focus:outline-none focus:border-accent/50 transition-colors"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-5 py-3.5 bg-background/5 border border-background/10 rounded-xl text-background text-sm placeholder:text-background/30 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-3.5 bg-background/5 border border-background/10 rounded-xl text-background text-sm placeholder:text-background/30 focus:outline-none focus:border-accent/50 transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-5 py-3.5 bg-background/5 border border-background/10 rounded-xl text-background text-sm placeholder:text-background/30 focus:outline-none focus:border-accent/50 transition-colors"
            />
            <select className="w-full px-5 py-3.5 bg-background/5 border border-background/10 rounded-xl text-background/50 text-sm focus:outline-none focus:border-accent/50 transition-colors appearance-none">
              <option value="">Select Province</option>
              <option>Province 1</option>
              <option>Madhesh</option>
              <option>Bagmati</option>
              <option>Gandaki</option>
              <option>Lumbini</option>
              <option>Karnali</option>
              <option>Sudurpashchim</option>
            </select>

            {/* Interests */}
            <div>
              <p className="text-background/50 text-xs font-medium tracking-wider uppercase mb-3">Areas of Interest</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                      selectedInterests.includes(interest)
                        ? "bg-accent text-accent-foreground"
                        : "border border-background/15 text-background/50 hover:border-accent/40 hover:text-background/70"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              placeholder="Tell us about yourself and why you'd like to join..."
              rows={4}
              className="w-full px-5 py-3.5 bg-background/5 border border-background/10 rounded-xl text-background text-sm placeholder:text-background/30 focus:outline-none focus:border-accent/50 transition-colors resize-none"
            />

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg h-12 text-sm font-medium transition-colors"
            >
              Submit Application
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
