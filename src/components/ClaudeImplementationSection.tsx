import React from 'react';
import {
  Sparkles,
  CheckCircle,
  FileSearch,
  Scale,
  Lock,
  DollarSign,
  Zap,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface ClaudeSectionProps {
  onOpenConsultation: () => void;
}

export const ClaudeImplementationSection: React.FC<ClaudeSectionProps> = ({
  onOpenConsultation,
}) => {
  const implementationAreas = [
    {
      title: 'AI Assistants & Agents',
      desc: 'Context-grounded internal or client-facing conversational agents with strict tool-calling adherence.',
      icon: Sparkles,
    },
    {
      title: 'Deep Document Analysis',
      desc: 'High-accuracy extraction from long contracts, financial filings, technical specifications, and legal briefs.',
      icon: FileSearch,
    },
    {
      title: 'Enterprise Knowledge Systems',
      desc: 'Retrieval systems that synthesize complex company policies into precise, referenced guidance.',
      icon: Layers,
    },
    {
      title: 'Business & Market Research',
      desc: 'Synthesizing multi-source qualitative intelligence, competitor analysis, and strategic briefs.',
      icon: CheckCircle,
    },
    {
      title: 'Automated Reporting & Summaries',
      desc: 'Transforming weekly operational and data logs into concise executive narratives and status reports.',
      icon: CheckCircle,
    },
    {
      title: 'Workflow & Process Intelligence',
      desc: 'Semantic decision routing, categorization of incoming customer emails, and intelligent triage.',
      icon: Zap,
    },
    {
      title: 'Customer Support Escalations',
      desc: 'Drafting high-empathy, accurate responses for Tier-2 support teams to review and send with 1-click.',
      icon: CheckCircle,
    },
    {
      title: 'Structured Output Pipelines',
      desc: 'Enforcing deterministic JSON schemas from messy unstructured inputs for database insertion.',
      icon: CheckCircle,
    },
  ];

  const evaluationCriteria = [
    {
      title: 'Reasoning & Context Window',
      desc: 'Evaluating multi-step logic requirements and large token context needs (e.g. 100k+ token documents).',
      icon: Scale,
    },
    {
      title: 'Data Privacy & Security',
      desc: 'Zero-data retention policies, SOC2 compliance, enterprise VPC isolation, and regional residency.',
      icon: Lock,
    },
    {
      title: 'Cost vs. Throughput Budget',
      desc: 'Balancing cost per million tokens across frontier models, distillation, and fine-tuned micro-models.',
      icon: DollarSign,
    },
    {
      title: 'Latency & Reliability SLAs',
      desc: 'Benchmarking time-to-first-token (TTFT) and token generation speed for real-time user experiences.',
      icon: Zap,
    },
  ];

  return (
    <section id="claude-implementation" className="py-20 sm:py-28 bg-[#080B11] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-violet-400 bg-violet-950/60 px-3 py-1 rounded-full border border-violet-800/60">
            Model Evaluation &amp; Strategic Deployment
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
            Implementing LLMs Where They Actually Create Value
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Claude is one of the premier frontier reasoning models we frequently evaluate and implement, particularly for complex document intelligence, long-context analysis, and structured outputs. However, we advocate for model neutrality.
          </p>
        </div>

        {/* Objective Consultant Principle Callout (Critical Requirement) */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-violet-950/40 via-slate-900 to-slate-900 border border-violet-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase text-violet-400">
                Core Consulting Stance:
              </span>
              <blockquote className="mt-1 text-base sm:text-lg font-semibold text-white italic">
                "The right AI model depends on the organization's requirements, data, security considerations, cost, performance and use case."
              </blockquote>
              <p className="mt-2 text-xs text-slate-400">
                We do not sell a one-size-fits-all model. We benchmark Claude, OpenAI, open-source models (Llama/Mistral), and specialized engines to ensure your architecture aligns strictly with business economics and security standards.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 text-xs font-mono text-slate-300 border border-slate-800">
                <Scale className="w-3.5 h-3.5 text-violet-400" />
                Independent Advisory
              </span>
            </div>
          </div>
        </div>

        {/* 4 Objective Decision Criteria */}
        <div className="mt-12">
          <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4 font-semibold">
            How We Evaluate AI Models For Your Workflows
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {evaluationCriteria.map((crit) => {
              const Icon = crit.icon;
              return (
                <div
                  key={crit.title}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-slate-900 text-violet-400 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">
                      {crit.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {crit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* High-Impact Implementation Areas Grid */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Target Implementation Areas
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Where advanced reasoning models deliver tangible operational leverage
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1 text-xs font-semibold text-violet-400 hover:text-violet-300 cursor-pointer"
            >
              <span>Schedule model evaluation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {implementationAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-violet-500/30 hover:bg-slate-900/60 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-slate-900 text-violet-400 flex items-center justify-center mb-3 group-hover:bg-violet-500/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-violet-300 transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
