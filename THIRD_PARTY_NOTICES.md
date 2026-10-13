# Third-party notices

Third-party dependencies and embedded assets retain their upstream licenses. The Apache code license and Xynes branding policy do not replace those terms.

| Material                         | Location / use                                                                                                                      | Upstream terms                                                                                                            |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Geist Sans, Mono and Pixel       | Fonts loaded from the `geist` package; some exported artwork contains rendered text                                                 | [Vercel / basement.studio](https://github.com/vercel/geist-font), [SIL Open Font License 1.1](licenses/geist-OFL-1.1.txt) |
| Akar Icons triangle-right-fill   | `public/assets/AkarIconsTriangleRightFill.svg` and `AkarIconsTriangleRightFill1.svg`; reference render                              | [Arturo Wibawa](https://github.com/artcoholic/akar-icons), [MIT](licenses/akar-icons-MIT.txt)                             |
| Dinkie Icons cursor-arrow-filled | `docs/reference/source-assets/DinkieIconsCursorArrowFilled.svg`, embedded in `public/assets/modules.svg` and reference compositions | [atelierAnchor](https://github.com/atelier-anchor/dinkie-icons), [MIT](licenses/dinkie-icons-MIT.txt)                     |
| coolicons add-plus-circle        | `docs/reference/source-assets/CiAddPlusCircle.svg`, embedded in `public/assets/modules.svg` and reference compositions              | [Kryston Schwarze](https://github.com/krystonschwarze/coolicons), [CC BY 4.0](licenses/coolicons-CC-BY-4.0.txt)           |
| Lumia packages                   | Sibling `link:` dependencies; no library source is copied into this repository                                                      | [Xynes-Studio/lumia-ds](https://github.com/Xynes-Studio/lumia-ds); licenses declared by each upstream package             |

The supplied Figma exports adapt icons through color, size, and group composition. Asset bytes are preserved; attribution and full license texts are supplied alongside them. Xynes reserves only its own portions of composite artwork. Generic third-party icons can be reused independently under their upstream terms.

Keep these notices with redistributed source and assets. A deployed site that retains coolicons must provide accessible attribution to Kryston Schwarze, link to the source and CC BY 4.0 license, and indicate the Figma adaptations. Add an accessible credits link before deployment; this repository publication does not deploy a website. Dependency license notices must also accompany any redistributed dependency or font files.
