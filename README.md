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

## Deploy

Pushing to `main` or `develop` runs `.github/workflows/deploy.yml`, which builds
and publishes `build/` to GitHub Pages. One-time setup in repo settings:
**Pages → Source → GitHub Actions**, and set **Pages → Custom domain** to
`archive.modref.org` (stored by GitHub, so no `CNAME` file is needed).
