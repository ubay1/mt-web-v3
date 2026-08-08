"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { ArrowLeft, Server, Zap } from "lucide-react";
import { myServerAction, getRandomDogImage } from "./actions";

// Komponen tombol submit yang otomatis mendeteksi status "loading" form
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-accent text-black font-bold px-6 py-3 rounded flex items-center justify-center gap-2 hover:bg-accent/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full shadow-[0_0_15px_rgba(205,255,100,0.3)] hover:shadow-[0_0_25px_rgba(205,255,100,0.5)]"
    >
      {pending ? (
        <>Memproses di Server...</>
      ) : (
        <>
          <Zap size={18} /> Eksekusi Server Action
        </>
      )}
    </button>
  );
}

export default function TestActionPage() {
  // useActionState menggantikan useFormState di React 19
  // Menerima (actionFunction, initial_state)
  const [state, formAction] = useActionState(myServerAction, null);

  // State untuk dog image
  const [dogState, dogAction, isDogPending] = useActionState(getRandomDogImage, null);

  return (
    <div className="min-h-screen bg-bg p-6 md:p-20 font-mono">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft size={16} /> Kembali ke Beranda
      </Link>

      <div className="max-w-xl mx-auto border border-line p-8 md:p-12 rounded-2xl bg-[#0a0a0a] shadow-2xl relative overflow-hidden">
        {/* Dekorasi visual */}
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Server size={120} />
        </div>

        <div className="relative z-10">
          <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
            React 19 Feature
          </div>

          <h1 className="text-3xl md:text-4xl font-black mb-4 text-white tracking-tight">
            Server Actions Demo
          </h1>
          <p className="text-white/60 text-sm mb-10 leading-relaxed">
            Form ini menggunakan Server Actions secara murni. Tanpa{" "}
            <code className="text-accent bg-accent/10 px-1 py-0.5 rounded">
              fetch()
            </code>
            , tanpa API Routes, dan tanpa{" "}
            <code className="text-accent bg-accent/10 px-1 py-0.5 rounded">
              e.preventDefault()
            </code>
            .
          </p>

          {/* Perhatikan bahwa kita melewatkan formAction ke properti action form */}
          <form action={formAction} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs text-white/80 uppercase tracking-widest font-bold"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ketik namamu (Coba ketik 'error' atau 'crash')..."
                className="bg-white/5 border border-line p-4 text-white focus:border-accent focus:bg-white/10 outline-none transition-all rounded-lg"
              />
            </div>

            <SubmitButton />

            {/* Menampilkan pesan error dari server */}
            {state?.error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-sm animate-fade-in flex flex-col gap-1">
                <strong className="text-red-500">❌ Error dari Server</strong>
                {state.error}
              </div>
            )}

            {/* Menampilkan pesan sukses dari server */}
            {state?.success && (
              <div className="p-4 bg-accent/10 border border-accent/30 text-accent rounded-lg text-sm animate-fade-in flex flex-col gap-1">
                <strong className="text-accent">✅ Respons Server</strong>
                {state.message}
              </div>
            )}
          </form>

          {/* Bagian Bonus: Fetch Dog Image */}
          <div className="mt-12 pt-8 border-t border-line">
            <h2 className="text-2xl font-black mb-4 text-white tracking-tight">
              Get Random Dog Image
            </h2>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Server Action juga bisa digunakan untuk fetching data eksternal tanpa memerlukan input dari pengguna.
            </p>
            <form action={dogAction} className="flex flex-col gap-6">
              <button
                type="submit"
                disabled={isDogPending}
                className="bg-white text-black font-bold px-6 py-3 rounded flex items-center justify-center gap-2 hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                {isDogPending ? "Mengambil Gambar dari Server..." : "🐶 Dapatkan Gambar Anjing Acak"}
              </button>
              {dogState?.error && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-sm animate-fade-in">
                  <strong className="text-red-500">❌ Gagal:</strong> {dogState.error}
                </div>
              )}
              {dogState?.url && (
                <div className="rounded-xl overflow-hidden border border-line bg-white/5 p-2 animate-fade-in">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dogState.url}
                    alt="Random Dog"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
