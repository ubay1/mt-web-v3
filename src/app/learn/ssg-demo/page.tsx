/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import SSGFetcher from "../../../components/learn/SSGFetcher";

export default function SSGDemoPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 max-w-4xl mx-auto space-y-8">
      <div>
        <Link href="/learn" className="text-accent text-xs font-mono hover:underline">
          ← Kembali ke Modul Pembelajaran
        </Link>
        <h1 className="text-3xl md:text-5xl font-black mt-4 mb-2">
          Demo React 19: <span className="text-accent">react-dom/static</span> (SSG)
        </h1>
        <p className="text-white/70 text-sm md:text-base leading-relaxed">
          Mengapa SSG tidak pernah mengirimkan response HTML setengah jadi? Karena pada SSG, proses rendering dilakukan 100% tuntas di server sebelum disajikan ke pengguna.
        </p>
      </div>

      <SSGFetcher />

      {/* Penjelasan Perbedaan SSG vs Streaming SSR */}
      <div className="p-6 border border-accent/30 rounded-lg bg-black/60 space-y-4">
        <h3 className="font-bold text-accent text-base font-mono uppercase tracking-wider">
          💡 Jawaban: Kenapa SSG Tidak Bisa Dikirim Setengah Jadi?
        </h3>

        <div className="space-y-3 text-sm text-white/80 leading-relaxed">
          <p>
            <strong className="text-white">1. Halaman SSG (Static Site Generation):</strong><br />
            Pada SSG, server/CDN menyimpan file HTML statis yang **SUDAH JADI**. Saat kamu membuka halaman SSG, server menyajikan file statis tersebut secara utuh. **Tidak ada istilah "response belum selesai" pada SSG** karena pembuatan file dilakukan *sebelum* request diterima.
          </p>

          <p>
            <strong className="text-white">2. Kapan Response Dokumen Dikirim "Setengah Jadi / Belum Selesai"?</strong><br />
            Response HTML yang dikirim setengah jadi **HANYA ADA pada teknik Streaming SSR (`react-dom/server`)**.
            Pada Streaming SSR, server tidak mau membuat pengguna menunggu data lambat, sehingga server **langsung mengirimkan dokumen HTML awal berisi Fallback Skeleton (<code className="text-accent">⏳ Loading...</code>)**, lalu menyusulkan data aslinya belakangan melalui HTTP Stream.
          </p>
        </div>
      </div>
    </div>
  );
}
