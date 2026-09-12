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
