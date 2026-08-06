import { PageHero } from "@/components/ui/page-hero"

export function ProjectsHero() {
  return (
    <PageHero
      tagline="Our Work"
      title={
        <>
          Projects That{" "}
          <span className="text-accent italic">Transform</span>{" "}
          Communities
        </>
      }
      description="From rural schools to mountain forests, see how Team555 is creating lasting impact across Nepal through action, not just words."
      imageSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80"
      height="md"
    />
  )
}
