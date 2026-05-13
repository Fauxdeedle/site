
---
name: build-project
description: Use this skill when building a new project page. Ask questions about the project to get information for the pages content
---

# Content information
The content for these pages are:
1. what is this project?
2. what is the problem the project is solving
3. how did the project solve this problem? 

## Adding a Project

1. Copy `src/content/projects/_template.md` to `src/content/projects/your-slug.md`
2. Drop the screenshot into `public/images/projects/your-filename.jpg`
3. Fill in the frontmatter: `title`, `description`, `date`, `image` (`/images/projects/your-filename.jpg`)
4. Write body content below the `---`

The project auto-appears on the homepage grid and gets its own page at `/projects/your-slug`.