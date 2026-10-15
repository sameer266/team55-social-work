"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, ArrowUpRight, ChevronDown, Heart, Mail, Menu, Phone, X } from "lucide-react"
import { focusAreas } from "@/lib/focus-areas"
import { siteContact } from "@/lib/site-content"
import { cn } from "@/lib/utils"

type NavLink = { href: string; label: string; hasMenu?: boolean }

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "What We Do", hasMenu: true },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/join", label: "Join Us" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLLIElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isCurrentPage = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`)

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false)
    setMenuOpen(false)
  }, [pathname])

  // Lift the header off the page once the user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Desktop dropdown: close on Escape or a click outside
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false)
    const onClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onClick)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onClick)
    }
  }, [menuOpen])

  // Prevent body scroll and allow Escape while the mobile menu is open
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = "hidden"
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setIsOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [isOpen])

  // Small delay on hover-out so the pointer can travel from the trigger into the panel
  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMenuOpen(true)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMenuOpen(false), 120)
  }

  const linkClass = (active: boolean) =>
    cn(
      "relative inline-flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium transition-colors",
      active ? "text-foreground" : "text-foreground/65 hover:text-foreground",
    )

  const underline = (active: boolean) => (
    <span
      aria-hidden="true"
      className={cn(
        "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent-ink transition-transform duration-300",
        active ? "scale-x-100" : "scale-x-0",
      )}
    />
  )

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-background/95 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "border-border shadow-[0_6px_24px_-12px] shadow-foreground/15" : "border-border/60",
      )}
    >
      <div className="site-container">
        <nav aria-label="Main" className="flex h-16 items-center justify-between gap-6 lg:h-20">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex shrink-0 items-center gap-3" aria-label="Team555 Nepal, home">
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-border lg:h-11 lg:w-11">
              <Image src="/images/team-555-logo.jpg" alt="" width={44} height={44} className="object-cover" priority />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-xl font-semibold text-foreground">Team555</span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Nepal</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const active = isCurrentPage(link.href)

              if (link.hasMenu) {
                return (
                  <li key={link.href} ref={menuRef} className="relative" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
                    <button
                      type="button"
                      aria-expanded={menuOpen}
                      aria-controls="what-we-do-menu"
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen((open) => !open)}
                      className={linkClass(active)}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform duration-200", menuOpen && "rotate-180")}
                        aria-hidden="true"
                      />
                      {underline(active)}
                    </button>

                    {/* Dropdown: previews each focus area so visitors can go straight to a topic */}
                    <div
                      id="what-we-do-menu"
                      className={cn(
                        "absolute left-1/2 top-full w-[680px] -translate-x-1/2 pt-4 transition-[opacity,transform,visibility] duration-200",
                        menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
                      )}
                    >
                      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-foreground/10">
                        <ul className="grid grid-cols-2 gap-1 p-3">
                          {focusAreas.map((area) => (
                            <li key={area.slug}>
                              <Link
                                href={`/what-we-do/${area.slug}`}
                                tabIndex={menuOpen ? undefined : -1}
                                className="group flex gap-4 rounded-xl p-4 transition-colors hover:bg-secondary"
                              >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                  <area.icon className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <span>
                                  <span className="block font-serif text-lg leading-tight text-foreground">{area.title}</span>
                                  <span className="mt-1 block text-[13px] leading-snug text-muted-foreground">{area.summary}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center justify-between gap-4 border-t border-border bg-secondary/70 px-7 py-4">
                          <p className="text-sm text-muted-foreground">See how we work and the goals we are working toward.</p>
                          <Link
                            href="/what-we-do"
                            tabIndex={menuOpen ? undefined : -1}
                            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-foreground hover:text-accent-ink"
                          >
                            Overview <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              }

              return (
                <li key={link.href}>
                  <Link href={link.href} aria-current={active ? "page" : undefined} className={linkClass(active)}>
                    {link.label}
                    {underline(active)}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/join#donate"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-marigold px-5 text-sm font-semibold text-marigold-foreground transition-colors hover:bg-marigold/85"
            >
              <Heart className="h-4 w-4" aria-hidden="true" />
              Donate
            </Link>
            <Link
              href="/join"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Become a Member
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="relative z-50 -mr-2 flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </nav>
      </div>
    </header>

      {/* Mobile Navigation: a sibling of the header, because the header's backdrop-blur would otherwise
          become the containing block and collapse this fixed panel to the header's height */}
      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-border bg-background transition-[opacity,visibility] duration-300 lg:hidden",
          isOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="site-container flex min-h-full flex-col py-6">
          <ul className="flex flex-col">
            {navLinks.map((link, index) => {
              const active = isCurrentPage(link.href)
              return (
                <li
                  key={link.href}
                  className="border-b border-border transition-all duration-300"
                  style={{
                    transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                    transform: isOpen ? "translateY(0)" : "translateY(-8px)",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    tabIndex={isOpen ? undefined : -1}
                    className={cn(
                      "flex items-center justify-between py-4 font-serif text-2xl transition-colors",
                      active ? "text-accent-ink" : "text-foreground hover:text-accent-ink",
                    )}
                  >
                    {link.label}
                    <ArrowUpRight className="h-5 w-5 opacity-40" aria-hidden="true" />
                  </Link>

                  {/* Focus areas listed under What We Do so they are one tap away on mobile */}
                  {link.hasMenu && (
                    <ul className="-mt-1 grid grid-cols-2 gap-2 pb-4">
                      {focusAreas.map((area) => (
                        <li key={area.slug}>
                          <Link
                            href={`/what-we-do/${area.slug}`}
                            tabIndex={isOpen ? undefined : -1}
                            className="flex items-center gap-2.5 rounded-lg bg-secondary px-3 py-2.5 text-sm text-foreground"
                          >
                            <area.icon className="h-4 w-4 shrink-0 text-accent-ink" aria-hidden="true" />
                            {area.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <Link
              href="/join#donate"
              tabIndex={isOpen ? undefined : -1}
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-marigold text-sm font-semibold text-marigold-foreground"
            >
              <Heart className="h-4 w-4" aria-hidden="true" />
              Donate
            </Link>
            <Link
              href="/join"
              tabIndex={isOpen ? undefined : -1}
              className="flex h-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
            >
              Become a Member
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-auto space-y-3 pt-10 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Get in touch</p>
            <a
              href={`mailto:${siteContact.email}`}
              tabIndex={isOpen ? undefined : -1}
              className="flex items-center gap-3 text-foreground hover:text-accent-ink"
            >
              <Mail className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              {siteContact.email}
            </a>
            <p className="flex items-center gap-3 text-foreground">
              <Phone className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              {siteContact.phone}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
