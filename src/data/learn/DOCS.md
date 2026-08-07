## Cara Menambahkan Materi Belajar Baru (Berbasis MDX)

Untuk menambahkan materi belajar baru (misalnya seri tutorial **"Menguasai Next.js"**), Anda dapat membuat file `.mdx`. MDX memungkinkan Anda menulis format Markdown serta menyertakan komponen React interaktif secara langsung di dalam materi.

Berikut adalah urutan langkahnya:

### 1. Buat File Konten MDX (ID dan EN)

Buat file `.mdx` baru di dalam folder bahasa yang sesuai (`src/data/learn/id/` dan `src/data/learn/en/`) untuk setiap pelajarannya (_lesson_).

**Contoh: Membuat pelajaran pertama untuk materi Next.js**

- Buat file `src/data/learn/id/nextjs-lesson-1.mdx` (untuk bahasa Indonesia):
  ```mdx
  import { MyInteractiveWidget } from '@/components/MyInteractiveWidget';

  # Pengenalan Next.js
  Next.js adalah framework React untuk produksi...

  <MyInteractiveWidget />
  ```
- Lakukan hal yang sama untuk bahasa Inggris di `src/data/learn/en/nextjs-lesson-1.mdx`.

### 2. Daftarkan di `id-data.ts` dan `en-data.ts`

Buka file konfigurasi datanya, yaitu `src/data/learn/id-data.ts` dan `src/data/learn/en-data.ts`.

- Impor komponen MDX yang baru saja Anda buat di bagian atas.
- Tambahkan _key_ baru (misalnya `nextjs-mastery`) sejajar dengan `react-mastery`.

**Contoh di `id-data.ts`:**

```typescript
import reactLesson1 from './id/react-lesson-1.mdx';
// 1. Import file MDX baru
import nextjsLesson1 from './id/nextjs-lesson-1.mdx';

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

Buka file `src/constants.ts`. Cari konstan `LEARNS` dan tambahkan _object_ baru ke dalam array tersebut dengan me-_mapping_ ID yang baru Anda buat.

```typescript
export const LEARNS = [
  {
    id: "react-mastery",
    // ...
  },
  {
    id: "nextjs-mastery",
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

Selesai! UI akan secara otomatis menampilkan materi berbasis MDX dan merender komponen interaktif di dalamnya!
