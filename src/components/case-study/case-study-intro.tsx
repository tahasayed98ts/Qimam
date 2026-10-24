import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import type { CaseStudyCopy } from "@/content/case-studies"
import { localizePath } from "@/i18n/config"
import { getDictionary, getLocale } from "@/i18n/dictionaries"

const factKeys = ["industry", "services", "year", "platform"] as const

/** The way back to Projects, the project's name and its key facts. */
export async function CaseStudyIntro({
  name,
  facts,
}: {
  name: string
  facts: CaseStudyCopy["facts"]
}) {
  const [locale, { projectDetails }] = await Promise.all([
    getLocale(),
    getDictionary(),
  ])

  return (
    <section
      aria-labelledby="project-title"
      className="site-container lg:pb-10"
    >
      <div data-aos="fade-up" data-aos-offset="0">
        <Link
          href={localizePath(locale, "/projects")}
          className="flex w-fit items-center gap-2.5 text-[0.6875rem] leading-[1.172] font-medium text-ink-sage transition-colors hover:text-ink-warm"
        >
          <ArrowLeft
            aria-hidden="true"
            strokeWidth={2.4}
            className="size-3.5 text-link rtl:-scale-x-100"
          />
          {projectDetails.back}
        </Link>
        <h1
          id="project-title"
          className="mt-7 font-display text-5xl leading-none text-ink-warm sm:text-[4rem] lg:text-[5.5rem]"
        >
          {name}
        </h1>
      </div>
      <dl
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-offset="0"
        className="mt-10 grid grid-cols-2 gap-6 md:flex md:flex-wrap md:gap-x-16"
      >
        {factKeys.map((key) => (
          <div key={key} className="flex flex-col gap-2">
            <dt className="text-[0.6875rem] leading-[1.172] font-medium text-ink-sage uppercase">
              {projectDetails.facts[key]}
            </dt>
            <dd className="text-[0.8125rem] leading-[1.172] text-ink-pale">
              {facts[key]}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
