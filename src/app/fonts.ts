import { Kufam, Michroma, Roboto } from "next/font/google"

// English display face (all Michroma text in the Figma frame).
export const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
  display: "swap",
})

// English body copy (buttons, paragraphs, labels) is set in Roboto in Figma.
export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

// Arabic face for both display and body copy. Not preloaded so English pages
// don't download it; Arabic pages request it as soon as the CSS applies.
export const kufam = Kufam({
  subsets: ["arabic", "latin"],
  variable: "--font-kufam",
  display: "swap",
  preload: false,
})
