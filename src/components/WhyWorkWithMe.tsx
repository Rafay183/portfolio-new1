import React from 'react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';
import {
  Target,
  Layers,
  Terminal,
  GitMerge,
  ShieldCheck,
  RefreshCw,
  Sparkles,
} from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Target,
    Layers,
    Terminal,
    GitMerge,
    ShieldCheck,
    RefreshCw,
  };

  return (
    <section className="py-20 sm:py-28 bg-[#080B11] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/60">
            Professional Differentiation
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
            Why Partner With an Experienced AI Consultant
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Hiring a generic agency often yields pretty slide decks or fragile prototypes. We bring deep technical execution coupled with a sharp understanding of how organizations actually operate.
          </p>
        </div>

        {/* 6 Differentiation Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Target;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 transition-colors mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-900 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Verified Consultant Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
