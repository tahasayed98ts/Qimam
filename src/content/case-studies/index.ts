import type { StaticImageData } from "next/image"

import { projects, type Project, type ProjectId } from "@/content/projects"
import type { Locale } from "@/i18n/config"
import { arabfly } from "./arabfly"

type Box = readonly [x: number, y: number, width: number, height: number]

/**
 * A screenshot in a tinted frame, placed as in Figma: the outlined image box
 * sits at `box` (Figma px within the `frame`) and may run past the frame's
 * edges, which clip it. `crop` is Figma's image fill inside the box (%), or
 * the whole image, covering the box, when omitted.
 */
export type Showcase = {
  image: StaticImageData
  frame: readonly [width: number, height: number]
  box: Box
  crop?: Box
}

/** A case study's copy in one language. */
export type CaseStudyCopy = {
  facts: { industry: string; services: string; year: string; platform: string }
  hero: { alt: string; caption: string }
  overview: { title: string; lead: string; columns: readonly string[] }
  challenge: {
    title: string
    body: readonly string[]
    principle: string
    alt: string
    caption: string
  }
  approach: {
    /** One entry per line. */
    title: readonly string[]
    body: string
    steps: readonly { title: string; body: string }[]
    alt: string
  }
  /** In the order of the gallery shots. */
  gallery: readonly { title: string; caption: string; alt: string }[]
}

export type CaseStudy = {
  hero: Showcase
  challenge: Showcase
  approach: Showcase
  gallery: readonly Showcase[]
  copy: Record<Locale, CaseStudyCopy>
}

/** Projects with a details page (`/projects/[id]`), keyed by project. */
const caseStudies: Partial<Record<ProjectId, CaseStudy>> = { arabfly }

/** Whether the project has a details page. */
export function hasCaseStudy(id: ProjectId) {
  return id in caseStudies
}

/** Ids of the projects that have a details page. */
export const caseStudyIds = projects
  .map((project) => project.id)
  .filter(hasCaseStudy)

/** The project and its case study, or undefined when there is no page. */
export function getCaseStudy(
  id: string
): { project: Project; study: CaseStudy } | undefined {
  const project = projects.find((item) => item.id === id)
  const study = project && caseStudies[project.id]
  return project && study ? { project, study } : undefined
}
