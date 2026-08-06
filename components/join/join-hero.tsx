import { PageHero } from "@/components/ui/page-hero"

export function JoinHero() {
  return (
    <PageHero
      tagline="Get Involved"
      title={
        <>
          Your Nepal{" "}
          <span className="text-accent italic">Needs You</span>
        </>
      }
      description="Whether you can spare 2 hours a week or 20, there is meaningful work waiting for you. No experience needed — just the will to show up."
      imageSrc="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
      height="md"
    />
  )
}
