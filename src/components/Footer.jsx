import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { PROFILE, C } from "../data/portfolioData";

export const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-10 text-center relative"
      style={{
        background: "rgba(8, 11, 16, 0.85)",
        borderTop: `1px solid ${C.panelBorder}33`,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: C.inkFaint,
        }}
      >
        {PROFILE.name} · Lagos, Nigeria · built with React &amp; Tailwind
      </p>

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 cursor-pointer"
          style={{
            background: C.panel,
            color: C.teal,
            border: `1px solid ${C.panelBorder}`,
            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.6)",
          }}
        >
          <ArrowUp size={18} aria-hidden="true" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
