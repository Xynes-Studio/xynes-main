# Implementation stories

HM-00 through HM-09 are complete for the authorized local scope. Public source publication was authorized on 2026-10-13; website deployment remains pending. All priorities below are P0 except HM-08 (P1). Execute in order; status is updated with measured evidence in `QUALITY_REPORT.md`.

## HM-00 — Discover source design and local ecosystem

- Objective/scope: inspect the entire homepage, PDF and Lumia; preserve existing work.
- Approach: MCP design context + read-only hierarchy; record fonts, dimensions, colors, assets and source IDs.
- Dependencies: Figma connection with access (resolved).
- Acceptance: six sections mapped; compatible Lumia primitives identified; no implementation inferred solely from PDF.
- Tests: inspect returned screenshot, metadata and original assets.
- Done: discovery and challenges recorded in the plan.

## HM-01 — Plan and define architecture

- Objective/scope: create independently usable implementation/continuation instructions.
- Approach: feature-oriented server section composition, typed link config, isolated interactive controls and asset provenance.
- Dependencies: HM-00.
- Acceptance: plan, stories and execution prompt exist before application authoring.
- Tests: review for concrete acceptance gates and publication constraint.
- Done: documents complete and sequence actionable.

## HM-02 — Establish Next.js and Lumia foundation

- Objective/scope: app scaffold, fonts, styling and scripts.
- Approach: current compatible Next, strict TS, pinned pnpm, sibling Lumia links; preserve library source/dist when already built.
- Dependencies: HM-01; registry access.
- Acceptance: App Router starts/builds, required fonts resolve locally; no root dependency install.
- Tests: typecheck, lint, production build.
- Done: reproducible setup and tooling documented.

## HM-03 — Shared header and actions

- Objective/scope: linked wordmark, skip link, CTA style composition and safe destinations.
- Approach: Lumia Brand/Flex/buttonStyles; native links; isolated pending-action feedback; centralized typed config.
- Dependencies: HM-02; exact Figma assets.
- Acceptance: keyboard usable; Explore targets CMS; code links resolve to known organization; unconfigured destinations explicitly pending.
- Tests: RTL link/pending behavior; Playwright keyboard, anchors and axe.
- Done: no invented links, nested interactive elements or unnecessary navigation.

## HM-04 — Hero and CMS

- Objective/scope: original headline/body, ghost illustration, logo and free callout.
- Approach: section components, design-specific CSS, original SVG/effected exports.
- Dependencies: HM-03; original artwork and Geist Pixel mapping.
- Acceptance: typography, placement, section ratios and original illustration match reference; semantic text remains selectable.
- Tests: section rendering, asset geometry, screenshot comparison and responsive checks.
- Done: no substituted artwork; documented export limitations.

## HM-05 — Modularity and adaptability

- Objective/scope: original copy, green module artwork, blue change section and grid.
- Approach: separate components, vector exports, decorative layers clipped by local section.
- Dependencies: HM-04.
- Acceptance: original bold emphasis, hierarchy, graphic positions and blue transition retained.
- Tests: composition; screenshots at reference width and smaller widths; overflow checks.
- Done: original vectors verified and text does not collide with art.

## HM-06 — Open source and roadmap

- Objective/scope: lavender illustration, ownership copy, hosted callout, roadmap and gradient finish.
- Approach: original exported layers, semantic headings/body, typed CTAs, no invented product cards.
- Dependencies: HM-05.
- Acceptance: full six-section story reproduced; shaders preserved in exact static exports if required; roadmap endpoints honest.
- Tests: rendering, pending actions, art geometry, visual comparison.
- Done: all six desktop sections complete.

## HM-07 — Responsive and accessibility verification

- Objective/scope: 320, 375, 768, 1024, 1440 and large desktop; keyboard/reduced motion/axe.
- Approach: responsive normal-flow text and art, focus states, decorative alt handling and touch targets.
- Dependencies: HM-06.
- Acceptance: no accidental horizontal scroll/text clipping/overlap; no serious/critical known axe violations; heading order correct.
- Tests: Playwright viewport matrix and keyboard walkthrough, screenshots and reduced-motion mode.
- Done: observed failures repaired and results recorded; avoid claiming full compliance from automation alone.

## HM-08 — SEO, performance and future motion

- Objective/scope: metadata, configurable canonical/sitemap/robots, Lighthouse and GSAP integration strategy.
- Approach: server composition, local fonts, stable art dimensions, isolated motion adapters (no GSAP install).
- Dependencies: HM-07.
- Acceptance: no invented production origin; minimized client dependencies; recorded performance score/limits.
- Tests: metadata/config behavior, build, Lighthouse >=90 target in stated environment.
- Done: architecture and performance decisions recorded.

## HM-09 — Final quality gates and handoff

- Objective/scope: reliable tests, CI, README, evidence and local preview.
- Approach: Vitest/RTL + meaningful behavior tests; Playwright/axe; exact gate scripts in CI.
- Dependencies: HM-08.
- Acceptance: strict type/lint/format, tests, 90% coverage all metrics, E2E, build pass; actual visual/quality report exists.
- Tests: run configured gates, inspect per-file coverage and screenshots.
- Done: local result reviewable; incomplete gates explicitly listed; source publication is tracked separately below.

## HM-10 — Public source repository

- Scope: publish `Xynes-Studio/xynes-main` as public source with `main`, `develop`, and `qa`; deployment remains pending.
- License: Apache-2.0 application code; separately reserved Xynes branding, original artwork, and company copy; preserve third-party notices.
- Validation: verified required Git identity and GitHub account, reviewed publication files, formatting checks, remote branch/default/visibility verification, and live GitHub Actions results.
