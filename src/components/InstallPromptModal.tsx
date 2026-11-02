import React from 'react';
import { X, Share, PlusSquare, Download, CheckCircle } from 'lucide-react';

interface InstallPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  deferredPrompt: any;
  onInstallApp: () => void;
  isAppInstalled: boolean;
}

export const InstallPromptModal: React.FC<InstallPromptModalProps> = ({
  isOpen,
  onClose,
  deferredPrompt,
  onInstallApp,
  isAppInstalled
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0a0f1d] border-2 border-emerald-500/50 shadow-2xl p-6 sm:p-8 text-left text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-xl font-bold">
            📱
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Progressive Web App (PWA)
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Install SMR Solutions App
            </h3>
          </div>
        </div>

        {/* Native Install Trigger if Browser Supported */}
        {deferredPrompt && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center">
            <p className="text-sm text-emerald-300 font-semibold mb-3">
              Your browser supports 1-click installation!
            </p>
            <button
              onClick={() => {
                onInstallApp();
                onClose();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/30 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Tap Here to Install App Now</span>
            </button>
          </div>
        )}

        {isAppInstalled && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center">
            <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-sm mb-1">
              <CheckCircle className="w-5 h-5" />
              <span>This Web App Is Already Installed!</span>
            </div>
            <p className="text-xs text-slate-300">
              You can find the SMR Solutions icon directly on your phone or desktop home screen.
            </p>
          </div>
        )}

        {/* Step-by-Step Guidance */}
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            How to Add to Home Screen Manually:
          </div>

          {/* iOS Safari Guide */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <span>🍎 Apple iOS (iPhone / iPad Safari):</span>
            </div>
            <div className="text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-200 flex items-center justify-center text-[10px] font-bold shrink-0">1</span>
                <span>Tap the <strong className="text-white">Share</strong> icon <Share className="w-3.5 h-3.5 inline mx-1 text-cyan-400" /> at the bottom menu of Safari.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-200 flex items-center justify-center text-[10px] font-bold shrink-0">2</span>
                <span>Scroll down and select <strong className="text-white">"Add to Home Screen"</strong> <PlusSquare className="w-3.5 h-3.5 inline mx-1 text-emerald-400" />.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-200 flex items-center justify-center text-[10px] font-bold shrink-0">3</span>
                <span>Tap <strong className="text-emerald-400">"Add"</strong> in the top-right corner. Done!</span>
              </div>
            </div>
          </div>

          {/* Android Chrome Guide */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-white">
              <span>🤖 Android (Google Chrome):</span>
            </div>
            <div className="text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-200 flex items-center justify-center text-[10px] font-bold shrink-0">1</span>
                <span>Tap the <strong className="text-white">three vertical dots (⋮)</strong> in Chrome's top right.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-200 flex items-center justify-center text-[10px] font-bold shrink-0">2</span>
                <span>Select <strong className="text-white">"Install app"</strong> or <strong className="text-white">"Add to Home screen"</strong>.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Value reminder */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>We build this exact app feature for your business!</span>
          <button
            onClick={onClose}
            className="text-emerald-400 hover:text-emerald-300 font-bold"
          >
            Got it, close
          </button>
        </div>

      </div>

    </div>
  );
};
