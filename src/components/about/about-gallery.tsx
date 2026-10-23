import Image from "next/image"

import code from "@/assets/about/gallery-code.png"
import phone from "@/assets/about/gallery-phone.png"
import whiteboard from "@/assets/about/gallery-whiteboard.png"
import { getDictionary } from "@/i18n/dictionaries"
import styles from "./about-gallery.module.css"

const sideSizes = "(min-width: 64rem) 376px, 58vw"

/**
 * "Diverse perspectives" title over three decorative photos (darkened as in
 * Figma: 30% start, 40% centre). The side photos slide in from their edges.
 */
export async function AboutGallery() {
  const { about } = await getDictionary()

  return (
    <section
      aria-labelledby="gallery-title"
      className={`${styles.gallery} mt-24 lg:mt-30`}
    >
      <div
        data-aos="fade-right"
        className={`${styles.photo} ${styles.side} ${styles.start}`}
      >
        <Image src={phone} alt="" fill sizes={sideSizes} className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-black/30" />
      </div>
      <div data-aos="fade-up" className={`${styles.photo} ${styles.center}`}>
        <Image
          src={whiteboard}
          alt=""
          fill
          sizes="(min-width: 64rem) 362px, 56vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
      </div>
      <div
        data-aos="fade-left"
        className={`${styles.photo} ${styles.side} ${styles.end}`}
      >
        <Image src={code} alt="" fill sizes={sideSizes} className="object-cover" />
      </div>

      <h2
        id="gallery-title"
        data-aos="fade-up"
        data-aos-delay="200"
        className={`${styles.title} mx-4 max-w-219 text-center font-display text-[1.75rem] leading-[1.42] max-lg:text-balance md:text-[2.5rem] xl:text-display-xl`}
      >
        {about.gallery.title}
      </h2>
    </section>
  )
}
