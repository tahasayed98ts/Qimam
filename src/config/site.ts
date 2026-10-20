import type { Dictionary } from "@/i18n/dictionaries/en"

type NavKey = keyof Dictionary["nav"]

/** Site map shared by the header menu and the footer. Paths are locale-less. */
export const navigation: { key: NavKey; href: string }[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/projects" },
  { key: "articles", href: "/articles" },
  { key: "contact", href: "/contact" },
]

/** The footer "Quick Links" list from the Figma frame (no About entry). */
export const footerNavigation = navigation.filter(({ key }) => key !== "about")

/**
 * TODO(content): replace with Qimam's real profiles and WhatsApp number —
 * the Figma file only shows the icons.
 */
export const socialLinks = {
  linkedin: "https://www.linkedin.com/",
  x: "https://x.com/",
  whatsapp: "https://wa.me/",
} as const
