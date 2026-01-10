import React, { useState } from 'react';
import { Copy, Check, ClipboardList } from 'lucide-react';

const FEATURE_CATEGORIES = [
  {
    category: "Halaman Dasar",
    items: ["Beranda (Home)", "Tentang Kami (About)", "Layanan (Services)", "Kontak", "Blog List", "Detail Artikel"]
  },
  {
    category: "Fungsionalitas",
    items: ["Formulir Kontak", "Integrasi WhatsApp", "Google Maps Embed", "Pencarian", "Dark Mode", "Multi Bahasa"]
  },
  {
    category: "Teknis & SEO",
    items: ["SEO Basic (Meta Tags)", "Sitemap & Robots.txt", "Google Analytics", "Optimasi Kecepatan", "SSL Security", "Responsive Design"]
  }
];

export default function ScopeGenerator() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [copied, setCopied] = useState(false);

  const toggleItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const copyScope = () => {
    const text = `📋 SCOPE OF WORK (Lingkup Pekerjaan):\n\n${selectedItems.map(i => `- ${i}`).join('\n')}\n\nTotal Fitur: ${selectedItems.length}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        {FEATURE_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-bold text-lg mb-4 text-zinc-900 dark:text-white flex items-center gap-2">
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 w-6 h-6 rounded-md flex items-center justify-center text-xs">{idx + 1}</span>
              {cat.category}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {cat.items.map(item => (
                <button
                  key={item}
                  onClick={() => toggleItem(item)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium text-left flex items-center justify-between transition-all ${
                    selectedItems.includes(item) 
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20' 
                      : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700'
                  }`}
                >
                  {item}
                  {selectedItems.includes(item) && <Check size={16} />}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="lg:col-span-1">
        <div className="sticky top-24 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-4 text-zinc-400">
            <ClipboardList size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Ringkasan Scope</span>
          </div>
          
          <div className="bg-zinc-50 dark:bg-zinc-950 p-4 rounded-xl min-h-[200px] text-sm text-zinc-600 dark:text-zinc-300 font-mono mb-6 border border-zinc-200 dark:border-zinc-800">
            {selectedItems.length > 0 ? (
              <ul className="space-y-1 list-disc pl-4">
                {selectedItems.map(item => <li key={item}>{item}</li>)}
              </ul>
            ) : (
              <p className="text-zinc-400 italic">Belum ada fitur dipilih...</p>
            )}
          </div>

          <button 
            onClick={copyScope}
            disabled={selectedItems.length === 0}
            className="w-full py-4 bg-zinc-900 dark:bg-white hover:opacity-90 text-white dark:text-zinc-900 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />} 
            {copied ? 'Tersalin!' : 'Salin Scope'}
          </button>
        </div>
      </div>
    </div>
  );
}