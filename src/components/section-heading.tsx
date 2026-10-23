import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Michroma section title (28px on desktop in the Home frame); it fades in as
 * it scrolls into view.
 */
export function SectionHeading({
  className,
  ...props
}: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "reveal font-display text-[1.375rem] leading-[1.45] sm:text-2xl lg:text-[1.75rem]",
        className
      )}
      {...props}
    />
  )
}
