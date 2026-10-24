import { MoveUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

import { hasCaseStudy } from "@/content/case-studies"
import type { Project } from "@/content/projects"
import { localizePath } from "@/i18n/config"
import { getDictionary, getLocale } from "@/i18n/dictionaries"
import { cn } from "@/lib/utils"

const arrowButton =
  "grid size-11.5 shrink-0 place-items-center rounded-[0.375rem] bg-[#272727] text-link transition-colors hover:bg-[#333]"

const arrow = (
  <MoveUpRight
    aria-hidden="true"
    strokeWidth={2}
    className="size-5.5 rtl:-scale-x-100"
  />
)

/**
 * The bordered projects table shared by Home and the Projects page: each
 * project is a category bar over its image, name, URL and description, two
 * to a row from md. `children` close the frame (Home's "More Projects" row).
 */
export async function ProjectsTable({
  projects,
  headingLevel = 3,
  aboveFold = false,
  className,
  children,
}: {
  projects: Project[]
  /** Level of the project names in the page outline. */
  headingLevel?: 2 | 3
  /** The table starts in the first viewport: load the first row eagerly. */
  aboveFold?: boolean
  className?: string
  children?: ReactNode
}) {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()])
  const copy = dict.projects
  const Heading = headingLevel === 2 ? "h2" : "h3"

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-rule-light",
        className
      )}
    >
      {/* Each project spans two subgrid rows (category, body) so the
          category rules line up across both columns. */}
      <ul className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => {
          const { category, description } = copy.items[project.id]
          return (
            <li
              key={project.id}
              className={cn(
                "row-span-2 grid grid-rows-subgrid border-rule-light",
                index > 0 && "border-t md:border-t-0",
                index % 2 === 1 && "md:border-s",
                index > 1 && "md:border-t"
              )}
            >
              <p className="border-b border-rule-light px-6 py-4 text-lg font-medium text-ink-dim sm:px-10 sm:py-5 sm:text-xl/7.5">
                {category}
              </p>
              {/* The content slides in from its own side (the left column
                  from the reading start); the table's rules stay put. */}
              <article
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className="px-6 pt-6 pb-12 sm:px-10 sm:pt-7.5 sm:pb-20"
              >
                {/* The exported images carry their own rounded corners. */}
                <Image
                  src={project.image}
                  alt=""
                  placeholder="blur"
                  loading={aboveFold && index < 2 ? "eager" : undefined}
                  sizes="(min-width: 1344px) 551px, (min-width: 768px) 45vw, 92vw"
                  className="aspect-551/346 w-full object-cover"
                />
                <div className="mt-6 flex items-center justify-between gap-4">
                  {/* Reserve the URL chip's height so descriptions stay
                      aligned across columns when a URL is missing. */}
                  <div className="min-h-19.25 min-w-0">
                    <Heading className="text-lg leading-[1.5] font-medium tracking-[-0.006em] text-[#e6e6e6]">
                      {project.name}
                    </Heading>
                    {project.url && (
                      <p
                        dir="ltr"
                        className="mt-2.5 inline-block max-w-full truncate rounded-[0.375rem] bg-[#272727] px-3 py-2 align-top leading-6 tracking-[-0.006em] text-ink-dim"
                      >
                        {project.url}
                      </p>
                    )}
                  </div>
                  {/* The project's page once it has one; until then its
                      live site. */}
                  {hasCaseStudy(project.id) ? (
                    <Link
                      href={localizePath(locale, `/projects/${project.id}`)}
                      aria-label={`${copy.viewProject} ${project.name}`}
                      className={arrowButton}
                    >
                      {arrow}
                    </Link>
                  ) : (
                    project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${copy.visitSite} ${project.name} ${copy.newTab}`}
                        className={arrowButton}
                      >
                        {arrow}
                      </a>
                    )
                  )}
                </div>
                <p className="mt-6 leading-6 text-ink-dim">{description}</p>
              </article>
            </li>
          )
        })}
      </ul>
      {children}
    </div>
  )
}
