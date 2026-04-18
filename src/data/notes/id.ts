import introContent from './id/intro-modern-web.md?raw';
import tailwindContent from './id/mastering-tailwind.md?raw';
import mindsetContent from './id/full-stack-mentality.md?raw';
import tsContent from './id/typescript-best-practices.md?raw';
import reactPerfContent from './id/performance-optimization.md?raw';
import cleanArchContent from './id/clean-architecture.md?raw';

export const notesId = {
  'intro-modern-web': {
    title: 'Pengenalan Web Modern',
    content: introContent
  },
  'mastering-tailwind': {
    title: 'Menguasai Tailwind CSS v4',
    content: tailwindContent
  },
  'full-stack-mentality': {
    title: 'Mentalitas Full Stack Developer',
    content: mindsetContent
  },
  'typescript-best-practices': {
    title: 'Best Practices TypeScript 2024',
    content: tsContent
  },
  'performance-optimization': {
    title: 'Optimasi Performa React',
    content: reactPerfContent
  },
  'clean-architecture': {
    title: 'Clean Architecture di Node.js',
    content: cleanArchContent
  }
};

