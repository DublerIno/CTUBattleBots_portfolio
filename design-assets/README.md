# Vektorové podklady Overengineered

Tyto SVG jsou samostatné, editovatelné verze prvků aktuálního webu. Nejsou v něm načítané; jejich změna proto sama o sobě vzhled webu nezmění.

| Soubor | Původ na webu | Rozměr / použití |
| --- | --- | --- |
| `cutting-mat-blue.svg` | modrá podložka na úvodu a u Battlebotů | 1440 × 900; jemná mřížka 24 px, silnější 120 px |
| `cutting-mat-green.svg` | zelená podložka Akce | stejné |
| `cutting-mat-red.svg` | červená podložka Tým | stejné |
| `specimen-frame-square.svg` | čtvercové rámečky galerie Battlebotů | 480 × 480, průhledný vnitřek |
| `specimen-frame-render.svg` | rámeček velkého renderu robota | 800 × 600, průhledný vnitřek, zaměřovací značky |
| `specimen-frame-*-medium.svg` | čitelnější rámečky pro menší použití | čtverec, 4:3 render a 4:5 portrét |
| `specimen-frame-*-bold.svg` | výrazné rámečky pro silné zmenšení | stejné tři formáty |

Rámečky lze otevřít v Inkscape, Illustratoru nebo Figmě a měnit rozměr beze ztráty kvality. SVG podložky používají vektorové vzory a přechody. Web k nim navíc přidává jemné CSS zrno a světlo reagující na kurzor, které v těchto statických SVG není; export tedy představuje věrnou *statickou* vrstvu, nikoli pixelově shodný screenshot. Měřicí čísla na okrajích web vykresluje jako text pomocí IBM Plex Mono, proto v SVG nejsou.

Silnější rámečky používají `vector-effect="non-scaling-stroke"`, aby jejich tah při zmenšování SVG na obrazovce neztenčil. Sada **medium** má základní linku 2 px a rohy 2,5 px; sada **bold** 3 px a rohy 4 px. Nový formát `portrait` má poměr stran 4:5 pro vertikální kompozice. Některé grafické editory mohou při importu vlastnost `vector-effect` ignorovat; v takovém případě po změně velikosti nastavte tloušťku tahu ručně. Původní jemné SVG zůstávají beze změny.

## Rastrové verze podložek

Ve složce `raster/` jsou modrá, zelená i červená podložka jako PNG ve velikostech **1440 × 900 px** a **2880 × 1800 px**. Větší verze je vykreslená ve dvojnásobném rozlišení ze stejného SVG, nikoli dodatečně zvětšená z menšího PNG. PNG jsou neprůhledná a určená jako hotové pozadí; pro jiný poměr stran nebo větší tiskový formát vycházejte ze SVG.

## Písma

- **Big Shoulders** — velké titulky, názvy stránek a robotů. Na webu se načítá přes `next/font/google`; hlavní řezy jsou přibližně 700–800.
- **IBM Plex Mono** — běžné texty, navigace, technické štítky a specifikace. Na webu se načítají řezy 400, 500 a 600.

Zdroj nastavení: `app/layout.tsx` a `app/globals.css`. Náhradní písma při nedostupnosti webfontů jsou Arial Narrow a systémové monospace. SVG soubory zde neobsahují žádný text závislý na instalaci fontů.

## Barvy

- Modrá podložka: `#071b29`.
- Zelená podložka: `#0d2b22`.
- Červená podložka: `#34151a`.
- Teplá bílá pro linky a text: `#eee8dc`.

Samostatné vektorové logo ČVUT je v `public/ctu-logo-white.svg`. Je převzaté z Wikimedia Commons a zatím čeká na potvrzení souladu s grafickým manuálem ČVUT/FEL.
