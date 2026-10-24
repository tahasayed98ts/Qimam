import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/**
 * An inner page's centred Michroma title (48px on desktop in Figma). It
 * rises in as the page opens.
 */
export function PageTitle({ className, ...props }: ComponentProps<"h1">) {
  return (
    <h1
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
