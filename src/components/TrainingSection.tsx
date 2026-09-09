import React from 'react';
import { TRAINING_OFFERINGS, CONSULTANT_INFO } from '../data/portfolioData';
import {
  GraduationCap,
  Sparkles,
  Users,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

interface TrainingSectionProps {
  onOpenTrainingInquiry: () => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({
  onOpenTrainingInquiry,
}) => {
  return (
    <section id="training" className="py-20 sm:py-28 bg-[#070A0F] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/60">
              Workforce Enablement &amp; Coaching
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              AI &amp; Data Knowledge That Teams Can Actually Use
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Software adoption fails when organizations treat training as an afterthought. We provide practical, project-based corporate enablement programs across AI, Large Language Models, Power BI, Tableau, and Python.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <a
              href={CONSULTANT_INFO.links.preply}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 hover:underline"
            >
              <span>View Verified Preply Coaching Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-[11px] text-slate-400 font-mono">
              Individual &amp; Enterprise Cohorts
            </span>
          </div>
        </div>

        {/* 4 Corporate Training Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRAINING_OFFERINGS.map((program) => (
            <div
              key={program.title}
              className="p-6 sm:p-7 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                    {program.audience}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-emerald-300 transition-colors">
                  {program.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {program.desc}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold block">
                    Core Syllabus Modules:
                  </span>
                  {program.topics.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-center gap-2 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  Custom Curriculum
                </span>
                <button
                  onClick={onOpenTrainingInquiry}
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Team Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Primary CTA Banner: Train Your Team */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-950 to-slate-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
              <Users className="w-4 h-4" />
              <span>Corporate Upskilling Programs</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to upskill your department in practical AI &amp; modern data tools?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Interactive workshops tailored to your organization's tech stack, real datasets, and specific workflow bottlenecks.
            </p>
          </div>

          <button
            id="training-cta-btn"
            onClick={onOpenTrainingInquiry}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all shrink-0 cursor-pointer active:scale-95"
          >
            <GraduationCap className="w-4 h-4" />
            Train Your Team
          </button>
        </div>
      </div>
    </section>
  );
};
