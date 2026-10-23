import { SectionHeading } from "@/components/section-heading"
import { getDictionary } from "@/i18n/dictionaries"

function StarRating({ label }: { label: string }) {
  return (
    <p role="img" aria-label={label} className="flex gap-1.5 text-[#e29c4c]">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 19"
          aria-hidden="true"
          className="h-4.5 w-4.75 fill-current"
        >
          <path d="M10 0l2.25 6.91h7.26l-5.88 4.27 2.25 6.91L10 13.82l-5.88 4.27 2.25-6.91L.49 6.91h7.26Z" />
        </svg>
      ))}
    </p>
  )
}

export async function TestimonialsSection() {
  const { testimonials } = await getDictionary()

  return (
    <section
      aria-labelledby="testimonials-title"
      className="pb-20 lg:pt-30.25 lg:pb-30"
    >
      <div className="site-container">
        <SectionHeading id="testimonials-title" className="lg:text-2xl">
          {testimonials.title}
        </SectionHeading>

        {/* The 32px side slivers echo the carousel framing in the design. */}
        <div className="mt-8 rounded-lg border border-rule sm:px-8 lg:mt-10">
          <ul className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain border-rule sm:border-x lg:grid lg:grid-cols-3 lg:overflow-visible">
            {testimonials.items.map((item) => (
              <li
                key={item.author}
                className="w-[85%] shrink-0 snap-start border-rule px-6 pt-10 pb-10 not-first:border-s sm:w-[60%] sm:px-8 lg:w-auto lg:pt-12.25 lg:pb-11"
              >
                <figure>
                  <StarRating label={testimonials.rating} />
                  <blockquote className="mt-7.25 text-base/4.75">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-5.75 font-display text-sm leading-[1.42] text-[#c5c5c6]">
                    <span aria-hidden="true">--</span>
                    {item.author}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
