/* eslint-disable react-hooks/purity */
'use client';
import { useState, useDeferredValue, memo } from 'react';

export default function TestDeferredPage() {
  const [text, setText] = useState('');
  const [useDeferred, setUseDeferred] = useState(true);

  // Kita buat versi tertunda dari teks input
  const deferredText = useDeferredValue(text);

  // Nilai apa yang akan dikirim ke komponen lambat?
  // Jika checkbox dicentang, pakai nilai tertunda. Jika tidak, pakai nilai asli yang bikin lag.
  const valueToPass = useDeferred ? deferredText : text;

  // React memberi tahu kita apakah nilai tertunda masih 'tertinggal' (stale) dari nilai asli
  const isStale = text !== deferredText;

  return (
    <div className="p-8 max-w-2xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-4">Tes useDeferredValue</h1>
      <p className="mb-6 text-gray-300">
        Coba ketik dengan cepat di kotak bawah. Matikan centang untuk merasakan seberapa patah-patah (lag) jika tidak pakai <code>useDeferredValue</code>.
      </p>

      <div className="mb-6 flex items-center gap-2 p-4 bg-gray-800 rounded-lg">
        <input
          type="checkbox"
          id="deferred-toggle"
          checked={useDeferred}
          onChange={(e) => setUseDeferred(e.target.checked)}
          className="w-5 h-5 cursor-pointer"
        />
        <label htmlFor="deferred-toggle" className="cursor-pointer text-white font-medium">
          Gunakan useDeferredValue (Anti-Lag)
        </label>
      </div>

      <div className="mb-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ketik sesuatu dengan cepat..."
          className="border border-gray-400 p-3 rounded-lg w-full text-black focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Indikator visual saat proses rendering lambat sedang berjalan di background */}
      <div className="h-6 mb-4 text-sm font-semibold text-yellow-400">
        {isStale && useDeferred ? "⏳ Sedang merender ulang daftar di belakang layar..." : ""}
      </div>

      {/* Jika isStale, kita buat listnya agak transparan supaya kelihatan kalau dia lagi loading */}
      <div style={{ opacity: isStale ? 0.5 : 1, transition: 'opacity 0.2s' }}>
        <SlowList text={valueToPass} />
      </div>
    </div>
  );
}

// ----------------------------------------------------
// Komponen yang SANGAT LAMBAT untuk dirender
// Dibungkus dengan memo agar hanya re-render jika props 'text' berubah
const SlowList = memo(function SlowList({ text }: { text: string }) {
  const items = [];

  // Kita buat 1000 item. Setiap item dikasih jeda sedikit agar total rendernya terasa sangat berat.
  for (let i = 0; i < 1000; i++) {
    items.push(<SlowItem key={i} text={text} index={i} />);
  }

  return (
    <ul className="border border-gray-700 rounded-lg h-96 overflow-y-auto p-4 bg-gray-900 text-white">
      {items}
    </ul>
  );
});

function SlowItem({ text, index }: { text: string; index: number }) {
  // Simulasi proses komputasi yang berat (bikin lag)
  const startTime = performance.now();
  while (performance.now() - startTime < 0.1) {
    // Sengaja dibuat stuck selama 0.1ms per item. 
    // 0.1ms * 1000 item = ~100ms lag setiap kali komponen ini di-render.
  }

  return (
    <li className="py-2 border-b border-gray-800">
      Item <span className="text-gray-500">#{index}</span>: <span className="font-bold text-blue-400">{text}</span>
    </li>
  );
}
