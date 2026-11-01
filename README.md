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
