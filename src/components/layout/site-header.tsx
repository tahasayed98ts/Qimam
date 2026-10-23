import Image from "next/image"
import Link from "next/link"

import navLogo from "@images/Qimam-logo-nav.png"
import { SocialLinks } from "@/components/social-links"
import { navigation } from "@/config/site"
import { localizePath } from "@/i18n/config"
import { getDictionary, getLocale } from "@/i18n/dictionaries"
import { LanguageSwitcher } from "./language-switcher"
import { SiteMenu } from "./site-menu"

/** Floating glass header from the Figma frame (88px tall, 32px from top). */
export async function SiteHeader() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()])
  const menuItems = navigation.map(({ key, href }) => ({
    href: localizePath(locale, href),
    label: dict.nav[key],
  }))

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 pt-4 lg:pt-8">
      <div
        data-aos="fade-down"
        data-aos-offset="0"
        className="header-glass pointer-events-auto site-container flex h-16 items-center justify-between rounded-lg border border-hairline ps-4 pe-2 sm:h-18 sm:ps-5 sm:pe-4 lg:h-22 lg:ps-6 lg:pe-9"
      >
        <Link href={localizePath(locale)} className="rounded-sm">
          <Image
            src={navLogo}
            alt={dict.header.homeLabel}
            loading="eager"
            sizes="167px"
            className="h-8 w-auto lg:h-10"
          />
        </Link>
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-7">
          <LanguageSwitcher locale={locale} labels={dict.language} />
          <SiteMenu
            locale={locale}
            items={menuItems}
            labels={dict.header}
            footer={<SocialLinks labels={dict.social} />}
          />
        </div>
      </div>
    </header>
  )
}
