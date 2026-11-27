# Portfolio Redesign — Changelog

Complete redesign of yevheniili.netlify.app: layout/UX, then a full
consistency pass, then a production-readiness pass (performance,
accessibility, SEO). No project content, testimonials, or the
recommendation letter were invented — placeholders are clearly marked
and documented below.

---

## Modified files

- `index.html` — real title/meta description, canonical URL, Open Graph,
  Twitter Card, JSON-LD `Person` schema, branded favicons, `theme-color`,
  removed dead font links, added the font provider's recommended `preconnect`.
- `package.json` / `package-lock.json` — removed unused dependencies (see below).
- `src/App.jsx` — added skip-to-content link and a real `<main>` landmark.
- `src/styles/contants.scss` — added shared design tokens (radius, shadow,
  border color, transition, AA-safe text colors).
- `src/styles/global.scss` — fixed a real bug (overlapping media queries
  were shrinking section padding at larger viewports instead of growing
  it); removed 7 dead/unused utility classes.
- `src/styles/app.module.scss` — skip-link styling.
- `src/utils/data.js` — restructured content (see below); removed dead
  `projectExperience` export and its unused icon imports.
- `src/hooks/useOutsideAlerter.jsx` — was an empty stub; implemented.
- `src/components/Header/*` — full redesign, real mobile navigation.
- `src/components/MainSection/*` — full redesign (Hero).
- `src/components/Work/*` — full redesign (Experience).
- `src/components/Portfolio/*` — full redesign (Projects).
- `src/components/People/*` — full redesign (Testimonials).
- `src/components/Footer/*` — full redesign (Contact).

## New files

- `public/favicon.svg`, `public/apple-touch-icon.png`, `public/favicon-32x32.png`
  — branded "YL" monogram favicon set, replacing the generic placeholder icon.
- `public/robots.txt`, `public/sitemap.xml` — basic SEO crawl support.
- `public/_headers` — Netlify security headers (`X-Content-Type-Options`,
  `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`). No CSP —
  see "Known limitations" below.

## Deleted files

- `src/utils/motion.js` — framer-motion variants, orphaned once every
  section was moved to CSS-based transitions.
- `src/assets/react.svg`, `public/vite.svg`, `public/images/vite.svg`,
  `public/images/electron.svg` — default Vite scaffold assets and the old
  placeholder favicon, confirmed unreferenced anywhere in the codebase.
- `.trash/` (entire directory: `About/About.jsx`, `About/About.module.scss`,
  `Hero/Hero.jsx`, `Hero/Hero.module.scss`) — an old, unused "About" page
  and a superseded "Hero" component, found tracked in git at the repo
  root during the final pre-export review. Not excluded by `.gitignore`,
  not imported anywhere — genuine dead code that had been sitting in the
  repository since before this redesign started.

## Removed dependencies

`framer-motion`, `react-slick`, `@emailjs/browser`, `emailjs-com`,
`@fortawesome/free-solid-svg-icons`, `@fortawesome/react-fontawesome` —
all confirmed unused by grepping the entire `src` tree before removal.
No new dependencies were added anywhere in this redesign.

---

## Major UI/UX improvements

- **Fixed a critical bug:** the entire header was `display: none` below
  600px — there was no way to navigate the site on mobile at all. Replaced
  with a real, accessible hamburger menu.
- **Fixed a functional bug:** the "WhatsApp" contact link was actually a
  `tel:` link (opens the phone dialer, not WhatsApp) — now a correct
  `wa.me` link with the same number.
- **Fixed a content bug:** two of six project cards linked to the wrong
  repository (one pointed to a template author's unrelated repo).
- Removed everything that read as "tutorial/template": decorative cursive
  fonts (Agbalumo/Pacifico), a 4-color animated rainbow CV button, a
  glassmorphism floating hero card, a rainbow gradient footer divider, an
  infinitely-pulsing "online" status dot.
- Projects now show real screenshots (previously unused, generic SVG
  icons were shown instead) at a consistent 16:9 ratio across all cards.
- Testimonials rebuilt as a static, accessible responsive grid (no
  carousel), with a distinct featured card for the recommendation letter.
- Hero copy restructured so specialization, years of experience, and core
  tech stack are each independently scannable within the first few seconds
  (per your recruiter-perspective feedback).
- Established one consistent visual system across every section: card
  radius, shadow, hover behavior, icon sizing, section spacing, and
  heading hierarchy (h1 → h2 → h3, no skipped levels) are now uniform
  instead of each component inventing its own values.

## Accessibility improvements

- Skip-to-content link + proper `<main>`/`<header>`/`<footer>` landmarks
  (previously flat, unlabeled `<div>`s).
- Fixed icon-only links with no accessible name (sound/menu toggles,
  Footer contact icons) — all now have real accessible names via visible
  text inside the link or `aria-label`.
- Fixed 2 genuine WCAG AA contrast failures (Work's tenure text ~3.5:1,
  Footer's credit text ~2.8:1) — both now use a shared `$text-muted`
  token at ~7.5:1.
- Full keyboard support for the mobile menu (closes on outside click,
  on link selection, proper `aria-expanded`/`aria-controls`).
- Consistent focus-visible states on every interactive element.

## Performance optimizations

- Removed `react-slick` (and its 2 CDN CSS files) and `framer-motion`
  entirely — cut the production JS bundle from ~321KB to ~159KB
  (gzip: ~102KB → ~51KB).
- Removed 2 further unused dependencies (`@emailjs/*` × 2 aren't used
  anywhere in `src`) and 2 unused FontAwesome packages.
- Fixed the Hero photo (your likely Largest Contentful Paint element)
  being marked `loading="lazy"`, which was actively delaying it.
- Added explicit `width`/`height` to every image to prevent layout shift;
  added `loading="lazy"` correctly to below-the-fold images only.
- Removed ~150 lines of dead/duplicated CSS left over from earlier
  iterations (an entire unused `<table>` block duplicated twice, a
  `.progressbar`/`.circle`/`.line` timeline system, several utility
  classes never referenced anywhere).
- Deliberately did **not** add route-based code splitting — this is a
  single-page site with an already-small bundle; splitting further would
  add request overhead with no measurable benefit.

## SEO improvements

- Went from `<title>YevheniiLi</title>` with zero other metadata to a
  full set: descriptive title, meta description, canonical URL, Open
  Graph tags, Twitter Card, JSON-LD `Person` structured data,
  `robots.txt`, and `sitemap.xml`.
- Branded favicon set (SVG + PNG fallbacks + Apple touch icon) replacing
  a generic placeholder icon.

---

## Known limitations / recommendations before you deploy

These need real content or a live environment to finish — I did not
invent or guess at any of them:

1. **OG/Twitter image** currently reuses your 280×280 profile photo.
   A dedicated 1200×630 banner would render much better when shared.
2. **Live demo URLs** for the three projects are still `null` in
   `data.js` — add them and the "Live Demo" button appears automatically.
3. **Real testimonials + the recommendation letter** are still clearly-
   marked placeholders in `data.js` (`testimonials`, `featuredRecommendation`).
   Old real testimonial photos (`joseph.jpeg`, `obianna.png`, `yulia.jpeg`)
   and other unused images (`about.jpeg`, `cv.png`, `certificate.png`)
   were intentionally **kept** in `public/images/` in case you reuse them.
4. **Verify the WhatsApp number and Telegram handle** in the Footer are
   still current — only the link *format* was fixed, not the underlying
   contact details.
5. **Content-Security-Policy** was intentionally left out of
   `public/_headers` — the Header uses one inline `style` attribute for
   its scroll-shadow effect, and a CSP strict enough to matter could
   block that without a live environment to test against.
6. **Run a real Lighthouse pass once deployed** — all performance/SEO/
   accessibility scores in this project were estimated from code review,
   not measured.

---

**Status: production-ready**, pending the real content listed above and
a live Lighthouse check. Build (`npm run build`) and lint (`eslint src`)
both pass cleanly as of this export.
