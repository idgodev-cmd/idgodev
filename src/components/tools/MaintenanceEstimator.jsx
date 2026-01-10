import React, { useState, useEffect } from 'react';
import { Server, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

const SERVICES = [
  { id: 'hosting', label: 'Hosting & Domain Management', price: 150000, icon: <Server size={20} /> },
  { id: 'backup', label: 'Backup Rutin (Mingguan)', price: 100000, icon: <ShieldCheck size={20} /> },
  { id: 'content', label: 'Update Konten (2x/bulan)', price: 300000, icon: <Clock size={20} /> },
  { id: 'security', label: 'Security Monitoring & SSL', price: 200000, icon: <ShieldCheck size={20} /> },
];

export default function MaintenanceEstimator() {
  const [selected, setSelected] = useState(['hosting', 'security']); // Default selected
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = SERVICES.filter(s => selected.includes(s.id)).reduce((acc, curr) => acc + curr.price, 0);
    setTotal(sum);
  }, [selected]);

  const toggle = (id) => {
    if (selected.includes(id)) setSelected(selected.filter(i => i !== id));
    else setSelected([...selected, id]);
  };

  const formatRupiah = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm">
      <div className="p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-zinc-900 dark:text-white mb-6">Pilih Layanan Maintenance</h3>
            {SERVICES.map(service => (
              <div 
                key={service.id}
                onClick={() => toggle(service.id)}
                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selected.includes(service.id) 
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/10' 
                    : 'border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${selected.includes(service.id) ? 'bg-green-100 text-green-600' : 'bg-zinc-100 text-zinc-500'}`}>
                    {service.icon}
                  </div>
                  <span className={`font-medium ${selected.includes(service.id) ? 'text-zinc-900 dark:text-white' : 'text-zinc-500'}`}>{service.label}</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selected.includes(service.id) ? 'border-green-500 bg-green-500' : 'border-zinc-300'}`}>
                  {selected.includes(service.id) && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-950 rounded-2xl p-8 flex flex-col justify-center text-center border border-zinc-200 dark:border-zinc-800">
            <span className="text-zinc-500 text-sm font-medium uppercase tracking-widest mb-2">Estimasi Biaya Bulanan</span>
            <div className="text-4xl md:text-5xl font-display font-bold text-zinc-900 dark:text-white mb-2">
              {formatRupiah(total)}
            </div>
            <p className="text-zinc-400 text-sm mb-8">/ bulan</p>
            
            <div className="space-y-3 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Hemat jika bayar tahunan (2 bulan gratis)</span>
                    <span className="font-bold text-green-600">{formatRupiah(total * 10)}</span>
                </div>
            </div>

            <a href={`https://wa.me/6281399721767?text=Halo idgo, saya tertarik paket maintenance website dengan estimasi ${formatRupiah(total)}/bulan.`} target="_blank" className="mt-8 w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-95">
              Ambil Paket Ini <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}