import React, { useState } from 'react';
import { Language } from '../types';
import { Sparkles, Coffee, Heart, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HD_ASSETS } from '../data/content';

interface MatchmakerProps {
  lang: Language;
}

interface MatchResult {
  title: string;
  coffeeName: string;
  bean: string;
  brewMethod: string;
  notes: string;
  image: string;
  foodPairing: string;
  why: string;
}

export const CoffeeMatchmaker: React.FC<MatchmakerProps> = ({ lang }) => {
  const [flavorPreference, setFlavorPreference] = useState<'fruity' | 'chocolate' | 'bold' | 'creamy'>('fruity');
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'afternoon' | 'evening'>('morning');

  const getRecommendation = (): MatchResult => {
    if (flavorPreference === 'creamy') {
      return {
        title: lang === 'id' ? 'Kombinasi Lembut & Creamy' : 'Velvety & Creamy Indulgence',
        coffeeName: 'Wheels Dirty Latte',
        bean: 'Eyckman House Blend (Flores & Gayo)',
        brewMethod: 'Double Ristretto + Chilled Fortified Milk',
        notes: lang === 'id' ? 'Cokelat Hitam, Karamel Manis, Tekstur Sutra' : 'Dark Chocolate, Sweet Caramel, Silky Mouthfeel',
        image: HD_ASSETS.dirtyLatte,
        foodPairing: 'Warm Almond Croissant / Classic Tiramisu',
        why: lang === 'id' 
          ? 'Kontras suhu susu dingin dan double ristretto panas menghasilkan kekayaan rasa manis gurih yang menenangkan.'
          : 'The thermal contrast between cold textured milk and hot double ristretto delivers a comforting, luxurious sweet finish.'
      };
    } else if (flavorPreference === 'chocolate') {
      return {
        title: lang === 'id' ? 'Keseimbangan Manis & Cokelat' : 'Balanced Sweetness & Chocolate Body',
        coffeeName: 'Classic Cappuccino / Magic Latte',
        bean: 'Flores Bajawa Kartika (Honey Process)',
        brewMethod: 'Espresso Bar 9 Bar • 62°C Microfoam',
        notes: lang === 'id' ? 'Hazelnut Panggang, Gula Kelapa Aren, Apel Merah' : 'Toasted Hazelnut, Brown Palm Sugar, Crisp Apple',
        image: HD_ASSETS.cappuccino,
        foodPairing: 'Tokyo Steak (Prime Cut) / Ommu Rice',
        why: lang === 'id'
          ? 'Karakter nutty dan karamel dari biji Flores menonjol sempurna dengan steamed milk tanpa asam berlebih.'
          : 'The nutty, caramel body of Flores beans cuts through smoothly with textured steamed milk.'
      };
    } else if (flavorPreference === 'bold') {
      return {
        title: lang === 'id' ? 'Karakter Kuat & Intens' : 'Bold, Intense & Deep Finish',
        coffeeName: 'Kyoto Cold Drip (12hr) / Long Black',
        bean: 'Gayo Double Washed & Kerinci Natural',
        brewMethod: 'Slow Cold Water Tower Extraction',
        notes: lang === 'id' ? 'Teh Hitam Earl Grey, Stone Fruit, Cacao Nibs' : 'Earl Grey Tea, Stone Fruit, Dark Cocoa Nibs',
        image: HD_ASSETS.coldDrip,
        foodPairing: 'Wheels Coffee Rubbed Steak',
        why: lang === 'id'
          ? 'Ekstraksi tetes lambat 12 jam mengekstrak minyak aromatik murni dengan kepekatan tinggi tapi tanpa rasa asam lambung.'
          : '12-hour tower extraction yields pure aromatic intensity without unwanted acidity.'
      };
    } else {
      return {
        title: lang === 'id' ? 'Kejernihan Floral & Buah Segar' : 'Clean Floral & Vivid Fruit Notes',
        coffeeName: 'Precision V60 Pour Over',
        bean: 'Ethiopia Guji Uraga / Kerinci Anaerobic',
        brewMethod: 'Manual V60 Cone • 93°C • 2m 45s',
        notes: lang === 'id' ? 'Bunga Melati, Persik Putih, Jeruk Bergamot' : 'Jasmine Blossom, White Peach, Bergamot Citrus',
        image: HD_ASSETS.pourOver,
        foodPairing: 'Japanese Steak Salad / Modernist Cake',
        why: lang === 'id'
          ? 'Metode tuang lambat memunculkan nada floral paling lembut dan rasa buah segar alami seperti teh manis beraroma melati.'
          : 'Slow pour filtration highlights delicate floral aromatics and vibrant, tea-like clarity.'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="matchmaker" className="w-full py-20 px-4 md:px-8 lg:px-12 bg-[#f3ece1] dark:bg-[#14110e] transition-colors duration-400">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8c5e39]/10 dark:bg-[#e6b17e]/15 text-[#8c5e39] dark:text-[#e6b17e] text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'AI / Smart Sommelier Kopi' : 'AI / Smart Coffee Sommelier'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal">
            {lang === 'id' ? 'Temukan Seduhan Kopi Ideal Anda.' : 'Discover Your Perfect Brew Match.'}
          </h2>
          <p className="text-sm text-[#5c534a] dark:text-[#c4b8aa] max-w-xl mx-auto leading-relaxed">
            {lang === 'id'
              ? 'Pilih preferensi cita rasa dan suasana waktu Anda, biarkan sistem artisan kami menyocokkan single origin & hidangan pendamping terbaik untuk Anda.'
              : 'Choose your preferred flavor spectrum and time of day, and let our artisan matchmaker find the ideal single origin and culinary companion.'}
          </p>
        </div>

        {/* Step Filters */}
        <div className="bg-[#faf6f0] dark:bg-[#1b1713] p-6 sm:p-8 rounded-xl border border-[#d5c8b8]/50 dark:border-[#3d342c] shadow-xl space-y-8">
          {/* Filter 1: Flavor Profile */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8c5e39] dark:text-[#e6b17e] block">
              1. {lang === 'id' ? 'Sensasi Rasa yang Anda Sukai:' : 'Flavor Profile You Crave:'}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'fruity', label: lang === 'id' ? 'Buah & Floral' : 'Fruity & Floral', icon: '🌸' },
                { id: 'chocolate', label: lang === 'id' ? 'Karamel & Kacang' : 'Caramel & Nutty', icon: '🍫' },
                { id: 'creamy', label: lang === 'id' ? 'Susu Lembut' : 'Creamy & Sweet', icon: '🥛' },
                { id: 'bold', label: lang === 'id' ? 'Pekat & Intens' : 'Bold & Intense', icon: '⚡' },
              ].map((f) => {
                const isSelected = flavorPreference === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFlavorPreference(f.id as any)}
                    className={`p-3.5 rounded text-left transition-all duration-300 border flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#8c5e39] dark:border-[#e6b17e] bg-[#f7d7be]/30 dark:bg-[#e6b17e]/15 text-[#2c1a0e] dark:text-[#f7f2ea] shadow-sm'
                        : 'border-[#d5c8b8]/60 dark:border-[#3d342c] bg-transparent text-[#5c534a] dark:text-[#c4b8aa] hover:border-[#8c5e39]'
                    }`}
                  >
                    <span className="text-xl mb-1">{f.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-wider">{f.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filter 2: Time of Day */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8c5e39] dark:text-[#e6b17e] block">
              2. {lang === 'id' ? 'Waktu Menikmati Kopi:' : 'Time of Enjoyment:'}
            </span>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'morning', label: lang === 'id' ? 'Pagi (07:00 - 11:00)' : 'Morning Fresh' },
                { id: 'afternoon', label: lang === 'id' ? 'Siang (11:00 - 16:00)' : 'Afternoon Focus' },
                { id: 'evening', label: lang === 'id' ? 'Senja / Malam (16:00 - Late)' : 'Evening Unwind' },
              ].map((t) => {
                const isSelected = timeOfDay === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTimeOfDay(t.id as any)}
                    className={`py-2.5 px-3 rounded text-center text-xs font-semibold uppercase tracking-wider transition-all border ${
                      isSelected
                        ? 'bg-[#2c1a0e] dark:bg-[#e6b17e] text-[#ffffff] dark:text-[#1e150f] border-transparent shadow'
                        : 'border-[#d5c8b8]/60 dark:border-[#3d342c] text-[#5c534a] dark:text-[#c4b8aa] hover:border-[#8c5e39]'
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Match Result Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${flavorPreference}-${timeOfDay}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-[#faf6f0] dark:bg-[#241f1a] p-6 rounded-lg border border-[#8c5e39]/30 dark:border-[#e6b17e]/40 shadow-inner grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* Product Photo */}
              <div className="md:col-span-4 aspect-square rounded-md overflow-hidden bg-[#d5c8b8]/20 relative shadow-md">
                <img
                  src={rec.image}
                  alt={rec.coffeeName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-[#2c1a0e]/90 text-[#f7f2ea] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                  Match 99%
                </div>
              </div>

              {/* Recommendation Details */}
              <div className="md:col-span-8 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8c5e39] dark:text-[#e6b17e]">
                  {rec.title}
                </span>

                <h3 className="font-serif text-2xl md:text-3xl text-[#2c1a0e] dark:text-[#f7f2ea] font-medium leading-snug">
                  {rec.coffeeName}
                </h3>

                <p className="text-xs text-[#5c534a] dark:text-[#c4b8aa] leading-relaxed">
                  {rec.why}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1 border-t border-[#d5c8b8]/40 dark:border-[#3d342c]">
                  <div>
                    <span className="text-[#8c8074] dark:text-[#8c7e6f] block font-semibold text-[10px] uppercase">
                      {lang === 'id' ? 'Biji Kopi Rekomendasi' : 'Recommended Beans'}
                    </span>
                    <span className="font-medium text-[#2c1a0e] dark:text-[#f7f2ea]">{rec.bean}</span>
                  </div>
                  <div>
                    <span className="text-[#8c8074] dark:text-[#8c7e6f] block font-semibold text-[10px] uppercase">
                      {lang === 'id' ? 'Pasangan Hidangan' : 'Culinary Pairing'}
                    </span>
                    <span className="font-medium text-[#2c1a0e] dark:text-[#f7f2ea]">{rec.foodPairing}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="#menu-catalog"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2c1a0e] dark:bg-[#e6b17e] text-[#ffffff] dark:text-[#1e150f] text-xs font-bold uppercase tracking-wider rounded hover:bg-[#422d1d] transition-colors"
                  >
                    <span>{lang === 'id' ? 'Pesan di Meja' : 'Order at Table'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#shop-beans"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#8c5e39] dark:border-[#e6b17e] text-[#8c5e39] dark:text-[#e6b17e] text-xs font-bold uppercase tracking-wider rounded hover:bg-[#8c5e39]/10 transition-colors"
                  >
                    <span>{lang === 'id' ? 'Beli Biji Kopi Ini' : 'Buy Packaged Beans'}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
