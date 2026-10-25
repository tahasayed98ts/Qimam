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

/** Inbox that receives the Contact page form ("Book Now") and subscribers. */
export const contactEmail = "qimamsmart@gmail.com"

/** Qimam's profiles, and a WhatsApp chat with Qimam's number. */
export const socialLinks = {
  linkedin: "https://www.linkedin.com/company/qimam-tech/about/",
  x: "https://x.com/qimam_",
  // 01559093750, an Egyptian mobile: wa.me takes it with the country code
  // (20) and without the leading 0.
  whatsapp: "https://wa.me/201559093750",
} as const
