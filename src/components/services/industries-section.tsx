import Image, { type StaticImageData } from "next/image"
import type { CSSProperties } from "react"

import automotive from "@/assets/services/industries/automotive.svg"
import b2b from "@/assets/services/industries/b2b.svg"
import eCommerce from "@/assets/services/industries/e-commerce.svg"
import education from "@/assets/services/industries/education.svg"
import glow from "@/assets/services/industries/glow.png"
import growingBusinesses from "@/assets/services/industries/growing-businesses.svg"
import healthcare from "@/assets/services/industries/healthcare.svg"
import hospitality from "@/assets/services/industries/hospitality.svg"
import professionalServices from "@/assets/services/industries/professional-services.svg"
import realEstate from "@/assets/services/industries/real-estate.svg"
import retail from "@/assets/services/industries/retail.svg"
import startups from "@/assets/services/industries/startups.svg"
import technology from "@/assets/services/industries/technology.svg"
import { SectionHeading } from "@/components/section-heading"
import { getDictionary } from "@/i18n/dictionaries"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { rem } from "@/lib/utils"

type IndustryId = keyof Dictionary["servicesPage"]["industries"]["items"]

/**
 * Industries in Figma order, each with its icon and the soft glow behind it:
 * the Figma blob (169px, blurred 75px) centred at x/y in the cell, rotated,
 * at the given opacity.
 */
const industries: {
  id: IndustryId
  icon: StaticImageData
  glow: { x: number; y: number; rotate: number; opacity: number }
}[] = [
  { id: "realEstate", icon: realEstate, glow: { x: 238.1, y: 124.1, rotate: 131.07, opacity: 0.25 } },
  { id: "education", icon: education, glow: { x: 149.1, y: 12.1, rotate: 19.82, opacity: 0.25 } },
  { id: "eCommerce", icon: eCommerce, glow: { x: 149.1, y: 148.1, rotate: 19.82, opacity: 0.25 } },
  { id: "retail", icon: retail, glow: { x: 56.1, y: 140.1, rotate: 117.91, opacity: 0.35 } },
  { id: "automotive", icon: automotive, glow: { x: 174.1, y: -11.9, rotate: 131.07, opacity: 0.25 } },
  { id: "professionalServices", icon: professionalServices, glow: { x: 238.1, y: 92.1, rotate: 107.49, opacity: 0.25 } },
  { id: "healthcare", icon: healthcare, glow: { x: 142.1, y: 140.1, rotate: 107.49, opacity: 0.25 } },
  { id: "hospitality", icon: hospitality, glow: { x: 142.1, y: 4.1, rotate: 167.7, opacity: 0.25 } },
  { id: "technology", icon: technology, glow: { x: 70.1, y: 116.1, rotate: 167.7, opacity: 0.25 } },
  { id: "b2b", icon: b2b, glow: { x: 150.1, y: 172.1, rotate: 167.7, opacity: 0.25 } },
  { id: "startups", icon: startups, glow: { x: 254.1, y: 116.1, rotate: 167.7, opacity: 0.25 } },
  { id: "growingBusinesses", icon: growingBusinesses, glow: { x: 174.1, y: 100.1, rotate: 167.7, opacity: 0.25 } },
]

/** Half the blob's 168.871px side, to place it by its centre. */
const glowHalf = 84.44

/**
 * "Industries": a bordered grid (2, 3 or 4 columns). Dividers are inset
 * shadows (Figma's inside strokes: no space taken), and the grid overhangs
 * its frame by 1px so the last column's and last row's are clipped at any
 * column count. Cell content rises in; the lines stay put.
 */
export async function IndustriesSection() {
  const { servicesPage } = await getDictionary()
  const { industries: copy } = servicesPage

  return (
    <section
      aria-labelledby="industries-title"
      className="site-container mt-24 pb-20 lg:mt-30 lg:pb-30"
    >
      <SectionHeading
        id="industries-title"
        className="uppercase lg:text-[2rem]"
      >
        {copy.title}
      </SectionHeading>

      <div className="mt-12 overflow-clip rounded-lg border border-[#979797]">
        <ul className="-me-px -mb-px grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ id, icon, glow: g }, index) => (
            <li
              key={id}
              className="relative overflow-clip p-6 shadow-[inset_-1px_-1px_0_#4d4d4d] sm:p-10 rtl:shadow-[inset_1px_-1px_0_#4d4d4d]"
            >
              <Image
                src={glow}
                alt=""
                className="pointer-events-none absolute size-[10.554rem] max-w-none blur-[4.6875rem]"
                style={
                  {
                    insetInlineStart: rem(g.x - glowHalf),
                    top: rem(g.y - glowHalf),
                    rotate: `${g.rotate}deg`,
                    opacity: g.opacity,
                  } as CSSProperties
                }
              />
              <div
                data-aos="fade-up"
                data-aos-delay={String((index % 4) * 100)}
                className="relative flex flex-col gap-6"
              >
                <Image
                  src={icon}
                  alt=""
                  unoptimized
                  className="size-10"
                />
                <p className="text-xl/6 text-[#b8b8b8]">{copy.items[id]}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
