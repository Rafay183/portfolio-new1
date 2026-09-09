import React, { useState } from 'react';
import { SELECTED_PROJECTS } from '../data/portfolioData';
import { ProjectCardItem } from '../types';
import {
  FolderGit2,
  ExternalLink,
  Tag,
  CheckCircle2,
  ArrowRight,
  PlusCircle,
  ShieldCheck,
} from 'lucide-react';

interface ProjectsSectionProps {
  onOpenConsultation: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenConsultation }) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = [
    'All',
    'LLM Applications',
    'AI Automation',
    'AI Integration',
    'Data & Analytics',
  ];

  const filteredProjects =
    filterCategory === 'All'
      ? SELECTED_PROJECTS
      : SELECTED_PROJECTS.filter((p) => p.category === filterCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#070A0F] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/60">
              Architectural Blueprints
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              Selected Work &amp; AI Experiments
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Real engineering solutions built on production principles. Each project demonstrates the translation of a concrete business objective into a working technical system.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5 shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Honest Technical Documentation</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = filterCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project: ProjectCardItem) => (
            <div
              key={project.id}
              className="p-6 sm:p-7 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-blue-500/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-blue-950/60 text-blue-300 border border-blue-800/50">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Architecture Case
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  {project.summary}
                </p>

                {/* Objective & Implementation Blocks */}
                <div className="space-y-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold block mb-1">
                      Objective / Problem:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.objective}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
                      Implementation / Solution:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.implementation}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                      Outcome / Business Value:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                    Technology Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Inquire about similar architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] font-mono text-slate-400">
                  Production Blueprint
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Project Placeholder Slot */}
        <div className="mt-8 p-6 rounded-2xl bg-slate-950/40 border border-dashed border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-900 text-slate-400">
              <PlusCircle className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Have a proprietary workflow you need engineered?
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                We sign standard enterprise NDAs and build production systems inside your existing VPC or cloud perimeter.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors shrink-0 cursor-pointer"
          >
            Request Private Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
