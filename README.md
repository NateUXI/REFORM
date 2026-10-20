# Reform

The Reform landing page, converted from a Framer export into a Next.js (App Router) + TypeScript project.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npm run typecheck
```

## Layout

```
src/
  app/
    layout.tsx        page metadata + site frame (nav, footer, wave artwork)
    page.tsx          the home page: Hero → CanvasFeatures → DesktopShowcase → CreateAnywhere → Closing
    framer.css        stylesheet Framer generated (class names like .framer-1o752sx)
    globals.css       your styles + replacements for what Framer's runtime used to do
    fonts/            self-hosted Inter (see Inter-LICENSE.txt)
  components/         one file per section, plus Navigation, CtaButton, BackgroundImage
  lib/assets.ts       every image URL, in one place
```

## Things to know

- **Class names are still Framer's.** The markup was converted as-is so it renders exactly like the original. Rename and simplify them as you turn sections into real components.
- **Images still load from Framer's CDN** (`framerusercontent.com`). See the note at the top of `src/lib/assets.ts` to self-host them.
- **`/get-reform` doesn't exist yet.** The buttons link there (it was a separate Framer page that wasn't in the export).
- **Rebuilt by hand** because Framer's runtime isn't included: the hero phone slide-ins and wave entrance (CSS animations in `globals.css` / `LayeredWaves.module.css`), the desktop carousel, the mountain→studio fade, and the nav menu. Their exact original timings and menu contents weren't in the export, so tweak them to taste.
