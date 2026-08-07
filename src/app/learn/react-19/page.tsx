/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import { useActionState, use, Suspense, useState, useTransition } from 'react';
import { useFormStatus } from 'react-dom';

const apiPong = async () => {
  const { data, error } = await fetch('/api/ping').then(res => res.json());
  if (error) return { error };
  return { success: true, data };
}

let cachedPongPromise: Promise<any> | null = null;
const getPongPromise = () => {
  if (!cachedPongPromise) {
    cachedPongPromise = apiPong();
  }
  return cachedPongPromise;
}

const ping = () => {
  return apiPong();
}


function MessageComponent({ promise }: { promise: Promise<any> }) {
  const message = use(promise);
  return <p className="text-green-500 font-bold">{message.data}</p>;
}

function SubmitButton() {
  const { pending } = useFormStatus(); // Otomatis tahu jika form sedang disubmit

  return (
    <button type="submit" disabled={pending} className='bg-accent text-black p-2'>
      {pending ? 'Menyimpan...' : 'Simpan'}
    </button>
  );
}

function UpdateNameStartTransition({ }) {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const { error, data } = await ping();
      if (error) {
        setError(error);
        return;
      }
      console.log('data', data);
      setName(data);
    })
  };

  return (
    <div className='p-4 flex flex-col gap-2 w-1/2 border border-gray-700 rounded-md mt-4'>
      <h3 className="font-bold text-lg mb-2">Contoh Transition</h3>
      <input value={name} onChange={(event) => setName(event.target.value)} className="bg-white text-black p-2" />
      <button onClick={handleSubmit} disabled={isPending} className='bg-accent text-black p-2'>
        {isPending ? 'Menyimpan...' : 'Simpan'}
      </button>
      {error && <p className="error text-red-500">{error}</p>}
    </div>
  );
}

function FormPing() {
  const [state, submitAction, isPending] = useActionState(ping, { error: null });
  const [pongPromise] = useState(() => getPongPromise());

  return (
    <div className='flex flex-col gap-4'>
      <form action={submitAction} className='p-4  flex flex-col gap-2 w-1/2'>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" disabled={isPending} className="bg-white text-black p-2" placeholder='masukan nama...' />
        <SubmitButton />
        {state.error && <p className="error text-red-500">{state.error}</p>}
        {state.success && <p className="text-green-500">{state.data}</p>}
      </form>

      <div className='p-4 flex flex-col gap-2 w-1/2 border border-gray-700 rounded-md mt-4'>
        <h3 className="font-bold text-lg mb-2">Contoh Hook use()</h3>
        <Suspense fallback={<p className="text-gray-400">Memuat pesan...</p>}>
          <MessageComponent promise={pongPromise} />
        </Suspense>
      </div>

      <UpdateNameStartTransition />
    </div>
  );
}

export default FormPing