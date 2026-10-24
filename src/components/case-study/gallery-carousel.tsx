"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useId, useRef, useState, type ReactNode } from "react"

import styles from "./gallery-carousel.module.css"

const pad = (value: number) => String(value).padStart(2, "0")

type Position = { index: number; atStart: boolean; atEnd: boolean }

/**
 * A horizontal strip of shots that snaps to each one, with previous/next
 * buttons, a counter and a progress bar. Swiping, the trackpad and the arrow
 * keys (with the strip focused) move it too.
 */
export function GalleryCarousel({
  heading,
  shots,
  labels,
}: {
  heading: ReactNode
  shots: ReactNode[]
  labels: { shots: string; previous: string; next: string }
}) {
  const trackRef = useRef<HTMLUListElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const trackId = useId()
  const total = shots.length
  const [position, setPosition] = useState<Position>({
    index: 0,
    atStart: true,
    atEnd: false,
  })

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let frame = 0
    const measure = () => {
      frame = 0
      const max = track.scrollWidth - track.clientWidth
      // scrollLeft counts down from 0 in right-to-left layouts.
      const scrolled = Math.abs(track.scrollLeft)
      const progress = max > 0 ? Math.min(scrolled / max, 1) : 0
      if (barRef.current) {
        barRef.current.style.width = `${((1 + progress * (total - 1)) / total) * 100}%`
      }
      // The ends get a 2px margin: scroll positions can be fractional (and
      // stop short of the rounded maximum in right-to-left layouts).
      const next = {
        index: Math.round(progress * (total - 1)),
        atStart: scrolled < 2,
        atEnd: scrolled > max - 2,
      }
      setPosition((current) =>
        current.index === next.index &&
        current.atStart === next.atStart &&
        current.atEnd === next.atEnd
          ? current
          : next
      )
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }
    measure()
    track.addEventListener("scroll", schedule, { passive: true })
    const resize = new ResizeObserver(schedule)
    resize.observe(track)
    return () => {
      track.removeEventListener("scroll", schedule)
      resize.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [total])

  /** Scrolls one shot back (-1) or on (1), in reading order. */
  function move(direction: -1 | 1) {
    const track = trackRef.current
    if (!track) return
    const [first, second] = Array.from(track.children) as HTMLElement[]
    const step = second
      ? Math.abs(second.offsetLeft - first.offsetLeft)
      : track.clientWidth
    const rtl = getComputedStyle(track).direction === "rtl"
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    track.scrollBy({
      left: direction * step * (rtl ? -1 : 1),
      behavior: reduce ? "auto" : "smooth",
    })
  }

  const buttonClass =
    "-m-3 grid size-11 place-items-center rounded-full text-link transition-colors hover:text-ink-warm aria-disabled:cursor-default aria-disabled:opacity-35 aria-disabled:hover:text-link"

  return (
    <>
      <div
        data-aos="fade-up"
        className="site-container flex flex-wrap items-end justify-between gap-x-6 gap-y-6"
      >
        {heading}
        <div className="flex items-center gap-7">
          <p aria-hidden="true" className="font-display text-xs text-ink-sage">
            {pad(position.index + 1)} — {pad(total)}
          </p>
          <button
            type="button"
            aria-label={labels.previous}
            aria-controls={trackId}
            aria-disabled={position.atStart}
            onClick={() => !position.atStart && move(-1)}
            className={buttonClass}
          >
            <ArrowLeft
              aria-hidden="true"
              strokeWidth={1.68}
              className="size-5 rtl:-scale-x-100"
            />
          </button>
          <button
            type="button"
            aria-label={labels.next}
            aria-controls={trackId}
            aria-disabled={position.atEnd}
            onClick={() => !position.atEnd && move(1)}
            className={buttonClass}
          >
            <ArrowRight
              aria-hidden="true"
              strokeWidth={1.68}
              className="size-5 rtl:-scale-x-100"
            />
          </button>
        </div>
      </div>
      <div data-aos="fade-up" className="mt-10">
        <ul
          ref={trackRef}
          id={trackId}
          tabIndex={0}
          aria-label={labels.shots}
          className={styles.track}
        >
          {shots.map((shot, index) => (
            <li key={index} className={styles.shot}>
              {shot}
            </li>
          ))}
        </ul>
        <div
          aria-hidden="true"
          className="site-container mt-10 flex items-center"
        >
          <div
            ref={barRef}
            className="h-0.5 shrink-0 bg-violet-light"
            style={{ width: `${100 / total}%` }}
          />
          <div className="h-px flex-1 bg-rule-dark" />
        </div>
      </div>
    </>
  )
}
