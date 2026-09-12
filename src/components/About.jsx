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
