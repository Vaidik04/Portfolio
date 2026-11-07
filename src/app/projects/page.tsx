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
} from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    { id: "all", label: `All (${PROJECTS.length})` },
    { id: "playstore", label: `Google Play`, isSpecial: true },
    { id: "commercial", label: `Commercial` },
    { id: "systems", label: `P2P & Systems` },
    { id: "ai", label: `AI & Vision` },
    { id: "tools", label: `Tools` },
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
    <div className="min-h-screen bg-[#0B0C0E] text-typography-primary flex flex-col selection:bg-brand selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-6 pt-32 sm:pt-40 pb-24 w-full">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-typography-secondary hover:text-brand transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-surface-border">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/30 text-brand text-xs font-mono uppercase tracking-widest mb-4">
              <span>Full Engineering Catalog</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight text-typography-primary">
              All Applications & Systems
            </h1>
            <p className="text-typography-secondary text-base sm:text-lg max-w-2xl mt-3 font-sans">
              {PROJECTS.length} verified production applications, air-gapped security frameworks, computer vision engines, and mathematical financial models engineered by Vaidik Gandhi.
            </p>
          </div>

          {/* Controls: Search & View Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-typography-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-surface-elevated border border-surface-border text-xs text-typography-primary placeholder:text-typography-muted focus:outline-none focus:border-brand transition-colors font-sans"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-full bg-surface-elevated border border-surface-border self-start sm:self-auto">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === "grid"
                    ? "bg-brand text-white"
                    : "text-typography-muted hover:text-white"
                }`}
                title="Grid view"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === "list"
                    ? "bg-brand text-white"
                    : "text-typography-muted hover:text-white"
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
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "bg-brand text-white shadow-sm"
                  : "bg-surface border border-surface-border text-typography-secondary hover:text-typography-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-xs font-mono text-typography-muted mb-6">
          Showing {filtered.length} of {PROJECTS.length} verified projects
        </div>

        {/* Grid View */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => {
              const hasPlayStore = Boolean(project.links.playStore);
              return (
                <div
                  key={project.id}
                  className={`p-6 rounded-2xl bg-surface border transition-colors flex flex-col justify-between group ${
                    hasPlayStore ? "border-brand/30 hover:border-brand" : "border-surface-border hover:border-surface-border-hover"
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-surface-border p-2 flex items-center justify-center overflow-hidden">
                        <Image
                          src={project.icon}
                          alt={project.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-surface-elevated text-typography-muted border border-surface-border">
                        {project.badge}
                      </span>
                    </div>

                    <div>
                      <Link
                        href={`/projects/${project.id}`}
                        className="text-lg font-heading font-bold text-typography-primary hover:text-brand transition-colors block"
                      >
                        {project.name}
                      </Link>
                      <p className="text-xs text-typography-secondary mt-1 line-clamp-2 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-2">
                      {project.techStack.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-typography-muted border border-surface-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-surface-border flex items-center justify-between">
                    <span className="text-[11px] font-mono text-typography-muted">
                      {project.timeline}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.links.playStore && (
                        <a
                          href={project.links.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-brand hover:text-brand-light transition-colors"
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
                        className="p-1.5 text-typography-muted hover:text-brand transition-colors"
                        title="Case Study"
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
          <div className="flex flex-col divide-y divide-surface-border rounded-2xl border border-surface-border bg-surface overflow-hidden">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-surface-elevated/40 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-surface-border p-1.5 flex-shrink-0 flex items-center justify-center">
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
                      className="font-heading font-bold text-sm text-typography-primary hover:text-brand transition-colors block"
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
                  <Link
                    href={`/projects/${project.id}`}
                    className="p-1.5 rounded-lg border border-surface-border hover:border-brand text-typography-secondary hover:text-brand transition-colors"
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
