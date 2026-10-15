export type SocialProject = {
  id: string
  category: "Education" | "Environment" | "Healthcare" | "Community"
  title: string
  description: string
  image: string
  location: string
  volunteers: string
  year: string
  achievements: string[]
  /** The problem this project exists to solve. */
  challenge: string
  /** How the project works, in order. */
  approach: string[]
}

export const socialProjects: SocialProject[] = [
  {
    id: "education",
    category: "Education",
    title: "Shiksha Sathi Program",
    description: "Providing scholarships and educational resources to 500+ students in remote Himalayan villages, ensuring no child is left behind in their pursuit of knowledge.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&q=85",
    location: "12 Districts",
    volunteers: "200+",
    year: "2022-Present",
    achievements: ["500+ students supported", "25 schools partnered", "95% retention rate"],
    challenge: "In remote Himalayan villages, the cost of fees, uniforms, and books forces many bright students to leave school before they finish.",
    approach: [
      "Identify students at risk of dropping out, together with partner schools",
      "Fund scholarships and provide books and learning supplies",
      "Follow each student's progress through the school year",
    ],
  },
  {
    id: "education-2",
    category: "Education",
    title: "Youth Mentorship Program",
    description: "Connecting university students with high schoolers in rural areas for career guidance, academic support, and life skills training.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=85",
    location: "Kathmandu Valley",
    volunteers: "150+",
    year: "2023-Present",
    achievements: ["300+ mentorship pairings", "Monthly workshops", "Career guidance series"],
    challenge: "Rural high schoolers often have no one to guide them toward university, careers, or the skills they need beyond the classroom.",
    approach: [
      "Pair university volunteers with high school students",
      "Run monthly workshops on study and life skills",
      "Hold a career guidance series on university and job pathways",
    ],
  },
  {
    id: "environment",
    category: "Environment",
    title: "Hariyo Nepal Campaign",
    description: "A massive reforestation initiative planting 50,000 trees across deforested regions, engaging local communities in sustainable environmental practices.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=85",
    location: "8 Mountain Districts",
    volunteers: "500+",
    year: "2021-Present",
    achievements: ["50,000+ trees planted", "100 hectares covered", "Community nurseries"],
    challenge: "Deforested hillsides lose their topsoil, flood more often, and leave villages without the forest resources they rely on.",
    approach: [
      "Grow native saplings in community-run nurseries",
      "Plant with local volunteers across mountain districts",
      "Train communities in sustainable practices to care for the new forest",
    ],
  },
  {
    id: "environment-2",
    category: "Environment",
    title: "River Cleanup Initiative",
    description: "Weekly cleanup drives along the Bagmati and other rivers, combined with community awareness programs on water conservation and pollution prevention.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&q=85",
    location: "Bagmati Basin",
    volunteers: "300+",
    year: "2020-Present",
    achievements: ["100+ cleanup drives", "20 tons waste removed", "Monitoring network"],
    challenge: "Rivers like the Bagmati carry growing amounts of household and plastic waste, harming public health and the ecosystems downstream.",
    approach: [
      "Hold weekly cleanup drives along the riverbanks",
      "Run awareness programs on water conservation and pollution",
      "Build a volunteer monitoring network to track river health",
    ],
  },
  {
    id: "healthcare",
    category: "Healthcare",
    title: "Swasthya Sewa Mobile Clinics",
    description: "Mobile health clinics bringing essential medical care to the most remote corners of Nepal, where healthcare facilities are a distant dream.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&q=85",
    location: "15 Remote Districts",
    volunteers: "100+",
    year: "2021-Present",
    achievements: ["15,000+ patients treated", "120 health camps", "45 doctors engaged"],
    challenge: "In Nepal's remote districts the nearest health facility can be days away, so treatable conditions often go unchecked until they become serious.",
    approach: [
      "Bring mobile clinics directly to remote communities",
      "Hold regular health camps staffed by volunteer doctors",
      "Share basic health and hygiene guidance with families",
    ],
  },
  {
    id: "community",
    category: "Community",
    title: "Disaster Response Network",
    description: "Rapid deployment teams providing emergency supplies, shelter, and support to communities affected by floods, earthquakes, and other natural disasters.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=85",
    location: "All 7 Provinces",
    volunteers: "500+",
    year: "2020-Present",
    achievements: ["10,000+ families helped", "24-hour response", "Emergency supplies"],
    challenge: "When floods, earthquakes, and landslides strike, the first days decide how families recover, yet outside help can take a long time to arrive.",
    approach: [
      "Keep trained response teams ready in every province",
      "Deliver emergency supplies and shelter within 24 hours",
      "Stay on to support families through recovery",
    ],
  },
]
