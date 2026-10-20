import Link from "next/link"

import { DoubleChevron } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { localizePath } from "@/i18n/config"
import { getDictionary, getLocale } from "@/i18n/dictionaries"

export default async function NotFound() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()])

  return (
    <section className="site-container flex min-h-[70svh] flex-col items-start justify-center pt-40 pb-24">
      <p className="font-display text-sm text-numbering">404</p>
      <h1 className="mt-4 font-display text-[2rem] leading-[1.42] lg:text-display-lg">
        {dict.notFound.title}
      </h1>
      <p className="mt-4 text-lg text-ink-soft">{dict.notFound.body}</p>
      <Button asChild variant="chip" size="cta" className="mt-10">
        <Link href={localizePath(locale)}>
          {dict.notFound.back}
          <DoubleChevron className="size-5 rtl:-scale-x-100" />
        </Link>
      </Button>
    </section>
  )
}
