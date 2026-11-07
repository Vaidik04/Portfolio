"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check, Send } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSent, setFormSent] = useState(false);

  const email = "vaidikgandhi@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    const subject = encodeURIComponent(`Project Inquiry from ${formName}`);
    const body = encodeURIComponent(`From: ${formName} <${formEmail}>\n\n${formMessage}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 max-w-6xl mx-auto w-full border-t border-surface-border z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Bold Statement & Direct Channels */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand" />
            <span className="text-xs font-mono tracking-wider uppercase text-typography-muted">
              05 · Contact & Engagement
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-typography-primary leading-[1.12]">
            Let&apos;s build sovereign software that lasts.
          </h2>

          <p className="text-base sm:text-lg text-typography-secondary font-sans leading-relaxed">
            Have an offline workflow constraint, a mobile security challenge, or an Android product to architect? I&apos;m available for engineering consultations, independent contracts, and full-cycle product development.
          </p>

          {/* Quick Copy Email Box */}
          <div className="p-4 rounded-2xl bg-surface border border-surface-border flex items-center justify-between mt-2">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand" />
              <span className="font-mono text-sm text-typography-primary">{email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-xl bg-surface-elevated border border-surface-border hover:border-brand text-typography-secondary hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-brand" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? "Copied" : "Copy"}</span>
            </button>
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://github.com/Vaidik04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface border border-surface-border text-typography-secondary hover:text-white hover:border-surface-border-hover text-xs font-sans transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub (Vaidik04)</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="https://www.linkedin.com/in/vaidik-gandhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface border border-surface-border text-typography-secondary hover:text-white hover:border-surface-border-hover text-xs font-sans transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-brand" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Right Column: Clean Direct Form */}
        <div className="lg:col-span-6">
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-surface border border-surface-border flex flex-col gap-5 shadow-xl"
          >
            <div className="font-heading font-bold text-lg text-typography-primary">
              Send a direct message
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-mono text-typography-muted">
                Your Name / Company
              </label>
              <input
                id="name"
                type="text"
                required
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="Ramesh Kumar"
                className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-surface-border text-sm text-typography-primary placeholder:text-typography-muted focus:outline-none focus:border-brand font-sans transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-mono text-typography-muted">
                Your Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-surface-border text-sm text-typography-primary placeholder:text-typography-muted focus:outline-none focus:border-brand font-sans transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-mono text-typography-muted">
                Project Scope / Technical Challenge
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                placeholder="Tell me about the app or system you need built..."
                className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-surface-border text-sm text-typography-primary placeholder:text-typography-muted focus:outline-none focus:border-brand font-sans transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-accent hover:bg-accent-hover text-accent-on font-sans font-semibold text-sm transition-all shadow-[0_2px_16px_rgba(212,162,76,0.28)] hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 mt-2"
            >
              <span>{formSent ? "Opening email client..." : "Send inquiry"}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
