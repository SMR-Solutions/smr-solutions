import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, CheckCircle2, Eye, Maximize2, FileText, Lock, X, MessageCircle, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ThemeToggle } from './ThemeToggle';

interface CompliancePageProps {
  onBackToHome: () => void;
}

export const CompliancePage: React.FC<CompliancePageProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState<'both' | 1 | 2>('both');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; caption: string } | null>(null);

  const compliance = siteConfig.compliance;

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
                Official Compliance
              </span>
            </div>
          </button>

          {/* Actions: Theme Toggle & WhatsApp */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a
              href={siteConfig.getWhatsAppUrl("Hi SMR Solutions! I reviewed your Government MSME Registration & Compliance page.")}
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
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 w-full">
        
        {/* Verification Breadcrumb Badge */}
        <div className="flex items-center justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Verified Micro Enterprise</span>
          </div>
        </div>

        {/* 1. Clear Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            {compliance.title}
          </h1>
          
          {/* 2. Official Status Text */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/80 border-2 border-emerald-500/40 shadow-lg shadow-emerald-500/5 dark:shadow-emerald-950/30 text-left sm:text-center">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
              "{compliance.officialStatusText}"
            </p>
          </div>
        </div>

        {/* Quick Facts / Verification Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center">
            <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Enterprise Type</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">{compliance.enterpriseType}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center">
            <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Authority</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">MSME, Govt. of India</span>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center">
            <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Document Status</span>
            <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Active & Verified</span>
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center">
            <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Official Portal</span>
            <a
              href={compliance.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 mt-0.5 truncate"
              title="Visit Udyam Registration Portal"
            >
              <span>udyamregistration.gov.in</span>
              <ExternalLink className="w-3 h-3 shrink-0" />
            </a>
          </div>
        </div>

        {/* 3. The Certificate Display & Controls */}
        <div className="space-y-6">
          
          {/* Document Viewer Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div>
                <h2 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Official Udyam Registration Certificate (2 Pages)
                </h2>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Inspect the complete official document with embedded verification QR code
                </p>
              </div>
            </div>

            {/* View Mode Toggle Buttons */}
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('both')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'both'
                    ? 'bg-emerald-500 text-slate-950 shadow-sm font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                All Pages
              </button>
              <button
                onClick={() => setActiveTab(1)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 1
                    ? 'bg-emerald-500 text-slate-950 shadow-sm font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                Page 1
              </button>
              <button
                onClick={() => setActiveTab(2)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 2
                    ? 'bg-emerald-500 text-slate-950 shadow-sm font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                Page 2
              </button>
            </div>
          </div>

          {/* Certificate Images Display Area */}
          <div className="space-y-8">
            
            {/* Page 1: Registration Certificate */}
            {(activeTab === 'both' || activeTab === 1) && (
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/50 transition-all">
                {/* Header bar of Page 1 */}
                <div className="px-4 py-3 sm:px-6 sm:py-3.5 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      Page 1: Registration Certificate & QR Code
                    </span>
                  </div>
                  <button
                    onClick={() => setLightboxImage(compliance.images[0])}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-300 dark:border-slate-600 shadow-sm transition-all cursor-pointer"
                    title="Click to view full screen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden xs:inline">Zoom Full Screen</span>
                  </button>
                </div>

                {/* Embedded Certificate Page 1 Image */}
                <div
                  className="p-3 sm:p-6 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-center cursor-pointer group relative"
                  onClick={() => setLightboxImage(compliance.images[0])}
                  title="Click image to zoom in"
                >
                  <div className="relative max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl border border-slate-300 dark:border-slate-700 bg-white">
                    <img
                      src={compliance.images[0].src}
                      alt="SMR Solutions - Government MSME Registration Certificate Page 1"
                      className="w-full h-auto object-contain select-none"
                    />
                    
                    {/* Hover zoom prompt */}
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all flex items-center justify-center pointer-events-none">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-xl bg-slate-900/90 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-2xl backdrop-blur-sm">
                        <Eye className="w-4 h-4 text-emerald-400" />
                        <span>Click to view full-resolution certificate</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption Footer */}
                <div className="px-4 py-3 sm:px-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Includes official QR code verifiable via mobile camera or government portal.</span>
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Document ID: MSME-Page-1</span>
                </div>
              </div>
            )}

            {/* Page 2: Enterprise Classification & NIC Details */}
            {(activeTab === 'both' || activeTab === 2) && (
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/50 transition-all">
                {/* Header bar of Page 2 */}
                <div className="px-4 py-3 sm:px-6 sm:py-3.5 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      Page 2: Enterprise Classification & Registered Activity
                    </span>
                  </div>
                  <button
                    onClick={() => setLightboxImage(compliance.images[1])}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-300 dark:border-slate-600 shadow-sm transition-all cursor-pointer"
                    title="Click to view full screen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden xs:inline">Zoom Full Screen</span>
                  </button>
                </div>

                {/* Embedded Certificate Page 2 Image */}
                <div
                  className="p-3 sm:p-6 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-center cursor-pointer group relative"
                  onClick={() => setLightboxImage(compliance.images[1])}
                  title="Click image to zoom in"
                >
                  <div className="relative max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl border border-slate-300 dark:border-slate-700 bg-white">
                    <img
                      src={compliance.images[1].src}
                      alt="SMR Solutions - Government MSME Registration Certificate Page 2"
                      className="w-full h-auto object-contain select-none"
                    />
                    
                    {/* Hover zoom prompt */}
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all flex items-center justify-center pointer-events-none">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-xl bg-slate-900/90 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-2xl backdrop-blur-sm">
                        <Eye className="w-4 h-4 text-cyan-400" />
                        <span>Click to view full-resolution certificate</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption Footer */}
                <div className="px-4 py-3 sm:px-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span>Includes National Industry Classification (NIC) for digital services & web solutions.</span>
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Document ID: MSME-Page-2</span>
                </div>
              </div>
            )}

          </div>

          {/* 4. Security & Compliance Reminder Notice */}
          <div className="p-4 sm:p-6 rounded-2xl bg-slate-100/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                <Lock className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Document Integrity & Compliance Statement
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  In compliance with Government of India regulations and official State Emblem & Trademark guidelines, this official Udyam Registration Certificate is displayed solely as an unedited, complete original document. No emblems or official logos are extracted or used as loose decorative graphics. SMR Solutions operates in full transparency with all clients across Bengaluru, Karnataka.
                </p>
              </div>
            </div>
          </div>

          {/* Contact / Return Section */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs sm:text-sm transition-all cursor-pointer active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Main Website</span>
            </button>

            <a
              href={siteConfig.getWhatsAppUrl("Hi SMR Solutions! I reviewed your government MSME certificate and would like to discuss a project for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Discuss Your Project on WhatsApp</span>
            </a>
          </div>

        </div>

      </main>

      {/* Lightbox Fullscreen Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[95vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 cursor-pointer shadow-lg transition-all"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate High-Res Viewer */}
            <div className="rounded-2xl overflow-hidden border border-slate-700 bg-white shadow-2xl max-h-[82vh] overflow-y-auto">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="w-full h-auto object-contain select-none"
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-3 text-center px-4">
              <div className="text-sm sm:text-base font-bold text-white">{lightboxImage.title}</div>
              <div className="text-xs text-slate-300 max-w-xl mx-auto mt-0.5">{lightboxImage.caption}</div>
            </div>
          </div>
        </div>
      )}

      {/* Simple Minimalist Footer */}
      <footer className="py-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} SMR Solutions. Registered Micro Enterprise, Govt. of India.</span>
          <button
            onClick={onBackToHome}
            className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold cursor-pointer"
          >
            ← Back to Home
          </button>
        </div>
      </footer>

    </div>
  );
};
