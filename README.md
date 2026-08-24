# Vaishali Sachdev  Portfolio

Personal developer portfolio built with Next.js (App Router), TypeScript, and plain CSS. No backend, database, or UI libraries.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production
```

## Where to edit things

| What | File |
| --- | --- |
| Name, role, email, GitHub, **LinkedIn URL**, resume path | `src/data/site.ts` |
| Projects (content, tech, screenshots) | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Styling / theme colors | `src/app/globals.css` (CSS variables at the top) |

## Adding your own content

- **LinkedIn:** update `linkedin` in `src/data/site.ts` (currently a placeholder).
- **Resume:** drop a `resume.pdf` into `public/`  the nav link points at `/resume.pdf`.
- **Project screenshots:** add images under `public/projects/<slug>/`, then reference them in the
  `screenshots` array for that project. Projects with an empty `screenshots` array show a
  "coming soon" placeholder automatically.
- **GitHub / Live demo buttons** appear on a project page only when you set `github` / `demo`
  on that project  no fake links are shown.

## Structure

- `/`  single-page: Home, About, Projects, Skills, Contact (nav links scroll to sections).
- `/projects/[slug]`  one detail page per project (statically generated).
