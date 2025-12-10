# CloudSync Landing

Marketing + blueprint case study showing how I approach site architecture, system tokens, and developer handoff.

## Overview
- **Brief**: Reimagine CloudSync’s marketing + product touchpoints while proving I can define architecture, polish the UI, and prep developer handoff without engineering support.
- **Role**: Solo designer (research, IA, high-fidelity design, documentation).
- **Outcome**: High-fidelity landing page + blueprint + docs deployed as a Next.js experience.

## Highlights
- `/` presents the full marketing narrative with metrics, testimonials, and purpose-built CTAs.
- `/blueprint` mirrors the annotated Figma file with sitemap, responsive grids, and motion specs for engineers.
- `/docs` contains `design-system.md` and `architecture.md`, documenting tokens, spacing, and flow decisions.

## Process & Decisions
1. **Discovery** – Interview prompts mapped the sitemap and wireframes documented in `/app/blueprint` + `docs/architecture.md`.
2. **Systemization** – Defined tokens, typography, and card primitives in `docs/design-system.md` so marketing + product share a single visual language.
3. **Polish & Handoff** – Added motion/ARIA notes in the blueprint, plus the Figma reference for detailed inspection: [CloudSync Landing Blueprint](https://www.figma.com/file/gamemaker-cloudsync/CloudSync-Landing-Blueprint?type=design).

## Craft & Handoff Notes
- Accessibility fundamentals: skip link, semantic landmarks, visible focus states, and high-contrast palette.
- Micro-interactions (card lift, CTA shadows) are described in the blueprint route for consistent implementation.
- Docs + blueprint double as a developer checklist so engineers can implement without a separate spec doc.

## How to Present This Project
1. Deploy as a standard Next.js app on Vercel (`next build` / `.next`).
2. Share the live URL, `/blueprint`, `/docs`, and the Figma link inside your application materials.
3. Reference the “Process & Decisions” bullets during interviews to narrate how you move from research → system → polish.
