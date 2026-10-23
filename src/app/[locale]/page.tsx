import type { Metadata } from "next"

import { HeroSection } from "@/components/home/hero/hero-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { SolutionsSection } from "@/components/home/solutions-section"
import { StatsSection } from "@/components/home/stats-section"
import { TrustedBy } from "@/components/home/trusted-by"
import { TestimonialsSection } from "@/components/testimonials-section"
import { localizePath } from "@/i18n/config"
import { getLocale } from "@/i18n/dictionaries"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  return {
    alternates: {
      canonical: localizePath(locale),
      languages: {
        en: localizePath("en"),
        ar: localizePath("ar"),
        "x-default": localizePath("en"),
      },
    },
  }
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <SolutionsSection />
      <StatsSection />
      <ProjectsSection />
      <TestimonialsSection />
    </>
  )
}
