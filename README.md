# archive.modref.org

The archive site for the **ModRef** workshop series (International Workshop on
Constraint Modelling and Reformulation). It includes the series history, a
searchable list of every contribution, and all recovered papers and slides.

Built with **SvelteKit** (`adapter-static`, fully prerendered), TypeScript, and
custom CSS with self-hosted fonts. Deployed to **GitHub Pages** at
`archive.modref.org`.

## Layout

```
src/                    SvelteKit app (routes, components, data)
  routes/               / (home) · /about · /contributions
  lib/                  PostmarkStamp + city landmark silhouettes, types, data
  lib/data/             workshops.ts + papers.json (both hand-edited source data)
static/
  files/                papers/<year>/ and slides/<year>/  → served at /files/…
FILES_STRUCTURE.md       notes on file naming + missing papers
```

**URL preservation:** the per-year sites (`YEAR.modref.org`) link to
`archive.modref.org/files/papers/…` and `/files/slides/…`. Those paths are kept
verbatim (the PDFs live in `static/files/`), and `/files` redirects to
`/contributions`.

## Develop

This project uses **pnpm**.

```
pnpm install
pnpm dev               # local dev server
pnpm check             # svelte-check (types/lint)
pnpm build             # static build → build/
```

## Data

The contributions list lives in `src/lib/data/papers.json` (edit it directly);
the editions/history in `src/lib/data/workshops.ts`.

## Linking into `/contributions`

The page opens on the most recent edition, but any view can be addressed
directly — the year sites use this to link straight at their own papers:

| URL | Opens |
|---|---|
| `/contributions/?year=2009` | the 2009 edition |
| `/contributions/?q=sudoku` | a search across every edition |
| `/contributions/?type=Invited` | invited talks across every edition |

Unknown or malformed values fall back to the default view. Selecting a year,
searching, or filtering updates the address bar, so any state can be linked to.

## Deploy

Pushing to `main` or `develop` runs `.github/workflows/deploy.yml`, which builds
and publishes `build/` to GitHub Pages. One-time setup in repo settings:
**Pages → Source → GitHub Actions**, and set **Pages → Custom domain** to
`archive.modref.org` (stored by GitHub, so no `CNAME` file is needed).
