"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/join", label: "Join Us" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group relative z-50">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
              <Image
                src="/images/team-555-logo.jpg"
                alt="Team 555 logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif font-semibold text-base sm:text-lg tracking-tight transition-colors ${
                  scrolled || isOpen ? "text-foreground" : "text-white"
                }`}
              >
                TEAM555
              </span>
              <span
                className={`text-[10px] sm:text-xs tracking-[0.15em] uppercase transition-colors ${
                  scrolled || isOpen ? "text-muted-foreground" : "text-white/60"
                }`}
              >
                Nepal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors relative group ${
                  scrolled ? "text-foreground" : "text-white"
                } ${pathname === link.href ? "text-accent" : "hover:text-accent"}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              asChild
              className={`rounded-lg h-11 xl:h-12 px-6 xl:px-8 font-medium tracking-wide text-sm transition-colors ${
                scrolled
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-white hover:bg-white/90 text-foreground"
              }`}
            >
              <Link href="/join" className="flex items-center gap-2">
                Become a Member
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 bg-background z-40 transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 pt-24 pb-8 h-full overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl sm:text-3xl font-serif text-foreground hover:text-accent transition-all py-3 border-b border-border flex items-center justify-between group ${
                    pathname === link.href ? "text-accent" : ""
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                    transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  {link.label}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>

            <div
              className="mt-8"
              style={{
                transitionDelay: isOpen ? `${navLinks.length * 50}ms` : "0ms",
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isOpen ? 1 : 0,
                transition: "all 0.3s ease",
              }}
            >
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full h-14 rounded-lg text-base font-medium"
              >
                <Link href="/join">Become a Member</Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div
              className="mt-auto pt-10"
              style={{
                transitionDelay: isOpen ? `${(navLinks.length + 1) * 50}ms` : "0ms",
                opacity: isOpen ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <p className="text-muted-foreground text-sm mb-2">Get in touch</p>
              <a href="mailto:info@team555nepal.org" className="text-foreground hover:text-accent transition-colors">
                info@team555nepal.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
