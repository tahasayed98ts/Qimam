import type { StaticImageData } from "next/image"

import atlassian from "@/assets/home/partners/atlassian.png"
import framer from "@/assets/home/partners/framer.png"
import github from "@/assets/home/partners/github.png"
import launchdarkly from "@/assets/home/partners/launchdarkly.png"
import shopify from "@/assets/home/partners/shopify.png"
import tailscale from "@/assets/home/partners/tailscale.png"

/**
 * "Trusted by" logos as shown in Figma (white marks, rendered at 60%).
 * TODO(content): these look like template placeholders — confirm Qimam has
 * permission to list these companies before launch.
 */
export const partners: { name: string; logo: StaticImageData }[] = [
  { name: "Framer", logo: framer },
  { name: "Atlassian", logo: atlassian },
  { name: "Shopify", logo: shopify },
  { name: "GitHub", logo: github },
  { name: "LaunchDarkly", logo: launchdarkly },
  { name: "Tailscale", logo: tailscale },
]
