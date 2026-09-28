import React, { useState, useCallback } from 'react';
import { Language } from '../types';
import { GALLERY_ROW_A, GALLERY_ROW_B, GalleryRowItem } from '../data/content';
import { X, Maximize2, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryProps {
  lang: Language;
  activeLightboxImg: string | null;
  setActiveLightboxImg: (src: string | null) => void;
}

/** Single marquee image card */
const GalleryCard: React.FC<{
  item: GalleryRowItem;
  lang: Language;
  index: number;
  onOpen: (src: string) => void;
}> = ({ item, lang, index, onOpen }) => (
  <div
    key={`${item.id}-${index}`}
    onClick={() => onOpen(item.src)}
    className={`relative flex-shrink-0 h-56 md:h-72 overflow-hidden rounded-xl cursor-pointer group shadow-lg ${item.aspect}`}
    style={{ width: 'auto' }}
  >
    <img
      src={item.src}
      alt={item.label[lang]}
      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      loading="lazy"
      draggable={false}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#1e150f]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 gap-2">
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.16em] text-white bg-[#0d0b09]/75 px-3 py-1.5 rounded-md backdrop-blur-sm flex-1 line-clamp-1">
        {item.label[lang]}
      </span>
      <span className="text-white p-2 rounded-full bg-white/20 backdrop-blur-sm flex-shrink-0">
        <Maximize2 className="w-3.5 h-3.5" />
      </span>
    </div>
  </div>
);

export const GalleryModal: React.FC<GalleryProps> = ({
  lang,
  activeLightboxImg,
  setActiveLightboxImg,
}) => {
  const [paused, setPaused] = useState(false);

  const handleOpen = useCallback((src: string) => {
    setActiveLightboxImg(src);
  }, [setActiveLightboxImg]);

  return (
    <>
      <section
        id="gallery"
        className="w-full py-20 md:py-28 bg-[#faf6f0] dark:bg-[#0d0b09] transition-colors duration-400 overflow-hidden"
      >
        {/* Section header */}
        <div className="px-4 md:px-8 lg:px-12 flex flex-col sm:flex-row items-baseline justify-between mb-10 gap-3">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-[0.24em] uppercase text-[#8c5e39] dark:text-[#e6b17e]">
              {lang === 'id' ? 'IMPRESI VISUAL' : 'VISUAL IMPRESSIONS'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal">
              {lang === 'id' ? 'Momen di Eyckman 32.' : 'Moments at Eyckman 32.'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Pause / Play control */}
            <button
              onClick={() => setPaused((p) => !p)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#d5c8b8] dark:border-[#3d342c] text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c8074] dark:text-[#8c7e6f] hover:border-[#8c5e39] dark:hover:border-[#e6b17e] hover:text-[#8c5e39] dark:hover:text-[#e6b17e] transition-all rounded-full"
              aria-label={paused ? 'Play gallery animation' : 'Pause gallery animation'}
            >
              {paused
                ? <><Play className="w-3 h-3" /><span>{lang === 'id' ? 'Putar' : 'Play'}</span></>
                : <><Pause className="w-3 h-3" /><span>{lang === 'id' ? 'Jeda' : 'Pause'}</span></>
              }
            </button>

            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8c8074] dark:text-[#8c7e6f] hidden sm:block">
              Pasteur • Bandung
            </span>
          </div>
        </div>

        {/* ── ROW A — scrolls LEFT → (default) */}
        <div className="gallery-marquee-row mb-4 select-none">
          <div
            className="gallery-track-left gap-4 px-4"
            style={{ animationPlayState: paused ? 'paused' : 'running' }}
          >
            {GALLERY_ROW_A.map((item, i) => (
              <GalleryCard
                key={`a-${item.id}-${i}`}
                item={item}
                lang={lang}
                index={i}
                onOpen={handleOpen}
              />
            ))}
          </div>
        </div>

        {/* ── ROW B — scrolls RIGHT ← (reverse) */}
        <div className="gallery-marquee-row select-none">
          <div
            className="gallery-track-right gap-4 px-4"
            style={{ animationPlayState: paused ? 'paused' : 'running' }}
          >
            {GALLERY_ROW_B.map((item, i) => (
              <GalleryCard
                key={`b-${item.id}-${i}`}
                item={item}
                lang={lang}
                index={i}
                onOpen={handleOpen}
              />
            ))}
          </div>
        </div>

        {/* Hint text */}
        <p className="px-4 md:px-8 lg:px-12 mt-6 text-[11px] font-medium text-[#8c8074] dark:text-[#8c7e6f] tracking-[0.1em] text-center">
          {lang === 'id'
            ? '🖱 Klik gambar untuk membuka tampilan penuh • Arahkan kursor untuk menjeda'
            : '🖱 Click any image to expand • Hover row to pause'}
        </p>
      </section>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {activeLightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#0d0b09]/97 backdrop-blur-lg flex items-center justify-center p-4 md:p-10"
            onClick={() => setActiveLightboxImg(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-5 text-[#ffffff] flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] hover:text-[#e6b17e] transition-colors p-2 bg-white/10 rounded-full backdrop-blur-sm"
              onClick={() => setActiveLightboxImg(null)}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              className="max-w-5xl max-h-[88vh] overflow-hidden flex items-center justify-center rounded-2xl shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeLightboxImg}
                alt="Enlarged gallery view"
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              />
            </motion.div>

            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
              {lang === 'id' ? 'Klik di luar gambar untuk menutup' : 'Click outside to close'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
