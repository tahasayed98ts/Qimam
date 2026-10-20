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

`NEXT_PUBLIC_SITE_URL` sets the absolute base for metadata (defaults to
`http://localhost:3000`).

## Structure

| Path | Purpose |
| --- | --- |
| `src/app/[locale]/` | Root layout (`lang`/`dir`, fonts, header, footer) and pages. `[...rest]` + `not-found.tsx` give unknown and not-yet-built routes a localized 404. |
| `src/proxy.ts` | Redirects locale-less URLs to `/en` or `/ar` (saved choice → `Accept-Language` → English). |
| `src/i18n/` | Locale config, `getDictionary()` (reads the `[locale]` root param) and the `en`/`ar` dictionaries. `ar` is typed against `en`, so missing keys fail type-checking. |
| `src/components/layout/` | Header, language switcher, menu sheet, footer, WhatsApp tab. |
| `src/components/home/` | Home sections. `hero/` holds the light-beam backdrop and the Three.js strands. |
| `src/components/ui/` | shadcn/ui components, customised for the Qimam palette. |
| `src/content/` | Non-localized content data (featured projects, partner logos). |
| `src/assets/home/` | Home images: project images exported from Figma; the showcase and partner logos are cropped from the Home export. |
| `images/` | Supplied brand assets (imported via the `@images/*` alias). |

Design tokens (palette, fonts, type scale, container widths) live in
`src/app/globals.css`.

From 1024px up the site is drawn at 90% of the Figma sizes: `globals.css` sets
the root font size to 90% there. Give sizes in `rem` or Tailwind spacing units
(Figma px ÷ 4, e.g. `mt-[46px]` → `mt-11.5`) so they follow that scale; keep
`px` for hairlines, shadows and blurs only.

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

Home was synced with the live Figma file (node `142:2369`). Placeholder content
that should be replaced or confirmed before launch (each spot is marked `TODO`
in code):

- Social profile URLs and the WhatsApp number (`src/config/site.ts`).
- Project URLs: Figma still shows placeholder links for ArabFly (Bybit) and
  Tawaf (eventmasters.com). ArabFly's chip is hidden until a link is provided;
  Tawaf uses `tawaf.travel` from its own screenshot (`src/content/projects.ts`).
- "Trusted by" company logos, stats figures, and the testimonials (still Lorem
  ipsum in Figma).
- The "Supported Servers" paragraph reads like template text.
- The newsletter form has no provider yet; it validates and shows a notice.
