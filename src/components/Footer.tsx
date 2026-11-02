import React from 'react';
import { MessageCircle, MapPin, Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-24 md:pb-16 bg-[#04060c] border-t border-slate-800 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-base">📍</span>
              </div>
              <span className="font-extrabold text-lg text-white">
                SMR <span className="text-emerald-400 font-light">Solutions</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              We put Bengaluru businesses on the digital map. From Google Business Profile optimization to ultra-fast Progressive Web Apps (PWAs), we turn local searchers into loyal, paying customers.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Bengaluru, Karnataka, India • 560001</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Growth Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Google Maps 3-Pack SEO
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Modern 100-Speed Websites
                </a>
              </li>
              <li>
                <a href="#pwa-demo" className="hover:text-purple-400 transition-colors">
                  Custom Progressive Web Apps (PWAs)
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-emerald-400 font-semibold hover:underline">
                  ₹5,000 Starter Package
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={siteConfig.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-400 font-semibold">
                  ⚡ 48-Hour Rapid Delivery Guarantee
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} SMR Solutions. All rights reserved. Built for Bengaluru Businesses.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Engineered with high performance React & PWA technology</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
