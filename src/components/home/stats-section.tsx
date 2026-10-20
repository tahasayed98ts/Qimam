import type { CSSProperties } from "react"

import { Lines } from "@/components/lines"
import { SectionHeading } from "@/components/section-heading"
import { getDictionary } from "@/i18n/dictionaries"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { cn, rem } from "@/lib/utils"
import styles from "./stats-section.module.css"

type StatKey = keyof Dictionary["stats"]["items"]

const statOrder: StatKey[] = ["reliable", "trusted", "scalable", "quality"]

/** Staircase divider offsets per column (px from the top, as in Figma). */
const stepOffsets = [32, 64, 96, 118]

export async function StatsSection() {
  const { stats } = await getDictionary()

  return (
    <section aria-labelledby="stats-title" className={styles.band}>
      <div className="site-container py-20 lg:pt-29.5 lg:pb-30">
        <SectionHeading id="stats-title">
          <Lines lines={stats.titleLines} lineClassName="sm:block" />
        </SectionHeading>

        <dl className="mt-10 grid grid-cols-1 overflow-hidden rounded-lg border border-rule sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {statOrder.map((key, index) => {
            const stat = stats.items[key]
            return (
              <div
                key={key}
                style={
                  {
                    "--top": rem(stepOffsets[index]),
                    "--bottom": rem(stepOffsets[statOrder.length - 1 - index]),
                  } as CSSProperties
                }
                className={cn(
                  styles.column,
                  "flex flex-col border-rule px-6 py-8 sm:px-10 sm:pt-10 lg:ps-10 lg:pe-6",
                  index > 0 && "border-t sm:border-t-0",
                  index % 2 === 1 && "sm:border-s",
                  index > 1 && "sm:border-t lg:border-t-0",
                  index > 0 && "lg:border-s"
                )}
              >
                <dt className="font-display text-lg leading-[1.42] uppercase sm:text-xl">
                  {stat.label}
                </dt>
                <dd className="mt-5 font-display text-[2rem] leading-[1.42] sm:mt-6 sm:text-[2.5rem]">
                  {stat.value}
                </dd>
                <dd className="mt-5 text-sm/5 text-ink-muted sm:mt-5.5">
                  {stat.caption}
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
