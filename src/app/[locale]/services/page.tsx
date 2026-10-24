import type { Metadata } from "next"

import { PageBackdrop } from "@/components/page-backdrop"
import { IndustriesSection } from "@/components/services/industries-section"
import { ProcessTimeline } from "@/components/services/process-timeline"
import { ServicesOverview } from "@/components/services/services-overview"
import { localizePath } from "@/i18n/config"
import { getDictionary, getLocale } from "@/i18n/dictionaries"

export async function generateMetadata(): Promise<Metadata> {
  const [locale, { servicesPage }] = await Promise.all([
    getLocale(),
    getDictionary(),
  ])
  return {
    title: servicesPage.meta.title,
    description: servicesPage.meta.description,
    alternates: {
      canonical: localizePath(locale, "/services"),
      languages: {
        en: localizePath("en", "/services"),
        ar: localizePath("ar", "/services"),
        "x-default": localizePath("en", "/services"),
      },
    },
  }
}

export default function ServicesPage() {
  return (
    // isolate: the backdrop sits at z-index -1 within this page only.
    <div className="relative isolate">
      <PageBackdrop figmaHeight={3399} />
      <ServicesOverview />
      <ProcessTimeline />
      <IndustriesSection />
    </div>
  )
}
