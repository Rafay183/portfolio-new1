import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { CONSULTANT_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'AI & LLM', href: '#ai-llm' },
    { name: 'Automation', href: '#automation' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Training', href: '#training' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B11]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name & Professional Role */}
        <a href="#hero" className="flex items-center gap-3 group" id="brand-logo-link">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-indigo-600/30 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-lg group-hover:border-cyan-400 transition-colors">
            RS
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              {CONSULTANT_INFO.name}
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-1 animate-pulse"></span>
                Consulting
              </span>
            </span>
            <span className="text-xs text-slate-400 font-medium">
              AI Solutions & Automation Consultant
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Quick Booking */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={CONSULTANT_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors border border-transparent hover:border-slate-700"
            title="LinkedIn Profile"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            id="nav-book-consultation-btn"
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            Book AI Consultation
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="nav-mobile-book-btn"
            onClick={onOpenConsultation}
            className="px-3 py-1.5 text-xs font-semibold rounded-md bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
          >
            Consult
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-[#0a0e17]/95 border-b border-slate-800 px-6 py-5 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/40 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-center text-sm shadow-lg shadow-cyan-500/20"
              >
                Book AI Consultation
              </button>
              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-400">
                <a
                  href={CONSULTANT_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 underline underline-offset-4"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href={CONSULTANT_INFO.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 underline underline-offset-4"
                >
                  Personal Site
                </a>
                <span>•</span>
                <a
                  href={CONSULTANT_INFO.links.preply}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 underline underline-offset-4"
                >
                  Preply Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
