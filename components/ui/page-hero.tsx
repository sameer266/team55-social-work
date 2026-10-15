import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  tagline: string
  title: ReactNode
  description: string
  imageSrc: string
  centered?: boolean
  /** Optional trail for detail pages, e.g. What we do > Education */
  breadcrumb?: { href: string; label: string }[]
  /** Optional in-page or related links shown as pills under the description */
  jumpLinks?: { href: string; label: string }[]
}

/**
 * The one hero used on every inner page. Same height, overlay and type scale everywhere,
 * so moving between pages never changes the frame.
 */
export function PageHero({ tagline, title, description, imageSrc, centered = false, breadcrumb, jumpLinks }: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-[420px] items-end overflow-hidden bg-foreground sm:min-h-[480px] lg:min-h-[540px]">
      <Image src={imageSrc} alt="" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
      {/* Forest-ink overlay keeps photos on-palette and text readable */}
      <div
        className={cn(
          "absolute inset-0 -z-10",
          centered
            ? "bg-gradient-to-b from-foreground/75 via-foreground/65 to-foreground/90"
            : "bg-gradient-to-r from-foreground/92 via-foreground/65 to-foreground/20",
        )}
      />

      <div className="site-container pb-14 pt-32 sm:pb-16 lg:pb-20 lg:pt-36">
        <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
          {breadcrumb && (
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className={cn("flex flex-wrap items-center gap-1.5 text-sm text-white/70", centered && "justify-center")}>
                {breadcrumb.map((item) => (
                  <li key={item.href} className="flex items-center gap-1.5">
                    <Link href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                    <ChevronRight className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />
                  </li>
                ))}
                <li aria-current="page" className="font-medium text-white">
                  {tagline}
                </li>
              </ol>
            </nav>
          )}
          <p
            className={cn(
              "mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent",
              centered && "justify-center",
            )}
          >
            <span aria-hidden="true" className="h-px w-10 bg-accent/70" />
            {tagline}
            {centered && <span aria-hidden="true" className="h-px w-10 bg-accent/70" />}
          </p>
          <h1 className="font-serif text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl [&_em]:font-normal [&_em]:italic [&_em]:text-accent">
            {title}
          </h1>
          <p
            className={cn(
              "mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg",
              centered && "mx-auto",
            )}
          >
            {description}
          </p>
          {jumpLinks && (
            <nav aria-label="On this page" className="mt-9">
              <ul className={cn("flex flex-wrap gap-2", centered && "justify-center")}>
                {jumpLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </section>
  )
}
