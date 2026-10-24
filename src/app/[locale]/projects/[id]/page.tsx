import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CaseStudyApproach } from "@/components/case-study/case-study-approach"
import { CaseStudyChallenge } from "@/components/case-study/case-study-challenge"
import { CaseStudyGallery } from "@/components/case-study/case-study-gallery"
import { CaseStudyIntro } from "@/components/case-study/case-study-intro"
import { CaseStudyOverview } from "@/components/case-study/case-study-overview"
import { ShowcaseFigure } from "@/components/case-study/showcase"
import { PageBackdrop } from "@/components/page-backdrop"
import { caseStudyIds, getCaseStudy } from "@/content/case-studies"
import { localizePath } from "@/i18n/config"
import { getLocale } from "@/i18n/dictionaries"

// Fully static. Other ids are rendered (to the localized 404, for projects
// without a case study yet) before responding, so they get a real 404 status
// rather than a streamed shell.
export const ensureStatic = "navigation"

export function generateStaticParams() {
  return caseStudyIds.map((id) => ({ id }))
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects/[id]">): Promise<Metadata> {
  const [{ id }, locale] = await Promise.all([params, getLocale()])
  const entry = getCaseStudy(id)
  if (!entry) notFound()
  const path = `/projects/${entry.project.id}`
  return {
    title: entry.project.name,
    description: entry.study.copy[locale].overview.lead,
    alternates: {
      canonical: localizePath(locale, path),
      languages: {
        en: localizePath("en", path),
        ar: localizePath("ar", path),
        "x-default": localizePath("en", path),
      },
    },
  }
}

export default async function ProjectPage({
  params,
}: PageProps<"/[locale]/projects/[id]">) {
  const [{ id }, locale] = await Promise.all([params, getLocale()])
  const entry = getCaseStudy(id)
  if (!entry) notFound()
  const { project, study } = entry
  const copy = study.copy[locale]
  const rule = (
    <div aria-hidden="true" className="site-container h-px bg-rule-dark" />
  )

  return (
    // isolate: the backdrop sits at z-index -1 within this page only.
    <div className="relative isolate flex flex-col gap-16 pt-32 pb-16 lg:gap-22 lg:pt-60 lg:pb-22">
      <PageBackdrop />
      <CaseStudyIntro name={project.name} facts={copy.facts} />
      <div data-aos="fade-up" data-aos-offset="0" className="site-container">
        <ShowcaseFigure
          showcase={study.hero}
          alt={copy.hero.alt}
          sizes="(min-width: 1210px) 1138px, 94vw"
          eager
          number={1}
          caption={copy.hero.caption}
          captionClassName="pt-7.5"
        />
      </div>
      <CaseStudyOverview copy={copy.overview} />
      {rule}
      <CaseStudyChallenge showcase={study.challenge} copy={copy.challenge} />
      {rule}
      <CaseStudyApproach showcase={study.approach} copy={copy.approach} />
      {rule}
      <CaseStudyGallery shots={study.gallery} copy={copy.gallery} />
    </div>
  )
}
