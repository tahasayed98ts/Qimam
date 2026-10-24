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

  return (
    <div
      className={cn(
        "relative overflow-clip rounded-[0.5rem] border border-frame-line bg-frame-fill",
        className
      )}
      style={{ aspectRatio: `${frameWidth} / ${frameHeight}` }}
    >
      <div
        className="absolute overflow-clip rounded-[0.5rem] border border-white"
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
