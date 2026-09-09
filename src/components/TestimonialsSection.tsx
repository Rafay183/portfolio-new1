import React from 'react';
import { CONSULTANT_INFO } from '../data/portfolioData';
import { MessageSquare, ExternalLink, ShieldCheck, UserCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  // Respecting the strict prompt instruction:
  // "Do NOT create fake testimonials. Instead create an optional testimonial component with placeholders: 'Client testimonial will be added here.' Allow the owner to easily replace these with verified testimonials."
  const placeholders = [
    {
      id: 1,
      role: 'Enterprise Operations Client',
      type: 'LLM & Workflow Automation',
    },
    {
      id: 2,
      role: 'Technology Team / Corporate Cohort',
      type: 'AI Training & Analytics Enablement',
    },
    {
      id: 3,
      role: 'Startup Founder / Product Lead',
      type: 'AI System Integration & Custom Assistant',
    },
  ];

  return (
    <section className="py-20 bg-[#070A0F] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/60">
              Verified Feedback
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              Client &amp; Mentee Recommendations
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Strict adherence to professional integrity: Testimonial slots are reserved for verified client reviews.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <a
              href={CONSULTANT_INFO.links.preply}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
            >
              <span>Verify Tutor Reviews on Preply</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span>•</span>
            <a
              href={CONSULTANT_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
            >
              <span>LinkedIn Endorsements</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Testimonial Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholders.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-950/60 border border-dashed border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400">
                    Verified Slot
                  </span>
                </div>

                <p className="text-sm text-slate-400 italic mb-4">
                  "Client testimonial will be added here."
                </p>
              </div>

              <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 text-[10px] font-bold">
                    <UserCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-300">{item.role}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">{item.type}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">
            To review verified feedback and student endorsements, explore the primary sources on Preply and LinkedIn.
          </p>
        </div>
      </div>
    </section>
  );
};
