"use client"

import { CheckIcon, ChevronDownIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  localeCookie,
  localeDirection,
  locales,
  switchLocalePath,
  type Locale,
} from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries/en"

function rememberLocale(locale: Locale) {
  document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`
}

export function LanguageSwitcher({
  locale,
  labels,
}: {
  locale: Locale
  labels: Dictionary["language"]
}) {
  const pathname = usePathname()

  return (
    <DropdownMenu modal={false} dir={localeDirection[locale]}>
      <DropdownMenuTrigger className="group flex h-11 items-center gap-1 rounded-md px-2 font-display text-base text-ink transition-colors hover:text-ink-soft">
        <span>{labels.short[locale]}</span>
        <span className="sr-only"> — {labels.label}</span>
        <ChevronDownIcon
          aria-hidden="true"
          strokeWidth={1.5}
          className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={12}
        className="w-auto min-w-40 rounded-lg border border-white/15 bg-page/90 p-1 backdrop-blur-xl"
      >
        {locales.map((option) => (
          <DropdownMenuItem
            key={option}
            asChild
            className="cursor-pointer justify-between gap-6 rounded-[0.1875rem] px-3 py-2 text-base"
          >
            <Link
              href={switchLocalePath(pathname, option)}
              hrefLang={option}
              lang={option}
              scroll={false}
              aria-current={option === locale ? "true" : undefined}
              onClick={() => rememberLocale(option)}
              className={option === "ar" ? "font-arabic" : "font-latin"}
            >
              {labels.names[option]}
              {option === locale && (
                <CheckIcon aria-hidden="true" className="size-4 text-link" />
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
