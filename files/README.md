# ModRef archive — file organization

This directory holds the papers and slides for every ModRef workshop, plus the
searchable index served at <https://archive.modref.org/files/>.

## Layout

```
files/
├── index.html              # searchable list (renders ModRefListSimp.md)
├── ModRefListSimp.md        # the master list: Year | Authors | Title | Type, with links
├── README.md                # this file
├── papers/<year>/           # papers for that year
└── slides/<year>/           # slides for that year
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

Papers listed in `ModRefListSimp.md` for which we have **no file**. Update this
table as files are recovered. Invited talks, panels, and posters are excluded, as
they are not regular publications.

### Years with no files at all

| Year | Papers | Reason |
|------|-------:|--------|
| 2001 | 5 | only third-party references survive; no proceedings archived |
| 2002 | 7 | no proceedings archived |
| 2003 | 5 | proceedings on the Internet Archive is truncated/corrupt |
| 2006 | 8 | only the CP 2006 site was archived, without the papers |
| 2009 | 10 | no workshop-page snapshot exists |
| 2012 | 7 | workshop page archived without linked papers |
| 2015 | 6 | paper host offline and never captured by the Internet Archive |

<details><summary>Titles of the missing papers for these years</summary>

**2001**
- Topological Channel Routing Using Constraint Logic Programming
- First-Solution Search with Symmetry Breaking and Implied Constraints
- Symmetry and Implied Constraints in the Steel Mill Slab Design Problem
- Constraint Programming and Hybrid Formulations for Life
- Modelling and Problem Forulation: what matters and who cares?

**2002**
- Reformulation: A Practical View
- Matrix Modelling: Exploiting Common Patterns in Constraint Programming
- Towards Model Reformulation at Multiple Levels of Abstraction
- On the Pruning Behaviour of Minimal Combined Models for Permutation CSPs
- Algebraic Properties of CSP Model Operators
- Capturing Constraint Programming Experience: A Case-Based Approach
- Automatically Converting SAT Encodings of CSPs

**2003**
- A Generalisation of the Backtracking Algorithm
- Automated Reformulation of Specifications by Safe Delay Constraints
- Mini Panel
- Search Strategies for Optimization: Modelling the SONET Problem
- Why Channel?  Multiple Viewpoints for Branching Heuristics

**2006**
- Improved Models for Graceful Graphs
- Mining Historical Data to Build Constraint Viewpoints
- Generalizing Global Constraints Based on Network Flows
- Why ESSENCE? Frequently Asked Questions About a New Language for Specifying Combinatorial Problems
- Strategic Constraint Satisfaction Problems
- Exploring the Canopy of Constraint Modelling Languages
- The Automatic Generation of Redundant Representations and Channelling Constraints
- Consistency Reasoning for Removing Constraints and Clauses

**2009**
- Lessons Learned from Modelling the NHL Playoff Qualification Problem
- Markov Logic as a Modelling Language for Weighted Constraint Satisfaction Problems
- Tractable Benchmarks
- Debugging Constraint Models with Metamodels and Metaknowledge
- Preprocessing in Pseudo-Boolean Optimization: An Experimental Evaluation
- SIMPLY: a Compiler from a CSP Modeling Language to the SMT-LIB Format
- Comparing Dual Viewpoints in Permutation Problems
- The Evolving World of MiniZinc
- Extending Soft Arc Consistency Algorithms to Non-Invertible Semirings with an Application to Multi-Criteria Problems
- Monadic Constraint Programming with Gecode

**2012**
- Symmetry Declarations for MiniZinc
- MiniZinc with Functions
- Dual Encoding from Applications into Quantified Boolean Formulas
- The AtMostSeqCard Revisited
- Finding Synchronization Codes to Boost Compression by Substring Enumeration
- DFA-based formulation for constraint negation
- CDF-Intervals Revisited

**2015**
- Feasibility of Building Better Traincrew Rosters with Complete Solvers
- Back-to-Back Testing a Soft Constraint Model for a Smart Exhibition Space
- Automatic solver chaining in MiningZinc
- Complex Clustering Using Constraint Programming: Modelling Electoral Map Creation
- Updated Linearization Library for MiniZinc 2.0
- Transforming Constraint Programs to Input for Local Search

</details>

### Years partially covered

| Year | Missing | Titles |
|------|--------:|--------|
| 2008 | 4 of 8 | Automatically Detecting Neighbourhood Constraint Interactions using Comet (LSCS'08); Constructive vs Perturbative Local Search for General Integer Linear Programming (LSCS'08); A Versatile Intermediate Language for Answer Set Programming (NMR'08); Generalizing Backdoors (LSCS'08) |
| 2011 | 6 of 13 | Consistency of Constraint Networks Induced by Automaton-Based Constraint Specification; Using the Global Constraint Seeker for Learning Structured Constraint Models: a First Attempt; A Reformulation Strategy for Multi-Dimensional CSPs: A Case Study for the SET Game; Filtering and Counting for the Spread and Deviation Constraints; Improving the Expressiveness of Table Constraints; Global Matrix Constraints |
| 2017 | 1 of 8 | Towards Compact SMT Encodings for Numeric Planning |
| 2026 | 1 of 13 | Machine Learning-Based Generalization Queries for Constraint Acquisition |
