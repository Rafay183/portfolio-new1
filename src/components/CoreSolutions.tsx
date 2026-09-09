import React, { useState } from 'react';
import { CORE_SERVICES } from '../data/portfolioData';
import { ServiceItem, ProjectType } from '../types';
import {
  BrainCircuit,
  Boxes,
  Sparkles,
  Cpu,
  Network,
  MessageSquareCode,
  BarChart3,
  GraduationCap,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface CoreSolutionsProps {
  onSelectSolution: (serviceTitle: string, defaultType: ProjectType) => void;
}

export const CoreSolutions: React.FC<CoreSolutionsProps> = ({ onSelectSolution }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    BrainCircuit,
    Boxes,
    Sparkles,
    Cpu,
    Network,
    MessageSquareCode,
    BarChart3,
    GraduationCap,
  };

  const getProjectType = (id: string): ProjectType => {
    switch (id) {
      case 'ai-solutions':
        return 'AI Solution';
      case 'llm-apps':
        return 'LLM Application';
      case 'claude-genai':
        return 'Claude Implementation';
      case 'ai-automation':
        return 'AI Automation';
      case 'ai-integrations':
        return 'AI Integration';
      case 'knowledge-assistants':
        return 'LLM Application';
      case 'data-analytics':
        return 'Data Analytics';
      case 'training-enablement':
        return 'AI Training';
      default:
        return 'AI Solution';
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-[#080B11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/60">
              Core Capabilities &amp; Advisory
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              Practical AI &amp; Automation Solutions
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              We design, architect, and deploy intelligent technology systems tailored to eliminate operational friction and deliver measurable return on investment.
            </p>
          </div>
          <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>8 Modular Engagement Areas</span>
          </div>
        </div>

        {/* 8 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CORE_SERVICES.map((service: ServiceItem) => {
            const Icon = iconMap[service.iconName] || BrainCircuit;
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between p-5 sm:p-6 group hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Expandable Deliverables */}
                  {isExpanded && (
                    <div className="mt-3 pt-3 border-t border-slate-800/80 animate-in fade-in duration-200">
                      <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">
                        {service.fullDesc}
                      </p>
                      <div className="space-y-1.5 mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                          Key Deliverables:
                        </span>
                        {service.deliverables.map((deliv, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-1.5 text-[11px] text-slate-300 leading-tight"
                          >
                            <Check className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 font-medium transition-colors cursor-pointer py-1"
                  >
                    {isExpanded ? (
                      <>
                        <span>Less</span>
                        <ChevronUp className="w-3 h-3" />
                      </>
                    ) : (
                      <>
                        <span>Scope &amp; Deliverables</span>
                        <ChevronDown className="w-3 h-3" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      onSelectSolution(service.title, getProjectType(service.id))
                    }
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer"
                  >
                    <span>Discuss</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
