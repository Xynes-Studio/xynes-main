# Contributing

Use a feature branch and open a pull request against `develop`. Keep the independent sibling repository layout described in [README](README.md), preserve existing Lumia contracts, and run the configured checks before requesting review.

The branch flow is:

- `develop`: integration of reviewed feature work.
- `qa`: release candidates promoted from `develop` for verification.
- `main`: verified releases promoted from `qa`; default repository branch.

All three branches begin with the same initial homepage implementation. Promote changes through pull requests; keep later feature work on feature branches. These conventions do not imply that GitHub branch protection has been configured.

Intentional code contributions are made under Apache License 2.0, as described in section 5 of [LICENSE](LICENSE). Retain existing copyright, license, and attribution notices. Do not submit third-party code or artwork without compatible rights and provenance.

Xynes branding remains governed by [BRANDING.md](BRANDING.md). Do not assume the code contribution terms grant permission to license new company artwork or third-party marks; agree on separate asset terms with maintainers when necessary.
