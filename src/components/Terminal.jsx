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
      id: "init",
      cmd: null,
      output: [
        "Welcome to seyi@portfolio:~",
        "Type 'help' to see available commands or tap the quick pills below.",
      ],
      isTyping: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);
  const typingTimerRef = useRef(null);
  const activeTaskRef = useRef(null);

  // Stop active typing interval and immediately complete the pending text
  const flushActiveTyping = useCallback(() => {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    }
    if (activeTaskRef.current) {
      const { id, fullOutput } = activeTaskRef.current;
      setHistory((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, output: fullOutput, isTyping: false } : item
        )
      );
      activeTaskRef.current = null;
    }
  }, []);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current);
      }
    };
  }, []);

  // Scroll ONLY the terminal body internally; NEVER scroll the outer browser window
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const run = useCallback(
    (raw) => {
      const trimmed = raw.trim();
      if (!trimmed) return;

      // Always fast-forward any currently typing output before executing the new command
      flushActiveTyping();

      setCommandHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);

      const cmd = trimmed.toLowerCase();

      if (cmd === "clear") {
        setHistory([]);
        return;
      }

      const targetLines = COMMANDS[cmd] || [
        `command not found: '${raw}'. Type 'help' to see available commands.`,
      ];

      const id = `${Date.now()}-${Math.random()}`;
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // If user prefers reduced motion, render immediately without typewriter
      if (prefersReducedMotion) {
        setHistory((h) => [
          ...h.slice(-MAX_TERMINAL_HISTORY),
          { id, cmd: raw, output: targetLines, isTyping: false },
        ]);
        return;
      }

      // Dynamic pacing: calculate total characters so output completes in ~400-750ms
      const totalChars = targetLines.reduce((acc, line) => acc + line.length, 0);
      const step = Math.max(1, Math.ceil(totalChars / 38));
      const tickMs = 15;

      activeTaskRef.current = { id, fullOutput: targetLines };

      let currentLineIdx = 0;
      let currentCharIdx = 0;
      const currentOutput = [""];

      // Mount initial entry with writing status
      setHistory((h) => [
        ...h.slice(-MAX_TERMINAL_HISTORY),
        { id, cmd: raw, output: [""], isTyping: true },
      ]);

      typingTimerRef.current = setInterval(() => {
        const currentLine = targetLines[currentLineIdx] ?? "";
        currentCharIdx += step;

        if (currentCharIdx < currentLine.length) {
          currentOutput[currentLineIdx] = currentLine.slice(0, currentCharIdx);
        } else {
          currentOutput[currentLineIdx] = currentLine;
          currentLineIdx++;
          currentCharIdx = 0;

          if (currentLineIdx < targetLines.length) {
            currentOutput.push("");
          } else {
            // Completed all lines
            if (typingTimerRef.current) {
              clearInterval(typingTimerRef.current);
              typingTimerRef.current = null;
            }
            activeTaskRef.current = null;
            setHistory((prev) =>
              prev.map((item) =>
                item.id === id ? { ...item, output: targetLines, isTyping: false } : item
              )
            );
            return;
          }
        }

        const snapshot = [...currentOutput];
        setHistory((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, output: snapshot, isTyping: true } : item
          )
        );
      }, tickMs);
    },
    [flushActiveTyping]
  );

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
            flushActiveTyping();
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
            key={h.id || idx}
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
                  {/* Blinking writing cursor at the typing head */}
                  {h.isTyping && lIdx === h.output.length - 1 && (
                    <span
                      style={{
                        display: "inline-block",
                        width: 7,
                        height: 13,
                        background: C.teal,
                        marginLeft: 3,
                        verticalAlign: "middle",
                        opacity: 0.9,
                      }}
                      className="animate-pulse"
                      aria-hidden="true"
                    />
                  )}
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
