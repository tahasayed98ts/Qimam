import type { StaticImageData } from "next/image"

import amrAli from "@/assets/home/projects/amr-ali.png"
import arabfly from "@/assets/home/projects/arabfly.png"
import tallah from "@/assets/home/projects/tallah.png"
import tawaf from "@/assets/home/projects/tawaf.png"

export type ProjectId = "arabfly" | "tallah" | "tawaf" | "amr-ali"

export type Project = {
  id: ProjectId
  name: string
  /** Public site shown in the URL chip; omitted when not confirmed yet. */
  url?: string
  image: StaticImageData
}

/**
 * All projects, listed on the Projects page in Figma's Home order (images
 * exported from Figma). Localized category and description live in the
 * dictionaries under `projects.items[id]`.
 *
 * TODO(content): add Qimam's other projects. Figma's Projects frame only has
 * template placeholders, so /projects lists the same four as Home for now.
 */
export const projects: Project[] = [
  {
    id: "arabfly",
    name: "ArabFly",
    url: "https://www.Bybit.com",
    image: arabfly,
  },
  {
    id: "tallah",
    name: "Tallah",
    url: "https://www.tallah.travel/ar",
    image: tallah,
  },
  {
    id: "tawaf",
    name: "Tawaf",
    url: "https://tawaf-two.vercel.app/ar",
    image: tawaf,
  },
  {
    id: "amr-ali",
    name: "Amr Ali",
    url: "https://amr-ali.com/ar",
    image: amrAli,
  },
]

/** The four projects featured on Home. */
export const featuredProjects = projects.slice(0, 4)
