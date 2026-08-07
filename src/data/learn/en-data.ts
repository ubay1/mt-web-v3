import reactLesson1 from './en/react-lesson-1';
import reactLesson2 from './en/react-lesson-2';
import reactLesson3 from './en/react-lesson-3';
import reactLesson4 from './en/react-lesson-4';

export const learnEn = {
  'react-mastery': {
    title: 'Mastering React.js',
    description: 'Learn React.js fundamentals from scratch to advanced, including components, state, and hooks.',
    lessons: [
      {
        id: 'lesson-1',
        title: 'Introduction to React',
        content: reactLesson1
      },
      {
        id: 'lesson-2',
        title: 'Components and Props',
        content: reactLesson2
      },
      {
        id: 'lesson-3',
        title: 'Global State Management (React Context API) & Zustand',
        content: reactLesson3
      },
      {
        id: 'lesson-4',
        title: "What's New in React 19 (Actions, useActionState, etc.)",
        content: reactLesson4
      }
    ]
  }
};
