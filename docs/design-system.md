# CloudSync Design System Snapshot

This document summarizes the decisions encoded in the UI so engineers can reuse the same primitives across the marketing site and the product shell.

## Foundations

| Token | Value | Notes |
| --- | --- | --- |
| Primary Surface | `#ffffff` | Layered with 16px blur for frosted panels |
| Accent Gradient | `#93c5fd → #3b82f6 → #1d4ed8` | Used for hero graph + CTA focus states |
| Supporting Green | `#10b981` | Highlights success cues and uptime badges |
| Base Text | `#0f1115` | 93% contrast on white, meets WCAG AA |
| Muted Text | `#5c6475` | Body copy + helper text |
| Spacing Scale | `4px * n` | Section rhythm uses `12x` (~48px) increments |
| Radius Scale | `8px / 20px` | Controls cards and pill buttons |

Typography

- **Display / H1**: 64px / 1.1, `font-semibold`
- **Section titles**: 36px / 1.2
- **Body**: 18px regular
- **Small**: 14px semi-bold for labels

## Components

### Buttons
- Primary: blue gradient / white text / drop shadow, `:focus-visible` ring defined in `globals.css`
- Secondary: outline with subtle border animation (`hover:border-slate-300`)

### Cards
- Shared `.card-surface` class for blur, border, and motion states
- Accepts rich text, icons, and interactive children

### Grid System
- `max-w-6xl` content width with 24px side padding
- Layout modules specify their column behavior inside `/app/blueprint`

## Accessibility
- Skip link to jump to `#main`
- All interactive elements have 44px hit zones + keyboard focus
- Color palette tested for 4.5:1 contrast or higher

## Handoff Assets
- Blueprint route: `/blueprint`
- Figma: `https://www.figma.com/file/gamemaker-cloudsync/CloudSync-Landing-Blueprint?type=design`
- Motion reference: Documented inside `/app/blueprint/page.js`
