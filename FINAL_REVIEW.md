# Redesign Verification

## Checks completed

- `npm run lint` passes with zero warnings.
- `npm run build` completes successfully.
- The production bundle contains only the current React architecture; legacy Sass and icon dependencies were removed.
- Navigation anchors, mobile menu controls, and in-page links were tested locally.
- The mobile layout was checked at a 390 px viewport and has no horizontal overflow.
- The desktop layout was checked at a 1440 px viewport and has no horizontal overflow.
- Reduced-motion styles, visible keyboard focus, semantic landmarks, heading order, and a skip link are included.

## Content maintenance

Edit `src/data/portfolio.js` to change profile details, projects, skills, experience, or contact links. The current project cards intentionally show that a live demo is unavailable rather than linking to an unverified URL.
