# Mohd Imran — QA Engineer / SDET Portfolio

A responsive personal portfolio built with plain HTML, CSS and JavaScript. No build step, no dependencies. It reads like a test-run report: sticky nav, a live run summary in the hero, expandable case studies, product coverage, impact metrics, system diagrams, reporting, a career timeline and a filterable skills explorer.

## Project structure

```text
mohd-imran-qa-portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
├── 5.4 Mohd_Imran_SDET_2_Page_Resume.pdf
└── assets/
    ├── Mohd-Imran-Resume.pdf      (served by the "View resume" links)
    └── Mohd-Imran-Resume-Enhanced.md
```

## Sections

| Section | What it contains |
|---|---|
| Hero | Positioning statement, résumé/social links, `career.spec` run summary, stat strip |
| Selected work | Seven expandable case studies: CMS, CMS→API→LMS, LMS, Playwright migration, OrangeHRM, API/data, AI-assisted QA |
| Products | Coverage timeline, testing-across-the-stack pills, product catalog grouped by company |
| Impact | Measured outcomes from the résumé, shown as bars plus headline figures |
| Systems | CMS → API → LMS flow, delivery pipeline, validation layers |
| AI | AI-assisted workflow, tool comparison table, guardrails |
| Reporting | Report types and evidence produced per run |
| Metrics | Eight quality metrics with the formula behind each |
| Experience | Career timeline with verified dates and responsibilities |
| Skills | Filterable skill groups, with current strengths marked |
| Teaching | Mentoring practices and education |
| Evidence | GitHub, résumé and profile links |
| Contact | Email with copy button, phone, location, availability |

## Run locally

```bash
cd mohd-imran-qa-portfolio
python3 -m http.server 8080
```

Open <http://localhost:8080>. If a change does not appear, hard-refresh with `Ctrl+Shift+R` (`Cmd+Shift+R` on macOS).

## Behaviour

- **Dark mode** — toggled from the nav, saved in `localStorage`, defaults to the system preference.
- **Mobile nav** — collapses below 820px.
- **Active section** — nav link highlights while scrolling.
- **Skills filter** — filters skill groups by area.
- **Copy email** — copies the address with a manual-selection fallback.
- **Accessibility** — skip link, visible focus rings, `aria-expanded`/`aria-pressed` states, reduced-motion support.

## Content accuracy

All experience, dates, metrics and tools come from `assets/Mohd-Imran-Resume-Enhanced.md`. The AI section deliberately describes reviewed, AI-assisted QA rather than autonomous agents; keep it that way unless that work genuinely exists. Client-confidential details are excluded.

## Before publishing

1. Replace `assets/Mohd-Imran-Resume.pdf` whenever the résumé changes (the current copy came from `5.4 Mohd_Imran_SDET_2_Page_Resume.pdf`).
2. Confirm the GitHub and LinkedIn URLs.
3. Re-check dates and metrics against your latest résumé.
4. Do not add client names, screenshots or data that you do not have permission to publish.

## Deploy to GitHub Pages

1. Push the contents of this folder to a repository (root, not a parent folder).
2. In GitHub: **Settings → Pages → Deploy from a branch**.
3. Select `main` and `/(root)`, then save.
4. The site appears at `https://<username>.github.io/<repository>/` (or `https://<username>.github.io/` for a `username.github.io` repository).
