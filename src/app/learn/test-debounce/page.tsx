/* eslint-disable react-hooks/purity */
'use client';
import { useState, useEffect, memo } from 'react';

// Custom Hook untuk Debounce
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set timer untuk mengupdate state setelah 'delay' milidetik
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Bersihkan timer jika 'value' (ketikan) berubah sebelum timer habis
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function TestDebouncePage() {
  const [text, setText] = useState('');

  // Kita beri jeda 500ms. 
  // Nilai ini TIDAK AKAN berubah sampai user berhenti mengetik selama 500ms.
  const debouncedText = useDebounce(text, 500);

  const isStale = text !== debouncedText;

  return (
    <div className="p-8 max-w-2xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-4">Tes Debounce Biasa</h1>
      <p className="mb-6 text-gray-300">
        Bandingkan ini dengan <code>useDeferredValue</code>. Di sini, daftar di bawah <b>TIDAK AKAN</b> diproses sama sekali sampai Anda benar-benar berhenti mengetik selama 0.5 detik.
      </p>

      <div className="mb-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ketik sesuatu..."
          className="border border-gray-400 p-3 rounded-lg w-full text-black focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="h-6 mb-4 text-sm font-semibold text-yellow-400">
        {isStale ? `⏳ Menunggu Anda berhenti mengetik (Timer 500ms)...` : "✅ Daftar ter-update!"}
      </div>

      <div style={{ opacity: isStale ? 0.5 : 1, transition: 'opacity 0.2s' }}>
        <SlowList text={debouncedText} />
      </div>
    </div>
  );
}

// ----------------------------------------------------
// Komponen lambat (Sama persis seperti di test-deferred)
const SlowList = memo(function SlowList({ text }: { text: string }) {
  const items = [];

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
  const startTime = performance.now();
  while (performance.now() - startTime < 0.1) {
    // 0.1ms * 1000 item = ~100ms lag saat render
  }

  return (
    <li className="py-2 border-b border-gray-800">
      Item <span className="text-gray-500">#{index}</span>: <span className="font-bold text-blue-400">{text}</span>
    </li>
  );
}
