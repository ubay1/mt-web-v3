/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState, use, Suspense, useState, useTransition } from "react";
import { useFormStatus } from "react-dom";

const apiPong = async () => {
  const { data, error } = await fetch("/api/ping").then((res) => res.json());
  if (error) return { error };
  return { success: true, data };
};

let cachedPongPromise: Promise<any> | null = null;
const getPongPromise = () => {
  if (!cachedPongPromise) {
    cachedPongPromise = apiPong();
  }
  return cachedPongPromise;
};

const ping = () => {
  return apiPong();
};

function MessageComponent({ promise }: { promise: Promise<any> }) {
  const message = use(promise);
  return <p className="text-green-500 font-bold">{message.data}</p>;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-accent text-black font-semibold px-4 py-2 rounded-sm transition-opacity disabled:opacity-50"
    >
      {pending ? "Menyimpan..." : "Simpan"}
    </button>
  );
}

function UpdateNameStartTransition() {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const { error, data } = await ping();
      if (error) {
        setError(error);
        return;
      }
      setName(data);
    });
  };

  return (
    <div className="p-4 flex flex-col gap-2 w-full md:w-1/2 border border-line rounded-md mt-4 bg-white/5">
      <h3 className="font-bold text-lg mb-2 text-accent">Contoh Transition (`useTransition`)</h3>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="bg-white text-black p-2 rounded-sm font-mono text-sm"
        placeholder="Ketik sesuatu..."
      />
      <button
        onClick={handleSubmit}
        disabled={isPending}
        className="bg-accent text-black font-semibold px-4 py-2 rounded-sm transition-opacity disabled:opacity-50 mt-2"
      >
        {isPending ? "Menyimpan..." : "Simpan via Transition"}
      </button>
      {error && <p className="error text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export function React19Demo() {
  const [state, submitAction, isPending] = useActionState(ping, { error: null });
  const [pongPromise] = useState(() => getPongPromise());

  return (
    <div className="my-8 p-6 border border-accent/30 rounded-lg bg-black/40 backdrop-blur-sm space-y-6">
      <div className="border-b border-line pb-3">
        <span className="font-mono text-xs text-accent uppercase tracking-widest">
          ⚡ Interactive Live Demo (React 19)
        </span>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h4 className="font-bold mb-2 text-white">1. Form Action & `useFormStatus`</h4>
          <form action={submitAction} className="p-4 border border-line rounded-md bg-white/5 flex flex-col gap-3 w-full md:w-1/2">
            <label htmlFor="name" className="text-xs font-mono text-white/70">
              Input Nama:
            </label>
            <input
              type="text"
              name="name"
              disabled={isPending}
              className="bg-white text-black p-2 rounded-sm font-mono text-sm"
              placeholder="Masukan nama..."
            />
            <SubmitButton />
            {state.error && <p className="error text-red-500 text-sm">{state.error}</p>}
            {state.success && <p className="text-green-500 text-sm font-mono">Response: {state.data}</p>}
          </form>
        </div>

        <div>
          <h4 className="font-bold mb-2 text-white">2. Hook `use()` dengan Promise & Suspense</h4>
          <div className="p-4 flex flex-col gap-2 w-full md:w-1/2 border border-line rounded-md bg-white/5">
            <Suspense fallback={<p className="text-gray-400 font-mono text-sm animate-pulse">Memuat pesan via Suspense...</p>}>
              <MessageComponent promise={pongPromise} />
            </Suspense>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-2 text-white">3. useTransition</h4>
          <UpdateNameStartTransition />
        </div>
      </div>
    </div>
  );
}
