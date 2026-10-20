# CLAUDE.md --- Qimam Project Instructions

## 1. Project Overview

Build **Qimam**, a premium corporate showcase website for clients. It
should feel polished, modern, distinctive, and visually compelling, with
restrained 3D motion and strong typography.

The project root on the developer's machine is:

`C:\Users\Taha\Web\Qimam`

Start with the **Home** page and use the supplied Figma designs as the
source of truth. Do not invent a different visual direction when the
Figma design or provided image assets already specify the intended
design.

### Figma references

-   Full design file:
    https://www.figma.com/design/U9zLA1bC5M3qZurHv4WLIm/Qimam?node-id=6-2&p=f&t=xaa2bmFK6CgsuKPs-0
-   Home page starting point:
    https://www.figma.com/design/U9zLA1bC5M3qZurHv4WLIm/Qimam?node-id=142-2369&t=YtU7gpHq9qQfX0CN-4

Provided visual assets (logos and a Home page design image) are in:

`C:\Users\Taha\Web\Qimam\images`

Inspect and reuse these assets before creating replacements. Do not
assume asset filenames; inspect the directory.

## 2. Required Technology

-   **Framework:** Next.js (use the existing project's version and
    conventions where already initialized).
-   **Language:** TypeScript preferred, unless the existing project is
    deliberately configured otherwise.
-   **3D:** Three.js. For React integration, prefer React Three Fiber
    and Drei when useful.
-   **Styling:** Tailwind CSS.
-   **UI components:** shadcn/ui. Add only components that are actually
    needed and customize their source to match the design.
-   **Fonts:** Michroma for English and Kufam for Arabic.
-   **Icons:** Prefer the project's existing icon library; if none
    exists, use Lucide React for interface icons.

Before installing packages or changing configuration, inspect the
current repository and preserve existing working setup. Do not replace
dependencies or restructure the project unnecessarily.

## 3. Pages and Information Architecture

Implement these pages as the project develops:

-   Home
-   About
-   Services
-   Projects
    -   Project details
-   Articles
    -   Article details
-   Contact Us

Create shared layouts and reusable components for repeated patterns such
as the header, language switcher, navigation, footer, buttons, section
headings, cards, and social links. Use clear, semantic routes and keep
project/article detail pages ready for dynamic content.

## 4. Internationalization: Arabic and English

The site must support **Arabic and English only**.

-   Use a consistent locale-based routing strategy, such as `/en` and
    `/ar`, unless the existing project already has a suitable i18n
    setup.
-   English pages must use `lang="en"` and left-to-right layout
    (`dir="ltr"`).
-   Arabic pages must use `lang="ar"` and right-to-left layout
    (`dir="rtl"`).
-   Ensure RTL applies to layout, navigation, spacing, alignment, icons
    where directional, forms, and responsive behavior---not just text
    alignment.
-   Use **Michroma** for English and **Kufam** for Arabic. Load fonts
    efficiently using the project's supported font-loading approach;
    avoid unnecessary external requests.
-   The language switcher should take the visitor to the equivalent page
    in the selected language when that page exists, rather than always
    sending them to Home.
-   Do not mix Arabic and English copy accidentally. Keep both language
    versions natural and consistent.
-   Do not add a third language.

## 5. Visual Design Tokens

Treat the following Figma values as the canonical palette. Define
reusable CSS variables or Tailwind theme tokens rather than scattering
raw values throughout components.

### Core colors

-   Base background: `#020614`
-   Primary text: `#FFFFFF`
-   Secondary/smaller text: `#7F7F7F`
-   Hyperlinks: `#6891EA`
-   Accent blue: `#5C7FCD`
-   Accent purple: `#B37BF5`
-   Additional accent: `#6891EA`
-   Section numbering (`01`, `02`, `03`, etc.): `#2B61BF`
-   Input field background: `#5E64B233`
-   Input text: `#BBBABA`
-   CTA button: `#3B2F81`
-   Footer background: `#000004`
-   Social icon background: `#1A1A1A`

### Gradients

Logo gradient background:

``` css
linear-gradient(
  94.21deg,
  #0D3489 17.48%,
  #3161B7 33.91%,
  #0E63E8 41.15%,
  #0F52DE 51.54%,
  #2235B3 60.27%,
  #403294 70.72%,
  #6E31B6 88.56%
)
```

Section radial gradient:

``` css
radial-gradient(30.44% 50% at 50% 50%, #42299F 0%, #22236C 100%)
```

Social icon border specification:

``` css
background: #1A1A1A;
border: 1px solid;
border-image-source: linear-gradient(90deg, #FFFFFF 19.83%, #6C6C6C 80.8%);
```

If `border-image-source` does not render correctly with the chosen
border radius, implement the visual effect with a wrapper or
pseudo-element while keeping the intended appearance.

## 6. Home Page Visual Direction

-   Reproduce the supplied Home design closely before adding creative
    enhancements.
-   Use the base `#020614` background with subtle grid lines where
    shown.
-   Preserve the prominent central purple/blue glow and abstract 3D form
    shown in the reference.
-   Keep typography, content hierarchy, alignment, spacing, border
    treatments, and responsive proportions faithful to Figma.
-   Header should include the supplied Qimam logo, language selector,
    and menu control as shown in the design.
-   Keep CTA, social links, and WhatsApp/contact affordance visually
    consistent with the reference.
-   Use the exact logo assets from `images` if available; do not redraw
    or approximate the brand mark unnecessarily.
-   Do not replace the design's central 3D visual with a generic stock
    illustration.
-   The page must remain legible and usable on mobile, tablet, and
    desktop. Adapt layout intentionally rather than merely shrinking
    desktop content.
-   Avoid excessive animation, unnecessary gradients, generic
    landing-page patterns, and visual clutter.

## 7. Three.js and Motion

Use Three.js to create a compelling 3D visual only where it improves the
Figma design.

-   First inspect the supplied assets and Figma reference to determine
    whether the central visual is a 3D model, shader, image, or CSS
    effect.
-   If a suitable 3D asset is provided, reuse it.
-   If implementing the central visual in Three.js, keep it isolated in
    a dedicated component (for example, `HeroScene`) and lazy-load it on
    the client to avoid server-side rendering issues.
-   Do not access `window`, `document`, WebGL, or other browser-only
    APIs during server rendering.
-   Provide a graceful fallback for browsers/devices without WebGL
    support and while the scene is loading.
-   Respect `prefers-reduced-motion`; keep motion subtle and
    nonessential to understanding the content.
-   Limit device pixel ratio and geometry complexity when needed. Clean
    up animation frames, event listeners, geometries, materials,
    textures, and renderers on unmount.
-   Avoid creating a large 3D bundle for a small decorative effect.
    Prefer CSS when it achieves the same fidelity and performance.
-   Test the scene on mobile and lower-powered devices when possible.

## 8. shadcn/ui and Component Quality

-   Use shadcn/ui as a set of editable components, not as a fixed visual
    theme.
-   Customize components to match Qimam's palette, typography, spacing,
    and focus states.
-   Do not add a component just because it exists; keep the
    implementation focused.
-   Ensure buttons, menus, dialogs, language controls, and forms are
    keyboard accessible.
-   Provide visible focus states and accessible names for icon-only
    controls.
-   Use semantic HTML and appropriate ARIA attributes only when needed.
-   Avoid duplicating a component when a shared reusable component
    already exists.

## 9. Architecture and Code Quality

-   Inspect the repository structure before coding and follow existing
    conventions.
-   Prefer small, focused, reusable components and clear separation
    between page content, UI, data, and 3D rendering.
-   Keep design tokens centralized.
-   Avoid giant page components, unnecessary abstractions, duplicated
    markup, and premature overengineering.
-   Use server components by default in Next.js; add client components
    only for interactivity, state, browser APIs, or Three.js.
-   Keep secrets and private credentials out of source control and
    client-side code.
-   Do not add backend services or a database unless explicitly
    requested; this is initially a frontend corporate showcase website.
-   Use real supplied brand assets and project content where available.
    Do not invent client testimonials, metrics, certifications, or
    company claims.
-   Preserve the user's existing work. Before destructive changes,
    explain the impact and ask for confirmation.

## 10. Accessibility, Responsiveness, and Performance

-   Use responsive layouts at mobile, tablet, laptop, and wide desktop
    sizes.
-   Maintain sufficient contrast and readable text sizes.
-   Ensure navigation and forms work with keyboard input.
-   Add useful alternative text to meaningful images; use empty alt text
    for purely decorative imagery.
-   Optimize image dimensions and formats using Next.js image features
    where appropriate.
-   Avoid layout shifts and provide stable dimensions for images and 3D
    containers.
-   Avoid unnecessary client-side JavaScript and third-party
    dependencies.
-   Check console output and resolve avoidable warnings and errors.
-   Use reduced-motion preferences for nonessential animation.

## 11. Workflow Rules for Claude

For every task:

1.  Read these instructions and inspect the relevant source files before
    making changes.
2.  For design work, inspect the supplied `images` directory and compare
    against the relevant Figma frame.
3.  State a short implementation plan when the task is substantial; for
    small changes, proceed directly.
4.  Make the smallest coherent set of changes that fulfills the request.
5.  Reuse existing dependencies and components where appropriate.
6.  Run the available lint, type-check, and build commands when
    practical. If a command cannot be run, state that clearly rather
    than claiming it passed.
7.  Summarize what changed and list any checks performed.
8.  Ask questions only when an essential requirement cannot reasonably
    be inferred; otherwise make sensible, reversible choices.

## 12. Definition of Done

A page or feature is complete when:

-   It follows the relevant Figma design and the Qimam visual tokens.
-   Arabic and English layouts work correctly, including RTL/LTR
    behavior.
-   It is responsive and accessible.
-   Interactions work, including navigation and language switching.
-   Three.js effects (if used) have loading/fallback behavior and are
    performance-conscious.
-   No avoidable TypeScript, lint, or console errors remain.
-   Any tests or checks run are reported accurately.

## 13. Start Here

Begin with the Home page at Figma node `142-2369`.

1.  Inspect the repository and the `images` directory.
2.  Review the Home frame and identify its major layout regions,
    typography, colors, and central visual.
3.  Build the responsive header and Home hero first.
4.  Match the visual reference before moving on to the remaining pages.
5.  Keep the architecture ready for the About, Services, Projects,
    Articles, and Contact Us pages without implementing unrelated
    features prematurely.
