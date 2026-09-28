import React, { useRef } from 'react';
import { Language } from '../types';
import { HD_ASSETS } from '../data/content';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';

interface FavoritesProps {
  lang: Language;
  onOpenLightbox: (src: string) => void;
}

interface CardItem {
  num: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  offset: string;
}

const TiltCard: React.FC<{
  card: CardItem;
  idx: number;
  onOpenLightbox: (src: string) => void;
}> = ({ card, idx, onOpenLightbox }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [7, -7]), { stiffness: 280, damping: 26 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-7, 7]), { stiffness: 280, damping: 26 });
  const glareX = useTransform(x, [0, 1], [0, 100]);
  const glareY = useTransform(y, [0, 1], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const clientY = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenLightbox(card.image)}
      style={{
        perspective: 1000,
      }}
      className={`space-y-4 group cursor-pointer ${card.offset}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#f3ece1] dark:bg-[#1b1713] shadow-[0_12px_35px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_45px_rgba(0,0,0,0.5)] border border-[#8c5e39]/15 dark:border-[#e6b17e]/20 transition-shadow duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] dark:group-hover:shadow-[0_20px_60px_rgba(230,177,126,0.2)]"
      >
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Dynamic Specular Glare Reflection */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl mix-blend-overlay"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle 280px at ${gx}% ${gy}%, rgba(255,255,255,0.45), transparent 75%)`
            ),
          }}
        />

        {/* Number Badge */}
        <div className="absolute top-4 left-4 bg-[#faf6f0]/95 dark:bg-[#0d0b09]/95 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#2c1a0e] dark:text-[#e6b17e] rounded-full shadow border border-[#8c5e39]/20 dark:border-[#e6b17e]/30">
          {card.num}
        </div>
      </motion.div>

      <div>
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8c5e39] dark:text-[#e6b17e]">
          {card.tag}
        </span>
        <h3 className="font-serif text-2xl text-[#2c1a0e] dark:text-[#f7f2ea] mt-1 group-hover:text-[#8c5e39] dark:group-hover:text-[#e6b17e] transition-colors">
          {card.title}
        </h3>
        <p className="text-xs text-[#5c534a] dark:text-[#c4b8aa] mt-1.5 leading-relaxed">
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
};

export const CuratedFavorites: React.FC<FavoritesProps> = ({ lang, onOpenLightbox }) => {
  const cards: CardItem[] = [
    {
      num: 'No. 01 • Culinary',
      tag: lang === 'id' ? 'SPESIAL DAPUR' : 'KITCHEN SPECIAL',
      title: 'Tokyo Steak & Demiglace',
      desc:
        lang === 'id'
          ? 'Daging striploin empuk dipanggang di atas cast iron panas, disajikan dengan charred garlic butter dan saus shoyu khas.'
          : 'Tender prime striploin seared hot on cast steel, crowned with garlic compound butter and rich shoyu reduction.',
      image: HD_ASSETS.tokyoSteak,
      offset: '',
    },
    {
      num: 'No. 02 • Espresso Bar',
      tag: lang === 'id' ? 'SIGNATURE SIP' : 'SIGNATURE SIP',
      title: 'Cascading Iced Specialty Latte',
      desc:
        lang === 'id'
          ? 'Lapisan susu segar lembut dan double ristretto yang dituangkan di atas balok es bening kristal buatan tangan.'
          : 'Oat and whole milk blend layered beneath a double ristretto shot poured slowly over hand-cut block ice.',
      image: HD_ASSETS.cascadingLatte,
      offset: 'md:-mt-8',
    },
    {
      num: 'No. 03 • Slow Bar',
      tag: lang === 'id' ? 'RITUAL PAGI' : 'MORNING RITUAL',
      title: 'Precision V60 Pour Over',
      desc:
        lang === 'id'
          ? 'Diseduh manual pada 93°C dengan rasio presisi menggunakan profil sangrai ultra light untuk aroma melati dan rasa persik jernih.'
          : 'Hand dripped at 93°C using our ultra light roast profile for vivid jasmine clarity and sweet bergamot finish.',
      image: HD_ASSETS.pourOver,
      offset: '',
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 px-4 md:px-8 lg:px-12 bg-[#faf6f0] dark:bg-[#0d0b09] transition-colors duration-400">
      <div className="mb-12 space-y-2">
        <span className="text-xs font-bold tracking-[0.26em] uppercase text-[#8c5e39] dark:text-[#e6b17e]">
          {lang === 'id' ? 'PILIHAN UTAMA' : 'CURATED SIGNATURES'}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal">
          {lang === 'id' ? 'Menu Paling Digemari.' : 'A Few Favorites.'}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <TiltCard key={idx} card={card} idx={idx} onOpenLightbox={onOpenLightbox} />
        ))}
      </div>
    </section>
  );
};
