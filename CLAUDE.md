# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # Start dev server with hot reload (Turbopack)
npm run build   # Build for production (static export to /out)
npm run start   # Start production server (after build)
```

## Architecture

**Next.js 15 App Router** static site with SSG export.

```
src/
├── app/           # Routes (App Router)
├── components/
│   ├── ui/        # Design system (Button, Card) - reusable
│   └── sections/  # Page sections (Hero, Footer)
├── content/       # Markdown files (blog, docs)
├── lib/           # Utilities (markdown parser, config)
└── styles/        # CSS variables, mixins
```

**Styling:** Plain CSS with CSS Modules (`*.module.css`) for component scoping. Design tokens in `src/styles/variables.css` - edit there for global theme changes.

**Style Examples:**
- `src/styles/examples/main/` — Authoritative source for all styling. Reference these files when making components or restyling any part of the site.
- `src/styles/examples/ref/` — Reference examples for redesigning components. Use these when redesigning existing components based on example patterns.

**Blog/Content:** Markdown files in `src/content/` with frontmatter. Use `getPosts()` and `getPost()` from `src/lib/markdown.ts`.

**Key patterns:**
- Server Components by default; add `"use client"` only for interactivity
- Route groups `(name)` organize without affecting URLs
- Barrel exports in `components/ui/index.ts` for clean imports
