import type { Metadata } from "next"

import { PageBackdrop } from "@/components/page-backdrop"
import { PageTitle } from "@/components/page-title"
import { ProjectsTable } from "@/components/projects/projects-table"
import { projects } from "@/content/projects"
import { localizePath } from "@/i18n/config"
import { getDictionary, getLocale } from "@/i18n/dictionaries"

export async function generateMetadata(): Promise<Metadata> {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()])
  return {
    title: dict.projects.meta.title,
    description: dict.projects.meta.description,
    alternates: {
      canonical: localizePath(locale, "/projects"),
      languages: {
        en: localizePath("en", "/projects"),
        ar: localizePath("ar", "/projects"),
        "x-default": localizePath("en", "/projects"),
      },
    },
  }
}

export default async function ProjectsPage() {
  const dict = await getDictionary()

  return (
    // isolate: the backdrop sits at z-index -1 within this page only.
    <div className="relative isolate">
      <PageBackdrop />
      <section
        aria-labelledby="projects-title"
        className="site-container pt-32 pb-20 lg:pt-58 lg:pb-30"
      >
        <PageTitle id="projects-title">{dict.projects.title}</PageTitle>
        <ProjectsTable
          projects={projects}
          headingLevel={2}
          aboveFold
          className="mt-12 lg:mt-16"
        />
      </section>
    </div>
  )
}
