import { PageHero } from "@/components/ui/page-hero"

export function ProjectsHero() {
  return (
    <PageHero
      tagline="Our Work"
      title={
        <>
          Work that starts with <em>community</em>
        </>
      }
      description="Explore initiatives in education, environmental action, healthcare, and community response, and find the one you want to join."
      imageSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80"
      jumpLinks={[
        { href: "#all-projects", label: "Browse all projects" },
        { href: "/what-we-do", label: "Our focus areas" },
      ]}
    />
  )
}
