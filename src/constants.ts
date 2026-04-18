import { notesId } from './data/notes/id';
import { notesEn } from './data/notes/en';

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
  { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
  { name: 'Backend', items: ['AdonisJS', 'Node.js', 'Laravel', 'Express'] },
  { name: 'Tools', items: ['Git', 'Docker', 'Vite', 'VS Code'] },
  { name: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
];

export const PROJECTS = [
  {
    title: 'Adonis Blog System',
    description: 'Sistem blog lengkap dengan autentikasi, manajemen kategori, dan catatan teknis.',
    tech: ['AdonisJS', 'Lucid ORM', 'PostgreSQL'],
    link: 'https://ubay-dillah.netlify.app/id/catatan',
    image: 'https://picsum.photos/seed/code/800/600',
    category: 'backend',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Platform jual beli modern dengan fitur keranjang belanja dan pembayaran.',
    tech: ['React', 'Node.js', 'Tailwind'],
    link: '#',
    image: 'https://picsum.photos/seed/shop/800/600',
    category: 'fullstack',
  },
  {
    title: 'Task Management App',
    description: 'Aplikasi manajemen tugas produktivitas dengan real-time updates.',
    tech: ['Next.js', 'TypeScript', 'Supabase'],
    link: '#',
    image: 'https://picsum.photos/seed/task/800/600',
    category: 'fullstack',
  },
  {
    title: 'AI Portfolio Builder',
    description: 'Aplikasi pendorong karir yang membantu dev membangun portfolio secara otomatis menggunakan Gemini AI.',
    tech: ['React', 'Gemini API', 'Vite'],
    link: '#',
    image: 'https://picsum.photos/seed/ai/800/600',
    category: 'frontend',
  },
  {
    title: 'Real-time Chat Engine',
    description: 'Chat engine skala besar dengan dukungan kanal grup, pesan suara, dan status online.',
    tech: ['Node.js', 'Socket.io', 'Redis'],
    link: '#',
    image: 'https://picsum.photos/seed/chat/800/600',
    category: 'backend',
  },
  {
    title: 'Finance Tracker',
    description: 'Pantau pengeluaran dan pemasukan bulanan dengan dashboard grafik yang interaktif.',
    tech: ['Next.js', 'Chart.js', 'PostgreSQL'],
    link: '#',
    image: 'https://picsum.photos/seed/money/800/600',
    category: 'fullstack',
  },
  {
    title: 'Brutalist Social Media',
    description: 'Eksperimen UI media sosial dengan estetika brutalist dan interaksi fokus pada teks.',
    tech: ['Vue.js', 'Tailwind CSS', 'Firebase'],
    link: '#',
    image: 'https://picsum.photos/seed/brutal/800/600',
    category: 'frontend',
  },
  {
    title: 'Weather Insight',
    description: 'Dashboard cuaca global dengan prediksi mingguan dan visualisasi kondisi atmosfer.',
    tech: ['React', 'OpenWeatherAPI', 'Framer Motion'],
    link: '#',
    image: 'https://picsum.photos/seed/weather/800/600',
    category: 'frontend',
  },
  {
    title: 'Fitness Tracker Mobile',
    description: 'Aplikasi mobile untuk mencatat aktivitas olahraga dan progres kesehatan harian.',
    tech: ['React Native', 'Expo', 'NestJS'],
    link: '#',
    image: 'https://picsum.photos/seed/fitness/800/600',
    category: 'mobile',
  },
  {
    title: 'Smart Learning Portal',
    description: 'Learning Management System (LMS) khusus untuk instruktur independen.',
    tech: ['Laravel', 'MySQL', 'Livewire'],
    link: '#',
    image: 'https://picsum.photos/seed/learning/800/600',
    category: 'backend',
  },
];
