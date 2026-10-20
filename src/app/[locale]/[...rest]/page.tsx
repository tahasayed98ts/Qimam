import { notFound } from "next/navigation"

/**
 * Sends unknown paths under a locale (including pages that are not built yet,
 * such as /en/about) to the localized not-found page inside the site layout.
 * Real routes added later take precedence over this catch-all.
 */

// This segment only ever renders not-found, so there is no shell to validate.
export const instant = false

export default function CatchAllPage() {
  notFound()
}
