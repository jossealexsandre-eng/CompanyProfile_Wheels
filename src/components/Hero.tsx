import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight, Clock, MapPin, Mountain, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { HD_ASSETS } from '../data/content';
import { motion, useScroll, useTransform } from 'motion/react';
import { useTypewriter } from '../hooks/useTypewriter';
import { useRotatingTypewriter } from '../hooks/useRotatingTypewriter';
import { CoffeeSteam } from './CoffeeSteam';

interface HeroProps {
  lang: Language;
}

/** Blinking cursor component */
const Cursor: React.FC<{ visible: boolean }> = ({ visible }) =>
  visible ? (
    <span
      aria-hidden="true"
      className="inline-block w-[2px] h-[1em] align-middle bg-[#e6b17e] ml-[2px] animate-[blink_0.9s_step-end_infinite]"
    />
  ) : null;

// Rotating quotes in Indonesian and English
const ROTATING_QUOTES_ID = [
  '“Kopi, makanan jujur & momen tak terburu.”',
  '“Sangrai sendiri. Disajikan dengan hati.”',
  '“Setiap tegukan bercerita tentang asalnya.”',
  '“Tempat di mana waktu berjalan lebih lambat.”',
];

const ROTATING_QUOTES_EN = [
  '“Coffee, honest food & unhurried moments.”',
  '“Roasted in-house. Served with intention.”',
  '“Every sip tells the story of its origin.”',
  '“A place where time moves a little slower.”',
];

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  // ── Parallax Background ───────────────────────────────────────────
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ['0%', '30%']);

  // ── Live Bandung (WIB) Time Clock ─────────────────────────────────
  const [bandungTime, setBandungTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('id-ID', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(now);
        setBandungTime(`${formatted} WIB`);
      } catch {
        const now = new Date();
        setBandungTime(
          `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} WIB`
        );
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 15000);
    return () => clearInterval(timer);
  }, []);

  // ── Rotating Typewriter for Quotes ────────────────────────────────
  const rotatingPhrases = lang === 'id' ? ROTATING_QUOTES_ID : ROTATING_QUOTES_EN;
  const quote = useRotatingTypewriter({
    phrases: rotatingPhrases,
    typeSpeed: 48,
    deleteSpeed: 24,
    pauseAfterType: 2600,
    pauseAfterDelete: 450,
    startDelay: 1100,
  });

  // ── One-shot Typewriter for Description ───────────────────────────
  const descText =
    lang === 'id'
      ? 'Tempat peristirahatan tenang di Jalan Eyckman Bandung. Biji kopi single origin disangrai di tempat, dipadukan hidangan istimewa dan suasana Japandi yang hangat.'
      : 'A serene haven on Eyckman Street, Bandung. Single-origin coffees freshly roasted in-house, paired with culinary creations and warm Japandi architecture.';

  const desc = useTypewriter({ text: descText, startDelay: 1600, speed: 22 });

  return (
    <section
      id="home"
      className="relative w-full min-h-[94vh] flex flex-col justify-between pt-28 pb-10 px-4 md:px-8 lg:px-12 overflow-hidden bg-[#1e150f] text-[#ffffff]"
    >
      {/* ── Cinematic HD Background with Parallax + Slow Ambient Zoom ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: 'easeOut' }}
            src={HD_ASSETS.hero}
            alt="Wheels Coffee Roasters Bandung Atelier interior with natural morning light and cast-iron roasting machine"
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#14100c] via-[#1e150f]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14100c]/80 via-transparent to-[#14100c]/60" />
        <div className="absolute inset-0 bg-[#1e150f]/20 backdrop-contrast-[1.1]" />
      </div>

      {/* ── Top Status Bar — Aesthetic Luxury Glass Capsule ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex flex-wrap items-center justify-between gap-3 sm:gap-4"
      >
        {/* Aesthetic Live Status Capsule */}
        <div className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#18110b]/90 via-[#0e0a07]/95 to-[#18110b]/90 backdrop-blur-xl px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-[#e6b17e]/35 shadow-[0_4px_25px_rgba(0,0,0,0.5),0_0_20px_rgba(230,177,126,0.15)] overflow-hidden transition-all duration-300 hover:border-[#e6b17e]/60 hover:shadow-[0_4px_30px_rgba(230,177,126,0.25)]">
          {/* Subtle animated light sweep across the pill */}
          <div
            aria-hidden="true"
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#ffffff]/10 to-transparent pointer-events-none shimmer-sweep"
          />

          {/* Luxury Concentric Living Beacon */}
          <span className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0">
            {/* Outer expanding ripple */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            {/* Ambient soft green aura */}
            <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500/30 blur-[2px]" />
            {/* Core vibrant gemstone dot */}
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-tr from-emerald-500 to-emerald-300 shadow-[0_0_8px_#34d399]" />
          </span>

          {/* Primary Badge Text */}
          <span className="text-[11px] sm:text-xs tracking-[0.24em] uppercase font-semibold text-[#f5deca]">
            {lang === 'id' ? 'BUKA HARI INI' : 'OPEN TODAY'}
          </span>

          {/* Golden Diamond Divider */}
          <span className="w-1 h-1 rounded-full bg-[#e6b17e]/60 shrink-0" />

          {/* Operating Hours */}
          <span className="text-[11px] sm:text-xs tracking-[0.16em] uppercase font-medium text-[#ffffff]/90 font-mono">
            07:00 — LATE
          </span>

          {/* Live Bandung Time Badge */}
          {bandungTime && (
            <span className="hidden sm:inline-flex items-center gap-1.5 pl-2 border-l border-[#ffffff]/15 text-[10px] tracking-[0.18em] uppercase text-[#e6b17e] font-mono">
              <Clock className="w-3 h-3 text-[#e6b17e]/80" />
              <span>{bandungTime}</span>
            </span>
          )}
        </div>

        {/* Location & Elevation Badges */}
        <div className="hidden md:flex items-center gap-2.5 text-xs tracking-[0.18em] uppercase">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d0b09]/60 backdrop-blur-md border border-[#ffffff]/10 text-[#d5c8b8] hover:border-[#e6b17e]/30 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#e6b17e]" />
            <span className="font-medium text-[11px]">Jl. Prof. Eyckman No. 32, Bandung</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d0b09]/60 backdrop-blur-md border border-[#ffffff]/10 text-[#e6b17e] font-mono text-[11px]">
            <Mountain className="w-3 h-3 text-[#e6b17e]/80" />
            <span>768m MASL</span>
          </div>
        </div>
      </motion.div>

      {/* ── Main Billboard ── */}
      <div className="relative z-10 my-auto py-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="space-y-4"
        >
          {/* Badge & Rising Steam */}
          <div className="relative inline-flex items-center gap-3">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#e6b17e] tracking-[0.28em] uppercase">
              <Sparkles className="w-4 h-4" />
              <span>
                {lang === 'id'
                  ? 'Sanctuary Kopi Spesialti & Kuliner Artisan'
                  : 'Sanctuary of Slow Craft & Provenance'}
              </span>
            </div>
            <div className="hidden sm:block absolute -top-8 -right-8 opacity-80">
              <CoffeeSteam />
            </div>
          </div>

          {/* H1 — static, fades in */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#ffffff] font-normal tracking-tight uppercase leading-[1.02]">
            Wheels Coffee
            <br />
            <span className="italic font-light lowercase text-[#f5deca]">roasters.</span>
          </h1>

          {/* ── TYPEWRITER: Quote (Rotating) ── */}
          <p
            className="font-serif text-2xl md:text-3xl text-[#f7f2ea]/90 font-light max-w-2xl leading-relaxed italic pt-2 min-h-[3rem]"
            aria-live="polite"
          >
            {quote.displayed}
            <Cursor visible={quote.phase !== 'gap'} />
          </p>

          {/* ── TYPEWRITER: Description ── */}
          <p
            className="text-sm md:text-base text-[#d5c8b8] max-w-xl leading-relaxed font-light min-h-[3rem]"
            aria-label={descText}
          >
            {desc.isStarted && (
              <>
                {desc.displayed}
                <Cursor visible={!desc.isDone} />
              </>
            )}
          </p>

          {/* ── CTAs — appear after description starts ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={desc.isDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="pt-6 flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <a
              href="#menu-catalog"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ffffff] text-[#1e150f] text-xs font-bold uppercase tracking-[0.18em] hover:bg-[#e6b17e] hover:text-[#1e150f] transition-all duration-300 shadow-xl"
            >
              <span>{lang === 'id' ? 'JELAJAHI MENU' : 'EXPLORE OFFERINGS'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#reservation-anchor"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-[#ffffff]/30 text-[#ffffff] text-xs font-semibold uppercase tracking-[0.18em] hover:border-[#e6b17e] hover:text-[#e6b17e] transition-all duration-300"
            >
              <span>{lang === 'id' ? 'RESERVASI MEJA' : 'RESERVE SANCTUARY'}</span>
            </a>

            <a
              href="#matchmaker"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#2b2118]/80 backdrop-blur-sm border border-[#e6b17e]/40 text-[#e6b17e] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#e6b17e] hover:text-[#1e150f] transition-all duration-300"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'CARI RASA KOPI ANDA' : 'FIND YOUR COFFEE'}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom Metrics & Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 pt-6 border-t border-[#ffffff]/15 flex items-end justify-between text-[#ffffff]"
      >
        <div className="flex items-center gap-8 md:gap-14 text-xs">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#d5c8b8]/70">
              {lang === 'id' ? 'JAM OPERASIONAL' : 'OPEN HOURS'}
            </span>
            <span className="font-semibold text-sm text-[#ffffff] mt-0.5 block">
              07:00 — 22:30 WIB
            </span>
          </div>

          <div className="hidden sm:block">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#d5c8b8]/70">
              {lang === 'id' ? 'LOKASI' : 'LOCATION'}
            </span>
            <span className="font-semibold text-sm text-[#ffffff] mt-0.5 block">
              Eyckman, Sukajadi, Bandung
            </span>
          </div>

          <div className="hidden lg:block">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#d5c8b8]/70">
              {lang === 'id' ? 'FASILITAS' : 'FACILITIES'}
            </span>
            <span className="font-semibold text-sm text-[#ffffff] mt-0.5 block">
              Indoor AC • Garden • Valet Parking • Wi-Fi
            </span>
          </div>
        </div>

        <a
          href="#philosophy"
          className="group flex items-center gap-2 text-[#e6b17e] text-xs tracking-[0.22em] uppercase font-semibold transition-transform"
        >
          <span>{lang === 'id' ? 'GULIR KE BAWAH' : 'SCROLL DOWN'}</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
};
