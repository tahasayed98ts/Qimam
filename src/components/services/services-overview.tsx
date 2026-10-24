import { PageTitle } from "@/components/page-title"
import { getDictionary } from "@/i18n/dictionaries"

/** Services page title and the six service cards (two columns from md). */
export async function ServicesOverview() {
  const { servicesPage } = await getDictionary()

  return (
    <section
      aria-labelledby="services-title"
      className="site-container pt-32 lg:pt-58"
    >
      <PageTitle id="services-title">{servicesPage.title}</PageTitle>

      {/* Left-column cards enter from the reading start, the others from
          the end. Padding less the border = Figma's inside stroke. */}
      <ul className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-30">
        {servicesPage.items.map((service, index) => (
          <li
            key={service.title}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className="flex flex-col gap-5 rounded-lg border border-rule-light bg-panel p-[calc(2rem-1px)]"
          >
            <p
              aria-hidden="true"
              className="font-display text-xl leading-[1.42] text-numbering"
            >
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="text-2xl/7.5 font-semibold">{service.title}</h2>
            <ul className="list-disc ps-6 leading-6 text-ink-faint">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
