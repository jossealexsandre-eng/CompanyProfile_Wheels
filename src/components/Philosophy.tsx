import React from 'react';
import { Language } from '../types';
import { Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface PhilosophyProps {
  lang: Language;
}

const headlineId = 'Kopi yang jujur tidak membutuhkan kepalsuan. Ia menuntut ketelitian, api yang tenang, dan ruang untuk jeda sejenak.';
const headlineEn = 'Good coffee doesn’t need pretension. It demands discipline, honest fire, and room to pause.';

const quoteId = 'Kopi yang disangrai dengan niat baik, hidangan yang menenangkan jiwa, dan ruangan yang dirancang untuk memperlambat ritme hidup.';
const quoteEn = 'Thoughtfully roasted coffee, comforting food, and a space crafted for slowing down.';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.15,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

export const Philosophy: React.FC<PhilosophyProps> = ({ lang }) => {
  const headlineWords = (lang === 'id' ? headlineId : headlineEn).split(' ');
  const quoteWords = (lang === 'id' ? quoteId : quoteEn).split(' ');

  return (
    <section id="philosophy" className="w-full py-20 md:py-28 px-4 md:px-8 lg:px-12 bg-[#faf6f0] dark:bg-[#0d0b09] transition-colors duration-400">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
        {/* Left Column Tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3"
        >
          <span className="text-xs font-bold tracking-[0.26em] uppercase text-[#8c5e39] dark:text-[#e6b17e] block mb-1">
            01 — {lang === 'id' ? 'FILOSOFI KAMI' : 'OUR PHILOSOPHY'}
          </span>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8c8074] dark:text-[#8c7e6f]">
            The Eyckman Standard
          </span>
        </motion.div>

        {/* Right Column Content */}
        <div className="lg:col-span-9 space-y-8">
          {/* Word-by-Word Reveal Heading */}
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal leading-tight max-w-3xl flex flex-wrap gap-x-2.5 gap-y-1"
          >
            {headlineWords.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="md:col-span-7 space-y-5 text-base text-[#5c534a] dark:text-[#c4b8aa] leading-relaxed"
            >
              <p>
                {lang === 'id'
                  ? 'Berdiri di Bandung sejak 2016, Wheels Coffee Roasters mendirikan sanctuary Eyckman 32 dengan satu niat tulus: menanggalkan keramaian performatif kafe modern dan berfokus pada inti yang sesungguhnya—penelusuran biji kopi berintegritas, kurva sangrai transparan di mesin drum cast-iron, serta hidangan kuliner yang diracik sepenuh hati.'
                  : 'Founded in Bandung in 2016, Wheels Coffee Roasters established its Eyckman 32 sanctuary with a clear focus: stripping away the performative noise of modern cafes while elevating what matters—ethical bean provenance, transparent roasting curves on cast-iron drums, and dishes prepared with true culinary rigour.'}
              </p>
              <p>
                {lang === 'id'
                  ? 'Di sini, langit-langit tinggi menangkap hembusan udara sejuk Bandung yang lembut, menembus kaca industrial ke atas meja kayu jati solid dan semen poles. Dari seduhan V60 single origin di pagi hari hingga steak prime-cut dan saus reduksi saat senja, suasananya senantiasa tenang dan bersahaja.'
                  : 'Here, high ceiling voids capture Bandung’s temperate mountain breeze through industrial steel frames onto solid timber and polished stone. Whether enjoying an unhurried morning single-origin V60 or prime-cut steaks at dusk, the atmosphere retains its quiet rhythm.'}
              </p>

              {/* Pillars */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#d5c8b8]/40 dark:border-[#3d342c]">
                <div>
                  <span className="block text-2xl font-serif text-[#8c5e39] dark:text-[#e6b17e]">100%</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8c8074] dark:text-[#c4b8aa]">
                    {lang === 'id' ? 'Specialty Arabica' : 'Specialty Arabica'}
                  </span>
                </div>
                <div>
                  <span className="block text-2xl font-serif text-[#8c5e39] dark:text-[#e6b17e]">Direct</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8c8074] dark:text-[#c4b8aa]">
                    {lang === 'id' ? 'Petani Mitra' : 'Farm Direct Trade'}
                  </span>
                </div>
                <div>
                  <span className="block text-2xl font-serif text-[#8c5e39] dark:text-[#e6b17e]">Cast Iron</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8c8074] dark:text-[#c4b8aa]">
                    {lang === 'id' ? 'Sangrai On-Site' : 'On-Site Roastery'}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Spatial Code Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="md:col-span-5 bg-[#f3ece1] dark:bg-[#1b1713] p-7 md:p-8 flex flex-col justify-between border-l-2 border-[#8c5e39] dark:border-[#e6b17e] transition-colors rounded-r-2xl"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#8c5e39] dark:text-[#e6b17e]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'FILOSOFI RUANG' : 'SPATIAL CODE'}</span>
                </div>
                <motion.p
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="font-serif text-xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal italic leading-relaxed flex flex-wrap gap-x-1.5 gap-y-0.5"
                >
                  <span className="inline-block">“</span>
                  {quoteWords.map((word, i) => (
                    <motion.span key={i} variants={wordVariants} className="inline-block">
                      {word}
                    </motion.span>
                  ))}
                  <span className="inline-block">”</span>
                </motion.p>
              </div>

              <div className="pt-8 text-[#8c8074] dark:text-[#8c7e6f] text-[11px] font-semibold uppercase tracking-[0.2em] flex items-center justify-between">
                <span>Eyckman Sanctuary</span>
                <span>Bandung, ID</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
