import React from 'react';
import { Language } from '../types';
import { MapPin, Navigation, Clock, Phone, Calendar, Car } from 'lucide-react';

interface LocationProps {
  lang: Language;
}

export const LocationSection: React.FC<LocationProps> = ({ lang }) => {
  return (
    <section id="visit" className="w-full py-20 md:py-28 px-4 md:px-8 lg:px-12 bg-[#faf6f0] dark:bg-[#0d0b09] transition-colors duration-400">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Address & Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-[0.24em] uppercase text-[#8c5e39] dark:text-[#e6b17e]">
              05 — {lang === 'id' ? 'LOKASI & KUNJUNGAN' : 'FIND US & VISIT'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal">
              Eyckman 32 Bandung
            </h2>
          </div>

          <div className="space-y-4 text-sm text-[#5c534a] dark:text-[#c4b8aa]">
            <div className="p-4 rounded-lg bg-[#f3ece1] dark:bg-[#14110e] border border-[#d5c8b8]/50 dark:border-[#3d342c] space-y-1">
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#8c5e39] dark:text-[#e6b17e]">
                <MapPin className="w-3.5 h-3.5" />
                {lang === 'id' ? 'Alamat Lengkap' : 'Civic Address'}
              </span>
              <p className="text-sm font-medium text-[#1e1b18] dark:text-[#f7f2ea] leading-relaxed">
                Jl. Prof. Eyckman No.32, Pasteur, Kec. Sukajadi,<br />
                Kota Bandung, Jawa Barat 40161, Indonesia
              </p>
              <span className="text-xs text-[#8c8074] dark:text-[#8c7e6f] block pt-1">
                {lang === 'id' ? '5 menit dari Gerbang Tol Pasteur • Sebelah RS Hasan Sadikin' : '5 mins from Pasteur Toll Gate • Near Hasan Sadikin Hospital'}
              </span>
            </div>

            <div className="p-4 rounded-lg bg-[#f3ece1] dark:bg-[#14110e] border border-[#d5c8b8]/50 dark:border-[#3d342c] space-y-1">
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#8c5e39] dark:text-[#e6b17e]">
                <Clock className="w-3.5 h-3.5" />
                {lang === 'id' ? 'Jam Buka Harian' : 'Sanctuary Hours'}
              </span>
              <p className="text-base font-bold text-[#1e1b18] dark:text-[#f7f2ea]">
                {lang === 'id' ? 'Buka Setiap Hari • 07:00 — Late' : 'Open Daily • 07:00 — Late'}
              </p>
              <p className="text-xs text-[#8c8074] dark:text-[#8c7e6f]">
                {lang === 'id' ? 'Dapur Tutup: 21:30 • Coffee Bar Tutup: 22:30 WIB' : 'Kitchen closes at 21:30 • Coffee bar open until 22:30'}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#f3ece1] dark:bg-[#14110e] border border-[#d5c8b8]/50 dark:border-[#3d342c] space-y-1">
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#8c5e39] dark:text-[#e6b17e]">
                <Phone className="w-3.5 h-3.5" />
                {lang === 'id' ? 'Kontak Langsung' : 'Direct Line & WhatsApp'}
              </span>
              <a
                href="https://wa.me/6281222081402"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-[#1e1b18] dark:text-[#f7f2ea] hover:text-[#8c5e39] dark:hover:text-[#e6b17e] transition-colors block font-mono"
              >
                +62 812 2208 1402
              </a>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="https://maps.google.com/?q=Wheels+Coffee+Roasters+Eyckman+Bandung"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#2c1a0e] dark:bg-[#e6b17e] text-[#ffffff] dark:text-[#1e150f] text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#422d1d] dark:hover:bg-[#f5deca] transition-all rounded shadow inline-flex items-center gap-2"
            >
              <span>{lang === 'id' ? 'PETUNJUK ARAH (MAPS)' : 'GET DIRECTIONS'}</span>
              <Navigation className="w-4 h-4" />
            </a>

            <a
              href="#reservation-anchor"
              className="px-6 py-3.5 bg-[#f3ece1] dark:bg-[#1b1713] text-[#2c1a0e] dark:text-[#f7f2ea] text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#e9e0d2] dark:hover:bg-[#241f1a] transition-all rounded border border-[#d5c8b8]/60 dark:border-[#3d342c] inline-flex items-center gap-2"
            >
              <span>{lang === 'id' ? 'BOOKING MEJA' : 'BOOK A TABLE'}</span>
              <Calendar className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Real Interactive Google Maps Column */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="w-full h-[420px] rounded-xl overflow-hidden border-2 border-[#d5c8b8]/60 dark:border-[#3d342c] shadow-2xl relative bg-[#f3ece1] dark:bg-[#14110e]">
            {/* Real Interactive Google Maps Embed for Wheels Coffee Roasters Eyckman */}
            <iframe
              title="Wheels Coffee Roasters Eyckman Bandung Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9701198642343!2d107.5991!3d-6.8924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65e6488d01d%3A0xa193630f9a2ea9c!2sJl.%20Prof.%20Eyckman%20No.32%2C%20Pasteur%2C%20Kec.%20Sukajadi%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040161!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              className="w-full h-full border-0 filter saturate-90 dark:invert-[0.9] dark:hue-rotate-180 dark:contrast-125"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Floating Eyckman Badge on Map */}
            <div className="absolute top-4 left-4 bg-[#faf6f0]/95 dark:bg-[#0d0b09]/95 backdrop-blur-md px-3.5 py-2 rounded border border-[#d5c8b8]/60 dark:border-[#3d342c] shadow-md pointer-events-none">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8c5e39] dark:text-[#e6b17e] block">
                Eyckman 32
              </span>
              <span className="text-xs font-semibold text-[#1e1b18] dark:text-[#f7f2ea]">
                Wheels Coffee Roasters
              </span>
            </div>
          </div>

          {/* Valet & Parking Notice */}
          <div className="mt-4 p-4 rounded-lg bg-[#f3ece1] dark:bg-[#14110e] border border-[#d5c8b8]/50 dark:border-[#3d342c] flex items-center justify-between gap-4 text-xs text-[#5c534a] dark:text-[#c4b8aa]">
            <div className="flex items-center gap-2.5">
              <Car className="w-4 h-4 text-[#8c5e39] dark:text-[#e6b17e] shrink-0" />
              <span>
                {lang === 'id'
                  ? 'Fasilitas Valet Parking tersedia di lobi masuk untuk kenyamanan parkir mobil Anda.'
                  : 'Complimentary Valet Parking service available at the front entrance.'}
              </span>
            </div>
            <span className="font-bold text-[#8c5e39] dark:text-[#e6b17e] shrink-0 uppercase tracking-wider text-[11px]">
              Valet Available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
