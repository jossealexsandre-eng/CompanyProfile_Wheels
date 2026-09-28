import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { RoasteryVisualizer } from './components/RoasteryVisualizer';
import { MenuCatalog } from './components/MenuCatalog';
import { CuratedFavorites } from './components/CuratedFavorites';
import { ArchitecturalSpace } from './components/ArchitecturalSpace';
import { ShopBeansBanner } from './components/ShopBeansBanner';
import { GalleryModal } from './components/GalleryModal';
import { ReviewsMarquee } from './components/ReviewsMarquee';
import { LocationSection } from './components/LocationSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';

import { FloatingQuickAction } from './components/FloatingQuickAction';
import { ToastProvider } from './components/ToastProvider';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CustomCursor } from './components/CustomCursor';
import { SocialFeed } from './components/SocialFeed';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Bilingual state with localStorage persistence
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('wheels_lang');
      if (stored === 'en' || stored === 'id') return stored;
    }
    return 'id'; // Default Indonesian for local Bandung audience
  });

  // Theme state with localStorage persistence
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('wheels_theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Preloader state
  const [showPreloader, setShowPreloader] = useState<boolean>(true);

  // Active section for navbar scrollspy
  const [activeSection, setActiveSection] = useState<string>('home');

  // Mobile menu drawer
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Lightbox Image
  const [activeLightboxImg, setActiveLightboxImg] = useState<string | null>(null);

  // Sync theme changes to <html> class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('wheels_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('wheels_theme', 'light');
    }
  }, [isDark]);

  // Sync language changes
  useEffect(() => {
    localStorage.setItem('wheels_lang', lang);
  }, [lang]);

  // Auto-dismiss preloader smoothly
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Scrollspy observer
  useEffect(() => {
    const sections = [
      'home',
      'philosophy',
      'roaster',

      'menu-catalog',
      'space',
      'gallery',
      'reviews',
      'visit',
      'reservation-anchor',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 240;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ToastProvider>
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#faf6f0] dark:bg-[#0d0b09] text-[#1e1b18] dark:text-[#f7f2ea] selection:bg-[#f7d7be] selection:text-[#4a280e] transition-colors duration-400 font-sans">
      {/* Global UX enhancements */}
      <ScrollProgressBar />
      <CustomCursor />
      {/* Sleek Preloader Screen */}
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            onClick={() => setShowPreloader(false)}
            className="fixed inset-0 z-50 bg-[#faf6f0] dark:bg-[#0d0b09] flex flex-col items-center justify-center cursor-pointer select-none"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center px-6"
            >
              <span className="block font-serif text-3xl md:text-5xl tracking-[0.26em] text-[#2c1a0e] dark:text-[#f7f2ea] uppercase">
                WHEELS
              </span>
              <span className="block text-xs font-bold tracking-[0.4em] text-[#8c8074] dark:text-[#c4b8aa] uppercase mt-2">
                COFFEE ROASTERS
              </span>
              <div className="w-12 h-[1.5px] bg-[#8c5e39] dark:bg-[#e6b17e] mx-auto my-4"></div>
              <span className="block text-[11px] font-bold tracking-[0.24em] text-[#8c5e39] dark:text-[#e6b17e] uppercase">
                EYCKMAN 32 • BANDUNG
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Atmospheric Sticky Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        setIsDark={setIsDark}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Experience Stream */}
      <main className="w-full max-w-full overflow-x-hidden">
        {/* 00 — Hero Section */}
        <Hero lang={lang} />

        {/* 01 — Philosophy & Sourcing */}
        <Philosophy lang={lang} />

        {/* 02 — Cast Iron Roastery Visualizer */}
        <RoasteryVisualizer lang={lang} />



        {/* 03 — Menu Catalog & Direct Delivery */}
        <MenuCatalog
          lang={lang}
          onOpenLightbox={(src) => setActiveLightboxImg(src)}
        />

        {/* Curated Signatures Showcase */}
        <CuratedFavorites
          lang={lang}
          onOpenLightbox={(src) => setActiveLightboxImg(src)}
        />

        {/* 04 — The Space & Japandi Architecture */}
        <ArchitecturalSpace
          lang={lang}
          onOpenLightbox={(src) => setActiveLightboxImg(src)}
        />

        {/* E-Commerce Shop Beans Banner */}
        <ShopBeansBanner lang={lang} />

        {/* Visual Impressions / Moments Gallery */}
        <GalleryModal
          lang={lang}
          activeLightboxImg={activeLightboxImg}
          setActiveLightboxImg={setActiveLightboxImg}
        />

        {/* Verified Community Reviews Marquee */}
        <ReviewsMarquee lang={lang} />

        {/* Instagram Social Feed */}
        <SocialFeed lang={lang} />

        {/* 05 — Location with Real Interactive Google Maps */}
        <LocationSection lang={lang} />

        {/* Table Booking & WhatsApp Dispatch Generator */}
        <ReservationSection lang={lang} />
      </main>

      {/* Editorial Footer */}
      <Footer lang={lang} />

      {/* Floating Concierge & Back-to-Top Actions */}
      <FloatingQuickAction lang={lang} />
    </div>
    </ToastProvider>
  );
}
