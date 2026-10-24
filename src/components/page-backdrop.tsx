import type { CSSProperties } from "react"

import styles from "./page-backdrop.module.css"

/**
 * Soft glows behind an inner page; sits behind the page content, so render
 * it inside a `relative isolate` wrapper.
 */
export function PageBackdrop({
  figmaHeight,
}: {
  /**
   * Height of the page's Figma background, for backgrounds that also have
   * the two lower hazes (About, Services): it places them. Leave it out for
   * the top glows only (Projects).
   */
  figmaHeight?: number
}) {
  return (
    <div
      className={styles.backdrop}
      style={{ "--page-height": figmaHeight } as CSSProperties}
      aria-hidden="true"
    >
      <div className={`${styles.glow} ${styles.blue}`} />
      <div className={`${styles.glow} ${styles.lavender}`} />
      <div className={`${styles.glow} ${styles.purple}`} />
      {figmaHeight !== undefined && (
        <>
          <div className={`${styles.glow} ${styles.hazeLeft}`} />
          <div className={`${styles.glow} ${styles.hazeRight}`} />
        </>
      )}
    </div>
  )
}
