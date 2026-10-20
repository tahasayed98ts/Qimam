import waves from "@/assets/home/hero-section/Waves.png"
import { HeroHelix } from "./hero-helix"
import styles from "./hero-backdrop.module.css"

/** Decorative grid, light beam and rotating Waves artwork behind the hero. */
export function HeroBackdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.grid} />
      <div className={styles.light}>
        <div className={styles.halo} />
        <div className={styles.beam} />
        <HeroHelix
          className={styles.helix}
          image={waves}
          sizes="(min-width: 48rem) 476px, 340px"
        />
      </div>
    </div>
  )
}
