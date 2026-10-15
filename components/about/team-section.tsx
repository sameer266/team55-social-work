import Image from "next/image"
import { SectionHeading } from "@/components/ui/section-heading"

const team = [
  {
    name: "Aarav Sharma",
    role: "Community Builder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Always ready with a warm smile, Aarav left his engineering dreams to listen, care, and build a family of volunteers.",
  },
  {
    name: "Priya Gurung",
    role: "Heart of Operations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: "Priya weaves love and logistics together, ensuring every community receives the care and attention they truly deserve.",
  },
  {
    name: "Bikash Tamang",
    role: "Youth Mentor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    bio: "With unending patience and kindness, Bikash guides young minds to believe in themselves and change the world.",
  },
  {
    name: "Sunita Rai",
    role: "Earth Guardian",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "Sunita inspires us all to treat Mother Nature with the same gentle love and respect we give each other.",
  },
  {
    name: "Raj Magar",
    role: "Joyful Educator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "A deeply caring soul who believes every child's potential can be unlocked with a little love and a good book.",
  },
  {
    name: "Maya Thapa",
    role: "Storyteller of Hope",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    bio: "Maya shares the beautiful, uplifting stories of our community to remind everyone that kindness is everywhere.",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="section-y bg-background">
      <div className="site-container">
        <div className="mb-14 lg:mb-16">
          <SectionHeading
            align="center"
            eyebrow="Our family"
            title={
              <>
                The hearts behind <em>the movement</em>
              </>
            }
          />
        </div>

        {/* Three columns on desktop so six people fill two even rows */}
        <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <li key={member.name} className="group">
              <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-xl bg-muted sm:aspect-square lg:aspect-[4/5]">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-ink">{member.role}</p>
              <h3 className="mt-2 font-serif text-2xl text-foreground">{member.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
