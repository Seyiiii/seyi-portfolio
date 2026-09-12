import React from "react";
import { C } from "../data/portfolioData";

export const SectionLabel = ({ n, children }) => (
  <div className="flex items-center gap-3 mb-10" style={{ fontFamily: "var(--font-mono)" }}>
    <span style={{ color: C.brass, fontSize: 13, fontWeight: 600 }}>
      {n} / {children}
    </span>
    <span style={{ flex: 1, height: 1, background: C.panelBorder }} />
  </div>
);

export default SectionLabel;
