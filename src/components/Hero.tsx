import React from 'react';
import { MessageCircle, MapPin, ArrowRight, Zap, Star } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  onOpenInstallModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInstallModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Bengaluru City Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-emerald-950/40 backdrop-blur-sm animate-pulse-glow">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Bengaluru's #1 Local Business Digital Growth Partner</span>
          </div>

          {/* Core Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            WE PUT YOUR BENGALURU BUSINESS ON THE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              DIGITAL MAP.
            </span>
          </h1>

          {/* Subtitle with primary benefit */}
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Professional Websites & Google Maps Optimization.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            We bring Bengaluru businesses online and rank them <strong className="text-emerald-400 font-semibold">#1 on Google Maps</strong> so local customers find you, call you, and walk into your store first.
          </p>

          {/* Conversion CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {/* Primary Prominent Green WhatsApp Button */}
            <a
              href={siteConfig.getWhatsAppUrl("Hi SMR Solutions! I want to put my Bengaluru business on the digital map and rank #1 on Google Maps.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-extrabold text-base sm:text-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:-translate-y-1 active:translate-y-0 transition-all group"
            >
              <div className="relative">
                <MessageCircle className="w-6 h-6 fill-slate-950 group-hover:scale-110 transition-transform" />
              </div>
              <span>Get Started – WhatsApp Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary CTA: Transparent Pricing & PWA Demo */}
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-sm sm:text-base bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all shadow-md"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>See ₹5,000 Package Details</span>
            </a>
          </div>

          {/* Quick interactive PWA hint */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 mb-10">
            <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 font-bold text-xs">
              ⚡
            </span>
            <span>
              This entire website is a live <strong className="text-white">Progressive Web App (PWA)</strong>.
            </span>
            <button
              onClick={onOpenInstallModal}
              className="underline text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer"
            >
              Try Installing It
            </button>
          </div>

          {/* Trust Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 border-t border-slate-800/80">
            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-emerald-400 font-extrabold text-xl sm:text-2xl">
                <span>48 Hours</span>
              </div>
              <span className="text-xs text-slate-400 font-medium text-center">Fast Delivery & Live</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-cyan-400 font-extrabold text-xl sm:text-2xl">
                <span>100/100</span>
              </div>
              <span className="text-xs text-slate-400 font-medium text-center">Lighthouse Speed</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-yellow-400 font-extrabold text-xl sm:text-2xl">
                <Star className="w-4 h-4 fill-yellow-400" />
                <span>Top 3</span>
              </div>
              <span className="text-xs text-slate-400 font-medium text-center">Google Map Pack Target</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-purple-400 font-extrabold text-xl sm:text-2xl">
                <span>₹5,000</span>
              </div>
              <span className="text-xs text-slate-400 font-medium text-center">All-Inclusive Starter</span>
            </div>
          </div>

          {/* Bengaluru Locality Ticker */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-400">Serving Local Businesses In:</span>
            {siteConfig.serviceLocations.slice(0, 7).map((loc) => (
              <span
                key={loc}
                className="px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-slate-300 font-medium"
              >
                📍 {loc}
              </span>
            ))}
            <span className="text-slate-400 font-medium">& across all Bengaluru</span>
          </div>

        </div>
      </div>
    </section>
  );
};
