# Aymane Achfennar — Portfolio

A dark, technically-driven personal site for **Aymane Achfennar**, Software Engineer. The page is a Next.js app with a full-viewport Three.js scene (particle lattice, torus knot, distortion grid) that reacts to the mouse and to scroll, sitting *behind* the content so it never blocks clicks or scrolling.

Accent: electric cyan `#00e5ff` on near-black `#07070c`. Type: Space Grotesk / Inter / JetBrains Mono.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Three.js** via **React Three Fiber** + **Drei**
- **GSAP** + ScrollTrigger (camera travel + section reveals)
- **Tailwind CSS 4** for the reset; custom CSS for the design system

## Run locally

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Project map

```
app/                  # routes, fonts, global CSS
components/
  canvas/             # Three.js scene (client-only)
  layout/             # nav, loader, cursor, grain, footer
  sections/           # hero → contact
  ui/                 # buttons, cards, reveal
lib/data.ts           # all copy, links, skills — edit here
public/Aymane_Achfennar_CV.pdf
```

## 3D notes

The canvas is `position: fixed` with `pointer-events: none`. Mouse position is sampled from `window`, scroll progress from GSAP ScrollTrigger. On viewports ≤ 768px the knot and grid drop out and the particle count is cut. `prefers-reduced-motion` freezes the scene (`frameloop="demand"`). Pixel ratio is capped at 1.5.

## Personalize

In `lib/data.ts` replace the LinkedIn and GitHub placeholders with real profile URLs. The Download CV button serves `public/Aymane_Achfennar_CV.pdf` (regenerate with `python3 scripts/generate-cv.py` if you have `reportlab`).
