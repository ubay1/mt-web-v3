/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export async function myServerAction(prevState: any, formData: FormData) {
  // Simulasi waktu proses di server (delay 1.5 detik)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const name = formData.get("name")?.toString();

  // Validasi input
  if (!name || name.trim() === "") {
    return { error: "Nama tidak boleh kosong!", success: false };
  }

  // Simulasi fatal error (Uncaught Exception)
  if (name.toLowerCase() === "crash") {
    throw new Error("💥 BAM! Server mengalami fatal error (Exception).");
  }

  // Simulasi jika terjadi error logika bisnis di server
  if (name.toLowerCase() === "error") {
    return { error: "Ups! Simulasi error logika dari server.", success: false };
  }

  // Berhasil
  return {
    message: `Halo ${name}, Server Action berhasil memproses datamu secara langsung tanpa API Route!`,
    success: true,
  };
}

export async function getRandomDogImage() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random", {
      cache: "no-store", // Jangan simpan di cache agar selalu dapat gambar baru
    });

    const data = await response.json();

    if (data.status === "success") {
      return { url: data.message, success: true };
    } else {
      return { error: "Gagal mendapatkan gambar anjing.", success: false };
    }
  } catch (error) {
    console.error("Fetch dog image error:", error);
    return { error: "Terjadi kesalahan saat menghubungi API.", success: false };
  }
}
