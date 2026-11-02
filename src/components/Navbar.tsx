import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface NavbarProps {
  onOpenInstallModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInstallModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070A12]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo and Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-blue-600/20 border border-emerald-500/30 group-hover:border-emerald-400/60 transition-colors shadow-inner">
              <svg className="w-6 h-6 transform group-hover:scale-105 transition-transform" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="42" stroke="url(#navLogoGrad)" strokeWidth="8" strokeDasharray="6 4" />
                <path d="M50 20 C36 20 25 31 25 45 C25 61 46 80 50 83 C54 80 75 61 75 45 C75 31 64 20 50 20 Z" fill="#10B981" />
                <circle cx="50" cy="43" r="10" fill="#070A12" />
                <circle cx="50" cy="43" r="5" fill="#38BDF8" />
                <defs>
                  <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#070A12] animate-ping" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#070A12]" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  SMR <span className="text-emerald-400 font-light">Solutions</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hidden sm:inline-block">
                  Bengaluru
                </span>
              </div>
              <span className="text-xs text-slate-400 tracking-wide">
                Google Maps & Web Funnels
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#pwa-demo"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Live PWA Demo
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              ₹5,000 Offer
            </a>
            <a
              href="#why-bengaluru"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Why Us
            </a>
            <a
              href="#faqs"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Quick Actions (Install PWA + WhatsApp CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenInstallModal}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 transition-all flex items-center gap-1.5"
              title="Test PWA App on your phone"
            >
              <span>📱</span>
              <span>Test PWA</span>
            </button>

            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-500 text-slate-950 font-bold"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Bengaluru's Trusted Local Business Partner</span>
          </div>

          <div className="flex flex-col space-y-1">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60"
            >
              Our 3 Services (Maps, Web, PWA)
            </a>
            <a
              href="#pwa-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60 flex items-center justify-between"
            >
              <span>Live PWA Demo</span>
              <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30">Interactive</span>
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-emerald-400 hover:bg-slate-800/60 flex items-center justify-between"
            >
              <span>₹5,000 Starter Package</span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">Limited</span>
            </a>
            <a
              href="#why-bengaluru"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60"
            >
              Why Bengaluru Businesses Need This
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60"
            >
              Frequently Asked Questions
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInstallModal();
              }}
              className="w-full py-2.5 rounded-xl text-center text-sm font-semibold bg-slate-800 text-slate-200 border border-slate-700 flex items-center justify-center gap-2"
            >
              <span>📱</span>
              <span>How to Install this Web App (PWA)</span>
            </button>

            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl text-center font-bold text-slate-950 bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>Chat on WhatsApp Now</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
