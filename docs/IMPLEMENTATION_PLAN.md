# Xynes homepage implementation plan

Prepared 2026-10-12. Scope: local implementation only. Repository publication is explicitly pending user authorization.

## Discovery

The workspace is a collection of independent repositories. The new app belongs at `xynes-front-end/xynes-main`, beside Lumia. No existing application or Lumia source will be modified. Lumia currently has unrelated generated docs changes; preserve them.

Primary source: Figma `mRyqlSSWwlYL0qOunWXdto`, node `2024:6397`, inspected through MCP. Secondary source: the supplied one-page PDF. The Figma account connection was corrected and access verified. The frame is 1728 × 6702, containing six 1728 × 1117 section instances. No responsive frames are present on the inspected page.

Design colors: charcoal `#252525`, warm white `#f9f9f2`, blue `#0009ff`, lavender `#a9acff`. Display: Geist Pixel Regular, 128px with 1.0 line height. Body: Geist Mono Regular/Bold, 20px or 24px with 1.4–1.5 line height. Small CTAs are Inter Medium 14/24; the brief prefers Geist Sans for supporting UI, so document any substitution. Callouts use Geist Pixel Square 24px.

Lumia inspection: `@lumia-ui/components` provides `Brand`, `Flex`, `Button`, and exported `buttonStyles`; marketing provides nav, hero, figure, footer, feature grid, FAQ, and disclosure. Existing marketing components impose widths, spacing, and image borders incompatible with this reference. Compose the compatible Brand/Flex/button primitives and build section-specific presentation without changing the library. Lumia bundles have client boundaries; keep app page/section composition server-side and interactive controls isolated.

## Approach and tradeoffs

Use Next.js App Router, strict TypeScript, Lumia's existing Tailwind styling system, CSS modules for the bespoke section artwork/layout, and locally packaged Geist fonts. Registry checks identify Next 16.4.0 as current stable. Choose React 18.3.1 to respect Lumia's declared peer range; verify actual App Router build compatibility before retaining it. Do not upgrade Lumia dependencies.

Alternatives considered: changing Lumia's generic marketing primitives risks existing consumers; an independent HTML implementation fails the requested stack and component reuse; composing existing primitives with app-owned sections preserves the library while expressing the design. The third option is selected.

Export original artwork as SVG wherever supported. Static group exports preserve vector composition and intrinsic aspect ratios. Shader effects may be omitted by SVG exports: compare against Figma; use exact static Figma raster exports for effected groups when needed, with provenance documented. Do not redraw the artwork, inject generic illustrations, or ship unsupported experimental shader requirements to visitors. Preserve all layer slots, blend modes, and intentional clipping. Assets must be local, non-empty, and dimension-checked; temporary Figma URLs must not ship.

Desktop layout uses normal document flow with six independent sections; scale section geometry against the 1728px artboard through container-relative CSS. Position decorative art inside each section. At tablet/mobile, reflow headings/copy and put illustrations below content; preserve narrative order, avoid text shrinkage below readable sizes, and provide appropriate touch targets. No fabricated desktop navigation or footer content: the reference has a linked wordmark and in-page CTAs.

## Execution

1. Record Figma hierarchy/specifications and download original SVGs, rendered comparison references, and required fonts. Verify shader export behavior and resolve Pixel Regular mapping.
2. Create only the new repo, on an implementation branch. Pin pnpm to the frontend convention. Add required scripts and local sibling `link:` dependencies. Build libraries only if their existing dist is missing; never rewrite library source.
3. Build shared section/container, CTA, header, art wrappers, and typed destination configuration. Explore links to CMS section; code links use the established Xynes-Studio organization. Unknown CMS, contact, and hosted destinations remain pending in configuration and have honest accessible UI feedback, never fabricated URLs.
4. Implement each of the six sections from MCP's precise measurements, text, layers, and assets. The page only composes them. Keep explanatory callout text semantic when possible.
5. Adapt 320/375/768/1024/1440/1728/1920 widths. Verify heading wrapping, artwork geometry, scrolling, focus visibility, reduced motion, and link semantics.
6. Add metadata; production origin is optional/configurable. Emit sitemap/canonical only for a configured valid origin. Add meaningful Vitest/RTL tests for composition and CTA behavior, Playwright checks for links, keyboard use, viewport constraints, browser errors and axe.
7. Run strict typecheck, lint, Prettier, unit/integration coverage (90% all metrics), build, E2E and Lighthouse. Visually compare full-page and section screenshots with Figma at 1728px and responsive screenshots. Fix observed issues; record actual results.
8. Finish architecture, design decisions, asset provenance, README and CI. Provide local preview and explicit outstanding items. No remote creation, publication, push or deployment.

## Quality and completion

Authored testable application code must meet 90% statements/branches/functions/lines, with per-file evidence. Exclude generated Next output and configuration, not UI behavior. Automated checks supplement keyboard and screenshot verification; they cannot certify complete WCAG compliance. Lighthouse target is >=90 under a recorded environment. Report any unavailable check honestly. No backend, auth, databases, GSAP installation or service integration in this phase.
