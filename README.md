# BIOL 2401 · A&P Resource Hub

A single landing page that consolidates the four Anatomy & Physiology I (BIOL 2401)
resources built by **Dr. Victor Garcia Martinez**, Assistant Professor at Lone Star College.

The visual style is a **green spiral-bound notebook** — matte-silver spiral binding on the
left edge, cream paper with a 20px gray grid, a red margin line, washi tape, sticky notes,
yellow highlighter swipes, and lime-green CTAs.

| Stage | Resource | URL |
|---|---|---|
| Pre-assessment | BIOL 2401 — Pre-Assessment Generator | https://biol2401-pre-assessment-generator.vercel.app/ |
| Infographics | A&P — Presentación de Infografías | https://dr-garcia-m-haps-slo.vercel.app/ |
| Active Learning | BIOL 2401 — Flipped Classroom | https://biol2401-flipped-classroom.netlify.app/ |
| Post-assessment | A&P1 — Mini-apps | https://mini-ap1-apps.vercel.app/ |

---

## Stack

- **Next.js 16** (App Router) + **TypeScript 5**
- **Tailwind CSS 4** for styling
- **Inter** (UI) + **Caveat** (handwritten script) via `next/font/google`
- No database, no auth — pure static landing page

## Local development

```bash
bun install
bun run dev
# → http://localhost:3000
```

Lint:

```bash
bun run lint
```

Production build:

```bash
bun run build
bun run start
```

## Project structure

```
src/
├── app/
│   ├── globals.css         # Notebook CSS tokens, spiral binding, paper texture
│   ├── layout.tsx          # Root layout — Inter + Caveat fonts, metadata
│   └── page.tsx            # The landing page (3 resource stages + bio + how-to)
└── components/
    └── notebook/
        ├── spiral-binding.tsx    # Fixed left-edge silver spiral (SVG pattern)
        ├── top-banner.tsx        # Thin lime banner with course code
        ├── site-header.tsx       # Sticky nav bar
        ├── hero.tsx              # Cover page — headline + CTAs + sticky notes
        ├── resource-stage.tsx    # One card per resource (×3)
        ├── about-author.tsx      # Dr. Garcia Martinez bio
        ├── how-to-use.tsx        # 3-step "how to use this pack" block
        ├── site-footer.tsx       # Black footer CTA bar
        ├── washi-tape.tsx        # Lime washi tape decoration
        └── sticky-note.tsx       # Yellow / lime sticky note
```

## Deploy

### Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **New Project → Import Git Repository**.
3. Vercel auto-detects Next.js — accept the defaults.
4. Click **Deploy**.

`vercel.json` is included for explicit framework + header config.

### Deploy to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project**.
3. Build command: `next build` (auto-filled from `netlify.toml`).
4. Publish directory: `.next` (auto-filled from `netlify.toml`).
5. Click **Deploy site**.

`netlify.toml` is included with the `@netlify/plugin-nextjs` plugin pre-declared so the
Next.js runtime works on Netlify without manual setup.

### Custom domain

Both platforms let you attach a custom domain (e.g. `biol2401.lonestar.edu`) after the first
deploy. No code changes needed.

## Customizing the content

All three resource cards are defined as a single array in
[`src/app/page.tsx`](src/app/page.tsx) — update the `RESOURCES` array to change titles,
blurbs, links, or platform tags.

To change colors (e.g. swap the lime green for a different accent), edit the
`--color-lime-*` and `--color-paper` CSS custom properties in
[`src/app/globals.css`](src/app/globals.css).

## License

© Dr. Victor Garcia Martinez · Lone Star College. Built for BIOL 2401 students.
