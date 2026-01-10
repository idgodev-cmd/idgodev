import React, { useState } from 'react';
import { Calendar, Layers, PenTool } from 'lucide-react';

export default function TimeCalculator() {
  const [pages, setPages] = useState(5);
  const [complexity, setComplexity] = useState(1); // 1: Simple, 2: Medium, 3: High
  const [designReady, setDesignReady] = useState(false);

  // Rumus kasar: (pages * 0.5 hari) * complexity. Jika design belum ada, tambah 30%.
  const calculateDays = () => {
    let days = (pages * 1) * complexity;
    if (!designReady) days = days * 1.5; // Tambah 50% waktu untuk desain
    return Math.ceil(days);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
      
      <div className="space-y-8 mb-10">
        <div>
          <label className="block text-sm font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
            <Layers size={18} className="text-amber-500" /> Jumlah Halaman
          </label>
          <input 
            type="range" min="1" max="20" value={pages} 
            onChange={(e) => setPages(parseInt(e.target.value))}
            className="w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
          <div className="text-right font-mono font-bold text-zinc-500 mt-2">{pages} Halaman</div>
        </div>

        <div>
          <label className="block text-sm font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
            <PenTool size={18} className="text-amber-500" /> Tingkat Kompleksitas
          </label>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map(level => (
              <button
                key={level}
                onClick={() => setComplexity(level)}
                className={`py-3 rounded-xl text-sm font-bold border-2 transition-all ${
                  complexity === level 
                    ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400' 
                    : 'border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:border-amber-300'
                }`}
              >
                {level === 1 ? 'Simpel' : level === 2 ? 'Menengah' : 'Rumit'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl">
          <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Desain (Figma) Sudah Ada?</label>
          <input 
            type="checkbox" 
            checked={designReady} 
            onChange={(e) => setDesignReady(e.target.checked)}
            className="w-6 h-6 rounded text-amber-600 focus:ring-amber-500 border-gray-300"
          />
        </div>
      </div>

      <div className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl p-6 text-center">
        <span className="text-xs uppercase tracking-widest opacity-70 mb-2 block">Estimasi Waktu Pengerjaan</span>
        <div className="text-5xl font-display font-bold flex items-center justify-center gap-3">
          <Calendar size={40} />
          {calculateDays()} <span className="text-xl font-sans font-normal opacity-80 pt-4">Hari Kerja</span>
        </div>
      </div>

    </div>
  );
}