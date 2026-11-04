import React from 'react';
import { ArrowLeft, Scale, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ThemeToggle } from './ThemeToggle';

interface TermsPageProps {
  onBackToHome: () => void;
  onNavigatePrivacy: () => void;
  onNavigateCompliance: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({
  onBackToHome,
  onNavigatePrivacy,
  onNavigateCompliance
}) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#070A12] dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#070A12]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Back to Home Button */}
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer active:scale-95"
            aria-label="Back to Home"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Back to Home</span>
          </button>

          {/* SMR Solutions Brand Logo (clickable back to home) */}
          <button onClick={onBackToHome} className="flex items-center gap-2 group cursor-pointer text-left">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-emerald-500 to-cyan-500 shadow-sm shrink-0">
              <img
                src="/logo.png"
                alt="SMR Solutions Logo"
                className="w-full h-full object-contain rounded-full bg-white"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                SMR <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">Solutions</span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">
                Terms of Service
              </span>
            </div>
          </button>

          {/* Actions: Theme Toggle & WhatsApp */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a
              href={siteConfig.getWhatsAppUrl("Hi SMR Solutions! I have a question regarding your Terms of Service.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-bold text-xs sm:text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-950" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 w-full">
        
        {/* Navigation Tabs (Terms / Privacy / MSME Compliance) */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1 rounded-2xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs font-semibold shadow-inner">
            <button
              className="px-4 py-2 rounded-xl bg-white dark:bg-emerald-500 text-slate-950 shadow-md font-bold transition-all cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={onNavigatePrivacy}
              className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-all cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onNavigateCompliance}
              className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-all cursor-pointer hidden sm:inline-block"
            >
              Govt. MSME Compliance
            </button>
          </div>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Last Updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })} • Applicable to smrsolutions.netlify.app
          </p>
        </div>

        {/* Intro Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm mb-8 leading-relaxed text-sm sm:text-base text-slate-700 dark:text-slate-300">
          Welcome to <strong>SMR Solutions</strong>. By accessing our website (<strong>smrsolutions.netlify.app</strong>) or purchasing our digital services, you agree to comply with and be bound by the following terms and conditions.
        </div>

        {/* 6 Core Sections */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Section 1 */}
          <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:border-emerald-500/40">
            <div className="flex items-start gap-3.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5">
                1
              </div>
              <h2 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">
                Scope of Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-0 sm:pl-11.5">
              SMR Solutions provides digital setup services, including Google Business Profile (GBP) setup/optimization, website development, and custom Progressive Web Apps (PWAs). All project scopes, deliverables, timelines, and fees will be agreed upon in writing before work begins.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:border-emerald-500/40">
            <div className="flex items-start gap-3.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5">
                2
              </div>
              <h2 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">
                Client Obligations & Content
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-0 sm:pl-11.5">
              Clients must provide accurate business information, images, and necessary access credentials (such as Google account access or domain panel access) required to complete the services. SMR Solutions is not responsible for delays caused by missing or inaccurate client data.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:border-emerald-500/40">
            <div className="flex items-start gap-3.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5">
                3
              </div>
              <h2 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">
                Payment Terms
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-0 sm:pl-11.5">
              All services require a payment structure as agreed upon in the invoice or digital package card. SMR Solutions reserves the right to pause design or optimization work if payments are delayed.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:border-emerald-500/40">
            <div className="flex items-start gap-3.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5">
                4
              </div>
              <h2 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">
                Intellectual Property & Deliverables
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-0 sm:pl-11.5">
              Upon full and final payment, ownership of the custom website code and digital assets will be transferred to the client. SMR Solutions retains the right to display completed projects in our portfolio and marketing materials unless a non-disclosure agreement is signed.
            </p>
          </div>

          {/* Section 5 */}
          <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:border-amber-500/40">
            <div className="flex items-start gap-3.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5">
                5
              </div>
              <h2 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">
                Limitation of Liability
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-0 sm:pl-11.5">
              SMR Solutions utilizes industry-standard best practices for Google Maps Optimization and SEO. However, third-party search engine algorithms fluctuate constantly. We do not guarantee permanent fixed rankings, nor are we liable for sudden third-party platform policy changes or suspensions.
            </p>
          </div>

          {/* Section 6 */}
          <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:border-cyan-500/40">
            <div className="flex items-start gap-3.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5">
                6
              </div>
              <h2 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">
                Jurisdiction
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-0 sm:pl-11.5">
              These terms are governed by the laws of India, and any legal disputes will be subject to the exclusive jurisdiction of the courts in <strong>Bengaluru, Karnataka</strong>.
            </p>
          </div>

        </div>

        {/* Contact CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm text-center sm:text-left">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              Have questions about our service terms?
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Reach out directly on WhatsApp or email us at {siteConfig.email}.
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={onBackToHome}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 cursor-pointer"
            >
              Back to Home
            </button>
            <a
              href={siteConfig.getWhatsAppUrl("Hi SMR Solutions! I have a question about your terms.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center gap-1.5 shadow"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </main>

      {/* Simple Minimalist Footer */}
      <footer className="py-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} SMR Solutions. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <button onClick={onNavigatePrivacy} className="hover:underline">Privacy Policy</button>
            <span>•</span>
            <button onClick={onNavigateCompliance} className="hover:underline">Govt. Compliance</button>
            <span>•</span>
            <button onClick={onBackToHome} className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold cursor-pointer">
              ← Back to Home
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
};
