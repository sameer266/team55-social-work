"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface StoryVideoModalProps {
  isOpen: boolean
  onClose: () => void
}

// Our Impact Story — same documentary reel used in the Gallery page.
// Swap `videoSrc` for the real Team555 story film whenever it's ready.
const videoSrc = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

export function StoryVideoModal({ isOpen, onClose }: StoryVideoModalProps) {
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = "hidden"
    const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Our Story video"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 sm:top-8 sm:right-8 w-11 h-11 flex items-center justify-center bg-white/10 rounded-full text-white/90 hover:text-black hover:bg-accent transition-all duration-300"
        aria-label="Close video"
      >
        <X className="w-5 h-5" />
      </button>

      <div
        className="w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video rounded-lg overflow-hidden ring-1 ring-white/10 shadow-2xl">
          <video
            src={videoSrc}
            controls
            autoPlay
            className="w-full h-full object-contain bg-black"
          />
        </div>
        <p className="text-center text-white/50 text-xs tracking-wide uppercase mt-6">
          Our Impact Story — Team555 Nepal
        </p>
      </div>
    </div>
  )
}
