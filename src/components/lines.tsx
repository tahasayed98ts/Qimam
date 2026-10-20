/**
 * Render copy split into the Figma line breaks while still reading as one
 * phrase (the spaces stay in the text for screen readers and copy/paste).
 * Pass e.g. `lineClassName="sm:block"` to let long lines flow on phones.
 */
export function Lines({
  lines,
  lineClassName = "block",
}: {
  lines: string[]
  lineClassName?: string
}) {
  return lines.map((line, index) => (
    <span key={line} className={lineClassName}>
      {line}
      {index < lines.length - 1 && " "}
    </span>
  ))
}
