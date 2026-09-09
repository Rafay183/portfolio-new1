import React, { useState } from 'react';
import { INTEGRATION_ECOSYSTEM } from '../data/portfolioData';
import {
  Database,
  PieChart,
  Code2,
  Sparkle,
  Workflow,
  Cloud,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface IntegrationsSectionProps {
  onOpenConsultation: () => void;
}

export const IntegrationsSection: React.FC<IntegrationsSectionProps> = ({
  onOpenConsultation,
}) => {
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>('All');

  const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    'Data & Databases': Database,
    'Business Analytics & BI': PieChart,
    'Development & Engineering': Code2,
    'AI & Machine Learning': Sparkle,
    'Intelligent Automation': Workflow,
    'Cloud & DevOps': Cloud,
  };

  const allCategories = ['All', ...INTEGRATION_ECOSYSTEM.map((c) => c.name)];

  const displayedCategories =
    selectedCategoryName === 'All'
      ? INTEGRATION_ECOSYSTEM
      : INTEGRATION_ECOSYSTEM.filter((c) => c.name === selectedCategoryName);

  return (
    <section id="integrations" className="py-20 sm:py-28 bg-[#080B11] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/60">
              Verified Production Stack
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              AI Integration Ecosystem
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Real enterprise value emerges when AI connects directly to your databases, business intelligence, codebases, and cloud infrastructure. We bridge existing software environments with modern intelligence.
            </p>
          </div>
          <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5 shrink-0">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Strictly Verified Core Technologies</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {allCategories.map((catName) => {
            const isSelected = selectedCategoryName === catName;
            return (
              <button
                key={catName}
                type="button"
                onClick={() => setSelectedCategoryName(catName)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {catName}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => {
            const CategoryIcon = categoryIcons[category.name] || Database;
            return (
              <div
                key={category.name}
                className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white leading-snug">
                        {category.name}
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 my-4">
                    {category.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start justify-between text-xs"
                      >
                        <div>
                          <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                            <span>{tool.name}</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            {tool.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-900 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Compatibility: Native</span>
                  <span className="text-cyan-400">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Consultation Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white">
              Need to connect an internal or proprietary database?
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              We design secure custom REST wrappers, webhook endpoints, and vector embedding pipelines that respect your network policies.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 transition-all shrink-0 cursor-pointer"
          >
            <span>Discuss Custom Integration</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
