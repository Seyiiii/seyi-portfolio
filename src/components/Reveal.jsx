import React, { useState, useEffect, useRef } from "react";

export const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) setVisible(true);
    };
    mediaQuery.addEventListener("change", handler);

    const el = ref.current;
    if (!el) {
      return () => mediaQuery.removeEventListener("change", handler);
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else if (entry.boundingClientRect.top > 0) {
          // Reset when scrolled past downwards so next scroll down triggers reveal again
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
      mediaQuery.removeEventListener("change", handler);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: visible
          ? `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
          : "none",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
