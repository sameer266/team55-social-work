import Image from "next/image"

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
    <section id="team" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-16 mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-accent/50" />
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs">
              Our Family
            </span>
            <div className="h-px w-10 bg-accent/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
            The Hearts Behind <br className="hidden sm:block" />
            <span className="text-primary italic">the Movement</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4 sm:px-8 max-w-6xl mx-auto">
          {team.map((member) => (
            <div 
              key={member.name}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Bio on hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white/80 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
              
              <h3 className="font-serif text-xl text-foreground mb-1">{member.name}</h3>
              <p className="text-accent text-xs font-medium tracking-wider uppercase">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
