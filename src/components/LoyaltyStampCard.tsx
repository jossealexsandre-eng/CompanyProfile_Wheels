import React, { useState } from "react";
import { Coffee, Gift, Award, Sparkles, MessageCircle } from "lucide-react";
import { Language } from "../types";
import { motion } from "motion/react";

interface LoyaltyStampCardProps {
  lang: Language;
}

const STAMP_COUNT = 10;

export const LoyaltyStampCard: React.FC<LoyaltyStampCardProps> = ({ lang }) => {
  const [collected, setCollected] = useState(4);

  const toggleStamp = (i: number) => {
    if (i === collected) setCollected(i + 1);
    else if (i === collected - 1) setCollected(i);
  };

  const rewards = [
    { at: 3, label: lang === "id" ? "Minuman Gratis" : "Free Drink", icon: Coffee },
    { at: 6, label: lang === "id" ? "Pastry Gratis" : "Free Pastry", icon: Gift },
    { at: 10, label: lang === "id" ? "Private Roasting Session" : "Private Roasting Session", icon: Award },
  ];

  return (
    <section
      id="loyalty"
      className="w-full py-20 md:py-28 px-4 md:px-8 lg:px-12 bg-[#faf6f0] dark:bg-[#100e0b] transition-colors duration-400"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#8c5e39] dark:text-[#e6b17e]">
            {lang === "id" ? "PROGRAM LOYALITAS • WHEELS REWARDS" : "LOYALTY PROGRAM • WHEELS REWARDS"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal uppercase">
            {lang === "id" ? "Stamp Card Digital" : "Digital Stamp Card"}
          </h2>
          <p className="text-sm text-[#8c8074] dark:text-[#a09585] max-w-md mx-auto leading-relaxed">
            {lang === "id"
              ? "Kumpulkan stamp setiap kunjungan dan nikmati hadiah eksklusif dari kami."
              : "Collect a stamp with every visit and enjoy exclusive rewards from our team."}
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2c1a0e] via-[#3d2213] to-[#1a1008] p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-[#e6b17e]/20"
        >
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#e6b17e]/8 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#8c5e39]/10 blur-2xl pointer-events-none" />

          {/* Card Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#e6b17e] mb-1">
                WHEELS COFFEE ROASTERS
              </p>
              <h3 className="text-2xl font-serif text-[#f5deca] font-normal">Loyalty Rewards</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#e6b17e]/20 border border-[#e6b17e]/30 flex items-center justify-center">
              <Coffee className="w-6 h-6 text-[#e6b17e]" />
            </div>
          </div>

          {/* Stamps Grid */}
          <div className="grid grid-cols-5 gap-3 sm:gap-4 mb-8">
            {Array.from({ length: STAMP_COUNT }).map((_, i) => {
              const filled = i < collected;
              const isReward = rewards.find((r) => r.at === i + 1);
              return (
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => toggleStamp(i)}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  className={
                    "relative aspect-square rounded-2xl flex flex-col items-center justify-center border transition-all duration-300 cursor-pointer " +
                    (filled
                      ? "bg-gradient-to-br from-[#e6b17e] to-[#c48a4e] border-[#f5deca]/40 shadow-[0_4px_16px_rgba(230,177,126,0.35)] text-[#2c1a0e]"
                      : "bg-white/5 border-white/10 hover:border-[#e6b17e]/40 text-[#c4b8aa]")
                  }
                  aria-label={"Stamp " + (i + 1)}
                >
                  {filled ? (
                    <Coffee className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <span className="text-xs font-semibold">{i + 1}</span>
                  )}
                  {isReward && (
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-400 border border-[#2c1a0e] flex items-center justify-center text-[9px] text-[#2c1a0e] font-bold">
                      ★
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Milestones Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 text-xs text-[#c4b8aa]">
            {rewards.map((r) => (
              <div key={r.at} className="flex items-center gap-2 bg-black/20 p-2.5 rounded-xl border border-white/5">
                <r.icon className="w-4 h-4 text-[#e6b17e] shrink-0" />
                <span>
                  <strong className="text-[#f7f2ea]">{r.at} Stamps:</strong> {r.label}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#e6b17e]/10 border border-[#e6b17e]/25 p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-xs text-[#f5deca]">
              <Sparkles className="w-4 h-4 text-[#e6b17e] shrink-0" />
              <span>
                {lang === "id"
                  ? "Klaim stamp di kasir Wheels dengan menyebutkan no. telepon Anda."
                  : "Claim your stamp at Wheels cashier by mentioning your phone number."}
              </span>
            </div>
            <a
              href="https://wa.me/6281222081402?text=Halo%20Wheels%20Coffee%2C%20saya%20ingin%20cek%20status%20Wheels%20Rewards%20saya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e6b17e] hover:bg-[#d99f68] text-[#2c1a0e] font-semibold text-xs tracking-wider uppercase transition-colors shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              {lang === "id" ? "Tanya Kasir via WA" : "Ask via WhatsApp"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
