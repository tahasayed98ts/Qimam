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
      className="relative isolate overflow-clip lg:h-230"
    >
      <HeroBackdrop />

      {/* Phones: copy sits below the light. Tablets: the two blocks frame the
          beam diagonally. Desktop: the Figma two-column composition.
          The copy rises in on load (--stagger orders it) and drifts away as
          it scrolls under the header. */}
      <div className="relative site-container grid grid-cols-1 gap-14 pt-[max(17rem,46svh)] pb-16 md:min-h-220 md:grid-rows-[auto_1fr] md:gap-10 md:pt-44 md:pb-24 lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_20rem] lg:grid-rows-1 lg:gap-0 lg:p-0 xl:grid-cols-[minmax(0,1fr)_24.5rem]">
        <div className="lg:pt-68.25">
          <div className="drift-away">
            <h1
              id="hero-title"
              className="font-display text-[2rem] leading-[1.42] md:text-[2.25rem] lg:text-[2.5rem] xl:text-display-xl"
            >
              <Lines
                lines={hero.titleLines}
                lineClassName="block rise-in"
                stagger={0}
              />
            </h1>
            <div
              aria-hidden="true"
              className="mt-8 h-px w-32.5 draw-in bg-ink [--stagger:3] lg:mt-18"
            />
            <p className="mt-2.5 rise-in text-lg/[1.2] text-ink-soft [--stagger:4]">
              {hero.subtitle}
            </p>
            <Button
              asChild
              variant="chip"
              size="cta"
              className="mt-8 rise-in [--stagger:5] lg:mt-11.5"
            >
              <Link href={localizePath(locale, "/about")}>
                {hero.cta}
                <DoubleChevron className="size-5 rtl:-scale-x-100" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="md:self-end md:justify-self-end lg:self-start lg:justify-self-stretch lg:pt-97">
          <div className="drift-away">
            <p className="font-display text-[1.75rem] leading-[1.42] md:text-[2rem] xl:text-display-lg">
              <span className="block rise-in [--stagger:3]">{tagline}</span>{" "}
              <span className="block rise-in text-accent-blue [--stagger:4]">
                {taglineBlue}
              </span>{" "}
              <span className="block rise-in text-accent-purple [--stagger:5]">
                {taglinePurple}
              </span>
            </p>
            <div className="mt-10 flex rise-in items-center gap-6 [--stagger:6] lg:mt-38">
              <p className="text-xl font-semibold">{hero.reachUs}</p>
              <SocialLinks labels={dict.social} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
