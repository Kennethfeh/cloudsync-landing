# CloudSync Landing

Marketing + blueprint case study showing how I approach site architecture, system tokens, and developer handoff.

## Highlights
- `/` — high-fidelity marketing surface with purposeful copy, stats, testimonials, and CTA.
- `/blueprint` — annotated architecture page mirroring my Figma frames (sitemap, grids, motion specs).
- `/docs` — `design-system.md` + `architecture.md` capture tokens, layout rules, and process notes.

## UX & Accessibility
- Skip link, keyboard-visible focus styles, and descriptive aria labels.
- Micro-interactions on cards/buttons (translate + shadow) explained in the blueprint.
- Semantic landmarks (`header`, `nav`, `section`, `footer`) for screen readers.

## Deploying
```bash
npm install
npm run dev    # iterate
npm run build  # verify production build before pushing to Vercel
```

Deploy the folder as a Next.js project on Vercel (build command `next build`, output `.next`). Include the live URL + a link to your Figma blueprint when applying.
