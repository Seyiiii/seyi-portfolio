import React, { useState } from "react";
import { Mail, MapPin, ArrowUpRight, Copy, Check, Send, Clock, Globe, ExternalLink } from "lucide-react";
import { PROFILE, C } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {
      // Fallback below
    }
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      return successful;
    } catch {
      return false;
    }
  };

  const handleCopyEmail = async (e) => {
    if (e) e.preventDefault();
    await copyToClipboard(PROFILE.email);
    setCopied(true);
    showToast("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:${PROFILE.email}?subject=Software%20Developer%20Inquiry%20%E2%80%94%20Oluwaseyi%20Aina`;
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}&su=${encodeURIComponent("Software Developer Opportunity / Inquiry")}`;

  const handleSendEmailClick = async (e) => {
    e.preventDefault();
    // Copy email to clipboard immediately so user has it ready
    await copyToClipboard(PROFILE.email);
    setCopied(true);
    showToast("Email copied! Launching mail client...");
    setTimeout(() => setCopied(false), 2500);
    // Trigger default desktop client
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{
        background: "rgba(8, 11, 16, 0.85)",
        borderTop: `1px solid ${C.panelBorder}44`,
      }}
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${C.teal}10, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${C.brass}10, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Reveal>
          <SectionLabel n="05">CONTACT</SectionLabel>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-start mt-6">
          {/* Left Column: Direct Invitation & Live Availability Status Card */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal delay={80}>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  color: C.ink,
                  fontSize: "clamp(2rem, 3.8vw, 2.75rem)",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  textWrap: "balance",
                }}
              >
                Get in touch.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  color: C.inkSoft,
                  fontSize: 16,
                  lineHeight: 1.7,
                  marginTop: 16,
                  textWrap: "pretty",
                }}
              >
                I am actively open to full-time software developer opportunities, both remote and on-site in Lagos.
                If you have an open role, questions about my projects, or an engineering challenge to discuss, feel free to reach out.
              </p>
            </Reveal>

            {/* Live Availability Status Card (Information & Schedule) */}
            <Reveal delay={120}>
              <div
                className="rounded-xl p-5"
                style={{
                  background: "rgba(18, 26, 36, 0.65)",
                  border: `1px solid ${C.panelBorder}`,
                  boxShadow: "0 12px 32px -12px rgba(0,0,0,0.5)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      fontWeight: 600,
                      color: C.teal,
                      letterSpacing: "0.04em",
                    }}
                  >
                    ACTIVE &amp; AVAILABLE
                  </span>
                </div>

                <div className="space-y-2.5 text-sm" style={{ color: C.inkSoft, fontFamily: "var(--font-sans)" }}>
                  <div className="flex items-center gap-2.5">
                    <Clock size={15} color={C.brassSoft} aria-hidden="true" />
                    <span>Usually replies within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe size={15} color={C.brassSoft} aria-hidden="true" />
                    <span>Lagos, Nigeria · West Africa Time (UTC+1)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin size={15} color={C.brassSoft} aria-hidden="true" />
                    <span>Open to Remote &amp; Onsite opportunities</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Unified Channels Hub (Single Mailing Section + Social) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Primary Channel: Direct Email */}
            <Reveal delay={100}>
              <div
                className="group rounded-xl p-5 transition-all duration-200"
                style={{
                  background: "rgba(18, 26, 36, 0.75)",
                  border: `1px solid ${C.panelBorder}`,
                }}
                onMouseEnter={(el) => (el.currentTarget.style.borderColor = `${C.teal}66`)}
                onMouseLeave={(el) => (el.currentTarget.style.borderColor = C.panelBorder)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: `${C.teal}15`, border: `1px solid ${C.teal}30` }}
                    >
                      <Mail size={18} color={C.teal} aria-hidden="true" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: C.inkFaint }}>
                        PRIMARY INBOX
                      </div>
                      <div
                        className="font-medium text-sm sm:text-base select-all mt-0.5"
                        style={{ color: C.ink, fontFamily: "var(--font-mono)" }}
                      >
                        {PROFILE.email}
                      </div>

                      {/* Fast Action Links: Copy, Gmail Web, Mail App */}
                      <div className="flex items-center gap-3 mt-3 text-xs font-mono">
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                          style={{ color: C.teal }}
                          title="Copy email to clipboard"
                        >
                          {copied ? <Check size={12} aria-hidden="true" /> : <Copy size={12} aria-hidden="true" />}
                          <span>{copied ? "Copied" : "Copy"}</span>
                        </button>
                        <span style={{ color: C.panelBorder }}>•</span>
                        <a
                          href={gmailComposeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1 transition-colors hover:text-white"
                          style={{ color: C.inkSoft }}
                          title="Compose message in Gmail web"
                        >
                          <ExternalLink size={12} aria-hidden="true" />
                          <span>Gmail</span>
                        </a>
                        <span style={{ color: C.panelBorder }}>•</span>
                        <a
                          href={mailtoUrl}
                          onClick={handleSendEmailClick}
                          className="hover:underline flex items-center gap-1 transition-colors hover:text-white cursor-pointer"
                          style={{ color: C.inkSoft }}
                          title="Open in your default email client"
                        >
                          <Send size={12} aria-hidden="true" />
                          <span>Mail App</span>
                        </a>
                      </div>

                      {/* Instant Notification Toast */}
                      {toastMessage && (
                        <div
                          className="mt-3 text-xs font-mono px-2.5 py-1 rounded inline-flex items-center gap-1.5 transition-all"
                          style={{
                            background: `${C.teal}15`,
                            border: `1px solid ${C.teal}40`,
                            color: C.teal,
                          }}
                        >
                          <Check size={11} aria-hidden="true" />
                          <span>{toastMessage}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open email compose in Gmail"
                    title="Open compose in Gmail"
                    className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                    style={{ color: C.inkSoft }}
                  >
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Channel Card 2: LinkedIn */}
            <Reveal delay={140}>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl p-5 transition-all duration-200"
                style={{
                  background: "rgba(18, 26, 36, 0.75)",
                  border: `1px solid ${C.panelBorder}`,
                }}
                onMouseEnter={(el) => (el.currentTarget.style.borderColor = `${C.brass}66`)}
                onMouseLeave={(el) => (el.currentTarget.style.borderColor = C.panelBorder)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${C.brass}15`, border: `1px solid ${C.brass}30` }}
                    >
                      <LinkedinIcon size={18} color={C.brassSoft} aria-hidden="true" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: C.inkFaint }}>
                        PROFESSIONAL NETWORK
                      </div>
                      <div
                        className="font-medium group-hover:text-white transition-colors text-sm sm:text-base"
                        style={{ color: C.ink, fontFamily: "var(--font-sans)" }}
                      >
                        {PROFILE.linkedinHandle}
                      </div>
                      <p className="text-xs text-white/50 mt-0.5 font-sans">
                        Career background &amp; direct messaging
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg group-hover:text-white transition-colors" style={{ color: C.inkSoft }}>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </div>
                </div>
              </a>
            </Reveal>

            {/* Channel Card 3: GitHub */}
            <Reveal delay={180}>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl p-5 transition-all duration-200"
                style={{
                  background: "rgba(18, 26, 36, 0.75)",
                  border: `1px solid ${C.panelBorder}`,
                }}
                onMouseEnter={(el) => (el.currentTarget.style.borderColor = `${C.teal}66`)}
                onMouseLeave={(el) => (el.currentTarget.style.borderColor = C.panelBorder)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${C.teal}15`, border: `1px solid ${C.teal}30` }}
                    >
                      <GithubIcon size={18} color={C.teal} aria-hidden="true" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: C.inkFaint }}>
                        SOURCE CODE &amp; COMMITS
                      </div>
                      <div
                        className="font-medium group-hover:text-white transition-colors text-sm sm:text-base"
                        style={{ color: C.ink, fontFamily: "var(--font-sans)" }}
                      >
                        {PROFILE.githubHandle}
                      </div>
                      <p className="text-xs text-white/50 mt-0.5 font-sans">
                        Repositories, capstone code &amp; personal projects
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg group-hover:text-white transition-colors" style={{ color: C.inkSoft }}>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </div>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
