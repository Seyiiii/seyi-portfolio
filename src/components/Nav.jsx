import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PROFILE, NAV_LINKS, C } from "../data/portfolioData";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.href)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded focus:font-semibold focus:shadow-lg focus:outline-none"
        style={{
          background: C.teal,
          color: C.bg,
          fontFamily: "var(--font-mono)",
        }}
      >
        Skip to main content
      </a>

      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10, 14, 20, 0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: `1px solid ${scrolled ? C.panelBorder : "transparent"}`,
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
            <span
              className="flex items-center justify-center w-9 h-9 rounded"
              style={{
                border: `1px solid ${C.inkSoft}`,
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: C.ink,
                fontWeight: 600,
              }}
            >
              {PROFILE.initials}
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a
                key={l.name}
                href={`#${l.href}`}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: active === l.href ? C.teal : C.inkSoft,
                  borderBottom: active === l.href ? `1px solid ${C.teal}` : "1px solid transparent",
                  paddingBottom: 3,
                  transition: "color 0.2s, border-color 0.2s",
                }}
                className="hover:text-white"
              >
                {l.name}
              </a>
            ))}
            <a
              href={`mailto:${PROFILE.email}`}
              className="px-4 py-2 rounded transition-opacity hover:opacity-90"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                background: C.teal,
                color: C.bg,
                fontWeight: 600,
              }}
            >
              Say hello
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            className="md:hidden cursor-pointer"
            style={{ color: C.ink }}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div
            className="md:hidden px-6 pb-6 flex flex-col gap-4"
            style={{ background: C.bg, borderBottom: `1px solid ${C.panelBorder}` }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.name}
                href={`#${l.href}`}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 14,
                  color: active === l.href ? C.teal : C.ink,
                }}
              >
                {l.name}
              </a>
            ))}
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-center py-2.5 rounded font-semibold mt-2"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                background: C.teal,
                color: C.bg,
              }}
            >
              Say hello
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
