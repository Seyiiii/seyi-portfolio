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
              I am a software developer with a degree in physics from Lagos State University.
              In physics, when an experiment does not match the model, you isolate variables, reproduce the issue, and test one change at a time.
              I debug software with that same discipline.
            </p>
            <p>
              At DVWorkers, I work in technical support: integrating the Smile ID identity verification system for worker onboarding, investigating live production errors, and verifying defects on staging before releases.
              In my personal projects, I build full-stack MERN applications like the{" "}
              <a
                href="#work"
                onClick={handleInventoryClick}
                className="hover:underline cursor-pointer font-medium"
                style={{ color: C.teal }}
              >
                Seyi Inventory platform
              </a>
              , focusing on role-based permission boundaries, clean database schemas, and dependable REST endpoints.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
