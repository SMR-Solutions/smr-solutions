import React from 'react';
import { Check, MessageCircle, ShieldCheck, Zap, Sparkles, ArrowRight, Star } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const OfferMatrix: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-emerald-500/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Zero Hidden Fees • 100% Upfront</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Transparent Pricing That Builds Instant Trust
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No monthly retainer lock-ins. No surprise agency invoices. Just pure results for your Bengaluru business starting at a fraction of standard agency costs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Main Featured Hero Card: ₹5,000 Starter Digital Launch */}
          <div className="lg:col-span-7 relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-2 border-emerald-500 shadow-2xl shadow-emerald-950/60 p-8 sm:p-10 flex flex-col justify-between">
            
            {/* Popular Badge */}
            <div className="absolute -top-4 left-8 px-4 py-1.5 rounded-full bg-emerald-500 text-slate-950 font-black text-xs tracking-wider uppercase shadow-lg flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-slate-950" />
              <span>Most Popular Bengaluru Choice</span>
            </div>

            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Bengaluru Starter Launch
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    The complete Google Maps & 1-Page PWA website package.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 line-through block font-medium">₹12,000</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-emerald-400">₹5,000</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-300 block">One-Time All-Inclusive</span>
                </div>
              </div>

              {/* Delivery Speed Pill */}
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 mb-6 text-xs text-emerald-300 font-semibold">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lightning 48-Hour Turnaround • Ready to launch this week</span>
              </div>

              {/* Features List */}
              <div className="space-y-3.5 mb-8">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  What's Included in Your ₹5,000 Package:
                </div>

                {siteConfig.pricing[0].features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm text-slate-200 font-medium leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div>
              <a
                href={siteConfig.getWhatsAppUrl(siteConfig.pricing[0].whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-[1.02] active:scale-[0.99] group"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 group-hover:scale-110 transition-transform" />
                <span>Claim ₹5,000 Launch Package</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center justify-center gap-2 mt-3 text-xs text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Pay only after onboarding call & plan approval</span>
              </div>
            </div>

          </div>

          {/* Secondary Card: ₹9,999 Bengaluru Local Dominator */}
          <div className="lg:col-span-5 relative rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-700 transition-colors">
            
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Local Dominator
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    For businesses targeting multi-locality dominance.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 line-through block font-medium">₹22,000</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-white">₹9,999</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 block">One-Time Build</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-2 mb-6 text-xs text-cyan-300 font-semibold">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Includes 30 Days of Rank Monitoring</span>
              </div>

              {/* Features List */}
              <div className="space-y-3.5 mb-8">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Everything in Starter, Plus:
                </div>

                {siteConfig.pricing[1].features.slice(1).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-300 font-medium leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href={siteConfig.getWhatsAppUrl(siteConfig.pricing[1].whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition-all border border-slate-700 hover:border-slate-600"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Dominator Plan</span>
              </a>
              <div className="text-center mt-3 text-xs text-slate-500">
                Ideal for established clinics, showrooms & multi-outlets
              </div>
            </div>

          </div>

        </div>

        {/* Comparison Callout */}
        <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <div className="text-sm font-bold text-white">Need a custom multi-page site or custom booking system?</div>
              <div className="text-xs text-slate-400">We customize our modern tech stack for your exact business requirements.</div>
            </div>
          </div>
          <a
            href={siteConfig.getWhatsAppUrl("Hi SMR Solutions! I have a custom requirement for my business website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-emerald-400 hover:text-emerald-300 underline shrink-0"
          >
            Ask for Custom Quote →
          </a>
        </div>

      </div>
    </section>
  );
};
