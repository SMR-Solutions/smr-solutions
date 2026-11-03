import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowRight, ShieldCheck, Download, Check } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ThemeToggle } from './ThemeToggle';

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
          ? 'bg-white/95 dark:bg-[#070A12]/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800/80 shadow-md shadow-slate-200/50 dark:shadow-black/50'
          : 'bg-white/70 dark:bg-[#070A12]/60 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none border-b border-slate-200/50 dark:border-slate-900/50 sm:border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Logo and Brand */}
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 group min-w-0 shrink-0">
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-emerald-500 to-cyan-500 shadow-md group-hover:scale-105 transition-transform shrink-0">
              <img
                src="/logo.png"
                alt="SMR Solutions Logo"
                className="w-full h-full object-contain rounded-full bg-white"
              />
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white dark:border-[#070A12] animate-ping" />
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white dark:border-[#070A12]" />
            </div>

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors whitespace-nowrap">
                  SMR <span className="text-emerald-600 dark:text-emerald-400 font-light">Solutions</span>
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hidden xl:inline-block">
                  Kengeri • RR Nagar
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 tracking-wide truncate max-w-[120px] sm:max-w-none">
                Google Maps & Web Funnels
              </span>
            </div>
          </a>

          {/* Center on Small & Medium Screens: Theme Toggle */}
          <div className="lg:hidden flex items-center justify-center px-1">
            <ThemeToggle />
          </div>

          {/* Desktop Nav Links in strict sequence */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            <a
              href="#services"
              className="text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              ₹5,000 Offer
            </a>
            <a
              href="#why-bengaluru"
              className="text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              Locations
            </a>
            <a
              href="#pwa-demo"
              className="text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-cyan-500 dark:text-cyan-400 text-xs">⚡</span>
              Live PWA Demo
            </a>
            <a
              href="#faqs"
              className="text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Actions: Install Web App + WhatsApp Us + Theme Toggle right beside WhatsApp! */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={onInstallApp}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 dark:text-slate-200 dark:border-slate-700 hover:border-emerald-500/50 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
              title="Install Web App directly on your device"
            >
              {isAppInstalled ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-700 dark:text-emerald-300">Installed</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
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

            {/* Desktop Theme Toggle right beside WhatsApp Us */}
            <ThemeToggle />
          </div>

          {/* Small & Medium Screen Actions (Install icon + Hamburger menu) */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Clean, icon-only Install Button */}
            <button
              onClick={onInstallApp}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-cyan-700 border border-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 dark:text-cyan-400 dark:border-slate-700 active:scale-95 transition-all shadow-sm flex items-center justify-center cursor-pointer"
              aria-label="Install Web App"
              title="Install Web App"
            >
              {isAppInstalled ? (
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
              ) : (
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>

            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 dark:text-slate-300 dark:hover:text-white dark:border-slate-700 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu (Accessible & Full-Screen Ready) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-[#0a0f1d]/98 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span className="truncate">Serving Kengeri, Rajarajeshwari Nagar & Bengaluru</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-1">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm sm:text-base font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/60 transition-colors"
            >
              Services
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors flex items-center justify-between"
            >
              <span>₹5,000 Offer</span>
              <span className="text-[11px] bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                3-5 Days
              </span>
            </a>
            <a
              href="#why-bengaluru"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm sm:text-base font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/60 transition-colors"
            >
              Locations
            </a>
            <a
              href="#pwa-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm sm:text-base font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/60 transition-colors flex items-center justify-between"
            >
              <span>Live PWA Demo</span>
              <span className="text-[11px] bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30">
                Real Work
              </span>
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm sm:text-base font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/60 transition-colors"
            >
              FAQ
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onInstallApp();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-center text-xs sm:text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 dark:border-slate-700 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
            >
              <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{isAppInstalled ? 'Web App Installed ✓' : 'Install Web App on Phone'}</span>
            </button>

            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl text-center font-bold text-sm sm:text-base text-slate-950 bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950" />
              <span>Chat on WhatsApp Now</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
