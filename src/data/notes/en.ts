import introContent from './en/intro-modern-web.md?raw';
import tailwindContent from './en/mastering-tailwind.md?raw';
import mindsetContent from './en/full-stack-mentality.md?raw';
import tsContent from './en/typescript-best-practices.md?raw';
import reactPerfContent from './en/performance-optimization.md?raw';
import cleanArchContent from './en/clean-architecture.md?raw';

export const notesEn = {
  'intro-modern-web': {
    title: 'Introduction to Modern Web',
    content: introContent
  },
  'mastering-tailwind': {
    title: 'Mastering Tailwind CSS v4',
    content: tailwindContent
  },
  'full-stack-mentality': {
    title: 'Full Stack Developer Mentality',
    content: mindsetContent
  },
  'typescript-best-practices': {
    title: 'TypeScript Best Practices 2024',
    content: tsContent
  },
  'performance-optimization': {
    title: 'React Performance Optimization',
    content: reactPerfContent
  },
  'clean-architecture': {
    title: 'Clean Architecture in Node.js',
    content: cleanArchContent
  }
};

