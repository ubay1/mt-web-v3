/* eslint-disable react-hooks/refs */
/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { useEffect, useEffectEvent, useState, useRef } from "react";

// =========================================================================
// 1. KOMPONEN TANPA useEffectEvent (CARA SALAH)
// =========================================================================
function FormTanpaEvent() {
  const [text, setText] = useState("");
  const [timeLeft, setTimeLeft] = useState(5);
  const [logs, setLogs] = useState<string[]>([]);

  const isMaxReached = logs.length >= 10;

  // Kita gunakan useRef agar perhitungan mundur tidak bentrok dengan aturan render React
  const timeLeftRef = useRef(5);

  useEffect(() => {
    if (isMaxReached) return; // Stop timer kalau sudah 10

    // Tiap kali efek ini dipanggil ulang karena ngetik, reset timer kembali ke 5
    timeLeftRef.current = 5;
    setTimeLeft(5);

    const interval = setInterval(() => {
      if (timeLeftRef.current <= 1) {
        // Waktunya save ke database!
        setLogs((l) => [`Tersimpan: "${text}"`, ...l]);
        timeLeftRef.current = 5;
        setTimeLeft(5); // Mulai lagi dari 5
      } else {
        timeLeftRef.current -= 1;
        setTimeLeft(timeLeftRef.current); // Kurangi 1 detik
      }
    }, 1000);

    return () => {
      // Menghancurkan timer lama setiap kali text berubah
      clearInterval(interval);
    };
  }, [text, isMaxReached]); // ❌ KESALAHAN: Memasukkan text ke dependency!

  const handleReset = () => {
    setLogs([]);
    setText("");
  };

  return (
    <div className="border border-red-500 rounded-lg p-6 bg-red-500/10 flex flex-col h-full">
      <h2 className="text-xl font-bold text-red-400 mb-2">❌ Tanpa useEffectEvent</h2>
      <p className="text-sm text-gray-400 mb-4 h-16">
        Dependency: <code className="bg-black px-2 py-1 rounded">[text]</code><br />
        Efek: Timer akan <b>TER-RESET</b> kembali ke 5 detik tiap kali kamu memencet tombol keyboard.
      </p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Ketik teks panjang di sini:</label>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          disabled={isMaxReached}
          className="w-full p-2 rounded bg-black border border-gray-600 focus:border-red-500 outline-none disabled:opacity-50"
          placeholder={isMaxReached ? "Penuh!" : "Ketik terus menerus..."}
        />
      </div>

      <div className="mb-4 flex items-center justify-between bg-black p-4 rounded border border-gray-700">
        <span className="font-medium text-gray-300">Auto-Save dalam:</span>
        <span className="text-3xl font-bold text-red-400">
          {isMaxReached ? "STOP" : `${timeLeft}s`}
        </span>
      </div>

      <div className="mt-auto">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xs font-bold text-gray-500 uppercase">Log Database ({logs.length}/10)</h3>
          <button
            onClick={handleReset}
            className="bg-red-900 hover:bg-red-800 text-white text-xs px-3 py-1 rounded font-bold"
          >
            RESET
          </button>
        </div>
        <div className="bg-black p-4 rounded border border-gray-700 h-48 overflow-y-auto">
          {logs.length === 0 && <p className="text-gray-600 text-sm italic mt-4">Belum ada data tersimpan...</p>}
          {logs.map((log, i) => (
            <div key={i} className="text-sm text-green-400 border-b border-gray-800 py-2">✓ {log}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 2. KOMPONEN DENGAN useEffectEvent (CARA BENAR)
// =========================================================================
function FormPakaiEvent() {
  const [text, setText] = useState("");
  const [timeLeft, setTimeLeft] = useState(5);
  const [logs, setLogs] = useState<string[]>([]);
  const [resetKey, setResetKey] = useState(0);

  const isMaxReached = logs.length >= 10;

  // Karena dependency array kosong [], useEffect tidak otomatis membaca state terbaru.
  // Kita bantu dengan useRef khusus untuk dibaca di dalam timer (agar tidak melanggar aturan ESLint)
  const maxReachedRef = useRef(isMaxReached);
  maxReachedRef.current = isMaxReached;

  const timeLeftRef = useRef(5);

  // ✅ BUNGKUS LOGIKA PENYIMPANAN DI SINI
  const simpanOtomatis = useEffectEvent(() => {
    setLogs((l) => [`Tersimpan: "${text}"`, ...l]);
  });

  useEffect(() => {
    if (maxReachedRef.current) return;

    // Karena dependency kosong, baris ini HANYA JALAN 1X SAAT LOAD (dan saat tombol reset ditekan)
    timeLeftRef.current = 5;
    setTimeLeft(5);

    const interval = setInterval(() => {
      // Hentikan timer jika sudah 10 data
      if (maxReachedRef.current) {
        clearInterval(interval);
        return;
      }

      if (timeLeftRef.current <= 1) {
        // Panggil asisten penyimpan kita! (Dilakukan di luar fungsi setter state)
        simpanOtomatis();
        timeLeftRef.current = 5;
        setTimeLeft(5);
      } else {
        timeLeftRef.current -= 1;
        setTimeLeft(timeLeftRef.current);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [resetKey]); // ✅ BENAR: Kosong! (resetKey hanya dipakai saat klik tombol reset)

  const handleReset = () => {
    setLogs([]);
    setText("");
    setResetKey(k => k + 1); // Trigger ulang timer dari awal
  };

  return (
    <div className="border border-green-500 rounded-lg p-6 bg-green-500/10 flex flex-col h-full">
      <h2 className="text-xl font-bold text-green-400 mb-2">✅ Pakai useEffectEvent</h2>
      <p className="text-sm text-gray-400 mb-4 h-16">
        Dependency: <code className="bg-black px-2 py-1 rounded">[]</code><br />
        Efek: Timer <b>TIDAK AKAN PERNAH RESET</b> walaupun kamu heboh mengetik di keyboard.
      </p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Ketik teks panjang di sini:</label>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          disabled={isMaxReached}
          className="w-full p-2 rounded bg-black border border-gray-600 focus:border-green-500 outline-none disabled:opacity-50"
          placeholder={isMaxReached ? "Penuh!" : "Ketik terus menerus..."}
        />
      </div>

      <div className="mb-4 flex items-center justify-between bg-black p-4 rounded border border-gray-700">
        <span className="font-medium text-gray-300">Auto-Save dalam:</span>
        <span className="text-3xl font-bold text-green-400">
          {isMaxReached ? "STOP" : `${timeLeft}s`}
        </span>
      </div>

      <div className="mt-auto">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xs font-bold text-gray-500 uppercase">Log Database ({logs.length}/10)</h3>
          <button
            onClick={handleReset}
            className="bg-green-900 hover:bg-green-800 text-white text-xs px-3 py-1 rounded font-bold"
          >
            RESET
          </button>
        </div>
        <div className="bg-black p-4 rounded border border-gray-700 h-48 overflow-y-auto">
          {logs.length === 0 && <p className="text-gray-600 text-sm italic mt-4">Belum ada data tersimpan...</p>}
          {logs.map((log, i) => (
            <div key={i} className="text-sm text-green-400 border-b border-gray-800 py-2">✓ {log}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// MAIN PAGE
// =========================================================================
export default function TestEffectEventPage() {
  return (
    <div className="max-w-6xl mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold mb-2">Simulasi Auto-Save (5 Detik)</h1>
      <p className="text-gray-400 mb-8">
        Silakan coba ketik 1 kalimat panjang tanpa henti di kotak kiri, lalu rasakan bedanya dengan kotak kanan!
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <FormTanpaEvent />
        <FormPakaiEvent />
      </div>
    </div>
  );
}
