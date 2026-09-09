import React, { useState } from 'react';
import {
  BEFORE_AUTOMATION_STEPS,
  AFTER_AUTOMATION_STEPS,
} from '../data/portfolioData';
import {
  XCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  TrendingUp,
} from 'lucide-react';

interface AutomationSectionProps {
  onOpenConsultation: () => void;
}

export const AutomationSection: React.FC<AutomationSectionProps> = ({
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'before' | 'after'>('comparison');
  const [activeAfterStep, setActiveAfterStep] = useState<number>(1);

  return (
    <section id="automation" className="py-20 sm:py-28 bg-[#070A10] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/60">
            Intelligent Process Redesign
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
            Turn Repetitive Work Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Intelligent Workflows
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Manual data entry, multi-tab copy-pasting, and disconnected spreadsheet handoffs create invisible organizational drag. We replace brittle manual handoffs with resilient, event-driven automated pipelines.
          </p>
        </div>

        {/* Human-in-the-Loop Philosophy Banner (Critical Requirement) */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-950 border border-emerald-500/30">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-1 sm:mt-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                Core Automation Principle:
              </span>
              <p className="text-sm sm:text-base font-semibold text-slate-100 mt-0.5">
                "The goal is not to remove humans from every process. The goal is to remove unnecessary repetitive work so teams can focus on higher-value activities."
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Comparison Controls */}
        <div className="mt-10 flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('comparison')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Side-by-Side Comparison
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('before')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'before'
                  ? 'bg-rose-950/60 text-rose-300 border border-rose-800/60'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Legacy Workflow (Before)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('after')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'after'
                  ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Intelligent Workflow (After)
            </button>
          </div>

          <div className="text-xs text-slate-400 font-mono hidden sm:block">
            End-to-end operational transition
          </div>
        </div>

        {/* Side-by-Side Before/After Visual Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* BEFORE COLUMN */}
          {(activeTab === 'comparison' || activeTab === 'before') && (
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-rose-950/60 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-900 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <h3 className="text-base font-bold text-white uppercase tracking-wide font-mono">
                      BEFORE: Fragmented Manual Process
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-rose-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> High Latency &amp; Friction
                  </span>
                </div>

                <div className="space-y-3">
                  {BEFORE_AUTOMATION_STEPS.map((step, idx) => (
                    <div
                      key={step.name}
                      className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-400 font-mono font-bold flex items-center justify-center text-[11px] shrink-0 border border-rose-500/20">
                          {step.step}
                        </span>
                        <div>
                          <div className="font-semibold text-slate-200">
                            {step.name}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            {step.desc}
                          </div>
                        </div>
                      </div>
                      <XCircle className="w-4 h-4 text-rose-500/60 shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900 text-xs text-rose-300/80 flex items-center justify-between font-mono">
                <span>Result: Human fatigue &amp; backlogged queues</span>
                <span>Error-Prone</span>
              </div>
            </div>
          )}

          {/* AFTER COLUMN */}
          {(activeTab === 'comparison' || activeTab === 'after') && (
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-emerald-900/40 shadow-xl shadow-emerald-950/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-900 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <h3 className="text-base font-bold text-white uppercase tracking-wide font-mono">
                      AFTER: Automated &amp; Augmented Workflow
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Real-time Execution
                  </span>
                </div>

                <div className="space-y-3">
                  {AFTER_AUTOMATION_STEPS.map((step, idx) => {
                    const isSelected = activeAfterStep === idx;
                    return (
                      <div
                        key={step.name}
                        onClick={() => setActiveAfterStep(idx)}
                        className={`p-3.5 rounded-xl border flex items-center justify-between text-xs cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-emerald-950/40 border-emerald-500/60 shadow-sm'
                            : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 font-mono font-bold flex items-center justify-center text-[11px] shrink-0 border border-emerald-500/30">
                            {step.step}
                          </span>
                          <div>
                            <div className="font-semibold text-white flex items-center gap-2">
                              <span>{step.name}</span>
                              {step.name.includes('Human Approval') && (
                                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                  Guardrail
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-slate-300 mt-0.5">
                              {step.desc}
                            </div>
                          </div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900 text-xs text-emerald-300 flex items-center justify-between font-mono">
                <span>Result: Consistent, auditable, high-velocity output</span>
                <span className="text-emerald-400 font-bold">95%+ Friction Removed</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Action Strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-emerald-400 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-300">
              Have a repetitive multi-step process in mind? We map the inputs, triggers, and approvals before writing a single line of code.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            Automate My Workflow
          </button>
        </div>
      </div>
    </section>
  );
};
