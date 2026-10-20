import type { CSSProperties } from "react"

import { LinkedInIcon, XIcon } from "@/components/icons"
import { socialLinks } from "@/config/site"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { cn } from "@/lib/utils"

const boxClass =
  "gradient-outline grid size-10 place-items-center rounded-lg text-ink transition hover:brightness-150"

/** LinkedIn and X buttons with the Figma gradient hairline. */
export function SocialLinks({
  labels,
  className,
}: {
  labels: Dictionary["social"]
  className?: string
}) {
  return (
    <ul className={cn("flex items-center gap-4", className)}>
      <li>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labels.linkedin}
          className={boxClass}
        >
          <LinkedInIcon className="size-6" />
        </a>
      </li>
      <li>
        <a
          href={socialLinks.x}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labels.x}
          className={boxClass}
          // The X box's hairline runs the other way in the design.
          style={{ "--outline-angle": "270deg" } as CSSProperties}
        >
          <XIcon className="size-5" />
        </a>
      </li>
    </ul>
  )
}
