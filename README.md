# Oluwaseyi Aina — Portfolio

A single-page portfolio built with React 19, Vite, and Tailwind CSS v4.
Static site, no backend, no database, no user data collected.

## Running it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Edit `src/data/portfolioData.js` — the `PROFILE`,
`EXPERIENCE`, `PROJECTS`, `SKILLS`, and `CERTS` constants hold all the content.
Everything else in `src/components/` is presentation.

## Building for production

```bash
npm run build   # outputs static files to dist/
npm run preview # serve the production build locally to sanity-check it
```

`npm run preview` is the closest thing to "view it before deploying" without
actually deploying: it serves the real, minified production bundle from
`dist/` on your machine.

## Deploying

This is a static site — any static host works. Two are pre-configured:

**Vercel**
1. Push this repo to GitHub.
2. Import it at vercel.com → New Project.
3. Framework preset: Vite. No environment variables needed.
4. `vercel.json` in this repo already sets the production security headers
   (see below) — Vercel applies them automatically.

**Netlify**
1. Push this repo to GitHub.
2. New site from Git → pick the repo.
3. Build command `npm run build`, publish directory `dist` (already set in
   `netlify.toml`, so the defaults just work).

**GitHub Pages / other static hosts**
Works too (`npm run build`, upload `dist/`), but GitHub Pages cannot set
custom HTTP response headers, so the CSP/HSTS/etc. in `vercel.json` /
`netlify.toml` won't apply there — only the weaker `<meta>` CSP fallback in
`index.html` will. Prefer Vercel, Netlify, or Cloudflare Pages (which reads
`public/_headers`, also included) if the header-based hardening matters to
you.

### Before you deploy
- Replace `https://your-domain-here.example` in `index.html` (canonical URL,
  Open Graph tags) and `public/robots.txt` with your real domain.
- Add an `og-image.png` (1200×630) to `public/` for link previews, or remove
  the `og:image` tag if you'd rather skip it.
- Fill in `PROFILE.linkedin` in `src/App.jsx` if you want it in Contact.

## Security posture

This is a static, backend-free site, so the realistic attack surface is
small — there's no server, database, auth, or form submission to compromise.
What's in place anyway:

- **Content-Security-Policy** (via `vercel.json` / `netlify.toml` /
  `public/_headers`, with a `<meta>` fallback in `index.html`): scripts only
  from same-origin, no inline scripts, no `eval`, styles limited to
  same-origin + Google Fonts, `frame-ancestors 'none'` to block clickjacking,
  `object-src 'none'`.
- **HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy,
  Permissions-Policy** set on every response.
- **No `dangerouslySetInnerHTML` with dynamic content anywhere.** The one
  `<style>` block in `App.jsx` is a static string, not user input. The
  in-page terminal renders all typed input as plain React text (React
  escapes this automatically), so it cannot be used to inject markup or
  scripts — it only ever matches against a fixed, hardcoded command list.
- **No secrets, API keys, or credentials in the codebase** — there's nothing
  to leak because there's nothing calling a backend.
- **Reproducible builds**: `npm ci` in CI installs exactly what's in
  `package-lock.json`, not "whatever's newest."
- **Automated dependency patching**: `.github/dependabot.yml` opens a PR
  weekly for outdated or vulnerable dependencies.
- **CI on every push/PR** (`.github/workflows/ci.yml`): lints, builds, and
  runs `npm audit`, so a broken build or a newly-disclosed vulnerability
  shows up before it reaches production, not after.
- **External links** (`target="_blank"`) use `rel="noopener noreferrer"` to
  prevent the linked page from gaining a reference to `window.opener`.

Two things worth knowing that are *not* vulnerabilities but come up when
people ask about "hacking a portfolio site":
- `mailto:` / `tel:` / GitHub links just hand off to the OS or browser —
  there's no form POST-ing data anywhere for someone to intercept.
- The `Copy` buttons in Contact use `navigator.clipboard`, which only works
  in a secure context (HTTPS or localhost) and only copies static text you
  already wrote — it can't be pointed at anything else.

If you later add a real contact form or any endpoint that accepts input,
that's the point at which you'd need server-side validation, rate limiting,
and a spam/abuse strategy — none of that applies to the site as it stands.

## Tech stack

- React 19 + Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite`, zero extra config)
- `lucide-react` for icons
- No runtime dependencies beyond React itself — smaller dependency tree,
  smaller attack surface, fewer things to go stale.

## Project structure

```
src/
  data/
    portfolioData.js  — profile, experience, projects, skills, and certs data
  components/
    Nav.jsx           — accessible navigation with scroll-spy and mobile drawer
    Hero.jsx          — hero section with accessible typewriter effect
    Terminal.jsx      — interactive CLI with command history & QA test suite runner
    About.jsx         — about story and background
    Experience.jsx    — work timeline and education
    Work.jsx          — project showcase with accessible expand/collapse cards
    ProjectCard.jsx   — interactive card with 3D tilt and link protection
    Skills.jsx        — skills categorized by domain + certifications
    Contact.jsx       — accessible copy-to-clipboard contact rows with LinkedIn
    Footer.jsx        — footer with floating back-to-top button
    Icons.jsx         — brand SVG icons (GitHub, LinkedIn)
    Reveal.jsx        — scroll-triggered animation with reduced-motion support
    SectionLabel.jsx  — numbered section header label
  App.jsx             — root layout component
  main.jsx            — React entry point
  index.css           — Tailwind v4 theme, global resets, and accessible utilities
public/
  favicon.svg, og-image.png, robots.txt, _headers
vercel.json / netlify.toml — hosting config + security headers
.github/                    — CI + Dependabot
```
