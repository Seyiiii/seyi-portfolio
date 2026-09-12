import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { C } from "../data/portfolioData";

export const Tag = ({ children, color = C.teal }) => (
  <span
    className="inline-block px-2 py-1 rounded"
    style={{
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color,
      border: `1px solid ${color}55`,
      background: `${color}14`,
    }}
  >
    {children}
  </span>
);

export const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHoverable, setIsHoverable] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  });
  const cardRef = useRef(null);
  const panelId = `panel-${project.title.toLowerCase().replace(/\s+/g, "-")}`;

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const handler = (e) => setIsHoverable(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const onMouseMove = (e) => {
    if (!isHoverable || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };

  const onMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="rounded-lg overflow-hidden"
      style={{
        border: `1px solid ${C.panelBorder}`,
        background: C.panel,
        transform: isHoverable
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : "none",
        transition: "transform 0.15s ease, border-color 0.2s ease",
      }}
    >
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer focus-visible:ring-2 focus-visible:outline-none"
        style={{
          borderBottom: expanded ? `1px solid ${C.panelBorder}` : "none",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            color: C.ink,
            fontWeight: 600,
          }}
        >
          {project.title}
        </h3>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <Tag color={project.statusColor}>{project.status}</Tag>
          <ChevronDown
            size={16}
            color={C.inkFaint}
            aria-hidden="true"
            style={{
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
            }}
          />
        </div>
      </button>

      {/* Expandable hidden panel */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={panelId}
        inert={!expanded ? "" : undefined}
        style={{
          maxHeight: expanded ? 500 : 0,
          overflow: "hidden",
          visibility: expanded ? "visible" : "hidden",
          transition: "max-height 0.35s ease, visibility 0.35s ease",
        }}
      >
        <div className="px-5 py-5">
          <p
            style={{
              fontFamily: "var(--font-sans)",
              color: C.inkSoft,
              fontSize: 15.5,
              lineHeight: 1.7,
            }}
          >
            {project.description}
          </p>

          {/* Bullet points from resume */}
          {project.points && (
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {project.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span style={{ color: C.teal }} className="shrink-0 mt-0.5">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: C.inkSoft,
                  border: `1px solid ${C.panelBorder}`,
                }}
                className="px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Live Link */}
          <div
            className="mt-5 pt-4"
            style={{ borderTop: `1px dashed ${C.panelBorder}` }}
          >
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:underline"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: C.teal,
                }}
              >
                {project.linkLabel} <ExternalLink size={13} aria-hidden="true" />
              </a>
            ) : (
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: C.inkFaint,
                }}
              >
                {project.linkLabel}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
