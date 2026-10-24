"use client"

import { useEffect, useState } from "react"

import type { ArticleSection } from "@/content/articles"
import { cn } from "@/lib/utils"

type Current = { section?: string; subsection?: string }

/**
 * The sections box beside an article: its h2s, with the current one's h3s
 * listed under it. The current heading is the last one above the top third
 * of the window (the last one of all at the end of the page).
 */
export function ArticleToc({
  sections,
  label,
}: {
  sections: ArticleSection[]
  label: string
}) {
  const [current, setCurrent] = useState<Current>({
    section: sections[0]?.id,
  })

  useEffect(() => {
    const marks = sections
      .flatMap((section) => [
        { id: section.id, section: section.id, subsection: undefined },
        ...section.subsections.map((subsection) => ({
          id: subsection.id,
          section: section.id,
          subsection: subsection.id,
        })),
      ])
      .flatMap((mark) => {
        const heading = document.getElementById(mark.id)
        return heading ? [{ ...mark, heading }] : []
      })
    if (!marks.length) return

    let frame = 0
    const measure = () => {
      frame = 0
      const line = window.innerHeight / 3
      const atEnd =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      let mark = marks[0]
      for (const next of marks) {
        if (next.heading.getBoundingClientRect().top > line) break
        mark = next
      }
      if (atEnd) mark = marks[marks.length - 1]
      setCurrent((previous) =>
        previous.section === mark.section &&
        previous.subsection === mark.subsection
          ? previous
          : { section: mark.section, subsection: mark.subsection }
      )
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      cancelAnimationFrame(frame)
    }
  }, [sections])

  return (
    // Padding less the border = Figma's inside stroke.
    <nav
      aria-label={label}
      className="rounded-lg border border-rule-light p-[calc(1.5rem-1px)]"
    >
      <ul className="flex flex-col gap-6">
        {sections.map((section, index) => {
          const isCurrent = section.id === current.section
          return (
            <li
              key={section.id}
              className={cn(
                index < sections.length - 1
                  ? "border-b border-ink-gray pb-6"
                  : "py-2"
              )}
            >
              <a
                href={`#${section.id}`}
                aria-current={
                  isCurrent && !current.subsection ? "location" : undefined
                }
                className={cn(
                  "text-lg leading-[1.172] transition-colors hover:text-ink",
                  isCurrent
                    ? "font-semibold text-ink"
                    : "font-medium text-ink-gray-dark"
                )}
              >
                {section.title}
              </a>
              {isCurrent && section.subsections.length > 0 && (
                <ul className="mt-4 flex flex-col gap-2 px-6">
                  {section.subsections.map((subsection) => {
                    const isCurrentSub = subsection.id === current.subsection
                    return (
                      <li key={subsection.id}>
                        <a
                          href={`#${subsection.id}`}
                          aria-current={isCurrentSub ? "location" : undefined}
                          className={cn(
                            "leading-[1.172] font-medium transition-colors hover:text-ink",
                            isCurrentSub ? "text-ink" : "text-ink-gray"
                          )}
                        >
                          {subsection.title}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
