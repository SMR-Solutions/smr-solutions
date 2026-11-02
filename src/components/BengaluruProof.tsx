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
            <span>Bengaluru Market Reality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            76% of Bengaluru Customers Search Google Maps Before Visiting
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            If your business is not in the Top 3 Google Map results, you are silently losing high-paying walk-ins and phone inquiries to competitors down the street.
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
                <span>Take 6 to 10 weeks to deliver, missing urgent festive & launch seasons.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold shrink-0">✕</span>
                <span>Slow page loads (5+ seconds) that lose 50%+ of mobile shoppers.</span>
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
                <span><strong>Just ₹5,000 one-time</strong> with zero surprise development bills.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>48-Hour delivery:</strong> Your business is live and taking leads this week.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>100/100 Lighthouse performance:</strong> Loads in under 0.5s on any network.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>Google Maps Local 3-Pack ready:</strong> Optimized specifically for Bengaluru local SEO.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                <span><strong>Progressive Web App (PWA):</strong> Customers can install your app directly on their phones.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Local Areas Grid Banner */}
        <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4" />
            <span>Active Support In Bengaluru Localities</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-black text-white mb-4">
            Helping Local Businesses Stand Out in Every Commercial Hub
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {siteConfig.serviceLocations.map((loc) => (
              <span
                key={loc}
                className="px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white hover:border-emerald-500/50 transition-colors"
              >
                📍 {loc}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
