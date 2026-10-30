"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { Mail, Github, Linkedin, Send, Sparkles, CheckCircle2, Play } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [topic, setTopic] = useState<string>("android");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const TOPIC_PRESETS = [
    {
      id: "android",
      label: "Android Application",
      defaultText:
        "Hi Vaidik,\n\nI reviewed your portfolio and was impressed by Girvi, AdvoKosh, and JewelBill. I'd love to discuss engineering a native Android application for our business.\n\nBest regards,",
    },
    {
      id: "ai",
      label: "AI / Edge Vision",
      defaultText:
        "Hi Vaidik,\n\nI saw your work on SwarmOS (P2P nearby ML cluster) and SkyCanvas (MediaPipe Hands GPU). Let's collaborate on an on-device AI/vision project.\n\nBest regards,",
    },
    {
      id: "general",
      label: "General Discussion",
      defaultText:
        "Hi Vaidik,\n\nI came across your developer portfolio and wanted to connect regarding potential engineering opportunities.\n\nLooking forward to speaking with you!\nBest regards,",
    },
  ];

  const handleTopicChange = (newTopicId: string) => {
    setTopic(newTopicId);
    const found = TOPIC_PRESETS.find((t) => t.id === newTopicId);
    if (found) {
      setMessage(found.defaultText);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    // Trigger Awwwards-style confetti fireworks
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#3DDC84", "#7C5CFF", "#22D3EE", "#FFFFFF"],
    });

    setSubmitted(true);
    setTimeout(() => {
      // Open mailto link as reliable fallback
      const subject = encodeURIComponent(`Project Inquiry: ${name} (${topic})`);
      const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
      window.location.href = `mailto:vaidikgandhi@gmail.com?subject=${subject}&body=${body}`;
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden border-t border-white/5">
      {/* Background Volumetric Glows */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-accent-android/10 via-accent-cyan/10 to-accent-violet/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal direction="down">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-accent-android text-xs font-mono uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 · Direct Connection</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Statement & Links (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-[-0.035em] text-typography-primary leading-[1.05]">
                Let's build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-android via-accent-cyan to-accent-violet">
                  something real
                </span>
                .
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="text-base sm:text-lg text-typography-secondary font-sans leading-relaxed max-w-xl">
                I am interested in connecting with founders, businesses, and engineering leaders who are building meaningful, revenue-generating products.
              </p>
            </Reveal>

            {/* Direct Contact Cards */}
            <Reveal direction="up" delay={0.3}>
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href="mailto:vaidikgandhi@gmail.com"
                  className="p-4 rounded-2xl bg-surface border border-surface-border flex items-center justify-between transition-all duration-300 hover:border-accent-android/50 hover:bg-surface-hover group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-android/15 border border-accent-android/30 flex items-center justify-center text-accent-android">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-typography-muted">Direct Email</div>
                      <div className="text-sm font-sans font-semibold text-typography-primary group-hover:text-accent-android transition-colors">
                        vaidikgandhi@gmail.com
                      </div>
                    </div>
                  </div>
                  <Send className="w-4 h-4 text-typography-muted group-hover:text-accent-android group-hover:translate-x-1 transition-all" />
                </a>

                {/* Published Play Store Badges */}
                <div className="p-4 rounded-2xl bg-surface border border-surface-border flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-typography-muted uppercase tracking-wider">
                    Published Live on Google Play:
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.girvi.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-accent-android/10 border border-accent-android/30 text-xs font-mono text-accent-android font-medium hover:bg-accent-android hover:text-[#05060A] transition-colors flex items-center gap-1.5"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Girvi</span>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.jewellery.invoice"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-xs font-mono text-accent-cyan font-medium hover:bg-accent-cyan hover:text-[#05060A] transition-colors flex items-center gap-1.5"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>JewelBill</span>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.advokosh.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-accent-violet/10 border border-accent-violet/30 text-xs font-mono text-accent-violet font-medium hover:bg-accent-violet hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>AdvoKosh</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Social Links */}
            <Reveal direction="up" delay={0.4}>
              <div className="flex items-center gap-3 pt-2">
                <Magnetic strength={0.3}>
                  <a
                    href="https://github.com/Vaidik04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-surface border border-surface-border flex items-center justify-center text-typography-secondary hover:text-typography-primary hover:border-white/20 transition-colors"
                    title="GitHub (@Vaidik04)"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <a
                    href="https://www.linkedin.com/in/vaidik-gandhi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-surface border border-surface-border flex items-center justify-center text-typography-secondary hover:text-typography-primary hover:border-white/20 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Inquiry Form (6 Cols) */}
          <div className="lg:col-span-6">
            <Reveal direction="left" delay={0.2}>
              <div className="p-6 sm:p-8 rounded-3xl bg-surface-elevated/90 border border-white/15 backdrop-blur-xl shadow-2xl">
                <div className="text-lg font-heading font-bold text-typography-primary mb-1">
                  Fast Inquiry Generator
                </div>
                <p className="text-xs text-typography-muted font-sans mb-6">
                  Select a topic to generate a calibrated project brief:
                </p>

                {/* Preset Topic Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {TOPIC_PRESETS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleTopicChange(p.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                        topic === p.id
                          ? "bg-accent-android text-[#05060A] font-bold shadow-sm"
                          : "bg-surface border border-white/10 text-typography-secondary hover:text-typography-primary"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-accent-android/10 border border-accent-android/30 text-center flex flex-col items-center gap-3">
                    <CheckCircle2 className="w-12 h-12 text-accent-android" />
                    <div className="text-lg font-heading font-bold text-typography-primary">
                      Inquiry Dispatched!
                    </div>
                    <p className="text-xs text-typography-secondary max-w-sm">
                      Opening your email client to complete transmission. You can also directly reach me at vaidikgandhi@gmail.com.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-typography-muted uppercase tracking-wider block mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-xs sm:text-sm text-typography-primary placeholder:text-typography-muted focus:outline-none focus:border-accent-android/60 transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono text-typography-muted uppercase tracking-wider block mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rahul@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-xs sm:text-sm text-typography-primary placeholder:text-typography-muted focus:outline-none focus:border-accent-android/60 transition-colors font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono text-typography-muted uppercase tracking-wider block mb-1.5">
                        Message & Requirements
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 text-xs sm:text-sm text-typography-primary placeholder:text-typography-muted focus:outline-none focus:border-accent-android/60 transition-colors font-sans resize-none leading-relaxed"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3.5 rounded-xl bg-accent-android text-[#05060A] font-sans font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(61,220,132,0.35)] hover:shadow-[0_0_40px_rgba(61,220,132,0.6)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                    >
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
