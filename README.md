# Xynes main website

Figma-based public homepage for the Xynes ecosystem: six responsive sections, original artwork, Geist typography, Lumia primitives, strict TypeScript and accessibility checks. This is a marketing website, separate from the ERP applications. Source repository: [Xynes-Studio/xynes-main](https://github.com/Xynes-Studio/xynes-main). Website deployment remains pending.

## License and branding

The application code is open source under [Apache License 2.0](LICENSE). Xynes names, logos, original artwork, and company-specific marketing copy are separately reserved under [BRANDING.md](BRANDING.md). Source forks and local testing are permitted; replace Xynes branding before publishing your own derivative site. Third-party fonts and icons keep their own licenses; see [NOTICE](NOTICE) and [third-party notices](THIRD_PARTY_NOTICES.md).

`main` is the default release branch; `develop` is for integration and `qa` is for release verification. See [contributing](CONTRIBUTING.md) for the promotion workflow.

## Setup

For a fresh checkout, clone both repositories into a shared parent and use the Lumia revision validated by CI:

```sh
mkdir -p xynes-front-end
cd xynes-front-end
git clone https://github.com/Xynes-Studio/lumia-ds.git
git -C lumia-ds checkout 9f6d12d2c3a1137c892364c6a5127e4bf29e1f79
git clone https://github.com/Xynes-Studio/xynes-main.git
cd xynes-main
```

Keep this project at `xynes-front-end/xynes-main` beside `xynes-front-end/lumia-ds`. Use Node 22.19+ and Corepack. Package manager: pnpm 10.33.0 for this app; Lumia's own packageManager pin remains authoritative for its build. The linked Lumia packages must have built dist files. Tested local Lumia revision: `8d06a3591ad3910d09904d1901642d9d342b8f71`. CI uses the remote-verified parent `9f6d12d2c3a1137c892364c6a5127e4bf29e1f79`; required package sources and lockfile are identical. Validation uses Node 24.19.0, recorded in `.node-version`.

```sh
corepack enable
cd ../lumia-ds
corepack pnpm install --frozen-lockfile
corepack pnpm --filter @lumia-ui/components... --filter @lumia-ui/theme... build
cd ../xynes-main
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Skip the Lumia build when its dist already exists and is current. Do not install dependencies at the workspace meta-folder root. Preview: http://localhost:3200. To run the production server, stop dev first, then `corepack pnpm build && corepack pnpm start`. The app uses webpack to support the established sibling library layout; no Lumia sources are copied or changed.

## Checks

```sh
corepack pnpm typecheck
corepack pnpm lint
corepack pnpm format:check
corepack pnpm test:coverage
corepack pnpm build
corepack pnpm test:e2e
```

E2E defaults to the installed Google Chrome on this Mac. For CI use the bundled Playwright Chromium by setting `PLAYWRIGHT_CHANNEL=chromium`; install it with `corepack pnpm exec playwright install --with-deps chromium`. E2E can reuse a local server outside CI. Run against production for final verification. Screenshots go to `docs/verification`; traces on failure go to ignored `test-results`. Coverage reports go to ignored `coverage`. Thresholds are 90% for all four metrics and every authored application file. See [quality report](docs/QUALITY_REPORT.md) for actual measured results and exclusions.

`corepack pnpm test` runs unit/integration tests, `corepack pnpm format` formats authored source/docs. `docs/reference` and original asset bytes are intentionally excluded from formatting. New tests/tooling are isolated to this repository.

## Configuration and extension

- `src/config/site.ts`: typed destinations, pending messages and SEO copy. Configure the actual CMS/contact/hosted URLs before release.
- Optional `SITE_URL`: the confirmed public HTTP(S) origin, used for canonical/sitemap metadata at build time. Local `.env` files stay ignored. See `.env.example`; there are no credentials or backend services.
- `src/components/sections/home`: independently maintained homepage sections; `src/app/page.tsx` is simple composition.
- `src/components/shared/action.tsx`: Lumia-based native link / pending-button behavior.
- `public/assets`: original production artwork. Unused Figma exports remain in documentation only.

Read [implementation plan](docs/IMPLEMENTATION_PLAN.md), [stories](docs/IMPLEMENTATION_STORIES.md), [continuation prompt](docs/AGENT_EXECUTION_PROMPT.md), [architecture](docs/ARCHITECTURE.md), [design decisions](docs/DESIGN_DECISIONS.md), and [asset provenance](docs/ASSET_PROVENANCE.md). GSAP and future service integrations are documented boundaries, not installed features. Live CI results are available in [GitHub Actions](https://github.com/Xynes-Studio/xynes-main/actions).
