import { PageTitle } from "@/components/page-title"
import { SectionHeading } from "@/components/section-heading"
import { getDictionary } from "@/i18n/dictionaries"

/**
 * Opening of the About page: the page title, "Who are we?" beside "Our
 * Mission", and the four focus areas. Body copy is title-cased as in Figma.
 */
export async function AboutIntro() {
  const { about } = await getDictionary()

  return (
    <section
      aria-labelledby="about-title"
      className="site-container pt-32 lg:pt-58"
    >
      <PageTitle id="about-title">{about.title}</PageTitle>

      {/* Each column slides in from its own side. */}
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-6 lg:mt-22">
        {[about.who, about.mission].map((block, index) => (
          <div
            key={block.title}
            data-aos={index === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index === 0 ? undefined : "100"}
          >
            <SectionHeading className="lg:text-[2rem]" data-aos={undefined}>
              {block.title}
            </SectionHeading>
            <p className="mt-6 max-w-129 leading-6 capitalize lg:mt-10">
              {block.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 lg:mt-22">
        <SectionHeading className="lg:text-[2rem]">
          {about.focus.title}
        </SectionHeading>
        <ol className="mt-10 grid grid-cols-1 gap-6 overflow-clip rounded-lg sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {about.focus.items.map((item, index) => (
            <li
              key={index}
              data-aos="fade-up"
              data-aos-delay={String(index * 100)}
              className="flex flex-col gap-10 border-s-3 border-violet px-10 py-4"
            >
              <p
                aria-hidden="true"
                className="font-display text-[2.5rem] text-ink/25 [text-box:trim-both_cap_alphabetic]"
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl/6 font-semibold">{item.title}</h3>
                {/* Figma's "auto" line height for Roboto. */}
                <p className="leading-[1.172] text-ink-faint capitalize">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
