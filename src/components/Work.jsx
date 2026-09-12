import React from "react";
import { PROJECTS, C } from "../data/portfolioData";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import ProjectCard from "./ProjectCard";

export const Work = () => (
  <section
    id="work"
    className="py-24 relative"
    style={{
      background: "rgba(14, 20, 28, 0.76)",
      borderTop: `1px solid ${C.panelBorder}44`,
      borderBottom: `1px solid ${C.panelBorder}44`,
    }}
  >
    <div className="max-w-3xl mx-auto px-6">
      <Reveal>
        <SectionLabel n="03">SELECTED WORK</SectionLabel>
      </Reveal>
      <div className="space-y-6">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: C.inkFaint,
          marginTop: 20,
        }}
      >
        click a card to expand it
      </p>
    </div>
  </section>
);

export default Work;
