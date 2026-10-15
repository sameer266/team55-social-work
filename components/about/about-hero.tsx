import { PageHero } from "@/components/ui/page-hero"

export function AboutHero() {
  return (
    <PageHero
      tagline="About Team555"
      title={
        <>
          Youth leading the way to a <em>stronger Nepal</em>
        </>
      }
      description="We are a grassroots movement of young Nepalis united by a simple belief: that service to community is the highest form of leadership."
      imageSrc="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&q=80"
      jumpLinks={[
        { href: "#story", label: "Our story" },
        { href: "#mission", label: "Mission & vision" },
        { href: "#values", label: "Values" },
        { href: "#journey", label: "Journey" },
        { href: "#team", label: "Team" },
      ]}
    />
  )
}
