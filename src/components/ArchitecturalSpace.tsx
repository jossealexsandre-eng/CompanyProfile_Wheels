import React from 'react';
import { Language } from '../types';
import { HD_ASSETS } from '../data/content';
import { Maximize2, Coffee, BookOpen, Volume2 } from 'lucide-react';

interface SpaceProps {
  lang: Language;
  onOpenLightbox: (src: string) => void;
}

export const ArchitecturalSpace: React.FC<SpaceProps> = ({ lang, onOpenLightbox }) => {
  return (
    <section id="space" className="w-full py-20 md:py-28 px-4 md:px-8 lg:px-12 bg-[#faf6f0] dark:bg-[#0d0b09] transition-colors duration-400">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: HD Image with Lightbox click */}
        <div className="lg:col-span-7 relative">
          <div
            className="relative w-full aspect-[16/10] overflow-hidden rounded bg-[#f3ece1] dark:bg-[#1b1713] group cursor-pointer shadow-2xl"
            onClick={() => onOpenLightbox(HD_ASSETS.interiorAtelier)}
          >
            <img
              src={HD_ASSETS.interiorAtelier}
              alt="Spacious sunlit two-story Japanese Scandinavian cafe with tall windows and patrons reading"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#1e150f]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-[#faf6f0]/95 dark:bg-[#0d0b09]/95 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#2c1a0e] dark:text-[#e6b17e] rounded shadow flex items-center gap-2">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Perbesar Tampilan Ruang' : 'Expand Atelier View'}</span>
              </span>
            </div>
          </div>
          <div className="absolute -bottom-4 right-4 bg-[#faf6f0] dark:bg-[#14110e] px-4 py-2 text-[11px] font-bold tracking-[0.18em] uppercase text-[#8c8074] dark:text-[#c4b8aa] border border-[#d5c8b8]/50 dark:border-[#3d342c] rounded shadow">
            Japandi Minimalist Architecture • Bandung
          </div>
        </div>

        {/* Right Column: Editorial Narrative */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-[0.24em] uppercase text-[#8c5e39] dark:text-[#e6b17e]">
              04 — {lang === 'id' ? 'ARSITEKTUR & RUANG' : 'THE ARCHITECTURAL SPACE'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal leading-tight">
              {lang === 'id' ? 'Tinggallah Sedikit Lebih Lama.' : 'Stay a little longer.'}
            </h2>
          </div>

          <p className="font-serif text-xl md:text-2xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal italic leading-relaxed">
            “{lang === 'id'
              ? 'Sudut teduh di Bandung untuk seduhan pagi, makan siang santai, percakapan bermakna, hingga malam yang tenang.'
              : 'A serene corner in Bandung for morning coffee, slow lunches, deep conversations, and late evenings.'}”
          </p>

          <p className="text-sm text-[#5c534a] dark:text-[#c4b8aa] leading-relaxed font-light">
            {lang === 'id'
              ? 'Dirancang dengan prinsip harmoni Japandi—perpaduan kesederhanaan estetika Jepang (Ma / ruang bernapas) dan kehangatan kayu Skandinavia. Ventilasi alami memanfaatkan hawa sejuk dataran tinggi Bandung, sementara bukaan jendela besar mengalirkan cahaya matahari lembut tanpa silau.'
              : 'Designed with Japandi principles of Ma (negative space) and Scandinavian timber warmth, the Eyckman sanctuary embraces Bandung’s mountain air. High-void ceiling architecture draws diffuse daylight, inviting deep focus, open sketchbooks, and shared platters.'}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#d5c8b8]/40 dark:border-[#3d342c]">
            <div className="space-y-1">
              <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c5e39] dark:text-[#e6b17e]">
                {lang === 'id' ? 'Akustik & Suasana' : 'Acoustics'}
              </span>
              <span className="block text-xs text-[#1e1b18] dark:text-[#f7f2ea]">
                {lang === 'id' ? 'Peredam panel kayu & alunan jazz lembut' : 'Timber baffles & soothing ambient acoustic playlist'}
              </span>
            </div>
            <div className="space-y-1">
              <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c5e39] dark:text-[#e6b17e]">
                {lang === 'id' ? 'Ergonomi' : 'Seating Ergonomics'}
              </span>
              <span className="block text-xs text-[#1e1b18] dark:text-[#f7f2ea]">
                {lang === 'id' ? 'Kursi jati nyaman & meja kerja kokoh' : 'Solid oak desks and mid-century comfort armchairs'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
