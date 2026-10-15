"use client"

import { useMemo, useState } from "react"
import { Search, X } from "lucide-react"
import { socialProjects, type SocialProject } from "@/lib/social-projects"
import { FeaturedProjectCard, ProjectCard } from "@/components/projects/project-card"
import { cn } from "@/lib/utils"

type Area = "All" | SocialProject["category"]
type SortKey = "featured" | "volunteers" | "title"

const areas: Area[] = ["All", "Education", "Environment", "Healthcare", "Community"]

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "volunteers", label: "Most volunteers" },
  { value: "title", label: "A to Z" },
]

// "200+" -> 200, so volunteer counts can be sorted numerically
const volunteerCount = (value: string) => parseInt(value.replace(/\D/g, ""), 10) || 0

const countByArea = Object.fromEntries(
  areas.map((area) => [
    area,
    area === "All" ? socialProjects.length : socialProjects.filter((p) => p.category === area).length,
  ]),
) as Record<Area, number>

export function AllProjects() {
  const [area, setArea] = useState<Area>("All")
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<SortKey>("featured")

  const needle = query.trim().toLowerCase()
  const isFiltered = area !== "All" || needle !== ""

  const visible = useMemo(() => {
    const matches = socialProjects.filter((project) => {
      if (area !== "All" && project.category !== area) return false
      if (!needle) return true
      return [project.title, project.description, project.location, project.category]
        .join(" ")
        .toLowerCase()
        .includes(needle)
    })

    if (sort === "volunteers") {
      return [...matches].sort((a, b) => volunteerCount(b.volunteers) - volunteerCount(a.volunteers))
    }
    if (sort === "title") {
      return [...matches].sort((a, b) => a.title.localeCompare(b.title))
    }
    return matches
  }, [area, needle, sort])

  // The lead project gets the feature card only when the list is showing everything
  const showFeatured = !isFiltered && visible.length > 1
  const [featured, ...rest] = visible
  const gridProjects = showFeatured ? rest : visible

  const reset = () => {
    setArea("All")
    setQuery("")
  }

  return (
    <section id="all-projects" className="bg-background">
      {/* Sticky filter bar: stays under the navbar while people scroll the grid */}
      <div className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur-md lg:top-20">
        <div className="site-container">
          <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div
              role="group"
              aria-label="Filter projects by area"
              className="-mx-1 flex gap-1 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {areas.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={area === item}
                  onClick={() => setArea(item)}
                  className={cn(
                    "shrink-0 border-b-2 px-3 py-2 text-sm transition-colors",
                    area === item
                      ? "border-accent-ink font-semibold text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item}
                  <span className="ml-1.5 text-xs tabular-nums text-muted-foreground">{countByArea[item]}</span>
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <label className="relative flex-1 lg:w-72">
                <span className="sr-only">Search projects</span>
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search projects or places"
                  className="h-10 w-full rounded-md border border-border bg-card pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent-ink focus:outline-none focus:ring-2 focus:ring-ring/40"
                />
              </label>
              <label className="sr-only" htmlFor="project-sort">
                Sort projects
              </label>
              <select
                id="project-sort"
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                className="h-10 rounded-md border border-border bg-card px-3 text-sm text-foreground focus:border-accent-ink focus:outline-none focus:ring-2 focus:ring-ring/40"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="site-container py-12 lg:py-16">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <p aria-live="polite">
            Showing <span className="font-semibold text-foreground">{visible.length}</span> of {socialProjects.length} projects
          </p>
          {isFiltered && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-foreground underline underline-offset-4 hover:text-accent-ink"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
              Clear filters
            </button>
          )}
        </div>

        {visible.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border px-6 py-20 text-center">
            <p className="font-serif text-2xl text-foreground">No projects match your search.</p>
            <p className="mt-2 text-sm text-muted-foreground">Try another word, or choose a different area.</p>
            <button
              type="button"
              onClick={reset}
              className="mt-7 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Show all projects
            </button>
          </div>
        ) : (
          <>
            {showFeatured && featured && (
              <FeaturedProjectCard project={featured} />
            )}
            <div
              className={cn(
                "grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3",
                showFeatured && "mt-16 border-t border-border pt-16",
              )}
            >
              {gridProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
