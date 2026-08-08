/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

export default function SSGFetcher() {
  const [htmlOutput, setHtmlOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFetchSSG = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/ssg-demo");
      const text = await res.text();
      setHtmlOutput(text);
    } catch (err: any) {
      setHtmlOutput(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="p-6 border border-line rounded-lg bg-white/5 space-y-4">
        <h2 className="font-bold text-lg text-white">1. Ambil Response HTML Statis dari API SSG</h2>
        <p className="text-sm text-white/70">
          Klik tombol di bawah untuk melihat response HTML yang dihasilkan oleh <code className="text-accent font-mono">prerender()</code> dari <code className="text-accent font-mono">react-dom/static</code>.
        </p>

        <button
          onClick={handleFetchSSG}
          disabled={loading}
          className="px-4 py-2 bg-accent text-black font-semibold text-sm rounded transition-opacity disabled:opacity-50 font-mono"
        >
          {loading ? "Merender SSG..." : "🚀 Fetch Response HTML SSG (100% Utuh)"}
        </button>
      </div>

      {htmlOutput && (
        <div className="space-y-6">
          <div className="p-6 border border-line rounded-lg bg-white/5 space-y-3">
            <h3 className="font-bold text-sm text-accent font-mono uppercase tracking-wider">
              2. Raw Output HTML Dokumen SSG (Sudah Utuh)
            </h3>
            <pre className="p-4 bg-black/90 border border-line rounded font-mono text-xs text-green-400 overflow-x-auto max-h-72">
              {htmlOutput}
            </pre>
          </div>

          <div className="p-6 border border-line rounded-lg bg-white/5 space-y-3">
            <h3 className="font-bold text-sm text-accent font-mono uppercase tracking-wider">
              3. Tampilan Preview HTML SSG
            </h3>
            <div
              className="p-4 border border-line rounded bg-black"
              dangerouslySetInnerHTML={{ __html: htmlOutput }}
            />
          </div>
        </div>
      )}
    </>
  );
}
