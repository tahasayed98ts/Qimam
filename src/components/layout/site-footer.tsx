import { cacheLife } from "next/cache"
import Image from "next/image"
import Link from "next/link"

import navLogo from "@images/Qimam-logo-nav.png"
import { footerNavigation } from "@/config/site"
import { localizePath } from "@/i18n/config"
import { getDictionary, getLocale } from "@/i18n/dictionaries"
import { SubscribeForm } from "./subscribe-form"

async function getCopyrightYear() {
  "use cache"
  cacheLife("days")
  return new Date().getFullYear()
}

export async function SiteFooter() {
  const [locale, dict, year] = await Promise.all([
    getLocale(),
    getDictionary(),
    getCopyrightYear(),
  ])
  const { footer } = dict

  return (
    <footer className="border-t border-[#2d374d] bg-footer">
      <div className="footer-container pt-16 pb-9.5 lg:pt-30">
        {/* Logo from the reading start, links from below, the subscribe
            column from the end. */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[349fr_545fr_418fr] lg:gap-0">
          <Link
            href={localizePath(locale)}
            data-aos="fade-right"
            className="self-start justify-self-start rounded-sm sm:col-span-2 lg:col-span-1"
          >
            <Image
              src={navLogo}
              alt={dict.header.homeLabel}
              sizes="221px"
              className="h-11 w-auto lg:h-13.25"
            />
          </Link>

          <nav
            aria-labelledby="footer-links-title"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 id="footer-links-title" className="leading-6 font-semibold">
              {footer.quickLinks}
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4 text-[#d4d4d4] sm:grid-cols-[repeat(3,max-content)] lg:mt-7 lg:grid-cols-[7.625rem_5.4375rem_7.625rem_auto] lg:gap-x-0 lg:gap-y-6.75">
              {footerNavigation.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={localizePath(locale, href)}
                    className="leading-6 transition-colors hover:text-ink"
                  >
                    {dict.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div data-aos="fade-left" data-aos-delay="200">
            <h2 className="leading-6 font-semibold">{footer.subscribeTitle}</h2>
            <p className="mt-4.5 leading-6 text-[#d4d4d4]">
              {footer.subscribeText}
            </p>
            <SubscribeForm labels={footer} />
          </div>
        </div>

        <p className="mt-10 border-t border-[#29292a] pt-5.5 text-sm/5 text-ink-muted">
          {footer.rights} {year}
        </p>
      </div>
    </footer>
  )
}
