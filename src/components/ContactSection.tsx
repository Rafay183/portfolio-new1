import React, { useState } from 'react';
import { CONSULTANT_INFO } from '../data/portfolioData';
import { ProjectType, ContactFormData } from '../types';
import {
  Send,
  Mail,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Calendar,
  Building2,
  Clock,
  DollarSign,
} from 'lucide-react';

interface ContactSectionProps {
  initialProjectType?: ProjectType;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProjectType = 'AI Solution',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    projectType: initialProjectType,
    currentChallenge: '',
    expectedOutcome: '',
    budgetRange: '$5,000 - $15,000',
    timeline: 'Within 1-2 months',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const projectTypes: ProjectType[] = [
    'AI Solution',
    'LLM Application',
    'Claude Implementation',
    'AI Automation',
    'Business Process Automation',
    'AI Integration',
    'Data Analytics',
    'AI Training',
    'Other',
  ];

  const budgetOptions = [
    'Under $5,000 (Initial PoC / Scoping)',
    '$5,000 - $15,000 (Standard Implementation)',
    '$15,000 - $35,000 (Multi-System Architecture)',
    '$35,000+ (Enterprise Transformation)',
    'Flexible / Seeking Consultation First',
  ];

  const timelineOptions = [
    'Immediate (within 2-4 weeks)',
    'Within 1-2 months',
    'Quarterly Roadmap (3-6 months)',
    'Flexible Exploratory Stage',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.company.trim()) errs.company = 'Company or organization name is required';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Please provide a valid business email address';
    if (!formData.currentChallenge.trim())
      errs.currentChallenge = 'Please summarize your current workflow or challenge';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#080B11] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Context & Verified Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/60">
                Direct Consultation
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
                Have an AI Idea?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Let's Turn It Into a Working Solution.
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Tell me about your workflow, challenge or AI idea. Let's explore where AI, LLMs or automation can create measurable value for your organization.
              </p>

              {/* Verified Direct Channels */}
              <div className="mt-8 space-y-3">
                <a
                  href={CONSULTANT_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-950/50 text-blue-400 flex items-center justify-center font-bold">
                      in
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                        LinkedIn Direct Message
                      </div>
                      <div className="text-[11px] text-slate-400">
                        linkedin.com/in/hellorafayshaikh
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>

                <a
                  href={CONSULTANT_INFO.links.preply}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-950/50 text-emerald-400 flex items-center justify-center font-bold">
                      Pr
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                        Preply 1-on-1 Consultation
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Direct scheduling for coaching &amp; technical advisory
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>

                <a
                  href={CONSULTANT_INFO.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 text-slate-300 flex items-center justify-center font-bold">
                      Web
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                        Personal Tech Site
                      </div>
                      <div className="text-[11px] text-slate-400">
                        rafay183.github.io
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-950/50 text-cyan-400 flex items-center justify-center font-bold">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Direct Email</div>
                    <div className="text-[11px] text-slate-300 font-mono select-all">
                      hellorafayshaikh@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Typical initial response time: within 24 hours</span>
            </div>
          </div>

          {/* Right Column: High-Converting Project Scoping Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your project summary for <strong className="text-white">{formData.company}</strong> regarding <strong className="text-cyan-400">{formData.projectType}</strong> has been logged. I will review the architecture scope and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        projectType: 'AI Solution',
                        currentChallenge: '',
                        expectedOutcome: '',
                        budgetRange: '$5,000 - $15,000',
                        timeline: 'Within 1-2 months',
                      });
                    }}
                    className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 border border-slate-700 transition-colors cursor-pointer"
                  >
                    Submit Another Project Scope
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="border-b border-slate-900 pb-3 mb-4">
                    <h3 className="text-lg font-bold text-white">
                      AI Project &amp; Automation Scoping Form
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill in what you know; we can clarify technical specifics during the consultation.
                    </p>
                  </div>

                  {/* Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-xs sm:text-sm text-white focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Company / Organization <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Logistics Ltd."
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-xs sm:text-sm text-white focus:outline-none transition-colors ${
                          errors.company
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                      {errors.company && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.company}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Business Email & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Business Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="sarah@apexlogistics.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-xs sm:text-sm text-white focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-slate-800 focus:border-cyan-500'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Project Type <span className="text-rose-400">*</span>
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            projectType: e.target.value as ProjectType,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-slate-950 text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Current Challenge */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Current Challenge / Bottleneck <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe what manual process is taking too much time, or what AI application you want to build..."
                      value={formData.currentChallenge}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          currentChallenge: e.target.value,
                        })
                      }
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-xs sm:text-sm text-white focus:outline-none transition-colors ${
                        errors.currentChallenge
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {errors.currentChallenge && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.currentChallenge}
                      </span>
                    )}
                  </div>

                  {/* Expected Outcome */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Expected Business Outcome
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Cut document extraction turnaround from 3 days to real-time"
                      value={formData.expectedOutcome}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          expectedOutcome: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Budget Range
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) =>
                          setFormData({ ...formData, budgetRange: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-slate-950 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) =>
                          setFormData({ ...formData, timeline: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer"
                      >
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-slate-950 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                    >
                      <Sparkles className="w-4 h-4 text-cyan-200" />
                      Discuss My AI Project
                      <Send className="w-4 h-4 ml-1" />
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      Direct consultation with Rafay Shaikh • Enterprise NDA available upon request
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
