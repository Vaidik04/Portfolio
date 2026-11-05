"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { TiltCard } from "@/components/ui/TiltCard";
import { PROJECTS, Project } from "@/data/projects";
import {
  Search,
  Play,
  Github,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  ChevronRight,
  Sparkles,
  ArrowLeft,
  LayoutGrid,
  List,
  Calendar,
} from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const playstoreCount = PROJECTS.filter((p) => Boolean(p.links.playStore)).length;
  const commercialCount = PROJECTS.filter((p) => p.category === "commercial").length;
  const systemsCount = PROJECTS.filter((p) => p.category === "systems").length;
  const aiCount = PROJECTS.filter((p) => p.category === "ai").length;
  const toolsCount = PROJECTS.filter((p) => p.category === "tools").length;

  const categories = [
    { id: "all", label: `All Projects (${PROJECTS.length})` },
    { id: "playstore", label: `Google Play Store (${playstoreCount})`, isSpecial: true },
    { id: "commercial", label: `Commercial Android (${commercialCount})` },
    { id: "systems", label: `P2P & Distributed (${systemsCount})` },
    { id: "ai", label: `AI & Vision (${aiCount})` },
    { id: "tools", label: `Tools & Python (${toolsCount})` },
  ];

  const filtered = PROJECTS.filter((p) => {
    let matchCat = true;
    if (selectedCategory === "playstore") {
      matchCat = Boolean(p.links.playStore);
    } else if (selectedCategory !== "all") {
      matchCat = p.category === selectedCategory;
    }

    if (!searchQuery) return matchCat;
    const q = searchQuery.toLowerCase();
    const inName = p.name.toLowerCase().includes(q);
    const inTagline = p.tagline.toLowerCase().includes(q);
    const inTech = p.techStack.some((t) => t.toLowerCase().includes(q));
    const inProblem = p.problem.toLowerCase().includes(q);
    return matchCat && (inName || inTagline || inTech || inProblem);
  });

  return (
    <div className="min-h-screen bg-[#05060A] text-typography-primary flex flex-col selection:bg-accent-android selection:text-[#05060A]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 pt-32 sm:pt-40 pb-24 w-full">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-typography-secondary hover:text-accent-android transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-android/10 border border-accent-android/30 text-accent-android text-xs font-mono uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Engineering Catalog</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-typography-primary">
              All Applications & Systems
            </h1>
            <p className="text-typography-secondary text-base sm:text-lg max-w-2xl mt-3 font-sans">
              21 production applications, air-gapped security frameworks, computer vision engines, and mathematical financial models engineered by Vaidik Gandhi.
            </p>
          </div>

          {/* Controls: Search & View Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-typography-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by keyword, tech, problem..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-surface-elevated border border-white/10 text-xs text-typography-primary placeholder:text-typography-muted focus:outline-none focus:border-accent-android/60 transition-colors font-mono"
              />
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center p-1 rounded-full bg-surface-elevated border border-white/10 self-start sm:self-auto">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === "grid"
                    ? "bg-accent-android text-[#05060A]"
                    : "text-typography-muted hover:text-white"
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === "list"
                    ? "bg-accent-android text-[#05060A]"
                    : "text-typography-muted hover:text-white"
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 my-8">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-sans font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                  isSelected
                    ? cat.isSpecial
                      ? "bg-accent-android text-[#05060A] shadow-[0_0_24px_rgba(61,220,132,0.45)] ring-2 ring-accent-android"
                      : "bg-white text-[#05060A] shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                    : cat.isSpecial
                    ? "bg-accent-android/10 border border-accent-android/30 text-accent-android hover:bg-accent-android/20"
                    : "bg-surface border border-surface-border text-typography-secondary hover:text-typography-primary hover:border-white/20"
                }`}
              >
                {cat.isSpecial && <Play className="w-2.5 h-2.5 fill-current" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* View: Grid */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => {
              const hasPlayStore = Boolean(project.links.playStore);

              return (
                <TiltCard
                  key={project.id}
                  className={`p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-500 ${
                    hasPlayStore ? "ring-1 ring-accent-android/30 bg-gradient-to-b from-surface-elevated/90 to-surface/90" : ""
                  }`}
                  glowColor={
                    hasPlayStore ? "rgba(61, 220, 132, 0.22)" : "rgba(124, 92, 255, 0.16)"
                  }
                >
                  {hasPlayStore && (
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent-android to-transparent opacity-80" />
                  )}

                  <div className="flex flex-col gap-4">
                    {/* Badge & Timeline */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-bold uppercase flex items-center gap-1.5 ${
                          project.badgeType === "playstore"
                            ? "bg-accent-android/15 text-accent-android border border-accent-android/40 shadow-[0_0_12px_rgba(61,220,132,0.25)]"
                            : project.badgeType === "production"
                            ? "bg-accent-violet/15 text-accent-violet border border-accent-violet/30"
                            : "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30"
                        }`}
                      >
                        {project.badgeType === "playstore" ? (
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-android opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-android"></span>
                          </span>
                        ) : (
                          <ShieldCheck className="w-2.5 h-2.5" />
                        )}
                        <span>{project.badge}</span>
                      </span>

                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-typography-muted bg-white/[0.04] border border-white/5 px-2 py-0.5 rounded-md flex-shrink-0">
                        <Calendar className="w-2.5 h-2.5 text-accent-android/70" />
                        <span>{project.timeline}</span>
                      </div>
                    </div>

                    {/* App Identity */}
                    <div className="flex items-center gap-3 pt-1">
                      <div className="w-12 h-12 rounded-2xl bg-surface-elevated border border-white/10 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300">
                        <Image
                          src={project.icon}
                          alt={project.name}
                          width={44}
                          height={44}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/projects/${project.id}`}
                          className="text-lg font-heading font-bold text-typography-primary truncate block hover:text-accent-android transition-colors"
                        >
                          {project.name}
                        </Link>
                        <p className="text-xs text-typography-muted truncate font-sans">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Problem */}
                    <p className="text-xs text-typography-secondary leading-relaxed line-clamp-3 font-sans">
                      {project.problem}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-surface-elevated/50 border border-white/5">
                      {project.keyMetrics.slice(0, 2).map((metric, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[9px] font-mono text-typography-muted uppercase tracking-wider">
                            {metric.label}
                          </span>
                          <span className="text-xs font-mono font-semibold text-typography-primary truncate">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-typography-secondary border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-typography-muted">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between pt-5 mt-4 border-t border-white/5 gap-2">
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-typography-primary hover:text-accent-android transition-colors py-1 group/btn"
                    >
                      <span>Explore Case Study</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>

                    <div className="flex items-center gap-1.5">
                      {project.links.playStore && (
                        <a
                          href={project.links.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-full bg-accent-android/15 hover:bg-accent-android/30 border border-accent-android/40 text-accent-android text-[11px] font-mono flex items-center gap-1 transition-all duration-200 shadow-[0_0_10px_rgba(61,220,132,0.2)]"
                          title="Open Google Play Store"
                        >
                          <Play className="w-2.5 h-2.5 fill-current" />
                          <span>Play</span>
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-full bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-typography-secondary hover:text-white transition-colors"
                          title="GitHub Repository"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <Link
                        href={`/projects/${project.id}`}
                        className="w-7 h-7 rounded-full bg-white/[0.05] hover:bg-accent-android hover:text-[#05060A] flex items-center justify-center text-typography-secondary transition-colors"
                        title="Dedicated Case Study Page"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        ) : (
          /* View: Compact List */
          <div className="space-y-3">
            {filtered.map((project) => {
              const hasPlayStore = Boolean(project.links.playStore);
              return (
                <div
                  key={project.id}
                  className={`p-4 rounded-2xl bg-surface border border-white/5 hover:border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 ${
                    hasPlayStore ? "border-accent-android/30 bg-surface-elevated/70" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-white/10 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <Image
                        src={project.icon}
                        alt={project.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <Link
                          href={`/projects/${project.id}`}
                          className="text-base font-heading font-bold text-typography-primary hover:text-accent-android transition-colors"
                        >
                          {project.name}
                        </Link>
                        <span
                          className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
                            project.badgeType === "playstore"
                              ? "bg-accent-android/15 text-accent-android border border-accent-android/40"
                              : "bg-white/[0.04] text-typography-muted border border-white/5"
                          }`}
                        >
                          {project.badge}
                        </span>
                        <span className="text-[10px] font-mono text-typography-muted bg-white/[0.03] border border-white/5 px-2 py-0.5 rounded-md flex items-center gap-1">
                          <Calendar className="w-2.5 h-2.5 text-accent-android/70" />
                          <span>{project.timeline}</span>
                        </span>
                      </div>
                      <p className="text-xs text-typography-secondary line-clamp-1">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-center">
                    <div className="hidden lg:flex items-center gap-1.5">
                      {project.techStack.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-typography-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.links.playStore && (
                      <a
                        href={project.links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full bg-accent-android/15 hover:bg-accent-android/30 border border-accent-android/40 text-accent-android text-xs font-mono flex items-center gap-1.5 transition-all"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Play Store</span>
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/[0.05] hover:bg-white/10 text-typography-secondary hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.id}`}
                      className="px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-accent-android hover:text-[#05060A] text-xs font-mono text-typography-primary transition-all flex items-center gap-1"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      <FooterSection />
    </div>
  );
}

