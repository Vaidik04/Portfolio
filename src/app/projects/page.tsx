"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { PROJECTS, Project } from "@/data/projects";
import {
  Search,
  Play,
  Github,
  ArrowUpRight,
  ArrowLeft,
  LayoutGrid,
  List,
  Calendar,
  Layers,
  Sparkles,
  ShieldCheck,
  Radio,
} from "lucide-react";
import { proceduralAudio } from "@/lib/proceduralAudio";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    { id: "all", label: `All (${PROJECTS.length})` },
    { id: "playstore", label: `Google Play`, isSpecial: true },
    { id: "commercial", label: `Commercial Sovereign` },
    { id: "systems", label: `Systems & Mesh` },
    { id: "ai", label: `Edge AI & Vision` },
    { id: "tools", label: `Developer Tools` },
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
    <div className="min-h-screen bg-bg text-text flex flex-col selection:bg-accent selection:text-accent-on relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05060A]">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-android/5 blur-[160px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-cyan/5 blur-[160px]" />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1 max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-14 w-full">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-border/60">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-android/10 border border-accent-android/30 text-accent-android text-xs font-mono uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Engineering Catalog</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-text">
              Applications & Systems
            </h1>
            <p className="text-text-muted text-base sm:text-lg max-w-2xl mt-3 font-sans leading-relaxed">
              Verified production Android applications on Google Play, air-gapped wireless mesh protocols, on-device vision systems, and mathematical financial models.
            </p>
          </div>

          {/* Controls: Search & View Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects, stack, problem..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-surface-2/80 border border-border text-xs text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors font-sans"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-full bg-surface-2/80 border border-border self-start sm:self-auto">
              <button
                onClick={() => {
                  proceduralAudio.tick();
                  setViewMode("grid");
                }}
                style={viewMode === "grid" ? { backgroundColor: "#3DDC84", color: "#05060A" } : {}}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === "grid"
                    ? "font-bold shadow-sm"
                    : "text-text-muted hover:text-text"
                }`}
                title="Grid view"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  proceduralAudio.tick();
                  setViewMode("list");
                }}
                style={viewMode === "list" ? { backgroundColor: "#3DDC84", color: "#05060A" } : {}}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === "list"
                    ? "font-bold shadow-sm"
                    : "text-text-muted hover:text-text"
                }`}
                title="List view"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                proceduralAudio.tick();
                setSelectedCategory(cat.id);
              }}
              style={selectedCategory === cat.id ? { backgroundColor: "#3DDC84", color: "#05060A" } : {}}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "shadow-sm font-bold"
                  : "bg-surface-1/80 border border-border text-text-muted hover:text-text"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-xs font-mono text-text-muted mb-6 flex items-center justify-between">
          <span>Showing {filtered.length} of {PROJECTS.length} verified projects</span>
          <span className="text-[11px] text-accent-android">100% Offline-First Architecture</span>
        </div>

        {/* Grid View */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => {
              const hasPlayStore = Boolean(project.links.playStore);
              return (
                <div
                  key={project.id}
                  className={`p-6 rounded-3xl bg-[#0E1118]/85 backdrop-blur-md border transition-all flex flex-col justify-between group hover:scale-[1.01] ${
                    hasPlayStore
                      ? "border-accent-android/30 hover:border-accent-android shadow-[0_0_20px_rgba(61,220,132,0.1)]"
                      : "border-white/10 hover:border-white/25"
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-surface-elevated/80 border border-white/10 p-2 flex items-center justify-center overflow-hidden">
                        <Image
                          src={project.icon}
                          alt={project.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-typography-muted border border-white/10">
                        {project.badge}
                      </span>
                    </div>

                    <div>
                      <Link
                        href={`/projects/${project.id}`}
                        onClick={() => proceduralAudio.tick()}
                        className="text-lg font-heading font-bold text-typography-primary hover:text-accent-android transition-colors block"
                      >
                        {project.name}
                      </Link>
                      <p className="text-xs text-typography-secondary mt-1.5 line-clamp-2 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {hasPlayStore && project.heroImage && (
                      <div className="relative mt-1 h-28 w-full rounded-xl overflow-hidden border border-white/10 bg-[#07080D]">
                        <Image
                          src={project.heroImage}
                          alt={`${project.name} Screenshot`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <span className="absolute bottom-1.5 left-2 text-[9px] font-mono text-typography-secondary">
                          Live Release Screen
                        </span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1 pt-2">
                      {project.techStack.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-typography-muted border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-typography-muted">
                      {project.timeline}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.links.playStore && (
                        <a
                          href={project.links.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-accent-android hover:brightness-125 transition-all"
                          title="View on Google Play"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-typography-muted hover:text-white transition-colors"
                          title="Source Code"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <Link
                        href={`/projects/${project.id}`}
                        onClick={() => proceduralAudio.tick()}
                        className="p-1.5 text-typography-muted hover:text-accent-android transition-colors"
                        title="Architecture & Case Study"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List View */
          <div className="flex flex-col divide-y divide-white/10 rounded-3xl border border-white/10 bg-[#0E1118]/85 backdrop-blur-md overflow-hidden">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-surface-elevated/80 border border-white/10 p-1.5 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={project.icon}
                      alt={project.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <Link
                      href={`/projects/${project.id}`}
                      onClick={() => proceduralAudio.tick()}
                      className="font-heading font-bold text-sm text-typography-primary hover:text-accent-android transition-colors block"
                    >
                      {project.name}
                    </Link>
                    <p className="text-xs text-typography-secondary line-clamp-1">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 self-end sm:self-center">
                  <span className="text-xs font-mono text-typography-muted">
                    {project.timeline}
                  </span>
                  {project.links.playStore && (
                    <a
                      href={project.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-accent-android hover:brightness-125 transition-all"
                      title="Google Play"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.id}`}
                    onClick={() => proceduralAudio.tick()}
                    className="p-1.5 rounded-lg border border-white/10 hover:border-accent-android text-typography-secondary hover:text-accent-android transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <FooterSection />
    </div>
  );
}
