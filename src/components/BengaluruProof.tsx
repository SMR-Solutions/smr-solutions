import React from 'react';
import { MapPin, XCircle, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const BengaluruProof: React.FC = () => {
  return (
    <section id="why-bengaluru" className="py-20 md:py-28 relative bg-[#060810] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Market Reality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            76% of Local Customers Search Google Maps Before Visiting
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            If your business is not ranking in the Top 3 on Google Maps, you are silently losing walk-ins and phone inquiries to competitors down the road.
          </p>
        </div>

        {/* Side-by-Side Comparison: Traditional Agency vs SMR Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* The Old Way */}
          <div className="p-8 rounded-3xl bg-red-950/20 border border-red-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">Traditional Web Agencies</h3>
                <span className="text-xs text-red-400 font-semibold">Expensive, slow, and outdated</span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>Charge ₹35,000 – ₹70,000 for basic bloated WordPress websites.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>Take 6 to 10 weeks to deliver, with endless delays and excuses.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>Slow page loads (5+ seconds) that lose 50%+ of mobile visitors.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>Ignore Google Maps optimization entirely, leaving you unranked.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>Charge ₹5,000/month recurring maintenance fees just to keep the site online.</span>
              </div>
            </div>
          </div>

          {/* The SMR Solutions Way */}
          <div className="p-8 rounded-3xl bg-emerald-950/25 border-2 border-emerald-500/60 shadow-xl shadow-emerald-950/40">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">The SMR Solutions Fast-Funnel</h3>
                <span className="text-xs text-emerald-400 font-semibold">High impact, high ROI, rapid launch</span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>Just ₹5,000 for The Complete Google Mapping:</strong> 100% upfront pricing.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>3-5 Days Quality Launch:</strong> Done right with proper geo-tagging & category matching.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>Google Maps Local 3-Pack Ready:</strong> Optimized specifically for your locality.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>5-Star Review Countertop QR Code:</strong> Included to collect reviews fast.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>Progressive Web App (PWA) Option:</strong> Full smartphone app experience.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Local Areas Grid Banner */}
        <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 text-center max-w-4xl mx-auto space-y-6">
          <div>
            <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4" />
              <span>Locations We Serve</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              Currently Serving Local Businesses In:
            </h4>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {siteConfig.activeLocations.map((loc) => (
              <span
                key={loc}
                className="px-4 py-2 rounded-xl bg-emerald-950/50 border border-emerald-500/50 text-sm font-bold text-emerald-300 shadow-md"
              >
                📍 {loc}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800">
            <span className="text-xs font-medium text-slate-400 block mb-2.5">
              Expanding soon to:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {siteConfig.upcomingLocations.map((loc) => (
                <span
                  key={loc}
                  className="px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300"
                >
                  {loc}
                </span>
              ))}
              <span className="px-3 py-1 rounded-lg bg-slate-800/30 text-xs text-slate-400 font-semibold">
                & across all Bengaluru
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
