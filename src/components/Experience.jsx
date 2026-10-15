import React from "react";
import { Award, GraduationCap, Briefcase } from "lucide-react";
import { EXPERIENCE, CERTS, EDUCATION, C } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export const Experience = () => (
  <section id="experience" className="py-24 relative" style={{ background: "rgba(10, 14, 20, 0.62)" }}>
    <div className="max-w-3xl mx-auto px-6">
      <Reveal>
        <SectionLabel n="02">EXPERIENCE &amp; BACKGROUND</SectionLabel>
      </Reveal>

      {/* 1. WORK EXPERIENCE */}
      <div className="flex items-center gap-2 mb-8" style={{ fontFamily: "var(--font-mono)" }}>
        <Briefcase size={14} color={C.teal} aria-hidden="true" />
        <span style={{ color: C.teal, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.05em" }}>
          WORK &amp; ENGINEERING
        </span>
        <span style={{ flex: 1, height: 1, background: `${C.panelBorder}88` }} />
      </div>

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

                <div
                  className="my-4 h-px"
                  style={{ background: `${C.panelBorder}66` }}
                  aria-hidden="true"
                />

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

      {/* 2. CERTIFICATIONS (Positioned BEFORE Education per user request) */}
      <Reveal delay={120}>
        <div className="mt-16 mb-8 flex items-center gap-2" style={{ fontFamily: "var(--font-mono)" }}>
          <Award size={14} color={C.brass} aria-hidden="true" />
          <span style={{ color: C.brass, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.05em" }}>
            CERTIFICATIONS &amp; CREDENTIALS
          </span>
          <span style={{ flex: 1, height: 1, background: `${C.panelBorder}88` }} />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {CERTS.map((c, i) => (
            <div
              key={i}
              className="rounded-xl p-5 transition-all duration-200"
              style={{
                background: "rgba(18, 26, 36, 0.75)",
                border: `1px solid ${C.panelBorder}`,
                boxShadow: "0 8px 24px -10px rgba(0,0,0,0.4)",
              }}
              onMouseEnter={(el) => (el.currentTarget.style.borderColor = `${c.color}66`)}
              onMouseLeave={(el) => (el.currentTarget.style.borderColor = C.panelBorder)}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className="px-2 py-0.5 rounded text-[11px] font-mono font-medium"
                  style={{
                    background: `${c.color}15`,
                    color: c.color,
                    border: `1px solid ${c.color}35`,
                  }}
                >
                  {c.issuer}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: C.inkFaint,
                  }}
                >
                  {c.date}
                </span>
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-serif)",
                  color: C.ink,
                  fontSize: 16,
                  fontWeight: 600,
                  lineHeight: 1.35,
                }}
              >
                {c.name}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11.5,
                  color: C.inkSoft,
                  marginTop: 6,
                }}
              >
                {c.tag}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* 3. EDUCATION (Positioned AFTER Certifications with distinct styling) */}
      <Reveal delay={160}>
        <div className="mt-16 mb-8 flex items-center gap-2" style={{ fontFamily: "var(--font-mono)" }}>
          <GraduationCap size={15} color={C.teal} aria-hidden="true" />
          <span style={{ color: C.teal, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.05em" }}>
            FORMAL EDUCATION
          </span>
          <span style={{ flex: 1, height: 1, background: `${C.panelBorder}88` }} />
        </div>

        <div
          className="relative pl-6 sm:pl-8"
          style={{ borderLeft: `2px solid ${C.panelBorder}` }}
        >
          {EDUCATION.map((edu, i) => (
            <div key={i} className="relative">
              {/* Education Node */}
              <span
                className="absolute rounded-full"
                style={{
                  width: 10,
                  height: 10,
                  left: -30,
                  top: 24,
                  background: C.teal,
                  boxShadow: `0 0 6px ${C.teal}66`,
                }}
                aria-hidden="true"
              />

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
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className="px-2.5 py-1 rounded text-xs font-mono font-semibold"
                    style={{
                      background: `${C.teal}15`,
                      color: C.teal,
                      border: `1px solid ${C.teal}35`,
                    }}
                  >
                    {edu.date}
                  </span>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: C.inkFaint,
                    }}
                  >
                    {edu.meta}
                  </span>
                </div>

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
                  {edu.degree} <span style={{ color: C.teal }}>· {edu.school}</span>
                </h3>

                <div
                  className="my-4 h-px"
                  style={{ background: `${C.panelBorder}66` }}
                  aria-hidden="true"
                />

                <ul className="space-y-3">
                  {edu.points.map((p, j) => (
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
                      <span style={{ color: C.teal, marginTop: 1 }} aria-hidden="true">
                        —
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Experience;
