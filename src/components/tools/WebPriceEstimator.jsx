import React, { useState, useEffect } from 'react';
import { Calculator, Check, Clock, Zap, HelpCircle, ArrowRight } from 'lucide-react';

const WEB_TYPES = [
  { id: 'landing', label: 'Landing Page', price: 3000000, desc: 'Satu halaman untuk promosi produk/jasa.' },
  { id: 'compro', label: 'Company Profile', price: 7000000, desc: '5-8 halaman informasi perusahaan & layanan.' },
  { id: 'blog', label: 'Blog / News', price: 9000000, desc: 'Website konten dengan kategori & pencarian.' },
  { id: 'shop', label: 'Toko Online', price: 15000000, desc: 'Katalog produk, keranjang, & checkout WA.' },
  { id: 'custom', label: 'Web App Custom', price: 25000000, desc: 'Sistem kompleks (Dashboard, Login, Database).' },
];

const FEATURES = [
  { id: 'cms', label: 'CMS (Admin Panel)', price: 2000000, desc: 'Bisa edit konten sendiri tanpa coding.' },
  { id: 'seo', label: 'SEO Basic Setup', price: 1500000, desc: 'Optimasi agar mudah ditemukan di Google.' },
  { id: 'darkmode', label: 'Dark Mode', price: 1000000, desc: 'Fitur mode gelap yang nyaman di mata.' },
  { id: 'analytics', label: 'Analytics & Pixel', price: 500000, desc: 'Setup Google Analytics & FB Pixel.' },
  { id: 'multilang', label: 'Multi Bahasa', price: 2500000, desc: 'Website dalam 2 bahasa (Indo/Inggris).' },
  { id: 'design', label: 'Custom UI/UX Design', price: 3000000, desc: 'Desain eksklusif dari Figma (bukan template).' },
];

const DEADLINES = [
  { id: 'santai', label: 'Santai (Standard)', multiplier: 1, desc: 'Sesuai timeline normal.' },
  { id: 'cepat', label: 'Prioritas (Cepat)', multiplier: 1.3, desc: 'Lebih cepat 30% dari standar.' },
  { id: 'kilat', label: 'Express (Kilat)', multiplier: 1.8, desc: 'Dikerjakan weekend & lembur (ASAP).' },
];

export default function WebPriceEstimator() {
  const [type, setType] = useState(WEB_TYPES[0]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [deadline, setDeadline] = useState(DEADLINES[0]);
  const [total, setTotal] = useState(0);

  // Logic Hitung Harga
  useEffect(() => {
    const basePrice = type.price;
    const featuresPrice = selectedFeatures.reduce((acc, curr) => acc + curr.price, 0);
    const subTotal = basePrice + featuresPrice;
    const finalTotal = subTotal * deadline.multiplier;
    setTotal(finalTotal);
  }, [type, selectedFeatures, deadline]);

  const toggleFeature = (feature) => {
    if (selectedFeatures.find((f) => f.id === feature.id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f.id !== feature.id));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
  };

  const generateWhatsAppLink = () => {
    const featureList = selectedFeatures.map(f => `- ${f.label}`).join('%0A');
    const text = `Halo idgo, saya mau konsultasi website.%0A%0A*Detail Estimasi:*%0A- Tipe: ${type.label}%0A- Deadline: ${deadline.label}%0A- Fitur Tambahan:%0A${featureList || '- Tidak ada'}%0A%0A*Estimasi Budget: ${formatRupiah(total)}*%0A%0ABisa diskusi lebih lanjut?`;
    return `https://wa.me/6281399721767?text=${text}`;
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      
      {/* LEFT COLUMN: INPUTS */}
      <div className="lg:col-span-2 space-y-10">
        
        {/* 1. Pilih Tipe Website */}
        <section>
          <h3 className="font-bold text-xl text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
            Jenis Website
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {WEB_TYPES.map((item) => (
              <div 
                key={item.id}
                onClick={() => setType(item)}
                className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${type.id === item.id ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20' : 'border-zinc-200 dark:border-zinc-800 hover:border-brand-300 dark:hover:border-brand-700 bg-white dark:bg-zinc-900'}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`font-bold ${type.id === item.id ? 'text-brand-700 dark:text-brand-400' : 'text-zinc-700 dark:text-zinc-200'}`}>{item.label}</span>
                  {type.id === item.id && <Check size={20} className="text-brand-600" />}
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Pilih Fitur */}
        <section>
          <h3 className="font-bold text-xl text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
            Fitur Tambahan
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((item) => {
              const isSelected = selectedFeatures.find((f) => f.id === item.id);
              return (
                <div 
                  key={item.id}
                  onClick={() => toggleFeature(item)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all flex items-center gap-3 ${isSelected ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20' : 'border-zinc-200 dark:border-zinc-800 hover:border-brand-300 bg-white dark:bg-zinc-900'}`}
                >
                  <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${isSelected ? 'bg-brand-600 border-brand-600' : 'border-zinc-400'}`}>
                    {isSelected && <Check size={14} className="text-white" />}
                  </div>
                  <div>
                    <span className={`font-medium block ${isSelected ? 'text-brand-700 dark:text-brand-400' : 'text-zinc-700 dark:text-zinc-300'}`}>{item.label}</span>
                    <span className="text-[10px] text-zinc-500">{item.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Deadline */}
        <section>
          <h3 className="font-bold text-xl text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
            Target Deadline
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {DEADLINES.map((item) => (
              <div 
                key={item.id}
                onClick={() => setDeadline(item)}
                className={`cursor-pointer p-4 rounded-xl border-2 text-center transition-all ${deadline.id === item.id ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20' : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900'}`}
              >
                <div className="mb-2 flex justify-center">
                    {item.id === 'kilat' ? <Zap className="text-amber-500" /> : <Clock className="text-zinc-400" />}
                </div>
                <span className={`font-bold block mb-1 ${deadline.id === item.id ? 'text-brand-700 dark:text-brand-400' : 'text-zinc-700 dark:text-zinc-200'}`}>{item.label}</span>
                <p className="text-[10px] text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* RIGHT COLUMN: SUMMARY / RECEIPT */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-xl shadow-zinc-200/50 dark:shadow-none">
          <div className="flex items-center gap-2 mb-6 text-zinc-400">
            <Calculator size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Estimasi Biaya</span>
          </div>

          <div className="space-y-4 mb-6 border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-bold text-zinc-900 dark:text-white block">{type.label}</span>
                <span className="text-xs text-zinc-500">Base Price</span>
              </div>
              <span className="font-mono text-zinc-600 dark:text-zinc-400">{formatRupiah(type.price)}</span>
            </div>

            {selectedFeatures.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs font-bold text-zinc-400 uppercase">Add-ons:</span>
                {selectedFeatures.map((f) => (
                  <div key={f.id} className="flex justify-between text-sm">
                    <span className="text-zinc-600 dark:text-zinc-400">+ {f.label}</span>
                    <span className="font-mono text-zinc-500">{formatRupiah(f.price)}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between items-center text-sm pt-2">
              <span className="text-zinc-500">Multiplier ({deadline.label})</span>
              <span className="font-bold text-brand-600">x{deadline.multiplier}</span>
            </div>
          </div>

          <div className="mb-8">
            <span className="text-sm text-zinc-500 block mb-1">Total Estimasi</span>
            <div className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-white leading-none">
              {formatRupiah(total)}
            </div>
            <p className="text-xs text-zinc-400 mt-2 italic">*Harga final dapat berubah setelah diskusi detail.</p>
          </div>

          <a 
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-brand-500/30"
          >
            Konsultasikan Sekarang <ArrowRight size={18} />
          </a>
        </div>
      </div>

    </div>
  );
}