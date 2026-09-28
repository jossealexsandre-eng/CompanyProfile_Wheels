import React from 'react';
import { Language } from '../types';
import { Wifi, Car, Wind, Trees, Plug, ShieldCheck, HeartHandshake } from 'lucide-react';

interface AmenitiesProps {
  lang: Language;
}

export const Amenities: React.FC<AmenitiesProps> = ({ lang }) => {
  const items = [
    {
      icon: <Wind className="w-5 h-5 text-[#8c5e39] dark:text-[#e6b17e]" />,
      title: lang === 'id' ? 'Indoor AC Bebas Asap' : 'Non-Smoking Indoor AC',
      desc: lang === 'id' ? 'Suhu sejuk 22°C nyaman untuk kerja & santai keluarga' : 'Temperature-controlled 22°C for work & family dining'
    },
    {
      icon: <Trees className="w-5 h-5 text-[#8c5e39] dark:text-[#e6b17e]" />,
      title: lang === 'id' ? 'Outdoor Garden Sejuk' : 'Outdoor Garden Patio',
      desc: lang === 'id' ? 'Area terbuka asri untuk bersantai dan smoking area' : 'Open leafy terrace designated for smoking & pets'
    },
    {
      icon: <Wifi className="w-5 h-5 text-[#8c5e39] dark:text-[#e6b17e]" />,
      title: lang === 'id' ? 'Wi-Fi Fiber Kencang' : 'High-Speed Fiber Wi-Fi',
      desc: lang === 'id' ? 'Kecepatan hingga 100 Mbps stabil untuk meeting online' : 'Up to 100 Mbps stable connection for remote calls'
    },
    {
      icon: <Plug className="w-5 h-5 text-[#8c5e39] dark:text-[#e6b17e]" />,
      title: lang === 'id' ? 'Stopkontak Tiap Meja' : 'Power Outlets Everywhere',
      desc: lang === 'id' ? 'Akses daya di bangku kayu panjang & booth meja' : 'Easily accessible sockets along communal desks & booths'
    },
    {
      icon: <Car className="w-5 h-5 text-[#8c5e39] dark:text-[#e6b17e]" />,
      title: lang === 'id' ? 'Parkir Luas & Valet' : 'Spacious Parking & Valet',
      desc: lang === 'id' ? 'Area parkir mobil & motor aman dengan bantuan valet' : 'Secure vehicle & motorcycle parking with valet service'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#8c5e39] dark:text-[#e6b17e]" />,
      title: lang === 'id' ? 'Musholla Nyaman & Bersih' : 'Prayer Room (Musholla)',
      desc: lang === 'id' ? 'Tempat wudhu terpisah dan sarana ibadah bersih' : 'Clean dedicated prayer facilities and ablution area'
    }
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-[#f3ece1] dark:bg-[#14110e] border-y border-[#d5c8b8]/40 dark:border-[#3d342c]/60 transition-colors duration-400">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold tracking-[0.24em] uppercase text-[#8c5e39] dark:text-[#e6b17e]">
            {lang === 'id' ? 'KENYAMANAN PENGUNJUNG' : 'SANCTUARY AMENITIES'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2c1a0e] dark:text-[#f7f2ea] font-normal">
            {lang === 'id' ? 'Fasilitas Lengkap di Eyckman 32' : 'Crafted for Your Utmost Comfort'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-[#faf6f0] dark:bg-[#1b1713] border border-[#d5c8b8]/50 dark:border-[#3d342c] shadow-sm flex items-start gap-4 hover:border-[#8c5e39] dark:hover:border-[#e6b17e] transition-colors"
            >
              <div className="p-2.5 rounded-md bg-[#f3ece1] dark:bg-[#241f1a] shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-[#2c1a0e] dark:text-[#f7f2ea]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5c534a] dark:text-[#c4b8aa] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
