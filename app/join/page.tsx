import { Metadata } from "next"
import { JoinHero } from "@/components/join/join-hero"
import { JoinOptions } from "@/components/join/join-options"
import { JoinForm } from "@/components/join/join-form"
import { FAQ } from "@/components/join/faq"

export const metadata: Metadata = {
  title: "Join Us - Team555 Nepal",
  description: "Become part of Nepal's largest youth service movement. Volunteer, donate, or partner with us to make a difference.",
}

export default function JoinPage() {
  return (
    <>
      <JoinHero />
      <JoinOptions />
      <JoinForm />
      <FAQ />
    </>
  )
}
