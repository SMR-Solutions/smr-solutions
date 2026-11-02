import React, { useState } from 'react';
import { Calculator, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const RoiCalculator: React.FC = () => {
  const [monthlySearches, setMonthlySearches] = useState<number>(2000);
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(1500);

  // Conversion modeling:
  // Top 3 Google Map pack gets ~30% click/call rate
  // Let's assume a modest 2.5% actual paying customer acquisition from local searches
  const estimatedNewCustomers = Math.max(5, Math.round(monthlySearches * 0.025));
  const estimatedMonthlyRevenue = estimatedNewCustomers * avgCustomerValue;
  const roiMultiple = Math.round(estimatedMonthlyRevenue / 5000);

  return (
    <section className="py-20 relative bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0c1222] to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Left Controls */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Interactive ROI Estimator</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Calculate What Google Maps Ranking Is Worth To You
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  Adjust the sliders to estimate your business's upside from ranking in the Bengaluru Top 3 Map Pack.
                </p>
              </div>

              {/* Slider 1: Monthly Local Searches */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-slate-300 font-semibold">Monthly Local Searches in Your Area:</span>
                  <span className="font-mono font-bold text-cyan-400 text-base">{monthlySearches.toLocaleString()} searches</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={monthlySearches}
                  onChange={(e) => setMonthlySearches(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>500 (Niche service)</span>
                  <span>5,000 (Popular clinic/salon)</span>
                  <span>10,000+ (High street cafe)</span>
                </div>
              </div>

              {/* Slider 2: Average Customer Value */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-slate-300 font-semibold">Average Customer Bill / Value:</span>
                  <span className="font-mono font-bold text-emerald-400 text-base">₹{avgCustomerValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="15000"
                  step="200"
                  value={avgCustomerValue}
                  onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>₹300 (Cafe / Quick Retail)</span>
                  <span>₹2,500 (Salon / Dental)</span>
                  <span>₹15,000+ (High-ticket Service)</span>
                </div>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 rounded-2xl bg-slate-950/80 border-2 border-emerald-500/40 text-center flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Estimated New Monthly Inquiries
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono mb-4">
                  ~{estimatedNewCustomers} <span className="text-base text-slate-400 font-normal">customers/mo</span>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mb-6">
                  <span className="text-xs text-emerald-300 uppercase font-bold tracking-wider block mb-1">
                    Potential Extra Monthly Revenue:
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
                    +₹{estimatedMonthlyRevenue.toLocaleString()}
                  </div>
                  <span className="text-xs text-slate-400 mt-1 block">
                    That is a <strong className="text-white">{roiMultiple}x return</strong> on your one-time ₹5,000 investment in Month 1 alone!
                  </span>
                </div>
              </div>

              <a
                href={siteConfig.getWhatsAppUrl(`Hi SMR Solutions! I used your ROI calculator for my business (estimated ${estimatedNewCustomers} clients/mo at ₹${avgCustomerValue} ticket size). I want to achieve this with your ₹5,000 package.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/25 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Discuss My ROI On WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
