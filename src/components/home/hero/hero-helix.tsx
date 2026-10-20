"use client"

import Image, { type StaticImageData } from "next/image"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import type { HelixScene } from "./helix-scene"

function supportsWebGL2() {
  try {
    return !!document.createElement("canvas").getContext("webgl2")
  } catch {
    return false
  }
}

/**
 * Hosts the animated Waves artwork. The server-rendered image stays visible
 * until the first WebGL frame is ready, and permanently when the visitor
 * prefers reduced motion or the device has no WebGL2. The scene animates the
 * same image, so the artwork is downloaded only once.
 */
export function HeroHelix({
  image,
  sizes,
  className,
}: {
  image: StaticImageData
  /** `sizes` of the static image; keep in step with the `className` box. */
  sizes: string
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [live, setLive] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const img = imageRef.current
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!canvas || !img || reducedMotion.matches || !supportsWebGL2()) return

    let scene: HelixScene | undefined
    let visible = true
    let cancelled = false

    const teardown = () => {
      scene?.dispose()
      scene = undefined
      setLive(false)
    }

    const load = async () => {
      // Keep the static fallback if the chunk or image fails to load, or
      // WebGL setup throws (e.g. blocked GPU, lost context during startup).
      try {
        const { createHelixScene } = await import("./helix-scene")
        if (cancelled) return
        const created = await createHelixScene(canvas, {
          image: img,
          onContextLost: teardown,
        })
        if (cancelled) {
          created.dispose()
          return
        }
        scene = created
      } catch {
        return
      }
      scene.setRunning(visible)
      setLive(true)
    }

    // Defer the 3D chunk until the browser is idle so it never competes
    // with the hero text and fonts.
    const hasIdleCallback = "requestIdleCallback" in window
    const idleHandle = hasIdleCallback
      ? window.requestIdleCallback(() => void load(), { timeout: 2000 })
      : window.setTimeout(() => void load(), 600)

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      scene?.setRunning(visible)
    })
    observer.observe(canvas)

    const handleMotionChange = () => {
      if (reducedMotion.matches) teardown()
    }
    reducedMotion.addEventListener("change", handleMotionChange)

    return () => {
      cancelled = true
      if (hasIdleCallback) window.cancelIdleCallback(idleHandle)
      else window.clearTimeout(idleHandle)
      observer.disconnect()
      reducedMotion.removeEventListener("change", handleMotionChange)
      scene?.dispose()
    }
  }, [image.src])

  return (
    <div aria-hidden="true" className={cn("pointer-events-none", className)}>
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-1000",
          live && "opacity-0"
        )}
      >
        <Image
          ref={imageRef}
          src={image}
          alt=""
          fill
          loading="eager"
          sizes={sizes}
        />
      </div>
      <canvas
        ref={canvasRef}
        className={cn(
          "absolute inset-0 size-full opacity-0 transition-opacity duration-1000",
          live && "opacity-100"
        )}
      />
    </div>
  )
}
