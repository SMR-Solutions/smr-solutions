import React from 'react';
import { MessageCircle, MapPin, Mail, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onNavigateCompliance?: () => void;
  onNavigateTerms?: () => void;
  onNavigatePrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateCompliance,
  onNavigateTerms,
  onNavigatePrivacy
}) => {
  return (
    <footer className="pt-12 sm:pt-16 pb-24 md:pb-16 bg-slate-100 dark:bg-[#04060c] border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs sm:text-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          
          {/* Brand Info */}
          <div className="sm:col-span-2 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-emerald-500 to-cyan-500 shadow-md shrink-0">
                <img
                  src="/logo.png"
                  alt="SMR Solutions Logo"
                  className="w-full h-full object-contain rounded-full bg-white"
                />
              </div>
              <span className="font-extrabold text-lg text-slate-900 dark:text-white">
                SMR <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">Solutions</span>
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              We put your business on the digital map. From Google Business Profile optimization to high-speed Progressive Web Apps (PWAs), we turn local searchers into loyal, paying customers.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Serving Kengeri, Rajarajeshwari Nagar & Bengaluru, Karnataka</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 sm:mb-4">
              Growth Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  The Complete Google Mapping
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Modern Ultra-Fast Websites
                </a>
              </li>
              <li>
                <a href="#pwa-demo" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Custom Progressive Web Apps (PWAs)
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                  ₹5,000 Starter Offer
                </a>
              </li>
              <li className="pt-1.5 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="/compliance"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateCompliance?.();
                  }}
                  className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold hover:underline"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Govt. MSME Certificate</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 sm:mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs">
              <li>
                <a
                  href={siteConfig.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span className="truncate">WhatsApp: {siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span className="truncate">{siteConfig.email}</span>
                </a>
              </li>
              <li className="pt-1">
                <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">
                  ⚡ 3-5 Days Quality Launch Guarantee
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
            <span>© {new Date().getFullYear()} SMR Solutions (Online). All rights reserved.</span>
            <span>•</span>
            <button
              onClick={onNavigateTerms}
              className="hover:underline hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={onNavigatePrivacy}
              className="hover:underline hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onNavigateCompliance}
              className="text-emerald-700 dark:text-emerald-400 hover:underline font-semibold cursor-pointer"
            >
              Govt. MSME Compliance
            </button>
          </div>
          <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <span>Serving Kengeri • Rajarajeshwari Nagar • Bengaluru</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
