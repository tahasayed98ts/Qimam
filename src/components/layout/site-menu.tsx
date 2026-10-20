"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { MenuGlyph } from "@/components/icons"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { localeDirection, type Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { cn } from "@/lib/utils"

export type MenuItem = { href: string; label: string }

export function SiteMenu({
  locale,
  items,
  labels,
  footer,
}: {
  locale: Locale
  items: MenuItem[]
  labels: Dictionary["header"]
  footer?: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const side = localeDirection[locale] === "rtl" ? "left" : "right"

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label={labels.openMenu}
        className="grid size-11 place-items-center rounded-md text-ink transition-colors hover:text-ink-soft"
      >
        <MenuGlyph className="h-4 w-9 rtl:-scale-x-100" />
      </SheetTrigger>
      <SheetContent
        side={side}
        aria-describedby={undefined}
        closeLabel={labels.closeMenu}
        className="w-full gap-0 border-white/10 bg-page/95 px-6 pt-24 pb-10 backdrop-blur-xl sm:max-w-md sm:px-10"
      >
        <SheetTitle className="sr-only">{labels.menuTitle}</SheetTitle>
        <nav aria-label={labels.navLabel}>
          <ol className="flex flex-col">
            {items.map((item, index) => {
              const current = pathname === item.href
              return (
                <li key={item.href} className="border-b border-white/10">
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "group flex items-baseline gap-5 py-5 font-display text-2xl transition-colors hover:text-accent-purple",
                      current && "text-accent-blue"
                    )}
                  >
                    <span className="font-display text-sm text-numbering">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ol>
        </nav>
        {footer && <div className="mt-auto pt-10">{footer}</div>}
      </SheetContent>
    </Sheet>
  )
}
