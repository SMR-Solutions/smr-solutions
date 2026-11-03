import React, { useState } from 'react';
import { Smartphone, Download, Check, ExternalLink, Star, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface PwaDemoSectionProps {
  onInstallApp: () => void;
  isAppInstalled: boolean;
}

export const PwaDemoSection: React.FC<PwaDemoSectionProps> = ({
  onInstallApp,
  isAppInstalled
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('nani-pg');
  const [activeTabMode, setActiveTabMode] = useState<'app' | 'maps'>('app');

  const currentProject = siteConfig.portfolio.find((p) => p.id === selectedProjectId) || siteConfig.portfolio[0];

  return (
    <section id="pwa-demo" className="py-20 md:py-28 relative overflow-hidden bg-slate-950/60 border-y border-slate-800/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent PWA Banner with "Install Web App" button */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-cyan-950/70 border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/50 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-emerald-500/10 rounded-full blur-2xl" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4 text-left">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0 shadow-lg">
                <Smartphone className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    Live PWA Technology
                  </span>
                  <span className="text-xs text-slate-400">• Standalone Mobile Experience</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                  "Experience our tech. Install this web app to see how we build custom business apps."
                </h3>
                <p className="text-sm text-slate-300 max-w-2xl">
                  Turn your website into an installable smartphone app with zero 30% App Store fees, instant sub-second opening speeds, and offline caching.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full lg:w-auto">
              <button
                onClick={onInstallApp}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-black text-sm sm:text-base bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                {isAppInstalled ? (
                  <>
                    <Check className="w-5 h-5 text-slate-950 stroke-[3]" />
                    <span>App Installed ✓</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    <span>Install Web App</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Section Header: Real Businesses We Made Online */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Proven Real-World Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Real Businesses We Put On The Digital Map
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No dummy mockups. Explore actual Bengaluru businesses and custom student apps built, ranked, and launched by SMR Solutions.
          </p>

          {/* Business Selectors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-8">
            {siteConfig.portfolio.map((proj) => {
              const isSelected = selectedProjectId === proj.id;
              return (
                <button
                  key={proj.id}
                  onClick={() => {
                    setSelectedProjectId(proj.id);
                    setActiveTabMode('app');
                  }}
                  className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-950/50 scale-[1.02]'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    {proj.category}
                  </div>
                  <div className="text-sm font-bold text-white truncate">
                    {proj.name}
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>{proj.badge}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Phone Showcase & Project Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left: The Smartphone Simulator with Real Screenshot */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] bg-slate-950 rounded-[44px] p-3 shadow-2xl border-4 border-slate-700 shadow-cyan-950/40">
              
              {/* Phone Camera Notch & Speaker */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-full flex items-center justify-center gap-2 z-30">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                <div className="w-8 h-1 rounded-full bg-slate-800" />
              </div>

              {/* Phone Screen Container */}
              <div className="relative w-full h-[580px] bg-[#0c101c] rounded-[36px] overflow-hidden flex flex-col border border-slate-800">
                
                {/* Phone Status Bar */}
                <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold text-slate-400 bg-slate-950/90 border-b border-slate-800/40 z-20">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400 text-[10px] font-bold">5G</span>
                    <span className="text-[10px] bg-slate-800 px-1.5 py-0.2 rounded text-slate-200">100%</span>
                  </div>
                </div>

                {/* Sub-toggle inside Phone if mapsImage exists */}
                {currentProject.mapsImage && (
                  <div className="bg-slate-900 p-1.5 flex gap-1 border-b border-slate-800 z-10">
                    <button
                      onClick={() => setActiveTabMode('app')}
                      className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-colors ${
                        activeTabMode === 'app'
                          ? 'bg-emerald-500 text-slate-950'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      PWA Website View
                    </button>
                    <button
                      onClick={() => setActiveTabMode('maps')}
                      className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-colors ${
                        activeTabMode === 'maps'
                          ? 'bg-emerald-500 text-slate-950'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Google Maps Listing
                    </button>
                  </div>
                )}

                {/* App Content Display */}
                <div className="flex-1 overflow-y-auto relative bg-slate-900/50">
                  <img
                    src={activeTabMode === 'maps' && currentProject.mapsImage ? currentProject.mapsImage : currentProject.image}
                    alt={currentProject.name}
                    className="w-full h-auto object-cover rounded-b-2xl shadow"
                  />
                  
                  {/* Floating Action Pill over the simulator */}
                  <div className="p-3 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent sticky bottom-0 left-0 right-0">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <div className="text-white font-bold truncate max-w-[170px]">
                          {currentProject.name}
                        </div>
                        <div className="text-[10px] text-emerald-400">
                          {currentProject.badge}
                        </div>
                      </div>
                      {currentProject.liveUrl && (
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[10px] flex items-center gap-1 shadow"
                        >
                          <span>Visit Live</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Detailed Real Project Story & Results */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                  {currentProject.category}
                </span>
                <span className="text-xs font-semibold text-amber-300 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  {currentProject.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-1">
                {currentProject.name}
              </h3>

              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 mb-4">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{currentProject.location}</span>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            {/* Key Deliverables Achieved */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                What SMR Solutions Built & Optimized:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentProject.highlights.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs text-slate-200 font-medium leading-tight">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={siteConfig.getWhatsAppUrl(currentProject.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Get a Setup Like {currentProject.name}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {currentProject.liveUrl && (
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Live App Demo</span>
                </a>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
