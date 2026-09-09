import React, { useState } from 'react';
import { ORGANIZATIONAL_PROBLEMS } from '../data/portfolioData';
import {
  Repeat,
  FolderTree,
  Clock,
  GitPullRequestDraft,
  DatabaseZap,
  FileText,
  SearchCode,
  MessageSquareShare,
  TrendingDown,
  Compass,
  Unplug,
  Users,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

interface ProblemSectionProps {
  onOpenConsultation: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenConsultation }) => {
  const [selectedProblemIndex, setSelectedProblemIndex] = useState<number | null>(null);

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Repeat,
    FolderTree,
    Clock,
    GitPullRequestDraft,
    DatabaseZap,
    FileText,
    SearchCode,
    MessageSquareShare,
    TrendingDown,
    Compass,
    Unplug,
    Users,
  };

  return (
    <section id="problems" className="py-20 sm:py-28 bg-[#070A10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-4">
            <span>Root Friction in Enterprise Operations</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Your Organization Doesn't Need More AI Hype.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              It Needs AI That Works.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Most organizations do not suffer from a shortage of AI models or marketing claims. They suffer from operational friction: disconnected tools, manual copy-paste bottlenecks, scattered enterprise knowledge, and unstructured documents.
          </p>
        </div>

        {/* 12 Enterprise Problems Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ORGANIZATIONAL_PROBLEMS.map((problem, index) => {
            const Icon = iconMap[problem.icon] || FileText;
            const isHovered = selectedProblemIndex === index;

            return (
              <div
                key={problem.title}
                onMouseEnter={() => setSelectedProblemIndex(index)}
                onMouseLeave={() => setSelectedProblemIndex(null)}
                className={`p-5 rounded-xl transition-all duration-200 border relative flex flex-col justify-between ${
                  isHovered
                    ? 'bg-slate-900 border-rose-500/40 shadow-lg shadow-rose-950/20'
                    : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isHovered ? 'bg-rose-500/20 text-rose-300' : 'bg-slate-900 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                    {problem.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {problem.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Identified Bottleneck</span>
                  <span className={isHovered ? 'text-rose-400' : 'text-slate-400'}>Solvable with AI</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Solution Introduction Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-cyan-950/50 via-slate-900/80 to-blue-950/40 border border-cyan-500/30 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>The Pragmatic Consulting Approach</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                "I design practical AI systems that fit into existing workflows, tools and organizational processes."
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Rather than forcing teams to abandon their current software stack or learn fragile prompt tricks, we connect intelligence directly to your databases, APIs, documents, and communication pipelines.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all cursor-pointer shrink-0 active:scale-95"
            >
              Resolve Your Bottleneck
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
