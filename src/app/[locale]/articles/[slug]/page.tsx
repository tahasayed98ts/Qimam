import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"

import { ArticleBody } from "@/components/articles/article-body"
import { ArticleToc } from "@/components/articles/article-toc"
import { PageBackdrop } from "@/components/page-backdrop"
import { PageTitle } from "@/components/page-title"
import { articleSections, articleSlugs, getArticle } from "@/content/articles"
import { localizePath } from "@/i18n/config"
import { getDictionary, getLocale } from "@/i18n/dictionaries"

// Fully static. Other slugs (articles without their text yet) are rendered
// to the localized 404 before responding, so they get a real 404 status.
export const ensureStatic = "navigation"

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/articles/[slug]">): Promise<Metadata> {
  const [{ slug }, locale] = await Promise.all([params, getLocale()])
  const article = getArticle(slug)
  if (!article) notFound()
  const path = `/articles/${article.slug}`
  return {
    title: article.copy[locale].title,
    description: article.copy[locale].excerpt,
    alternates: {
      canonical: localizePath(locale, path),
      languages: {
        en: localizePath("en", path),
        ar: localizePath("ar", path),
        "x-default": localizePath("en", path),
      },
    },
  }
}

/**
 * An article under the "Articles" title: its photo, title and text, with the
 * sections box sticking beside it on desktop.
 */
export default async function ArticlePage({
  params,
}: PageProps<"/[locale]/articles/[slug]">) {
  const [{ slug }, locale, dict] = await Promise.all([
    params,
    getLocale(),
    getDictionary(),
  ])
  const article = getArticle(slug)
  if (!article) notFound()
  const body = article.body[locale]
  const sections = articleSections(body)

  return (
    // isolate: the backdrop sits at z-index -1 within this page only.
    <div className="relative isolate">
      <PageBackdrop />
      <div className="site-container pt-32 pb-20 lg:pt-58 lg:pb-30">
        <PageTitle as="p">{dict.articles.title}</PageTitle>
        <div className="mt-12 grid items-start gap-6 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_25.375rem]">
          <article aria-labelledby="article-title">
            <div data-aos="fade-up" data-aos-offset="0">
              <Image
                src={article.image}
                alt=""
                placeholder="blur"
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1210px) 751px, (min-width: 1024px) 62vw, 92vw"
                className="aspect-835/366 w-full rounded-lg border border-rule-light object-cover"
              />
            </div>
            <h1
              id="article-title"
              data-aos="fade-up"
              className="mt-14 font-display text-2xl leading-[1.42] uppercase lg:text-[2rem]"
            >
              {article.copy[locale].title}
            </h1>
            {/* Fades without moving, so links to its headings land true. */}
            <div data-aos="fade">
              <ArticleBody blocks={body} className="mt-10" />
            </div>
          </article>
          {sections.length > 0 && (
            <aside
              data-aos="fade-left"
              data-aos-offset="0"
              className="hidden lg:sticky lg:top-36 lg:block"
            >
              <ArticleToc sections={sections} label={dict.articles.sections} />
            </aside>
          )}
        </div>
      </div>
    </div>
  )
}
