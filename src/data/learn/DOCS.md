## Cara Menambahkan Materi Belajar Baru

Untuk menambahkan materi belajar baru (misalnya seri tutorial **"Menguasai Next.js"**), Anda cukup mengikuti 3 langkah mudah berikut ini. Arsitekturnya sudah kita buat sangat rapi dan modular.

Berikut adalah urutan langkahnya:

### 1. Buat File Konten Markdown (ID dan EN)

Buat file TypeScript baru di dalam folder bahasa yang sesuai untuk setiap pelajarannya (_lesson_).

**Contoh: Membuat pelajaran pertama untuk materi Next.js**

- Buat file `src/data/learn/id/nextjs-lesson-1.ts` (untuk bahasa Indonesia):
  ```typescript
  const content = `
  # Pengenalan Next.js
  Next.js adalah framework React untuk produksi...
  `;
  export default content;
  ```
- Lakukan hal yang sama untuk bahasa Inggris di `src/data/learn/en/nextjs-lesson-1.ts`.

### 2. Daftarkan di `id-data.ts` dan `en-data.ts`

Buka file konfigurasi datanya, yaitu `src/data/learn/id-data.ts` dan `src/data/learn/en-data.ts`.

- Impor file yang baru saja Anda buat di bagian atas.
- Tambahkan _key_ baru (misalnya `nextjs-mastery`) sejajar dengan `react-mastery`.

**Contoh di `id-data.ts`:**

```typescript
import reactLesson1 from './id/react-lesson-1';
// 1. Import file materi baru
import nextjsLesson1 from './id/nextjs-lesson-1';

export const learnId = {
  'react-mastery': { ... },

  // 2. Tambahkan block materi baru
  'nextjs-mastery': {
    title: 'Menguasai Next.js',
    description: 'Belajar fundamental Next.js dari awal...',
    lessons: [
      {
        id: 'lesson-1',
        title: 'Pengenalan Next.js',
        content: nextjsLesson1
      }
      // Tambahkan lesson-2, lesson-3, dst di sini nantinya
    ]
  }
};
```

_(Jangan lupa lakukan hal yang persis sama di `en-data.ts` dengan terjemahan bahasa Inggris)._

### 3. Tampilkan di Halaman Web via `constants.ts`

Langkah terakhir, buka file `src/constants.ts`. Cari konstan `LEARNS` dan tambahkan _object_ baru ke dalam array tersebut dengan me-_mapping_ ID yang baru Anda buat.

```typescript
export const LEARNS = [
  {
    id: "react-mastery",
    // ... (data react sebelumnya)
  },
  // Tambahkan materi baru di sini:
  {
    id: "nextjs-mastery", // Harus sama dengan key di id-data.ts & en-data.ts
    date: "2024-06-01",
    tags: ["Next.js", "Frontend"],
    title: {
      id: learnId["nextjs-mastery"].title,
      en: learnEn["nextjs-mastery"].title,
    },
    description: {
      id: learnId["nextjs-mastery"].description,
      en: learnEn["nextjs-mastery"].description,
    },
    lessons: learnId["nextjs-mastery"].lessons.map((lesson, idx) => ({
      id: lesson.id,
      title: {
        id: lesson.title,
        en: learnEn["nextjs-mastery"].lessons[idx].title,
      },
      content: {
        id: lesson.content,
        en: learnEn["nextjs-mastery"].lessons[idx].content,
      },
    })),
  },
];
```

Selesai! Setelah Anda _save_, UI Anda akan secara otomatis memunculkan kartu **"Menguasai Next.js"** di halaman **Learn**, dan ketika diklik akan langsung memunculkan _sidebar_ pelajaran-pelajarannya di samping.
