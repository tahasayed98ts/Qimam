import { locale as localeParam } from "next/root-params"
import { notFound } from "next/navigation"

import { isLocale, type Locale } from "./config"
import type { Dictionary } from "./dictionaries/en"

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((module) => module.default),
  ar: () => import("./dictionaries/ar").then((module) => module.default),
}

/** Current locale from the `[locale]` root segment (Server Components only). */
export async function getLocale(): Promise<Locale> {
  const locale = await localeParam()
  if (!isLocale(locale)) notFound()
  return locale
}

export async function getDictionary(): Promise<Dictionary> {
  return dictionaries[await getLocale()]()
}

export type { Dictionary }
