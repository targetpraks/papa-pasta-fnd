---
version: alpha
name: Papa Pasta Heritage
description: Architectural minimalism meets journalistic gravitas. A premium franchise recruitment weapon built around the Living Crest™ — where colour means territory and every city has its own identity.
colors:
  primary: "#0A1628"
  secondary: "#3A4F6E"
  tertiary: "#D4A017"
  accent: "#C97B2A"
  neutral: "#F7F5F2"
  cream: "#F5E6C8"
  paper: "#F8F3E7"
  ink: "#0A1628"
  mute: "#6B7A8D"
  line: "#E2DDD0"
  available: "#22C55E"
  discussion: "#F59E0B"
  committed: "#0A1628"
  error: "#DC2626"
  on-primary: "#FFFFFF"
  on-tertiary: "#0A1628"
  on-neutral: "#0A1628"
  on-cream: "#0A1628"
typography:
  display:
    fontFamily: Playfair Display
    fontSize: 80px
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  h1:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  h2:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  h3:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
  body-lg:
    fontFamily: Inter
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.18em
  caption:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.14em
rounded:
  none: 0px
  sm: 6px
  md: 10px
  lg: 14px
  xl: 20px
  pill: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  gutter: 24px
  margin: 32px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
    padding: 14px 32px
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: 14px 32px
  button-gold:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.pill}"
    padding: 14px 32px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: 14px 32px
  card:
    backgroundColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
    padding: 32px
  card-elevated:
    backgroundColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
    padding: 32px
  section-dark:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.cream}"
  kicker:
    typography: "{typography.label-caps}"
    textColor: "{colors.mute}"
---

## Overview

Papa Pasta's visual identity sits at the intersection of **architectural minimalism** and **journalistic gravitas**. The UI should evoke a premium matte finish — the feel of a high-end broadsheet or a contemporary gallery catalogue. Every surface has weight. Every element earns its place.

The Living Crest™ is the gravitational center of the design system. The crest is not a logo — it's a territory marker. The interface exists to drive visitors toward creating their crest, claiming a territory, and applying to franchise. All visual decisions serve this conversion funnel.

## Colors

The palette is rooted in **high-contrast neutrals** anchored by a deep midnight ink, with a single warm accent family (gold/amber) that signals interactivity and premium positioning.

- **Primary (#0A1628):** Deep midnight ink. Used for headlines, body backgrounds in dark sections, and the dominant surface in navigation and CTAs. This is the colour of certainty and permanence.
- **Secondary (#3A4F6E):** Slate blue for secondary text, hover states, and muted interactive elements. Warmer than pure grey, more sophisticated than charcoal.
- **Tertiary (#D4A017):** Rich gold — the brand's signature accent. Used *exclusively* for primary calls-to-action in dark contexts, highlights, and the gold elements of the crest. Never dilute it.
- **Accent (#C97B2A):** Warm amber for inline emphasis (italic text), hover states on gold, and seasonal warmth. Tertiary's partner.
- **Neutral (#F7F5F2):** Warm limestone. The default page background. Softer than #FFFFFF, warmer than #FAFAFA. Never use pure white as a background.
- **Cream (#F5E6C8):** Heritage parchment. Dark-section text colour and premium background wash. Used in footer and inverted sections.
- **Paper (#F8F3E7):** Off-white for card backgrounds and subtle surfaces.

## Typography

The type system uses **three distinct voices** working in concert:

- **Playfair Display (display/headlines):** An elegant high-contrast serif that conveys institutional authority and editorial gravitas. Always used at extra-bold (800) weights for maximum impact. Used for all headings, hero text, and the emotional moments of the page.
- **Inter (body/UI):** A highly legible humanist sans-serif optimized for screens. Handles all body text, labels, descriptions, and interface elements. Always with `font-feature-settings: "ss01", "cv11"` for refined typography.
- **JetBrains Mono (data/labels):** A technical monospace for labels, micro-data, territorial markers, kickers, and metadata. Its geometric construction evokes precision. Always uppercase with generous letter-spacing for that data-driven feel.

## Layout

The layout follows a **Fixed-Max-Width Grid** model at 1280px (content) / 1400px (full-bleed). An 8px spacing scale with 4px micro-steps ensures consistent rhythm. Generous internal padding (24–32px) on cards creates a sense of breath and premium care.

Key layout principles:
- Never crowd the crest. Give it room to breathe.
- Dark sections use `#0A1628` backgrounds with `#F5E6C8` text.
- Light sections use `#F8F3E7` or `#FFFFFF` surfaces.
- Every section transition should feel intentional — alternating light and dark creates rhythm.
- Cards float on subtle borders and shadows, never harsh lines.

## Elevation & Depth

Depth is achieved through **Tonal Layers** and **Subtle Shadows** rather than heavy drop shadows. Content cards sit on pure white with razor-thin borders. Dark sections create depth by inverting the entire surface. The gold accent creates focal points that pull the eye.

Shadow hierarchy:
- Level 0: No shadow (flat surfaces, dark backgrounds)
- Level 1: `0 1px 2px rgba(10,22,40,0.06)` (cards at rest)
- Level 2: `0 4px 12px rgba(10,22,40,0.08)` (cards on hover)
- Level 3: `0 8px 24px rgba(10,22,40,0.12)` (modals, dropdowns)

## Shapes

The shape language uses **Architectural Softness** — rounded but not pillowy. Corner radii are kept restrained (6–14px for most elements) to maintain a sense of engineered precision. Only buttons and tags use full pill radius.

## Components

CTAs and buttons follow strict hierarchy:
- **Primary:** Midnight navy background, white text, full pill radius. For the single most important action per screen.
- **Secondary:** Ghost/transparent with subtle border. For secondary actions.
- **Gold:** Rich gold background with navy text. Used *only* in dark contexts where the primary navy would be invisible.
- **Inverted:** Cream/light border on dark backgrounds.

Cards use white backgrounds with paper-thin borders and hover lift. Section kickers use the monospace label style with a 24px horizontal rule prefix.

## Do's and Don'ts

- Do use the primary colour only for the single most important action per screen
- Don't use gold (#D4A017) on light backgrounds — it fails contrast. Use navy instead.
- Do maintain WCAG AA contrast ratios (4.5:1 for normal text)
- Don't use more than two font families on the same visual line
- Do give the Crest generous whitespace — it's the brand's gravitational center
- Don't use pure white (#FFFFFF) as a page background — always prefer paper (#F8F3E7) or neutral (#F7F5F2)
- Do alternate light and dark sections to create visual rhythm
- Don't add shadows to elements on dark backgrounds
- Do use JetBrains Mono only for labels, captions, and data — never for body text
- Don't mix the seasonal palette accent colours outside of the season context