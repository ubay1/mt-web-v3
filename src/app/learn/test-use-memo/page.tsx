/* eslint-disable react-hooks/purity */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useMemo, useEffect } from "react";

// Data dummy yang diambil dari API (referensi global, tidak pernah berubah)
const generateData = () => Array.from({ length: 50 }, (_, i) => ({ id: i, text: `Data ${i}` }));
const DUMMY_DATA = generateData();

/**
 * Fungsi fiktif untuk menyimulasikan komputasi yang sangat berat.
 * Menggunakan while loop untuk memblokir main thread selama `delayMs`.
 */
function prosesSangatLambat(data: any[], delayMs = 500) {
  const start = performance.now();
  while (performance.now() - start < delayMs) {
    // Memblokir thread secara sengaja agar lag terasa!
  }
  return data.map(d => ({ ...d, diproses: true }));
}

// =========================================================================
// 1. KOMPONEN TANPA useMemo (CARA SALAH)
// =========================================================================
function FormTanpaMemo() {
  const [temaGelap, setTemaGelap] = useState(true);
  const [klikKe, setKlikKe] = useState(0);

  // Waktu Mulai
  const t0 = performance.now();

  // ❌ PROSES BERAT! Tidak dibungkus useMemo
  // Akan dieksekusi ULANG setiap kali komponen ini di-render (termasuk saat ganti tema)
  const dataHasil = prosesSangatLambat(DUMMY_DATA);

  // Waktu Selesai
  const t1 = performance.now();
  const waktu = (t1 - t0).toFixed(0);

  return (
    <div className={`p-6 border rounded-lg transition-colors duration-200 ${temaGelap ? 'bg-[#1a1a1a] border-gray-700 text-white' : 'bg-gray-100 border-gray-300 text-black'}`}>
      <h2 className="text-xl font-bold mb-2 text-red-500">❌ Tanpa useMemo</h2>
      <p className="text-sm mb-4 h-16 opacity-70">
        Setiap kali ada interaksi sekecil apapun (seperti klik ganti tema), komponen akan di-render ulang dan memaksa fungsi berat dieksekusi dari awal.
      </p>

      <div className="mb-6 flex items-center justify-between p-4 rounded border border-red-900/30 bg-red-500/10 text-red-500">
        <span className="font-medium">Lama Waktu Render:</span>
        <span className="text-3xl font-bold">{waktu} ms</span>
      </div>

      <div className="flex gap-4 items-center border-t border-gray-500/30 pt-4">
        <button
          onClick={() => { setTemaGelap(!temaGelap); setKlikKe(c => c + 1); }}
          className={`px-4 py-2 rounded font-bold transition-transform active:scale-95 shadow-md ${temaGelap ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
        >
          {temaGelap ? 'Ganti ke Terang' : 'Ganti ke Gelap'}
        </button>
        <span className="text-sm opacity-50 font-mono">Render ke-{klikKe}</span>
      </div>
    </div>
  );
}

// =========================================================================
// 2. KOMPONEN DENGAN useMemo (CARA BENAR)
// =========================================================================
function FormPakaiMemo() {
  const [temaGelap, setTemaGelap] = useState(true);
  const [klikKe, setKlikKe] = useState(0);

  // Waktu Mulai
  const t0 = performance.now();

  // ✅ PROSES BERAT! Dibungkus useMemo
  // Akan mengingat hasil sebelumnya, tidak akan dieksekusi ulang jika DUMMY_DATA tidak berubah.
  const dataHasil = useMemo(() => {
    return prosesSangatLambat(DUMMY_DATA);
  }, [DUMMY_DATA]);

  // Waktu Selesai
  const t1 = performance.now();
  const waktu = (t1 - t0).toFixed(0);

  return (
    <div className={`p-6 border rounded-lg transition-colors duration-200 ${temaGelap ? 'bg-[#1a1a1a] border-gray-700 text-white' : 'bg-gray-100 border-gray-300 text-black'}`}>
      <h2 className="text-xl font-bold mb-2 text-green-500">✅ Pakai useMemo</h2>
      <p className="text-sm mb-4 h-16 opacity-70">
        Saat klik ganti tema, React akan langsung memakai hasil hitungan lama yang sudah disimpan. Responsivitas menjadi instan!
      </p>

      <div className="mb-6 flex items-center justify-between p-4 rounded border border-green-900/30 bg-green-500/10 text-green-500">
        <span className="font-medium">Lama Waktu Render:</span>
        <span className="text-3xl font-bold">{waktu} ms</span>
      </div>

      <div className="flex gap-4 items-center border-t border-gray-500/30 pt-4">
        <button
          onClick={() => { setTemaGelap(!temaGelap); setKlikKe(c => c + 1); }}
          className={`px-4 py-2 rounded font-bold transition-transform active:scale-95 shadow-md ${temaGelap ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
        >
          {temaGelap ? 'Ganti ke Terang' : 'Ganti ke Gelap'}
        </button>
        <span className="text-sm opacity-50 font-mono">Render ke-{klikKe}</span>
      </div>
    </div>
  );
}

// =========================================================================
// MAIN PAGE
// =========================================================================
export default function TestUseMemoPage() {
  const [siap, setSiap] = useState(false);

  // Memberi jeda sedikit agar halaman bisa memuat header dengan cepat sebelum dihantam komputasi berat 1 detik (500ms x 2)
  useEffect(() => {
    setTimeout(() => setSiap(true), 50);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8 font-sans text-white">
      <h1 className="text-3xl font-bold mb-2">Simulasi Lag: useMemo vs Tanpa useMemo</h1>
      <p className="text-gray-400 mb-8 leading-relaxed">
        Di belakang layar, ada proses filter data berat yang memakan waktu <b>500 milidetik (setengah detik)</b>.<br />
        Coba klik tombol <b>Ganti Tema</b> di bawah dan rasakan sendiri perbedaan responsivitas UI-nya secara nyata.
      </p>

      {!siap ? (
        <div className="flex justify-center items-center h-64 border border-dashed border-gray-700 rounded-lg">
          <div className="text-gray-500 animate-pulse font-medium text-lg">Menyiapkan simulasi data berat...</div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <FormTanpaMemo />
          <FormPakaiMemo />
        </div>
      )}
    </div>
  );
}
