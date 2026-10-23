import styles from "./about-backdrop.module.css"

/** The About page's soft glows; sits behind the page content. */
export function AboutBackdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={`${styles.glow} ${styles.blue}`} />
      <div className={`${styles.glow} ${styles.lavender}`} />
      <div className={`${styles.glow} ${styles.purple}`} />
      <div className={`${styles.glow} ${styles.hazeLeft}`} />
      <div className={`${styles.glow} ${styles.hazeRight}`} />
    </div>
  )
}
