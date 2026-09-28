import React, { useState, useRef } from 'react';
import { Sun, Moon, Menu as MenuIcon, X, Globe, Calendar, ArrowRight, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { Language } from '../types';
import { motion, AnimatePresence } from 'motion/react';

import { useToast } from './ToastProvider';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  isDark,
  setIsDark,
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const toast = useToast();

  const toggleSound = () => {
    if (!audioRef.current) {
      // Free royalty-free ambient cafe audio
      audioRef.current = new Audio('https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.25;
    }

    if (soundOn) {
      audioRef.current.pause();
      setSoundOn(false);
      toast.info(
        lang === 'id' ? 'Suara Ambient Dimatikan' : 'Ambient Sound Muted',
        lang === 'id' ? 'Suara suasana kedai kopi dinonaktifkan.' : 'Cafe ambience has been muted.'
      );
    } else {
      audioRef.current
        .play()
        .then(() => {
          setSoundOn(true);
          toast.coffee(
            lang === 'id' ? 'Suara Ambient Aktif ☕' : 'Ambient Sound On ☕',
            lang === 'id' ? 'Menikmati atmosfer hangat Wheels Coffee Roasters.' : 'Enjoying the warm Wheels Roasters atmosphere.'
          );
        })
        .catch(() => {
          // If browser policy blocks autoplay or format unsupported
          setSoundOn(true);
          toast.coffee(
            lang === 'id' ? 'Mode Atmosfer Aktif' : 'Atmosphere Mode Active',
            lang === 'id' ? 'Klik sekali lagi untuk memutar audio di browser.' : 'Click once more to start audio playback.'
          );
        });
    }
  };

  const navItems = [
    { id: 'home', label: lang === 'id' ? 'BERANDA' : 'HOME' },
    { id: 'philosophy', label: lang === 'id' ? 'FILOSOFI' : 'STORY' },
    { id: 'roaster', label: 'ROASTERY' },

    { id: 'menu-catalog', label: 'MENU' },
    { id: 'space', label: lang === 'id' ? 'RUANG' : 'THE SPACE' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'reviews', label: 'REVIEWS' },
    { id: 'visit', label: lang === 'id' ? 'LOKASI' : 'VISIT' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#faf6f0]/85 dark:bg-[#0c0907]/90 backdrop-blur-2xl border-b border-[#8c5e39]/15 dark:border-[#e6b17e]/20 shadow-[0_4px_25px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_35px_rgba(0,0,0,0.5)] transition-colors duration-400">
      <div className="h-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between gap-2 sm:gap-4">
        {/* ── Brand Identity Logo ── */}
        <a 
          href="#home" 
          className="flex flex-col group cursor-pointer shrink-0"
        >
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl md:text-[26px] tracking-[0.2em] text-[#2c1a0e] dark:text-[#f7f2ea] uppercase font-normal leading-none group-hover:text-[#8c5e39] dark:group-hover:text-[#e6b17e] transition-colors">
              WHEELS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8c5e39] dark:bg-[#e6b17e] group-hover:scale-125 transition-transform" />
            <span className="hidden sm:inline-block text-[10px] tracking-[0.32em] text-[#8c8074] dark:text-[#c4b8aa] uppercase font-bold">
              ROASTERS
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] tracking-[0.28em] text-[#8c8074] dark:text-[#c4b8aa] uppercase mt-1 font-medium">
            EYCKMAN 32 • BANDUNG
          </span>
        </a>

        {/* ── Desktop Navigation Links ── */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 text-xs font-semibold tracking-[0.14em] uppercase">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative py-1.5 px-1 transition-all duration-300 ${
                  isActive
                    ? 'text-[#2c1a0e] dark:text-[#e6b17e] font-bold'
                    : 'text-[#8c8074] dark:text-[#c4b8aa] hover:text-[#2c1a0e] dark:hover:text-[#ffffff]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8c5e39] to-[#e6b17e] rounded-full shadow-[0_0_8px_#e6b17e]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* ── Action Controls: Language, Dark Mode, Reservation CTA, Hamburger ── */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher Pill */}
          <button
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-full border border-[#d5c8b8] dark:border-[#e6b17e]/30 bg-[#ffffff]/60 dark:bg-[#1a120c]/80 text-[#2c1a0e] dark:text-[#f7f2ea] hover:border-[#8c5e39] dark:hover:border-[#e6b17e] hover:scale-105 active:scale-95 transition-all shadow-sm"
            title={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            aria-label={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
          >
            <Globe className="w-3.5 h-3.5 text-[#8c5e39] dark:text-[#e6b17e]" />
            <span className="font-mono">{lang.toUpperCase()}</span>
          </button>

          {/* Dark / Light Mode Switcher — Fully Wired */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={isDark ? 'Mode Terang' : 'Mode Gelap'}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-[#d5c8b8] dark:border-[#e6b17e]/40 bg-[#ffffff]/60 dark:bg-[#1a120c]/80 text-[#5c534a] dark:text-[#e6b17e] shadow-sm hover:border-[#8c5e39] dark:hover:border-[#e6b17e] hover:scale-105 active:scale-95 transition-all"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 rotate-0 transition-transform duration-300 drop-shadow-[0_0_6px_#fbbf24]" />
            ) : (
              <Moon className="w-4 h-4 text-[#8c5e39] rotate-0 transition-transform duration-300" />
            )}
          </button>

          {/* Sound Ambient Toggle */}
          <button
            onClick={toggleSound}
            aria-label={soundOn ? 'Matikan Suara' : 'Nyalakan Suara Ambient'}
            title={soundOn ? 'Matikan suara ambient' : 'Nyalakan suara cafe ambien'}
            className={`hidden sm:flex w-9 h-9 sm:w-10 sm:h-10 items-center justify-center rounded-full border transition-all shadow-sm hover:scale-105 active:scale-95 ${
              soundOn
                ? 'border-[#e6b17e] bg-[#e6b17e]/15 dark:bg-[#e6b17e]/10 text-[#e6b17e]'
                : 'border-[#d5c8b8] dark:border-[#e6b17e]/40 bg-[#ffffff]/60 dark:bg-[#1a120c]/80 text-[#5c534a] dark:text-[#e6b17e] hover:border-[#8c5e39] dark:hover:border-[#e6b17e]'
            }`}
          >
            {soundOn ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Reserve CTA Button (Desktop & Tablet) */}
          <a
            href="#reservation-anchor"
            className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#2c1a0e] to-[#422d1d] dark:from-[#e6b17e] dark:to-[#f5deca] text-[#ffffff] dark:text-[#18110b] text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] hover:shadow-[0_4px_20px_rgba(230,177,126,0.35)] hover:scale-105 active:scale-95 transition-all shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'RESERVASI' : 'RESERVE'}</span>
          </a>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-[#d5c8b8] dark:border-[#e6b17e]/30 bg-[#ffffff]/60 dark:bg-[#1a120c]/80 text-[#2c1a0e] dark:text-[#f7f2ea] hover:scale-105 active:scale-95 transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#e6b17e]" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer Navigation ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="xl:hidden overflow-hidden bg-[#faf6f0]/98 dark:bg-[#120e0b]/98 backdrop-blur-2xl border-b border-[#8c5e39]/20 dark:border-[#e6b17e]/20 px-5 sm:px-8 py-6 space-y-4 shadow-2xl"
          >
            {/* Nav list */}
            <div className="space-y-1">
              {navItems.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-bold tracking-[0.16em] uppercase transition-colors ${
                      isActive
                        ? 'bg-[#8c5e39]/15 dark:bg-[#e6b17e]/15 text-[#8c5e39] dark:text-[#e6b17e]'
                        : 'text-[#2c1a0e] dark:text-[#f7f2ea] hover:bg-[#8c5e39]/10 dark:hover:bg-[#ffffff]/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                  </a>
                );
              })}
            </div>

            {/* Quick Action Drawer Footer */}
            <div className="pt-4 border-t border-[#8c5e39]/15 dark:border-[#ffffff]/10 space-y-3">
              <a
                href="#reservation-anchor"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-[#2c1a0e] to-[#422d1d] dark:from-[#e6b17e] dark:to-[#f5deca] text-[#ffffff] dark:text-[#18110b] text-xs font-bold uppercase tracking-[0.16em] shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'id' ? 'RESERVASI MEJA SEKARANG' : 'RESERVE TABLE NOW'}</span>
              </a>

              <div className="flex items-center justify-between text-[11px] text-[#8c8074] dark:text-[#c4b8aa] pt-1">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#e6b17e]" />
                  <span>Eyckman 32, Bandung</span>
                </span>
                <span className="font-mono">07:00 — 22:30 WIB</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
