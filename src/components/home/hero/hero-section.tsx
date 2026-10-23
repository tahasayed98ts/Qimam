import Link from "next/link"

import { DoubleChevron } from "@/components/icons"
import { Lines } from "@/components/lines"
import { SocialLinks } from "@/components/social-links"
import { Button } from "@/components/ui/button"
import { localizePath } from "@/i18n/config"
import { getDictionary, getLocale } from "@/i18n/dictionaries"
import { HeroBackdrop } from "./hero-backdrop"

export async function HeroSection() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()])
  const { hero } = dict
  const [tagline, taglineBlue, taglinePurple] = hero.taglineLines

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden lg:h-230"
    >
      <HeroBackdrop />

      {/* Phones: copy sits below the light. Tablets: the two blocks frame the
          beam diagonally. Desktop: the Figma two-column composition. */}
      <div className="relative site-container grid grid-cols-1 gap-14 pt-[max(17rem,46svh)] pb-16 md:min-h-220 md:grid-rows-[auto_1fr] md:gap-10 md:pt-44 md:pb-24 lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_20rem] lg:grid-rows-1 lg:gap-0 lg:p-0 xl:grid-cols-[minmax(0,1fr)_24.5rem]">
        {/* The copy enters on load: this column from the reading start, the
            other from the end (offset 0 so short screens animate it too). */}
        <div className="lg:pt-68.25">
          <h1
            id="hero-title"
            data-aos="fade-right"
            data-aos-offset="0"
            className="font-display text-[2rem] leading-[1.42] md:text-[2.25rem] lg:text-[2.5rem] xl:text-display-xl"
          >
            <Lines lines={hero.titleLines} />
          </h1>
          <div
            aria-hidden="true"
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-delay="150"
            className="mt-8 h-px w-32.5 bg-ink lg:mt-18"
          />
          <p
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-delay="200"
            className="mt-2.5 text-lg/[1.2] text-ink-soft"
          >
            {hero.subtitle}
          </p>
          <div
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-delay="300"
            className="mt-8 lg:mt-11.5"
          >
            <Button asChild variant="chip" size="cta">
              <Link href={localizePath(locale, "/about")}>
                {hero.cta}
                <DoubleChevron className="size-5 rtl:-scale-x-100" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="md:self-end md:justify-self-end lg:self-start lg:justify-self-stretch lg:pt-97">
          <p
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-delay="200"
            className="font-display text-[1.75rem] leading-[1.42] md:text-[2rem] xl:text-display-lg"
          >
            <span className="block">{tagline}</span>{" "}
            <span className="block text-accent-blue">{taglineBlue}</span>{" "}
            <span className="block text-accent-purple">{taglinePurple}</span>
          </p>
          <div
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-delay="350"
            className="mt-10 flex items-center gap-6 lg:mt-38"
          >
            <p className="text-xl font-semibold">{hero.reachUs}</p>
            <SocialLinks labels={dict.social} />
          </div>
        </div>
      </div>
    </section>
  )
}
