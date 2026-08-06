"use client"

import Image from "next/image"
import { MapPin, Users, Calendar, ArrowRight } from "lucide-react"

const projects = [
  {
    id: "education",
    category: "Education",
    title: "Shiksha Sathi Program",
    description: "Providing scholarships and educational resources to 500+ students in remote Himalayan villages, ensuring no child is left behind in their pursuit of knowledge.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80",
    location: "12 Districts",
    volunteers: "200+",
    year: "2022-Present",
    achievements: ["500+ students supported", "25 schools partnered", "95% retention rate"],
  },
  {
    id: "education-2",
    category: "Education",
    title: "Youth Mentorship Program",
    description: "Connecting university students with high schoolers in rural areas for career guidance, academic support, and life skills training.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    location: "Kathmandu Valley",
    volunteers: "150+",
    year: "2023-Present",
    achievements: ["300+ mentorship pairings", "Monthly workshops", "Career guidance series"],
  },
  {
    id: "environment",
    category: "Environment",
    title: "Hariyo Nepal Campaign",
    description: "A massive reforestation initiative planting 50,000 trees across deforested regions, engaging local communities in sustainable environmental practices.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    location: "8 Mountain Districts",
    volunteers: "500+",
    year: "2021-Present",
    achievements: ["50,000+ trees planted", "100 hectares covered", "Community nurseries"],
  },
  {
    id: "environment-2",
    category: "Environment",
    title: "River Cleanup Initiative",
    description: "Weekly cleanup drives along the Bagmati and other rivers, combined with community awareness programs on water conservation and pollution prevention.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80",
    location: "Bagmati Basin",
    volunteers: "300+",
    year: "2020-Present",
    achievements: ["100+ cleanup drives", "20 tons waste removed", "Monitoring network"],
  },
  {
    id: "healthcare",
    category: "Healthcare",
    title: "Swasthya Sewa Mobile Clinics",
    description: "Mobile health clinics bringing essential medical care to the most remote corners of Nepal, where healthcare facilities are a distant dream.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
    location: "15 Remote Districts",
    volunteers: "100+",
    year: "2021-Present",
    achievements: ["15,000+ patients treated", "120 health camps", "45 doctors engaged"],
  },
  {
    id: "community",
    category: "Community",
    title: "Disaster Response Network",
    description: "Rapid deployment teams providing emergency supplies, shelter, and support to communities affected by floods, earthquakes, and other natural disasters.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    location: "All 7 Provinces",
    volunteers: "500+",
    year: "2020-Present",
    achievements: ["10,000+ families helped", "24-hour response", "Emergency supplies"],
  },
]

export function AllProjects() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-4 lg:px-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <article 
              key={project.id}
              id={project.id.replace("-2", "")}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-foreground text-[10px] font-medium tracking-widest uppercase rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Meta overlay */}
                <div className="absolute bottom-4 left-4 flex gap-4 text-xs text-white/80">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3 h-3" />
                    {project.volunteers}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Achievements */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.achievements.map((achievement) => (
                  <span 
                    key={achievement} 
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-[11px] font-medium rounded-full"
                  >
                    {achievement}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-2 text-sm text-foreground/60 group-hover:text-accent transition-colors">
                Learn Details
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

