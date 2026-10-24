import type { CaseStudyCopy } from "@/content/case-studies"
import { getDictionary } from "@/i18n/dictionaries"
import { ChapterLabel, ChapterTitle } from "./chapter"

/** "01 / Overview": the project in a sentence, then the brief and scope. */
export async function CaseStudyOverview({
  copy,
}: {
  copy: CaseStudyCopy["overview"]
}) {
  const { projectDetails } = await getDictionary()

  return (
    <section
      aria-labelledby="overview-title"
      className="site-container grid gap-8 lg:grid-cols-[20rem_1fr] lg:gap-16"
    >
      <div data-aos="fade-right" className="flex flex-col gap-4">
        <ChapterLabel number={1}>{projectDetails.chapters.overview}</ChapterLabel>
        <ChapterTitle
          id="overview-title"
          className="leading-[1.25] lg:text-[1.6875rem]"
        >
          {copy.title}
        </ChapterTitle>
      </div>
      <div data-aos="fade-left" className="flex flex-col gap-6">
        <p className="text-2xl leading-[1.22] text-ink-warm md:text-[1.875rem] lg:text-4xl rtl:leading-[1.5]">
          {copy.lead}
        </p>
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          {copy.columns.map((text) => (
            <p key={text} className="leading-[1.8] text-ink-sage">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
