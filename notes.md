# Notes

## Patterns

### Config-driven content (site-config.ts)
Dylan likes the pattern of centralizing editable content — text, images, links — into a single config file (`src/lib/site-config.ts`) rather than scattering it across component files. When adding new content areas to the site (e.g. a new section, a new set of images, a new list of items), consider adding the data to `site-config.ts` first and reading it from there in the component. This keeps all site content updatable from one place without touching component code.

Project pages are the one exception: their content lives in `src/content/projects/*.md` since each project is a discrete markdown file.
