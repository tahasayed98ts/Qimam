import type { Metadata } from "next"

import { ArticleCard } from "@/components/articles/article-card"
import { PageBackdrop } from "@/components/page-backdrop"
import { PageTitle } from "@/components/page-title"
import { articles } from "@/content/articles"
import { localizePath } from "@/i18n/config"
import { getDictionary, getLocale } from "@/i18n/dictionaries"

export async function generateMetadata(): Promise<Metadata> {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()])
  return {
    title: dict.articles.meta.title,
    description: dict.articles.meta.description,
    alternates: {
      canonical: localizePath(locale, "/articles"),
      languages: {
        en: localizePath("en", "/articles"),
        ar: localizePath("ar", "/articles"),
        "x-default": localizePath("en", "/articles"),
      },
    },
  }
}

export default async function ArticlesPage() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()])

  return (
    // isolate: the backdrop sits at z-index -1 within this page only.
    <div className="relative isolate">
      <PageBackdrop />
      <section
        aria-labelledby="articles-title"
        className="site-container pt-32 pb-20 lg:pt-58 lg:pb-30"
      >
        <PageTitle id="articles-title">{dict.articles.title}</PageTitle>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {articles.map((article, index) => (
            <li
              key={article.slug}
              data-aos="fade-up"
              data-aos-delay={String((index % 3) * 100)}
            >
              <ArticleCard
                article={article}
                locale={locale}
                learnMore={dict.common.learnMore}
                eager={index < 3}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
