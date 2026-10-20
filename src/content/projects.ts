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
 * Featured projects on Home, in Figma order (images exported from Figma).
 * Localized category and description live in the dictionaries under
 * `projects.items[id]`.
 */
export const featuredProjects: Project[] = [
  // TODO(content): Figma still shows a placeholder URL (Bybit) for ArabFly.
  { id: "arabfly", name: "ArabFly", image: arabfly },
  {
    id: "tallah",
    name: "Tallah",
    url: "https://www.tallah.travel/ar",
    image: tallah,
  },
  {
    id: "tawaf",
    name: "Tawaf",
    // TODO(content): Figma shows a placeholder URL; this domain is taken from
    // the address bar in Tawaf's own screenshot — confirm with Qimam.
    url: "https://tawaf.travel",
    image: tawaf,
  },
  {
    id: "amr-ali",
    name: "Amr Ali",
    url: "https://amr-ali.com/ar",
    image: amrAli,
  },
]
