"use client"

import { useState, useTransition, memo } from "react";

// ============================================================================
// Komponen yang SANGAT LAMBAT untuk dirender (Mensimulasikan UI Berat)
// Kita pecah menjadi ratusan item agar React 18 bisa meng-interupsi (yield)
// di sela-sela proses rendernya jika menggunakan useTransition.
// ============================================================================
const TabRiwayatBerat = memo(function TabRiwayatBerat() {
  const items = [];
  // Render 500 komponen lambat!
  for (let i = 0; i < 500; i++) {
    items.push(<ItemLambat key={i} index={i} />);
  }
  return (
    <ul className="h-96 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
      {items}
    </ul>
  );
});

// Satu item ini memakan waktu 2 milidetik murni untuk di-render
// 500 item x 2ms = 1 Detik Full (Main Thread Blocked!)
function ItemLambat({ index }: { index: number }) {
  const start = performance.now();
  while (performance.now() - start < 2) {
    // Memblokir thread secara sengaja agar lag terasa!
  }
  return (
    <li className="p-3 border border-gray-700 bg-gray-800/50 rounded flex justify-between items-center">
      <span>Transaksi #{100000 + index}</span>
      <span className="text-green-400 font-mono">Rp {(Math.random() * 1000000).toFixed(0)}</span>
    </li>
  );
}

// ============================================================================
// Komponen yang RINGAN
// ============================================================================
const TabBeranda = memo(function TabBeranda() {
  return (
    <div className="p-8 text-center bg-gray-800/20 border border-gray-700 rounded-lg h-96 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">🏠 Selamat Datang di Beranda</h2>
      <p className="text-gray-400 max-w-md">
        Tab ini sangat ringan dan cepat. Jika Anda dari tab "Riwayat Transaksi" 
        dan UI Anda tidak menggunakan <code className="bg-gray-800 px-1 py-0.5 rounded text-pink-400">useTransition</code>, 
        Anda tidak akan bisa segera pindah ke sini karena layarnya macet!
      </p>
    </div>
  );
});

const TabKontak = memo(function TabKontak() {
  return (
    <div className="p-8 text-center bg-gray-800/20 border border-gray-700 rounded-lg h-96 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">☎️ Hubungi Kami</h2>
      <p className="text-gray-400">Hubungi kami jika aplikasi Anda sering nge-lag.</p>
    </div>
  );
});


// ============================================================================
// MAIN PAGE
// ============================================================================
export default function TestUseTransitionPage() {
  const [tab, setTab] = useState('beranda');
  const [isPending, startTransition] = useTransition();
  const [pakaiTransition, setPakaiTransition] = useState(true);
  const [teksInput, setTeksInput] = useState(""); // Membuktikan UI masih responsif buat ngetik

  const gantiTab = (namaTab: string) => {
    if (pakaiTransition) {
      // ✅ CARA BENAR: React akan render di background dan tidak mem-blokir UI
      startTransition(() => {
        setTab(namaTab);
      });
    } else {
      // ❌ CARA SALAH: Langsung set state. UI akan freeze total selama 1 detik!
      setTab(namaTab);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 font-sans text-white">
      <h1 className="text-3xl font-bold mb-2">Simulasi Concurrent Rendering</h1>
      <p className="text-gray-400 mb-8 leading-relaxed">
        Tab "Riwayat Transaksi" memakan waktu <b>1 detik penuh</b> untuk merender UI. <br/>
        Saat menggunakan <code>useTransition</code>, Anda bisa tetap <b>mengetik di input</b> atau membatalkannya dengan <b>pindah tab lain</b> di tengah proses loading!
      </p>

      {/* Toggles & Interactive Input */}
      <div className="flex flex-col md:flex-row gap-6 mb-8 bg-gray-900 border border-gray-800 p-4 rounded-xl">
        <label className="flex items-center gap-3 cursor-pointer">
          <input 
            type="checkbox" 
            checked={pakaiTransition} 
            onChange={(e) => setPakaiTransition(e.target.checked)}
            className="w-5 h-5 accent-pink-500"
          />
          <span className="font-semibold text-lg text-pink-400">
            Aktifkan useTransition
          </span>
        </label>

        <div className="h-px md:h-auto md:w-px bg-gray-700"></div>

        <input 
          type="text" 
          value={teksInput}
          onChange={(e) => setTeksInput(e.target.value)}
          placeholder="Ketik sesuatu di sini..."
          className="flex-1 bg-gray-800 border border-gray-700 px-4 py-2 rounded focus:outline-none focus:border-pink-500 transition-colors"
        />
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6">
        <TabButton 
          aktif={tab === 'beranda'} 
          onClick={() => gantiTab('beranda')}
        >
          Beranda
        </TabButton>
        <TabButton 
          aktif={tab === 'kontak'} 
          onClick={() => gantiTab('kontak')}
        >
          Kontak
        </TabButton>
        <TabButton 
          aktif={tab === 'riwayat'} 
          onClick={() => gantiTab('riwayat')}
          className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
        >
          Riwayat Transaksi (BERAT)
        </TabButton>
      </div>

      {/* Loading Status Layer */}
      <div className="relative">
        {/* Jika transition sedang berjalan (proses render lambat terjadi di belakang) */}
        {isPending && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-10 flex items-center justify-center rounded-lg border border-pink-500/30">
            <div className="bg-gray-900 px-6 py-3 rounded-full flex items-center gap-3 border border-gray-700 shadow-xl">
              <div className="w-5 h-5 border-2 border-t-pink-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              <span className="text-pink-400 font-medium animate-pulse">
                Memproses UI di Background... (Coba ketik atau pindah tab sekarang!)
              </span>
            </div>
          </div>
        )}

        {/* Tab Content */}
        <div className={`transition-opacity duration-300 ${isPending ? 'opacity-30' : 'opacity-100'}`}>
          {tab === 'beranda' && <TabBeranda />}
          {tab === 'kontak' && <TabKontak />}
          {tab === 'riwayat' && <TabRiwayatBerat />}
        </div>
      </div>
      
    </div>
  );
}

function TabButton({ children, onClick, aktif, className = "" }: any) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-lg font-medium transition-all active:scale-95 border ${
        aktif 
          ? 'bg-white text-black border-white' 
          : 'bg-gray-900 text-gray-300 border-gray-700 hover:bg-gray-800 hover:border-gray-500 ' + className
      }`}
    >
      {children}
    </button>
  );
}
