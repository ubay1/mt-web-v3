
export const metadata = {
  title: "SSG Demo: HPKE Encryption",
  description: "Halaman untuk mengetes proses enkripsi HPKE saat Build Time (SSG)",
};

export default async function HpkeSsgDemo() {
  // =======================================================================
  // AREA SSG (BUILD TIME)
  // Eksekusi package HPKE buatan Anda di area ini. Proses di sini hanya 
  // akan berjalan 1 kali saat Anda menjalankan `bun run build`.
  // 
  // Contoh:
  // const mySecretData = "Data rahasia ini tidak boleh bocor ke HTML";
  // const encryptedResult = await myCustomHpkeEncrypt(mySecretData);
  // =======================================================================

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-white">SSG Demo: HPKE Encryption</h1>
      <p className="text-gray-400 mb-8">
        Halaman ini dibuat sebagai kanvas untuk mengetes implementasi Masking API / enkripsi HPKE milik Anda pada fase <strong>Build Time (SSG)</strong>.
      </p>

      <div className="bg-[#1e1e1e] border border-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-[#00e5ff]">Hasil Pra-Render (Server-Side)</h2>
        <p className="text-sm text-gray-400 mb-4">
          Ganti blok di bawah ini dengan hasil <em>ciphertext</em> atau data yang sudah dienkripsi oleh package HPKE Anda. Pastikan string aslinya tidak tertulis di dalam output HTML.
        </p>

        <div className="p-4 bg-black border border-gray-700 rounded-md font-mono text-sm text-[#00ffcc] break-all">
          {/* Tampilkan variabel ciphertext Anda di sini */}
          [ CIPHERTEXT AKAN DITAMPILKAN DI SINI ]
        </div>
      </div>

      <div className="mt-8 bg-[#1e1e1e] border border-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-[#00e5ff]">Area Dekripsi (Client-Side)</h2>
        <p className="text-sm text-gray-400 mb-4">
          Buatlah sebuah <em>Client Component</em> (dengan <code>&quot;use client&quot;</code>) di sini untuk menerima <em>ciphertext</em> dari server sebagai <em>props</em>, lalu lakukan dekripsi menggunakan <em>private key</em> Anda di browser.
        </p>

        {/* <YourClientDecryptComponent ciphertext={encryptedResult} /> */}
      </div>
    </div>
  );
}
