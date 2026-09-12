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
