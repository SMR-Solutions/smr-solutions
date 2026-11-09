import React, { useState, useEffect } from 'react';
import { Smartphone, Download, Check, ExternalLink, Star, MapPin, MessageCircle, ArrowRight, Eye, X, Layers, Image as ImageIcon, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import type { ProjectImage } from '../config/siteConfig';

interface PwaDemoSectionProps {
  onInstallApp: () => void;
  isAppInstalled: boolean;
}

export const PwaDemoSection: React.FC<PwaDemoSectionProps> = ({
  onInstallApp,
  isAppInstalled
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('nani-pg');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<ProjectImage | null>(null);

  // Zoom & Pan States for the modal
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [lastTouchDistance, setLastTouchDistance] = useState<number | null>(null);

  const currentProject = siteConfig.portfolio.find((p) => p.id === selectedProjectId) || siteConfig.portfolio[0];
  const activeImage = currentProject.images[selectedImageIndex] || currentProject.images[0];

  // Open Lightbox with history push state (prevents mobile back button from exiting website)
  const openLightbox = (img: ProjectImage) => {
    setLightboxImage(img);
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
    setIsDragging(false);

    // Push state to browser history so mobile hardware/gesture back button closes modal
    window.history.pushState({ modal: 'photo-lightbox' }, '', window.location.pathname + '#view-photo');
  };

  // Close Lightbox safely
  const closeLightbox = (popHistory = true) => {
    setLightboxImage(null);
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
    setIsDragging(false);

    if (popHistory && window.location.hash === '#view-photo') {
      window.history.back();
    }
  };

  // Zoom Controls
  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(Number((prev + 0.5).toFixed(1)), 4));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => {
      const next = Math.max(Number((prev - 0.5).toFixed(1)), 1);
      if (next === 1) {
        setPanOffset({ x: 0, y: 0 });
      }
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Mouse drag & Wheel zoom
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomScale > 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomScale > 1) {
      e.preventDefault();
      setPanOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  // Touch Drag & Pinch-to-zoom
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && zoomScale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - panOffset.x,
        y: e.touches[0].clientY - panOffset.y
      });
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setLastTouchDistance(dist);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && isDragging && zoomScale > 1) {
      setPanOffset({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    } else if (e.touches.length === 2 && lastTouchDistance !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const delta = dist - lastTouchDistance;
      if (Math.abs(delta) > 4) {
        if (delta > 0) {
          setZoomScale((prev) => Math.min(Number((prev + 0.05).toFixed(2)), 4));
        } else {
          setZoomScale((prev) => {
            const next = Math.max(Number((prev - 0.05).toFixed(2)), 1);
            if (next === 1) setPanOffset({ x: 0, y: 0 });
            return next;
          });
        }
        setLastTouchDistance(dist);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setLastTouchDistance(null);
  };

  const handleDoubleClick = () => {
    if (zoomScale > 1) {
      handleResetZoom();
    } else {
      setZoomScale(2);
    }
  };

  // Keyboard navigation & mobile popstate listener
  useEffect(() => {
    if (!lightboxImage) return;

    // Handle mobile back button
    const handlePopState = () => {
      // The user pressed the hardware/gesture back button on mobile!
      // Close modal directly without calling history.back()
      closeLightbox(false);
    };

    // Handle keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox(true);
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-' || e.key === '_') {
        handleZoomOut();
      } else if (e.key === '0') {
        handleResetZoom();
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxImage]);

  // Flatten all images into a master chronological list
  const allPortfolioImages: { project: typeof currentProject; image: ProjectImage }[] = [];
  siteConfig.portfolio.forEach((proj) => {
    proj.images.forEach((img) => {
      allPortfolioImages.push({ project: proj, image: img });
    });
  });

  const handleSelectProject = (projId: string, imgIdx = 0) => {
    setSelectedProjectId(projId);
    setSelectedImageIndex(imgIdx);
  };

  return (
    <section id="pwa-demo" className="py-16 sm:py-20 md:py-28 relative overflow-hidden bg-slate-100/50 dark:bg-slate-950/60 border-y border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Prominent PWA Banner with "Install Web App" button */}
        <div className="mb-10 sm:mb-14 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-emerald-100/80 via-white to-cyan-100/80 dark:from-emerald-950/70 dark:via-slate-900 dark:to-cyan-950/70 border-2 border-emerald-500/40 shadow-xl shadow-emerald-500/10 dark:shadow-2xl dark:shadow-emerald-950/50 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-36 sm:w-44 h-36 sm:h-44 bg-emerald-500/10 rounded-full blur-2xl" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6 relative z-10">
            <div className="flex items-start gap-3.5 sm:gap-4 text-left">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 shadow-lg">
                <Smartphone className="w-5 h-5 sm:w-7 sm:h-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/40">
                    Live PWA Technology
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">• Standalone Mobile Experience</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-slate-950 dark:text-white tracking-tight mb-1.5 sm:mb-2">
                  "Experience our tech. Install this web app to see how we build custom business apps."
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                  Turn your website into an installable smartphone app with zero 30% App Store fees, instant sub-second opening speeds, and offline caching.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full lg:w-auto">
              <button
                onClick={onInstallApp}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-4 rounded-xl font-black text-xs sm:text-base bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                {isAppInstalled ? (
                  <>
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 stroke-[3]" />
                    <span>App Installed ✓</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Install Web App</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Section Header: Real Work Portfolio */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Real Proven Client Work</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2.5 sm:mb-4">
            Real Businesses We Put On The Digital Map
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base md:text-lg px-2">
            Explore the exact Google Maps rankings, fast websites, and custom student PWAs delivered by SMR Solutions.
          </p>

          {/* Project Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-6 sm:mt-8">
            {siteConfig.portfolio.map((proj) => {
              const isSelected = selectedProjectId === proj.id;
              return (
                <button
                  key={proj.id}
                  onClick={() => handleSelectProject(proj.id, 0)}
                  className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-emerald-500 shadow-md shadow-emerald-500/10 dark:shadow-emerald-950/60 scale-[1.02] text-slate-950 dark:text-white'
                      : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/60 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold truncate">
                      {proj.name}
                    </span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full border ${
                      isSelected ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-500/40' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                    }`}>
                      {proj.images.length} {proj.images.length === 1 ? 'screen' : 'screens'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Phone Showcase & Multi-Screen Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center max-w-6xl mx-auto mb-16">
          
          {/* Left: The Smartphone Simulator with Active Screenshot */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* View Switcher Tabs inside Mockup */}
            <div className="w-full max-w-[320px] sm:max-w-[340px] mb-2.5 flex flex-wrap gap-1.5 p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              {currentProject.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`flex-1 min-w-[100px] py-1.5 px-2 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all truncate text-center cursor-pointer ${
                    selectedImageIndex === idx
                      ? 'bg-emerald-500 text-slate-950 shadow'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80'
                  }`}
                  title={img.label}
                >
                  {img.label}
                </button>
              ))}
            </div>

            {/* Phone Frame */}
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] bg-slate-950 rounded-[38px] sm:rounded-[44px] p-2.5 sm:p-3 shadow-2xl border-4 border-slate-700 shadow-cyan-950/40">
              
              {/* Phone Camera Notch & Speaker */}
              <div className="absolute top-3.5 sm:top-4 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-4 sm:h-5 bg-slate-900 rounded-full flex items-center justify-center gap-2 z-30 pointer-events-none">
                <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-slate-800" />
                <div className="w-6 sm:w-8 h-1 rounded-full bg-slate-800" />
              </div>

              {/* Phone Screen Container */}
              <div className="relative w-full h-[490px] sm:h-[580px] bg-[#0c101c] rounded-[30px] sm:rounded-[36px] overflow-hidden flex flex-col border border-slate-800 group">
                
                {/* Phone Status Bar */}
                <div className="pt-2.5 px-4 sm:px-6 pb-2 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-slate-400 bg-slate-950/90 border-b border-slate-800/40 z-20">
                  <span className="font-mono">9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400 text-[9px] sm:text-[10px] font-bold">5G</span>
                    <span className="text-[9px] sm:text-[10px] bg-slate-800 px-1.5 py-0.2 rounded text-slate-200">100%</span>
                  </div>
                </div>

                {/* Active Image Display */}
                <div className="flex-1 overflow-y-auto relative bg-slate-900/60 cursor-pointer" onClick={() => openLightbox(activeImage)}>
                  <img
                    src={activeImage.src}
                    alt={activeImage.label}
                    className="w-full h-auto object-cover rounded-b-xl shadow"
                  />
                  
                  {/* Click to zoom overlay pill */}
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-700 text-cyan-300 text-[9px] font-bold flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3 h-3" />
                    <span>Zoom</span>
                  </div>

                  {/* Caption banner over simulator */}
                  <div className="p-2 sm:p-2.5 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent sticky bottom-0 left-0 right-0">
                    <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-[10px] sm:text-[11px] text-slate-300 leading-snug">
                      <strong className="text-white block font-bold mb-0.5">{activeImage.label}</strong>
                      <span className="text-slate-400 text-[10px]">{activeImage.caption}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Thumbnail selector strip */}
            <div className="flex items-center gap-2 mt-3">
              {currentProject.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-12 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImageIndex === idx ? 'border-emerald-500 scale-105 shadow-md' : 'border-slate-300 dark:border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                  title={img.label}
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

          </div>

          {/* Right: Detailed Real Project Story & Results */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/30">
                  {currentProject.category}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-300 dark:border-amber-500/30 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-500 dark:fill-amber-300 text-amber-500 dark:text-amber-300" />
                  {currentProject.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 mb-1">
                {currentProject.name}
              </h3>

              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3 sm:mb-4">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{currentProject.location}</span>
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            {/* Current Active Screen Description Box */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  Currently Viewing: <span className="text-emerald-600 dark:text-emerald-400">{activeImage.label}</span>
                </span>
                <button
                  onClick={() => openLightbox(activeImage)}
                  className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3 h-3" />
                  <span>Full Screen</span>
                </button>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeImage.caption}
              </p>
            </div>

            {/* Key Deliverables Achieved */}
            <div className="space-y-2 sm:space-y-3">
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                What SMR Solutions Built & Delivered:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {currentProject.highlights.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-2 shadow-sm"
                  >
                    <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs text-slate-750 text-slate-700 dark:text-slate-200 font-medium leading-tight">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
              <a
                href={siteConfig.getWhatsAppUrl(currentProject.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 sm:px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Get a Setup Like {currentProject.name}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {currentProject.liveUrl && (
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Live URL</span>
                </a>
              )}
            </div>

          </div>

        </div>

        {/* Master Gallery Grid: All Works in Strict Numerical Order */}
        <div className="pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-500/30">
              Complete Visual Proof Gallery
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-2">
              Every Delivered Screen In Order
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto mt-1">
              Click any image below to zoom in or view its full case study.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {allPortfolioImages.map(({ project, image }, idx) => {
              const isCurrentlyActive = selectedProjectId === project.id && activeImage.id === image.id;
              return (
                <div
                  key={`${project.id}-${image.id}-${idx}`}
                  onClick={() => {
                    const imgIndex = project.images.findIndex((i) => i.id === image.id);
                    handleSelectProject(project.id, imgIndex >= 0 ? imgIndex : 0);
                  }}
                  className={`group rounded-2xl overflow-hidden border p-2 cursor-pointer transition-all hover:-translate-y-1 ${
                    isCurrentlyActive
                      ? 'bg-white dark:bg-slate-900 border-emerald-500 shadow-md shadow-emerald-500/20 ring-2 ring-emerald-500/40'
                      : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
                  }`}
                >
                  <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-slate-950 mb-2">
                    <img
                      src={image.src}
                      alt={image.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                      <span className="text-[10px] font-bold text-white leading-tight">
                        {image.label}
                      </span>
                    </div>
                  </div>
                  <div className="text-[10px] font-semibold text-slate-600 dark:text-slate-400 truncate">
                    {project.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* High-Resolution Interactive Lightbox Modal with Zoom & Mobile-Back Support */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => closeLightbox(true)}
        >
          {/* Top Control Bar: Floating Zoom Pill + Vibrant Red Close Button */}
          <div 
            className="absolute top-3 sm:top-5 left-3 sm:left-6 right-3 sm:right-6 flex items-center justify-between gap-2 z-30 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Zoom In/Out Floating Pill */}
            <div className="flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700 shadow-2xl">
              <button
                onClick={handleZoomOut}
                disabled={zoomScale <= 1}
                className="p-1.5 sm:p-2 rounded-xl hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-slate-200 hover:text-white cursor-pointer active:scale-95"
                title="Zoom Out (-)"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={handleResetZoom}
                className="px-2.5 py-1 rounded-xl text-[11px] sm:text-xs font-mono font-bold bg-slate-800 hover:bg-slate-700 text-cyan-300 transition-colors cursor-pointer"
                title="Click to reset zoom (100%)"
              >
                {Math.round(zoomScale * 100)}%
              </button>

              <button
                onClick={handleZoomIn}
                disabled={zoomScale >= 4}
                className="p-1.5 sm:p-2 rounded-xl hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-slate-200 hover:text-white cursor-pointer active:scale-95"
                title="Zoom In (+)"
                aria-label="Zoom In"
              >
                <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {zoomScale > 1 && (
                <button
                  onClick={handleResetZoom}
                  className="p-1.5 sm:p-2 rounded-xl hover:bg-slate-800 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer active:scale-95"
                  title="Reset to 100%"
                  aria-label="Reset Zoom"
                >
                  <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              )}
            </div>

            {/* Prominent Red Close Cross Button */}
            <button
              onClick={() => closeLightbox(true)}
              className="p-2 sm:p-2.5 rounded-full bg-red-600 hover:bg-red-500 active:scale-95 text-white shadow-xl shadow-red-950/60 border-2 border-red-400/80 cursor-pointer transition-all flex items-center justify-center group"
              aria-label="Close Preview"
              title="Close Preview (Esc or Back)"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] text-white group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>

          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center pt-12 sm:pt-14 pb-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Viewport Frame with Zoom & Pan */}
            <div 
              className="relative w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl flex items-center justify-center select-none"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onDoubleClick={handleDoubleClick}
            >
              {/* Interaction Hints */}
              {zoomScale === 1 ? (
                <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-700 text-slate-400 text-[10px] pointer-events-none z-10 flex items-center gap-1.5 opacity-80 sm:opacity-100">
                  <span>🔍 Double-click or pinch to zoom</span>
                </div>
              ) : (
                <div className="absolute top-2 left-2 px-2.5 py-1 rounded-md bg-slate-900/90 border border-emerald-500/50 text-emerald-300 text-[10px] pointer-events-none z-10 flex items-center gap-1.5 animate-pulse">
                  <span>✋ Drag to pan around</span>
                </div>
              )}

              {/* Scalable Image Canvas */}
              <div className="w-full h-[60vh] sm:h-[72vh] flex items-center justify-center overflow-hidden p-1 sm:p-2">
                <div
                  style={{
                    transform: `scale(${zoomScale}) translate(${panOffset.x / zoomScale}px, ${panOffset.y / zoomScale}px)`,
                    transition: isDragging ? 'none' : 'transform 0.15s ease-out',
                    cursor: zoomScale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
                  }}
                  className="w-full h-full flex items-center justify-center origin-center"
                >
                  <img
                    src={lightboxImage.src}
                    alt={lightboxImage.label}
                    draggable={false}
                    className="max-w-full max-h-full object-contain pointer-events-none select-none rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Caption & Info */}
            <div className="mt-2.5 text-center px-4 w-full">
              <div className="text-sm sm:text-base font-bold text-white">{lightboxImage.label}</div>
              <div className="text-xs text-slate-300 max-w-xl mx-auto mt-0.5">{lightboxImage.caption}</div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
