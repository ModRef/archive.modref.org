# ModRef archive — file organization

The papers and slides for every ModRef workshop live in `static/files/` and are
served verbatim at <https://archive.modref.org/files/…>. The bare
<https://archive.modref.org/files/> redirects to the searchable `/contributions`
page. This file documents the naming scheme and tracks the papers we're still
missing; the contributions list itself is `src/lib/data/papers.json`.

## Layout

```
static/files/
├── index.html              # redirect to /contributions
├── papers/<year>/          # papers for that year
└── slides/<year>/          # slides for that year
```

## File naming

```
ModRef<year>-<NN>-<Title-Slug>.pdf
```

- `<year>` — four-digit workshop year.
- `<NN>` — two-digit sequence number = the item's position in the workshop
  schedule / proceedings (e.g. `01`, `02`, …).
- `<Title-Slug>` — the paper/talk title, hyphenated.

Rules:

- **A paper and its slides share the same filename**, distinguished only by the
  folder: `papers/<year>/ModRef<year>-NN-Title.pdf` and
  `slides/<year>/ModRef<year>-NN-Title.pdf`.
- **`NN = 00`** is reserved for a split proceedings' **front matter** (foreword,
  programme committee, table of contents), stored as
  `papers/<year>/ModRef<year>-00-Front-Matter.pdf`.
- Older workshops that only published a single combined **proceedings PDF** have
  been split into their individual papers, numbered in proceedings order, with the
  front matter as `00`.

## Missing papers

Papers listed in the contributions data (`src/lib/data/papers.json`) for which we
have **no file**. Update this table as files are recovered. Invited talks, panels
and posters are excluded, as they are not regular publications.

**19 regular papers are still missing.** Of these, 9 are from co-located or
predecessor events rather than ModRef proper (see the notes below), so only
**10 are missing ModRef papers**.

| Year | Missing | Titles |
|------|--------:|--------|
| 2001 | 5 of 5 | Topological Channel Routing Using Constraint Logic Programming; First-Solution Search with Symmetry Breaking and Implied Constraints; Symmetry and Implied Constraints in the Steel Mill Slab Design Problem; Constraint Programming and Hybrid Formulations for Life; Modelling and Problem Forulation: what matters and who cares? |
| 2002 | 3 of 7 | Reformulation: A Practical View; On the Pruning Behaviour of Minimal Combined Models for Permutation CSPs; Capturing Constraint Programming Experience: A Case-Based Approach |
| 2003 | 1 of 5 | A Generalisation of the Backtracking Algorithm |
| 2008 | 4 of 8 | Automatically Detecting Neighbourhood Constraint Interactions using Comet (LSCS'08); Constructive vs Perturbative Local Search for General Integer Linear Programming (LSCS'08); A Versatile Intermediate Language for Answer Set Programming (NMR'08); Generalizing Backdoors (LSCS'08) |
| 2011 | 1 of 8 | Filtering and Counting for the Spread and Deviation Constraints |
| 2012 | 2 of 7 | Dual Encoding from Applications into Quantified Boolean Formulas; The AtMostSeqCard Revisited |
| 2015 | 2 of 6 | Feasibility of Building Better Traincrew Rosters with Complete Solvers; Updated Linearization Library for MiniZinc 2.0 |
| 2017 | 1 of 8 | Towards Compact SMT Encodings for Numeric Planning |

Notes:

- **2001** is the CP 2001 *Modelling and Problem Formulation* session that ModRef
  grew out of, not a ModRef edition; only third-party references survive and no
  proceedings were archived.
- **2008**'s four missing papers were presented in the co-located LSCS'08 and
  NMR'08 sessions, so they are not ModRef publications and were never part of the
  ModRef proceedings.
- **2012**'s two gaps are the only ones not covered by the 2026 committee
  recovery round; the rest of that year was recovered from individual copies.
