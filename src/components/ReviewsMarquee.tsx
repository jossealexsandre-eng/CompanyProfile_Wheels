import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { REVIEWS_DATA } from '../data/content';
import { Star, ShieldCheck, Share2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ReviewsProps {
  lang: Language;
}

export const ReviewsMarquee: React.FC<ReviewsProps> = ({ lang }) => {
  const [counters, setCounters] = useState({
    rating: 0,
    reviews: 0,
    patrons: 0,
    positiveRate: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || animatedRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.85) {
        animatedRef.current = true;
        const startTime = performance.now();
        // Longer duration for an elegant, smooth roll (4.2 seconds)
        const duration = 4200;
        const animate = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Quintic ease-out curve for smooth deceleration
          const easeOut = 1 - Math.pow(1 - progress, 4);

          setCounters({
            rating: Number((4.8 * easeOut).toFixed(1)),
            reviews: Math.round(5036 * easeOut),
            patrons: Math.round(982 * easeOut),
            positiveRate: Number((99.4 * easeOut).toFixed(1)),
          });

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="w-full py-20 md:py-28 bg-[#f3ece1] dark:bg-[#14110e] overflow-hidden transition-colors duration-400"
    >
      <div className="px-4 md:px-8 lg:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#d5c8b8]/50 dark:border-[#3d342c]"
        >
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-[0.24em] uppercase text-[#8c5e39] dark:text-[#e6b17e]">
              {lang === 'id' ? 'ULASAN TERVERIFIKASI GOOGLE' : 'VERIFIED GOOGLE REVIEWS'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal leading-tight">
              {lang === 'id' ? 'Suara & Cerita dari Eyckman 32.' : 'Voices & Stories from Eyckman 32.'}
            </h2>
          </div>

          <a
            href="https://maps.google.com/?q=Wheels+Coffee+Roasters+Eyckman+Bandung"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-[0.16em] text-[#8c5e39] dark:text-[#e6b17e] hover:underline inline-flex items-center gap-1.5 transition-all duration-300 hover:scale-105"
          >
            <span>{lang === 'id' ? 'Buka di Google Maps' : 'View on Google Maps'}</span>
            <Share2 className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Trust Metric Counters Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
        >
          {/* Metric 1 */}
          <div className="space-y-1 transition-all duration-500">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-4xl sm:text-5xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal leading-none tabular-nums">
                {counters.rating || '4.8'}
              </span>
              <span className="font-serif text-2xl text-[#8c5e39] dark:text-[#e6b17e]">★</span>
            </div>
            <div className="flex items-center gap-0.5 text-[#8c5e39] dark:text-[#e6b17e]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#8c8074] dark:text-[#c4b8aa] pt-1">
              {lang === 'id' ? 'Nilai Rata-rata Google' : 'Google Rating Average'}
            </p>
          </div>

          {/* Metric 2 */}
          <div className="space-y-1 border-l border-[#d5c8b8]/50 dark:border-[#3d342c] pl-4 md:pl-8 transition-all duration-500">
            <div className="flex items-baseline">
              <span className="font-serif text-4xl sm:text-5xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal leading-none tabular-nums">
                {(counters.reviews || 5036).toLocaleString()}
              </span>
              <span className="font-serif text-2xl text-[#8c5e39] dark:text-[#e6b17e]">+</span>
            </div>
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#8c8074] dark:text-[#c4b8aa] pt-1">
              {lang === 'id' ? 'Ulasan Terverifikasi' : 'Verified Reviews'}
            </p>
          </div>

          {/* Metric 3 */}
          <div className="space-y-1 border-l-0 lg:border-l border-[#d5c8b8]/50 dark:border-[#3d342c] pl-0 lg:pl-8 transition-all duration-500">
            <div className="flex items-baseline">
              <span className="font-serif text-4xl sm:text-5xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal leading-none tabular-nums">
                {(counters.patrons || 982).toLocaleString()}
              </span>
              <span className="font-serif text-2xl text-[#8c5e39] dark:text-[#e6b17e]">+</span>
            </div>
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#8c8074] dark:text-[#c4b8aa] pt-1">
              {lang === 'id' ? 'Pelanggan Setia / Minggu' : 'Loyal Patrons / Week'}
            </p>
          </div>

          {/* Metric 4 */}
          <div className="space-y-1 border-l border-[#d5c8b8]/50 dark:border-[#3d342c] pl-4 md:pl-8 transition-all duration-500">
            <div className="flex items-baseline">
              <span className="font-serif text-4xl sm:text-5xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal leading-none tabular-nums">
                {counters.positiveRate || '99.4'}
              </span>
              <span className="font-serif text-2xl text-[#8c5e39] dark:text-[#e6b17e]">%</span>
            </div>
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#8c8074] dark:text-[#c4b8aa] pt-1">
              {lang === 'id' ? 'Tingkat Rekomendasi Tamu' : 'Recommendation Rate'}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Infinite Seamless Marquee Carousel */}
      <div className="w-full relative select-none py-3 overflow-hidden">
        {/* Soft Side Gradient Fades */}
        <div className="absolute left-0 inset-y-0 w-16 md:w-36 bg-gradient-to-r from-[#f3ece1] dark:from-[#14110e] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 inset-y-0 w-16 md:w-36 bg-gradient-to-l from-[#f3ece1] dark:from-[#14110e] to-transparent z-10 pointer-events-none"></div>

        <div className="marquee-track flex items-stretch gap-6 pl-6">
          {[...REVIEWS_DATA, ...REVIEWS_DATA, ...REVIEWS_DATA].map((rev, index) => (
            <div
              key={`${rev.id}-${index}`}
              className="w-[330px] sm:w-[400px] shrink-0 bg-[#faf6f0] dark:bg-[#1b1713] p-6 sm:p-7 rounded-2xl border border-[#d5c8b8]/50 dark:border-[#3d342c] flex flex-col justify-between hover:border-[#8c5e39] dark:hover:border-[#e6b17e] hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_35px_rgba(0,0,0,0.4)] transition-all duration-500 shadow-sm cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#8c5e39] dark:text-[#e6b17e]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#8c8074] dark:text-[#8c7e6f]">
                    {rev.time[lang]}
                  </span>
                </div>

                <p className="font-serif text-lg text-[#2c1a0e] dark:text-[#f7f2ea] font-normal italic leading-snug">
                  “{rev.quote[lang]}”
                </p>

                <p className="text-xs text-[#5c534a] dark:text-[#c4b8aa] mt-3 line-clamp-3 leading-relaxed">
                  {rev.body[lang]}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#d5c8b8]/40 dark:border-[#3d342c] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f3ece1] dark:bg-[#241f1a] text-[#2c1a0e] dark:text-[#f7f2ea] text-xs flex items-center justify-center font-bold">
                    {rev.initials}
                  </div>
                  <div>
                    <span className="block text-xs font-bold leading-tight text-[#2c1a0e] dark:text-[#f7f2ea]">
                      {rev.author}
                    </span>
                    <span className="block text-[10px] text-[#8c8074] dark:text-[#8c7e6f] uppercase font-semibold">
                      {rev.role}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[#8c5e39] dark:text-[#e6b17e] text-[10px] font-bold tracking-widest uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
