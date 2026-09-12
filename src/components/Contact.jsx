import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check } from "lucide-react";
import { PROFILE, C } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Reveal from "./Reveal";

const CopyRow = ({ label, value, href, icon: Icon, external }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      } else {
        window.location.href = href;
      }
    } catch {
      window.location.href = href;
    }
  };

  return (
    <div
      className="flex items-center justify-between py-4"
      style={{ borderBottom: `1px solid ${C.panelBorder}` }}
    >
      <div className="flex items-center gap-3">
        <Icon size={16} color={C.brassSoft} aria-hidden="true" />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12.5,
            color: C.inkFaint,
          }}
        >
          {label}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span
          style={{
            fontFamily: "var(--font-sans)",
            color: C.ink,
            fontSize: 15.5,
          }}
          className="select-all"
        >
          {value}
        </span>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
          style={{ color: copied ? C.teal : C.inkSoft }}
          className="p-1 hover:text-white transition-colors cursor-pointer"
        >
          {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
        </button>

        {external && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${label}`}
            style={{ color: C.inkSoft }}
            className="p-1 hover:text-teal transition-colors"
          >
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
};

export const Contact = () => (
  <section
    id="contact"
    className="py-24 relative"
    style={{
      background: "rgba(8, 11, 16, 0.80)",
      borderTop: `1px solid ${C.panelBorder}44`,
    }}
  >
    <div className="max-w-3xl mx-auto px-6">
      <div className="flex items-center gap-3 mb-10" style={{ fontFamily: "var(--font-mono)" }}>
        <span style={{ color: C.brassSoft, fontSize: 13, fontWeight: 600 }}>05 / CONTACT</span>
        <span style={{ flex: 1, height: 1, background: C.panelBorder }} />
      </div>

      <Reveal>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            color: C.ink,
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 600,
            lineHeight: 1.3,
            maxWidth: "30rem",
          }}
        >
          Reach out about software developer roles, or just to talk systems.
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-12">
          <CopyRow label="EMAIL" value={PROFILE.email} href={`mailto:${PROFILE.email}`} icon={Mail} />
          <CopyRow label="PHONE" value={PROFILE.phone} href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} icon={Phone} />
          <CopyRow label="LINKEDIN" value={PROFILE.linkedinHandle} href={PROFILE.linkedin} icon={LinkedinIcon} external />
          <CopyRow label="GITHUB" value={PROFILE.githubHandle} href={PROFILE.github} icon={GithubIcon} external />
          <div
            className="flex items-center justify-between py-4"
            style={{ borderBottom: `1px solid ${C.panelBorder}` }}
          >
            <div className="flex items-center gap-3">
              <MapPin size={16} color={C.brassSoft} aria-hidden="true" />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12.5,
                  color: C.inkFaint,
                }}
              >
                LOCATION
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                color: C.ink,
                fontSize: 15.5,
              }}
            >
              {PROFILE.location}
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Contact;
