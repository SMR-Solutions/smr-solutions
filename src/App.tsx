import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PwaDemoSection } from './components/PwaDemoSection';
import { Services } from './components/Services';
import { OfferMatrix } from './components/OfferMatrix';
import { BengaluruProof } from './components/BengaluruProof';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { InstallPromptModal } from './components/InstallPromptModal';

export const App: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isAppInstalled, setIsAppInstalled] = useState<boolean>(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check if app is launched in standalone mode
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsAppInstalled(true);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsAppInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallApp = async () => {
    if (!deferredPrompt) {
      setIsInstallModalOpen(true);
      return;
    }

    try {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setIsAppInstalled(true);
      }
      setDeferredPrompt(null);
    } catch (err) {
      console.error('Install prompt error:', err);
      setIsInstallModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 flex flex-col font-sans">
      {/* Navigation with Brand Logo */}
      <Navbar onOpenInstallModal={() => setIsInstallModalOpen(true)} />

      {/* Main One-Page Conversion Funnel */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenInstallModal={() => setIsInstallModalOpen(true)} />

        {/* 2. Interactive PWA Prompt & Live Demo Area */}
        <PwaDemoSection
          onOpenInstallModal={() => setIsInstallModalOpen(true)}
          deferredPrompt={deferredPrompt}
          onInstallApp={handleInstallApp}
          isAppInstalled={isAppInstalled}
        />

        {/* 3. Services: The Complete Google Mapping, Modern Websites, PWAs */}
        <Services />

        {/* 4. Transparent Pricing: ₹5,000 Complete Google Mapping vs ₹9,999 Digital Combo */}
        <OfferMatrix />

        {/* 5. Local Proof & Areas: Kengeri, Rajarajeshwari Nagar & Beyond */}
        <BengaluruProof />

        {/* 6. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Floating WhatsApp Lead Widget */}
      <FloatingWhatsApp />

      {/* PWA Step-by-Step Installation Modal */}
      <InstallPromptModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
        deferredPrompt={deferredPrompt}
        onInstallApp={handleInstallApp}
        isAppInstalled={isAppInstalled}
      />
    </div>
  );
};

export default App;
