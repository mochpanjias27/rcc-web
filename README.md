# RCC website

Static site for Research Collaboration Community (RCC, IORA, CRP journals).
No build step: plain HTML, CSS, and JavaScript.

- `index.html` — landing page (journal search, directory, publishing calendar, indexing, workshops)
- `team.html` — management team (served at `/team`)
- `assets/js/journals.js` — data for all 10 journals; edit here to update SINTA, APC, months, links
- `vercel.json` — Vercel config (clean URLs)
- `.htaccess` — the same clean URLs on Apache/cPanel hosting

## Deploy
- Vercel: import this repository, framework preset "Other", no build command, output directory = root.
- cPanel: upload all files to `public_html`.

## Languages (EN / ID)
- English is written directly in the HTML. Indonesian lives in `assets/js/i18n.js`.
- To translate a new element: add `data-i18n="some.key"` to it and add `"some.key": "Teks Indonesia"` to `PAGE` in `i18n.js`.
  For attributes use `data-i18n-attr="placeholder:some.key|alt:other.key"`.
- Text built by JavaScript (journal list, calendar, call for papers) uses the `STR` table in `i18n.js`.
- Journal subjects in Indonesian: `subjectsId` in `assets/js/journals.js`.
- English is the default. Indonesian appears only after the visitor clicks ID; that choice is then remembered in their browser. `?lang=id` or `?lang=en` in a link forces a language.

## Hero video
- `assets/hero/rcc-hero.webm` and `rcc-hero.mp4` (same clip, 12 s loop, no audio) plus `rcc-hero-poster.jpg` (shown before playback and when motion is reduced).
- To use your own footage, replace those three files with the same names. Recommended: 10 to 20 seconds, 1280×720 or larger, no audio, under about 3 MB, dark or navy-toned so the left fade blends into the hero.

## Tutoring page (/bimbel)
- `bimbel.html` with programme data and prices in `assets/js/bimbel.js` (`PROGRAMS`, prices per session in rupiah as `[min, max]`).
- Sign-up and the consultation form open WhatsApp with a pre-filled message; no data is stored on the site.
