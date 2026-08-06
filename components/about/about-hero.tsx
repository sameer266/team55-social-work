import { PageHero } from "@/components/ui/page-hero"

export function AboutHero() {
  return (
    <PageHero
      tagline="About Team555"
      title={
        <>
          Youth Leading the Way to a{" "}
          <span className="text-accent italic block sm:inline mt-1 sm:mt-0">Stronger Nepal</span>
        </>
      }
      description="We are a grassroots movement of young Nepalis united by a simple belief: that service to community is the highest form of leadership."
      imageSrc="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&q=80"
      height="lg"
    />
  )
}
