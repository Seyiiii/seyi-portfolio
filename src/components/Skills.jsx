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
