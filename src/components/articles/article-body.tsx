import type { ArticleBlock } from "@/content/articles"
import { cn } from "@/lib/utils"

/**
 * An article's text: 16px lines on a 30px grid, as in Figma, where a blank
 * line sets off each heading and each new paragraph. Headings stop below the
 * fixed header when the sections box jumps to them.
 */
export function ArticleBody({
  blocks,
  className,
}: {
  blocks: readonly ArticleBlock[]
  className?: string
}) {
  return (
    <div
      className={cn(
        "leading-7.5 [text-box:trim-both_cap_alphabetic] [&>*+h2]:mt-7.5 [&>*+h3]:mt-7.5 [&>p+p]:mt-7.5 [&>ul+p]:mt-7.5",
        className
      )}
    >
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={block.id}
                id={block.id}
                className="scroll-mt-26 text-lg font-semibold lg:scroll-mt-36"
              >
                {block.text}
              </h2>
            )
          case "h3":
            return (
              <h3
                key={block.id}
                id={block.id}
                className="scroll-mt-26 font-semibold lg:scroll-mt-36"
              >
                {block.text}
              </h3>
            )
          case "ul":
            return (
              <ul key={index} className="list-inside [list-style-type:'-_']">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )
          default:
            return <p key={index}>{block.text}</p>
        }
      })}
    </div>
  )
}
