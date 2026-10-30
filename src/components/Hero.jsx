import React, { useState, useEffect } from "react";
import { Mail, FileText } from "lucide-react";
import { PROFILE, METRICS, C } from "../data/portfolioData";
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
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
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

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            {/* Supahero Layer 1: Pulsing Live Status Pill */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
              style={{
                border: `1px solid ${C.panelBorder}`,
                background: "rgba(18, 26, 36, 0.7)",
                fontFamily: "var(--font-mono)",
                fontSize: 12.5,
                color: C.inkSoft,
              }}
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>
                {PROFILE.location} · <strong style={{ color: C.teal }}>Open to software roles</strong>
              </span>
            </div>

            {/* Supahero Layer 2: High-impact Headline */}
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                color: C.ink,
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                lineHeight: 1.1,
                fontWeight: 600,
                textWrap: "balance",
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

            {/* Supahero Layer 3: Punchy Subheadline */}
            <p
              style={{
                color: C.inkSoft,
                fontFamily: "var(--font-sans)",
                fontSize: 16.5,
                lineHeight: 1.7,
                marginTop: 20,
                maxWidth: "34rem",
                textWrap: "pretty",
              }}
            >
              I build full-stack MERN applications and backend APIs, and I hold my code to a high standard: writing test
              cases, validating endpoints, and tracking down edge-case bugs before they hit users.
            </p>

            {/* Supahero Layer 4: Action Cluster + Micro-reassurance */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                  if (window.location.hash) {
                    history.replaceState(null, "", window.location.pathname);
                  }
                }}
                className="px-5 py-3 rounded font-semibold transition-transform hover:-translate-y-0.5 cursor-pointer shadow-md"
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
                marginTop: 24,
              }}
            >
              ✓ Zero fluff · Production-tested &amp; deployed code
            </p>
          </div>

          <div className="md:col-span-2">
            <Terminal />
          </div>
        </div>

        {/* Supahero / Deck.gallery: One Big Metric Proof Strip */}
        <div
          className="mt-14 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3.5"
          style={{ borderTop: `1px solid ${C.panelBorder}55` }}
        >
          {METRICS.map((m, i) => (
            <div
              key={i}
              className="p-3.5 rounded-lg transition-all duration-200"
              style={{
                background: "rgba(18, 26, 36, 0.55)",
                border: `1px solid ${C.panelBorder}`,
              }}
              onMouseEnter={(el) => (el.currentTarget.style.borderColor = `${i % 2 === 0 ? C.teal : C.brass}66`)}
              onMouseLeave={(el) => (el.currentTarget.style.borderColor = C.panelBorder)}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(1.35rem, 2.5vw, 1.7rem)",
                  fontWeight: 700,
                  color: i % 2 === 0 ? C.teal : C.brass,
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.ink,
                  marginTop: 2,
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: C.inkFaint,
                  marginTop: 2,
                }}
              >
                {m.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
