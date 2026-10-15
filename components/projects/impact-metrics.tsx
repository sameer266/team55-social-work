import { formatStat, siteStats } from "@/lib/site-content"

/** Figures strip under the hero. Values come from lib/site-content.ts. */
export function ImpactMetrics() {
  return (
    <section aria-label="Impact at a glance" className="border-b border-border bg-card">
      <div className="site-container">
        <dl className="grid grid-cols-2 divide-x divide-y divide-border lg:grid-cols-4 lg:divide-y-0">
          {siteStats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse px-4 py-8 text-center sm:px-8 sm:py-10">
              <dt className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="font-serif text-4xl tabular-nums text-foreground sm:text-5xl">{formatStat(stat)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
