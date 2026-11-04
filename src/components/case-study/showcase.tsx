import Image from "next/image"
import type { ReactNode } from "react"

import type { Showcase } from "@/content/case-studies"
import { cn } from "@/lib/utils"

const percent = (part: number, whole: number) => `${(part / whole) * 100}%`

/**
 * Scales the slot widths of a `sizes` value, not its media conditions (the
 * image is drawn wider than its frame).
 */
function scaleSizes(sizes: string, factor: number) {
  return sizes
    .split(",")
    .map((entry) =>
      entry.replace(
        /(\d+(?:\.\d+)?)(px|vw)\s*$/,
        (_, value: string, unit: string) =>
          `${Math.ceil(Number(value) * factor)}${unit}`
      )
    )
    .join(",")
}

/**
 * A screenshot in its tinted frame (see `Showcase`); the composition scales
 * with the frame's width. Placement is physical, so it stays as designed in
 * Arabic too: the screenshots are content, not layout.
 */
export function ShowcaseFrame({
  showcase,
  alt,
  sizes,
  eager = false,
  className,
}: {
  showcase: Showcase
  alt: string
  /** The frame's rendered width, in `sizes` syntax. */
  sizes: string
  /** Above the fold: load first. */
  eager?: boolean
  className?: string
}) {
  const {
    image,
    frame: [frameWidth, frameHeight],
    box: [x, y, width, height],
    crop = [0, 0, 100, 100],
  } = showcase

  // The box's corners are square where it runs to a frame edge, as in Figma.
  const atLeft = x <= 0
  const atTop = y <= 0
  const atRight = x + width >= frameWidth - 1
  const atBottom = y + height >= frameHeight - 1

  return (
    // The frame's stroke lies over its content, as in Figma: a real border
    // would shrink the box the percentages below are measured against.
    <div
      className={cn(
        "relative overflow-clip rounded-[0.5rem] bg-frame-fill after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-frame-line",
        className
      )}
      style={{ aspectRatio: `${frameWidth} / ${frameHeight}` }}
    >
      <div
        className={cn(
          "absolute overflow-clip border border-white",
          !atTop && !atLeft && "rounded-tl-[0.5rem]",
          !atTop && !atRight && "rounded-tr-[0.5rem]",
          !atBottom && !atRight && "rounded-br-[0.5rem]",
          !atBottom && !atLeft && "rounded-bl-[0.5rem]"
        )}
        style={{
          left: percent(x, frameWidth),
          top: percent(y, frameHeight),
          width: percent(width, frameWidth),
          height: percent(height, frameHeight),
        }}
      >
        <div
          className="absolute"
          style={{
            left: `${crop[0]}%`,
            top: `${crop[1]}%`,
            width: `${crop[2]}%`,
            height: `${crop[3]}%`,
          }}
        >
          <Image
            src={image}
            alt={alt}
            fill
            placeholder="blur"
            loading={eager ? "eager" : undefined}
            fetchPriority={eager ? "high" : undefined}
            sizes={scaleSizes(sizes, ((width / frameWidth) * crop[2]) / 100)}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

/** A showcase with its numbered caption underneath. */
export function ShowcaseFigure({
  number,
  caption,
  captionClassName,
  className,
  ...frame
}: Parameters<typeof ShowcaseFrame>[0] & {
  number: number
  caption: ReactNode
  captionClassName?: string
}) {
  return (
    <figure className={className}>
      <ShowcaseFrame {...frame} />
      <figcaption className={cn("flex gap-4", captionClassName)}>
        <span className="text-[0.6875rem] leading-[1.172] text-link">
          {String(number).padStart(2, "0")}
        </span>
        <span className="text-xs/normal text-ink-sage">{caption}</span>
      </figcaption>
    </figure>
  )
}
