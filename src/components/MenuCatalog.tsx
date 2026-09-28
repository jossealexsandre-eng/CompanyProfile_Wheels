import React, { useState } from 'react';
import { Language, MenuItem } from '../types';
import { MENU_ITEMS, HD_ASSETS } from '../data/content';
import { Search, Sparkles, ExternalLink, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MenuProps {
  lang: Language;
  onOpenLightbox: (src: string) => void;
}

export const MenuCatalog: React.FC<MenuProps> = ({ lang, onOpenLightbox }) => {
  const [activeTab, setActiveTab] = useState<'coffee' | 'food' | 'dessert'>('coffee');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (item.category !== activeTab) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.desc[lang].toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  const getFeatureAsset = () => {
    if (activeTab === 'coffee') {
      return {
        image: HD_ASSETS.cascadingLatte,
        title: lang === 'id' ? 'Rekomendasi Barista' : "Barista's Recommendation",
        desc: lang === 'id'
          ? 'Nikmati Cascading Iced Latte atau Kyoto Cold Drip bersama Warm Almond Croissant mentega Prancis kami.'
          : 'Pair the Cascading Iced Latte or Kyoto Cold Drip with our signature warm flaky French butter croissant.'
      };
    } else if (activeTab === 'food') {
      return {
        image: HD_ASSETS.tokyoSteak,
        title: lang === 'id' ? 'Sajian Kuliner Unggulan' : "Culinary Signature",
        desc: lang === 'id'
          ? 'Tokyo Prime Striploin dengan charred garlic butter gurih, sangat serasi disandingkan dengan Hot Americano Gayo Wash.'
          : 'Prime Australian striploin with charred garlic butter, perfectly balanced when paired with a clean hot Americano.'
      };
    } else {
      return {
        image: HD_ASSETS.tiramisu,
        title: lang === 'id' ? 'Pastry & Dapur Manis' : "Pastry Atelier",
        desc: lang === 'id'
          ? 'Dipanggang segar setiap pagi jam 06:00 sebelum pintu Eyckman dibuka. Biskuit ladyfingers direndam double shot espresso murni.'
          : 'Baked fresh daily at 06:00 before doors unlock for regulars. Ladyfingers steeped in our double espresso concentrate.'
      };
    }
  };

  const feature = getFeatureAsset();

  return (
    <section id="menu-catalog" className="w-full py-20 md:py-28 px-4 md:px-8 lg:px-12 bg-[#faf6f0] dark:bg-[#0d0b09] transition-colors duration-400">
      {/* Title & Category Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-[0.24em] uppercase text-[#8c5e39] dark:text-[#e6b17e]">
            03 — {lang === 'id' ? 'DAFTAR HIDANGAN' : 'THE OFFERINGS'}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal">
            {lang === 'id' ? 'Kopi Utama. Tinggallah Lebih Lama.' : 'Coffee first. Stay for the food.'}
          </h2>
        </div>

        {/* Tab Buttons — Smooth Sliding Pill */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#f0e7db] dark:bg-[#16120e] border border-[#8c5e39]/15 dark:border-[#e6b17e]/20 shadow-inner">
          {[
            { id: 'coffee', label: lang === 'id' ? 'Kopi & Seduhan' : 'Coffee & Pour' },
            { id: 'food', label: lang === 'id' ? 'Dapur & Makanan' : 'Kitchen & Mains' },
            { id: 'dessert', label: lang === 'id' ? 'Pastry & Manis' : 'Pastry & Sweets' },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className="relative text-xs font-bold uppercase tracking-[0.16em] py-2 sm:py-2.5 px-4 sm:px-5 rounded-full transition-colors duration-300 focus:outline-none cursor-pointer"
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeMenuTabPill"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-[#2c1a0e] dark:bg-[#e6b17e] shadow-[0_4px_16px_rgba(44,26,14,0.25)] dark:shadow-[0_4px_20px_rgba(230,177,126,0.35)]"
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isSelected
                      ? 'text-[#ffffff] dark:text-[#18110b]'
                      : 'text-[#6e5d4e] dark:text-[#a09485] hover:text-[#2c1a0e] dark:hover:text-[#f7f2ea]'
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Search & Delivery Integration Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
        {/* Search Input */}
        <div className="relative max-w-md w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8c8074] dark:text-[#8c7e6f]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === 'id'
                ? 'Cari menu (misal: V60, steak, dirty, tiramisu)...'
                : 'Filter by keyword (e.g. V60, steak, dirty, tiramisu)...'
            }
            className="w-full bg-[#f3ece1] dark:bg-[#1b1713] border border-[#d5c8b8]/60 dark:border-[#3d342c] pl-10 pr-9 py-2.5 text-xs text-[#1e1b18] dark:text-[#f7f2ea] placeholder:text-[#8c8074] focus:outline-none focus:border-[#8c5e39] dark:focus:border-[#e6b17e] rounded transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8c8074] hover:text-[#1e1b18]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Quick Order Takeaway Delivery Links */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-[#8c8074] dark:text-[#8c7e6f] font-semibold text-[11px] uppercase tracking-wider hidden md:inline">
            {lang === 'id' ? 'Pesan Online:' : 'Online Order:'}
          </span>
          <a
            href="https://gofood.link/wheels-coffee-roasters-eyckman"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded border border-[#d5c8b8] dark:border-[#3d342c] bg-[#faf6f0] dark:bg-[#1b1713] text-[#2c1a0e] dark:text-[#f7f2ea] font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-colors inline-flex items-center gap-1"
          >
            <span>GoFood</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://food.grab.com/id/id/restaurant/wheels-coffee-roasters-eyckman"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded border border-[#d5c8b8] dark:border-[#3d342c] bg-[#faf6f0] dark:bg-[#1b1713] text-[#2c1a0e] dark:text-[#f7f2ea] font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-colors inline-flex items-center gap-1"
          >
            <span>GrabFood</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Menu Ledger Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Ledger Column */}
        <div className="lg:col-span-7 space-y-3">
          {filteredItems.length === 0 ? (
            <div className="p-10 text-center text-[#8c8074] bg-[#f3ece1] dark:bg-[#1b1713] rounded">
              {lang === 'id' ? 'Tidak ada menu yang sesuai kata kunci pencarian.' : 'No offerings match your search query.'}
            </div>
          ) : (
            filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group py-4 px-6 bg-[#f3ece1]/60 dark:bg-[#14110e] hover:bg-[#f3ece1] dark:hover:bg-[#1b1713] transition-all duration-300 border-b border-[#d5c8b8]/40 dark:border-[#3d342c]/50 rounded-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  {/* Item Image Thumbnail */}
                  <div
                    onClick={() => onOpenLightbox(item.image)}
                    className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded overflow-hidden bg-[#d5c8b8]/30 cursor-pointer shadow-sm group-hover:scale-105 transition-transform"
                    title={lang === 'id' ? 'Klik untuk memperbesar foto' : 'Click to inspect photo'}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-lg md:text-xl text-[#2c1a0e] dark:text-[#f7f2ea] font-medium group-hover:text-[#8c5e39] dark:group-hover:text-[#e6b17e] transition-colors">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#f7d7be] dark:bg-[#3d2a1b] text-[#4a280e] dark:text-[#e6b17e] font-bold rounded">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-base font-bold text-[#8c5e39] dark:text-[#e6b17e] shrink-0 font-mono">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-xs text-[#5c534a] dark:text-[#c4b8aa] leading-relaxed">
                      {item.desc[lang]}
                    </p>

                    {/* Tags & Dietary */}
                    <div className="flex flex-wrap items-center gap-2 pt-1 text-[10px] font-semibold uppercase tracking-wider text-[#8c8074] dark:text-[#8c7e6f]">
                      {item.tags.map((t, idx) => (
                        <span key={idx}>
                          {t} {idx < item.tags.length - 1 && '•'}
                        </span>
                      ))}
                      {item.dietary && item.dietary.map((d, idx) => (
                        <span key={idx} className="text-emerald-600 dark:text-emerald-400 font-bold">
                          [{d}]
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Right Feature Column with Dynamic Pairing */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div
            className="relative w-full aspect-[4/5] bg-[#f3ece1] dark:bg-[#1b1713] overflow-hidden group cursor-pointer shadow-xl rounded-sm"
            onClick={() => onOpenLightbox(feature.image)}
          >
            <img
              src={feature.image}
              alt="Featured culinary pairing at Wheels Coffee"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#1e150f]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#ffffff] font-bold bg-[#0d0b09]/80 px-3 py-1.5 backdrop-blur-sm rounded">
                {lang === 'id' ? 'Klik untuk Memperbesar Foto HD' : 'Click to Inspect HD Image'}
              </span>
            </div>
          </div>

          <div className="bg-[#f3ece1] dark:bg-[#1b1713] p-6 border-l-4 border-[#8c5e39] dark:border-[#e6b17e] shadow-md rounded-r">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8c5e39] dark:text-[#e6b17e]">
              {feature.title}
            </span>
            <p className="text-xs text-[#5c534a] dark:text-[#c4b8aa] mt-2 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
