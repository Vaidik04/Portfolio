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
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-bg/80 backdrop-blur-xl animate-fade-in font-sans">
      <div className="relative w-full max-w-xl bg-surface-1 border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[520px]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-border gap-3 bg-surface-2">
          <Search className="w-4 h-4 text-accent flex-shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, architecture, or credentials..."
            className="flex-1 bg-transparent text-sm text-text focus:outline-none placeholder:text-text-muted font-sans"
          />
          <button
            onClick={() => setPaletteOpen(false)}
            className="text-text-muted hover:text-text p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-4 text-xs">
          {/* Quick Navigation Commands */}
          <div>
            <span className="text-[10px] font-mono text-text-muted uppercase px-2 tracking-wider">
              Sections
            </span>
            <div className="grid grid-cols-2 gap-1.5 mt-1.5">
              <button
                onClick={() => navigateTo("hero")}
                className="flex items-center gap-2 p-2 rounded-xl hover:bg-surface-2 text-left text-text-muted hover:text-text transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Hero Overview</span>
              </button>
              <button
                onClick={() => navigateTo("architecture")}
                className="flex items-center gap-2 p-2 rounded-xl hover:bg-surface-2 text-left text-text-muted hover:text-text transition-colors"
              >
                <Shield className="w-3.5 h-3.5 text-accent" />
                <span>Architecture Story</span>
              </button>
              <button
                onClick={() => navigateTo("work")}
                className="flex items-center gap-2 p-2 rounded-xl hover:bg-surface-2 text-left text-text-muted hover:text-text transition-colors"
              >
                <Layers className="w-3.5 h-3.5 text-accent" />
                <span>Flagship Work</span>
              </button>
              <button
                onClick={() => navigateTo("engineering")}
                className="flex items-center gap-2 p-2 rounded-xl hover:bg-surface-2 text-left text-text-muted hover:text-text transition-colors"
              >
                <FileCode className="w-3.5 h-3.5 text-accent" />
                <span>Engineering Standards</span>
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
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-surface-2 text-left group transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {p.links.playStore ? (
                        <Play className="w-3.5 h-3.5 text-accent fill-accent flex-shrink-0" />
                      ) : (
                        <Layers className="w-3.5 h-3.5 text-text-muted flex-shrink-0" />
                      )}
                      <span className="text-text font-bold truncate group-hover:text-accent">
                        {p.name}
                      </span>
                      <span className="text-text-muted truncate text-[11px] hidden sm:inline">
                        — {p.tagline}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-2 text-text-muted">
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
              <span className="text-[10px] font-mono text-text-muted uppercase px-2 tracking-wider">
                Certifications ({filteredCerts.length})
              </span>
              <div className="space-y-1 mt-1.5">
                {filteredCerts.slice(0, 4).map((c) => (
                  <button
                    key={c.id}
                    onClick={() => navigateTo("credentials")}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-surface-2 text-left group transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Award className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span className="text-text font-bold truncate group-hover:text-accent">
                        {c.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-2 text-text-muted">
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
