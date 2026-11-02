import React from 'react';
import { Check, ArrowRight, Clock, Zap } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Our Growth Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Everything Your Local Business Needs To Win Online
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Focused, high-impact services built for modern mobile users in Kengeri, Rajarajeshwari Nagar, and across Bengaluru.
          </p>
        </div>

        {/* 3 Core Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Service 1: The Complete Google Mapping */}
          <div className="relative group rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 p-8 flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-950/40">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  🗺️
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Google Maps
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                The Complete Google Mapping
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Rank in the Google Local 3-Pack when customers search for your services nearby in Kengeri, RR Nagar, and Bengaluru.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Google Business Profile (GBP) verification & full setup</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Hyper-local geo-tagging & category matching</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>5-Star Google Review counter-top QR code kit</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>High-intent direct WhatsApp & phone call integration</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" /> 3-5 Days Quality Launch
                </span>
                <span className="text-emerald-400 font-semibold">₹5,000 Plan</span>
              </div>
              <a
                href={siteConfig.getWhatsAppUrl("Hi SMR Solutions! I want The Complete Google Mapping offer for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white font-bold text-xs sm:text-sm transition-all"
              >
                <span>Boost Google Maps</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Service 2: Modern Websites */}
          <div className="relative group rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 p-8 flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-950/40">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  🌐
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  Sub-Second Speed
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                Modern Websites
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Clean, single-page conversion funnels engineered to convert mobile visitors directly into direct WhatsApp leads.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Perfect 100/100 Google Lighthouse performance score</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Mobile-first layout optimized for thumb-tapping visitors</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Instant WhatsApp & direct phone call lead integrations</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Free SSL, global CDN hosting & schema markup</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" /> 3-5 Days Turnaround
                </span>
                <span className="text-cyan-400 font-semibold">Included in Combo Plan</span>
              </div>
              <a
                href={siteConfig.getWhatsAppUrl("Hi SMR Solutions! I need a fast modern website for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-white font-bold text-xs sm:text-sm transition-all"
              >
                <span>Build My Modern Site</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Service 3: Custom PWAs */}
          <div className="relative group rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 p-8 flex flex-col justify-between hover:shadow-2xl hover:shadow-purple-950/40">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  📱
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30">
                  Installable PWA
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                Custom PWAs (Web Apps)
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Give your customers an installable smartphone app with your logo on their home screen without paying lakhs in native app development.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>One-tap "Add to Home Screen" on Android & iOS</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Works offline with cached contact & service cards</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Zero Play Store / App Store 30% fees or delays</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Custom branded app icon on client's smartphone</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-purple-400" /> 3-5 Days Quality Launch
                </span>
                <span className="text-purple-400 font-semibold">Included in Combo Plan</span>
              </div>
              <a
                href={siteConfig.getWhatsAppUrl("Hi SMR Solutions! I want a custom Progressive Web App (PWA) for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-purple-500 hover:text-slate-950 text-white font-bold text-xs sm:text-sm transition-all"
              >
                <span>Get Custom PWA</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
