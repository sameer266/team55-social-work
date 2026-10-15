import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUp, Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react"
import { focusAreas } from "@/lib/focus-areas"
import { organization, siteContact } from "@/lib/site-content"

const footerLinks = {
  explore: [
    { href: "/about", label: "About Us" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/projects", label: "Our Projects" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about#team", label: "Our Team" },
  ],
  getInvolved: [
    { href: "/join", label: "Become a Member" },
    { href: "/join#volunteer", label: "Volunteer" },
    { href: "/join#donate", label: "Donate" },
    { href: "/join#partner", label: "Partner With Us" },
  ],
}

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Youtube, label: "YouTube" },
]

const headingClass = "mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
const linkClass = "text-sm text-background/70 transition-colors hover:text-background"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      {/* Newsletter */}
      <div className="site-container pt-16 lg:pt-20">
        <div className="grid items-center gap-8 rounded-2xl border border-background/10 bg-background/[0.04] p-7 sm:p-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl text-background md:text-4xl">
              Stay <em className="font-normal italic text-accent">connected</em>
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-background/65">
              Subscribe for updates on our projects and impact stories.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-full border border-background/15 bg-background/5 px-5 text-sm text-background placeholder:text-background/45 transition-colors focus:border-accent focus:outline-none focus-visible:outline-accent"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="site-container py-14 lg:py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white">
                <Image src="/images/team-555-logo.jpg" alt="" width={48} height={48} className="object-cover" />
              </span>
              <span className="leading-none">
                <span className="block font-serif text-2xl font-semibold text-background">Team555</span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-background/50">
                  Youth Service Nepal
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/70">{organization.mission}</p>

            <address className="mt-7 space-y-3 not-italic">
              <p className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {siteContact.address}
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${siteContact.email}`} className={linkClass}>
                  {siteContact.email}
                </a>
              </p>
              <p className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {siteContact.phone}
              </p>
            </address>

            <ul className="mt-7 flex gap-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-background/15 text-background/70 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <social.icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <nav aria-label="Explore" className="lg:col-span-2 lg:col-start-6">
            <h3 className={headingClass}>Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Our work */}
          <nav aria-label="Our work" className="lg:col-span-3">
            <h3 className={headingClass}>Our Work</h3>
            <ul className="space-y-3">
              {focusAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/what-we-do/${area.slug}`} className={`${linkClass} inline-flex items-center gap-2.5`}>
                    <area.icon className="h-4 w-4 text-background/40" aria-hidden="true" />
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get Involved */}
          <nav aria-label="Get involved" className="col-span-2 sm:col-span-1 lg:col-span-2">
            <h3 className={headingClass}>Get Involved</h3>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Oversized wordmark: a quiet, classic sign-off */}
      <div aria-hidden="true" className="site-container select-none">
        <p className="-mb-[0.18em] font-serif text-[22vw] leading-none tracking-tight text-background/[0.05] lg:text-[13rem]">
          Team555
        </p>
      </div>

      {/* Bottom */}
      <div className="relative border-t border-background/10">
        <div className="site-container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Team555 Nepal. Serving communities since {organization.founded}.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-background/50 transition-colors hover:text-background">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-background/50 transition-colors hover:text-background">
              Terms of Service
            </Link>
            <a
              href="#main"
              className="inline-flex items-center gap-1.5 rounded-full border border-background/15 px-3 py-1.5 text-xs text-background/70 transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
