import React, { useState } from 'react';
import { Language, RoastBatch } from '../types';
import { ROAST_BATCHES, HD_ASSETS } from '../data/content';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RoasteryProps {
  lang: Language;
}

export const RoasteryVisualizer: React.FC<RoasteryProps> = ({ lang }) => {
  const [selectedBatch, setSelectedBatch] = useState<RoastBatch>(ROAST_BATCHES[0]);

  return (
    <section id="roaster" className="w-full relative bg-[#241a10] text-[#ffffff] px-4 md:px-8 lg:px-12 py-20 md:py-28 overflow-hidden">
      {/* Subtle Background Roastery Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c48b52]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Interactive Visualizer Column */}
        <div className="lg:col-span-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.24em] text-[#e6b17e] uppercase">
            <Flame className="w-4 h-4" />
            <span>02 — {lang === 'id' ? 'DI RUANG SANGRAI' : 'IN THE ROASTER'}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#ffffff] font-normal leading-[1.08] uppercase">
            {lang === 'id' ? 'Disangrai Dengan Niat & Presisi.' : 'Roasted With Intention.'}
          </h2>

          <p className="text-base text-[#d5c8b8] max-w-lg leading-relaxed font-light">
            {lang === 'id'
              ? 'Setiap lot biji kopi di-cupping berkala, diprofilkan pada drum cast-iron, dan disempurnakan untuk mengeluarkan rasa manis alami, keasaman buah berlapis, dan aftertaste yang bersih tanpa getir pahit.'
              : 'Every lot is cupped, profiled on cast iron drums, and refined to unlock natural sweetness, layered acidity, and a finish free from astringency. We roast on-site in small batches.'}
          </p>

          {/* Interactive Batch Selector Buttons */}
          <div className="space-y-2 pt-2">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c4b8aa]">
              {lang === 'id' ? 'Pilih Profil Sangrai Terkini:' : 'Select Active Roast Profile:'}
            </span>
            <div className="flex flex-wrap gap-2.5">
              {ROAST_BATCHES.map((batch) => {
                const isSelected = selectedBatch.id === batch.id;
                return (
                  <button
                    key={batch.id}
                    onClick={() => setSelectedBatch(batch)}
                    className={`px-3.5 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#e6b17e] text-[#1e150f] shadow-lg scale-105'
                        : 'bg-[#14100c]/80 text-[#f7f2ea] hover:bg-[#342417] border border-[#ffffff]/15'
                    }`}
                  >
                    {batch.code} • {batch.origin.split(' ')[0]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sensory Profile Visualizer Card with Smooth AnimatePresence */}
          <div className="bg-[#14100c]/70 p-6 max-w-lg backdrop-blur-md space-y-5 border border-[#ffffff]/15 shadow-2xl">
            <div className="flex items-center justify-between text-[#e6b17e] text-xs font-bold uppercase tracking-[0.16em]">
              <span>{lang === 'id' ? 'Analisis Profil Sensori' : 'Sensory Profile Analysis'}</span>
              <span>Batch {selectedBatch.code}</span>
            </div>

            <div className="text-xs text-[#d5c8b8]">
              <span className="font-semibold text-[#ffffff] text-sm">{selectedBatch.origin}</span>
              <div className="text-[#c4b8aa] mt-0.5">
                {selectedBatch.elevation} • {selectedBatch.process} • <span className="text-[#e6b17e]">{selectedBatch.roastLevel}</span>
              </div>
            </div>

            {/* Dynamic Roasting Profile Curve */}
            <div className="w-full h-24 flex items-end">
              <svg className="w-full h-full text-[#e6b17e]" fill="none" viewBox="0 0 300 80">
                <path
                  d={selectedBatch.curvePath}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d={`${selectedBatch.curvePath} L300,80 L0,80 Z`}
                  fill="currentColor"
                  fillOpacity="0.16"
                />
                <circle cx="160" cy="20" r="4.5" fill="#f5deca" />
                <circle cx="300" cy="10" r="4.5" fill="#e6b17e" />
              </svg>
            </div>

            {/* Cupping Scores */}
            <div className="grid grid-cols-4 gap-2 pt-2 text-center text-xs uppercase tracking-[0.1em] text-[#f7f2ea] border-t border-[#ffffff]/15">
              <div>
                <span className="block text-[#c4b8aa] text-[10px]">Aroma</span>
                <span className="text-[#ffffff] font-bold text-sm">{selectedBatch.aroma}</span>
              </div>
              <div>
                <span className="block text-[#c4b8aa] text-[10px]">Sweetness</span>
                <span className="text-[#ffffff] font-bold text-sm">{selectedBatch.sweetness}</span>
              </div>
              <div>
                <span className="block text-[#c4b8aa] text-[10px]">Clarity</span>
                <span className="text-[#ffffff] font-bold text-sm">{selectedBatch.clarity}</span>
              </div>
              <div>
                <span className="block text-[#c4b8aa] text-[10px]">Body</span>
                <span className="text-[#ffffff] font-bold text-sm">{selectedBatch.body}</span>
              </div>
            </div>

            {/* Tasting Notes Callout */}
            <div className="p-3 bg-[#1e150f]/80 rounded border border-[#e6b17e]/30 text-xs text-[#f5deca] leading-relaxed">
              <span className="font-semibold text-[#e6b17e] block mb-0.5">
                {lang === 'id' ? 'Catatan Rasa (Tasting Notes):' : 'Tasting Notes:'}
              </span>
              “{selectedBatch.notes[lang]}”
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#shop-beans"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e6b17e] text-[#1e150f] text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#ffffff] transition-all"
            >
              <span>{lang === 'id' ? 'BELI BIJI KOPI INI' : 'BUY THIS ROAST'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#menu-catalog"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#d5c8b8] hover:text-[#ffffff] transition-colors"
            >
              <span>{lang === 'id' ? 'Lihat Menu Seduhan' : 'View Brew Offerings'} →</span>
            </a>
          </div>
        </div>

        {/* Right Roaster Drum HD Visual Feature */}
        <div className="lg:col-span-6 relative mt-8 lg:mt-0">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#14100c] shadow-2xl">
            <img
              src={HD_ASSETS.roasterDrum}
              alt="Artisan Roaster drum at Wheels Coffee inspecting freshly roasted coffee beans"
              className="w-full h-full object-cover object-center filter saturate-95 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14100c]/80 via-transparent to-transparent"></div>
          </div>

          {/* Floating Artisan Provenance Badge */}
          <div className="absolute -bottom-6 -left-6 hidden sm:block p-6 bg-[#faf6f0] dark:bg-[#1b1713] text-[#1e1b18] dark:text-[#f7f2ea] shadow-2xl max-w-xs border-l-4 border-[#8c5e39] dark:border-[#e6b17e]">
            <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#8c5e39] dark:text-[#e6b17e] block mb-1">
              {lang === 'id' ? 'PERDAGANGAN LANGSUNG' : 'DIRECT TRADE'}
            </span>
            <p className="text-xs text-[#5c534a] dark:text-[#c4b8aa] leading-relaxed">
              {lang === 'id'
                ? 'Didatangkan langsung dari koperasi petani Kerinci, Gayo, dan Flores Bajawa dengan transparansi harga yang adil.'
                : 'Sourced responsibly from Kerinci, Gayo, and Flores Bajawa farm cooperatives with full fair pricing transparency.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
