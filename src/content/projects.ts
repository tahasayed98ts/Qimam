import type { StaticImageData } from "next/image"

import amrAli from "@/assets/home/projects/amr-ali.png"
import arabfly from "@/assets/home/projects/arabfly.png"
import special from "@/assets/home/projects/special.png"
import tallah from "@/assets/home/projects/tallah.png"
import tawaf from "@/assets/home/projects/tawaf.png"

export type ProjectId = "arabfly" | "tallah" | "special" | "amr-ali" | "tawaf"

export type Project = {
  id: ProjectId
  name: string
  /** Public site shown in the URL chip; omitted when not confirmed yet. */
  url?: string
  /** An app's store pages, shown as store badges in place of the URL chip. */
  stores?: { appStore?: string; googlePlay?: string }
  image: StaticImageData
}

/**
 * All projects, listed on the Projects page: Home's four in Figma's order,
 * then Tawaf, which Special replaced on Home (images exported from Figma).
 * Localized category and description live in the dictionaries under
 * `projects.items[id]`.
 *
 * TODO(content): add Qimam's other projects. Figma's Projects frame only has
 * template placeholders.
 */
export const projects: Project[] = [
  {
    id: "arabfly",
    name: "ArabFly",
    // TODO(content): Figma also shows a Google Play badge; it appears once
    // the app's Google Play link is added here as `googlePlay`.
    stores: { appStore: "https://apps.apple.com/us/app/arabfly/id6800468216" },
    image: arabfly,
  },
  {
    id: "tallah",
    name: "Tallah",
    url: "https://www.tallah.travel/ar",
    image: tallah,
  },
  {
    id: "special",
    name: "Special",
    url: "https://specialperfume.sa/ar",
    image: special,
  },
  {
    id: "amr-ali",
    name: "Amr Ali",
    url: "https://amr-ali.com/ar",
    image: amrAli,
  },
  {
    id: "tawaf",
    name: "Tawaf",
    url: "https://www.tawafgroups.com/ar",
    image: tawaf,
  },
]

/** The four projects featured on Home: all but Tawaf. */
export const featuredProjects = projects.slice(0, 4)
