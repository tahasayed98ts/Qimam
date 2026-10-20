import { NextResponse, type NextRequest } from "next/server"

import {
  defaultLocale,
  isLocale,
  localeCookie,
  locales,
  type Locale,
} from "@/i18n/config"

/** Saved choice first, then the browser's Accept-Language, then English. */
function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(localeCookie)?.value
  if (isLocale(saved)) return saved

  const accepted = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((entry) => {
      const [tag, ...params] = entry.trim().split(";")
      const q = params.find((param) => param.trim().startsWith("q="))
      return {
        language: tag.toLowerCase().split("-")[0],
        quality: q ? Number.parseFloat(q.trim().slice(2)) || 0 : 1,
      }
    })
    .filter(({ language, quality }) => language && quality > 0)
    .sort((a, b) => b.quality - a.quality)

  const match = accepted.find(({ language }) =>
    locales.includes(language as Locale)
  )
  return (match?.language as Locale | undefined) ?? defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (isLocale(pathname.split("/")[1])) return

  const url = request.nextUrl.clone()
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Skip Next.js internals and any request for a file (it has an extension).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
