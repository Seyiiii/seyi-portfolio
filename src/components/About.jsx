import React, { useState } from "react";
import { Atom, ShieldCheck, Cpu, LayoutGrid, AlignLeft } from "lucide-react";
import { C } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export const About = () => {
  const [view, setView] = useState("minimal"); // "minimal" | "bento"

  const handleInventoryClick = (e) => {
    e.preventDefault();
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
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
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <SectionLabel n="01">ABOUT</SectionLabel>

            {/* Interactive View Switcher: Minimalist vs Hybrid Bento */}
            <div
              role="tablist"
              aria-label="About section presentation mode"
              className="inline-flex items-center p-1 rounded-lg"
              style={{
                background: "rgba(10, 14, 20, 0.85)",
                border: `1px solid ${C.panelBorder}`,
              }}
            >
              <button
                type="button"
                role="tab"
                aria-selected={view === "minimal"}
                onClick={() => setView("minimal")}
                className="flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-all cursor-pointer"
                style={{
                  background: view === "minimal" ? `${C.teal}22` : "transparent",
                  color: view === "minimal" ? C.teal : C.inkFaint,
                  border: view === "minimal" ? `1px solid ${C.teal}44` : "1px solid transparent",
                  fontWeight: view === "minimal" ? 600 : 500,
                }}
              >
                <AlignLeft size={13} aria-hidden="true" />
                <span>Minimal</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={view === "bento"}
                onClick={() => setView("bento")}
                className="flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-all cursor-pointer"
                style={{
                  background: view === "bento" ? `${C.brass}22` : "transparent",
                  color: view === "bento" ? C.brassSoft : C.inkFaint,
                  border: view === "bento" ? `1px solid ${C.brass}44` : "1px solid transparent",
                  fontWeight: view === "bento" ? 600 : 500,
                }}
              >
                <LayoutGrid size={13} aria-hidden="true" />
                <span>Bento Cards</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* View 1: Ultra-Minimalist Narrative */}
        {view === "minimal" ? (
          <Reveal delay={100}>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                color: C.inkSoft,
                fontSize: 17,
                lineHeight: 1.8,
              }}
              className="space-y-6"
            >
              <p>
                I&apos;m a software developer with a degree in physics. That background fundamentally shaped how I
                write and test software: I don&apos;t guess when an endpoint breaks or an edge-case fails. I
                isolate variables, reproduce the failure state, and trace it down to the exact root cause.
              </p>
              <p>
                Today, I work in technical support at DVWorkers—triaging live marketplace bugs, retesting
                staging defects, and writing automated Playwright triage crawlers. In my personal engineering
                work, I build full-stack MERN systems like the{" "}
                <a
                  href="#work"
                  onClick={handleInventoryClick}
                  className="hover:underline cursor-pointer font-medium"
                  style={{ color: C.teal }}
                >
                  Seyi Inventory platform
                </a>
                —focusing on the unglamorous essentials: five-tier permission boundaries, clean schemas, and APIs
                that stay resilient under real traffic.
              </p>
            </div>
          </Reveal>
        ) : (
          /* View 2: Hybrid Bento Cards (web-design-genius pattern) */
          <div className="space-y-4">
            <Reveal delay={100}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  color: C.inkSoft,
                  fontSize: 16.5,
                  lineHeight: 1.75,
                }}
                className="mb-6"
              >
                Physics taught me to test assumptions against reality. Engineering taught me to build systems that
                fail gracefully. Here is how that translates day to day:
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-3 gap-4">
              {/* Card 1: Physics / Analytical Debugging */}
              <Reveal delay={120}>
                <div
                  className="rounded-xl p-5 h-full flex flex-col justify-between transition-all duration-200"
                  style={{
                    background: "rgba(18, 26, 36, 0.75)",
                    border: `1px solid ${C.panelBorder}`,
                    boxShadow: "0 8px 24px -10px rgba(0,0,0,0.45)",
                  }}
                  onMouseEnter={(el) => (el.currentTarget.style.borderColor = `${C.teal}66`)}
                  onMouseLeave={(el) => (el.currentTarget.style.borderColor = C.panelBorder)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold"
                        style={{ background: `${C.teal}18`, color: C.teal, border: `1px solid ${C.teal}35` }}
                      >
                        ANALYTICAL
                      </span>
                      <Atom size={16} color={C.teal} aria-hidden="true" />
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        color: C.ink,
                        fontSize: 17,
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      Isolate, don&apos;t guess
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: C.inkSoft,
                        fontSize: 14,
                        lineHeight: 1.6,
                        marginTop: 8,
                      }}
                    >
                      BSc in Physics at LASU. Measuring physical systems trained me to isolate variables and inspect
                      raw logs before touching a line of fix code.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Card 2: Production QA & Support */}
              <Reveal delay={160}>
                <div
                  className="rounded-xl p-5 h-full flex flex-col justify-between transition-all duration-200"
                  style={{
                    background: "rgba(18, 26, 36, 0.75)",
                    border: `1px solid ${C.panelBorder}`,
                    boxShadow: "0 8px 24px -10px rgba(0,0,0,0.45)",
                  }}
                  onMouseEnter={(el) => (el.currentTarget.style.borderColor = `${C.brass}66`)}
                  onMouseLeave={(el) => (el.currentTarget.style.borderColor = C.panelBorder)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold"
                        style={{ background: `${C.brass}18`, color: C.brassSoft, border: `1px solid ${C.brass}35` }}
                      >
                        PRODUCTION
                      </span>
                      <ShieldCheck size={16} color={C.brass} aria-hidden="true" />
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        color: C.ink,
                        fontSize: 17,
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      Battle-tested QA
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: C.inkSoft,
                        fontSize: 14,
                        lineHeight: 1.6,
                        marginTop: 8,
                      }}
                    >
                      Front-row seat at DVWorkers. Retested 12 staging defects independently, maintain the regression
                      suite, and built custom Playwright crawler tools.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Card 3: Full-Stack MERN Architecture */}
              <Reveal delay={200}>
                <div
                  className="rounded-xl p-5 h-full flex flex-col justify-between transition-all duration-200"
                  style={{
                    background: "rgba(18, 26, 36, 0.75)",
                    border: `1px solid ${C.panelBorder}`,
                    boxShadow: "0 8px 24px -10px rgba(0,0,0,0.45)",
                  }}
                  onMouseEnter={(el) => (el.currentTarget.style.borderColor = `${C.teal}66`)}
                  onMouseLeave={(el) => (el.currentTarget.style.borderColor = C.panelBorder)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold"
                        style={{ background: `${C.teal}18`, color: C.teal, border: `1px solid ${C.teal}35` }}
                      >
                        SYSTEMS
                      </span>
                      <Cpu size={16} color={C.teal} aria-hidden="true" />
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        color: C.ink,
                        fontSize: 17,
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      Strict permissions
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: C.inkSoft,
                        fontSize: 14,
                        lineHeight: 1.6,
                        marginTop: 8,
                      }}
                    >
                      5-tier custom RBAC on MERN, tenant-isolated candidate services on a 7-person CBT capstone, and
                      strict stock validation pipelines.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
