import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = message.trim() || siteConfig.whatsappDefaultMsg;
    window.open(siteConfig.getWhatsAppUrl(finalMsg), '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      
      {/* Pop-up Quick Chat Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-2xl bg-[#0c1222] border-2 border-emerald-500/60 shadow-2xl p-4 text-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-sm">
                💬
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-900" />
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">SMR Solutions Bengaluru</div>
                <div className="text-[10px] text-emerald-400">Online • Replies in ~5 mins</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-slate-300 space-y-2">
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 leading-relaxed">
              👋 <strong>Namaskara!</strong> Want to put your Bengaluru business on Google Maps or get a modern website?
            </div>
            <div className="text-[11px] text-slate-400 pl-1">
              Type your question below or click to chat directly:
            </div>
          </div>

          <form onSubmit={handleSend} className="space-y-2">
            <input
              type="text"
              placeholder="e.g. Need ₹5,000 package for my clinic in HSR..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
            />
            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat</span>
            </button>
          </form>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        
        {/* Unread notification ping */}
        {!isOpen && (
          <div className="absolute -top-1.5 -left-1.5 px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black shadow-md uppercase tracking-wider flex items-center gap-1 animate-bounce">
            <span>Online</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transform hover:scale-105 active:scale-95 transition-all cursor-pointer animate-pulse-glow"
          aria-label="Open WhatsApp conversation"
        >
          {isOpen ? (
            <X className="w-6 h-6 stroke-[2.5]" />
          ) : (
            <MessageCircle className="w-7 h-7 fill-slate-950 stroke-none" />
          )}
        </button>
      </div>

    </div>
  );
};
