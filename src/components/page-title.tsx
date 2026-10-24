import type { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

/**
 * An inner page's centred Michroma title (48px on desktop in Figma). It
 * rises in as the page opens. Pass `as="p"` where the page's own heading is
 * another element (an article page under its "Articles" title).
 */
export function PageTitle({
  as: Tag = "h1",
  className,
  ...props
}: HTMLAttributes<HTMLElement> & { as?: "h1" | "p" }) {
  return (
    <Tag
      data-aos="fade-up"
      data-aos-offset="0"
      className={cn(
        "mx-auto max-w-254.5 text-center font-display text-[2rem] leading-[1.42] max-lg:text-balance md:text-[2.5rem] xl:text-display-xl",
        className
      )}
      {...props}
    />
  )
}
