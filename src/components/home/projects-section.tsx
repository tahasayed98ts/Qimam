import { MoveUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { SectionHeading } from "@/components/section-heading"
import { featuredProjects } from "@/content/projects"
import { localizePath } from "@/i18n/config"
import { getDictionary, getLocale } from "@/i18n/dictionaries"
import { cn } from "@/lib/utils"

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

        <div className="mt-10 overflow-hidden rounded-lg border border-rule-light lg:mt-14">
          {/* Each project spans two subgrid rows (category, body) so the
              category rules line up across both columns. */}
          <ul className="grid grid-cols-1 md:grid-cols-2">
            {featuredProjects.map((project, index) => {
              const copy = projects.items[project.id]
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
                    {copy.category}
                  </p>
                  <article className="px-6 pt-6 pb-12 sm:px-10 sm:pt-7.5 sm:pb-20">
                    {/* The exported images carry their own rounded corners. */}
                    <Image
                      src={project.image}
                      alt=""
                      placeholder="blur"
                      sizes="(min-width: 1344px) 551px, (min-width: 768px) 45vw, 92vw"
                      className="aspect-551/346 w-full object-cover"
                    />
                    <div className="mt-6 flex items-center justify-between gap-4">
                      {/* Reserve the URL chip's height so descriptions stay
                          aligned across columns when a URL is missing. */}
                      <div className="min-h-19.25 min-w-0">
                        <h3 className="text-lg leading-[1.5] font-medium tracking-[-0.006em] text-[#e6e6e6]">
                          {project.name}
                        </h3>
                        {project.url && (
                          <p
                            dir="ltr"
                            className="mt-2.5 inline-block max-w-full truncate rounded-[0.375rem] bg-[#272727] px-3 py-2 align-top leading-6 tracking-[-0.006em] text-ink-dim"
                          >
                            {project.url}
                          </p>
                        )}
                      </div>
                      <Link
                        href={localizePath(locale, `/projects/${project.id}`)}
                        aria-label={`${projects.viewProject} ${project.name}`}
                        className="grid size-11.5 shrink-0 place-items-center rounded-[0.375rem] bg-[#272727] text-link transition-colors hover:bg-[#333]"
                      >
                        <MoveUpRight
                          aria-hidden="true"
                          strokeWidth={2}
                          className="size-5.5 rtl:-scale-x-100"
                        />
                      </Link>
                    </div>
                    <p className="mt-6 leading-6 text-ink-dim">
                      {copy.description}
                    </p>
                  </article>
                </li>
              )
            })}
          </ul>
          <div className="flex justify-end border-t border-rule-light px-6 py-5 sm:px-10 sm:py-5.5">
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
      </div>
    </section>
  )
}
