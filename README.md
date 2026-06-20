# HANA — Charter Site

A single-vessel marketing site for **HANA**, a 42.60m CRN motor yacht available
for Mediterranean charter. Built with **Next.js (App Router) + TypeScript**,
deployed on **Vercel**.

The design system lives in [`app/globals.css`](app/globals.css): oyster-white
frosted-glass surfaces over a warm field that flows from ivory through warm
greys into a deep graphite, with champagne as the single metal accent.

## Prerequisites

Node.js 20+ (see `.nvmrc`). This machine did not have Node installed — install it
first, e.g.:

```bash
# with nvm
nvm install 20 && nvm use 20
# or download from https://nodejs.org (LTS)
```

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # production build
npm run start        # serve the production build
```

## Deploy to Vercel

Either path works. Both require **your** Vercel login (I can't authenticate for you).

### A. Vercel CLI (fastest)

```bash
npm i -g vercel
cd "hana-charter"
vercel               # first run: links/creates the project, then deploys a preview
vercel --prod        # promote to production
```

### B. Git + Vercel dashboard (recommended for ongoing work)

```bash
git init && git add . && git commit -m "HANA charter site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Then on [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
Vercel auto-detects Next.js; no build settings needed. If the repo root is the
parent folder, set **Root Directory** to `hana-charter`.

## Before launch

- **Enquiry button** points to a placeholder. Set the real address in
  [`components/Enquire.tsx`](components/Enquire.tsx) (`ENQUIRY_EMAIL`), or swap the
  `mailto:` for a form endpoint.
- Replace the Open Graph defaults / add a social share image in `app/layout.tsx`.
- Photography lives in [`public/photos`](public/photos); the wordmark is
  `public/hana-logo.png`.

## Structure

```
app/
  layout.tsx        fonts (next/font), metadata, <html>/<body>
  page.tsx          composes the sections
  globals.css       design tokens + all styles
components/
  Backdrop, TopBar, Hero, SpecsStrip, Vessel,
  OnBoard, Gallery, Specs, Enquire, SiteFooter
  ScrollEffects.tsx 'use client' — reveal-on-scroll + condensing bar
public/
  hana-logo.png
  photos/*.webp
```

## Quality floor

Responsive to 360px · visible focus rings · `prefers-reduced-motion` respected ·
alt text on every photograph · no-JS fallback reveals all content · British English.
