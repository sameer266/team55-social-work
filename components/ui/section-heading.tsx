import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow: string
  /** Wrap the emphasised words in <em>; they render italic in the accent colour. */
  title: ReactNode
  description?: ReactNode
  align?: "left" | "center"
  tone?: "light" | "dark"
  className?: string
}

/**
 * One header pattern for every section: eyebrow line, serif title, optional lead.
 * Light sections use accent-ink (readable green on paper); dark sections use accent.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const centered = align === "center"
  const isDark = tone === "dark"

  return (
    <header className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      <p
        className={cn(
          "mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]",
          centered && "justify-center",
          isDark ? "text-accent" : "text-accent-ink",
        )}
      >
        <span aria-hidden="true" className={cn("h-px w-10", isDark ? "bg-accent/60" : "bg-accent-ink/60")} />
        {eyebrow}
        {centered && (
          <span aria-hidden="true" className={cn("h-px w-10", isDark ? "bg-accent/60" : "bg-accent-ink/60")} />
        )}
      </p>
      <h2
        className={cn(
          "font-serif text-3xl leading-[1.1] sm:text-4xl lg:text-5xl [&_em]:font-normal [&_em]:italic",
          isDark ? "text-background [&_em]:text-accent" : "text-foreground [&_em]:text-accent-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            isDark ? "text-background/65" : "text-muted-foreground",
            centered && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </header>
  )
}
