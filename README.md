# Akshaya Kumar T — Portfolio (Anthropic-Inspired Edition)

A single-page, editorial-style portfolio inspired by the calm, minimal, large-typography feel of the Anthropic website — built entirely from Akshay Kumar T's resume. No companies, dates, skills, or achievements were invented.

## Signature moment
The hero name "AKSHAY KUMAR" fills the screen on load. As you scroll, it smoothly shrinks, drifts upward, and settles — while the sticky navigation bar crossfades in and takes over, giving the name a natural, cinematic transition into the header logo. Built with Framer Motion's `useScroll` + `useTransform` (scroll-linked, not timed), so it always tracks your scroll position exactly.

## Stack
- React 18 + TypeScript + Vite
- Tailwind CSS (warm enterprise palette: `#F5F1E8` canvas, `#D97706` / `#8B5E3C` accents — no blue, no neon, no gradients beyond a single subtle text gradient)
- Framer Motion (scroll-linked hero, scroll reveals, hover states)
- Lucide icons

## Sections (single scrolling page)
Hero → About → Experience → Skills → Projects → Certifications → Education → Contact

## Run locally
```bash
npm install
npm run dev       # http://localhost:5173
```

## Production build
```bash
npm run build      # outputs to /dist
npm run preview
```

## Notes
- Skill cards show a short "context" line (e.g. "Applied daily as Oracle Apps DBA at CTS") grounded in where each skill appears in the resume, instead of an invented numeric proficiency score.
- Project cards' "Live Demo" and "Case Study" buttons are disabled since the source resume doesn't include those links — swap in real URLs whenever you have them.
- The Contact page's "Download Resume" button links to `public/Akshaya_Kumar_T_Resume.pdf`.
- Deploy to Vercel/Netlify: build command `npm run build`, output directory `dist`.
