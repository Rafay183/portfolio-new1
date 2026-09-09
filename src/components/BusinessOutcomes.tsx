import React from 'react';
import { BUSINESS_OUTCOMES } from '../data/portfolioData';
import {
  Zap,
  TrendingUp,
  Lightbulb,
  Link2,
  Maximize2,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

interface BusinessOutcomesProps {
  onOpenConsultation: () => void;
}

export const BusinessOutcomes: React.FC<BusinessOutcomesProps> = ({
  onOpenConsultation,
}) => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Zap,
    TrendingUp,
    Lightbulb,
    Link2,
    Maximize2,
    CheckCircle,
  };

  return (
    <section id="outcomes" className="py-20 sm:py-28 bg-[#080B11] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/60">
            Measurable Value
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
            AI Should Improve the Business —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Not Just Look Impressive
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Technology projects fail when judged solely on computational novelty. We anchor every engagement around six tangible operational dimensions designed to withstand scrutiny from executives and finance leaders.
          </p>
        </div>

        {/* 6 Outcome Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_OUTCOMES.map((outcome) => {
            const Icon = iconMap[outcome.iconName] || Zap;
            return (
              <div
                key={outcome.title}
                className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/10 group-hover:text-amber-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      Operational KPI
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {outcome.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-400/90 font-mono mb-3">
                    {outcome.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {outcome.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Target Impact:</span>
                  <span className="text-amber-300 font-semibold">
                    {outcome.businessMetricLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Anti-Hype Governance Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">
                Strict Transparency Policy
              </div>
              <p className="text-xs text-slate-400">
                We avoid unverified speculative claims (like "300% revenue surges"). Our focus is on auditable cycle time reduction, error mitigation, and verifiable operational throughput.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shrink-0 cursor-pointer"
          >
            Calculate Your Business ROI
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
