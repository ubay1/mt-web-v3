/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState, use, Suspense, useState, useTransition, useOptimistic } from "react";
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
  return <p className="text-green-500 font-bold font-mono text-sm">Response: {message.data}</p>;
}

export function UsePromiseDemo() {
  const [pongPromise, setPongPromise] = useState(() => getPongPromise());

  const handleRefetch = () => {
    setPongPromise(apiPong());
  };

  return (
    <div className="my-6 p-4 border border-line rounded-md bg-white/5 flex flex-col gap-2 w-full">
      <div className="text-xs font-mono text-accent uppercase tracking-wider mb-1">
        ⚡ Live Demo: Hook use() & Suspense
      </div>
      <Suspense fallback={<p className="text-gray-400 font-mono text-sm animate-pulse">Memuat data via Suspense...</p>}>
        <MessageComponent promise={pongPromise} />
      </Suspense>

      <button
        onClick={handleRefetch}
        className="mt-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono rounded w-fit transition-colors"
      >
        Refetch Data
      </button>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-accent text-black font-semibold px-4 py-2 rounded-sm transition-opacity disabled:opacity-50 text-sm"
    >
      {pending ? "Menyimpan (useFormStatus)..." : "Simpan via Form Action"}
    </button>
  );
}

export function FormActionDemo() {
  const [state, submitAction, isPending] = useActionState(ping, { error: null });

  return (
    <div className="my-6 p-4 border border-line rounded-md bg-white/5 flex flex-col gap-3 w-full">
      <div className="text-xs font-mono text-accent uppercase tracking-wider mb-1">
        ⚡ Live Demo: useActionState & useFormStatus
      </div>
      <form action={submitAction} className="flex flex-col gap-3">
        <label htmlFor="name" className="text-xs font-mono text-white/70">
          Input Nama:
        </label>
        <input
          type="text"
          name="name"
          disabled={isPending}
          className="bg-white text-black p-2 rounded-sm font-mono text-sm"
          placeholder="Masukkan nama..."
        />
        <SubmitButton />
        {state.error && <p className="error text-red-500 text-sm">{state.error}</p>}
        {state.success && (
          <p className="text-green-500 text-sm font-mono">Response: {state.data}</p>
        )}
      </form>
    </div>
  );
}

export function UseTransitionDemo() {
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
    <div className="my-6 p-4 border border-line rounded-md bg-white/5 flex flex-col gap-2 w-full">
      <div className="text-xs font-mono text-accent uppercase tracking-wider mb-1">
        ⚡ Live Demo: useTransition
      </div>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="bg-white text-black p-2 rounded-sm font-mono text-sm"
        placeholder="Ketik nama..."
      />
      <button
        onClick={handleSubmit}
        disabled={isPending}
        className="bg-accent text-black font-semibold px-4 py-2 rounded-sm transition-opacity disabled:opacity-50 mt-1 text-sm"
      >
        {isPending ? "Menyimpan via Transition..." : "Simpan via Transition"}
      </button>
      {error && <p className="error text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export function UseOptimisticDemo() {
  const [messages, setMessages] = useState<Array<{ text: string; sending?: boolean }>>([
    { text: "Pesan 1 (Server Synced)" },
  ]);
  const [simulateError, setSimulateError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (currentState, newMessage: string) => [
      ...currentState,
      { text: newMessage, sending: true },
    ]
  );

  const sendMessageAction = async (formData: FormData) => {
    const text = formData.get("message") as string;
    if (!text || text.trim() === "") return;

    setErrorMessage(null);
    // 1. Tampilkan secara optimistik langsung di UI
    addOptimisticMessage(text);

    // 2. Simulasi delay API (1.5 detik)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // 3. Jika simulasi error aktif
    if (simulateError) {
      setErrorMessage("❌ Server Gagal! Pesan dibatalkan (Automatic Rollback).");
      return;
    }

    // Sukses -> Update state resmi
    setMessages((prev) => [...prev, { text, sending: false }]);
  };

  return (
    <div className="my-6 p-4 border border-line rounded-md bg-white/5 flex flex-col gap-3 w-full">
      <div className="flex flex-col justify-between items-start gap-2">
        <div className="text-xs font-mono text-accent uppercase tracking-wider">
          ⚡ Live Demo: useOptimistic
        </div>
        <label className="flex items-center gap-1.5 cursor-pointer text-xs text-red-400 font-mono">
          <input
            type="checkbox"
            checked={simulateError}
            onChange={(e) => setSimulateError(e.target.checked)}
            className="accent-red-500 cursor-pointer"
          />
          Simulasi Server Error
        </label>
      </div>

      <div className="space-y-1.5 max-h-40 overflow-y-auto font-mono text-xs">
        {optimisticMessages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded flex justify-between items-center ${msg.sending
              ? "bg-accent/10 border border-accent/30 text-accent"
              : "bg-white/10 text-white"
              }`}
          >
            <span>{msg.text}</span>
            {msg.sending && <span className="text-[10px] animate-pulse">(Sending...)</span>}
          </div>
        ))}
      </div>

      {errorMessage && (
        <span className="text-red-400 text-xs font-mono bg-red-500/10 p-2 border border-red-500/20 rounded-sm">
          {errorMessage}
        </span>
      )}

      <form action={sendMessageAction} className="flex gap-2 mt-1">
        <input
          name="message"
          type="text"
          placeholder="Ketik pesan..."
          className="bg-white text-black p-2 text-xs rounded-sm flex-1 font-mono"
        />
        <button
          type="submit"
          className="bg-accent text-black font-semibold px-3 py-1.5 text-xs rounded-sm"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}

export function React19Demo() {
  return (
    <div className="my-8 p-6 border border-accent/30 rounded-lg bg-black/40 backdrop-blur-sm space-y-6">
      <UseTransitionDemo />
      <FormActionDemo />
      <UseOptimisticDemo />
      <UsePromiseDemo />
    </div>
  );
}
