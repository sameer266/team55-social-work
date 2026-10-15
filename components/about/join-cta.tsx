import { NextStep } from "@/components/sections/next-step"

export function JoinCTA() {
  return (
    <NextStep
      eyebrow="Join the movement"
      title={
        <>
          Ready to write the <em>next chapter?</em>
        </>
      }
      description="Join hundreds of young Nepalis who are already making a difference. Your community is waiting for you."
      primary={{ href: "/join", label: "Join Team555 Today" }}
      secondary={{ href: "/what-we-do", label: "See what we do" }}
    />
  )
}
