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
  Play,
  X,
  ArrowUpRight,
  Shield,
  FileCode,
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
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-xl animate-fade-in font-sans">
      <div className="relative w-full max-w-xl bg-surface border border-surface-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[520px]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-surface-border gap-3 bg-surface-elevated">
          <Search className="w-4 h-4 text-brand flex-shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, architecture, or credentials..."
            className="flex-1 bg-transparent text-sm text-typography-primary focus:outline-none placeholder:text-typography-muted font-sans"
          />
          <button
            onClick={() => setPaletteOpen(false)}
            className="text-typography-muted hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-4 text-xs">
          {/* Quick Navigation Commands */}
          <div>
            <span className="text-[10px] font-mono text-typography-muted uppercase px-2 tracking-wider">
              Sections
            </span>
            <div className="grid grid-cols-2 gap-1.5 mt-1.5">
              <button
                onClick={() => navigateTo("hero")}
                className="flex items-center gap-2 p-2 rounded-xl hover:bg-surface-elevated text-left text-typography-secondary hover:text-typography-primary transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand" />
                <span>01 // Overview</span>
              </button>
              <button
                onClick={() => navigateTo("architecture")}
                className="flex items-center gap-2 p-2 rounded-xl hover:bg-surface-elevated text-left text-typography-secondary hover:text-typography-primary transition-colors"
              >
                <Shield className="w-3.5 h-3.5 text-brand" />
                <span>02 // Architecture Story</span>
              </button>
              <button
                onClick={() => navigateTo("work")}
                className="flex items-center gap-2 p-2 rounded-xl hover:bg-surface-elevated text-left text-typography-secondary hover:text-typography-primary transition-colors"
              >
                <Layers className="w-3.5 h-3.5 text-brand" />
                <span>03 // Production Work</span>
              </button>
              <button
                onClick={() => navigateTo("engineering")}
                className="flex items-center gap-2 p-2 rounded-xl hover:bg-surface-elevated text-left text-typography-secondary hover:text-typography-primary transition-colors"
              >
                <FileCode className="w-3.5 h-3.5 text-brand" />
                <span>04 // Engineering Standards</span>
              </button>
            </div>
          </div>

          {/* Filtered Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <span className="text-[10px] font-mono text-typography-muted uppercase px-2 tracking-wider">
                Applications ({filteredProjects.length})
              </span>
              <div className="space-y-1 mt-1.5">
                {filteredProjects.slice(0, 6).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => navigateTo("work")}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-surface-elevated text-left group transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {p.links.playStore ? (
                        <Play className="w-3.5 h-3.5 text-brand fill-brand flex-shrink-0" />
                      ) : (
                        <Layers className="w-3.5 h-3.5 text-typography-muted flex-shrink-0" />
                      )}
                      <span className="text-typography-primary font-bold truncate group-hover:text-brand">
                        {p.name}
                      </span>
                      <span className="text-typography-muted truncate text-[11px] hidden sm:inline">
                        — {p.tagline}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-typography-muted">
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
              <span className="text-[10px] font-mono text-typography-muted uppercase px-2 tracking-wider">
                Certifications ({filteredCerts.length})
              </span>
              <div className="space-y-1 mt-1.5">
                {filteredCerts.slice(0, 4).map((c) => (
                  <button
                    key={c.id}
                    onClick={() => navigateTo("credentials")}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-surface-elevated text-left group transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Award className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                      <span className="text-typography-primary font-bold truncate group-hover:text-brand">
                        {c.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-typography-muted">
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
