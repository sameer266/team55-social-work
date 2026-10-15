// Single source for organisation copy, figures and contact details shown across the site.
// Change a value here and it updates on every page.

import {
  Award,
  BarChart3,
  Ear,
  GraduationCap,
  type LucideIcon,
  MapPinned,
  Siren,
  Trees,
  Users,
  Workflow,
} from "lucide-react"

export const siteContact = {
  email: "hello@team555.org",
  phone: "+977 1-456-7890",
  address: "Thamel, Kathmandu, Nepal 44600",
}

export type SiteStat = {
  value: number
  suffix: string
  label: string
}

export const siteStats: SiteStat[] = [
  { value: 500, suffix: "+", label: "Active volunteers" },
  { value: 30, suffix: "+", label: "Projects delivered" },
  { value: 15, suffix: "", label: "Districts reached" },
  { value: 10000, suffix: "+", label: "Lives touched" },
]

export const formatStat = (stat: SiteStat) => `${stat.value.toLocaleString()}${stat.suffix}`

export const organization = {
  founded: 2018,
  totalDistricts: 77,
  mission:
    "To empower young Nepalis to build a better Nepal through community service, education, environmental action, and health.",
  vision: "A Nepal where every community, however remote, has young people ready to stand beside it.",
  philosophy: "We are not waiting to grow up to change Nepal. We are changing it now.",
  whoWeAre: [
    "Team555 began with a powerful belief: the youth of Nepal hold the energy, creativity, and resilience to solve the challenges facing our communities today, not tomorrow.",
    "From environmental action to educational support, health to community relief, we mobilize passionate young leaders across all 7 provinces to serve with purpose and lead with integrity.",
  ],
}

export type Step = { icon: LucideIcon; title: string; description: string }

/** How every project runs, from first conversation to published results. */
export const howWeWork: Step[] = [
  {
    icon: Ear,
    title: "Listen first",
    description: "Every project starts with the community. Local leaders, teachers, and families tell us what they need most.",
  },
  {
    icon: Workflow,
    title: "Plan together",
    description: "We design the work with local partners so it fits the place and keeps going after volunteers leave.",
  },
  {
    icon: Users,
    title: "Mobilize youth",
    description: "Trained volunteers from local chapters do the work, from classrooms and clinics to riverbanks and hillsides.",
  },
  {
    icon: BarChart3,
    title: "Measure and report",
    description: "We track results and publish quarterly impact reports, so supporters can see exactly what changed.",
  },
]

export type Goal = {
  icon: LucideIcon
  title: string
  description: string
  /** Where we are today, using figures already published on the site. */
  progressLabel: string
  /** 0 to 1. Only set where there is a real measured fraction. */
  progress?: number
}

const districtsReached = siteStats.find((stat) => stat.label === "Districts reached")?.value ?? 0

export const goals: Goal[] = [
  {
    icon: MapPinned,
    title: "Reach every district",
    description: "Grow local chapters until young volunteers serve communities in all 77 districts of Nepal.",
    progressLabel: `${districtsReached} of ${organization.totalDistricts} districts reached`,
    progress: districtsReached / organization.totalDistricts,
  },
  {
    icon: GraduationCap,
    title: "Keep students in school",
    description: "Support students in remote villages with scholarships and mentors until they finish their education.",
    progressLabel: "95% retention among supported students",
    progress: 0.95,
  },
  {
    icon: Trees,
    title: "Restore Nepal's forests",
    description: "Replant deforested hillsides and build community nurseries that keep growing after planting day.",
    progressLabel: "50,000+ trees planted across 100 hectares",
  },
  {
    icon: Siren,
    title: "Respond within a day",
    description: "Keep trained teams ready to bring supplies and support within 24 hours of a disaster.",
    progressLabel: "24-hour response network in all 7 provinces",
  },
  {
    icon: Award,
    title: "Grow the next leaders",
    description: "Launch a youth leadership academy to train the next generation of community leaders.",
    progressLabel: "Set out in our 2025 roadmap",
  },
]

export type Testimonial = {
  quote: string
  author: string
  role: string
  location: string
  image: string
  /** Matches a project category so detail pages can show a relevant voice. */
  category: "Education" | "Environment" | "Healthcare" | "Community"
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Team555 changed my life. Through their scholarship program, I was able to complete my education and now I'm giving back to my community as a teacher.",
    author: "Srijana Tamang",
    role: "Scholarship Recipient, 2019",
    location: "Sindhupalchok",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    category: "Education",
  },
  {
    quote:
      "The reforestation project in our village brought our community together. We planted over 5,000 trees and learned sustainable farming practices that transformed our lives.",
    author: "Ram Bahadur Gurung",
    role: "Community Leader",
    location: "Kaski",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    category: "Environment",
  },
  {
    quote:
      "When the earthquake destroyed our village, Team555 was there within days. They helped us rebuild not just our homes, but our hope for the future.",
    author: "Maya Devi Shrestha",
    role: "Earthquake Survivor",
    location: "Gorkha",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    category: "Community",
  },
]
