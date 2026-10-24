import {
  Activity,
  ChartNoAxesColumn,
  MapIcon,
  Search,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react"
import Image, { type StaticImageData } from "next/image"
import type { CSSProperties } from "react"

import branchLeftWide from "@/assets/services/process/branch-left-wide.svg"
import branchLeft from "@/assets/services/process/branch-left.svg"
import branchRight from "@/assets/services/process/branch-right.svg"
import { SectionHeading } from "@/components/section-heading"
import { getDictionary } from "@/i18n/dictionaries"
import { cn, rem } from "@/lib/utils"
import styles from "./process-timeline.module.css"

/**
 * Per step, from Figma: the node icon (Lucide, as in the design), the card's
 * offset from its 160px row, and the connector drawn between node and card.
 * Odd steps sit on the inline-end side of the spine, even ones on the start.
 */
const steps: { icon: LucideIcon; armTop: number; branch: StaticImageData }[] = [
  { icon: Search, armTop: -26, branch: branchRight },
  { icon: ChartNoAxesColumn, armTop: -26, branch: branchLeft },
  { icon: MapIcon, armTop: -26, branch: branchRight },
  { icon: Zap, armTop: -16, branch: branchLeftWide },
  { icon: Activity, armTop: -37, branch: branchRight },
  { icon: TrendingUp, armTop: -39, branch: branchLeft },
]

/** "Our Process": six steps along a glowing spine. */
export async function ProcessTimeline() {
  const { servicesPage } = await getDictionary()
  const { process } = servicesPage

  return (
    <section
      aria-labelledby="process-title"
      className="site-container mt-24 lg:mt-30"
    >
      <SectionHeading id="process-title" className="uppercase lg:text-[2rem]">
        {process.title}
      </SectionHeading>

      <div className={cn(styles.timeline, "mt-12")}>
        <div aria-hidden="true" className={styles.spine} />
        <ol className={styles.steps}>
          {process.steps.map((step, index) => {
            const { icon: Icon, armTop, branch } = steps[index]
            const onEnd = index % 2 === 0
            return (
              <li
                key={step.title}
                className={cn(styles.step, onEnd ? styles.end : styles.start)}
                style={{ "--arm-top": rem(armTop) } as CSSProperties}
              >
                <div data-aos="fade-up" className={styles.node}>
                  <Icon
                    aria-hidden="true"
                    strokeWidth={12 / 7}
                    className="size-7 text-ink"
                  />
                </div>
                {/* The card and its connector arrive together, from their
                    side of the spine. */}
                <div
                  data-aos={onEnd ? "fade-left" : "fade-right"}
                  className={styles.arm}
                >
                  <Image
                    src={branch}
                    alt=""
                    unoptimized
                    className={styles.branch}
                    style={{
                      width: rem(branch.width),
                      height: rem(branch.height),
                    }}
                  />
                  <div className="flex flex-col gap-3 rounded-lg border border-[#969696] p-[calc(1.5rem-1px)]">
                    <p className="flex items-center gap-2.5 font-display text-[0.6875rem] tracking-[0.125rem] text-violet uppercase">
                      {process.step} {String(index + 1).padStart(2, "0")}
                      <span aria-hidden="true" className="h-px w-10 bg-violet/40" />
                    </p>
                    <h3 className="font-display text-[1.375rem] leading-[1.42]">
                      {step.title}
                    </h3>
                    <p className="text-[0.9375rem]/[1.625rem] text-[#a6a6b5]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
