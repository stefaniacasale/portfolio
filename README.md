# Stefania Casale, portfolio

Personal portfolio site for Stefania Casale: digital communications, client experience, and operations. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing content

All visible copy lives in one file: `src/data/content.ts`. Update roles, dates, skills, and links there without touching layout code.

To add a headshot, place the image in `public/` (for example `public/headshot.jpg`) and set `headshotSrc: "/headshot.jpg"` in the `site` object in `src/data/content.ts`. The hero switches from the monogram panel to the photo automatically.

The resume served by the Resume button is `public/Stefania-Casale-Resume.pdf`.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
