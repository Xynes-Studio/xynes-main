# Architecture

The public marketing website is an independent local Next.js App Router app beside Lumia. `src/app/page.tsx` only composes the six homepage sections. Each section owns its presentation in `src/components/sections/home`; the shared CSS module describes the consistent artwork coordinate system without hiding content in an oversized page component.

The layout, page, sections, and artwork wrapper are Server Components. Lumia's published bundles are client-marked; compatible `Brand`, `Flex`, and `Button` are consumed unchanged. `Action` is the app's small explicit client boundary: known destinations use native anchors composed with Lumia `buttonStyles`; pending destinations use Lumia Button and a keyboard-dismissible status message. No provider, state store, data layer, auth or backend is needed.

## Styling and viewport layout

Tailwind v3 and Lumia's exported preset supply existing library utilities. CSS modules own this site's typography, colors, composition, and decorative artwork. Website-specific colors never mutate Lumia tokens. CSS module classes are passed through supported props; no DashboardShell internals are affected.

Each section has `min-height: 100svh`. Desktop content fits one viewport, while narrow layouts can grow to prevent clipping. Vertical offsets and gaps derive from the 1117px reference viewport using `svh`; horizontal placements and sizes use the 1728px artboard via percentages/container units. Headings are bounded by both width and height. Artwork is positioned or anchored within its section and retains its intrinsic ratio. Mobile content reflows in normal document order; spacing and art scale independently. Stable small viewport units avoid address-bar-driven content jumps on mobile.

## Assets and fonts

All production assets live under `public/assets`. Original unused exports are retained under `docs/reference/source-assets` as provenance only. The reference screenshot and MCP context are documentation, never screen-sized implementation images. `Artwork` provides intrinsic dimensions, decorative semantics and lazy loading using Next Image. SVGs remain unchanged; Next Image serves quality-100 responsive WebP derivatives of the original PNGs. Two exact PNG composites preserve shader dithering/background layering without relying on experimental browser APIs. See ASSET_PROVENANCE.md.

Geist fonts come from the official `geist` package using Next/font (directly loading only the Square pixel font avoids preloading unused variants); no runtime font CDN request. The display mapping and UI font tradeoff are described in DESIGN_DECISIONS.md.

## Links and metadata

`src/config/site.ts` is the typed source for destinations and SEO copy. CMS, contact and hosted-service URLs are intentionally pending. Replace their `pending` entry with a real `href` when confirmed; the CTA wrapper automatically becomes a native anchor. There are no fake product URLs. Code/roadmap links use the established GitHub organization.

`SITE_URL` is optional. A valid HTTP(S) origin enables canonical, Open Graph URL and sitemap entries; the app never guesses a production hostname. This is public configuration, not a credential. It is read at build time for static metadata routes. Environment files remain ignored, except the empty example.

## Future animation

No GSAP is installed. Preserve stable section IDs (`home`, `cms`, `modularity`, `adaptability`, `open-source`, `roadmap`) and `[data-section]`/`[data-artwork]` hooks. When motion is actually scoped, add a client adapter per animated section that attaches to an explicit section ref. Lazy-load GSAP/ScrollTrigger inside that adapter, scope selectors and timelines through `gsap.context`, and revert the context on unmount. Use `gsap.matchMedia` or an equivalent reduced-motion branch; leave the initial server output fully visible and usable. Animate wrappers/transforms rather than changing image aspect ratios or content flow. Avoid independent scroll listeners on shared UI and avoid moving layout ownership into motion code.

## Verification and CI

Vitest/RTL exercises composition, native links, pending control keyboard/toggle behavior, origin validation and both SEO route modes. Application coverage requires 90% in every metric and every authored file. Configuration, tests, generated output, dependencies, CSS and original assets are outside executable-code coverage; CSS/assets are covered by browser geometry and screenshot checks instead.

Playwright checks semantics, errors, anchors, keyboard/reduced motion, seven widths, several viewport heights, original artwork ratios/loading and axe. Screenshots provide evidence rather than a self-generated pass/fail baseline. Compare the 1728 × 1117 viewport implementation with the Figma reference, then inspect reflow layouts. CI builds the remote-verified sibling Lumia revision `9f6d12d2c3a1137c892364c6a5127e4bf29e1f79` (the relevant package source and lockfile match the local tested revision) before the app and enforces the same gates. Publication and deployment are deliberately deferred.
