import ReactLesson1 from './id/react-lesson-1.mdx';
import ReactLesson2 from './id/react-lesson-2.mdx';
import ReactLesson3 from './id/react-lesson-3.mdx';
import ReactLesson4 from './id/react-lesson-4.mdx';

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
        title: 'Fitur Baru di React 19 (Actions, useActionState, use(), dll)',
        content: ReactLesson4
      }
    ]
  }
};
