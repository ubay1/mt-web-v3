import reactLesson1 from './id/react-lesson-1';
import reactLesson2 from './id/react-lesson-2';
import reactLesson3 from './id/react-lesson-3';
import reactLesson4 from './id/react-lesson-4';

export const learnId = {
  'react-mastery': {
    title: 'Menguasai React.js',
    description: 'Belajar fundamental React.js dari awal hingga mahir, termasuk komponen, state, & hooks.',
    lessons: [
      {
        id: 'lesson-1',
        title: 'Pengenalan React',
        content: reactLesson1
      },
      {
        id: 'lesson-2',
        title: 'Event Handler, Conditional, List Rendering, & useEffect (Data Fetching)',
        content: reactLesson2
      },
      {
        id: 'lesson-3',
        title: 'State Management Global (React Context API) & Zustand',
        content: reactLesson3
      },
      {
        id: 'lesson-4',
        title: 'Fitur Baru di React 19 (Actions, useActionState, dll)',
        content: reactLesson4
      }
    ]
  }
};
