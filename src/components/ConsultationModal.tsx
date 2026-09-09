import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { CONSULTANT_INFO } from '../data/portfolioData';
import { ProjectType } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProjectType?: ProjectType;
  defaultTitle?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultProjectType = 'AI Solution',
  defaultTitle = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: defaultProjectType,
    notes: defaultTitle ? `Inquiring about: ${defaultTitle}` : '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.email.includes('@')) {
      setError('Please provide your name and a valid work email.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      id="consultation-modal-overlay"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0b0f19] border border-cyan-500/30 p-6 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Consultation Scheduled
            </h3>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Your consultation request for <strong className="text-cyan-400">{formData.projectType}</strong> has been logged. I will review and reply within 24 hours to coordinate our call.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={CONSULTANT_INFO.links.preply}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 hover:text-white border border-slate-700 flex items-center gap-1.5"
              >
                <span>Instant Preply Calendar</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Discovery Session</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              Book an AI &amp; Automation Consultation
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Discuss your organization's workflow bottlenecks, evaluate model feasibility, and design a practical implementation roadmap.
            </p>

            {error && (
              <div className="mb-4 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Martinez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Business Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="david@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Health"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Focus Area / Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value as ProjectType })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 cursor-pointer"
                >
                  <option value="AI Solution">AI Solution &amp; Strategy</option>
                  <option value="LLM Application">LLM Application Development</option>
                  <option value="Claude Implementation">Claude / Generative AI Implementation</option>
                  <option value="AI Automation">AI Automation &amp; Workflows</option>
                  <option value="AI Integration">System &amp; Database Integration</option>
                  <option value="Data Analytics">Data &amp; BI Dashboards</option>
                  <option value="AI Training">Team &amp; Corporate Training</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Brief Context or Question (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell me what process or tool you're evaluating..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Confirm AI Consultation Request
                </button>
              </div>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Strict Confidentiality Guaranteed</span>
              </div>
              <a
                href={CONSULTANT_INFO.links.preply}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>Or book directly on Preply</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
