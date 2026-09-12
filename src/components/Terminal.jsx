import React, { useState, useEffect, useRef, useCallback } from "react";
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS, C } from "../data/portfolioData";

const MAX_TERMINAL_INPUT = 120;
const MAX_TERMINAL_HISTORY = 100;

const COMMANDS = {
  help: [
    "Available commands:",
    "  about       — Background & professional summary",
    "  projects    — Production & capstone systems",
    "  experience  — Roles at DVWorkers, Obitech & TS Academy",
    "  skills      — Core competencies & tech stack",
    "  contact     — Email, phone, LinkedIn & GitHub",
    "  whoami      — Developer identity",
    "  clear       — Clear the terminal buffer",
  ],
  whoami: [
    `${PROFILE.name.toLowerCase().replace(/\s+/g, "_")}`,
    `${PROFILE.role} · ${PROFILE.location}`,
    `Status: ${PROFILE.status}`,
  ],
  about: [
    "Oluwaseyi Aina — Software Developer based in Lagos, Nigeria.",
    "Background in BSc Physics (Lagos State University) + TS Academy Backend Bootcamp.",
    "Specializing in full-stack MERN platforms, five-tier RBAC, and secure REST APIs.",
    `Currently: ${PROFILE.currentRole}.`,
  ],
  experience: EXPERIENCE.map((e) => `${e.date.padEnd(20, " ")} ${e.role} @ ${e.org}`),
  projects: PROJECTS.map((p) => `[${p.status}] ${p.title} — ${p.stack.slice(0, 3).join(", ")}`),
  skills: SKILLS.map((s) => `${s.group}: ${s.items.join(", ")}`),
  contact: [
    `Email    : ${PROFILE.email}`,
    `Phone    : ${PROFILE.phone}`,
    `LinkedIn : ${PROFILE.linkedinHandle}`,
    `GitHub   : ${PROFILE.githubHandle}`,
    `Location : ${PROFILE.location}`,
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

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
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
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#E1746A66" }} />
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#D9A54B66" }} />
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#5CD1B866" }} />
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
      </div>

      {/* Terminal log output */}
      <div
        role="log"
        aria-live="polite"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 13.5,
          lineHeight: 1.75,
          height: 260,
          overflowY: "auto",
        }}
        className="px-4 py-4"
      >
        {history.map((h, idx) => (
          <div key={idx} className="mb-2">
            {h.cmd && (
              <div style={{ color: C.brassSoft, wordBreak: "break-word" }}>
                <span style={{ color: C.teal }}>❯</span> {h.cmd}
              </div>
            )}
            {h.output.map((line, lIdx) => (
              <div key={lIdx} style={{ color: C.inkSoft, whiteSpace: "pre-wrap" }}>
                {line}
              </div>
            ))}
          </div>
        ))}

        <form onSubmit={onSubmit} className="flex items-center gap-2">
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
              fontSize: 13.5,
              flex: 1,
              minWidth: 0,
            }}
            aria-label="Portfolio terminal command input"
          />
        </form>
        <div ref={bottomRef} />
      </div>

      {/* Quick Action Chips */}
      <div
        className="px-4 py-3 flex flex-wrap gap-2"
        style={{ borderTop: `1px solid ${C.panelBorder}` }}
      >
        {["help", "about", "projects", "experience", "skills", "contact", "clear"].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => run(c)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11.5,
              color: C.inkSoft,
              border: `1px solid ${C.panelBorder}`,
              background: "transparent",
            }}
            className="px-2.5 py-1 rounded hover:opacity-80 transition-opacity cursor-pointer"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
