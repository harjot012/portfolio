# Harjot Kaur — Software Engineering Portfolio

A responsive Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 portfolio featuring project filtering, case-study pages, skills, experience and contact information.

## Run locally

1. Install Node.js 20.9 or newer.
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Before publishing (important)

- Replace `YOUR_EMAIL@example.com` in `src/app/layout.tsx` and `src/app/page.tsx`.
- Replace the generic GitHub and LinkedIn links in `src/app/layout.tsx` with your actual profiles.
- Add real repository URLs, demo links and screenshots to the project data in `src/data/projects.ts`. No repository or deployment links were invented.
- Verify all project descriptions and statuses, especially the ongoing research and Android prototype.
- Optionally add a downloadable CV to `public/cv.pdf` and link to it.
- Update any educational dates and project outcomes as they change.

## Deployment

Push to a GitHub repository and import it into Vercel as a Next.js project. No environment variables are required for the current site.

## Structure

- `src/app/page.tsx`: Homepage
- `src/app/projects/page.tsx`: Project archive
- `src/app/projects/[slug]/page.tsx`: Individual case studies
- `src/data/projects.ts`: Editable project information
- `src/app/globals.css`: Design system and responsive styles
- `src/components/`: Project cards and illustrations

The project illustrations are CSS-based placeholders, not real screenshots. Replace them with authentic project imagery when available.
