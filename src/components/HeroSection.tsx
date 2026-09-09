import React from 'react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Briefcase,
  HelpCircle,
  Building2,
  Mail,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { CONSULTANT_INFO } from '../data/portfolioData';
import { EcosystemVisualizer } from './EcosystemVisualizer';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-slate-900/60"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-10 left-1/4 w-[480px] h-[480px] bg-cyan-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-[420px] h-[420px] bg-indigo-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            {CONSULTANT_INFO.experience}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-300 border border-slate-700/60">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            AI Solutions &amp; Automation Consultant
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/60 text-slate-400 border border-slate-800">
            Technology + Business Operations
          </span>
        </div>

        {/* Main Headlines */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            {CONSULTANT_INFO.heroHeadline}
          </h1>

          <p className="mt-4 text-base sm:text-xl font-semibold text-cyan-400/90 tracking-wide font-mono">
            {CONSULTANT_INFO.heroSupportingHeadline}
          </p>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {CONSULTANT_INFO.heroDescription}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            id="hero-primary-cta"
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm sm:text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all cursor-pointer active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            Let's Build Your AI Solution
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            id="hero-secondary-cta"
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-700/80 hover:border-slate-600 transition-colors"
          >
            Explore My Work
          </a>

          <button
            id="hero-consultation-quick-cta"
            onClick={onOpenConsultation}
            className="text-xs sm:text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors underline underline-offset-4 decoration-slate-600 hover:decoration-cyan-400 cursor-pointer py-2 px-1"
          >
            Book a Consultation →
          </button>
        </div>

        {/* Immediate 5-Question Clarity Panel */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800/90 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-cyan-400 tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Consulting Snapshot — 5-Second Executive Overview</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60">
              <div className="flex items-center gap-1.5 text-slate-400 font-mono mb-1">
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-semibold text-slate-300">Who is this?</span>
              </div>
              <p className="text-slate-200 font-medium leading-snug">
                <strong>Rafay Shaikh</strong>, AI Solutions &amp; Automation Consultant with 8+ years across software, data &amp; AI.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60">
              <div className="flex items-center gap-1.5 text-slate-400 font-mono mb-1">
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-semibold text-slate-300">What does he do?</span>
              </div>
              <p className="text-slate-200 font-medium leading-snug">
                Designs and builds practical AI solutions, LLM applications, intelligent workflows &amp; systems integrations.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60">
              <div className="flex items-center gap-1.5 text-slate-400 font-mono mb-1">
                <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                <span className="font-semibold text-slate-300">Who does he help?</span>
              </div>
              <p className="text-slate-200 font-medium leading-snug">
                Organizations, businesses, startups, and professional teams ready to turn AI into measurable ROI.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60">
              <div className="flex items-center gap-1.5 text-slate-400 font-mono mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold text-slate-300">What does he solve?</span>
              </div>
              <p className="text-slate-200 font-medium leading-snug">
                Eliminates repetitive manual work, data silos, slow reporting, and disconnected business tools.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60">
              <div className="flex items-center gap-1.5 text-slate-400 font-mono mb-1">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold text-slate-300">How to contact?</span>
              </div>
              <p className="text-slate-200 font-medium leading-snug">
                Directly via{' '}
                <a href="#contact" className="text-cyan-400 hover:underline">
                  inquiry form
                </a>
                , or via verified{' '}
                <a
                  href={CONSULTANT_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  LinkedIn
                </a>{' '}
                &amp;{' '}
                <a
                  href={CONSULTANT_INFO.links.preply}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Preply
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Hero Interactive Visual Section */}
        <div className="mt-10">
          <EcosystemVisualizer />
        </div>
      </div>
    </section>
  );
};
