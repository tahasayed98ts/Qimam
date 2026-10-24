import { MoveUpRight } from "lucide-react"
import Link from "next/link"

import { ProjectsTable } from "@/components/projects/projects-table"
import { SectionHeading } from "@/components/section-heading"
import { featuredProjects } from "@/content/projects"
import { localizePath } from "@/i18n/config"
import { getDictionary, getLocale } from "@/i18n/dictionaries"

export async function ProjectsSection() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()])
  const { projects } = dict

  return (
    <section
      aria-labelledby="projects-title"
      className="py-20 lg:py-30"
    >
      <div className="site-container">
        <SectionHeading id="projects-title">{projects.title}</SectionHeading>

        <ProjectsTable projects={featuredProjects} className="mt-10 lg:mt-14">
          <div className="flex justify-end border-t border-rule-light px-6 py-5 sm:px-10 sm:py-5.5">
            {/* Wrapped so the link keeps its colour transition. */}
            <div data-aos="fade-left">
              <Link
                href={localizePath(locale, "/projects")}
                className="inline-flex items-center gap-2.5 text-xl leading-[1.45] font-medium text-link underline decoration-from-font underline-offset-auto transition-colors [text-decoration-skip-ink:none] [text-underline-position:from-font] hover:text-accent-purple"
              >
                {projects.more}
                <MoveUpRight
                  aria-hidden="true"
                  strokeWidth={2}
                  className="size-5.5 rtl:-scale-x-100"
                />
              </Link>
            </div>
          </div>
        </ProjectsTable>
      </div>
    </section>
  )
}
