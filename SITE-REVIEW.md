# HANA Charter Site — Structure & Improvement Review

A self-contained snapshot of the site as it stands today, plus where it could go next. Written so it can be read on its own (without the codebase) and used as a discussion brief for layout, structure and content improvements.

---

## 1. What this site is

A single-page marketing site for **HANA**, a 42.60 m CRN motor yacht (built Ancona 2008, refit 2024) offered for **Mediterranean charter from €150,000/week**, sleeping **11 guests in 5 cabins**.

- **Stack:** Next.js (App Router) + TypeScript + React, `next/image`, Google fonts (Cormorant Garamond display + Jost body). One long scrolling page; the nav is anchor links to `#sections`.
- **Hosting:** GitHub (`captain-boop/HANA-website`, branch `main`) → Vercel auto-deploy on push.
- **Design language:** oyster-white / ivory → warm greys → graphite, with **champagne gold as the only accent**. No blues. Frosted-glass cards over a continuous warm-gradient backdrop. Subtle scroll-reveal and lift animations.
- **Primary CTA:** `mailto:captain@myhana.com` enquiry + a downloadable HANA-branded PDF brochure.

---

## 2. Current page structure (top → bottom)

| # | Section | Purpose | What's in it now |
|---|---------|---------|------------------|
| — | **TopBar** | Nav | Logo (home) + links: On Board, Cabins, Destinations, Gallery, Crew, Chef, Brochure, IG, TikTok, **Enquire** CTA |
| 1 | **Hero** | First impression | Full-screen background video, centered "hana" wordmark, small spec caption "42.60m · CRN · Ancona", italic tagline, scroll cue |
| 2 | **SpecsStrip** | Instant credibility | 4 stats overlapping the hero: 42.6m / 11 guests / 5 cabins / 2024 refit |
| 3 | **Vessel** | Narrative intro | Lede + body copy describing her lines and character (no heading label now) |
| 4 | **OnBoard** | Hero amenities | 3 image+text rows: Sundeck, Beach Club & Gym, Toys & Water |
| 5 | **Accommodation** | Where you sleep | Lede + berth summary, full-beam master feature card, 4 cabin cards (3 doubles + 1 twin·Pullman) |
| 6 | **Destinations** | Cruising range | "Where she sails" + 5 region cards: French/Italian Riviera, Amalfi & Aeolians, Balearics, Greece & Aegean, Turkish Coast |
| 7 | **Toys** | Watersports | "Bring on the sea" + full toy list (chase tender, jet tender, jet-skis, eFoil, Seabobs, etc.) |
| 8 | **Gallery** | Visual proof | "Inside, room by room" image grid |
| 9 | **Crew** | People | Gated (`#crew`): captains' note + 15-person crew |
| 10 | **Galley** | Food | "A kitchen at the heart of the charter" — two chefs philosophy, dietary note, 3 sample menus |
| 11 | **Social** | Living proof | IG + TikTok cards + IG tile grid |
| 12 | **Specs** | Hard facts | Builder, year, refit, LOA, beam, draft, guests, interior designer, crew |
| 13 | **Enquire** | Conversion | Price "From €150,000/week", season, Enquire + Download Brochure buttons |
| — | **SiteFooter** | Close | Logo, tagline, IG/TikTok handles, "42.60m CRN · Mediterranean Charter" |

---

## 3. Design system in one glance

- **Type:** Cormorant Garamond (`--font-display`) for headings/quotes, Jost (`--font-body`) for text.
- **Color tokens:** `--champagne #a07f3e`, `--champagne-2 #c2a160`, plus ink/oyster/hull warm neutrals. Champagne is the single metal accent.
- **Surfaces:** glass-morphism cards (backdrop blur+saturate), hairline borders, soft shadows; `.lift` hover; `.reveal` scroll-in.
- **Recent direction:** section heading "eyebrow" labels were removed — each section now leads with its `<h2>` (cleaner, less repetitive gold text). Keep it that way.

---

## 4. Strengths (keep these)

1. **Strong, consistent aesthetic** — the warm oyster/champagne palette is distinctive and matches the boat; it doesn't look like a template.
2. **Good narrative arc** — hero → proof → spaces → cabins → where → toys → people → food → enquire is a sensible emotional journey.
3. **Real content depth** — cabins, crew, chef, toys and destinations are all genuinely populated, not lorem ipsum.
4. **Conversion is always one click away** — sticky Enquire CTA + brochure download.
5. **Fast, modern foundation** — Next.js image optimization, static render, light JS.

---

## 5. Improvement opportunities

### A. Information architecture & flow
- **Section order:** consider moving **Gallery** higher (right after OnBoard) — buyers want to *see* her early. Or merge Gallery into the relevant sections so images live next to their context.
- **Specs appears twice** (SpecsStrip at top + full Specs near the end). That's fine, but the bottom Specs block is a dry table right before the emotional close. Consider moving full Specs to a "Details / Downloads" zone with the brochure, so Enquire stays the emotional finish.
- **Crew is gated** (only shows at `#crew`). Decide if that's intentional — a charter buyer often *wants* to meet the crew; hiding it may cost trust. At minimum, surface a teaser.

### B. Content & copy gaps (what charter buyers look for and may not find)
- **Pricing clarity:** "From €150,000/week" — add what's included/excluded (APA, VAT, fuel, delivery), typical APA %, and high/low season bands. This is the #1 question brokers field.
- **Capacity nuance:** 11 guests sleeping / how many cruising; child-friendly note; crew count (15) as a service ratio.
- **Itinerary examples:** a sample 7-day Riviera or Greece itinerary makes the dream concrete.
- **"Why HANA"** differentiator block — 3–4 reasons (the sundeck length, sea-level gym, two chefs, RYA jet-ski training) pulled into a single scannable strip.
- **Availability / calendar** or at least "Enquire for {year} availability".
- **Accolades / press / charter reviews** if any exist — social proof beyond IG.

### C. Conversion / enquiry UX
- The CTA is a raw `mailto:`. Consider a **simple enquiry form** (name, dates, party size, message) → email or a form service. Lower friction, captures structured leads, works on devices with no mail client configured.
- Add the **enquiry email/phone visibly** near the price (some users won't click a button).
- Consider a **broker/central agent** line if charters go through an agency (legal/visibility).

### D. Layout & visual hierarchy
- With the gold eyebrow labels gone, make sure each section's `<h2>` has enough breathing room and clear hierarchy (section title vs sub vs body).
- **Vessel** section now opens straight into a lede with no heading — check it doesn't read as orphaned; it may want a short `<h2>` ("HANA", "The yacht") for rhythm.
- Check vertical spacing consistency between sections after the label removal (some gaps may now feel uneven).

### E. Navigation
- The top nav has 7 text links + 2 icons + CTA — **getting crowded on smaller laptops**. Options: group under fewer items, drop "Brochure" into Enquire, or add a slim mobile menu. Verify it doesn't wrap/overflow at ~1024px.
- Add a visible **mobile hamburger** if not already present (anchor nav on mobile is easy to lose).

### F. Mobile / responsive
- Audit every multi-column grid (cabins 4-up, destinations, gallery, menus 3-up) at 375px and 768px. Confirm the master cabin feature card stacks cleanly and image aspect ratios hold.
- Hero video on mobile: confirm it autoplays muted and isn't a heavy data hit; have a strong poster fallback.

### G. Performance
- Hero video weight — make sure it's compressed and has a poster; consider a shorter loop.
- Confirm all `next/image` `sizes` are accurate so mobile doesn't download desktop-width images.
- Lazy-load below-the-fold galleries.

### H. SEO & metadata
- Page `<title>`, meta description, **Open Graph / Twitter card** image (a hero still) so links shared to brokers/socials look premium.
- **Structured data** (schema.org) — there isn't a perfect "yacht charter" type, but `Product`/`Service` with price and area helps.
- Real **alt text** is mostly good already; keep it descriptive.
- Single-page sites get little keyword surface — consider whether a few crawlable sub-pages (Cabins, Destinations, Charter Rates) would help discovery. Trade-off vs the elegant one-page feel.

### I. Accessibility
- Color contrast: champagne gold on light backgrounds can fail WCAG AA for small text — check.
- Ensure the gated Crew section is reachable by keyboard and screen readers, not just by hash.
- Focus states, reduced-motion preference for the reveal/lift animations.

### J. Trust & legal
- Footer could carry: operating company / central agent, basic terms, and a privacy note (especially if a form collects data).
- Confirm the brochure PDF is fully de-branded and matches the site (it was rebuilt to remove the third-party broker's branding).

---

## 6. Open questions for you (decisions that shape the above)

1. **Bookings:** Direct (you/captain) or through a charter broker/central agent? This affects pricing display, the CTA, and legal footer.
2. **Form vs mailto:** Want a proper enquiry form capturing dates + party size?
3. **Pricing transparency:** How much to show — single "from" price, seasonal bands, or full rate card with APA/VAT notes?
4. **Crew visibility:** Keep crew gated, tease it, or show it openly?
5. **One page vs a few pages:** Stay single-scroll, or split Cabins / Destinations / Rates into crawlable pages for SEO?
6. **Availability:** Do you want to signal seasons/availability, or keep it "enquire only"?

---

## 7. Suggested priority

**Quick wins (high impact, low effort)**
- Add OG/meta + title + share image.
- Add visible contact (email/phone) by the price; clarify what's included.
- Tidy nav crowding + confirm mobile menu.
- Re-check section spacing after the eyebrow-label removal.

**Medium**
- Enquiry form replacing raw mailto.
- "Why HANA" differentiator strip + a sample itinerary.
- Move full Specs into a details/downloads zone; let Enquire be the emotional close.

**Larger**
- Decide one-page vs multi-page (SEO).
- Pricing/rate-card treatment with seasons + APA/VAT.
- Availability signalling.

---

*Snapshot generated from the live codebase. Section names map 1:1 to components in `components/` and the order in `app/page.tsx`. The site deploys via `git push` to `main` (Vercel auto-deploy).*
