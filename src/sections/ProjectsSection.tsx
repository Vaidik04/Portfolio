"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, Project } from "@/data/projects";
import { useWorldStore } from "@/store/useWorldStore";
import {
  Play,
  Github,
  ArrowUpRight,
  Search,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowDown,
  ExternalLink,
  Sparkles,
} from "lucide-react";

// The 3 Flagship Published Google Play Applications
const FLAGSHIP_IDS = ["girvi", "jewelbill", "advokosh"];

export const ProjectsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { setActiveAppId } = useWorldStore();

  const flagships = PROJECTS.filter((p) => FLAGSHIP_IDS.includes(p.id));
  const archiveProjects = PROJECTS.filter((p) => !FLAGSHIP_IDS.includes(p.id));

  const filteredArchive = archiveProjects.filter((p) => {
    const matchesCat = selectedCategory === "all" || p.category === selectedCategory;
    if (!searchQuery) return matchesCat;
    const q = searchQuery.toLowerCase();
    const matchesQuery =
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.techStack.some((t) => t.toLowerCase().includes(q));
    return matchesCat && matchesQuery;
  });

  return (
    <section
      id="work"
      className="relative py-32 px-6 max-w-6xl mx-auto w-full border-t border-surface-border z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-4 mb-20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs font-mono tracking-wider uppercase text-text-muted">
            Curated Flagship Work
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-text leading-tight">
          Production applications.
        </h2>
        <p className="text-base sm:text-lg text-text-muted font-sans leading-relaxed max-w-2xl">
          Three flagship commercial applications actively published on the Google Play Store, engineered from direct field observation of India&apos;s traditional trades.
        </p>
      </div>

      {/* 3 Art-Directed Flagship Project Stories */}
      <div className="flex flex-col gap-24">
        {flagships.map((project, index) => (
          <article
            key={project.id}
            className="p-8 sm:p-12 rounded-3xl bg-surface-1 border border-border flex flex-col lg:flex-row gap-12 items-start justify-between shadow-xl relative overflow-hidden group hover:border-border-hover transition-colors"
          >
            {/* Left Column: Project Narrative */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold">
                  FLAGSHIP 0{index + 1}
                </span>
                <span className="text-xs font-mono text-text-muted">
                  {project.timeline}
                </span>
                <span className="text-xs font-mono text-text-muted border-l border-border pl-3">
                  Google Play Release
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-text tracking-tight">
                  {project.name}
                </h3>
                <p className="text-sm sm:text-base text-text-muted font-sans mt-2 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Problem & Hard Constraint */}
              <div className="flex flex-col gap-4 py-4 border-y border-border text-sm font-sans leading-relaxed">
                <div>
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-1">
                    The Problem
                  </span>
                  <p className="text-text font-medium">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-1">
                    The Architecture Solution
                  </span>
                  <p className="text-text-muted">{project.solution}</p>
                </div>
              </div>

              {/* Key Architecture Decisions */}
              <div className="flex flex-col gap-2.5">
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                  Key Architecture Decisions
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-text-muted">
                  {project.highlights.slice(0, 4).map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack & CTAs */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-surface-2 border border-border text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.links.playStore && (
                    <a
                      href={project.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent hover:bg-accent-hover text-accent-on text-xs font-sans font-semibold transition-all shadow-[0_2px_14px_rgba(212,162,76,0.25)]"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>View on Google Play</span>
                    </a>
                  )}

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border hover:border-border-hover text-text-muted hover:text-text text-xs font-sans transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Mockup Preview */}
            <div className="w-full lg:w-[320px] flex-shrink-0 rounded-2xl overflow-hidden border border-border bg-surface-2 p-4 flex flex-col justify-between shadow-2xl">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <span className="text-xs font-mono font-bold text-text">
                    {project.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  Verified APK
                </span>
              </div>

              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-bg flex items-center justify-center p-3 group/preview">
                {project.id === "advokosh" ? (
                  <Image
                    src="/assets/advokosh_screen1.png"
                    alt="AdvoKosh Android App Screenshot"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
                  />
                ) : project.id === "jewelbill" ? (
                  <Image
                    src="/assets/jewelbill_screen.png"
                    alt="JewelBill Android App Screenshot"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <Image
                      src={project.icon}
                      alt={project.name}
                      width={130}
                      height={130}
                      className="object-contain rounded-3xl shadow-2xl transition-transform duration-500 group-hover/preview:scale-105"
                    />
                    <span className="text-[11px] font-mono text-text-muted">
                      Girvi Core · Token #GV-1048
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-border text-[11px] font-mono text-text-muted flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setActiveAppId(project.id as "girvi" | "jewelbill" | "advokosh");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1.5 text-accent hover:underline font-semibold"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Inspect in 3D Phone ↑</span>
                </button>
                <span className="text-text-muted">Google Play</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Secondary Section: Selected Engineering Archive Table */}
      <div className="mt-32 pt-20 border-t border-border">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-accent" />
              <span className="text-xs font-mono tracking-wider uppercase text-text-muted">
                Complete Engineering Catalog
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-text">
              Selected Engineering Archive
            </h3>
            <p className="text-sm text-text-muted font-sans mt-1">
              Systems, distributed P2P experiments, AI research, and developer tools.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-typography-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search archive..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-surface-elevated border border-surface-border text-xs text-typography-primary placeholder:text-typography-muted focus:outline-none focus:border-brand font-sans transition-colors"
            />
          </div>
        </div>

        {/* Clean Archive Table */}
        <div className="overflow-x-auto rounded-2xl border border-surface-border bg-surface">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-surface-border text-typography-muted font-mono uppercase text-[10px] tracking-wider">
                <th className="py-3.5 px-6">Year</th>
                <th className="py-3.5 px-6">Project</th>
                <th className="py-3.5 px-6 hidden md:table-cell">Category</th>
                <th className="py-3.5 px-6 hidden lg:table-cell">Stack</th>
                <th className="py-3.5 px-6 text-right">Links</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border">
              {filteredArchive.map((p) => (
                <tr
                  key={p.id}
                  className="hover:bg-surface-elevated/50 transition-colors group"
                >
                  <td className="py-4 px-6 font-mono text-typography-muted whitespace-nowrap">
                    {p.timeline.split(" ")[0]}
                  </td>
                  <td className="py-4 px-6">
                    <Link
                      href={`/projects/${p.id}`}
                      className="font-heading font-bold text-sm text-typography-primary group-hover:text-brand transition-colors block"
                    >
                      {p.name}
                    </Link>
                    <span className="text-typography-secondary text-[11px] line-clamp-1">
                      {p.tagline}
                    </span>
                  </td>
                  <td className="py-4 px-6 hidden md:table-cell font-mono text-typography-muted uppercase text-[10px]">
                    {p.category}
                  </td>
                  <td className="py-4 px-6 hidden lg:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {p.techStack.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated border border-surface-border text-typography-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-2">
                      {p.links.github && (
                        <a
                          href={p.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-typography-muted hover:text-white transition-colors"
                          title="View GitHub Source"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <Link
                        href={`/projects/${p.id}`}
                        className="p-1.5 text-typography-muted hover:text-brand transition-colors"
                        title="Open Case Study"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
