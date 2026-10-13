# Asset provenance

Source: user's Figma file `mRyqlSSWwlYL0qOunWXdto`, requested frame `2024:6397`, inspected/exported on 2026-10-12. Download URLs were temporary and are not retained in application code or documentation. SVG contents are unchanged. Publication authorized on 2026-10-13. Original Xynes assets are separately reserved under [BRANDING.md](../BRANDING.md), with limited source-fork and local-development permission. Embedded fonts and icons retain their upstream licenses; see [third-party notices](../THIRD_PARTY_NOTICES.md). Application code is Apache-2.0 licensed.

| Local asset                     | Design slot / original node                       | Dimensions        | Treatment                                                                                                 |
| ------------------------------- | ------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------- |
| src/app/icon.svg                | Original Xynes wordmark, 2008:1780                | 104 × 47          | Original SVG favicon                                                                                      |
| Vector.svg                      | Hero/roadmap dotted motifs, 2010:1793 / 2024:6379 | 378 × 85          | Original SVG                                                                                              |
| AkarIconsTriangleRightFill.svg  | Light CTA arrow, 2024:6398 etc.                   | 24 × 24           | Original SVG                                                                                              |
| AkarIconsTriangleRightFill1.svg | Dark CTA arrow, 2024:6369 etc.                    | 24 × 24           | Original SVG                                                                                              |
| Vector3.svg                     | CMS red icon, 2014:6076                           | 38 × 38           | Original SVG                                                                                              |
| Rectangle15.svg                 | CMS free callout, 2014:6106                       | 287.5 × 82        | Original SVG; semantic text overlay                                                                       |
| modules.svg                     | Module illustration group, 2014:6138              | 705 × 702         | Original group SVG, including cursor/circles/cards                                                        |
| Group10.svg                     | Adaptability grid, 2014:6181                      | 1080 × 755        | Original SVG with effect/stroke bounds                                                                    |
| Vector1.svg                     | Modular by design label, 2014:6205                | 307.956 × 136.688 | Original SVG; accessible equivalent text                                                                  |
| Rectangle14.svg                 | Hosted callout, 2024:6374                         | 395.5 × 82        | Original SVG; native pending CTA overlay                                                                  |
| Rectangle46.svg                 | Roadmap gradient line, 2024:6381                  | 1728 × 6          | Original SVG                                                                                              |
| Rectangle47.svg                 | Roadmap gradient glow, 2024:6385                  | 1752.4 × 30.4     | Original SVG; hard-light blend                                                                            |
| cms-art.png                     | Original bot group I2024:6418;2033:532            | 936 × 936         | Exact static export with dithering, using temporary frame 2040:555                                        |
| open-source-art.png             | 2024:6358 + 2024:6359 + 2021:6321 layers          | 1184 × 1117       | Exact static composite of original background paths + shader illustration, using temporary frame 2040:533 |

The temporary frames and all their descendants were removed through MCP; the final check reported zero temporary export frames. Unused original individual-layer/group exports are in `docs/reference/source-assets` and are not served by Next. `docs/reference/reference.png` is the original whole-page render for comparison only. The brand is rendered by Lumia's exact matching Brand wordmark primitive rather than duplicated in the app.

Geometry is verified in Playwright using original declared fractional width/height values. Browsers round SVG natural dimensions to integers, so naturalWidth/naturalHeight alone is not an accurate ratio test for the thin gradient assets. Decorative images have empty alternative text, remain outside the accessibility tree, and have reserved dimensions. Static exports never substitute product content or selectable page copy.

The two PNG sources are preserved byte-for-byte; Next Image supplies responsive WebP at quality 100. Browser-rendered geometry and final screenshots are checked after optimization. Pixel font loading is restricted to Square, avoiding the package barrel's eager preload of unused variants.
