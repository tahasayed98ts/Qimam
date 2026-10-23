import Image from "next/image"

import accuracy from "@/assets/about/goals/accuracy.svg"
import build from "@/assets/about/goals/build.svg"
import efficiency from "@/assets/about/goals/efficiency.svg"
import improve from "@/assets/about/goals/improve.svg"
import reach from "@/assets/about/goals/reach.svg"
import sustain from "@/assets/about/goals/sustain.svg"
import { SectionHeading } from "@/components/section-heading"
import { getDictionary } from "@/i18n/dictionaries"
import { cn } from "@/lib/utils"

/** Figma schematics, in the order of the goals in the dictionary. */
const schematics = [build, improve, reach, sustain, efficiency, accuracy]

/**
 * "Our Goals": a bordered 2 × 3 grid (one column on phones). Each goal's
 * content rises in; the grid lines stay put.
 */
export async function GoalsSection() {
  const { about } = await getDictionary()

  return (
    // Below lg the testimonials that follow have no top padding of their own.
    <section
      aria-labelledby="goals-title"
      className="site-container mt-24 pb-20 lg:mt-30 lg:pb-0"
    >
      <SectionHeading id="goals-title" className="lg:text-[2rem]">
        {about.goals.title}
      </SectionHeading>

      {/* Like Figma's inside strokes, the frame (an inset outline) and the
          dividers (on the first column) take no width from the text. */}
      <ol className="mt-10 grid grid-cols-1 overflow-clip rounded-lg outline -outline-offset-1 outline-rule-light lg:grid-cols-2">
        {about.goals.items.map((goal, index) => (
          <li
            key={goal.title}
            className={cn(
              "border-rule-light p-6 lg:min-h-62",
              index > 0 && "border-t",
              index === 1 && "lg:border-t-0",
              index % 2 === 0 && "lg:border-e"
            )}
          >
            <div
              data-aos="fade-up"
              data-aos-delay={String((index % 2) * 100)}
              className="flex flex-col gap-5 sm:flex-row"
            >
              {/* The 216 × 217.5 artwork overhangs its 192px slot, as in
                  Figma. */}
              <div className="relative size-48 shrink-0">
                <div className="absolute -inset-x-3 inset-y-[-0.796875rem]">
                  <Image src={schematics[index]} alt="" fill unoptimized />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p
                  aria-hidden="true"
                  className="flex items-center gap-2 font-display text-[0.6875rem] text-violet-light uppercase"
                >
                  <span className="size-1 bg-violet-light" />
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-[1.375rem]/8 text-[#f4f7ff]">
                  {goal.title}
                </h3>
                <p className="mt-3 leading-6 text-[#b8b8b8]">{goal.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
