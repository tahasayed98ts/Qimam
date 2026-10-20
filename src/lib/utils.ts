import { createCn } from "cn/config"

// Register the custom type scale from globals.css so `text-display-*` is
// merged as a font size instead of being mistaken for a text colour.
export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display-xl", "display-lg", "display-md"] }],
    },
  },
})

/** Figma px → rem, so sizes set from code follow the desktop scale. */
export function rem(px: number) {
  return `${px / 16}rem`
}
