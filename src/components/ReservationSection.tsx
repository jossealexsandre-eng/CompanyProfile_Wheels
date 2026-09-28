import React, { useState } from 'react';
import { Language } from '../types';
import { CheckCircle, MessageSquare, ArrowRight, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useToast } from './ToastProvider';

interface ReservationProps {
  lang: Language;
}

export const ReservationSection: React.FC<ReservationProps> = ({ lang }) => {
  const today = new Date().toISOString().split('T')[0];
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: today,
    time: '18:30',
    guests: '2',
    seating: 'Indoor Corner Booth',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error(
        lang === 'id' ? 'Formulir Belum Lengkap' : 'Incomplete Form',
        lang === 'id' ? 'Mohon isi nama dan nomor WhatsApp Anda.' : 'Please enter your name and WhatsApp number.'
      );
      return;
    }
    setIsSubmitted(true);
    toast.success(
      lang === 'id' ? 'Reservasi Disiapkan!' : 'Reservation Prepared!',
      lang === 'id' ? `Meja untuk ${formData.guests} tamu siap diteruskan ke WhatsApp.` : `Table for ${formData.guests} guests ready to send via WhatsApp.`
    );
  };

  const handleWhatsAppRedirect = () => {
    toast.coffee(
      lang === 'id' ? 'Menghubungkan ke Host...' : 'Connecting to Host...',
      lang === 'id' ? 'Membuka WhatsApp Wheels Coffee Roasters Eyckman.' : 'Opening Wheels Coffee Roasters Eyckman WhatsApp.'
    );
    const text = encodeURIComponent(
      lang === 'id'
        ? `Halo Wheels Coffee Roasters Eyckman 32,\nSaya ingin konfirmasi reservasi meja:\n\n• Nama: ${formData.name}\n• No. WhatsApp: ${formData.phone}\n• Tanggal: ${formData.date}\n• Jam: ${formData.time} WIB\n• Jumlah Tamu: ${formData.guests} Orang\n• Area Duduk: ${formData.seating}\n${formData.notes ? `• Catatan Khusus: ${formData.notes}\n` : ''}\nMohon konfirmasinya. Terima kasih!`
        : `Hello Wheels Coffee Roasters Eyckman 32,\nI would like to confirm my table reservation:\n\n• Name: ${formData.name}\n• Contact WA: ${formData.phone}\n• Date: ${formData.date}\n• Time: ${formData.time}\n• Party Size: ${formData.guests} Guests\n• Seating Area: ${formData.seating}\n${formData.notes ? `• Special Requests: ${formData.notes}\n` : ''}\nPlease confirm my booking. Thank you!`
    );
    window.open(`https://wa.me/6281222081402?text=${text}`, '_blank');
  };

  return (
    <section id="reservation-anchor" className="w-full py-20 md:py-28 px-4 md:px-8 lg:px-12 bg-[#241a10] text-[#ffffff] transition-colors duration-400">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#e6b17e]">
            {lang === 'id' ? 'HOSPITALITY • RESERVASI MEJA' : 'HOSPITALITY • TABLE BOOKING'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#ffffff] font-normal uppercase">
            {lang === 'id' ? 'Meja Anda Telah Menanti.' : 'Your Table Is Waiting.'}
          </h2>
          <p className="text-sm text-[#d5c8b8] max-w-lg mx-auto leading-relaxed font-light">
            {lang === 'id'
              ? 'Kami mengalokasikan kuota meja indoor mezzanine, booth sudut, dan garden untuk reservasi harian. Tamu langsung (walk-in) selalu disambut dengan hangat.'
              : 'We reserve a dedicated allocation of indoor mezzanine booths and garden seating daily. Walk-ins are always warmly welcomed.'}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#14100c]/80 backdrop-blur-md p-6 sm:p-10 rounded-xl border border-[#ffffff]/15 shadow-2xl">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-6 py-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#e6b17e] text-[#1e150f] mx-auto flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#ffffff]">
                    {lang === 'id' ? 'Permintaan Reservasi Siap Dikirim!' : 'Reservation Request Ready!'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#d5c8b8] max-w-md mx-auto leading-relaxed">
                    {lang === 'id'
                      ? `Terima kasih, ${formData.name}. Meja untuk ${formData.guests} tamu pada tanggal ${formData.date} pukul ${formData.time} WIB siap diteruskan ke WhatsApp Host Wheels.`
                      : `Thank you, ${formData.name}. Your table for ${formData.guests} guests on ${formData.date} at ${formData.time} is ready to be sent to Wheels WhatsApp Host.`}
                  </p>
                </div>

                {/* Summary Box */}
                <div className="p-5 bg-[#241a10] max-w-md mx-auto text-left text-xs space-y-2 text-[#f5deca] rounded border border-[#e6b17e]/30">
                  <div className="flex justify-between border-b border-[#ffffff]/10 pb-1.5">
                    <span className="text-[#c4b8aa]">{lang === 'id' ? 'Nama Tamu:' : 'Guest Name:'}</span>
                    <strong className="text-[#ffffff]">{formData.name}</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#ffffff]/10 pb-1.5">
                    <span className="text-[#c4b8aa]">{lang === 'id' ? 'Waktu & Tanggal:' : 'Date & Time:'}</span>
                    <strong className="text-[#ffffff]">{formData.date} • {formData.time} WIB</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#ffffff]/10 pb-1.5">
                    <span className="text-[#c4b8aa]">{lang === 'id' ? 'Jumlah Tamu:' : 'Party Size:'}</span>
                    <strong className="text-[#ffffff]">{formData.guests} {lang === 'id' ? 'Orang' : 'Guests'}</strong>
                  </div>
                  <div className="flex justify-between border-b border-[#ffffff]/10 pb-1.5">
                    <span className="text-[#c4b8aa]">{lang === 'id' ? 'Area Duduk:' : 'Seating Area:'}</span>
                    <strong className="text-[#ffffff]">{formData.seating}</strong>
                  </div>
                  {formData.notes && (
                    <div className="pt-1 text-[11px] text-[#c4b8aa] italic">
                      "{formData.notes}"
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#e6b17e] text-[#1e150f] text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#ffffff] transition-all rounded shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{lang === 'id' ? 'KIRIM KE WHATSAPP HOST' : 'OPEN WHATSAPP HOST'}</span>
                  </button>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-[#ffffff]/25 text-[#ffffff] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#ffffff]/10 transition-colors rounded flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{lang === 'id' ? 'Ubah Rincian' : 'Edit Details'}</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="reservation-form"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#e6b17e]" htmlFor="res-name">
                      {lang === 'id' ? 'Nama Lengkap' : 'Full Name'} *
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      required
                      placeholder="e.g. Raden Suryo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1e150f] border border-[#ffffff]/20 px-3.5 py-2.5 text-sm text-[#ffffff] placeholder:text-[#c4b8aa]/50 rounded focus:outline-none focus:border-[#e6b17e] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#e6b17e]" htmlFor="res-phone">
                      {lang === 'id' ? 'Nomor WhatsApp' : 'WhatsApp Contact'} *
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      required
                      placeholder="+62 812 XXXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1e150f] border border-[#ffffff]/20 px-3.5 py-2.5 text-sm text-[#ffffff] placeholder:text-[#c4b8aa]/50 rounded focus:outline-none focus:border-[#e6b17e] transition-colors"
                    />
                  </div>

                  {/* Date */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#e6b17e]" htmlFor="res-date">
                      {lang === 'id' ? 'Tanggal Kunjungan' : 'Date of Visit'} *
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      min={today}
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#1e150f] border border-[#ffffff]/20 px-3.5 py-2.5 text-sm text-[#ffffff] rounded focus:outline-none focus:border-[#e6b17e] transition-colors"
                    />
                  </div>

                  {/* Time & Guests */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#e6b17e]" htmlFor="res-time">
                        {lang === 'id' ? 'Jam Kunjungan' : 'Arrival Time'}
                      </label>
                      <select
                        id="res-time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-[#1e150f] border border-[#ffffff]/20 px-3 py-2.5 text-sm text-[#ffffff] rounded focus:outline-none focus:border-[#e6b17e] transition-colors"
                      >
                        <option value="08:00">08:00 (Morning Slow Bar)</option>
                        <option value="11:30">11:30 (Lunch Service)</option>
                        <option value="14:30">14:30 (Afternoon Brew)</option>
                        <option value="18:30">18:30 (Dinner Steak)</option>
                        <option value="20:00">20:00 (Late Evening)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#e6b17e]" htmlFor="res-guests">
                        {lang === 'id' ? 'Jumlah Tamu' : 'Party Size'}
                      </label>
                      <select
                        id="res-guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-[#1e150f] border border-[#ffffff]/20 px-3 py-2.5 text-sm text-[#ffffff] rounded focus:outline-none focus:border-[#e6b17e] transition-colors"
                      >
                        <option value="1">1 Person (Slow Bar)</option>
                        <option value="2">2 Persons (Table)</option>
                        <option value="4">4 Persons (Booth)</option>
                        <option value="6">6 Persons (Communal)</option>
                        <option value="8+">8+ Persons (Group Table)</option>
                      </select>
                    </div>
                  </div>

                  {/* Seating preference */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#e6b17e]" htmlFor="res-seating">
                      {lang === 'id' ? 'Preferensi Area Duduk' : 'Seating Preference'}
                    </label>
                    <select
                      id="res-seating"
                      value={formData.seating}
                      onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                      className="w-full bg-[#1e150f] border border-[#ffffff]/20 px-3 py-2.5 text-sm text-[#ffffff] rounded focus:outline-none focus:border-[#e6b17e] transition-colors"
                    >
                      <option value="Indoor Mezzanine Non-Smoking">Indoor Mezzanine (Non-Smoking AC)</option>
                      <option value="Indoor Corner Booth">Indoor Corner Booth</option>
                      <option value="Slow Bar Counter">Slow Bar Counter (Direct Roastery View)</option>
                      <option value="Outdoor Garden Terrace">Outdoor Garden Terrace (Smoking Area)</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#e6b17e]" htmlFor="res-notes">
                      {lang === 'id' ? 'Catatan Tambahan (Opsional)' : 'Special Requests (Optional)'}
                    </label>
                    <input
                      id="res-notes"
                      type="text"
                      placeholder={lang === 'id' ? 'Misal: Ulang tahun, baby chair, stopkontak...' : 'e.g. Birthday greeting, baby high chair...'}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#1e150f] border border-[#ffffff]/20 px-3.5 py-2.5 text-sm text-[#ffffff] placeholder:text-[#c4b8aa]/50 rounded focus:outline-none focus:border-[#e6b17e] transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#ffffff]/15">
                  <span className="text-xs text-[#d5c8b8] text-center sm:text-left">
                    {lang === 'id'
                      ? 'Konfirmasi ketersediaan meja akan diverifikasi via WhatsApp oleh host kami.'
                      : 'Table availability will be confirmed directly via WhatsApp by our host.'}
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-[#e6b17e] text-[#1e150f] text-xs font-bold uppercase tracking-[0.18em] hover:bg-[#ffffff] transition-all rounded shadow-lg flex items-center justify-center gap-2 shrink-0"
                  >
                    <span>{lang === 'id' ? 'KIRIM PERMINTAAN MEJA' : 'REQUEST TABLE'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
