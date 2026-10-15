// The four areas Team555 works in. Each has its own detail page at /what-we-do/[slug].
// Outcomes come from the projects listed in lib/social-projects.ts.

import {
  Ambulance,
  BookOpen,
  GraduationCap,
  HeartPulse,
  Home,
  LifeBuoy,
  type LucideIcon,
  Package,
  School,
  Siren,
  Sprout,
  Stethoscope,
  Tent,
  Trees,
  Users,
  Waves,
} from "lucide-react"
import type { SocialProject } from "@/lib/social-projects"

export type FocusArea = {
  slug: string
  category: SocialProject["category"]
  title: string
  icon: LucideIcon
  image: string
  tagline: string
  summary: string
  /** Why this work matters: the context behind it. */
  context: string[]
  approach: { icon: LucideIcon; title: string; description: string }[]
  outcomes: { value: string; label: string }[]
}

export const focusAreas: FocusArea[] = [
  {
    slug: "education",
    category: "Education",
    title: "Education",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80",
    tagline: "Every child deserves a classroom, and someone who believes in them.",
    summary: "Scholarships, school resources, and mentorship for students in rural communities.",
    context: [
      "In Nepal's remote hill and mountain villages, distance, cost, and a lack of learning materials still keep many children from finishing school. Students who do stay often have no one to guide them toward university or a career.",
      "We focus on the two things that make the biggest difference: the resources to stay in school, and mentors who have already walked the path.",
    ],
    approach: [
      { icon: GraduationCap, title: "Scholarships", description: "Fees, books, and supplies for students who would otherwise drop out." },
      { icon: School, title: "School partnerships", description: "Working with partner schools so support reaches classrooms directly." },
      { icon: Users, title: "Mentorship", description: "University volunteers guide high schoolers through workshops and career advice." },
    ],
    outcomes: [
      { value: "500+", label: "Students supported" },
      { value: "25", label: "Partner schools" },
      { value: "95%", label: "Retention rate" },
      { value: "300+", label: "Mentorship pairings" },
    ],
  },
  {
    slug: "environment",
    category: "Environment",
    title: "Environmental action",
    icon: Trees,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=80",
    tagline: "Healthy forests and clean rivers, cared for by the people who live beside them.",
    summary: "Tree planting, river cleanups, and community-led environmental practices.",
    context: [
      "Deforested slopes erode and flood, and rivers like the Bagmati carry the waste of fast-growing towns. These problems are felt first by the communities who depend on the land and water.",
      "Our approach puts those communities in charge. They plant, tend, and monitor; we bring the volunteers and the know-how.",
    ],
    approach: [
      { icon: Trees, title: "Reforestation", description: "Large-scale planting across deforested mountain districts." },
      { icon: Sprout, title: "Community nurseries", description: "Locally run nurseries that keep growing saplings year after year." },
      { icon: Waves, title: "River cleanups", description: "Weekly drives and awareness programs along the Bagmati basin." },
    ],
    outcomes: [
      { value: "50,000+", label: "Trees planted" },
      { value: "100", label: "Hectares covered" },
      { value: "100+", label: "Cleanup drives" },
      { value: "20 tons", label: "Waste removed" },
    ],
  },
  {
    slug: "health",
    category: "Healthcare",
    title: "Community health",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80",
    tagline: "Essential care, brought to the villages the roads don't reach.",
    summary: "Mobile clinics bringing essential medical care closer to remote communities.",
    context: [
      "For families in Nepal's most remote districts, the nearest clinic can be days away. Routine problems go untreated until they become emergencies.",
      "Our mobile clinics bring volunteer doctors and supplies directly to these communities through regular health camps.",
    ],
    approach: [
      { icon: Ambulance, title: "Mobile clinics", description: "Care that travels to the community instead of the other way round." },
      { icon: Tent, title: "Health camps", description: "Regular camps for check-ups, treatment, and health guidance." },
      { icon: Stethoscope, title: "Volunteer doctors", description: "Medical professionals who give their time to serve remote areas." },
    ],
    outcomes: [
      { value: "15,000+", label: "Patients treated" },
      { value: "120", label: "Health camps" },
      { value: "45", label: "Doctors engaged" },
      { value: "15", label: "Remote districts" },
    ],
  },
  {
    slug: "community-response",
    category: "Community",
    title: "Community response",
    icon: LifeBuoy,
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80",
    tagline: "When disaster strikes, local teams are there first.",
    summary: "Local teams providing emergency supplies and support after disasters.",
    context: [
      "Floods, landslides, and earthquakes hit Nepal's communities every year, and the first days decide how families recover.",
      "Our response network trains volunteers in every province so help arrives quickly, and then stays to support rebuilding.",
    ],
    approach: [
      { icon: Siren, title: "Rapid response", description: "Trained teams ready to deploy within 24 hours of a disaster." },
      { icon: Package, title: "Emergency supplies", description: "Food, shelter, and essentials delivered to affected families." },
      { icon: Home, title: "Recovery support", description: "Staying on to help communities rebuild homes and hope." },
    ],
    outcomes: [
      { value: "10,000+", label: "Families helped" },
      { value: "24 hr", label: "Response time" },
      { value: "7", label: "Provinces covered" },
      { value: "500+", label: "Response volunteers" },
    ],
  },
]

export const focusAreaForCategory = (category: SocialProject["category"]) =>
  focusAreas.find((area) => area.category === category)
