import type { Metadata } from "next"

import { AboutGallery } from "@/components/about/about-gallery"
import { AboutIntro } from "@/components/about/about-intro"
import { GoalsSection } from "@/components/about/goals-section"
import { PageBackdrop } from "@/components/page-backdrop"
import { TestimonialsSection } from "@/components/testimonials-section"
import { localizePath } from "@/i18n/config"
import { getDictionary, getLocale } from "@/i18n/dictionaries"

export async function generateMetadata(): Promise<Metadata> {
  const [locale, { about }] = await Promise.all([getLocale(), getDictionary()])
  return {
    title: about.meta.title,
    description: about.meta.description,
    alternates: {
      canonical: localizePath(locale, "/about"),
      languages: {
        en: localizePath("en", "/about"),
        ar: localizePath("ar", "/about"),
        "x-default": localizePath("en", "/about"),
      },
    },
  }
}

export default function AboutPage() {
  return (
    // isolate: the backdrop sits at z-index -1 within this page only.
    <div className="relative isolate">
      <PageBackdrop figmaHeight={3552} />
      <AboutIntro />
      <AboutGallery />
      <GoalsSection />
      <TestimonialsSection headingClassName="lg:text-[2rem]" />
    </div>
  )
}
