import React from 'react';
import { Language } from '../types';
import { ShoppingBag, ExternalLink, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { HD_ASSETS } from '../data/content';

interface ShopBeansProps {
  lang: Language;
}

export const ShopBeansBanner: React.FC<ShopBeansProps> = ({ lang }) => {
  const beans = [
    {
      name: 'Eyckman House Blend',
      process: 'Natural & Washed Blend',
      notes: lang === 'id' ? 'Karamel, Cokelat Hitam, Kacang Panggang' : 'Caramel, Dark Chocolate, Toasted Nuts',
      weight: '250g / 1kg',
      price: 'Rp 95.000',
    },
    {
      name: 'Kerinci Anaerobic Natural',
      process: '72h Anaerobic Fermentation',
      notes: lang === 'id' ? 'Stroberi Liar, Bergamot, Molase Manis' : 'Wild Strawberry, Bergamot, Sweet Molasses',
      weight: '200g',
      price: 'Rp 125.000',
    },
    {
      name: 'Ethiopia Guji Uraga',
      process: 'Washed Clean Cup',
      notes: lang === 'id' ? 'Bunga Melati, Persik Putih, Lemon Zest' : 'Jasmine Blossom, White Peach, Lemon Zest',
      weight: '200g',
      price: 'Rp 145.000',
    },
  ];

  return (
    <section id="shop-beans" className="w-full py-20 px-4 md:px-8 lg:px-12 bg-[#2c1a0e] text-[#ffffff] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#e6b17e]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6b17e]/20 text-[#e6b17e] text-xs font-bold uppercase tracking-[0.2em]">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'ROASTERY OFFICIAL STORE' : 'OFFICIAL BEAN ROASTERY'}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              {lang === 'id' ? 'Nikmati Seduhan Wheels di Rumah Anda.' : 'Bring the Wheels Brew to Your Home.'}
            </h2>

            <p className="text-sm text-[#d5c8b8] leading-relaxed font-light">
              {lang === 'id'
                ? 'Kami mengirimkan biji kopi sangrai segar langsung dari drum Eyckman ke seluruh Indonesia. Tersedia dalam bentuk whole beans (biji utuh) maupun gilingan sesuai alat seduh favorit Anda (V60, French Press, Espresso, Tubruk).'
                : 'Freshly roasted beans dispatched directly from our Eyckman drum across Indonesia. Available as whole beans or ground to match your favorite brew method.'}
            </p>

            <div className="space-y-2 pt-1 text-xs text-[#f5deca]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#e6b17e]" />
                <span>{lang === 'id' ? 'Disangrai segar maksimal 7 hari sebelum kirim' : 'Freshly roasted within 7 days of dispatch'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#e6b17e]" />
                <span>{lang === 'id' ? 'Dilengkapi degas valve & zipper packaging kedap udara' : 'Equipped with one-way degas valve & resealable zipper'}</span>
              </div>
            </div>

            {/* Marketplace & WhatsApp Order Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://www.tokopedia.com/search?st=product&q=wheels+coffee+roasters"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded bg-emerald-600 hover:bg-emerald-500 text-[#ffffff] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow"
              >
                <span>Tokopedia Resmi</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://shopee.co.id/search?keyword=wheels%20coffee%20roasters"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded bg-orange-600 hover:bg-orange-500 text-[#ffffff] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow"
              >
                <span>Shopee Mall</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/6281222081402?text=Halo%20Wheels%20Roastery,%20saya%20ingin%20pesan%20biji%20kopi%20roasted%20beans"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded border border-[#e6b17e] text-[#e6b17e] hover:bg-[#e6b17e]/10 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                <span>WhatsApp Order</span>
              </a>
            </div>
          </div>

          {/* Right Product Cards Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {beans.map((b, idx) => (
                <div
                  key={idx}
                  className="bg-[#14100c]/80 p-5 rounded-lg border border-[#ffffff]/15 backdrop-blur-sm flex flex-col justify-between hover:border-[#e6b17e] transition-colors"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#e6b17e] block">
                      {b.process}
                    </span>
                    <h3 className="font-serif text-lg font-medium leading-snug">
                      {b.name}
                    </h3>
                    <p className="text-xs text-[#d5c8b8] leading-relaxed">
                      {b.notes}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#ffffff]/10 flex items-center justify-between">
                    <span className="text-xs text-[#c4b8aa]">{b.weight}</span>
                    <span className="text-sm font-bold text-[#e6b17e] font-mono">{b.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded bg-[#1e150f] border border-[#e6b17e]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#d5c8b8]">
              <span>
                {lang === 'id'
                  ? 'Perlu rekomendasi gilingan untuk mesin rumahan Anda?'
                  : 'Need grind size consultation for your home setup?'}
              </span>
              <a
                href="https://wa.me/6281222081402?text=Halo,%20saya%20mau%20konsultasi%20grind%20size%20biji%20kopi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e6b17e] hover:underline font-bold uppercase tracking-wider shrink-0"
              >
                {lang === 'id' ? 'Tanya Roaster di WA →' : 'Ask Roaster on WA →'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
