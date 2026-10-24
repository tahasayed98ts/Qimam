export const locales = ["en", "ar"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

/** Cookie that remembers the visitor's explicit language choice. */
export const localeCookie = "NEXT_LOCALE"

export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
}

/**
 * Intl locales for dates: day, month, year in English; Gregorian months with
 * Western digits in Arabic, as elsewhere on the site.
 */
export const dateLocale: Record<Locale, string> = {
  en: "en-GB",
  ar: "ar-u-ca-gregory-nu-latn",
}

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale)
}

/** Prefix an app path ("/", "/projects") with a locale segment. */
export function localizePath(locale: Locale, path = "/") {
  return path === "/" ? `/${locale}` : `/${locale}${path}`
}

/**
 * Swap the locale segment of the current pathname, keeping the rest of the
 * route so the language switcher lands on the equivalent page.
 */
export function switchLocalePath(pathname: string, target: Locale) {
  const segments = pathname.split("/")
  if (isLocale(segments[1])) {
    segments[1] = target
    return segments.join("/") || `/${target}`
  }
  return localizePath(target, pathname)
}
