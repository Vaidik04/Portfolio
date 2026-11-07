"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/skills";
import { Smartphone, Eye, Server, ShieldCheck, CheckCircle2 } from "lucide-react";

export const TechStackSection: React.FC = () => {
  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Smartphone className="w-4 h-4 text-accent" />;
      case 1:
        return <Eye className="w-4 h-4 text-accent" />;
      case 2:
        return <Server className="w-4 h-4 text-accent" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <section className="relative py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((category, catIdx) => (
          <div
            key={category.name}
            className="p-6 sm:p-8 rounded-2xl bg-surface-1 border border-border flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-surface-2 border border-border flex items-center justify-center">
                    {getCategoryIcon(catIdx)}
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-bold text-text">
                      {category.name}
                    </h3>
                    <p className="text-xs text-text-muted font-sans mt-0.5">
                      {category.tagline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-surface-2 border border-border flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-text font-sans">
                        {skill.name}
                      </span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20 font-semibold uppercase">
                        {skill.level}
                      </span>
                    </div>
                    <span className="text-[10px] text-text-muted font-mono">
                      {skill.highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border flex items-center justify-between text-[11px] font-mono text-text-muted">
              <span>Production Verified</span>
              <span className="text-brand">VaidikTech Standard</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
