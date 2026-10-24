import type { CaseStudyCopy, Showcase } from "@/content/case-studies"
import { getDictionary } from "@/i18n/dictionaries"
import { ChapterLabel, ChapterTitle } from "./chapter"
import { GalleryCarousel } from "./gallery-carousel"
import { ShowcaseFrame } from "./showcase"

/** "A closer look": the project's screens in a scrolling strip. */
export async function CaseStudyGallery({
  shots,
  copy,
}: {
  shots: readonly Showcase[]
  copy: CaseStudyCopy["gallery"]
}) {
  const { projectDetails } = await getDictionary()
  const labels = projectDetails.gallery

  return (
    <section aria-labelledby="gallery-title">
      <GalleryCarousel
        labels={labels}
        heading={
          <div className="flex max-w-100 flex-col gap-4">
            <ChapterLabel>{labels.label}</ChapterLabel>
            <ChapterTitle id="gallery-title">{labels.title}</ChapterTitle>
          </div>
        }
        shots={shots.map((shot, index) => (
          <figure key={index} className="flex flex-col gap-4.5">
            <ShowcaseFrame
              showcase={shot}
              alt={copy[index].alt}
              sizes="(min-width: 1024px) 531px, (min-width: 640px) 58vw, 80vw"
            />
            <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
              <span className="text-xl leading-[1.172] text-ink-warm">
                {copy[index].title}
              </span>
              <span className="text-[0.6875rem] leading-[1.172] text-ink-sage">
                {copy[index].caption}
              </span>
            </figcaption>
          </figure>
        ))}
      />
    </section>
  )
}
