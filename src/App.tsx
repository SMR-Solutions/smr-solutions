import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PwaDemoSection } from './components/PwaDemoSection';
import { Services } from './components/Services';
import { OfferMatrix } from './components/OfferMatrix';
import { BengaluruProof } from './components/BengaluruProof';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CompliancePage } from './components/CompliancePage';
import { TermsPage } from './components/TermsPage';
import { PrivacyPage } from './components/PrivacyPage';

type RouteType = 'home' | 'compliance' | 'terms' | 'privacy';

const getRoute = (path: string, hash: string): RouteType => {
  const p = path.toLowerCase().replace(/\/$/, '');
  const h = hash.toLowerCase();

  if (
    p === '/compliance' ||
    p === '/government-registration' ||
    p === '/certificate' ||
    p === '/msme' ||
    h === '#compliance' ||
    h === '#/compliance' ||
    h === '#government-registration' ||
    h === '#msme'
  ) {
    return 'compliance';
  }

  if (p === '/terms' || p === '/terms-of-service' || h === '#terms' || h === '#/terms') {
    return 'terms';
  }

  if (p === '/privacy' || p === '/privacy-policy' || h === '#privacy' || h === '#/privacy') {
    return 'privacy';
  }

  return 'home';
};

const MainApp: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isAppInstalled, setIsAppInstalled] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);
  const [currentHash, setCurrentHash] = useState<string>(() => window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    setCurrentHash('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentRoute = getRoute(currentPath, currentHash);

  useEffect(() => {
    if (currentRoute === 'compliance') {
      document.title = "Government Registration & Compliance | SMR Solutions";
    } else if (currentRoute === 'terms') {
      document.title = "Terms of Service | SMR Solutions";
    } else if (currentRoute === 'privacy') {
      document.title = "Privacy Policy | SMR Solutions";
    } else {
      document.title = "SMR Solutions | Google Maps Optimization & Modern Websites";
    }
  }, [currentRoute]);

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
      showToast('App installed successfully!');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleInstallApp = async () => {
    if (isAppInstalled) {
      showToast('Web App is already installed on your device!');
      return;
    }

    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult.outcome === 'accepted') {
          setIsAppInstalled(true);
          showToast('Installing SMR Solutions Web App...');
        }
        setDeferredPrompt(null);
      } catch (err) {
        console.error('Install prompt error:', err);
      }
    } else {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      if (isIOS) {
        showToast('To install on iPhone: Tap Share (⎋) and select "Add to Home Screen"');
      } else {
        showToast('To install: Tap browser menu (⋮) and select "Install App" or "Add to Home Screen"');
      }
    }
  };

  if (currentRoute === 'compliance') {
    return (
      <CompliancePage
        onBackToHome={() => navigateTo('/')}
        onNavigateTerms={() => navigateTo('/terms')}
        onNavigatePrivacy={() => navigateTo('/privacy')}
      />
    );
  }

  if (currentRoute === 'terms') {
    return (
      <TermsPage
        onBackToHome={() => navigateTo('/')}
        onNavigatePrivacy={() => navigateTo('/privacy')}
        onNavigateCompliance={() => navigateTo('/compliance')}
      />
    );
  }

  if (currentRoute === 'privacy') {
    return (
      <PrivacyPage
        onBackToHome={() => navigateTo('/')}
        onNavigateTerms={() => navigateTo('/terms')}
        onNavigateCompliance={() => navigateTo('/compliance')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#070A12] dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Toast Notification (subtle, non-intrusive) */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-emerald-500 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold shadow-2xl shadow-emerald-500/20 flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <span>📱</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation with Brand Logo & Light/Dark Switch */}
      <Navbar
        onInstallApp={handleInstallApp}
        isAppInstalled={isAppInstalled}
        onNavigateCompliance={() => navigateTo('/compliance')}
        onNavigateTerms={() => navigateTo('/terms')}
        onNavigatePrivacy={() => navigateTo('/privacy')}
      />

      {/* Main One-Page Web Services */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onInstallApp={handleInstallApp}
          isAppInstalled={isAppInstalled}
          onNavigateCompliance={() => navigateTo('/compliance')}
        />

        {/* 2. Services: The Complete Google Mapping, Modern Websites, PWAs */}
        <Services />

        {/* 3. Transparent Pricing: ₹5,000 Complete Google Mapping vs ₹9,999 Digital Combo */}
        <OfferMatrix />

        {/* 4. Local Proof & Areas: Kengeri, Rajarajeshwari Nagar & Beyond */}
        <BengaluruProof />

        {/* 5. Real Businesses Showcase & Live PWA Demo */}
        <PwaDemoSection
          onInstallApp={handleInstallApp}
          isAppInstalled={isAppInstalled}
        />

        {/* 6. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigateCompliance={() => navigateTo('/compliance')}
        onNavigateTerms={() => navigateTo('/terms')}
        onNavigatePrivacy={() => navigateTo('/privacy')}
      />

      {/* Sticky Floating WhatsApp Lead Widget */}
      <FloatingWhatsApp />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

export default App;
