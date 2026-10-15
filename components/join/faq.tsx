"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { siteContact } from "@/lib/site-content"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How much time commitment is required?",
    answer: "We understand everyone has different schedules. You can contribute as little as 2 hours per week or as much as you like. Many volunteers participate in monthly events, while others are involved in weekly activities. We'll work with your availability.",
  },
  {
    question: "Do I need any special skills or experience?",
    answer: "Not at all! We welcome people from all backgrounds. Whether you're a student, professional, or retiree, there's meaningful work for you. We provide training for all activities and have roles that match various skill levels and interests.",
  },
  {
    question: "Can I volunteer from outside Kathmandu?",
    answer: "Absolutely! We have active chapters in 75 districts across all 7 provinces of Nepal. If there isn't a chapter in your area, we can help you start one. We also have remote volunteering opportunities.",
  },
  {
    question: "How are donations used?",
    answer: "100% of donations go directly to our programs. We maintain complete transparency with quarterly impact reports. Donors can choose to support specific initiatives like education, environment, healthcare, or community development.",
  },
  {
    question: "What is the age requirement for volunteers?",
    answer: "Our core volunteer base is between 16-35 years old, but we welcome people of all ages. For volunteers under 18, we require parental consent. Many of our activities are family-friendly.",
  },
  {
    question: "How do corporate partnerships work?",
    answer: "We work with companies to create customized CSR programs that align with their values and our mission. This can include employee volunteer days, cause marketing campaigns, sponsored projects, or in-kind donations.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-y bg-background">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="FAQ"
                title={
                  <>
                    Common <em>questions</em>
                  </>
                }
              />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Can't find what you're looking for? Write to us at{" "}
                <a href={`mailto:${siteContact.email}`} className="font-medium text-foreground underline underline-offset-4 hover:text-accent-ink">
                  {siteContact.email}
                </a>
                .
              </p>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="divide-y divide-border border-y border-border lg:col-span-8">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              const buttonId = `faq-button-${index}`
              const panelId = `faq-panel-${index}`
              return (
                <div key={faq.question}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className={cn("font-serif text-lg transition-colors sm:text-xl", isOpen ? "text-foreground" : "text-foreground/80")}>
                        {faq.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors",
                          isOpen ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground",
                        )}
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="pb-6 pr-0 sm:pr-16"
                  >
                    <p className="text-base leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
