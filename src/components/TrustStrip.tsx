import React from 'react';
import { TRUST_STRIP_ITEMS, CONSULTANT_INFO } from '../data/portfolioData';
import { ShieldCheck, Award, Layers, Cpu, BarChart3, GraduationCap } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const icons = [Award, Cpu, Layers, ShieldCheck, BarChart3, GraduationCap];

  return (
    <section className="bg-slate-950/90 border-y border-slate-800/80 py-6 sm:py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <p className="text-xs font-mono tracking-widest uppercase text-slate-400">
            Verified Professional Capabilities • 8+ Years Across Technology &amp; Operations
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {TRUST_STRIP_ITEMS.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.label}
                className="p-3 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-800/70 hover:border-cyan-500/30 transition-colors flex flex-col items-center text-center group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 text-cyan-400 flex items-center justify-center mb-2 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-5 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-300 font-medium">
              Grounding Statement:
            </span>
            <span>{CONSULTANT_INFO.experienceStatement}</span>
          </div>
          <div className="font-mono text-[11px] text-cyan-400">
            Technology + Business Operations
          </div>
        </div>
      </div>
    </section>
  );
};
