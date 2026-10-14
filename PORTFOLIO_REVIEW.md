# Seyi Aina — Portfolio Codebase & Content Review

This single document aggregates the full architecture, single-source-of-truth data, copy, and React components for Oluwaseyi Aina's personal portfolio.

---

## Table of Contents
1. [Project Overview & Tech Stack](#project-overview--tech-stack)
2. [Configuration & Metadata](#configuration--metadata)
   - `package.json`
   - `index.html`
3. [Single Source of Truth: Data & Copy](#single-source-of-truth-data--copy)
   - `src/data/portfolioData.js`
4. [Application Structure & Styling](#application-structure--styling)
   - `src/main.jsx`
   - `src/App.jsx`
   - `src/index.css`
5. [Component Implementations](#component-implementations)
   - `src/components/Nav.jsx`
   - `src/components/Hero.jsx`
   - `src/components/About.jsx`
   - `src/components/Experience.jsx`
   - `src/components/Work.jsx`
   - `src/components/ProjectCard.jsx`
   - `src/components/Skills.jsx`
   - `src/components/Terminal.jsx`
   - `src/components/Contact.jsx`
   - `src/components/Footer.jsx`
   - `src/components/SectionLabel.jsx`
   - `src/components/Reveal.jsx`
   - `src/components/Icons.jsx`
   - `src/components/SpaceBackground.jsx`

---

## Project Overview & Tech Stack
- **Role**: Software Developer (MERN Stack, Backend & Systems, Technical Support).
- **Location**: Lagos, Nigeria.
- **Frontend Framework**: React 19 + Vite 8.
- **Styling**: Tailwind CSS v4 + Custom Design Tokens (Deep Space dark mode palette: `#0A0E14`, Teal `#5CD1B8`, Brass `#D9A54B`).
- **Deployment**: Vercel (Production URL: `https://seyi-portfolio-liard.vercel.app/`).
- **Icons**: Lucide React.

---

## Configuration & Metadata

### `package.json`
```json
{
  "name": "seyi-portfolio",
  "private": true,
  "version": "1.0.0",
  "description": "Personal portfolio for Oluwaseyi Aina — backend developer & QA engineer.",
  "type": "module",
  "engines": {
    "node": ">=20"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview",
    "audit": "npm audit --audit-level=high"
  },
  "dependencies": {
    "lucide-react": "^1.45.0",
    "react": "^19.2.8",
    "react-dom": "^19.2.8"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "oxlint": "^1.81.0",
    "tailwindcss": "^4.3.3",
    "vite": "^8.3.0"
  }
}
```

### `index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Oluwaseyi Aina — Software Developer</title>
    <meta
      name="description"
      content="Oluwaseyi Aina is a software developer in Lagos, Nigeria, building full-stack MERN applications, multitenant SaaS platforms, and secure REST APIs."
    />
    <meta name="author" content="Oluwaseyi Aina" />
    <meta name="theme-color" content="#000000" />

    <!-- Open Graph / social preview -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Oluwaseyi Aina — Software Developer" />
    <meta
      property="og:description"
      content="Software Developer in Lagos, Nigeria. Full-stack MERN applications, multitenant SaaS platforms, and secure REST APIs."
    />
    <meta property="og:image" content="/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Oluwaseyi Aina — Software Developer" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Oluwaseyi Aina — Software Developer" />
    <meta
      name="twitter:description"
      content="Software Developer in Lagos, Nigeria. Full-stack MERN applications, multitenant SaaS platforms, and secure REST APIs."
    />
    <meta name="twitter:image" content="/og-image.png" />

    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/favicon.svg" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=JetBrains+Mono:wght@400;500;700&display=swap"
    />

    <!-- Fallback CSP via meta tag for hosts without custom header support -->
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'"
    />

    <!-- Structured Data (JSON-LD) for Search Engines -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Oluwaseyi Aina",
        "jobTitle": ["Software Developer", "Backend Developer"],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lagos",
          "addressCountry": "Nigeria"
        },
        "url": "https://github.com/Seyiiii",
        "sameAs": [
          "https://github.com/Seyiiii",
          "https://www.linkedin.com/in/oluwaseyiaina/"
        ],
        "knowsAbout": [
          "Node.js",
          "Express.js",
          "MongoDB",
          "React",
          "MERN Stack",
          "REST APIs",
          "Role-Based Access Control",
          "Physics"
        ]
      }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## Single Source of Truth: Data & Copy

### `src/data/portfolioData.js`
```javascript
export const C = {
  bg: "#0A0E14",
  bgAlt: "#0E141C",
  panel: "#121A24",
  panelBorder: "#223142",
  ink: "#E8EDF3",
  inkSoft: "#93A2B3",
  inkFaint: "#7E91A6", // WCAG AA compliant contrast (>4.5:1 against #0A0E14)
  brass: "#D9A54B",
  brassSoft: "#E8C583",
  teal: "#5CD1B8",
  rust: "#E1746A",
};

export const PROFILE = {
  name: "Oluwaseyi Aina",
  initials: "OA",
  role: "Software Developer",
  roleSecondary: "Backend & Systems",
  roles: [
    "Software Developer",
    "Full-Stack MERN Developer",
    "Physics Graduate",
    "REST API & Systems Builder",
  ],
  location: "Lagos, Nigeria",
  email: "ainaseyim@gmail.com",
  phone: "+234 906 073 1501",
  github: "https://github.com/Seyiiii",
  githubHandle: "github.com/Seyiiii",
  linkedin: "https://www.linkedin.com/in/oluwaseyiaina/",
  linkedinHandle: "linkedin.com/in/oluwaseyiaina",
  currentRole: "Technical Support at DVWorkers",
  status: "Software Developer · active at DVWorkers",
  resumeUrl: "/Oluwaseyi_Aina_Resume.pdf",
  bio: "Impact-driven Software Developer with hands-on experience building and deploying full-stack MERN applications, multitenant SaaS platforms, and secure REST APIs. Physics graduate turned software engineer applying first-principles reasoning to backend architecture, database design, and debugging.",
};

export const NAV_LINKS = [
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Work", href: "work" },
  { name: "Skills", href: "skills" },
  { name: "Contact", href: "contact" },
];

export const EXPERIENCE = [
  {
    date: "2026 — PRESENT",
    role: "Technical Support",
    org: "DVWorkers",
    meta: "Lagos, Nigeria",
    points: [
      "Technical support for a Lagos blue-collar job marketplace startup, learning the system architecture, hosting and codebase from the platform development team.",
      "Resolving bugs, maintaining technical documentation and monitoring AWS infrastructure usage.",
    ],
  },
  {
    date: "JUL — NOV 2024",
    role: "Project Engineer (Intern)",
    org: "Obitech Nig Ltd",
    meta: "Lagos, Nigeria",
    points: [
      "Assisted senior engineers with project requirements, planning and material/equipment estimations.",
      "Supported cross-functional coordination and documentation on active engineering projects.",
    ],
  },
  {
    date: "FEB — MAY 2026",
    role: "Backend Development Bootcamp",
    org: "TS Academy",
    meta: "Lagos, Nigeria · Intensive Fellowship",
    points: [
      "Built the Candidate Management module on a seven-person capstone team for a multitenant SaaS CBT platform.",
      "Built a full-stack MERN inventory and order-management platform with five-tier role-based access control, Cloudinary image uploads, a cart-and-order pipeline, real-time stock validation, and audit logging.",
    ],
  },
  {
    date: "JUL 2022 — SEP 2025",
    role: "Bachelor of Science (BSc), Physics",
    org: "Lagos State University",
    meta: "Lagos, Nigeria · Education",
    points: [
      "Graduated with a physics background before moving into software engineering — the same instinct for tracing a system back to first principles now informs how I debug, model data, and test.",
    ],
  },
];

export const PROJECTS = [
  {
    status: "LIVE",
    statusColor: C.teal,
    title: "Seyi Inventory System",
    category: "Personal Project — Deployed (2025)",
    description:
      "A full-stack MERN inventory and order management platform with a five-tier RBAC system covering Admin, Manager, Staff, Auditor, and Viewer roles. Features Cloudinary image uploads, cart system, order flow with real-time stock validation, audit logging, and Nodemailer transactional notifications.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Nodemailer", "React", "Render", "Vercel"],
    link: "https://seyi-inventory-system.vercel.app/",
    linkLabel: "seyi-inventory-system.vercel.app",
    points: [
      "Built a full-stack MERN inventory and order management platform with five-tier RBAC covering Admin, Manager, Staff, Auditor, and Viewer roles.",
      "Implemented product CRUD with Cloudinary uploads, cart system, and real-time stock validation.",
      "Deployed frontend on Vercel and backend on Render; integrated Nodemailer for transactional email notifications.",
    ],
  },
  {
    status: "CAPSTONE",
    statusColor: C.rust,
    title: "Multitenant CBT Platform",
    category: "TS Academy — Group Capstone Project (2026)",
    description:
      "A group capstone project: a multitenant computer-based testing SaaS platform. Built the Candidate Management module in a seven-person squad with bulk candidate registration and strict tenant data isolation enforced via tenantId indexing.",
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "GitHub Actions", "REST APIs"],
    link: null,
    linkLabel: "Team Capstone Project",
    points: [
      "Built Candidate Management module in a 7-person team: bulk registration, group administration, and strict tenant isolation via tenantId indexing.",
      "Contributed backend services, controllers, and routes; collaborated through Agile sprint cycles, code reviews, and Git workflows.",
    ],
  },
];

export const SKILLS = [
  {
    group: "Backend Development",
    items: ["Node.js", "Express.js", "REST API Design", "MVC Architecture", "JWT", "RBAC", "Multitenant SaaS"],
  },
  {
    group: "Frontend Development",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "Mongoose", "PostgreSQL"],
  },
  {
    group: "Cloud & DevOps",
    items: ["Cloudinary", "Render", "Vercel", "Nodemailer"],
  },
  {
    group: "Tools & Workflow",
    items: ["Git", "GitHub", "Postman", "Linux CLI", "Agile/Scrum", "Code Reviews"],
  },
  {
    group: "Languages",
    items: ["JavaScript", "Ruby", "HTML", "CSS"],
  },
];

export const CERTS = [
  { name: "Microsoft Certified: GitHub Foundations", date: "Jan 2026" },
  { name: "Alison Certified: Ruby Intermediate", date: "Nov 2025" },
];
```

---

## Application Structure & Styling

### `src/main.jsx`
```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### `src/App.jsx`
```javascript
import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SpaceBackground from "./components/SpaceBackground";
import { C } from "./data/portfolioData";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: C.bg, color: C.ink }}>
      <SpaceBackground />
      <div className="relative z-10">
        <Nav />
        <main id="main-content" tabIndex={-1} className="outline-none">
          <Hero />
          <About />
          <Experience />
          <Work />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
```

### `src/index.css`
```css
@import "tailwindcss";

@theme {
  --color-bg: #0A0E14;
  --color-bg-alt: #0E141C;
  --color-panel: #121A24;
  --color-panel-border: #223142;
  --color-ink: #E8EDF3;
  --color-ink-soft: #93A2B3;
  --color-ink-faint: #7E91A6;
  --color-brass: #D9A54B;
  --color-brass-soft: #E8C583;
  --color-teal: #5CD1B8;
  --color-rust: #E1746A;

  --font-serif: "Source Serif 4", Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  min-height: 100%;
}

body,
#root {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background-color: var(--color-bg);
  color: var(--color-ink);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: rgba(92, 209, 184, 0.25);
  color: #E8EDF3;
}

/* Custom Scrollbars */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--color-panel-border);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-ink-faint);
}

/* Accessible focus ring */
a:focus-visible,
button:focus-visible,
input:focus-visible {
  outline: 2px solid var(--color-teal);
  outline-offset: 2px;
}

/* Cursor Blink Animation */
.blink-cursor {
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

/* Screen reader only utility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

@media (prefers-reduced-motion: reduce) {
  .blink-cursor {
    animation: none;
  }
  html {
    scroll-behavior: auto;
  }
}
```

---

## Component Implementations

### `src/components/Nav.jsx`
```javascript
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PROFILE, NAV_LINKS, C } from "../data/portfolioData";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.href)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded focus:font-semibold focus:shadow-lg focus:outline-none"
        style={{
          background: C.teal,
          color: C.bg,
          fontFamily: "var(--font-mono)",
        }}
      >
        Skip to main content
      </a>

      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10, 14, 20, 0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: `1px solid ${scrolled ? C.panelBorder : "transparent"}`,
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
            <span
              className="flex items-center justify-center w-9 h-9 rounded"
              style={{
                border: `1px solid ${C.inkSoft}`,
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: C.ink,
                fontWeight: 600,
              }}
            >
              {PROFILE.initials}
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a
                key={l.name}
                href={`#${l.href}`}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: active === l.href ? C.teal : C.inkSoft,
                  borderBottom: active === l.href ? `1px solid ${C.teal}` : "1px solid transparent",
                  paddingBottom: 3,
                  transition: "color 0.2s, border-color 0.2s",
                }}
                className="hover:text-white"
              >
                {l.name}
              </a>
            ))}
            <a
              href={`mailto:${PROFILE.email}`}
              className="px-4 py-2 rounded transition-opacity hover:opacity-90"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                background: C.teal,
                color: C.bg,
                fontWeight: 600,
              }}
            >
              Say hello
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            className="md:hidden cursor-pointer"
            style={{ color: C.ink }}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div
            className="md:hidden px-6 pb-6 flex flex-col gap-4"
            style={{ background: C.bg, borderBottom: `1px solid ${C.panelBorder}` }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.name}
                href={`#${l.href}`}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 14,
                  color: active === l.href ? C.teal : C.ink,
                }}
              >
                {l.name}
              </a>
            ))}
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-center py-2.5 rounded font-semibold mt-2"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                background: C.teal,
                color: C.bg,
              }}
            >
              Say hello
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
```

### `src/components/Hero.jsx`
```javascript
import React, { useState, useEffect } from "react";
import { Mail, FileText } from "lucide-react";
import { PROFILE, C } from "../data/portfolioData";
import Terminal from "./Terminal";

const TypewriterRole = ({ words }) => {
  const [text, setText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const current = words[wordIndex % words.length];
    const speed = deleting ? 35 : 70;
    const pause = 1400;

    let timeout;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)));
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, prefersReducedMotion]);

  return (
    <span className="relative">
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true" style={{ color: C.teal }}>
        {prefersReducedMotion ? words[0] : text}
        {!prefersReducedMotion && <span className="blink-cursor">|</span>}
      </span>
    </span>
  );
};

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${C.panelBorder}33 1px, transparent 1px), linear-gradient(90deg, ${C.panelBorder}33 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, black 65%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent)",
        }}
      />
      {/* Subtle radial glow */}
      <div
        className="absolute -top-24 -right-24 rounded-full pointer-events-none"
        style={{
          width: 420,
          height: 420,
          background: `radial-gradient(circle, ${C.teal}20, transparent 70%)`,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-start relative z-10">
        <div className="md:col-span-3">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              color: C.brass,
              fontSize: 13,
            }}
            className="mb-4"
          >
            {PROFILE.location} · available on request
          </p>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              color: C.ink,
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              lineHeight: 1.1,
              fontWeight: 600,
            }}
          >
            {PROFILE.name}.
          </h1>

          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
              marginTop: 16,
              color: C.inkSoft,
              minHeight: 32,
            }}
          >
            <TypewriterRole words={PROFILE.roles} />
          </div>

          <p
            style={{
              color: C.inkSoft,
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              lineHeight: 1.7,
              marginTop: 20,
              maxWidth: "34rem",
            }}
          >
            I build full-stack MERN applications and multitenant SaaS platforms, and I spend just as much time proving they actually work: designing test cases, validating APIs, and tracking down edge-case bugs.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#work"
              className="px-5 py-3 rounded font-semibold transition-transform hover:-translate-y-0.5"
              style={{
                background: C.teal,
                color: C.bg,
                fontFamily: "var(--font-sans)",
                fontSize: 14,
              }}
            >
              See the work
            </a>

            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded font-medium flex items-center gap-2 transition-transform hover:-translate-y-0.5"
              style={{
                border: `1px solid ${C.brassSoft}55`,
                background: `${C.brass}14`,
                color: C.brassSoft,
                fontFamily: "var(--font-sans)",
                fontSize: 14,
              }}
            >
              <FileText size={16} aria-hidden="true" /> View Resume (PDF)
            </a>

            <a
              href={`mailto:${PROFILE.email}`}
              className="px-5 py-3 rounded font-medium flex items-center gap-2 transition-colors hover:border-teal"
              style={{
                border: `1px solid ${C.panelBorder}`,
                color: C.ink,
                fontFamily: "var(--font-sans)",
                fontSize: 14,
              }}
            >
              <Mail size={16} /> Email me
            </a>
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: C.inkFaint,
              marginTop: 28,
            }}
          >
            psst — the terminal on the right actually runs. try &ldquo;help&rdquo;.
          </p>
        </div>

        <div className="md:col-span-2">
          <Terminal />
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

### `src/components/About.jsx`
```javascript
import React from "react";
import { C } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export const About = () => (
  <section
    id="about"
    className="py-24 relative"
    style={{
      background: "rgba(14, 20, 28, 0.76)",
      borderTop: `1px solid ${C.panelBorder}44`,
      borderBottom: `1px solid ${C.panelBorder}44`,
    }}
  >
    <div className="max-w-3xl mx-auto px-6">
      <Reveal>
        <SectionLabel n="01">ABOUT</SectionLabel>
      </Reveal>
      <Reveal delay={100}>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            color: C.inkSoft,
            fontSize: 17,
            lineHeight: 1.8,
          }}
          className="space-y-5"
        >
          <p>
            I came into software through physics, not the other way round — three years at Lagos State
            University spent measuring things carefully and asking why a result didn&apos;t match the
            model. That habit carried over almost exactly: I still want to know why a system behaves the
            way it does, not just that it does.
          </p>
          <p>
            A backend development bootcamp at TS Academy turned that instinct into the MERN stack —
            Node.js, Express, MongoDB, and React — and a seven-person capstone project gave me my first
            real multitenant system to reason about and architect.
          </p>
          <p>
            Today I work in Technical Support at DVWorkers, a Lagos-based blue-collar job marketplace,
            learning the system architecture and codebase from the platform development team, resolving
            bugs, maintaining technical documentation, and monitoring AWS infrastructure usage.
          </p>
          <p>
            Based in Lagos, Nigeria, I am actively building production-grade software and exploring
            modern backend architectures, database optimizations, and cloud deployments.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default About;
```

### `src/components/Experience.jsx`
```javascript
import React from "react";
import { EXPERIENCE, C } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export const Experience = () => (
  <section id="experience" className="py-24 relative" style={{ background: "rgba(10, 14, 20, 0.62)" }}>
    <div className="max-w-3xl mx-auto px-6">
      <Reveal>
        <SectionLabel n="02">EXPERIENCE</SectionLabel>
      </Reveal>

      {/* Timeline container with clear card separation */}
      <div
        className="relative pl-6 sm:pl-8 space-y-10 sm:space-y-12"
        style={{ borderLeft: `2px solid ${C.panelBorder}` }}
      >
        {EXPERIENCE.map((e, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="relative">
              {/* Timeline Indicator Node */}
              <span
                className="absolute rounded-full"
                style={{
                  width: i === 0 ? 12 : 10,
                  height: i === 0 ? 12 : 10,
                  left: i === 0 ? -31 : -30,
                  top: 24,
                  background: i === 0 ? C.teal : C.brass,
                  boxShadow: i === 0 ? `0 0 10px ${C.teal}88` : `0 0 6px ${C.brass}66`,
                }}
                aria-hidden="true"
              />

              {/* Distinct Milestone Card Container */}
              <div
                className="rounded-xl p-6 sm:p-7 transition-all duration-200"
                style={{
                  background: "rgba(18, 26, 36, 0.75)",
                  border: `1px solid ${C.panelBorder}`,
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.45)",
                }}
                onMouseEnter={(el) => (el.currentTarget.style.borderColor = `${C.teal}66`)}
                onMouseLeave={(el) => (el.currentTarget.style.borderColor = C.panelBorder)}
              >
                {/* Meta Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className="px-2.5 py-1 rounded text-xs font-mono font-semibold"
                    style={{
                      background: i === 0 ? `${C.teal}18` : `${C.brass}15`,
                      color: i === 0 ? C.teal : C.brass,
                      border: `1px solid ${i === 0 ? C.teal : C.brass}35`,
                    }}
                  >
                    {e.date}
                  </span>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: C.inkFaint,
                    }}
                  >
                    {e.meta}
                  </span>
                </div>

                {/* Role and Organization */}
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: C.ink,
                    fontSize: "clamp(1.25rem, 2.5vw, 1.45rem)",
                    fontWeight: 600,
                    marginTop: 12,
                    lineHeight: 1.3,
                  }}
                >
                  {e.role} <span style={{ color: C.teal }}>· {e.org}</span>
                </h3>

                {/* Subtle internal divider */}
                <div
                  className="my-4 h-px"
                  style={{ background: `${C.panelBorder}66` }}
                  aria-hidden="true"
                />

                {/* Key Points & Contributions */}
                <ul className="space-y-3">
                  {e.points.map((p, j) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: C.inkSoft,
                        fontSize: 15.5,
                        lineHeight: 1.7,
                      }}
                      className="flex gap-3 items-start"
                    >
                      <span
                        style={{ color: i === 0 ? C.teal : C.brass, marginTop: 1 }}
                        aria-hidden="true"
                      >
                        —
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
```

### `src/components/Work.jsx`
```javascript
import React from "react";
import { PROJECTS, C } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import ProjectCard from "./ProjectCard";

export const Work = () => (
  <section
    id="work"
    className="py-24 relative"
    style={{
      background: "rgba(14, 20, 28, 0.76)",
      borderTop: `1px solid ${C.panelBorder}44`,
      borderBottom: `1px solid ${C.panelBorder}44`,
    }}
  >
    <div className="max-w-3xl mx-auto px-6">
      <Reveal>
        <SectionLabel n="03">SELECTED WORK</SectionLabel>
      </Reveal>
      <div className="space-y-6">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: C.inkFaint,
          marginTop: 20,
        }}
      >
        click a card to expand it
      </p>
    </div>
  </section>
);

export default Work;
```

### `src/components/ProjectCard.jsx`
```javascript
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { C } from "../data/portfolioData";

export const Tag = ({ children, color = C.teal }) => (
  <span
    className="inline-block px-2 py-1 rounded"
    style={{
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color,
      border: `1px solid ${color}55`,
      background: `${color}14`,
    }}
  >
    {children}
  </span>
);

export const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHoverable, setIsHoverable] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  });
  const cardRef = useRef(null);
  const panelId = `panel-${project.title.toLowerCase().replace(/\s+/g, "-")}`;

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const handler = (e) => setIsHoverable(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const onMouseMove = (e) => {
    if (!isHoverable || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };

  const onMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="rounded-lg overflow-hidden"
      style={{
        border: `1px solid ${C.panelBorder}`,
        background: C.panel,
        transform: isHoverable
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : "none",
        transition: "transform 0.15s ease, border-color 0.2s ease",
      }}
    >
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer focus-visible:ring-2 focus-visible:outline-none"
        style={{
          borderBottom: expanded ? `1px solid ${C.panelBorder}` : "none",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            color: C.ink,
            fontWeight: 600,
          }}
        >
          {project.title}
        </h3>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <Tag color={project.statusColor}>{project.status}</Tag>
          <ChevronDown
            size={16}
            color={C.inkFaint}
            aria-hidden="true"
            style={{
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
            }}
          />
        </div>
      </button>

      {/* Expandable hidden panel */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={panelId}
        inert={!expanded ? "" : undefined}
        style={{
          maxHeight: expanded ? 500 : 0,
          overflow: "hidden",
          visibility: expanded ? "visible" : "hidden",
          transition: "max-height 0.35s ease, visibility 0.35s ease",
        }}
      >
        <div className="px-5 py-5">
          <p
            style={{
              fontFamily: "var(--font-sans)",
              color: C.inkSoft,
              fontSize: 15.5,
              lineHeight: 1.7,
            }}
          >
            {project.description}
          </p>

          {/* Bullet points from resume */}
          {project.points && (
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {project.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span style={{ color: C.teal }} className="shrink-0 mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: C.inkSoft,
                  border: `1px solid ${C.panelBorder}`,
                }}
                className="px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Live Link */}
          <div
            className="mt-5 pt-4"
            style={{ borderTop: `1px dashed ${C.panelBorder}` }}
          >
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:underline"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: C.teal,
                }}
              >
                {project.linkLabel} <ExternalLink size={13} aria-hidden="true" />
              </a>
            ) : (
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: C.inkFaint,
                }}
              >
                {project.linkLabel}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
```

### `src/components/Skills.jsx`
```javascript
import React from "react";
import { SKILLS, CERTS, C } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export const Skills = () => (
  <section id="skills" className="py-24 relative" style={{ background: "rgba(10, 14, 20, 0.62)" }}>
    <div className="max-w-3xl mx-auto px-6">
      <Reveal>
        <SectionLabel n="04">SKILLS</SectionLabel>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
        {SKILLS.map((s, i) => (
          <Reveal key={s.group} delay={i * 60}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12.5,
                  color: C.brass,
                  marginBottom: 10,
                }}
              >
                {s.group}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      color: C.inkSoft,
                      border: `1px solid ${C.panelBorder}`,
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                    className="px-3 py-1.5 rounded hover:text-white"
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.teal)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.panelBorder)}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div
          className="mt-14 pt-8"
          style={{ borderTop: `1px solid ${C.panelBorder}` }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12.5,
              color: C.brass,
              marginBottom: 10,
            }}
          >
            CERTIFICATIONS
          </p>
          <ul className="space-y-2">
            {CERTS.map((c) => (
              <li
                key={c.name}
                className="flex justify-between"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: C.inkSoft,
                  fontSize: 15,
                }}
              >
                <span className="text-white/90">{c.name}</span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    color: C.inkFaint,
                  }}
                >
                  {c.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Skills;
```

### `src/components/Terminal.jsx`
```javascript
import React, { useState, useEffect, useRef, useCallback } from "react";
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS, C } from "../data/portfolioData";

const MAX_TERMINAL_INPUT = 120;
const MAX_TERMINAL_HISTORY = 100;

const COMMANDS = {
  help: [
    "Available commands:",
    "  about       — Background & professional summary",
    "  projects    — Production & capstone systems",
    "  experience  — Roles at DVWorkers, Obitech & TS Academy",
    "  skills      — Core competencies & tech stack",
    "  contact     — Email, phone, LinkedIn & GitHub",
    "  whoami      — Developer identity",
    "  clear       — Clear the terminal buffer",
  ],
  whoami: [
    `${PROFILE.name.toLowerCase().replace(/\s+/g, "_")}`,
    `${PROFILE.role} · ${PROFILE.location}`,
    `Status: ${PROFILE.status}`,
  ],
  about: [
    "Oluwaseyi Aina — Software Developer based in Lagos, Nigeria.",
    "Background in BSc Physics (Lagos State University) + TS Academy Backend Bootcamp.",
    "Specializing in full-stack MERN platforms, five-tier RBAC, and secure REST APIs.",
    `Currently: ${PROFILE.currentRole}.`,
  ],
  experience: EXPERIENCE.map((e) => `${e.date.padEnd(20, " ")} ${e.role} @ ${e.org}`),
  projects: PROJECTS.map((p) => `[${p.status}] ${p.title} — ${p.stack.slice(0, 3).join(", ")}`),
  skills: SKILLS.map((s) => `${s.group}: ${s.items.join(", ")}`),
  contact: [
    `Email    : ${PROFILE.email}`,
    `Phone    : ${PROFILE.phone}`,
    `LinkedIn : ${PROFILE.linkedinHandle}`,
    `GitHub   : ${PROFILE.githubHandle}`,
    `Location : ${PROFILE.location}`,
  ],
};

const AVAILABLE_COMMAND_NAMES = Object.keys(COMMANDS);

export const Terminal = () => {
  const [history, setHistory] = useState([
    {
      cmd: null,
      output: [
        "Welcome to seyi@portfolio:~",
        "Type 'help' to see available commands or tap the quick pills below.",
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const run = useCallback((raw) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const cmd = trimmed.toLowerCase();

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    if (COMMANDS[cmd]) {
      setHistory((h) => [...h.slice(-MAX_TERMINAL_HISTORY), { cmd: raw, output: COMMANDS[cmd] }]);
    } else {
      setHistory((h) => [
        ...h.slice(-MAX_TERMINAL_HISTORY),
        {
          cmd: raw,
          output: [`command not found: '${raw}'. Type 'help' to see available commands.`],
        },
      ]);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    run(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = input.trim().toLowerCase();
      if (!current) return;
      const match = AVAILABLE_COMMAND_NAMES.find((c) => c.startsWith(current));
      if (match) {
        setInput(match);
      }
    }
  };

  const handleContainerClick = () => {
    const selection = window.getSelection();
    if (!selection || selection.toString().length === 0) {
      inputRef.current?.focus();
    }
  };

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{
        border: `1px solid ${C.panelBorder}`,
        background: C.panel,
        boxShadow: "0 20px 60px -20px rgba(0,0,0,0.6)",
      }}
      onClick={handleContainerClick}
    >
      {/* Title bar */}
      <div
        className="px-4 py-2.5 flex items-center gap-2 select-none"
        style={{
          borderBottom: `1px solid ${C.panelBorder}`,
          background: C.bgAlt,
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#E1746A66" }} />
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#D9A54B66" }} />
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#5CD1B866" }} />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: C.inkFaint,
            marginLeft: 8,
          }}
        >
          seyi@portfolio:~
        </span>
      </div>

      {/* Terminal log output */}
      <div
        role="log"
        aria-live="polite"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 13.5,
          lineHeight: 1.75,
          height: 260,
          overflowY: "auto",
        }}
        className="px-4 py-4"
      >
        {history.map((h, idx) => (
          <div key={idx} className="mb-2">
            {h.cmd && (
              <div style={{ color: C.brassSoft, wordBreak: "break-word" }}>
                <span style={{ color: C.teal }}>❯</span> {h.cmd}
              </div>
            )}
            {h.output.map((line, lIdx) => (
              <div key={lIdx} style={{ color: C.inkSoft, whiteSpace: "pre-wrap" }}>
                {line}
              </div>
            ))}
          </div>
        ))}

        <form onSubmit={onSubmit} className="flex items-center gap-2">
          <span style={{ color: C.teal }} aria-hidden="true">
            ❯
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value.slice(0, MAX_TERMINAL_INPUT))}
            onKeyDown={handleKeyDown}
            maxLength={MAX_TERMINAL_INPUT}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder="type 'help'"
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: C.ink,
              fontFamily: "var(--font-mono)",
              fontSize: 13.5,
              flex: 1,
              minWidth: 0,
            }}
            aria-label="Portfolio terminal command input"
          />
        </form>
        <div ref={bottomRef} />
      </div>

      {/* Quick Action Chips */}
      <div
        className="px-4 py-3 flex flex-wrap gap-2"
        style={{ borderTop: `1px solid ${C.panelBorder}` }}
      >
        {["help", "about", "projects", "experience", "skills", "contact", "clear"].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => run(c)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11.5,
              color: C.inkSoft,
              border: `1px solid ${C.panelBorder}`,
              background: "transparent",
            }}
            className="px-2.5 py-1 rounded hover:opacity-80 transition-opacity cursor-pointer"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
```

### `src/components/Contact.jsx`
```javascript
import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check } from "lucide-react";
import { PROFILE, C } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Reveal from "./Reveal";

const CopyRow = ({ label, value, href, icon: Icon, external }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      } else {
        window.location.href = href;
      }
    } catch {
      window.location.href = href;
    }
  };

  return (
    <div
      className="flex items-center justify-between py-4"
      style={{ borderBottom: `1px solid ${C.panelBorder}` }}
    >
      <div className="flex items-center gap-3">
        <Icon size={16} color={C.brassSoft} aria-hidden="true" />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12.5,
            color: C.inkFaint,
          }}
        >
          {label}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span
          style={{
            fontFamily: "var(--font-sans)",
            color: C.ink,
            fontSize: 15.5,
          }}
          className="select-all"
        >
          {value}
        </span>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
          style={{ color: copied ? C.teal : C.inkSoft }}
          className="p-1 hover:text-white transition-colors cursor-pointer"
        >
          {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
        </button>

        {external && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${label}`}
            style={{ color: C.inkSoft }}
            className="p-1 hover:text-teal transition-colors"
          >
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
};

export const Contact = () => (
  <section
    id="contact"
    className="py-24 relative"
    style={{
      background: "rgba(8, 11, 16, 0.80)",
      borderTop: `1px solid ${C.panelBorder}44`,
    }}
  >
    <div className="max-w-3xl mx-auto px-6">
      <div className="flex items-center gap-3 mb-10" style={{ fontFamily: "var(--font-mono)" }}>
        <span style={{ color: C.brassSoft, fontSize: 13, fontWeight: 600 }}>05 / CONTACT</span>
        <span style={{ flex: 1, height: 1, background: C.panelBorder }} />
      </div>

      <Reveal>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            color: C.ink,
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 600,
            lineHeight: 1.3,
            maxWidth: "30rem",
          }}
        >
          Reach out about software developer roles, or just to talk systems.
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-12">
          <CopyRow label="EMAIL" value={PROFILE.email} href={`mailto:${PROFILE.email}`} icon={Mail} />
          <CopyRow label="PHONE" value={PROFILE.phone} href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} icon={Phone} />
          <CopyRow label="LINKEDIN" value={PROFILE.linkedinHandle} href={PROFILE.linkedin} icon={LinkedinIcon} external />
          <CopyRow label="GITHUB" value={PROFILE.githubHandle} href={PROFILE.github} icon={GithubIcon} external />
          <div
            className="flex items-center justify-between py-4"
            style={{ borderBottom: `1px solid ${C.panelBorder}` }}
          >
            <div className="flex items-center gap-3">
              <MapPin size={16} color={C.brassSoft} aria-hidden="true" />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12.5,
                  color: C.inkFaint,
                }}
              >
                LOCATION
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                color: C.ink,
                fontSize: 15.5,
              }}
            >
              {PROFILE.location}
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Contact;
```

### `src/components/Footer.jsx`
```javascript
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { PROFILE, C } from "../data/portfolioData";

export const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-10 text-center relative"
      style={{
        background: "rgba(8, 11, 16, 0.85)",
        borderTop: `1px solid ${C.panelBorder}33`,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: C.inkFaint,
        }}
      >
        {PROFILE.name} · Lagos, Nigeria · built with React &amp; Tailwind
      </p>

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 cursor-pointer"
          style={{
            background: C.panel,
            color: C.teal,
            border: `1px solid ${C.panelBorder}`,
            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.6)",
          }}
        >
          <ArrowUp size={18} aria-hidden="true" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
```

### `src/components/SectionLabel.jsx`
```javascript
import React from "react";
import { C } from "../data/portfolioData";

export const SectionLabel = ({ n, children }) => (
  <div className="flex items-center gap-3 mb-10" style={{ fontFamily: "var(--font-mono)" }}>
    <span style={{ color: C.brass, fontSize: 13, fontWeight: 600 }}>
      {n} / {children}
    </span>
    <span style={{ flex: 1, height: 1, background: C.panelBorder }} />
  </div>
);

export default SectionLabel;
```

### `src/components/Reveal.jsx`
```javascript
import React, { useState, useEffect, useRef } from "react";

export const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) setVisible(true);
    };
    mediaQuery.addEventListener("change", handler);

    const el = ref.current;
    if (!el) {
      return () => mediaQuery.removeEventListener("change", handler);
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else if (entry.boundingClientRect.top > 0) {
          // Reset when scrolled past downwards so next scroll down triggers reveal again
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
      mediaQuery.removeEventListener("change", handler);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: visible
          ? `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
          : "none",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
```

### `src/components/Icons.jsx`
```javascript
import React from "react";

export const GithubIcon = ({ size = 16, color = "currentColor", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    aria-hidden="true"
    className={className}
  >
    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.27 7.77 10.77.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.66.79.55 4.5-1.5 7.76-5.75 7.76-10.77C23.25 5.48 18.27.5 12 .5Z" />
  </svg>
);

export const LinkedinIcon = ({ size = 16, color = "currentColor", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    aria-hidden="true"
    className={className}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
  </svg>
);
```

### `src/components/SpaceBackground.jsx`
```javascript
import React, { useEffect, useRef } from "react";

export const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = null;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let stars = [];
    let shootingStars = [];
    let spaceships = [];
    let asteroids = [];
    let lastScrollY = window.scrollY;
    let scrollDelta = 0;

    let nextShootingStarTime = Date.now() + 1200;
    let nextAsteroidTime = Date.now() + 2500;
    let nextSpaceshipTime = Date.now() + 4200;

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const COLORS = [
      { r: 220, g: 235, b: 250 }, // Cool starlight white/blue (65%)
      { r: 92, g: 209, b: 184 },  // Portfolio Teal (20%)
      { r: 232, g: 197, b: 131 }, // Celestial Brass (15%)
    ];

    const pickColor = () => {
      const rand = Math.random();
      if (rand < 0.65) return COLORS[0];
      if (rand < 0.85) return COLORS[1];
      return COLORS[2];
    };

    const createStar = () => {
      const depth = 0.3 + Math.random() * 0.7;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16 * depth,
        vy: (Math.random() - 0.5) * 0.16 * depth,
        radius: (0.7 + Math.random() * 1.5) * depth,
        baseAlpha: 0.25 + Math.random() * 0.5,
        twinkleSpeed: 0.015 + Math.random() * 0.025,
        twinklePhase: Math.random() * Math.PI * 2,
        color: pickColor(),
        depth,
        dispX: 0,
        dispY: 0,
      };
    };

    const initStars = () => {
      const area = width * height;
      const count = Math.min(Math.max(Math.floor(area / 16000), 32), 78);
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push(createStar());
      }
    };

    const spawnShootingStar = () => {
      const startX = Math.random() * (width * 0.9) + width * 0.05;
      const startY = Math.random() * (height * 0.45);
      const angle = Math.PI * (0.18 + Math.random() * 0.16);
      const speed = 16 + Math.random() * 9;
      const length = 110 + Math.random() * 90;
      const isTeal = Math.random() > 0.45;

      shootingStars.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length,
        life: 0,
        maxLife: 35 + Math.floor(Math.random() * 22),
        isTeal,
      });

      nextShootingStarTime = Date.now() + 3000 + Math.random() * 3500;
    };

    const spawnSpaceship = () => {
      const fromLeft = Math.random() > 0.4;
      const startX = fromLeft ? -45 : width + 45;
      const startY = Math.random() * (height * 0.7) + height * 0.12;
      const angle = fromLeft
        ? (Math.random() - 0.5) * 0.28
        : Math.PI + (Math.random() - 0.5) * 0.28;
      const speed = 0.85 + Math.random() * 0.45;
      const isTealEngine = Math.random() > 0.35;

      spaceships.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        angle,
        speed,
        isTealEngine,
        trail: [],
        beaconTick: 0,
      });

      nextSpaceshipTime = Date.now() + 14000 + Math.random() * 12000;
    };

    const spawnAsteroid = () => {
      const edge = Math.floor(Math.random() * 3);
      let startX = 0;
      let startY = 0;
      let targetX = 0;
      let targetY = 0;

      if (edge === 0) {
        startX = Math.random() * width;
        startY = -35;
        targetX = Math.random() * width;
        targetY = height + 35;
      } else if (edge === 1) {
        startX = -35;
        startY = Math.random() * (height * 0.65);
        targetX = width + 35;
        targetY = Math.random() * (height * 0.65) + height * 0.25;
      } else {
        startX = width + 35;
        startY = Math.random() * (height * 0.65);
        targetX = -35;
        targetY = Math.random() * (height * 0.65) + height * 0.25;
      }

      const angle = Math.atan2(targetY - startY, targetX - startX);
      const speed = 0.38 + Math.random() * 0.36;
      const radius = 10 + Math.random() * 11;
      const verticesCount = 8;
      const offsets = [];
      for (let i = 0; i < verticesCount; i++) {
        offsets.push(0.72 + Math.random() * 0.48);
      }

      const craters = [
        {
          x: (Math.random() - 0.5) * radius * 0.7,
          y: (Math.random() - 0.5) * radius * 0.7,
          r: radius * (0.18 + Math.random() * 0.14),
        },
      ];

      asteroids.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.014,
        radius,
        offsets,
        craters,
        verticesCount,
      });

      nextAsteroidTime = Date.now() + 11000 + Math.random() * 11000;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      initStars();

      if (prefersReducedMotion) {
        drawStatic();
      }
    };

    const onMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDelta += (currentScrollY - lastScrollY) * 0.25;
      lastScrollY = currentScrollY;
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, ${s.baseAlpha * 0.7})`;
        ctx.fill();
      }
    };

    const render = () => {
      const now = Date.now();
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      const currentScrollDelta = scrollDelta * 0.15;
      scrollDelta *= 0.85;

      if (now >= nextShootingStarTime && shootingStars.length < 2) {
        spawnShootingStar();
      }
      if (now >= nextSpaceshipTime && spaceships.length < 2) {
        spawnSpaceship();
      }
      if (now >= nextAsteroidTime && asteroids.length < 3) {
        spawnAsteroid();
      }

      const connectionDistance = 85;
      const mouseDistance = 130;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;
        s.y -= currentScrollDelta * s.depth;
        s.twinklePhase += s.twinkleSpeed;
        const alpha = Math.max(0.1, s.baseAlpha + Math.sin(s.twinklePhase) * 0.25);

        if (mouse.active) {
          const dx = s.x - mouse.x;
          const dy = s.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseDistance && dist > 1) {
            const force = (1 - dist / mouseDistance) * 1.8;
            const angle = Math.atan2(dy, dx);
            s.dispX += Math.cos(angle) * force;
            s.dispY += Math.sin(angle) * force;
          }
        }

        s.dispX *= 0.92;
        s.dispY *= 0.92;

        if (s.x < -10) s.x = width + 10;
        else if (s.x > width + 10) s.x = -10;

        if (s.y < -10) s.y = height + 10;
        else if (s.y > height + 10) s.y = -10;

        const renderX = s.x + s.dispX;
        const renderY = s.y + s.dispY;

        ctx.beginPath();
        ctx.arc(renderX, renderY, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, ${alpha * 0.75})`;
        ctx.fill();

        if (s.radius > 1.4 && alpha > 0.45) {
          ctx.beginPath();
          ctx.arc(renderX, renderY, s.radius * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, ${alpha * 0.12})`;
          ctx.fill();
        }

        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const x2 = s2.x + s2.dispX;
          const y2 = s2.y + s2.dispY;
          const dist = Math.hypot(renderX - x2, renderY - y2);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.13 * Math.min(alpha, s2.baseAlpha);
            ctx.beginPath();
            ctx.moveTo(renderX, renderY);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(92, 209, 184, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        if (mouse.active) {
          const mDist = Math.hypot(renderX - mouse.x, renderY - mouse.y);
          if (mDist < 95) {
            const mAlpha = (1 - mDist / 95) * 0.14;
            ctx.beginPath();
            ctx.moveTo(renderX, renderY);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(232, 197, 131, ${mAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      for (let i = asteroids.length - 1; i >= 0; i--) {
        const a = asteroids[i];
        a.x += a.vx;
        a.y += a.vy;
        a.y -= currentScrollDelta * 0.4;
        a.rot += a.rotSpeed;

        ctx.save();
        ctx.translate(a.x, a.y);
        ctx.rotate(a.rot);

        ctx.beginPath();
        for (let j = 0; j < a.verticesCount; j++) {
          const th = (j / a.verticesCount) * Math.PI * 2;
          const r = a.radius * a.offsets[j];
          const px = Math.cos(th) * r;
          const py = Math.sin(th) * r;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();

        ctx.fillStyle = "rgba(18, 26, 38, 0.82)";
        ctx.fill();

        ctx.strokeStyle = "rgba(92, 209, 184, 0.38)";
        ctx.lineWidth = 1;
        ctx.stroke();

        for (let c = 0; c < a.craters.length; c++) {
          const crater = a.craters[c];
          ctx.beginPath();
          ctx.arc(crater.x, crater.y, crater.r, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(10, 15, 23, 0.9)";
          ctx.fill();
          ctx.strokeStyle = "rgba(147, 162, 179, 0.28)";
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        ctx.restore();

        if (
          a.x < -60 ||
          a.x > width + 60 ||
          a.y < -60 ||
          a.y > height + 60
        ) {
          asteroids.splice(i, 1);
        }
      }

      for (let i = spaceships.length - 1; i >= 0; i--) {
        const ship = spaceships[i];
        ship.x += ship.vx;
        ship.y += ship.vy;
        ship.y -= currentScrollDelta * 0.5;
        ship.beaconTick++;

        ship.trail.push({
          x: ship.x - Math.cos(ship.angle) * 11,
          y: ship.y - Math.sin(ship.angle) * 11,
          alpha: 0.65,
        });

        for (let t = ship.trail.length - 1; t >= 0; t--) {
          const pt = ship.trail[t];
          pt.alpha -= 0.035;
          if (pt.alpha <= 0) {
            ship.trail.splice(t, 1);
            continue;
          }
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.6, 0, Math.PI * 2);
          ctx.fillStyle = ship.isTealEngine
            ? `rgba(92, 209, 184, ${pt.alpha * 0.7})`
            : `rgba(232, 197, 131, ${pt.alpha * 0.7})`;
          ctx.fill();
        }

        ctx.save();
        ctx.translate(ship.x, ship.y);
        ctx.rotate(ship.angle);

        ctx.beginPath();
        ctx.moveTo(14, 0);
        ctx.lineTo(-7, -7);
        ctx.lineTo(-4, -2);
        ctx.lineTo(-6, 0);
        ctx.lineTo(-4, 2);
        ctx.lineTo(-7, 7);
        ctx.closePath();

        ctx.fillStyle = "rgba(20, 29, 42, 0.95)";
        ctx.fill();
        ctx.strokeStyle = "rgba(92, 209, 184, 0.75)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(4, 0, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(232, 237, 243, 0.95)";
        ctx.fill();

        const isBeaconOn = (ship.beaconTick % 36) < 18;
        if (isBeaconOn) {
          ctx.beginPath();
          ctx.arc(-7, -7, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(225, 116, 106, 0.9)";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(-7, 7, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(92, 209, 184, 0.9)";
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(-6, 0, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = ship.isTealEngine
          ? "rgba(92, 209, 184, 0.9)"
          : "rgba(232, 197, 131, 0.9)";
        ctx.fill();

        ctx.restore();

        if (
          ship.x < -80 ||
          ship.x > width + 80 ||
          ship.y < -80 ||
          ship.y > height + 80
        ) {
          spaceships.splice(i, 1);
        }
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.life++;

        const progress = ss.life / ss.maxLife;
        let alpha = progress < 0.15 ? progress / 0.15 : 1 - (progress - 0.15) / 0.85;
        alpha = Math.max(0, Math.min(1, alpha));

        const dist = Math.hypot(ss.vx, ss.vy);
        const tailX = ss.x - (ss.vx / dist) * ss.length;
        const tailY = ss.y - (ss.vy / dist) * ss.length;

        const grad = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        const headColor = ss.isTeal
          ? `rgba(92, 209, 184, ${alpha * 0.95})`
          : `rgba(240, 248, 255, ${alpha * 0.95})`;
        const tailColor = ss.isTeal
          ? "rgba(92, 209, 184, 0)"
          : "rgba(217, 165, 75, 0)";

        grad.addColorStop(0, headColor);
        grad.addColorStop(1, tailColor);

        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.lineCap = "round";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();

        if (
          ss.life >= ss.maxLife ||
          ss.x > width + 100 ||
          ss.y > height + 100
        ) {
          shootingStars.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    const onVisibilityChange = () => {
      if (document.hidden) {
        if (animId) cancelAnimationFrame(animId);
      } else if (!prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    handleResize();

    if (!prefersReducedMotion) {
      animId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: 0.88,
        willChange: "transform",
      }}
    />
  );
};

export default SpaceBackground;
```
