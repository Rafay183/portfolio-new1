import React from 'react';
import { CONSULTANT_INFO } from '../data/portfolioData';
import { ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const footerNav = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'AI & LLM', href: '#ai-llm' },
    { name: 'Automation', href: '#automation' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Projects', href: '#projects' },
    { name: 'Consulting Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Training', href: '#training' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#05070B] border-t border-slate-900 text-slate-400 py-12 sm:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pre-Footer Callout */}
        <div className="pb-12 mb-12 border-b border-slate-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Implementation Partner</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to eliminate manual bottlenecks and scale with AI?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Turn speculative AI concepts into reliable, production-ready workflows built inside your existing systems.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 transition-all shrink-0 cursor-pointer"
          >
            Book an AI Consultation
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          {/* Brand & Positioning */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-base">
                RS
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight">
                  {CONSULTANT_INFO.name}
                </span>
                <span className="block text-xs text-cyan-400 font-medium">
                  {CONSULTANT_INFO.role}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Helping organizations implement practical AI, LLM applications, automation and intelligent integrations for better efficiency and performance.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono pt-1">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>{CONSULTANT_INFO.experience} • Software, Data, AI &amp; Training</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {footerNav.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-3">
              Verified Profiles &amp; Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={CONSULTANT_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={CONSULTANT_INFO.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <span>Personal Website (rafay183.github.io)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={CONSULTANT_INFO.links.preply}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <span>Preply Tutor &amp; Coaching Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="#contact"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                >
                  Direct Inquiry Form →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 {CONSULTANT_INFO.name}. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            AI Solutions &amp; Automation Consultant • Technology + Business Operations
          </div>
        </div>
      </div>
    </footer>
  );
};
