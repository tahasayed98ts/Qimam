import type { Metadata } from "next"

import { ContactForm } from "@/components/contact/contact-form"
import { PageBackdrop } from "@/components/page-backdrop"
import { PageTitle } from "@/components/page-title"
import { localizePath } from "@/i18n/config"
import { getDictionary, getLocale } from "@/i18n/dictionaries"

export async function generateMetadata(): Promise<Metadata> {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()])
  return {
    title: dict.contact.meta.title,
    description: dict.contact.meta.description,
    alternates: {
      canonical: localizePath(locale, "/contact"),
      languages: {
        en: localizePath("en", "/contact"),
        ar: localizePath("ar", "/contact"),
        "x-default": localizePath("en", "/contact"),
      },
    },
  }
}

export default async function ContactPage() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()])

  return (
    // isolate: the backdrop sits at z-index -1 within this page only.
    <div className="relative isolate">
      <PageBackdrop />
      <section
        aria-labelledby="contact-title"
        className="site-container pt-32 pb-20 lg:pt-58 lg:pb-30"
      >
        <PageTitle id="contact-title">{dict.contact.title}</PageTitle>
        <ContactForm locale={locale} labels={dict.contact} />
      </section>
    </div>
  )
}
