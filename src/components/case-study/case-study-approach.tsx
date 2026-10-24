import type { CaseStudyCopy, Showcase } from "@/content/case-studies"
import { getDictionary } from "@/i18n/dictionaries"
import { ChapterLabel, ChapterTitle } from "./chapter"
import { ShowcaseFrame } from "./showcase"

/** "03 / Our approach": the workflow, its numbered steps and a wide shot. */
export async function CaseStudyApproach({
  showcase,
  copy,
}: {
  showcase: Showcase
  copy: CaseStudyCopy["approach"]
}) {
  const { projectDetails } = await getDictionary()

  return (
    <section
      aria-labelledby="approach-title"
      className="site-container flex flex-col gap-10"
    >
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-10">
        <div data-aos="fade-right" className="flex flex-col gap-6 lg:w-135">
          <ChapterLabel number={3}>
            {projectDetails.chapters.approach}
          </ChapterLabel>
          <ChapterTitle id="approach-title">
            {copy.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </ChapterTitle>
          <p className="leading-[1.8] text-ink-sage">{copy.body}</p>
        </div>
        <ol
          data-aos="fade-left"
          className="flex flex-col gap-7 lg:min-h-86.5 lg:w-121 lg:pt-2.5"
        >
          {copy.steps.map((step, index) => (
            <li key={step.title} className="flex gap-6">
              <span
                aria-hidden="true"
                className="font-display text-xl leading-[1.42] text-link"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl leading-[1.172] text-ink-warm">
                  {step.title}
                </h3>
                <p className="text-sm/[1.6] text-ink-sage">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div data-aos="fade-up">
        <ShowcaseFrame
          showcase={showcase}
          alt={copy.alt}
          sizes="(min-width: 1210px) 1138px, 94vw"
        />
      </div>
    </section>
  )
}
