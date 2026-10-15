"use client"

import Image from "next/image"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { X, ChevronLeft, ChevronRight, Play, Images, Film } from "lucide-react"
import { cn } from "@/lib/utils"

type MediaType = "image" | "video"
type CategoryType = "all" | "community" | "education" | "environment" | "healthcare" | "events"

interface MediaItem {
  id: number
  type: MediaType
  src: string
  thumbnail?: string
  title: string
  category: CategoryType
  description: string
  albumId?: number
}

interface Album {
  id: number
  name: string
  coverImage: string
  itemCount: number
}

const albums: Album[] = [
  { id: 1, name: "Annual Summit 2024", coverImage: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80", itemCount: 24 },
  { id: 2, name: "Tree Plantation Drive", coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80", itemCount: 18 },
  { id: 3, name: "Rural Education Initiative", coverImage: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80", itemCount: 32 },
]

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    title: "Our Impact Story",
    category: "community",
    description: "A documentary showcasing our journey and the lives we've touched across Nepal.",
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&q=80",
    title: "Education Initiative",
    category: "education",
    description: "Students receiving new books and supplies at a rural school.",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&q=80",
    title: "Tree Plantation Drive",
    category: "environment",
    description: "Community members participating in our annual reforestation campaign.",
    albumId: 2,
  },
  {
    id: 4,
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
    title: "Health Camp Highlights",
    category: "healthcare",
    description: "Moments from our mobile health camps reaching remote villages.",
  },
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80",
    title: "Leadership Workshop",
    category: "events",
    description: "Young leaders learning essential skills at our annual summit.",
    albumId: 1,
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80",
    title: "Cultural Festival",
    category: "community",
    description: "Celebrating Nepal's rich cultural heritage at our annual festival.",
  },
  {
    id: 7,
    type: "image",
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=80",
    title: "Disaster Relief",
    category: "community",
    description: "Emergency relief distribution after the devastating floods.",
  },
  {
    id: 8,
    type: "image",
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&q=80",
    title: "Scholarship Recipients",
    category: "education",
    description: "Bright students awarded scholarships for higher education.",
    albumId: 3,
  },
  {
    id: 9,
    type: "image",
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80",
    title: "Green Nepal Initiative",
    category: "environment",
    description: "Volunteers nurturing saplings at our community nursery.",
    albumId: 2,
  },
  {
    id: 10,
    type: "image",
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    title: "Mobile Clinic",
    category: "healthcare",
    description: "Our mobile health unit reaching remote mountain villages.",
  },
  {
    id: 11,
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
    title: "Annual Meet 2024",
    category: "events",
    description: "Highlights from our annual convention with volunteers from all 75 districts.",
    albumId: 1,
  },
  {
    id: 12,
    type: "image",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80",
    title: "Community Gathering",
    category: "community",
    description: "Local community members joining hands for a cleaner neighborhood.",
  },
]

const categories: { value: CategoryType; label: string }[] = [
  { value: "all", label: "All" },
  { value: "community", label: "Community" },
  { value: "education", label: "Education" },
  { value: "environment", label: "Environment" },
  { value: "healthcare", label: "Healthcare" },
  { value: "events", label: "Events" },
]

type ViewMode = "all" | "albums"

const PAGE_SIZE = 8

export function GalleryGrid() {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all")
  const [activeAlbum, setActiveAlbum] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<ViewMode>("all")
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const lastTriggerRef = useRef<HTMLElement | null>(null)

  const filteredMedia = useMemo(
    () =>
      mediaItems.filter(
        (item) =>
          (activeAlbum === null || item.albumId === activeAlbum) &&
          (activeCategory === "all" || item.category === activeCategory),
      ),
    [activeAlbum, activeCategory],
  )
  const shownMedia = filteredMedia.slice(0, visibleCount)
  const hasMore = filteredMedia.length > visibleCount
  const activeAlbumData = albums.find((album) => album.id === activeAlbum)

  const chooseCategory = (category: CategoryType) => {
    setActiveCategory(category)
    setVisibleCount(PAGE_SIZE)
  }

  // Opening an album now shows that album's media instead of jumping back to everything
  const openAlbum = (id: number) => {
    setActiveAlbum(id)
    setActiveCategory("all")
    setViewMode("all")
    setVisibleCount(PAGE_SIZE)
  }

  const clearAlbum = () => {
    setActiveAlbum(null)
    setVisibleCount(PAGE_SIZE)
  }

  const openLightbox = (id: number, trigger: HTMLElement) => {
    lastTriggerRef.current = trigger
    setSelectedMedia(id)
    setIsVideoPlaying(false)
  }

  const closeLightbox = useCallback(() => {
    setSelectedMedia(null)
    setIsVideoPlaying(false)
    lastTriggerRef.current?.focus()
  }, [])

  const navigateMedia = useCallback(
    (direction: "prev" | "next") => {
      if (selectedMedia === null) return
      const currentIndex = filteredMedia.findIndex((item) => item.id === selectedMedia)
      const newIndex = direction === "next"
        ? (currentIndex + 1) % filteredMedia.length
        : (currentIndex - 1 + filteredMedia.length) % filteredMedia.length
      setSelectedMedia(filteredMedia[newIndex].id)
      setIsVideoPlaying(false)
    },
    [selectedMedia, filteredMedia],
  )

  const isLightboxOpen = selectedMedia !== null

  // Lock page scroll and move focus into the lightbox while it is open
  useEffect(() => {
    if (!isLightboxOpen) return
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()
    return () => {
      document.body.style.overflow = ""
    }
  }, [isLightboxOpen])

  // Keyboard: Escape closes, arrow keys move between items
  useEffect(() => {
    if (!isLightboxOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox()
      if (event.key === "ArrowRight") navigateMedia("next")
      if (event.key === "ArrowLeft") navigateMedia("prev")
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isLightboxOpen, closeLightbox, navigateMedia])

  const currentMedia = mediaItems.find((item) => item.id === selectedMedia)

  return (
    <section className="section-y bg-background">
      <div className="site-container">
        {/* View mode and category filters use the same underline tabs as the Projects page */}
        <div className="mb-10 flex flex-col gap-5">
          <div role="group" aria-label="Choose view" className="flex gap-1 border-b border-border">
            {[
              { value: "all" as const, label: "All media", icon: Images },
              { value: "albums" as const, label: "Albums", icon: Film },
            ].map((mode) => (
              <button
                key={mode.value}
                type="button"
                aria-pressed={viewMode === mode.value}
                onClick={() => setViewMode(mode.value)}
                className={cn(
                  "-mb-px inline-flex items-center gap-2 border-b-2 px-3 py-3 text-sm transition-colors",
                  viewMode === mode.value
                    ? "border-accent-ink font-semibold text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                <mode.icon className="h-4 w-4" aria-hidden="true" />
                {mode.label}
              </button>
            ))}
          </div>

          {viewMode === "all" && (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div
                role="group"
                aria-label="Filter by category"
                className="-mx-1 flex gap-1 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    type="button"
                    aria-pressed={activeCategory === cat.value}
                    onClick={() => chooseCategory(cat.value)}
                    className={cn(
                      "shrink-0 rounded-full px-4 py-2 text-sm transition-colors",
                      activeCategory === cat.value
                        ? "bg-primary font-semibold text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <p className="shrink-0 text-sm text-muted-foreground" aria-live="polite">
                {filteredMedia.length} {filteredMedia.length === 1 ? "item" : "items"}
              </p>
            </div>
          )}

          {viewMode === "all" && activeAlbumData && (
            <div className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm">
              <Film className="h-4 w-4 text-accent-ink" aria-hidden="true" />
              <span className="text-muted-foreground">
                Album: <span className="font-semibold text-foreground">{activeAlbumData.name}</span>
              </span>
              <button
                type="button"
                onClick={clearAlbum}
                className="ml-auto inline-flex items-center gap-1.5 font-medium text-foreground underline underline-offset-4 hover:text-accent-ink"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
                Show all media
              </button>
            </div>
          )}
        </div>

        {/* Albums View */}
        {viewMode === "albums" && (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {albums.map((album) => (
              <li key={album.id}>
                <button
                  type="button"
                  className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted text-left"
                  onClick={() => openAlbum(album.id)}
                >
                  <Image
                    src={album.coverImage}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/15 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <span>
                      <span className="block font-serif text-2xl text-white">{album.name}</span>
                      <span className="mt-1 block text-sm text-white/75">{album.itemCount} items</span>
                    </span>
                    <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      Open album
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Media Grid */}
        {viewMode === "all" && (
          <>
            {shownMedia.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border px-6 py-20 text-center">
                <p className="font-serif text-2xl text-foreground">Nothing here yet.</p>
                <p className="mt-2 text-sm text-muted-foreground">Try another category.</p>
              </div>
            ) : (
              <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
                {shownMedia.map((item, index) => (
                  <li key={item.id} className="mb-5 break-inside-avoid">
                    <button
                      type="button"
                      onClick={(event) => openLightbox(item.id, event.currentTarget)}
                      aria-label={`${item.type === "video" ? "Play video" : "View photo"}: ${item.title}`}
                      className="group relative block w-full overflow-hidden rounded-xl bg-muted text-left"
                    >
                      <span
                        className={cn(
                          "relative block w-full",
                          index % 5 === 0 ? "aspect-[3/4]" :
                          index % 5 === 1 ? "aspect-square" :
                          index % 5 === 2 ? "aspect-[4/3]" :
                          index % 5 === 3 ? "aspect-[16/10]" : "aspect-[3/5]",
                        )}
                      >
                        <Image
                          src={item.type === "video" ? item.thumbnail! : item.src}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </span>

                      {/* Video Play Icon */}
                      {item.type === "video" && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <Play className="ml-0.5 h-5 w-5" aria-hidden="true" />
                          </span>
                        </span>
                      )}

                      {/* Caption: always visible so touch users get it too */}
                      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-transparent p-5 pt-12">
                        <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                          {item.category}
                          {item.type === "video" && <span className="text-white/70">· Video</span>}
                        </span>
                        <span className="mt-1 block font-serif text-lg leading-snug text-white">{item.title}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-12 text-center md:mt-16">
                <button
                  type="button"
                  onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                  className="inline-flex h-12 items-center rounded-full border border-foreground/20 px-8 text-sm font-semibold text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                >
                  Load More Gallery
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && currentMedia && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentMedia.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-accent-foreground sm:right-8 sm:top-8"
            aria-label="Close"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Navigation */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); navigateMedia("prev") }}
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8 sm:h-14 sm:w-14"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); navigateMedia("next") }}
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:h-14 sm:w-14"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Media Content */}
          <div className="mx-4 w-full max-w-5xl sm:mx-20" onClick={(e) => e.stopPropagation()}>
            <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10">
              {currentMedia.type === "video" ? (
                <div className="relative flex aspect-video items-center justify-center bg-black">
                  <video
                    src={currentMedia.src}
                    className="h-full w-full object-contain"
                    controls={isVideoPlaying}
                    autoPlay={isVideoPlaying}
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsVideoPlaying(!isVideoPlaying)
                    }}
                  />
                  {!isVideoPlaying && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsVideoPlaying(true)
                      }}
                      aria-label={`Play ${currentMedia.title}`}
                      className="group absolute inset-0 flex items-center justify-center bg-black/40"
                    >
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl transition-transform duration-300 group-hover:scale-110">
                        <Play className="ml-1 h-8 w-8" aria-hidden="true" />
                      </span>
                    </button>
                  )}
                </div>
              ) : (
                <div className="flex max-h-[72vh] w-full justify-center bg-black/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={currentMedia.src}
                    alt={currentMedia.title}
                    className="max-h-[72vh] w-auto object-contain"
                    draggable={false}
                  />
                </div>
              )}
            </div>

            <div className="mt-6 px-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{currentMedia.category}</p>
              <h2 className="mt-2 font-serif text-2xl leading-tight text-white sm:text-3xl">{currentMedia.title}</h2>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/75">{currentMedia.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
