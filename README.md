# Qimam

Corporate showcase site for Qimam, in Arabic and English. Built with Next.js 16
(App Router, Cache Components), Tailwind CSS 4, shadcn/ui (Radix) and Three.js.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 → redirects to /en or /ar
npm run lint
npm run build    # also type-checks
```

`NEXT_PUBLIC_SITE_URL` sets the absolute base for canonical and hreflang links.
It's optional: on Vercel it defaults to the project's production domain
(including a custom domain once one is added), locally to
`http://localhost:3000`.

### Contact form email

"Book Now" on the Contact page emails qimamsmart@gmail.com
(`contactEmail` in `src/config/site.ts`) through [Resend](https://resend.com),
from a server action; replying to the email answers the visitor. The footer's
Subscribe form sends each new subscriber's address to the same inbox the same
way, as there's no newsletter service yet. Both go through `src/lib/email.ts`.

1. Sign in to Resend with the **qimamsmart@gmail.com** account and create an
   API key with sending access.
2. In the Vercel project, add it as the environment variable
   `RESEND_API_KEY` (Production and Preview), then redeploy. For local
   testing, put it in `.env.local` (git-ignored).

Without the key, the Contact form shows a "couldn't be sent" notice with the
address to email instead, and the Subscribe form asks to try again. Resend's
shared sender (`onboarding@resend.dev`) only delivers to its account's own
address, which is why the account must be the qimamsmart one. Once a domain
is verified in Resend, set `CONTACT_FROM_EMAIL` (e.g.
`Qimam <website@your-domain.com>`) to send from it.

## Structure

| Path | Purpose |
| --- | --- |
| `src/app/[locale]/` | Root layout (`lang`/`dir`, fonts, header, footer) and pages. `[...rest]` + `not-found.tsx` give unknown and not-yet-built routes a localized 404. |
| `src/proxy.ts` | Redirects locale-less URLs to `/en` or `/ar` (saved choice → `Accept-Language` → English). |
| `src/i18n/` | Locale config, `getDictionary()` (reads the `[locale]` root param) and the `en`/`ar` dictionaries. `ar` is typed against `en`, so missing keys fail type-checking. |
| `src/components/layout/` | Header, language switcher, menu sheet, footer and its Subscribe form (server action in `app/[locale]/actions.ts`), WhatsApp tab. Social links and the WhatsApp number live in `src/config/site.ts`. |
| `src/components/home/` | Home sections. `hero/` holds the light-beam backdrop and the Three.js strands. |
| `src/components/about/` | About sections (`/about`): intro, photo gallery, goals grid. Testimonials are shared with Home (`components/testimonials-section.tsx`). |
| `src/components/services/` | Services sections (`/services`): title and service cards, the "Our Process" timeline (alternating around a spine on desktop, single-sided below), and the industries grid. |
| `src/components/projects/` | The projects table shared by Home and `/projects`: a category bar over each project's image, name, URL and description, two to a row from 768px. An app shows its store badges in place of the URL (`store-badges.tsx`). Each arrow opens the project's details page, or its live site until it has one. |
| `src/components/case-study/` | Project details pages (`/projects/[id]`): intro and key facts, screenshots in tinted frames (`showcase.tsx`: Figma's crops, scaled with the frame), overview, context and challenge, approach, and the "A closer look" strip (`gallery-carousel.tsx`, the only client component). |
| `src/components/articles/` | Articles: the card of `/articles` (photo, title, date, excerpt, and a "Learn More" link once the article has its text), and the article page (`/articles/[slug]`): `article-body.tsx` sets an article's text blocks, `article-toc.tsx` is the sticky sections box that follows the reader (desktop only). |
| `src/components/contact/` | The Contact form (`/contact`): fields with per-field errors in both languages, refilled after an error. It posts to the server action in `app/[locale]/contact/actions.ts`, which emails it through Resend; the fields' rules live in `src/lib/contact.ts`. |
| `src/components/page-backdrop.tsx` | Glow background of the inner pages (CSS gradients fitted to the Figma blurs); About and Services also get its two lower hazes. `page-title.tsx` is their shared centred title. |
| `src/components/ui/` | shadcn/ui components, customised for the Qimam palette. |
| `src/content/` | Content data: projects and partner logos (copy for these lives in the dictionaries), and `case-studies/`, one module per project with a details page, holding its screenshots, their Figma framing and its English and Arabic copy. `/projects` lists every project; Home features the first four. `articles.ts` lists the articles: slug, date, photo, English and Arabic title and excerpt, and, for articles with a page, their text as headings, paragraphs and lists. |
| `src/assets/home/` | Home images: project images exported from Figma (also used on `/projects`); the showcase and partner logos are cropped from the Home export. |
| `src/assets/projects/` | Project details screenshots exported from Figma, one folder per project. |
| `src/assets/stores/` | The App Store and Google Play badges exported from Figma (the App Store badge comes in its four layers). |
| `src/assets/articles/` | Article photos exported from Figma, saved as JPEGs 1200px wide (2000px for one that also heads its article page), and the cards' arrow icon. |
| `src/assets/about/` | About images exported from Figma: the three gallery photos and the six goal schematics (SVG). |
| `src/assets/services/` | Services assets exported from Figma: timeline connectors, industry icons and the industry glow. (The timeline icons are Lucide, as in the design.) |
| `images/` | Supplied brand assets (imported via the `@images/*` alias). |

Design tokens (palette, fonts, type scale, container widths) live in
`src/app/globals.css`.

From 1024px up the site is drawn at 90% of the Figma sizes: `globals.css` sets
the root font size to 90% there. Give sizes in `rem` or Tailwind spacing units
(Figma px ÷ 4, e.g. `mt-[46px]` → `mt-11.5`) so they follow that scale; keep
`px` for hairlines, shadows and blurs only.

Scroll animations use [AOS](https://github.com/michalsnik/aos), started once
in the root layout (`components/aos-init.tsx`). Add `data-aos="fade-up"` (or
`fade-down`, `fade-right`, `fade-left`, `fade`) and `data-aos-delay="100"`
etc. to stagger a row; section headings rise in by default. `fade-right`
enters from the reading start, so it mirrors in Arabic. AOS replaces
`transition-property` on animated elements, so put `data-aos` on a wrapper,
not on an element with its own hover transition. Reduced-motion visitors and
browsers without JavaScript see static content (`globals.css`).

## Internationalization

- Routes are `/en/...` and `/ar/...`; Arabic renders `dir="rtl"` and uses Kufam,
  English uses Michroma (display) and Roboto (body copy, as in Figma).
- Use logical utilities (`ps-*`, `me-*`, `inset-s-*`, `border-s`, `text-start`)
  so layouts mirror automatically; flip directional icons with `rtl:-scale-x-100`.
- The language switcher swaps only the locale segment, so visitors stay on the
  equivalent page.

## Hero visual

The beam, glow and grid are CSS (server-rendered, no JS). The strands are the
Figma Waves artwork (`src/assets/home/hero-section/Waves.png`), shown as a
static image first. Once the browser is idle, a lazily loaded Three.js shader
takes over, using that already-downloaded image as its texture, and rotates
the artwork around its own axis: each strand's pixels
are carried along a double helix fitted to the image and shaded brighter in
front, dimmer behind; the crossings drift down as it turns. At rest the shader
output equals the image exactly. The scene is skipped for
`prefers-reduced-motion` and devices without WebGL2, pauses off screen, caps
the pixel ratio, and disposes its GPU resources on unmount. If `Waves.png` is
replaced with differently placed strands, refit the helix constants in
`hero/helix-scene.ts`.

## Content still to confirm

Home was synced with the live Figma file (node `142:2369`; its projects table
again on 25 Oct 2026: ArabFly's store badges, Special in place of Tawaf),
About with node `142:2711`, Services with `142:2944`, Projects with
`142:3268`, the ArabFly
details page with `322:343`, Articles with `142:3625`, the article page with
`142:3725`, Contact with `142:3790`. Small copy fixes against Figma: About's
title reads "That Fit Your Needs" (as on Home), the gallery title gets the
missing space after its comma, and the sixth goal's label is "06" like the
others (Figma: "Step 06"); on Services, "Automitive" → "Automotive",
"Professional Sevice" → "Professional Services", and a stray "•" is dropped
from "Dashboards & Admin Panels"; on ArabFly, the title is spelled "ArabFly"
as elsewhere on the site (Figma: "Arab Fly"), "Our Approach" is chapter 03
(Figma repeats 02), and "booking flights, hotels" reads "booking flights and
hotels". The third gallery shot drops the template's "casa oliva" mock-up left
behind it in Figma and is framed like the second. On Articles, "learn More"
reads "Learn More", dates are set in Roboto (Figma uses Poppins, which the
site doesn't load), and the cards fit the 1264px content column (Figma's grid
runs 17px wider). On the article page, the text's leftover Markdown ("####
Common Types of AI:", "**Machine Learning AI**") is set as headings, and the
sections box lists those headings instead of Figma's "First Section /
sub-section" placeholders. On Contact, each field has its own placeholder
(Figma repeats "Enter your first name").
Placeholder content that should be replaced or confirmed before launch (each
spot is marked `TODO` in code):

- The Projects frame still holds template projects (ByBit, Fitgo,
  EventMasters, ProTech Solutions with Lorem ipsum, repeated over four rows),
  so `/projects` lists the real projects from `src/content/projects.ts`: the
  same four as Home until more are added (each needs an image, an entry there
  and its category and description in both dictionaries).
- ArabFly's Google Play link: Figma shows a Google Play badge beside the App
  Store one, and it appears once the link is added in `src/content/projects.ts`.
- Only ArabFly has a details page so far; Tallah, Special and Amr Ali link to
  their live sites until theirs are designed (add a module to
  `src/content/case-studies/`). ArabFly's gallery captions were template text
  in Figma ("Introduction and featured work"…) and now describe the screens;
  its gallery screenshots are small (496×226), so sharper exports would help.
- The answers to "How did you hear about us?" on the Contact form (Figma
  doesn't list them): search engine, social media, friend or colleague, other.
- The six articles are Figma's samples (titles, dates, excerpts, stock
  photos); one is dated 28 Nov 2026, in the future. Only "Artificial
  Intelligence" has its text (from the article frame), so only its card has a
  "Learn More" link; a card gets one once its article has a `body` in
  `src/content/articles.ts`.

- "Trusted by" company logos, stats figures, and the testimonials (still Lorem
  ipsum in Figma).
- The "Supported Servers" paragraph reads like template text.
- Subscribers arrive as emails in the contact inbox; sending newsletters to
  them would need a newsletter service.
