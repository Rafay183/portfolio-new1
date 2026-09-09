import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { ProblemSection } from './components/ProblemSection';
import { CoreSolutions } from './components/CoreSolutions';
import { AiLlmSection } from './components/AiLlmSection';
import { ClaudeImplementationSection } from './components/ClaudeImplementationSection';
import { AutomationSection } from './components/AutomationSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { BusinessOutcomes } from './components/BusinessOutcomes';
import { ConsultingProcess } from './components/ConsultingProcess';
import { AboutSection } from './components/AboutSection';
import { TrainingSection } from './components/TrainingSection';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectType } from './types';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { CONSULTANT_INFO } from './data/portfolioData';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProjectType, setModalProjectType] = useState<ProjectType>('AI Solution');
  const [modalTitle, setModalTitle] = useState('');

  const handleOpenConsultation = (projectType: ProjectType = 'AI Solution', title: string = '') => {
    setModalProjectType(projectType);
    setModalTitle(title);
    setModalOpen(true);
  };

  const handleSelectSolution = (serviceTitle: string, defaultType: ProjectType) => {
    // Scroll smoothly to contact or open modal
    handleOpenConsultation(defaultType, serviceTitle);
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 relative">
      {/* Sticky Responsive Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation('AI Solution')} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section with Interactive AI Ecosystem Architecture */}
        <HeroSection onOpenConsultation={() => handleOpenConsultation('AI Solution')} />

        {/* Credibility & Experience Strip (8+ Years) */}
        <TrustStrip />

        {/* The Core Enterprise Dilemma & Reality */}
        <ProblemSection onOpenConsultation={() => handleOpenConsultation('AI Solution')} />

        {/* Brand Philosophy Banner */}
        <section className="py-12 bg-slate-950 border-y border-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fundamental Consulting Philosophy</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              "{CONSULTANT_INFO.brandMessage}"
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
              {CONSULTANT_INFO.valueProposition}
            </p>
          </div>
        </section>

        {/* Core Solutions Grid (8 Modular Service Areas) */}
        <CoreSolutions onSelectSolution={handleSelectSolution} />

        {/* Production AI & LLM Workflows (Interactive 8-Step Pipeline) */}
        <AiLlmSection onOpenConsultation={() => handleOpenConsultation('LLM Application')} />

        {/* Claude & Model Evaluation Stance */}
        <ClaudeImplementationSection onOpenConsultation={() => handleOpenConsultation('Claude Implementation')} />

        {/* Before & After Automation Visualizer */}
        <AutomationSection onOpenConsultation={() => handleOpenConsultation('AI Automation')} />

        {/* Verified Integrations Ecosystem */}
        <IntegrationsSection onOpenConsultation={() => handleOpenConsultation('AI Integration')} />

        {/* Selected Projects & Architecture Blueprints */}
        <ProjectsSection onOpenConsultation={() => handleOpenConsultation('AI Solution')} />

        {/* 6 Measurable Business Outcomes */}
        <BusinessOutcomes onOpenConsultation={() => handleOpenConsultation('AI Solution')} />

        {/* 5-Step Consulting Process Lifecycle */}
        <ConsultingProcess onOpenConsultation={() => handleOpenConsultation('AI Solution')} />

        {/* Technology Meets Business Thinking (Verified Biography) */}
        <AboutSection onOpenConsultation={() => handleOpenConsultation('AI Solution')} />

        {/* AI & Data Knowledge / Corporate Training */}
        <TrainingSection onOpenTrainingInquiry={() => handleOpenConsultation('AI Training', 'Corporate Team Training')} />

        {/* Why Work With Me (6 Pillars of Differentiation) */}
        <WhyWorkWithMe />

        {/* Client Recommendations & Verified Reviews Framework */}
        <TestimonialsSection />

        {/* High-Converting Contact & Lead Generation Form */}
        <ContactSection initialProjectType="AI Solution" />
      </main>

      {/* Enterprise Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation('AI Solution')} />

      {/* Accessible Consultation Booking Dialog */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProjectType={modalProjectType}
        defaultTitle={modalTitle}
      />
    </div>
  );
}
