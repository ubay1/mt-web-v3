import ReactLesson1 from './en/react-lesson-1.mdx';
import ReactLesson2 from './en/react-lesson-2.mdx';
import ReactLesson3 from './en/react-lesson-3.mdx';
import ReactLesson4 from './en/react-lesson-4.mdx';

export const learnEn = {
  'react-mastery': {
    title: 'Mastering React.js',
    description: 'Learn React.js fundamentals from scratch to advanced, including components, state, & hooks.',
    lessons: [
      {
        id: 'lesson-1',
        title: 'Introduction to React',
        content: ReactLesson1
      },
      {
        id: 'lesson-2',
        title: 'Event Handlers, Conditional, List Rendering, & useEffect (Data Fetching)',
        content: ReactLesson2
      },
      {
        id: 'lesson-3',
        title: 'Global State Management (React Context API) & Zustand',
        content: ReactLesson3
      },
      {
        id: 'lesson-4',
        title: 'New Features in React 19 (Actions, useActionState, etc)',
        content: ReactLesson4
      }
    ]
  }
};
