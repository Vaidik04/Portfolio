import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar/Navbar";
import { FooterSection } from "@/sections/FooterSection";
import { PROJECTS } from "@/data/projects";
import {
  ArrowLeft,
  Play,
  Github,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  Code2,
  Cpu,
} from "lucide-react";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectCaseStudyPage({ params }: { params: { id: string } }) {
  const project = PROJECTS.find((p) => p.id === params.id);
  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col selection:bg-accent selection:text-accent-on">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-6 pt-32 sm:pt-40 pb-24 w-full">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Flagship Work</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <span>
              Project {currentIndex + 1} of {PROJECTS.length}
            </span>
          </div>
        </div>

        {/* Project Hero Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-border">
          <div className="flex items-start sm:items-center gap-5">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-surface-2 border border-border p-2.5 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-xl">
              <Image
                src={project.icon}
                alt={project.name}
                width={80}
                height={80}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-[11px] font-mono px-3 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/30 font-semibold uppercase">
                  {project.badge}
                </span>
                <span className="text-xs font-mono text-text-muted">
                  {project.platform}
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-surface-1 text-text-muted border border-border flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-accent" />
                  <span>{project.timeline}</span>
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-text">
                {project.name}
              </h1>
              <p className="text-sm sm:text-base text-text-muted mt-1 font-sans">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-accent-on text-xs font-sans font-semibold tracking-wide transition-all shadow-[0_2px_14px_rgba(212,162,76,0.25)] hover:scale-[1.02]"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>View on Google Play</span>
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-1 border border-border hover:border-border-hover text-text-muted hover:text-text text-xs font-mono transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Fictional Sample Data Note */}
        <div className="my-6 p-3.5 rounded-xl bg-surface-1 border border-border text-xs font-mono text-text-muted flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>Privacy & Data Sovereignty Note: All customer names, ledger entries, and amounts shown in these case studies are strictly fictional sample data.</span>
        </div>

        {/* Problem Statement & Hard Constraint */}
        <section className="py-12 border-b border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-surface-1 border border-border flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
                The Practical Problem
              </span>
              <p className="text-sm sm:text-base font-sans text-text leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-1 border border-border flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-accent">
                The Architecture Solution
              </span>
              <p className="text-sm sm:text-base font-sans text-text-muted leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Key Technical Highlights */}
        <section className="py-12 border-b border-border">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent mb-4">
            <Layers className="w-4 h-4" />
            <span>Architecture Decisions</span>
          </div>
          <h2 className="text-2xl font-heading font-bold text-text mb-6">
            Key Capabilities & Hardening
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-xs sm:text-sm text-text-muted bg-surface-1 p-4 rounded-xl border border-border"
              >
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Verified Code Snippet (if available) */}
        {project.codeSnippet && (
          <section className="py-12 border-b border-border">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted mb-4">
              <Code2 className="w-4 h-4 text-accent" />
              <span>Verified Source Architecture</span>
            </div>
            <h2 className="text-2xl font-heading font-bold text-text mb-6">
              Production Implementation
            </h2>

            <div className="rounded-2xl overflow-hidden border border-border bg-[#08090C] shadow-2xl">
              <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface-2/80">
                <span className="text-xs font-mono text-text-muted">
                  {project.codeSnippet.filename}
                </span>
                <span className="text-xs font-mono uppercase text-accent font-semibold">
                  {project.codeSnippet.language}
                </span>
              </div>
              <pre className="p-6 text-xs sm:text-sm font-mono text-text overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section className="py-12 border-b border-border">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted mb-4">
            <Cpu className="w-4 h-4" />
            <span>Technologies Used</span>
          </div>
          <h2 className="text-2xl font-heading font-bold text-text mb-6">
            Stack & Dependencies
          </h2>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-mono px-3.5 py-1.5 rounded-lg bg-surface-2 text-text-muted border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Previous / Next Navigation */}
        <div className="py-12 flex items-center justify-between gap-4">
          <Link
            href={`/projects/${prevProject.id}`}
            className="flex items-center gap-3 p-4 rounded-xl bg-surface-1 border border-border hover:border-border-hover transition-all text-left max-w-[45%]"
          >
            <ArrowLeft className="w-4 h-4 text-text-muted" />
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono text-text-muted uppercase block">
                Previous
              </span>
              <span className="text-sm font-heading font-bold text-text truncate block">
                {prevProject.name}
              </span>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.id}`}
            className="flex items-center justify-end gap-3 p-4 rounded-xl bg-surface-1 border border-border hover:border-border-hover transition-all text-right max-w-[45%]"
          >
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono text-text-muted uppercase block">
                Next
              </span>
              <span className="text-sm font-heading font-bold text-text truncate block">
                {nextProject.name}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-text-muted" />
          </Link>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
