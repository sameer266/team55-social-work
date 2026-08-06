"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Play, Pause, Images, Film } from "lucide-react"

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

export function GalleryGrid() {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all")
  const [viewMode, setViewMode] = useState<ViewMode>("all")
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const filteredMedia = activeCategory === "all"
    ? mediaItems
    : mediaItems.filter((item) => item.category === activeCategory)

  const openLightbox = (id: number) => {
    setSelectedMedia(id)
    setIsVideoPlaying(false)
  }
  const closeLightbox = () => {
    setSelectedMedia(null)
    setIsVideoPlaying(false)
  }

  const navigateMedia = (direction: "prev" | "next") => {
    if (selectedMedia === null) return
    const currentIndex = filteredMedia.findIndex((item) => item.id === selectedMedia)
    const newIndex = direction === "next"
      ? (currentIndex + 1) % filteredMedia.length
      : (currentIndex - 1 + filteredMedia.length) % filteredMedia.length
    setSelectedMedia(filteredMedia[newIndex].id)
    setIsVideoPlaying(false)
  }

  const currentMedia = mediaItems.find((item) => item.id === selectedMedia)

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-[30%] -left-64 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* View Mode Toggle & Filters */}
        <div className="flex flex-col gap-8 mb-16 md:mb-20">
          {/* View Mode Toggle */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setViewMode("all")}
              className={`flex flex-row items-center gap-3 px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                viewMode === "all"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                  : "bg-background border border-border text-foreground hover:bg-secondary/50 hover:border-primary/30"
              }`}
            >
              <Images className="w-5 h-5" />
              <span className="hidden sm:inline">All Media</span>
              <span className="sm:hidden">All</span>
            </button>
            <button
              onClick={() => setViewMode("albums")}
              className={`flex flex-row items-center gap-3 px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                viewMode === "albums"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                  : "bg-background border border-border text-foreground hover:bg-secondary/50 hover:border-primary/30"
              }`}
            >
              <Film className="w-5 h-5" />
              <span className="hidden sm:inline">Albums</span>
              <span className="sm:hidden">Albums</span>
            </button>
          </div>

          {/* Category Filters */}
          {viewMode === "all" && (
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-[13px] font-semibold tracking-wider transition-all duration-300 ${
                    activeCategory === cat.value
                      ? "bg-foreground text-background shadow-md shadow-foreground/10"
                      : "bg-transparent text-foreground border border-border hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Albums View */}
        {viewMode === "albums" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-12 md:mb-16">
            {albums.map((album) => (
              <button
                key={album.id}
                className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden text-left shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
                onClick={() => setViewMode("all")}
              >
                <Image
                  src={album.coverImage}
                  alt={album.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">{album.name}</h3>
                  <p className="text-white/80 font-medium tracking-wide">{album.itemCount} items</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Media Grid */}
        {viewMode === "all" && (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 sm:gap-8 space-y-6 sm:space-y-8">
            {filteredMedia.map((item, index) => (
              <div
                key={item.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(item.id)}
              >
                <div className="relative overflow-hidden rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div
                    className={`relative w-full ${
                      index % 5 === 0 ? "aspect-[3/4]" :
                      index % 5 === 1 ? "aspect-square" :
                      index % 5 === 2 ? "aspect-[4/3]" :
                      index % 5 === 3 ? "aspect-[16/10]" : "aspect-[3/5]"
                    }`}
                  >
                    <Image
                      src={item.type === "video" ? item.thumbnail! : item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Video Play Icon */}
                  {item.type === "video" && (
                     <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-16 h-16 rounded-full bg-accent/90 backdrop-blur-md flex items-center justify-center group-hover:bg-accent transition-all duration-500 group-hover:scale-110 shadow-lg shadow-accent/20">
                           <Play className="w-6 h-6 text-accent-foreground ml-1" />
                        </div>
                     </div>
                  )}

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="flex flex-row items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-accent-foreground text-[10px] font-bold tracking-widest uppercase">
                        {item.category}
                      </span>
                      {item.type === "video" && (
                        <span className="text-white/80 font-medium text-xs tracking-wider uppercase">Video</span>
                      )}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-white leading-snug">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {viewMode === "all" && (
          <div className="text-center mt-16 md:mt-24">
            <button className="px-10 sm:px-12 py-4 sm:py-5 rounded-full border border-primary/20 text-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
              Load More Gallery
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedMedia !== null && currentMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 flex items-center justify-center bg-white/10 rounded-full text-white/90 hover:text-white hover:bg-accent transition-all duration-300 z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateMedia("prev") }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white/5 rounded-full text-white/70 hover:text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateMedia("next") }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white/5 rounded-full text-white/70 hover:text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Media Content */}
          <div
            className="max-w-6xl w-full mx-4 sm:mx-8 md:mx-16 mt-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative shadow-2xl rounded-2xl overflow-hidden ring-1 ring-white/10">
              {currentMedia.type === "video" ? (
                <div className="relative aspect-video bg-black flex items-center justify-center">
                  <video
                    src={currentMedia.src}
                    className="w-full h-full object-contain"
                    controls={isVideoPlaying}
                    autoPlay={isVideoPlaying}
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsVideoPlaying(!isVideoPlaying)
                    }}
                  />
                  {!isVideoPlaying && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsVideoPlaying(true)
                      }}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm group"
                    >
                      <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300 shadow-xl shadow-accent/20">
                        <Play className="w-8 h-8 text-accent-foreground ml-1" />
                      </div>
                    </button>
                  )}
                </div>
              ) : (
                <div className="relative w-full overflow-hidden bg-black/50" style={{ maxHeight: '75vh' }}>
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=50&q=10')] bg-cover bg-center blur-3xl opacity-30" />
                   <img
                     src={currentMedia.src}
                     alt={currentMedia.title}
                     className="object-contain max-h-[75vh] w-auto mx-auto relative z-10"
                     draggable={false}
                   />
                </div>
              )}
            </div>
            
            <div className="text-center mt-8 px-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 text-xs font-bold tracking-widest uppercase mb-4">
                 {currentMedia.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-white mb-4 leading-tight">{currentMedia.title}</h3>
              <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">{currentMedia.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
