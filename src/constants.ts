import { notesId } from './data/notes/id-data';
import { notesEn } from './data/notes/en-data';

export const NAV_LINKS = [
  { name: 'nav.home', href: '#home' },
  { name: 'nav.about', href: '#about' },
  { name: 'nav.skills', href: '#skills' },
  { name: 'nav.projects', href: '#projects' },
  { name: 'nav.notes', href: '/notes' },
  { name: 'nav.contact', href: '#contact' },
];

export const NOTES = [
  {
    id: 'intro-modern-web',
    date: '2024-03-20',
    tags: ['Web', 'Architecture'],
    title: { id: notesId['intro-modern-web'].title, en: notesEn['intro-modern-web'].title },
    content: { id: notesId['intro-modern-web'].content, en: notesEn['intro-modern-web'].content }
  },
  {
    id: 'mastering-tailwind',
    date: '2024-04-05',
    tags: ['CSS', 'Design'],
    title: { id: notesId['mastering-tailwind'].title, en: notesEn['mastering-tailwind'].title },
    content: { id: notesId['mastering-tailwind'].content, en: notesEn['mastering-tailwind'].content }
  },
  {
    id: 'full-stack-mentality',
    date: '2024-04-10',
    tags: ['Career', 'Mindset'],
    title: { id: notesId['full-stack-mentality'].title, en: notesEn['full-stack-mentality'].title },
    content: { id: notesId['full-stack-mentality'].content, en: notesEn['full-stack-mentality'].content }
  },
  {
    id: 'typescript-best-practices',
    date: '2024-04-15',
    tags: ['Code', 'Development'],
    title: { id: notesId['typescript-best-practices'].title, en: notesEn['typescript-best-practices'].title },
    content: { id: notesId['typescript-best-practices'].content, en: notesEn['typescript-best-practices'].content }
  },
  {
    id: 'performance-optimization',
    date: '2024-04-22',
    tags: ['Performance', 'React'],
    title: { id: notesId['performance-optimization'].title, en: notesEn['performance-optimization'].title },
    content: { id: notesId['performance-optimization'].content, en: notesEn['performance-optimization'].content }
  },
  {
    id: 'clean-architecture',
    date: '2024-05-01',
    tags: ['Architecture', 'Backend'],
    title: { id: notesId['clean-architecture'].title, en: notesEn['clean-architecture'].title },
    content: { id: notesId['clean-architecture'].content, en: notesEn['clean-architecture'].content }
  }
];

export const SKILLS = [
  { name: 'Frontend', items: ['React', 'Next.js', 'Vue', 'Nuxt.js', 'Svelte', 'Tailwind CSS', 'TypeScript'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'Go'] },
  { name: 'Tools', items: ['Git', 'Docker', 'Antigravity', 'VS Code'] },
  { name: 'Database', items: ['PostgreSQL', 'Supabase', 'SQLite'] },
];

export const PROJECTS = [
  {
    title: 'Sveltekit HPKE Wrapper',
    description: 'Library wrapper untuk encryption data yang dibuat menggunakan Typescript dan hpke-js.',
    tech: ['TypeScript', 'hpke-js', 'Sveltekit'],
    link: 'https://www.npmjs.com/package/@ubay182/sveltekit-hpke-wrapper',
    image: '/hpke.jpeg',
    category: 'library',
  },
  {
    title: 'Mini Super Fetch',
    description: 'Library kecil untuk fetch data yang memiliki fitur seperti axios dan tanstack query.',
    tech: ['TypeScript'],
    link: 'https://www.npmjs.com/package/@ubay182/mini-super-fetch',
    image: '/mini-super-fetch.jpeg',
    category: 'library',
  },
  {
    title: 'Meme Generator',
    description: 'Aplikasi meme generator untuk senang senang dan share ke sosial media.',
    tech: ['React Native', 'React Native Gesture', 'SKIA', 'React Native Reanimated', 'Zustand', 'TypeScript'],
    link: '#',
    image: '/meme.jpeg',
    category: 'mobile',
  },
  {
    title: 'Shopify - Autopro Performance',
    description: 'UI Theme shopify khusus untuk automotive',
    tech: ['Liquid', 'Tailwind'],
    link: 'https://ubay-dev-studio.myshopify.com?preview_theme_id=153221562525',
    image: '/shopify-auto.jpeg',
    category: 'frontend',
  },
  {
    title: 'Shopify - Sun Store',
    description: 'UI Theme shopify khusus untuk ecommerce',
    tech: ['Liquid', 'Tailwind'],
    link: 'https://ubay-dev-studio.myshopify.com/?preview_theme_id=153275924637',
    image: '/shopify-sunstore.jpeg',
    category: 'frontend',
  },
  {
    title: 'Montrack',
    description: 'Aplikasi monitoring pengiriman barang antar negara atau antar kota yang memudahkan pengguna dalam melacak status kiriman secara real-time.',
    tech: ['Nuxt.js', 'Echarts', 'React Native', 'Typescript', 'Tailwind'],
    link: 'https://anexindo.id',
    image: '/montrack-2.jpeg',
    category: 'frontend',
  },
  {
    title: 'Polri Connect',
    description: 'Aplikasi konferensi video yang dikembangkan untuk kebutuhan internal kepolisian, mirip dengan Google Meet atau Zoom. Aplikasi ini memungkinkan rapat virtual dan komunikasi jarak jauh, serta dilengkapi dengan fitur-fitur seperti berbagi layar dan dukungan multi-pengguna.',
    tech: ['Next.js', 'Typescript', 'Radix UI', 'Zustand', 'TrueConf SDK'],
    link: 'https://mobilevicon.polri.go.id/',
    image: '/polri-connect.jpeg',
    category: 'frontend',
  },
  {
    title: 'Sehat Indonesiaku',
    description: 'Platform kesehatan digital yang dikembangkan untuk memantau status kesehatan masyarakat di Indonesia. Diantaranya seperti pencatatan imunisasi rutin, pengelolaan data kesehatan, dan pelacakan riwayat medis.',
    tech: ['Nuxt.js', 'Typescript', 'Pinia', 'Uno CSS'],
    link: 'https://sehatindonesiaku.kemkes.go.id',
    image: '/asik-2.jpeg',
    category: 'frontend',
  },
  {
    title: 'Dashboard Sehat Indonesiaku',
    description: 'Platform untuk memantau dan menganalisis data kesehatan secara komprehensif.',
    tech: ['Echarts', 'Nuxt.js', 'Typescript', 'Pinia', 'Uno CSS'],
    link: 'https://sehatindonesiaku.kemkes.go.id',
    image: '/asik-dashboard.jpeg',
    category: 'frontend',
  },
  {
    title: 'Cek Kesehatan Gratis (CKG)',
    description: 'Program pemerintah yang bertujuan memberikan pemeriksaan kesehatan tanpa biaya kepada masyarakat Indonesia. agar masyarakat bisa melakukan deteksi dini berbagai penyakit serta memantau kondisi kesehatannya secara berkala.',
    tech: ['Nuxt.js', 'Typescript', 'Pinia', 'Uno CSS', 'JSPdf'],
    link: 'https://bblabkesling.go.id/r-tiga-cara-daftar-ckg',
    image: '/asik-ckg.jpeg',
    category: 'frontend',
  },
  {
    title: 'Kelola Uang',
    description: 'Aplikasi pengelola keuangan pribadi yang simpel dan mudah digunakan.',
    tech: ['Ionic', 'Typescript', 'Capacitor', 'Tailwind', 'SQLite'],
    link: 'https://kelola-uang.netlify.app/',
    image: '/kelola-uang.jpeg',
    category: 'mobile',
  },
  {
    title: 'Homi',
    description: 'Aplikasi smarthome yang memungkinkan pengguna mengontrol dan mengelola perangkat rumah pintar dari satu platform.',
    tech: ['React Native', 'Typescript', 'MQTT'],
    link: '#',
    image: '/homi.jpeg',
    category: 'mobile',
  },
];
