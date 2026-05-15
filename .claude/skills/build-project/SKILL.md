
---
name: build-project
description: Use this skill when building a new project page. Ask questions about the project to get information for the pages content
---

# Content information
Gather the following before creating any files:
1. What is this project?
2. What problem is it solving?
3. How did the project solve this problem?
4. Project title, slug (kebab-case), description (1–2 sentences), date, and image path.

## Files to create

### 1. `src/lib/projects/[slug]-config.ts`
This is the single source of truth for all editable content on the project page — mirrors the pattern of `src/lib/site-config.ts`. Create this file first.

```ts
export const projectConfig = { 
  title: "Project Title",
  description: "One or two sentences shown on the homepage and project page.",
  date: "YYYY-MM-DD",
  image: "/images/projects/your-screenshot.jpg",

  sections: {
    what: "What this project is and what it does.",
    problem: "The problem it was solving.",
    solution: "How it solved that problem.",
  },
};

export type ProjectConfig = typeof projectConfig;
```

### 2. `src/content/projects/[slug].md`
Keep this file minimal — it exists only so the project appears in the homepage grid and gets a route. Pull title, description, date, and image from the config (copy the values in). Leave the body empty or add a one-line note pointing to the config file.

```md
---
title: "Project Title"
description: "One or two sentences."
date: "YYYY-MM-DD"
image: "/images/projects/your-screenshot.jpg"
---
```

### 3. Update `src/app/projects/[slug]/page.tsx`
Import the project config and use it for the page content instead of parsing the markdown body. The frontmatter values (title, description, image) come from the markdown via `getPost`; the section text comes from the config.

```tsx
import { projectConfig } from "@/lib/projects/[slug]-config";
```

Use `projectConfig.sections.what`, `.problem`, and `.solution` to render the content sections.

## Image
Drop the screenshot into `public/images/projects/your-filename.jpg` and set the `image` field in the config (and matching frontmatter) to `/images/projects/your-filename.jpg`.

The project auto-appears on the homepage grid and gets its own page at `/projects/[slug]`.
