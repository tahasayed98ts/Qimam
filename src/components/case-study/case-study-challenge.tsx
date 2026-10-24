import { CornerDownRight } from "lucide-react"

import type { CaseStudyCopy, Showcase } from "@/content/case-studies"
import { getDictionary } from "@/i18n/dictionaries"
import { ChapterLabel, ChapterTitle } from "./chapter"
import { ShowcaseFigure } from "./showcase"

/**
 * "02 / Context & challenge" beside a screenshot. The text comes first in
 * the markup (and on small screens); on desktop the image takes the
 * reading-start column, as in Figma.
 */
export async function CaseStudyChallenge({
  showcase,
  copy,
}: {
  showcase: Showcase
  copy: CaseStudyCopy["challenge"]
}) {
  const { projectDetails } = await getDictionary()

  return (
    <section
      aria-labelledby="challenge-title"
      className="site-container grid items-center gap-10 lg:grid-cols-[38.75rem_1fr] lg:gap-20"
    >
      <div data-aos="fade-left" className="flex flex-col gap-6">
        <ChapterLabel number={2}>
          {projectDetails.chapters.challenge}
        </ChapterLabel>
        <ChapterTitle id="challenge-title">{copy.title}</ChapterTitle>
        {copy.body.map((text) => (
          <p key={text} className="leading-[1.8] text-ink-sage">
            {text}
          </p>
        ))}
        <p className="flex gap-4 pt-3 text-xs/[1.6] text-ink-warm">
          <CornerDownRight
            aria-hidden="true"
            strokeWidth={1.5}
            className="size-5 shrink-0 text-link rtl:-scale-x-100"
          />
          {copy.principle}
        </p>
      </div>
      <div data-aos="fade-right" className="lg:order-first">
        <ShowcaseFigure
          showcase={showcase}
          alt={copy.alt}
          sizes="(min-width: 1024px) 558px, 94vw"
          number={2}
          caption={copy.caption}
          captionClassName="pt-3.5"
        />
      </div>
    </section>
  )
}
