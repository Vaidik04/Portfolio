"use client";

import React, { useState, useEffect } from "react";
import { useWorldStore } from "@/store/useWorldStore";
import { sounds } from "@/lib/sound";
import { PROJECTS } from "@/data/projects";
import { CERTIFICATES } from "@/data/certificates";
import {
  Search,
  Sparkles,
  Layers,
  Award,
  Cpu,
  Mail,
  ArrowUpRight,
  Play,
  X,
} from "lucide-react";

export const CommandPalette: React.FC = () => {
  const { paletteOpen, setPaletteOpen } = useWorldStore();
  const [query, setQuery] = useState("");

  // Toggle on Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        sounds.tick();
        setPaletteOpen(!paletteOpen);
      }
      if (e.key === "Escape" && paletteOpen) {
        setPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paletteOpen, setPaletteOpen]);

  if (!paletteOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredProjects = PROJECTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.techStack.some((t) => t.toLowerCase().includes(q))
  );

  const filteredCerts = CERTIFICATES.filter(
    (c) =>
      c.title.toLowerCase().includes(q) ||
      c.issuer.toLowerCase().includes(q) ||
      c.skillsLearned.some((s) => s.toLowerCase().includes(q))
  );

  const navigateTo = (id: string) => {
    sounds.tick();
    setPaletteOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/75 backdrop-blur-xl animate-fade-in font-mono">
      <div className="relative w-full max-w-xl bg-[#090C14] border border-white/15 rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[520px]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3 bg-surface-elevated/50">
          <Search className="w-4 h-4 text-accent-cyan flex-shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to project, certification, or architecture..."
            className="flex-1 bg-transparent text-sm text-typography-primary focus:outline-none placeholder:text-typography-muted font-sans"
          />
          <button onClick={() => setPaletteOpen(false)} className="text-typography-muted hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-4 text-xs">
          {/* Quick Navigation Commands */}
          <div>
            <span className="text-[10px] text-typography-muted uppercase px-2 tracking-wider">Navigation</span>
            <div className="grid grid-cols-2 gap-1.5 mt-1.5">
              <button
                onClick={() => navigateTo("hero")}
                className="flex items-center gap-2 p-2 rounded-xl hover:bg-white/5 text-left text-typography-secondary hover:text-typography-primary"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent-android" />
                <span>01 // Hero & Assembling Phone</span>
              </button>
              <button
                onClick={() => navigateTo("skills")}
                className="flex items-center gap-2 p-2 rounded-xl hover:bg-white/5 text-left text-typography-secondary hover:text-typography-primary"
              >
                <Cpu className="w-3.5 h-3.5 text-accent-violet" />
                <span>02 // 3D Skill Galaxy</span>
              </button>
              <button
                onClick={() => navigateTo("projects")}
                className="flex items-center gap-2 p-2 rounded-xl hover:bg-white/5 text-left text-typography-secondary hover:text-typography-primary"
              >
                <Layers className="w-3.5 h-3.5 text-accent-cyan" />
                <span>03 // Project Flight Deck</span>
              </button>
              <button
                onClick={() => navigateTo("credentials")}
                className="flex items-center gap-2 p-2 rounded-xl hover:bg-white/5 text-left text-typography-secondary hover:text-typography-primary"
              >
                <Award className="w-3.5 h-3.5 text-accent-android" />
                <span>04 // Verified NPTEL & Credentials</span>
              </button>
            </div>
          </div>

          {/* Filtered Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <span className="text-[10px] text-typography-muted uppercase px-2 tracking-wider">
                Applications ({filteredProjects.length})
              </span>
              <div className="space-y-1 mt-1.5">
                {filteredProjects.slice(0, 6).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => navigateTo("projects")}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-white/5 text-left group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {p.links.playStore ? (
                        <Play className="w-3.5 h-3.5 text-accent-android fill-current flex-shrink-0" />
                      ) : (
                        <Layers className="w-3.5 h-3.5 text-typography-muted flex-shrink-0" />
                      )}
                      <span className="text-typography-primary font-bold truncate group-hover:text-accent-android">
                        {p.name}
                      </span>
                      <span className="text-typography-muted truncate text-[11px] hidden sm:inline">
                        — {p.tagline}
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-typography-muted">
                      {p.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Filtered Certs */}
          {filteredCerts.length > 0 && (
            <div>
              <span className="text-[10px] text-typography-muted uppercase px-2 tracking-wider">
                Certifications ({filteredCerts.length})
              </span>
              <div className="space-y-1 mt-1.5">
                {filteredCerts.slice(0, 4).map((c) => (
                  <button
                    key={c.id}
                    onClick={() => navigateTo("credentials")}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-white/5 text-left group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Award className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
                      <span className="text-typography-primary font-bold truncate group-hover:text-accent-cyan">
                        {c.title}
                      </span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan">
                      {c.badge || "Verified"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
