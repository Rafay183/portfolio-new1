import React from 'react';
import { CONSULTANT_INFO } from '../data/portfolioData';
import {
  ExternalLink,
  ShieldCheck,
  Award,
  Layers,
  Sparkles,
  GraduationCap,
  Briefcase,
  CheckCircle2,
} from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const verifiedDomains = [
    'Software Engineering',
    'Data Analytics',
    'Artificial Intelligence',
    'Machine Learning',
    'Generative AI',
    'Workflow Automation',
    'Business Intelligence',
    'Professional Training',
    'Technology Implementation',
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#080B11] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/60">
              Professional Biography
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              Technology Meets Business Thinking
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                I am <strong className="text-white font-semibold">{CONSULTANT_INFO.name}</strong>, an AI Solutions &amp; Automation Consultant with over <strong className="text-cyan-400 font-semibold">{CONSULTANT_INFO.experience}</strong> spanning software engineering, data analytics, artificial intelligence, machine learning, generative AI, automation, and enterprise training.
              </p>

              <p>
                The biggest disconnect in corporate technology today is not a lack of algorithms, but the gap between <span className="text-white font-medium">engineering complexity</span> and <span className="text-white font-medium">operational utility</span>. My work centers on bridging that divide: translating intricate technical architectures into practical, dependable systems that people and organizations actually adopt.
              </p>

              <p>
                Whether designing custom LLM applications, orchestrating multi-system API pipelines, constructing executive Power BI analytics suites, or training technical teams, the focus remains constant: <span className="text-slate-100 font-medium">delivering measurable operational value rather than speculative hype</span>.
              </p>
            </div>

            {/* Experience Pill Indicator */}
            <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-300">
                <strong className="text-white font-semibold">Verified Track Record:</strong>{' '}
                {CONSULTANT_INFO.experienceStatement}
              </div>
            </div>

            {/* Verified External Sources Links */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Verified Professional Profiles:
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={CONSULTANT_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>

                <a
                  href={CONSULTANT_INFO.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <span>Personal Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>

                <a
                  href={CONSULTANT_INFO.links.preply}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <span>Preply Tutor Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Competencies Grid */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">
                    Verified Competencies
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-cyan-400">
                  8+ Years Active
                </span>
              </div>

              <div className="space-y-2.5">
                {verifiedDomains.map((dom) => (
                  <div
                    key={dom}
                    className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs text-slate-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="font-semibold">{dom}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      Core Focus
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 text-center">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                >
                  Schedule an Exploratory Discussion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
