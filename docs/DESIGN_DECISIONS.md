# Design decisions

## Source and preservation

Figma MCP inspection succeeded after reconnecting the user's requested account. The requested frame is the source of truth; PDF only cross-checks the visual narrative. No mobile frame was found on that page. The homepage's existing six sections and exact copy are retained. The reference contains a linked wordmark and CTA navigation; an invented menu, footer, newsletter, product cards or extra marketing sections would change the design, so none were added.

Lumia source and existing styled component behavior remain unchanged. Generic marketing hero/nav/figure components impose section widths/padding/image borders that do not express this art-directed design. The app composes the compatible Brand, Flex, Button and buttonStyles primitives instead. The brand geometry matches the Figma wordmark. Interactive targets are at least 44px tall, a deliberate accessibility adaptation to Figma's smaller CTA boxes.

## Typography

The Figma heading family/style is `Geist Pixel Regular`. Current official `geist` 1.7.2 exports Square/Grid/Circle/Triangle/Line, with no separate Regular style. No matching local font installation was found. `GeistPixelSquare` retains the pixel treatment and was visually compared with the reference; the unresolved old Regular naming is documented rather than silently replacing display type with Sans. Callouts use the exported Square variant. Body text uses Geist Mono with the original strong emphasis.

Supporting CTA text uses Geist Sans in accordance with the supplied brief, while Figma specifies Inter Medium 14/24. This is a known small typography difference. Preserve 14/24 sizing and native/keyboard behavior. Official font source: https://vercel.com/font and https://github.com/vercel/geist-font.

## Artwork

Vector assets are original unchanged SVG exports. SVG downloads of effected groups do not retain the dither treatment. Instead, exact isolated Figma PNG composites are used for CMS and open-source artwork. Temporary export frames cloned only the original illustration layers, preserved their shader settings, and were removed after asset download; the homepage was not edited. This also preserves the open-source illustration's background paths, which cannot be layered faithfully with a PNG export that already carries an opaque background.

The two PNGs are illustration assets, not screenshots of page content. Headings, text, sections, CTAs and overall layout remain native HTML. Original component-layer SVG exports are retained for future editing. Shader-dependent visitors do not need WebGPU or HTML-in-Canvas. GSAP is deferred as requested.

## Viewport adaptation

The user subsequently required viewport-height sections. Sections now have a viewport minimum, vertical spacing uses viewport height, and key artwork anchors to section edges. At the reference 1728 × 1117 viewport the original proportions are preserved. Mobile sections may exceed one viewport to avoid shrinking or clipping text. Tested portrait/landscape widths and additional viewport-height cases provide evidence. Mobile reflow is an app-owned interpretation because Figma has no supplied responsive frames.

## Pending destinations and publication

The user authorized public source publication on 2026-10-13 at `Xynes-Studio/xynes-main`, with `main`, `develop`, and `qa` branches. The code is Apache-2.0 licensed; Xynes branding, original artwork, and company copy are separately reserved in BRANDING.md. Website deployment remains pending. CMS, hosted-service and contact destinations were not supplied; their buttons give clear pending feedback and accessible names. The original visible labels remain. Code and roadmap links use the known Xynes-Studio GitHub organization until a specific roadmap destination is provided. A confirmed production SITE_URL and accessible third-party artwork credits remain deployment configuration tasks.

## Runtime compatibility

Next 16.4.0 was verified as current stable in the registry. React 18.3.1 matches Lumia's declared peer range and passes the actual Next build; Next warns that its React 18 support is deprecated. Upgrade Lumia's React peer contract in focused compatibility work before adopting React 19/Next 17. Vite 7.3.6 is pinned for Vitest 4.1.11 compatibility; allowing the default Vite 8 native binding caused startup failure on this machine. Jest-dom 6.9.1 is pinned because 6.10.0 is a withdrawn release. Existing package versions/lockfiles are not changed.
