import React, { useState } from 'react';
import { CONSULTING_PROCESS } from '../data/portfolioData';
import {
  CheckCircle2,
  Search,
  Compass,
  Layout,
  Terminal,
  RefreshCw,
  ArrowRight,
} from 'lucide-react';

interface ConsultingProcessProps {
  onOpenConsultation: () => void;
}

export const ConsultingProcess: React.FC<ConsultingProcessProps> = ({
  onOpenConsultation,
}) => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const stepIcons = [Search, Compass, Layout, Terminal, RefreshCw];

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#070A0F] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/60">
            Methodology &amp; Delivery
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
            5-Step Consulting &amp; Implementation Lifecycle
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From initial operational discovery to post-launch optimization, every stage follows an accountable engineering progression designed to eliminate risk and ensure user adoption.
          </p>
        </div>

        {/* Visual Timeline Stepper */}
        <div className="mt-12">
          {/* Step Selector Horizontal Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8">
            {CONSULTING_PROCESS.map((step, idx) => {
              const Icon = stepIcons[idx] || Search;
              const isSelected = activeStepIdx === idx;

              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStepIdx(idx)}
                  className={`p-4 rounded-xl text-left transition-all border cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-cyan-950/50 border-cyan-500/80 shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-500/30'
                      : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      Phase {step.step}
                    </span>
                    <Icon
                      className={`w-4 h-4 ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`}
                    />
                  </div>
                  <div className="text-sm font-bold text-white">{step.title}</div>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Step Card */}
          {(() => {
            const currentStep = CONSULTING_PROCESS[activeStepIdx];
            const StepIcon = stepIcons[activeStepIdx];

            return (
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/90 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        <StepIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                          Phase {currentStep.step} Detail
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          {currentStep.step} — {currentStep.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                      {currentStep.desc}
                    </p>

                    <div className="space-y-2.5">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                        Concrete Stage Deliverables:
                      </span>
                      {currentStep.details.map((detail, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 lg:w-80 shrink-0 text-xs">
                    <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider font-bold block mb-2">
                      Engagement Assurance
                    </span>
                    <p className="text-slate-300 leading-relaxed mb-4">
                      Every milestone requires formal client alignment and technical validation before proceeding to the next stage.
                    </p>
                    <button
                      onClick={onOpenConsultation}
                      className="w-full py-2.5 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs text-center transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Initiate Phase 01 Discover</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
