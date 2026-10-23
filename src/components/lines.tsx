import type { CSSProperties } from "react"

/**
 * Render copy split into the Figma line breaks while still reading as one
 * phrase (the spaces stay in the text for screen readers and copy/paste).
 * Pass e.g. `lineClassName="sm:block"` to let long lines flow on phones, and
 * `stagger` to number the lines from that value for a staggered entrance.
 */
export function Lines({
  lines,
  lineClassName = "block",
  stagger,
}: {
  lines: string[]
  lineClassName?: string
  stagger?: number
}) {
  return lines.map((line, index) => (
    <span
      key={line}
      className={lineClassName}
      style={
        stagger === undefined
          ? undefined
          : ({ "--stagger": stagger + index } as CSSProperties)
      }
    >
      {line}
      {index < lines.length - 1 && " "}
    </span>
  ))
}
