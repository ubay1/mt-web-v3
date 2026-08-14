import ReactLesson1 from './id/react-lesson-1.mdx';
import ReactLesson2 from './id/react-lesson-2.mdx';
import ReactLesson3 from './id/react-lesson-3.mdx';
import ReactLesson4 from './id/react-lesson-4.mdx';
import ReactLesson5 from './id/react-lesson-5.mdx';
import ReactLesson6 from './id/react-lesson-6.mdx';
import ReactLesson7 from './id/react-lesson-7.mdx';
import ReactLesson8 from './id/react-lesson-8.mdx';
import ReactLesson9 from './id/react-lesson-9.mdx';
import ReactLesson10 from './id/react-lesson-10.mdx';
import ReactLesson11 from './id/react-lesson-11.mdx';
import ReactLesson12 from './id/react-lesson-12.mdx';
import ReactLesson13 from './id/react-lesson-13.mdx';
import ReactLesson14 from './id/react-lesson-14.mdx';
import ReactLesson15 from './id/react-lesson-15.mdx';
import ReactLesson16 from './id/react-lesson-16.mdx';
import ReactLesson17 from './id/react-lesson-17.mdx';
import GolangBasics1 from './id/golang-basics-1-package.mdx';
import GolangBasics2 from './id/golang-basics-2-exported.mdx';
import GolangBasics3 from './id/golang-basics-3-functions.mdx';
import GolangBasics4 from './id/golang-basics-4-variables.mdx';
import GolangBasics5 from './id/golang-basics-5-constants.mdx';
import GolangLesson2 from './id/golang-lesson-2-flow-control.mdx';
import GolangLesson3 from './id/golang-lesson-3-tipe-lanjutan.mdx';
import GolangLesson4 from './id/golang-lesson-4-method-dan-interface.mdx';

export const learnId = {
  'react-mastery': {

    title: 'Menguasai React.js',
    description: 'Belajar fundamental React.js dari awal hingga mahir, termasuk komponen, state, & hooks.',
    lessons: [
      {
        id: 'lesson-1',
        title: 'Pengenalan React',
        content: ReactLesson1
      },
      {
        id: 'lesson-2',
        title: 'Event Handler, Conditional, List Rendering, & useEffect (Data Fetching)',
        content: ReactLesson2
      },
      {
        id: 'lesson-3',
        title: 'State Management Global (React Context API) & Zustand',
        content: ReactLesson3
      },
      {
        id: 'lesson-4',
        title: 'React 19: Actions, useActionState & useFormStatus',
        content: ReactLesson4
      },
      {
        id: 'lesson-5',
        title: 'React 19: Optimistic UI (useOptimistic)',
        content: ReactLesson5
      },
      {
        id: 'lesson-6',
        title: 'React 19: Pembaca Async Data dengan Hook use()',
        content: ReactLesson6
      },
      {
        id: 'lesson-7',
        title: 'React 19: API baru react-dom/static untuk SSG dan perbandingan beberapa strategi rendering',
        content: ReactLesson7
      },
      {
        id: 'lesson-8',
        title: 'React 19: ref Prop & <Context>',
        content: ReactLesson8
      },
      {
        id: 'lesson-9',
        title: 'React 19: React Server Component (RSC), Klien vs Server, & Kapan Menggunakannya',
        content: ReactLesson9
      },
      {
        id: 'lesson-10',
        title: 'React 19: Server Actions',
        content: ReactLesson10
      },
      {
        id: 'lesson-11',
        title: 'React Hooks: useCallback & React.memo',
        content: ReactLesson11
      },
      {
        id: 'lesson-12',
        title: 'React Hooks: useEffect & Aturan Dependency',
        content: ReactLesson12
      },
      {
        id: 'lesson-13',
        title: 'React Hooks: Perbedaan useEffect & useLayoutEffect',
        content: ReactLesson13
      },
      {
        id: 'lesson-14',
        title: 'React Hooks: useDeferredValue ("Debounce" Tanpa Timer)',
        content: ReactLesson14
      },
      {
        id: 'lesson-15',
        title: 'React Hooks: Context & Store Hooks (useContext & useSyncExternalStore)',
        content: ReactLesson15
      },
      {
        id: 'lesson-16',
        title: 'React Hooks: Utility Hooks (useId & useDebugValue)',
        content: ReactLesson16
      },
      {
        id: 'lesson-17',
        title: 'React Hooks: Custom Hooks & Best Practices',
        content: ReactLesson17
      }
    ]
  },
  'golang-mastery': {
    title: 'Belajar Golang (Go Tour)',
    description: 'Catatan belajar Golang dari dasar hingga konsep lanjutan seperti method dan interface.',
    lessons: [
      {
        id: 'lesson-1-1',
        title: 'Golang Basics: Package & Import',
        content: GolangBasics1
      },
      {
        id: 'lesson-1-2',
        title: 'Golang Basics: Exported vs Unexported',
        content: GolangBasics2
      },
      {
        id: 'lesson-1-3',
        title: 'Golang Basics: Functions',
        content: GolangBasics3
      },
      {
        id: 'lesson-1-4',
        title: 'Golang Basics: Variables',
        content: GolangBasics4
      },
      {
        id: 'lesson-1-5',
        title: 'Golang Basics: Constants',
        content: GolangBasics5
      },
      {
        id: 'lesson-2',
        title: 'Flow Control (Loops & Branches)',
        content: GolangLesson2
      },
      {
        id: 'lesson-3',
        title: 'Tipe Lanjutan (Pointer, Struct, Slice, Map)',
        content: GolangLesson3
      },
      {
        id: 'lesson-4',
        title: 'Method dan Interface (OOP ala Golang)',
        content: GolangLesson4
      }
    ]
  }
};
