import React, { useState, useEffect, useRef, useCallback } from "react";
import { Trash2 } from "lucide-react";
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS, C } from "../data/portfolioData";

const MAX_TERMINAL_INPUT = 120;
const MAX_TERMINAL_HISTORY = 100;

const COMMANDS = {
  help: [
    "Available commands:",
    "  about       — Background & engineering summary",
    "  projects    — Production & capstone systems",
    "  experience  — Roles at DVWorkers & Obitech",
    "  skills      — Tech stack & core competencies",
    "  contact     — Email, LinkedIn & GitHub",
    "  whoami      — Developer identity",
    "  clear       — Reset the terminal output",
  ],
  whoami: [
    `user: ${PROFILE.name.toLowerCase().replace(/\s+/g, "_")}`,
    `role: ${PROFILE.role} · ${PROFILE.location}`,
    `status: Open to software developer roles`,
  ],
  about: [
    "Oluwaseyi Aina: Software Developer based in Lagos, Nigeria.",
    "Education: BSc in Physics (LASU) and Backend Fellowship (TS Academy).",
    "Focus: Full-stack MERN applications, database schemas, and REST APIs.",
    `Current: ${PROFILE.currentRole} (Smile ID integration, bug fixes, AWS monitoring).`,
  ],
  experience: [
    "Work & Education Milestones:",
    "  [2026 — PRES] Technical Support @ DVWorkers (Smile ID, Bug Fixes, AWS)",
    "  [2026]        Backend Bootcamp @ TS Academy (MERN, CBT Capstone)",
    "  [2024]        Project Engineer (Intern) @ Obitech",
    "  [2022 — 2025] BSc Physics @ Lagos State University",
  ],
  projects: [
    "Featured Systems:",
    "  • [LIVE] Seyi Inventory System",
    "    Stack: Node.js, Express, MongoDB, JWT, Cloudinary, React",
    "    Features: 5-Tier RBAC, stock validation, cart & orders, audit log",
    "  • [CAPSTONE] Multitenant CBT Platform",
    "    Stack: Node.js, Express, MongoDB, Mongoose, REST APIs",
    "    Features: Candidate Management module & strict tenantId isolation",
  ],
  skills: [
    "Technical Stack & Core Skills:",
    "  ▸ Backend   : Node.js, Express.js, REST APIs, MVC, JWT, RBAC",
    "  ▸ Frontend  : React, Vite, Tailwind CSS, JavaScript, HTML5/CSS3",
    "  ▸ Databases : MongoDB, Mongoose, PostgreSQL",
    "  ▸ Cloud & QA: AWS Cloud, Render, Vercel, Smile ID, Git",
  ],
  contact: [
    "Communication Channels:",
    `  Email   : ${PROFILE.email}`,
    `  LinkedIn: ${PROFILE.linkedinHandle}`,
    `  GitHub  : ${PROFILE.githubHandle}`,
    `  Location: ${PROFILE.location}`,
  ],
};

const AVAILABLE_COMMAND_NAMES = Object.keys(COMMANDS);

export const Terminal = () => {
  const [history, setHistory] = useState([
    {
      cmd: null,
      output: [
        "Welcome to seyi@portfolio:~",
        "Type 'help' to see available commands or tap the quick pills below.",
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll ONLY the terminal body internally; NEVER scroll the outer browser window
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const run = useCallback((raw) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const cmd = trimmed.toLowerCase();

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    if (COMMANDS[cmd]) {
      setHistory((h) => [...h.slice(-MAX_TERMINAL_HISTORY), { cmd: raw, output: COMMANDS[cmd] }]);
    } else {
      setHistory((h) => [
        ...h.slice(-MAX_TERMINAL_HISTORY),
        {
          cmd: raw,
          output: [`command not found: '${raw}'. Type 'help' to see available commands.`],
        },
      ]);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    run(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = input.trim().toLowerCase();
      if (!current) return;
      const match = AVAILABLE_COMMAND_NAMES.find((c) => c.startsWith(current));
      if (match) {
        setInput(match);
      }
    }
  };

  const handleContainerClick = () => {
    const selection = window.getSelection();
    if (!selection || selection.toString().length === 0) {
      inputRef.current?.focus();
    }
  };

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{
        border: `1px solid ${C.panelBorder}`,
        background: C.panel,
        boxShadow: "0 20px 60px -20px rgba(0,0,0,0.6)",
      }}
      onClick={handleContainerClick}
    >
      {/* Title bar */}
      <div
        className="px-4 py-2.5 flex items-center gap-2 select-none"
        style={{
          borderBottom: `1px solid ${C.panelBorder}`,
          background: C.bgAlt,
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#E1746A88" }} />
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#D9A54B88" }} />
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#5CD1B888" }} />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: C.inkFaint,
            marginLeft: 8,
          }}
        >
          seyi@portfolio:~
        </span>

        {/* 1-Click Clear Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setHistory([]);
          }}
          title="Clear terminal buffer"
          className="ml-auto flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded hover:text-white transition-colors cursor-pointer"
          style={{ color: C.inkFaint }}
        >
          <Trash2 size={12} aria-hidden="true" />
          <span>clear</span>
        </button>
      </div>

      {/* Terminal log output */}
      <div
        ref={terminalBodyRef}
        role="log"
        aria-live="polite"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 13,
          lineHeight: 1.65,
          height: 290,
          overflowY: "auto",
        }}
        className="px-4 py-4"
      >
        {history.map((h, idx) => (
          <div
            key={idx}
            className="mb-3.5 pb-3 border-b border-white/5 last:border-b-0 last:mb-0 last:pb-0"
          >
            {h.cmd && (
              <div className="flex items-center gap-2 mb-1.5 font-medium" style={{ color: C.brassSoft }}>
                <span style={{ color: C.teal }}>❯</span>
                <span className="font-semibold">{h.cmd}</span>
              </div>
            )}
            <div
              className="space-y-0.5"
              style={{
                paddingLeft: h.cmd ? "1rem" : "0",
                borderLeft: h.cmd ? `2px solid ${C.teal}33` : "none",
              }}
            >
              {h.output.map((line, lIdx) => (
                <div key={lIdx} style={{ color: C.inkSoft, whiteSpace: "pre-wrap" }}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))}

        <form onSubmit={onSubmit} className="flex items-center gap-2 mt-2">
          <span style={{ color: C.teal }} aria-hidden="true">
            ❯
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value.slice(0, MAX_TERMINAL_INPUT))}
            onKeyDown={handleKeyDown}
            maxLength={MAX_TERMINAL_INPUT}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder="type 'help'"
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: C.ink,
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              flex: 1,
              minWidth: 0,
            }}
            aria-label="Portfolio terminal command input"
          />
        </form>
      </div>

      {/* Quick Action Chips */}
      <div
        className="px-4 py-2.5 flex flex-wrap gap-1.5"
        style={{ borderTop: `1px solid ${C.panelBorder}` }}
      >
        {["help", "about", "projects", "experience", "skills", "contact", "clear"].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => run(c)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: C.inkSoft,
              border: `1px solid ${C.panelBorder}`,
              background: "transparent",
            }}
            className="px-2 py-0.5 rounded hover:text-white hover:border-teal/50 transition-colors cursor-pointer"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
