import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/lib/utils"

/** The small blue label over a case-study section ("01 / Overview"). */
export function ChapterLabel({
  number,
  children,
}: {
  number?: number
  children: ReactNode
}) {
  return (
    <p className="text-[0.6875rem] leading-[1.172] font-medium text-link uppercase">
      {number !== undefined && `${String(number).padStart(2, "0")} / `}
      {children}
    </p>
  )
}

/** A case-study section title (Michroma 32px on desktop in Figma). */
export function ChapterTitle({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "font-display text-2xl leading-[1.05] text-ink-warm lg:text-[2rem] rtl:leading-[1.45]",
        className
      )}
      {...props}
    />
  )
}
