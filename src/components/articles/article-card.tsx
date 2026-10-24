import Image from "next/image"
import Link from "next/link"

import arrowNarrowRight from "@/assets/articles/arrow-narrow-right.svg"
import type { Article } from "@/content/articles"
import { dateLocale, localizePath, type Locale } from "@/i18n/config"

/** Figma trims these text boxes to the cap height and baseline. */
const trim = "[text-box:trim-both_cap_alphabetic]"

/**
 * An article's card: photo, title, date, excerpt and a "Learn More" link to
 * the article. Body text is title-cased as in Figma.
 */
export function ArticleCard({
  article,
  locale,
  learnMore,
  eager = false,
}: {
  article: Article
  locale: Locale
  learnMore: string
  /** Above the fold: load the photo first. */
  eager?: boolean
}) {
  const { title, excerpt } = article.copy[locale]
  const date = new Intl.DateTimeFormat(dateLocale[locale], {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(article.date))

  return (
    // Padding less the border = Figma's inside stroke.
    <article className="flex h-full flex-col gap-8 rounded-lg border border-rule-light p-[calc(1rem-1px)]">
      <Image
        src={article.image}
        alt=""
        placeholder="blur"
        loading={eager ? "eager" : undefined}
        sizes="(min-width: 1210px) 336px, (min-width: 1024px) 28vw, (min-width: 768px) 44vw, 90vw"
        className="aspect-379/240 w-full rounded-lg object-cover"
      />
      <div className="flex flex-col gap-6">
        <h2 className={`font-display text-2xl leading-[normal] capitalize ${trim}`}>
          {title}
        </h2>
        <p className={`text-sm font-medium text-ink-date ${trim}`}>
          <time dateTime={article.date}>{date}</time>
        </p>
      </div>
      {/* The bottom padding stands in for Figma's empty last line. */}
      <p className={`pb-6 leading-6 text-ink-light capitalize ${trim}`}>
        {excerpt}
      </p>
      <Link
        href={localizePath(locale, `/articles/${article.slug}`)}
        aria-label={`${learnMore}: ${title}`}
        className="mt-auto flex h-10 items-center gap-2 self-end rounded-[0.125rem] px-6 font-semibold underline decoration-from-font underline-offset-auto transition-colors [text-decoration-skip-ink:none] [text-underline-position:from-font] hover:text-link"
      >
        {learnMore}
        {/* The Figma icon as a mask, so it takes the link's colour. */}
        <span
          aria-hidden="true"
          className="size-6 shrink-0 bg-current rtl:-scale-x-100"
          style={{
            mask: `url(${arrowNarrowRight.src}) center / contain no-repeat`,
          }}
        />
      </Link>
    </article>
  )
}
