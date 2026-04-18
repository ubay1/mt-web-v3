const content = `# Struktur Kode yang Rapi dengan Clean Architecture

Apakah proyek Node.js Anda berantakan? Clean Architecture membantu memisahkan logika bisnis dari detail teknis.

## Lapisan (Layers)
1. **Domain**: Aturan bisnis murni (Entities & Use Cases).
2. **Infrastructure**: Implementasi database atau external API.
3. **Interface**: Controller, Routes, dan Presenter.

Keuntungannya adalah kode Anda menjadi mudah ditest dan tidak bergantung pada framework tertentu. Jika Anda ingin mengganti database dari MongoDB ke PostgreSQL, Anda hanya perlu mengubah lapisan Infrastructure.
`;
export default content;
