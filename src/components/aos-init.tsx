"use client"

import AOS from "aos"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

/**
 * Starts AOS (Animate On Scroll): elements marked with `data-aos` animate in
 * once, as they scroll into view. Visitors who prefer reduced motion get
 * static content. Overrides (RTL, no-JS fallback): see globals.css.
 */
export function AosInit() {
  const pathname = usePathname()
  const started = useRef(false)

  useEffect(() => {
    if (started.current) {
      // A client-side navigation swapped the page in: measure it now that
      // it's visible. (AOS's own DOM watcher is off because it measured new
      // pages while still hidden and revealed everything at once.)
      AOS.refreshHard()
      return
    }
    started.current = true
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
      offset: 60,
      disableMutationObserver: true,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    })
  }, [pathname])

  return null
}
