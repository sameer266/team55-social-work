"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

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
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-accent/50" />
              <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs">
                FAQ
              </span>
              <div className="h-px w-10 bg-accent/50" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
              Common <span className="text-primary italic">Questions</span>
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="divide-y divide-border">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start justify-between gap-4 text-left"
                >
                  <h3 className={`font-medium text-base transition-colors ${
                    openIndex === index ? "text-foreground" : "text-foreground/70"
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 mt-3" : "max-h-0"
                }`}>
                  <p className="text-muted-foreground text-sm leading-relaxed pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
