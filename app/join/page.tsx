import { Metadata } from "next"
import { JoinHero } from "@/components/join/join-hero"
import { JoinOptions } from "@/components/join/join-options"
import { JoinSteps } from "@/components/join/join-steps"
import { JoinForm } from "@/components/join/join-form"
import { FAQ } from "@/components/join/faq"

export const metadata: Metadata = {
  title: "Join Us - Team555 Nepal",
  description: "Become part of Nepal's largest youth service movement. Volunteer, donate, or partner with us to make a difference.",
}

// Flow: choose a path -> see what happens next -> apply -> answer remaining doubts
export default function JoinPage() {
  return (
    <>
      <JoinHero />
      <JoinOptions />
      <JoinSteps />
      <JoinForm />
      <FAQ />
    </>
  )
}
