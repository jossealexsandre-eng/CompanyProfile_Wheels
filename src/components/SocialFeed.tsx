import React from "react";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";
import { Language } from "../types";
import { motion } from "motion/react";
import { HD_ASSETS } from "../data/content";

interface SocialFeedProps { lang: Language; }

const POSTS = [
  { img: HD_ASSETS.interiorAtelier, likes: 2103, comments: 72, caption: "Our roastery — where every bean becomes a story. Open 07:00 — 22:30 WIB ✨ #WheelsCoffee #Bandung" },
  { img: HD_ASSETS.baristaPouring, likes: 1241, comments: 38, caption: "Freshly roasted on our cast-iron drum. The whole room smells incredible. 🔥 #SpecialtyCoffee" },
  { img: HD_ASSETS.pourOver, likes: 978, comments: 21, caption: "V60 pour over. Patience makes the perfect cup. ⏳ #V60 #SlowCoffee" },
  { img: HD_ASSETS.cappuccino, likes: 1857, comments: 54, caption: "Classic cappuccino, always. 🌿 Jl. Eyckman No. 32, Bandung" },
  { img: HD_ASSETS.cuppingSession, likes: 643, comments: 17, caption: "Cupping session this Saturday — come taste the origins. DM for details! ☕" },
  { img: HD_ASSETS.outdoorGarden, likes: 889, comments: 29, caption: "Japandi meets Bandung. Our quiet garden awaits. 🌱 #CafeVibes #Bandung" },
];

export const SocialFeed: React.FC<SocialFeedProps> = ({ lang }) => {
  return (
    <section id="social-feed" className="w-full py-20 md:py-28 px-4 md:px-8 lg:px-12 bg-[#f4efe8] dark:bg-[#0e0c09] transition-colors duration-400">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#8c5e39] dark:text-[#e6b17e]">
              {lang === "id" ? "MOMEN • INSTAGRAM FEED" : "MOMENTS • INSTAGRAM FEED"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal uppercase">
              @wheels.coffee.roasters
            </h2>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8c5e39] dark:text-[#e6b17e] hover:opacity-70 transition-opacity shrink-0">
            <ExternalLink className="w-4 h-4" />
            <span>{lang === "id" ? "IKUTI KAMI" : "FOLLOW US"}</span>
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {POSTS.map((post, i) => (
            <motion.a key={i} href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.06 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer block">
              <img src={post.img} alt={`Wheels Coffee Instagram ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-[#1a0f08]/0 group-hover:bg-[#1a0f08]/75 transition-all duration-300 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 p-3">
                <div className="flex items-center gap-5">
                  <span className="flex items-center gap-1.5 text-white text-sm font-semibold"><Heart className="w-4 h-4 fill-white" /> {post.likes.toLocaleString()}</span>
                  <span className="flex items-center gap-1.5 text-white text-sm font-semibold"><MessageCircle className="w-4 h-4 fill-white" /> {post.comments}</span>
                </div>
                <p className="text-white/80 text-[10px] text-center line-clamp-2 leading-relaxed">{post.caption}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full border border-[#8c5e39]/40 dark:border-[#e6b17e]/30 text-[#8c5e39] dark:text-[#e6b17e] text-xs font-bold uppercase tracking-[0.18em] hover:bg-[#8c5e39] hover:text-white dark:hover:bg-[#e6b17e] dark:hover:text-[#2c1a0e] transition-all duration-300">
            <span>{lang === "id" ? "LIHAT SEMUA DI INSTAGRAM" : "VIEW ALL ON INSTAGRAM"}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
