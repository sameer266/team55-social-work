import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&q=80",
    title: "Education Initiative",
    category: "Education",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80",
    title: "Tree Plantation Drive",
    category: "Environment",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
    title: "Community Health Camp",
    category: "Healthcare",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    title: "Youth Leadership",
    category: "Leadership",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
    title: "Cultural Festival",
    category: "Culture",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    title: "Disaster Relief",
    category: "Relief",
  },
]

// Six tiles on a 3-column grid: one 2x2 lead, two stacked beside it, three across the bottom.
// On the 2-column mobile grid the last tile spans both columns so no row is left half empty.
const tileClass = [
  "col-span-2 row-span-2",
  "",
  "",
  "",
  "",
  "col-span-2 md:col-span-1",
]

export function GallerySection() {
  return (
    <section className="section-y bg-background">
      <div className="site-container">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our gallery"
            title={
              <>
                Moments of <em>impact</em>
              </>
            }
          />
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-foreground underline-offset-4 transition-colors hover:text-accent-ink hover:underline md:self-auto"
          >
            View the full gallery
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <ul className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-3 md:gap-4 lg:auto-rows-[240px]">
          {galleryItems.map((item, index) => (
            <li key={item.id} className={cn("group relative overflow-hidden rounded-xl bg-muted", tileClass[index])}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/0 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-xs">{item.category}</p>
                <p className={cn("mt-1 font-serif leading-snug text-white", index === 0 ? "text-xl sm:text-2xl" : "text-base sm:text-lg")}>
                  {item.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
