import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Coffee, Users, Star, Award } from "lucide-react";
import { Language } from "../types";

interface LiveStatsProps {
  lang: Language;
}

interface StatItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  target: number;
  suffix: string;
  labelId: string;
  labelEn: string;
  subId: string;
  subEn: string;
}

const STATS: StatItem[] = [
  {
    id: "cups",
    icon: Coffee,
    target: 1240,
    suffix: "+",
    labelId: "Cangkir Diseduh Hari Ini",
    labelEn: "Cups Brewed Today",
    subId: "Setiap cangkir dengan kalibrasi presisi",
    subEn: "Each cup calibrated with precision",
  },
  {
    id: "guests",
    icon: Users,
    target: 8400,
    suffix: "+",
    labelId: "Tamu Bahagia",
    labelEn: "Happy Guests",
    subId: "Menikmati racikan kami setiap bulan",
    subEn: "Enjoying our brews monthly",
  },
  {
    id: "rating",
    icon: Star,
    target: 49,
    suffix: "/50",
    labelId: "Rating Google",
    labelEn: "Google Rating",
    subId: "Dari 3.200+ ulasan terverifikasi",
    subEn: "From 3,200+ verified reviews",
  },
  {
    id: "awards",
    icon: Award,
    target: 14,
    suffix: " Awards",
    labelEn: "Roasting Awards",
    labelId: "Penghargaan Roasting",
    subId: "Kompetisi nasional & internasional",
    subEn: "National & international stages",
  },
];

const AnimatedCounter: React.FC<{ target: number; suffix: string; isFloat?: boolean; inView: boolean }> = ({
  target,
  suffix,
  isFloat = false,
  inView,
}) => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const steps = 40;
    const stepTime = duration / steps;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  const display = isFloat ? (val / 10).toFixed(1) : val.toLocaleString("id-ID");

  return (
    <span className="tabular-nums">
      {display}
      <span className="text-[#c48a4e] text-xl sm:text-2xl font-sans ml-0.5">{suffix}</span>
    </span>
  );
};

export const LiveStats: React.FC<LiveStatsProps> = ({ lang }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Wheels Roasters Live Statistics"
      className="w-full py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-[#f5ede3] to-[#faf6f0] dark:from-[#14100c] dark:to-[#1a140f] border-y border-[#e6b17e]/15 transition-colors duration-400"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((item, idx) => {
            const Icon = item.icon;
            const isFloat = item.id === "rating";
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/70 dark:bg-[#201812]/70 backdrop-blur-md border border-[#e6b17e]/25 shadow-[0_8px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e6b17e]/15 border border-[#e6b17e]/30 flex items-center justify-center text-[#8c5e39] dark:text-[#e6b17e]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Live Metric" />
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#2c1a0e] dark:text-[#f7f2ea] tracking-tight">
                  <AnimatedCounter
                    target={item.target}
                    suffix={item.suffix}
                    isFloat={isFloat}
                    inView={inView}
                  />
                </div>
                <h3 className="mt-2 text-sm font-semibold text-[#5a4435] dark:text-[#dfcfbe]">
                  {lang === "id" ? item.labelId : item.labelEn}
                </h3>
                <p className="mt-1 text-xs text-[#8c8074] dark:text-[#9e9081] leading-relaxed">
                  {lang === "id" ? item.subId : item.subEn}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
