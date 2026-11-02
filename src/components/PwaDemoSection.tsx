import React, { useState } from 'react';
import { Smartphone, Download, Wifi, WifiOff, Sparkles, Check, Zap } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface PwaDemoSectionProps {
  onOpenInstallModal: () => void;
  deferredPrompt: any;
  onInstallApp: () => void;
  isAppInstalled: boolean;
}

type DemoNiche = 'cafe' | 'clinic' | 'salon' | 'studio';

export const PwaDemoSection: React.FC<PwaDemoSectionProps> = ({
  onOpenInstallModal,
  deferredPrompt,
  onInstallApp,
  isAppInstalled
}) => {
  const [selectedNiche, setSelectedNiche] = useState<DemoNiche>('cafe');
  const [isOfflineSimulated, setIsOfflineSimulated] = useState(false);


  const demoPresets = {
    cafe: {
      name: 'Roast & Brew Cafe',
      locality: 'Indiranagar 100ft Rd',
      rating: '4.9 ★ (840+ Google Reviews)',
      category: 'Specialty Coffee & Eatery',
      color: 'from-amber-600 to-amber-800',
      heroImage: '☕',
      cta: 'Order on WhatsApp',
      features: ['Table Booking', 'Digital Menu', 'Loyalty Stamp Card']
    },
    clinic: {
      name: 'Dr. Rao Smiles Dental',
      locality: 'Koramangala 4th Block',
      rating: '4.9 ★ (620+ Google Reviews)',
      category: 'Dental Clinic & Orthodontics',
      color: 'from-cyan-600 to-blue-700',
      heroImage: '🩺',
      cta: 'Book Consultation',
      features: ['WhatsApp Booking', 'Doctor Timings', 'Direct Directions']
    },
    salon: {
      name: 'Aura Luxe Unisex Salon',
      locality: 'HSR Layout Sector 2',
      rating: '4.8 ★ (910+ Google Reviews)',
      category: 'Hair, Skin & Spa Studio',
      color: 'from-pink-600 to-purple-800',
      heroImage: '💇‍♀️',
      cta: 'Book Appointment',
      features: ['Service Ratecard', 'Stylist Portfolio', 'Google Review QR']
    },
    studio: {
      name: 'UrbanCraft Interiors',
      locality: 'Whitefield Main Road',
      rating: '5.0 ★ (310+ Google Reviews)',
      category: 'Interior Design & Architecture',
      color: 'from-emerald-600 to-teal-800',
      heroImage: '🛋️',
      cta: 'Request 3D Quote',
      features: ['Project Portfolio', 'Cost Estimator', 'Client Testimonials']
    }
  };

  const currentPreset = demoPresets[selectedNiche];

  return (
    <section id="pwa-demo" className="py-20 md:py-28 relative overflow-hidden bg-slate-950/60 border-y border-slate-800/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Requested Prominent PWA Banner */}
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
                    Interactive Tech Experience
                  </span>
                  <span className="text-xs text-slate-400">• Try It On Your Device</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                  "Experience our tech. Tap your browser menu and click 'Add to Home Screen' to see how we build custom business apps."
                </h3>
                <p className="text-sm text-slate-300 max-w-2xl">
                  Turn your website into a full smartphone app in 1-click. No Google Play Store rejection, no Apple 30% developer cut, and instant sub-second opening speed.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
              {deferredPrompt ? (
                <button
                  onClick={onInstallApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-black text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Install SMR Solutions App</span>
                </button>
              ) : isAppInstalled ? (
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-sm">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>App Already Installed!</span>
                </div>
              ) : (
                <button
                  onClick={onOpenInstallModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-black text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Install / Add to Home Screen</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Live Interactive Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            See How Your Business App Works Instantly
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Choose your business niche below to test drive the PWA experience in real time. Notice the app speed, offline capability, and 1-tap WhatsApp lead funnel.
          </p>

          {/* Business Niche Selectors */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setSelectedNiche('cafe')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedNiche === 'cafe'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              ☕ Cafe & Restaurant
            </button>

            <button
              onClick={() => setSelectedNiche('clinic')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedNiche === 'clinic'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              🩺 Dental / Medical Clinic
            </button>

            <button
              onClick={() => setSelectedNiche('salon')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedNiche === 'salon'
                  ? 'bg-pink-500 text-slate-950 shadow-lg shadow-pink-500/25 scale-105'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              💇‍♀️ Salon & Spa Studio
            </button>

            <button
              onClick={() => setSelectedNiche('studio')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedNiche === 'studio'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              🛋️ Interior & Services
            </button>
          </div>
        </div>

        {/* Live Phone Mockup & Feature Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left: The Smartphone Simulator */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[340px] bg-slate-950 rounded-[44px] p-3 shadow-2xl border-4 border-slate-700 shadow-cyan-950/40">
              
              {/* Phone Camera Notch & Speaker */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-full flex items-center justify-center gap-2 z-30">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                <div className="w-8 h-1 rounded-full bg-slate-800" />
              </div>

              {/* Phone Screen Container */}
              <div className="relative w-full h-[580px] bg-[#0c101c] rounded-[36px] overflow-hidden flex flex-col border border-slate-800">
                
                {/* Phone Status Bar */}
                <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold text-slate-400 bg-slate-950/80 border-b border-slate-800/40 z-20">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    {isOfflineSimulated ? (
                      <span className="flex items-center gap-1 text-red-400 text-[10px]">
                        <WifiOff className="w-3 h-3" /> Offline
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-emerald-400 text-[10px]">
                        <Wifi className="w-3 h-3" /> 5G
                      </span>
                    )}
                    <span className="text-[10px] bg-slate-800 px-1.5 py-0.2 rounded text-slate-200">100%</span>
                  </div>
                </div>

                {/* Simulated PWA Header Bar */}
                <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{currentPreset.heroImage}</span>
                    <div className="leading-tight">
                      <div className="text-xs font-bold text-white truncate max-w-[150px]">{currentPreset.name}</div>
                      <div className="text-[10px] text-emerald-400 font-medium">📍 {currentPreset.locality}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    Installed App
                  </span>
                </div>

                {/* Simulated App Content Body */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-left text-xs">
                  
                  {/* Hero Banner in Phone */}
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${currentPreset.color} text-white shadow-lg`}>
                    <div className="text-[10px] uppercase font-bold tracking-wider opacity-80 mb-1">
                      {currentPreset.category}
                    </div>
                    <div className="text-sm font-black mb-1">{currentPreset.name}</div>
                    <div className="text-[11px] text-amber-200 font-semibold mb-3">
                      {currentPreset.rating}
                    </div>
                    <a
                      href={siteConfig.getWhatsAppUrl(`Hi, I'm testing the demo for ${currentPreset.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-slate-950 font-bold text-xs shadow hover:bg-slate-100"
                    >
                      <span>💬 {currentPreset.cta}</span>
                    </a>
                  </div>

                  {/* Offline Storage Notice in Phone */}
                  {isOfflineSimulated && (
                    <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] flex items-center gap-2">
                      <Zap className="w-4 h-4 shrink-0 text-amber-400" />
                      <span>Loaded from Service Worker cache! Works even without Internet.</span>
                    </div>
                  )}

                  {/* Highlights Grid in Phone */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                      Business Features:
                    </div>
                    {currentPreset.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-slate-200 font-medium">{feat}</span>
                        <span className="text-emerald-400 text-[10px] font-bold">Included ✓</span>
                      </div>
                    ))}
                  </div>

                  {/* Counter Top Google Review QR Card Mockup */}
                  <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-[11px] font-bold text-slate-200 mb-1">
                      ⭐ Tap to Leave 5-Star Google Review
                    </div>
                    <div className="text-[10px] text-slate-400 mb-2">
                      Instant QR code included with the ₹5,000 package
                    </div>
                    <div className="w-16 h-16 mx-auto bg-white rounded-lg p-1.5 flex items-center justify-center shadow">
                      <div className="w-full h-full border-2 border-dashed border-slate-800 flex items-center justify-center font-mono font-bold text-[8px] text-slate-800">
                        QR CODE
                      </div>
                    </div>
                  </div>

                </div>

                {/* Simulated Bottom Navigation */}
                <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 flex items-center justify-around text-[10px] text-slate-400">
                  <div className="text-emerald-400 font-bold flex flex-col items-center">
                    <span>🏠</span>
                    <span>Home</span>
                  </div>
                  <div className="hover:text-slate-200 flex flex-col items-center">
                    <span>🗺️</span>
                    <span>Find Us</span>
                  </div>
                  <div className="hover:text-slate-200 flex flex-col items-center">
                    <span>💬</span>
                    <span>WhatsApp</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Why This Technology Dominates in Bengaluru */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                PWA Technology vs. Traditional Apps
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-3 leading-snug">
                Why Bengaluru Businesses Are Replacing Native Apps With Our PWAs
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Building an iOS and Android app costs ₹75,000+ and takes 3 months. Then, 95% of customers refuse to download a 60MB app just to order or book an appointment. A PWA installs in 1 second and uses less than 1MB!
              </p>
            </div>

            {/* Feature comparison checklist */}
            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">Zero App Store Approvals & Zero 30% Commissions</h4>
                    <p className="text-xs text-slate-400">
                      Update your prices, menu, or offers instantly without waiting days for Apple or Google approval.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">Works Seamlessly Even When Internet Drops</h4>
                    <p className="text-xs text-slate-400">
                      With smart service-worker caching, repeat visitors can view your contact details, services, and catalog offline.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">Instant WhatsApp Lead Conversion</h4>
                    <p className="text-xs text-slate-400">
                      Rather than cold contact forms, every interaction triggers a pre-filled WhatsApp chat for an immediate close.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Offline Simulation Toggle Bar */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {isOfflineSimulated ? (
                  <WifiOff className="w-5 h-5 text-red-400" />
                ) : (
                  <Wifi className="w-5 h-5 text-emerald-400" />
                )}
                <div className="text-xs">
                  <span className="font-bold text-white block">
                    {isOfflineSimulated ? 'Offline Mode Active' : 'Online Mode (5G)'}
                  </span>
                  <span className="text-slate-400">
                    Toggle to test service worker caching
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOfflineSimulated(!isOfflineSimulated)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  isOfflineSimulated
                    ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                }`}
              >
                {isOfflineSimulated ? 'Reconnect Online' : 'Simulate Offline'}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
