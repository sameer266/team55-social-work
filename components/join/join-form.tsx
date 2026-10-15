"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown, Mail, MapPin, Phone } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { siteContact } from "@/lib/site-content"
import { cn } from "@/lib/utils"

const interests = [
  "Education", "Environment", "Healthcare", "Community",
  "Leadership", "Events", "Media", "Fundraising"
]

const provinces = ["Province 1", "Madhesh", "Bagmati", "Gandaki", "Lumbini", "Karnali", "Sudurpashchim"]

const labelClass = "mb-2 block text-sm font-medium text-foreground"
const fieldClass =
  "h-12 w-full rounded-md border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-accent-ink focus:outline-none focus:ring-2 focus:ring-ring/25"

export function JoinForm() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    )
  }

  return (
    <section id="register" className="section-y bg-secondary">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Intro + contact */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Register"
              title={
                <>
                  Join <em>Team555</em>
                </>
              }
              description="Tell us a little about yourself and the work you care about."
            />

            <address className="mt-10 space-y-4 border-t border-border pt-8 not-italic">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Prefer to talk first?</p>
              <a href={`mailto:${siteContact.email}`} className="flex items-center gap-3 text-sm text-foreground hover:text-accent-ink">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-accent-ink ring-1 ring-border">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                {siteContact.email}
              </a>
              <p className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-accent-ink ring-1 ring-border">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                {siteContact.phone}
              </p>
              <p className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-accent-ink ring-1 ring-border">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                {siteContact.address}
              </p>
            </address>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-xl shadow-foreground/5 sm:p-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="join-first-name" className={labelClass}>First name</label>
                  <input id="join-first-name" type="text" autoComplete="given-name" required placeholder="Sita" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="join-last-name" className={labelClass}>Last name</label>
                  <input id="join-last-name" type="text" autoComplete="family-name" placeholder="Sharma" className={fieldClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="join-email" className={labelClass}>Email address</label>
                  <input id="join-email" type="email" autoComplete="email" required placeholder="you@example.com" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="join-phone" className={labelClass}>Phone number</label>
                  <input id="join-phone" type="tel" autoComplete="tel" placeholder="+977" className={fieldClass} />
                </div>
              </div>
              <div>
                <label htmlFor="join-province" className={labelClass}>Province</label>
                <div className="relative">
                  <select id="join-province" defaultValue="" className={cn(fieldClass, "appearance-none pr-10")}>
                    <option value="" disabled>Select province</option>
                    {provinces.map((province) => (
                      <option key={province}>{province}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                </div>
              </div>

              {/* Interests */}
              <fieldset>
                <legend className={labelClass}>Areas of interest</legend>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => {
                    const selected = selectedInterests.includes(interest)
                    return (
                      <button
                        key={interest}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => toggleInterest(interest)}
                        className={cn(
                          "rounded-full border px-4 py-2 text-sm transition-colors",
                          selected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-input bg-background text-foreground/75 hover:border-accent-ink hover:text-foreground",
                        )}
                      >
                        {interest}
                      </button>
                    )
                  })}
                </div>
              </fieldset>

              <div>
                <label htmlFor="join-about" className={labelClass}>About you</label>
                <textarea
                  id="join-about"
                  placeholder="Tell us about yourself and why you'd like to join..."
                  rows={4}
                  className={cn(fieldClass, "h-auto resize-none py-3")}
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Submit Application
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
