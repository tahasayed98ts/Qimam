import { Bot, Cpu, LayoutGrid, Waypoints, type LucideIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { CSSProperties } from "react"

import showcase from "@/assets/home/showcase.webp"
import { DoubleChevron } from "@/components/icons"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { localizePath } from "@/i18n/config"
import { getDictionary, getLocale } from "@/i18n/dictionaries"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { NetworkDiagram } from "./network-diagram"
import styles from "./solutions-section.module.css"

type ServiceKey = keyof Dictionary["services"]["items"]

const serviceIcons: { key: ServiceKey; icon: LucideIcon }[] = [
  { key: "web", icon: LayoutGrid },
  { key: "marketing", icon: Cpu },
  { key: "ai", icon: Bot },
  { key: "design", icon: Waypoints },
]

export async function SolutionsSection() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()])
  const { solutions, services } = dict

  return (
    <section
      aria-labelledby="solutions-title"
      className="pt-20 pb-16 lg:pt-26.5 lg:pb-20"
    >
      <div className="site-container">
        <SectionHeading id="solutions-title" className="max-w-[48rem]">
          {solutions.title}
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:mt-22.25 lg:grid-cols-[minmax(0,624fr)_minmax(0,618fr)] lg:gap-5.5">
          <NetworkDiagram className="mx-auto w-full max-w-134.5 reveal" />

          {/* Arrives just after the diagram beside it. */}
          <div className="[--stagger:1]">
            <p className="flex reveal items-center gap-2.5 text-link">
              <Cpu aria-hidden="true" strokeWidth={1.5} className="size-6" />
              {solutions.badge}
            </p>
            <h3 className="mt-3 reveal font-display text-[1.5rem] leading-[1.42] sm:text-[1.75rem] lg:text-[1.875rem]">
              {solutions.heading}
            </h3>
            <p className="mt-2 max-w-[31rem] reveal leading-6 text-ink/65">
              {solutions.body}
            </p>
            <Button
              asChild
              variant="chip"
              size="cta"
              className="mt-4.5 reveal"
            >
              <Link href={localizePath(locale, "/services")}>
                {solutions.cta}
                <DoubleChevron className="size-5 rtl:-scale-x-100" />
              </Link>
            </Button>
          </div>
        </div>

        <Image
          src={showcase}
          alt={solutions.showcaseAlt}
          placeholder="blur"
          sizes="(min-width: 1344px) 1264px, calc(100vw - 48px)"
          className="mt-16 w-full reveal rounded-[0.1875rem] lg:mt-22"
        />

        <ul
          aria-label={services.label}
          className={`${styles.list} mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {serviceIcons.map(({ key, icon: Icon }, index) => (
            <li
              key={key}
              data-featured={index === 0 ? "" : undefined}
              className={`${styles.card} reveal px-8 py-7.5`}
              style={{ "--stagger": index } as CSSProperties}
            >
              <Icon aria-hidden="true" strokeWidth={1.5} className="size-5" />
              <h3 className="mt-5 leading-6">{services.items[key].title}</h3>
              <p className="mt-5 text-sm/5 text-ink/65">
                {services.items[key].body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
