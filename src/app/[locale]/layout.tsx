import type { Metadata, Viewport } from "next"
import { notFound } from "next/navigation"

import { AosInit } from "@/components/aos-init"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { isLocale, localeDirection, locales } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { cn } from "@/lib/utils"
import { kufam, michroma, roboto } from "../fonts"
// AOS first: globals.css overrides some of its rules.
import "aos/dist/aos.css"
import "../globals.css"

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

/**
 * Absolute base for canonical and hreflang links: NEXT_PUBLIC_SITE_URL when
 * set, else the project's production domain on Vercel, else local dev.
 */
function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL
  return vercelDomain ? `https://${vercelDomain}` : "http://localhost:3000"
}

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getDictionary()
  return {
    metadataBase: new URL(siteUrl()),
    title: { default: meta.title, template: `%s | ${meta.title}` },
    description: meta.description,
  }
}

export const viewport: Viewport = {
  themeColor: "#020614",
  colorScheme: "dark",
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = await getDictionary()

  return (
    // data-scroll-behavior: page changes jump to the top instead of
    // smooth-scrolling there (globals.css keeps smooth in-page scrolling).
    <html
      lang={locale}
      dir={localeDirection[locale]}
      data-scroll-behavior="smooth"
      className={cn(michroma.variable, roboto.variable, kufam.variable)}
    >
      {/* Extensions such as Grammarly add attributes to <body> before React
          hydrates. This only ignores <body>'s own attributes; mismatches in
          the page content are still reported. */}
      <body suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only z-50 rounded-lg bg-ink px-4 py-2 text-page focus:not-sr-only focus:fixed focus:inset-s-4 focus:top-4"
        >
          {dict.common.skipToContent}
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppButton label={dict.social.whatsapp} />
        <AosInit />
      </body>
    </html>
  )
}
