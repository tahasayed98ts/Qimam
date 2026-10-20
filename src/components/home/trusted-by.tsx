import Image from "next/image"

import { partners } from "@/content/partners"
import { getDictionary } from "@/i18n/dictionaries"
import { rem } from "@/lib/utils"

export async function TrustedBy() {
  const { trusted } = await getDictionary()

  return (
    <section aria-labelledby="trusted-title" className="pt-10 lg:pt-10.5">
      <div className="site-container flex flex-col items-center gap-6">
        <h2 id="trusted-title" className="text-[1.0625rem]/5 text-ink/60">
          {trusted.title}
        </h2>
        <ul className="flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 lg:max-w-none lg:gap-x-9 xl:gap-x-16.75">
          {partners.map(({ name, logo }) => (
            <li key={name}>
              <Image
                src={logo}
                alt={name}
                width={logo.width / 2}
                height={logo.height / 2}
                style={{ width: rem(logo.width / 2) }}
                className="h-auto opacity-60"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
