"use client"

import AOS from "aos"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

let started = false

function start() {
  if (started) return
  started = true
  AOS.init({
    once: true,
    duration: 800,
    easing: "ease-out-cubic",
    offset: 60,
    disableMutationObserver: true,
    disable: () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  })
}

/**
 * Starts AOS (Animate On Scroll): elements marked with `data-aos` animate in
 * once, as they scroll into view. Visitors who prefer reduced motion get
 * static content. Overrides (RTL, no-JS fallback): see globals.css.
 *
 * Every page ends with one. In the layout it would run too early: React
 * hydrates a page after the layout around it, and AOS must not add its classes
 * to markup React hasn't hydrated yet (a hydration mismatch).
 */
export function AosInit() {
  useEffect(start, [])

  return null
}

/**
 * Rendered once, by the layout: when a client-side navigation swaps a page in,
 * measures it now that it's visible. (AOS's own DOM watcher is off because it
 * measured new pages while still hidden and revealed everything at once.)
 */
export function AosRefresh() {
  const pathname = usePathname()

  useEffect(() => {
    if (started) {
      AOS.refreshHard()
      return
    }
    // Safety net: a page without an AosInit shows up late rather than never.
    const timer = setTimeout(start, 3000)
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
