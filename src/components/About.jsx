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

          {/* Core Engineering Pillars */}
          <div
            className="pt-6 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5"
            style={{ borderTop: `1px solid ${C.panelBorder}66` }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: C.teal,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                01 / ARCHITECTURE
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: C.inkSoft, marginTop: 4, lineHeight: 1.5 }}>
                5-tier RBAC, indexed tenant isolation, and modular REST API design.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: C.brass,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                02 / RELIABILITY
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: C.inkSoft, marginTop: 4, lineHeight: 1.5 }}>
                Atomic stock validation, real-time audit logs, and Postman API test suites.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: C.ink,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                03 / CLOUD &amp; DEVOPS
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: C.inkSoft, marginTop: 4, lineHeight: 1.5 }}>
                GitHub Actions CI/CD pipelines, Vercel &amp; Render hosting, AWS telemetry.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default About;
