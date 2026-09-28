import React, { useState, useEffect } from 'react';
import { ArrowUp, Calendar, X, Sparkles, Coffee, CalendarCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingQuickActionProps {
  lang: Language;
}

export const FloatingQuickAction: React.FC<FloatingQuickActionProps> = ({ lang }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Monitor scroll position to show Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Pre-configured WhatsApp messages
  const createWaUrl = (message: string) => {
    const phone = '6281222081402'; // Wheels Coffee Eyckman Hotline
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const handleScrollToReserve = () => {
    setMenuOpen(false);
    const el = document.getElementById('reservation-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const reserveOptions = [
    {
      type: 'anchor',
      icon: CalendarCheck,
      title: lang === 'id' ? 'Formulir Reservasi Online' : 'Online Booking Form',
      desc: lang === 'id' ? 'Isi nama, jumlah tamu & pilih area duduk' : 'Book table, party size & select seating',
      action: handleScrollToReserve,
    },
    {
      type: 'whatsapp',
      icon: Calendar,
      title: lang === 'id' ? 'Reservasi Cepat via WhatsApp' : 'Quick WhatsApp Booking',
      desc: lang === 'id' ? 'Konfirmasi meja langsung dengan tim host' : 'Direct confirmation with our host team',
      msg:
        lang === 'id'
          ? 'Halo Wheels Coffee Roasters, saya ingin reservasi meja untuk hari ini.'
          : 'Hello Wheels Coffee Roasters, I would like to reserve a table for today.',
    },
    {
      type: 'whatsapp',
      icon: Sparkles,
      title: lang === 'id' ? 'Cek Ketersediaan Meja Saat Ini' : 'Check Live Table Availability',
      desc: lang === 'id' ? 'Tanya meja kosong sebelum Anda berangkat' : 'Check open tables before you arrive',
      msg:
        lang === 'id'
          ? 'Halo Wheels Coffee Roasters, apakah saat ini ada meja kosong untuk walk-in?'
          : 'Hello Wheels Coffee Roasters, are there any available tables right now for walk-in?',
    },
  ];

  return (
    <aside
      aria-label={lang === 'id' ? 'Reservasi Meja & Bantuan Cepat' : 'Table Reservation & Quick Actions'}
      className="fixed bottom-6 right-5 sm:right-8 z-40 flex flex-col items-end gap-3 pointer-events-none"
    >
      {/* ── Reservation Concierge Quick Menu Popup ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto w-80 sm:w-88 rounded-2xl bg-[#1a120c]/95 dark:bg-[#140e09]/95 backdrop-blur-2xl border border-[#e6b17e]/35 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(230,177,126,0.15)] overflow-hidden p-5 text-[#f7f2ea]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-[#ffffff]/10">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5deca]">
                    {lang === 'id' ? 'Reservasi Meja Wheels' : 'Wheels Reservations'}
                  </h4>
                  <p className="text-[10px] text-[#c4b8aa] tracking-wider">
                    {lang === 'id' ? 'Pilih metode pemesanan meja Anda' : 'Select your preferred booking option'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Tutup menu"
                className="w-7 h-7 rounded-full bg-[#ffffff]/10 hover:bg-[#ffffff]/20 flex items-center justify-center text-[#d5c8b8] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Options */}
            <div className="pt-3 space-y-2">
              {reserveOptions.map((opt, idx) => {
                const IconComponent = opt.icon;
                if (opt.type === 'anchor') {
                  return (
                    <button
                      key={idx}
                      onClick={opt.action}
                      className="w-full text-left group flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-[#2c1a0e] to-[#3d281a] hover:from-[#e6b17e] hover:to-[#f5deca] transition-all duration-300 border border-[#e6b17e]/40 shadow-sm"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#e6b17e] group-hover:bg-[#1a120c] flex items-center justify-center shrink-0 transition-colors">
                        <IconComponent className="w-4 h-4 text-[#1a120c] group-hover:text-[#e6b17e]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-xs font-bold text-[#f5deca] group-hover:text-[#1a120c] tracking-wide transition-colors">
                          {opt.title}
                        </span>
                        <span className="block text-[11px] text-[#d5c8b8] group-hover:text-[#2c1a0e] transition-colors truncate">
                          {opt.desc}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#e6b17e] group-hover:text-[#1a120c] shrink-0 mt-1 transition-colors" />
                    </button>
                  );
                }

                return (
                  <a
                    key={idx}
                    href={createWaUrl(opt.msg || '')}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-start gap-3 p-3 rounded-xl bg-[#2a1d14]/60 hover:bg-[#e6b17e] transition-all duration-300 border border-[#ffffff]/5 hover:border-[#e6b17e]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#3a281c] group-hover:bg-[#1a120c] flex items-center justify-center shrink-0 transition-colors">
                      <IconComponent className="w-4 h-4 text-[#e6b17e] group-hover:text-[#e6b17e]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-xs font-semibold text-[#f5deca] group-hover:text-[#1a120c] tracking-wide transition-colors">
                        {opt.title}
                      </span>
                      <span className="block text-[11px] text-[#c4b8aa] group-hover:text-[#2c1a0e]/80 transition-colors truncate">
                        {opt.desc}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="pt-3 mt-3 border-t border-[#ffffff]/10 text-center">
              <span className="text-[10px] tracking-[0.16em] uppercase text-[#e6b17e] font-medium">
                Eyckman 32, Bandung • 07:00 — 22:30 WIB
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── WhatsApp Direct Chat Bubble ── */}
      <motion.a
        href="https://wa.me/6281222081402?text=Halo%20Wheels%20Coffee%20Roasters%2C%20saya%20ingin%20bertanya."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 22 }}
        title={lang === 'id' ? 'Chat WhatsApp Langsung' : 'Direct WhatsApp Chat'}
        className="pointer-events-auto group relative w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1da851] shadow-[0_6px_24px_rgba(37,211,102,0.45)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />
        <MessageCircle className="w-6 h-6 text-white fill-white relative z-10" />
        {/* Tooltip */}
        <span className="absolute right-14 whitespace-nowrap text-[11px] font-semibold bg-[#1a0f08]/90 dark:bg-[#120e09]/95 text-white px-2.5 py-1.5 rounded-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border border-white/10 shadow-lg">
          {lang === 'id' ? 'Chat WhatsApp' : 'WhatsApp Chat'}
        </span>
      </motion.a>

      {/* ── Buttons Row ── */}
      <div className="flex items-center gap-2.5 pointer-events-auto">
        {/* Back to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToTop}
              title={lang === 'id' ? 'Kembali ke atas' : 'Back to top'}
              aria-label={lang === 'id' ? 'Kembali ke atas' : 'Back to top'}
              className="w-11 h-11 rounded-full bg-[#18110b]/90 dark:bg-[#140e09]/95 backdrop-blur-xl border border-[#e6b17e]/40 text-[#e6b17e] hover:bg-[#e6b17e] hover:text-[#18110b] shadow-[0_8px_25px_rgba(0,0,0,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Reserve Floating Master Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          title={lang === 'id' ? 'Reservasi Meja' : 'Reserve Table'}
          aria-label={lang === 'id' ? 'Reservasi Meja' : 'Reserve Table'}
          className="group relative flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-[#18110b] via-[#22160e] to-[#18110b] text-[#ffffff] border border-[#e6b17e]/50 shadow-[0_10px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(230,177,126,0.2)] hover:border-[#e6b17e] hover:shadow-[0_10px_40px_rgba(230,177,126,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {/* Subtle shimmer sweep on button */}
          <div
            aria-hidden="true"
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#ffffff]/10 to-transparent pointer-events-none shimmer-sweep rounded-full"
          />

          {/* Living green pulse dot */}
          <span className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          </span>

          {/* Icon */}
          <Calendar className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />

          {/* Label */}
          <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#f5deca]">
            RESERVE
          </span>
        </button>
      </div>
    </aside>
  );
};
