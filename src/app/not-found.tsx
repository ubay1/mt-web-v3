"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="text-8xl font-black text-white/40 uppercase tracking-tighter mb-4">
        404
      </div>
      <div className="text-2xl font-bold uppercase tracking-widest mb-8">
        Page Not Found
      </div>
      <Link
        href="/"
        className="px-8 py-4 border border-accent text-accent font-mono text-sm uppercase tracking-[4px] hover:bg-accent hover:text-black transition-all"
      >
        Go Home
      </Link>
    </div>
  );
}
