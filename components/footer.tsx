import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  organization: [
    { href: "/about", label: "About Us" },
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

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-background mb-2">
                Stay <span className="text-accent italic">Connected</span>
              </h3>
              <p className="text-background/50 text-sm">
                Subscribe for updates on our projects and impact stories.
              </p>
            </div>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-background/5 border border-background/10 rounded-lg text-background text-sm placeholder:text-background/30 focus:outline-none focus:border-accent/50 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-lg">T</span>
              </div>
              <div>
                <span className="font-serif font-semibold text-lg text-background">TEAM555</span>
                <p className="text-[10px] text-background/40 tracking-[0.15em] uppercase">Youth Service Nepal</p>
              </div>
            </div>
            <p className="text-background/50 text-sm mb-6 leading-relaxed max-w-xs">
              A movement of young Nepalis serving their communities and building something lasting.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full border border-background/10 flex items-center justify-center text-background/50 hover:text-accent hover:border-accent/30 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Organization */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-background/30 mb-5">Organization</h4>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/50 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-background/30 mb-5">Get Involved</h4>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/50 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-background/30 mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-background/30 mt-0.5 shrink-0" />
                <span className="text-background/50 text-sm">Thamel, Kathmandu<br />Nepal 44600</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-background/30 shrink-0" />
                <a href="mailto:hello@team555.org" className="text-background/50 hover:text-accent transition-colors text-sm">
                  hello@team555.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-background/30 shrink-0" />
                <span className="text-background/50 text-sm">+977 1-456-7890</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-background/30 text-xs">
              © {new Date().getFullYear()} Team555 Nepal. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-background/30 hover:text-accent transition-colors text-xs">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-background/30 hover:text-accent transition-colors text-xs">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
