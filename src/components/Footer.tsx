import React from 'react';
import { Language } from '../types';
import { Coffee, MapPin, Instagram, Phone, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f3ece1] dark:bg-[#090807] border-t border-[#d5c8b8]/60 dark:border-[#3d342c] transition-colors duration-400">
      <div className="w-full px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Brand & Philosophy */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Coffee className="w-5 h-5 text-[#8c5e39] dark:text-[#e6b17e]" />
                <h2 className="font-serif text-2xl md:text-3xl text-[#2c1a0e] dark:text-[#f7f2ea] tracking-[0.14em] uppercase font-normal">
                  WHEELS COFFEE ROASTERS
                </h2>
              </div>
              <p className="text-sm text-[#5c534a] dark:text-[#c4b8aa] max-w-sm leading-relaxed font-light">
                {lang === 'id'
                  ? 'Kopi, hidangan lezat, dan momen santai di Bandung. Sebuah ruang peristirahatan sensori di Jalan Prof. Eyckman.'
                  : 'Coffee, honest food & unhurried moments in Bandung. An elevated sensory sanctuary on Eyckman Street.'}
              </p>
            </div>

            {/* Other Bandung Branches Note */}
            <div className="space-y-1.5 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8c5e39] dark:text-[#e6b17e] block">
                {lang === 'id' ? 'OUTLET RESMI BANDUNG' : 'BANDUNG OUTLETS'}
              </span>
              <div className="text-xs text-[#5c534a] dark:text-[#c4b8aa] space-y-1">
                <div>• <strong>Eyckman 32</strong> (Roastery & Kitchen Atelier)</div>
                <div>• <strong>Heritage Riau</strong> (Jl. R.E. Martadinata No.65)</div>
                <div>• <strong>Heritage Juanda</strong> (Jl. Ir. H. Juanda No.256)</div>
              </div>
            </div>

            <div className="text-[11px] font-bold tracking-[0.2em] text-[#8c8074] dark:text-[#8c7e6f] uppercase">
              EYCKMAN • BANDUNG • EST. 2016
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="block text-xs font-bold tracking-[0.2em] text-[#2c1a0e] dark:text-[#e6b17e] uppercase">
              {lang === 'id' ? 'NAVIGASI UTAMA' : 'NAVIGATION'}
            </span>
            <nav className="flex flex-col space-y-2.5 text-xs font-medium">
              <a href="#home" className="text-[#5c534a] dark:text-[#c4b8aa] hover:text-[#2c1a0e] dark:hover:text-[#ffffff] transition-colors">
                {lang === 'id' ? 'Beranda & Sanctuary' : 'Home & Sanctuary'}
              </a>
              <a href="#philosophy" className="text-[#5c534a] dark:text-[#c4b8aa] hover:text-[#2c1a0e] dark:hover:text-[#ffffff] transition-colors">
                {lang === 'id' ? 'Filosofi Sangrai' : 'Our Philosophy'}
              </a>
              <a href="#roaster" className="text-[#5c534a] dark:text-[#c4b8aa] hover:text-[#2c1a0e] dark:hover:text-[#ffffff] transition-colors">
                {lang === 'id' ? 'Profil Mesin Roaster' : 'Roaster & Cupping'}
              </a>
              <a href="#matchmaker" className="text-[#5c534a] dark:text-[#c4b8aa] hover:text-[#2c1a0e] dark:hover:text-[#ffffff] transition-colors">
                {lang === 'id' ? 'Sommelier Kopi (AI Matcher)' : 'Flavor Matchmaker'}
              </a>
              <a href="#menu-catalog" className="text-[#5c534a] dark:text-[#c4b8aa] hover:text-[#2c1a0e] dark:hover:text-[#ffffff] transition-colors">
                {lang === 'id' ? 'Daftar Menu & Kuliner' : 'Offerings & Menu'}
              </a>
              <a href="#shop-beans" className="text-[#5c534a] dark:text-[#c4b8aa] hover:text-[#2c1a0e] dark:hover:text-[#ffffff] transition-colors">
                {lang === 'id' ? 'Beli Biji Kopi (Shop Beans)' : 'Buy Roasted Beans'}
              </a>
              <a href="#reservation-anchor" className="text-[#5c534a] dark:text-[#c4b8aa] hover:text-[#2c1a0e] dark:hover:text-[#ffffff] transition-colors">
                {lang === 'id' ? 'Reservasi Meja' : 'Table Reservation'}
              </a>
            </nav>
          </div>

          {/* Column 3: Atelier & Socials */}
          <div className="md:col-span-4 space-y-4">
            <span className="block text-xs font-bold tracking-[0.2em] text-[#2c1a0e] dark:text-[#e6b17e] uppercase">
              {lang === 'id' ? 'KONTAK & KUNJUNGAN' : 'ATELIER & CONTACT'}
            </span>
            <div className="space-y-3 text-xs text-[#5c534a] dark:text-[#c4b8aa]">
              <p className="leading-relaxed">
                Jl. Prof. Eyckman No.32, Pasteur,<br />
                Kec. Sukajadi, Kota Bandung,<br />
                Jawa Barat 40161, Indonesia
              </p>
              <p className="leading-relaxed">
                {lang === 'id' ? 'Buka Setiap Hari:' : 'Open Daily:'}<br />
                <span className="text-[#2c1a0e] dark:text-[#f7f2ea] font-bold text-sm">07:00 — Late</span>
              </p>
              <div className="pt-2 flex flex-col space-y-1.5">
                <span className="block text-[10px] font-bold tracking-[0.16em] uppercase text-[#8c8074] dark:text-[#8c7e6f]">
                  MEDIA SOSIAL
                </span>
                <a
                  href="https://instagram.com/wheelscoffeeroasters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#8c5e39] dark:text-[#e6b17e] hover:underline transition-colors inline-flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@wheelscoffeeroasters</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-[#d5c8b8]/50 dark:border-[#3d342c] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#8c8074] dark:text-[#8c7e6f] text-[11px] font-semibold tracking-[0.14em] uppercase">
          <span>© 2026 Wheels Coffee Roasters. Eyckman Sanctuary. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#2c1a0e] dark:text-[#f7f2ea] hover:text-[#8c5e39] dark:hover:text-[#e6b17e] transition-colors"
            >
              <span>{lang === 'id' ? 'KEMBALI KE ATAS' : 'BACK TO TOP'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
