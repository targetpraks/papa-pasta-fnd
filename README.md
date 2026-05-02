# Papa Pasta FND — Franchise Network Development

**The Living Crest™ franchise recruitment platform for South Africa.**

Live: https://targetpraks.github.io/papa-pasta-fnd (enable GitHub Actions Pages in repo settings)

---

## What it is

Papa Pasta is not a restaurant website. It is a **franchise recruitment weapon** disguised as a beautiful brand experience.

Every pixel exists to convert a curious visitor into a territory lead. The site's core differentiator — **The Living Crest™** — is an interactive SVG crest that changes colour based on season, city, or user creation. Visitors don't browse a menu; they discover that the colour in their city hasn't been claimed yet, and they can create their own.

## Pages (8 total)

| Page | Route | Purpose |
|------|-------|---------|
| **Home** | `/` | Hero, stats, value prop, 6-step journey, CTA band |
| **Step 0** | `/create/` | Lead capture (name/email/phone) *before* the Creator game |
| **Crest Creator** | `/create/` | 3 HSL pickers + live SVG preview + context switcher + Realisation Moment™ |
| **Brand Story** | `/brand/` | The pasta. The colour. The territory. |
| **Express Interest** | `/interest/` | SA territory map (SVG), territory list, lead capture per territory |
| **Franchise** | `/franchise/` | Investment model, ROI chart, full application form |
| **Community Gallery** | `/gallery/` | Top 10/50, Trending, Newest, A–Z with voting |
| **Curated Picks** | `/seasonal/` | 20 head-office picks + season preview |
| **Realisation Moment** | Modal | See your crest on bag / cup / storefront mockups |

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 + CSS custom properties
- Framer Motion (scroll animations + page transitions)
- Google Fonts: Playfair Display, Inter, JetBrains Mono
- Static export → GitHub Pages via GitHub Actions

## Brand System

| Token | Value |
|-------|-------|
| Navy | `#0A1628` |
| Gold | `#D4A017` |
| Cream | `#F5E6C8` |
| Serif | Playfair Display |
| Sans | Inter |
| Mono | JetBrains Mono |

## Lead Scoring

A globally shared context tracks engagement across pages:

| Action | Points |
|--------|--------|
| Step 0 submitted (name/email) | +10 |
| Creates a crest | +10 |
| Names their crest | +5 |
| Views Realisation Moment | +5 |
| Selects a territory | +10 |
| Expresses interest / waitlist | +10 |
| Submits full application | +20 |
| **Max** | **85** |

Tiers: **Hot** (80+) · **Warm** (60–79) · **Nurture** (40–59) · **New**

## Images

All real brand images are served from the companion repo:
[`targetpraks/papa-pasta-assets`](https://github.com/targetpraks/papa-pasta-assets)

## Run locally

```bash
git clone https://github.com/targetpraks/papa-pasta-fnd.git
cd papa-pasta-fnd
npm install
npm run dev
```

## Build for static export

```bash
npm run build
# output: ./dist (configured in next.config.ts)
```

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on every push to `main`.

To enable:  
Repo → Settings → Pages → Source → **GitHub Actions**

---

**© 2026 Papa Pasta · Infinity Brands**
