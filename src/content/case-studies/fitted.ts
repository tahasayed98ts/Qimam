import type { StaticImageData } from "next/image"

import type { CaseStudy, Showcase } from "./index"

const shot = (image: StaticImageData, y: number): Showcase => ({
  image,
  frame: [590, 410],
  box: [54, y, 480, 360],
})

/**
 * The framing shared by the case studies whose images were exported to fit it
 * (Figma's "fit" layers): each image fills its box, and the boxes run to the
 * frames' edges. The gallery's shots sit on the frame's bottom edge, centred,
 * then on its top edge. In Figma the third still sits on the template's "casa
 * oliva" mock-up, which isn't part of the projects.
 */
export function fittedShowcases({
  hero,
  challenge,
  approach,
  gallery: [first, second, third],
}: {
  hero: StaticImageData
  challenge: StaticImageData
  approach: StaticImageData
  gallery: readonly [StaticImageData, StaticImageData, StaticImageData]
}): Pick<CaseStudy, "hero" | "challenge" | "approach" | "gallery"> {
  return {
    hero: { image: hero, frame: [1264, 648], box: [92, 75, 1171, 496] },
    challenge: {
      image: challenge,
      frame: [620, 540],
      box: [-1, 73, 562, 466],
    },
    approach: {
      image: approach,
      frame: [1264, 549],
      box: [141, 82, 1122, 384],
    },
    gallery: [shot(first, 49), shot(second, 24), shot(third, -1)],
  }
}
