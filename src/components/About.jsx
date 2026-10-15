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
            I studied physics at Lagos State University. Most of the degree was measuring something
            carefully and working out why the result didn&apos;t match the model. I debug the same way
            now: reproduce the problem, narrow it down, and change one thing at a time.
          </p>
          <p>
            I then completed the backend bootcamp at TS Academy, working in Node.js, Express, MongoDB, and
            React. The capstone was a multitenant computer-based testing platform built by a team of seven. I wrote
            the Candidate Management module, including the tenant data isolation.
          </p>
          <p>
            Right now I&apos;m in technical support at DVWorkers, a job marketplace in Lagos for
            blue-collar workers. I&apos;m learning the codebase and hosting setup from the developers
            who built it, fixing bugs, retesting fixes on staging, writing documentation, and keeping an
            eye on AWS infrastructure.
          </p>
          <p>
            Outside work I build my own projects. The{" "}
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                if (window.location.hash) {
                  history.replaceState(null, "", window.location.pathname);
                }
              }}
              className="hover:underline cursor-pointer"
              style={{ color: C.teal }}
            >
              inventory system
            </a>{" "}
            is live if you want to click around. I&apos;m looking for software developer roles with a focus on backend and full-stack systems.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default About;
