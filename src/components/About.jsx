import React from "react";
import { C } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export const About = () => {
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
            className="space-y-6"
          >
            <p>
              I&apos;m a software developer with a degree in physics. That background fundamentally shaped how I
              write and test software: I don&apos;t guess when an endpoint breaks or an edge-case fails. I
              isolate variables, reproduce the failure state, and trace it down to the exact root cause.
            </p>
            <p>
              Today, I work in technical support at DVWorkers—implementing the Smile ID identity verification
              system for worker onboarding, investigating and resolving live production errors, and retesting staging
              defects before deployment. In my personal engineering work, I build full-stack MERN systems like the{" "}
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
      </div>
    </section>
  );
};

export default About;
