import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowRight, ShieldCheck, Download, Check } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface NavbarProps {
  onInstallApp: () => void;
  isAppInstalled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onInstallApp, isAppInstalled }) => {
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
          ? 'bg-[#070A12]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo and Brand with User-provided PNG */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-emerald-500 to-cyan-500 shadow-md group-hover:scale-105 transition-transform">
              <img
                src="/logo.png"
                alt="SMR Solutions Logo"
                className="w-full h-full object-contain rounded-full bg-white"
              />
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#070A12] animate-ping" />
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#070A12]" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  SMR <span className="text-emerald-400 font-light">Solutions</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hidden sm:inline-block">
                  Kengeri • RR Nagar
                </span>
              </div>
              <span className="text-xs text-slate-400 tracking-wide">
                Google Maps & Web Funnels
              </span>
            </div>
          </a>

          {/* Desktop Nav Links in the exact requested order:
              1. Services
              2. ₹5,000 Offer
              3. Locations
              4. Live PWA Demo
              5. FAQ
          */}
          <nav className="hidden md:flex items-center gap-7">
            <a
              href="#services"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Services
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
              Locations
            </a>
            <a
              href="#pwa-demo"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-cyan-400 text-xs">⚡</span>
              Live PWA Demo
            </a>
            <a
              href="#faqs"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Quick Actions (Install Web App + WhatsApp CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onInstallApp}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-emerald-500/50 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
              title="Install Web App directly on your device"
            >
              {isAppInstalled ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Installed</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Install Web App</span>
                </>
              )}
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
            <button
              onClick={onInstallApp}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Install</span>
            </button>

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
            <span>Serving Kengeri, Rajarajeshwari Nagar & Bengaluru</span>
          </div>

          {/* Mobile links in requested order */}
          <div className="flex flex-col space-y-1">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60"
            >
              Services
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-emerald-400 hover:bg-slate-800/60 flex items-center justify-between"
            >
              <span>₹5,000 Offer</span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">3-5 Days</span>
            </a>
            <a
              href="#why-bengaluru"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60"
            >
              Locations
            </a>
            <a
              href="#pwa-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60 flex items-center justify-between"
            >
              <span>Live PWA Demo</span>
              <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30">Real Work</span>
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/60"
            >
              FAQ
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onInstallApp();
              }}
              className="w-full py-2.5 rounded-xl text-center text-sm font-semibold bg-slate-800 text-slate-200 border border-slate-700 flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-700"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Install Web App</span>
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
