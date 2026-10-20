import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.4c0-1.3-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.86V21h-4V9.75Z" />
    </svg>
  )
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
    </svg>
  )
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.9 20.1A9 9 0 1 0 3.9 16.1L2.5 21.5l5.4-1.4Z"
        fill="#cee4d5"
        stroke="#0b762f"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.1 7.6c.25-.3.6-.35.9-.35h.45c.25 0 .45.15.55.4l.75 1.75c.1.25.05.5-.1.7l-.55.65c-.15.15-.15.4-.05.55.65 1.05 1.5 1.9 2.55 2.55.2.1.4.1.55-.05l.65-.55c.2-.15.45-.2.7-.1l1.75.75c.25.1.4.3.4.55v.45c0 .3-.05.65-.35.9-.6.5-1.45.7-2.25.5-1.6-.45-3.05-1.35-4.2-2.5S8.65 10.85 8.2 9.25c-.2-.8 0-1.65.5-2.25Z"
        stroke="#0b762f"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Staggered three-line menu glyph from the Figma header (36×16). */
export function MenuGlyph(props: IconProps) {
  return (
    <svg viewBox="0 0 36 16" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="13.5" y="0" width="22.5" height="2" rx="1" />
      <rect x="0" y="7" width="36" height="2" rx="1" />
      <rect x="0" y="14" width="22.5" height="2" rx="1" />
    </svg>
  )
}

/** Two-tone double chevron used inside the "Learn More" buttons. */
export function DoubleChevron(props: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m4.5 15 5-5-5-5" stroke="#7a7a7a" />
      <path d="m10.5 15 5-5-5-5" stroke="currentColor" />
    </svg>
  )
}
