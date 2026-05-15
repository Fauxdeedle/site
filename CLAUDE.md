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

**Styling:** Plain CSS with CSS Modules (`*.module.css`) for component scoping. Design tokens in `src/styles/variables.css` - edit there for global theme changes. ALWAYS reference [examples](src/examples) when making visual updates

**Blog/Content:** Markdown files in `src/content/` with frontmatter. Use `getPosts()` and `getPost()` from `src/lib/markdown.ts`.

**Key patterns:**
- Server Components by default; add `"use client"` only for interactivity
- Route groups `(name)` organize without affecting URLs
- Barrel exports in `components/ui/index.ts` for clean imports

## Adding a Project

1. Copy `src/content/projects/_template.md` to `src/content/projects/your-slug.md`
2. Drop the screenshot into `public/images/projects/your-filename.jpg`
3. Fill in the frontmatter: `title`, `description`, `date`, `image` (`/images/projects/your-filename.jpg`)
4. Write body content below the `---`

The project auto-appears on the homepage grid and gets its own page at `/projects/your-slug`.

## Adding Images

**Project images** — Drop the file into `public/images/projects/`, then reference it in the frontmatter:
```
image: "/images/projects/your-file.jpg"
```

**Blog inline images** — Drop the file into `public/images/blog/`, then use standard markdown syntax in the post body:
```
![Alt text](/images/blog/your-file.jpg)
```

**Site images** (profile photo, decorative, etc.) — Drop the file into `public/images/site/`, then reference it in the relevant component:
```tsx
<img src="/images/site/your-file.jpg" alt="..." />
```
## Checking updates

**local server**
usually the server is hosted locally on localhost:3000. check there before trying to host the site to check changes