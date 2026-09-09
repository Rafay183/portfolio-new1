import React, { useState } from 'react';
import {
  LLM_BUSINESS_USE_CASES,
  LLM_PIPELINE_STEPS,
} from '../data/portfolioData';
import {
  User,
  Laptop,
  Cpu,
  Database,
  Wrench,
  Workflow,
  Layers,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface AiLlmSectionProps {
  onOpenConsultation: () => void;
}

export const AiLlmSection: React.FC<AiLlmSectionProps> = ({ onOpenConsultation }) => {
  const [activeStepId, setActiveStepId] = useState<string>('3');

  const stepIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    User,
    Laptop,
    Cpu,
    Database,
    Wrench,
    Workflow,
    Layers,
    CheckCircle2,
  };

  const activeStep =
    LLM_PIPELINE_STEPS.find((s) => s.id === activeStepId) || LLM_PIPELINE_STEPS[2];

  // Engineering production safeguards for each step
  const stepProductionNotes: Record<string, string[]> = {
    '1': ['Role-based authentication', 'Input length validation', 'PII sanitization prior to processing'],
    '2': ['State management & session cache', 'Rate-limiting & user quota controls', 'Latency budget monitoring'],
    '3': ['Prompt template versioning', 'Token optimization & schema enforcement', 'Evaluation benchmarks for reasoning'],
    '4': ['Hybrid semantic + BM25 keyword search', 'Vector chunk metadata filtering', 'Verifiable source citations'],
    '5': ['Strict JSON function calling schema', 'API timeout & retry handling', 'Least-privilege operational permissions'],
    '6': ['Asynchronous task queue dispatch', 'Human approval triggers for edge cases', 'Comprehensive execution logging'],
    '7': ['Transactional database updates', 'Audit trails for compliance', 'Team notification dispatch (Slack/Teams)'],
    '8': ['Reclaimed staff hours tracking', 'Latency & cost-per-query dashboards', 'Continuous quality monitoring'],
  };

  return (
    <section id="ai-llm" className="py-20 sm:py-28 bg-[#070A0F] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Beyond Playground Prompts</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From LLM Experiments to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400">
              Production-Ready AI Workflows
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Running a prompt in a browser playground is easy. Building an enterprise LLM system that is reliable, secure, cost-controlled, and deeply connected to your business infrastructure requires rigorous engineering.
          </p>
        </div>

        {/* 8-Step Interactive Architecture Pipeline Visualization */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-800/80">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Production Architecture Pipeline
              </span>
              <h3 className="text-lg font-bold text-white">
                How an Enterprise LLM Workflow Actually Operates
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Click any step to inspect production safeguards
            </span>
          </div>

          {/* Horizontal Step Sequence */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-6">
            {LLM_PIPELINE_STEPS.map((step, idx) => {
              const Icon = stepIcons[step.icon] || Cpu;
              const isActive = activeStepId === step.id;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStepId(step.id)}
                  className={`p-3 rounded-xl text-center flex flex-col items-center justify-between transition-all border cursor-pointer ${
                    isActive
                      ? 'bg-cyan-950/60 border-cyan-500 text-white shadow-lg shadow-cyan-950/50 ring-1 ring-cyan-500/40'
                      : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <span className="text-[10px] font-mono text-slate-400 mb-1">
                    Step 0{idx + 1}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1.5 ${
                      isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-[11px] font-bold leading-tight line-clamp-2">
                    {step.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep Dive Detail Panel */}
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-cyan-500/20 text-cyan-300">
                  Step 0{activeStep.id} of 08
                </span>
                <span className="text-sm font-bold text-white tracking-wide">
                  {activeStep.name}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {activeStep.desc}
              </p>
            </div>

            {/* Production Safeguards Tag List */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 text-xs md:w-80 shrink-0">
              <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[11px] font-semibold mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Production Engineering Guardrails</span>
              </div>
              <ul className="space-y-1 text-[11px] text-slate-400">
                {(stepProductionNotes[activeStep.id] || []).map((note, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-cyan-400">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 10 Enterprise LLM Business Use Cases */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Proven Enterprise LLM Applications
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                High-leverage domains where language models reliably improve speed and accuracy
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer"
            >
              <span>Explore custom implementation for your team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
            {LLM_BUSINESS_USE_CASES.map((useCase, index) => (
              <div
                key={useCase.title}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-indigo-500/40 hover:bg-slate-900/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block mb-2">
                    USE CASE 0{index + 1}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug mb-2">
                    {useCase.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {useCase.desc}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-900 flex items-center gap-1 text-[11px] font-mono text-cyan-400/80">
                  <Zap className="w-3 h-3 text-cyan-400" />
                  <span>Production Ready</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
