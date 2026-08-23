import ReactLesson1 from './en/react-lesson-1.mdx';
import ReactLesson2 from './en/react-lesson-2.mdx';
import ReactLesson3 from './en/react-lesson-3.mdx';
import ReactLesson4 from './en/react-lesson-4.mdx';
import ReactLesson5 from './en/react-lesson-5.mdx';
import ReactLesson6 from './en/react-lesson-6.mdx';
import ReactLesson7 from './en/react-lesson-7.mdx';
import ReactLesson8 from './en/react-lesson-8.mdx';
import ReactLesson9 from './en/react-lesson-9.mdx';
import ReactLesson10 from './en/react-lesson-10.mdx';
import ReactLesson11 from './en/react-lesson-11.mdx';
import ReactLesson12 from './en/react-lesson-12.mdx';
import ReactLesson13 from './en/react-lesson-13.mdx';
import ReactLesson14 from './en/react-lesson-14.mdx';
import ReactLesson15 from './en/react-lesson-15.mdx';
import ReactLesson16 from './en/react-lesson-16.mdx';
import ReactLesson17 from './en/react-lesson-17.mdx';
import GolangBasics1 from './en/golang-basics-1-package.mdx';
import GolangBasics2 from './en/golang-basics-2-exported.mdx';
import GolangBasics3 from './en/golang-basics-3-functions.mdx';
import GolangBasics4 from './en/golang-basics-4-variables.mdx';
import GolangBasics5 from './en/golang-basics-5-constants.mdx';
import GolangLesson2 from './en/golang-lesson-2-flow-control.mdx';
import GolangLesson3 from './en/golang-lesson-3-tipe-lanjutan.mdx';
import GolangLesson4 from './en/golang-lesson-4-method-dan-interface.mdx';

// Dart Lessons (EN)
import DartLesson1 from './en/dart-lesson-1-intro.mdx';
import DartLesson2 from './en/dart-lesson-2-types-variables.mdx';
import DartLesson3 from './en/dart-lesson-3-null-safety.mdx';
import DartLesson4 from './en/dart-lesson-4-collections.mdx';
import DartLesson5 from './en/dart-lesson-5-control-flow.mdx';
import DartLesson6 from './en/dart-lesson-6-functions.mdx';
import DartLesson7 from './en/dart-lesson-7-oop-basics.mdx';
import DartLesson8 from './en/dart-lesson-8-oop-inheritance-interfaces.mdx';
import DartLesson9 from './en/dart-lesson-9-dart3-records-patterns.mdx';
import DartLesson10 from './en/dart-lesson-10-async-future-streams.mdx';

// Flutter Lessons (EN)
import FlutterLesson1 from './en/flutter-lesson-1-intro-widgets.mdx';
import FlutterLesson2 from './en/flutter-lesson-2-layouts.mdx';
import FlutterLesson3 from './en/flutter-lesson-3-inputs-forms.mdx';
import FlutterLesson4 from './en/flutter-lesson-4-navigation.mdx';
import FlutterLesson5 from './en/flutter-lesson-5-state-management.mdx';
import FlutterLesson6 from './en/flutter-lesson-6-networking-api.mdx';
import FlutterLesson7 from './en/flutter-lesson-7-theming-animations.mdx';

import BigONotation from './en/big-o-notation.mdx';
import SecurityLesson1 from './en/security-lesson-1-backup-files.mdx';
import SecurityLesson2 from './en/security-lesson-2-debug-pages.mdx';
import SecurityLesson3 from './en/security-lesson-3-exposed-git.mdx';
import SecurityLesson4 from './en/security-lesson-4-cookie-manipulation.mdx';
import SecurityLesson5 from './en/security-lesson-5-access-private-user-data.mdx';
import SecurityLesson6 from './en/security-lesson-6-user-role-modification.mdx';
import SecurityLesson7 from './en/security-lesson-7-http-trace-access-control.mdx';

export const learnEn = {
  'security-mastery': {
    title: 'Bug Hunting & Web Security Mastery',
    description: 'A practical guide to bug hunting and web security: finding vulnerabilities, reconnaissance techniques, exploitation methodologies, and mitigation.',
    lessons: [
      {
        id: 'security-lesson-1',
        title: 'Information Disclosure: Backup File Leaks & Database Passwords',
        content: SecurityLesson1,
      },
      {
        id: 'security-lesson-2',
        title: 'Information Disclosure: Debug Pages & Feroxbuster Discovery',
        content: SecurityLesson2,
      },
      {
        id: 'security-lesson-3',
        title: 'Information Disclosure: Exposed Version Control (.git) on Server',
        content: SecurityLesson3,
      },
      {
        id: 'security-lesson-4',
        title: 'Broken Access Control: Cookie Manipulation',
        content: SecurityLesson4,
      },
      {
        id: 'security-lesson-5',
        title: 'Broken Access Control: Accessing Private User Data (IDOR)',
        content: SecurityLesson5,
      },
      {
        id: 'security-lesson-6',
        title: 'Broken Access Control: User Role can be Modified in User Profile',
        content: SecurityLesson6,
      },
      {
        id: 'security-lesson-7',
        title: 'Broken Access Control: Debugging Flow with HTTP TRACE',
        content: SecurityLesson7,
      },
    ],
  },
  'big-o': {
    title: 'Big O',
    description: 'Learn Big O Notation, a way to measure the efficiency of your code.',
    lessons: [
      {
        id: 'big-o',
        title: 'Big O',
        content: BigONotation,
      },
    ],
  },
  'dart-mastery': {
    title: 'Modern Dart Language Mastery',
    description: 'A structured roadmap to mastering Dart from scratch: Null Safety, OOP, Dart 3 Records & Pattern Matching, and Asynchronous programming.',
    lessons: [
      {
        id: 'dart-1',
        title: 'Dart Basics: Introduction to Dart & Basic Structure',
        content: DartLesson1,
      },
      {
        id: 'dart-2',
        title: 'Dart Basics: Data Types, Variables & Immutability',
        content: DartLesson2,
      },
      {
        id: 'dart-3',
        title: 'Dart Basics: Sound Null Safety & Null-Aware Operators',
        content: DartLesson3,
      },
      {
        id: 'dart-4',
        title: 'Control & Collections: List, Set, Map & Collection-If/For',
        content: DartLesson4,
      },
      {
        id: 'dart-5',
        title: 'Control & Collections: Control Flow & Loops',
        content: DartLesson5,
      },
      {
        id: 'dart-6',
        title: 'Functions: Parameters, Arrow & Higher-Order Functions',
        content: DartLesson6,
      },
      {
        id: 'dart-7',
        title: 'OOP: Classes, Objects & Constructors',
        content: DartLesson7,
      },
      {
        id: 'dart-8',
        title: 'OOP: Inheritance, Interfaces, Mixins & Extensions',
        content: DartLesson8,
      },
      {
        id: 'dart-9',
        title: 'Modern Dart: Records, Pattern Matching & Switch Expressions',
        content: DartLesson9,
      },
      {
        id: 'dart-10',
        title: 'Asynchronous: Future, Async/Await & Streams',
        content: DartLesson10,
      },
    ],
  },
  'flutter-mastery': {
    title: 'Mastering Flutter Mobile Development',
    description: 'Comprehensive guide to building multiplatform mobile applications with Flutter: Widget Architecture, Layouts, State Management, APIs, and Animations.',
    lessons: [
      {
        id: 'flutter-1',
        title: 'Flutter Basics: Introduction to Flutter & Widget Foundations',
        content: FlutterLesson1,
      },
      {
        id: 'flutter-2',
        title: 'Layouts: Flutter Layout Mastery (Container, Flex, Stack, ListView)',
        content: FlutterLesson2,
      },
      {
        id: 'flutter-3',
        title: 'Interactions & Forms: Interactivity, Forms & Input Validation',
        content: FlutterLesson3,
      },
      {
        id: 'flutter-4',
        title: 'Navigation: Routing with Navigator vs go_router',
        content: FlutterLesson4,
      },
      {
        id: 'flutter-5',
        title: 'State Management: Architecture of setState, Riverpod & BLoC',
        content: FlutterLesson5,
      },
      {
        id: 'flutter-6',
        title: 'Networking: REST API Integration, JSON & FutureBuilder',
        content: FlutterLesson6,
      },
      {
        id: 'flutter-7',
        title: 'Theming & Animations: Dark Mode & Modern Animations in Flutter',
        content: FlutterLesson7,
      },
    ],
  },
  'react-mastery': {
    title: 'Mastering React.js',
    description: 'Learn React.js fundamentals from scratch to advanced, including components, state, & hooks.',
    lessons: [
      {
        id: 'lesson-1',
        title: 'React Fundamentals',
        content: ReactLesson1
      },
      {
        id: 'lesson-2',
        title: 'Component & Props',
        content: ReactLesson2
      },
      {
        id: 'lesson-3',
        title: 'State & Lifecycle',
        content: ReactLesson3
      },
      {
        id: 'lesson-4',
        title: 'Handling Events',
        content: ReactLesson4
      },
      {
        id: 'lesson-5',
        title: 'Conditional Rendering & Lists',
        content: ReactLesson5
      },
      {
        id: 'lesson-6',
        title: 'Forms & Controlled Components',
        content: ReactLesson6
      },
      {
        id: 'lesson-7',
        title: 'Hooks (useState, useEffect)',
        content: ReactLesson7
      },
      {
        id: 'lesson-8',
        title: 'React 19: Actions, useActionState & useFormStatus',
        content: ReactLesson8
      },
      {
        id: 'lesson-9',
        title: 'React 19: Optimistic UI (useOptimistic)',
        content: ReactLesson9
      },
      {
        id: 'lesson-10',
        title: 'React 19: Async Data Reading with use() Hook',
        content: ReactLesson10
      },
      {
        id: 'lesson-11',
        title: 'React Hooks: useCallback & React.memo',
        content: ReactLesson11
      },
      {
        id: 'lesson-12',
        title: 'React Hooks: useEffect & Dependency Rules',
        content: ReactLesson12
      },
      {
        id: 'lesson-13',
        title: 'React Hooks: Difference between useEffect & useLayoutEffect',
        content: ReactLesson13
      },
      {
        id: 'lesson-14',
        title: 'React Hooks: useDeferredValue ("Debounce" Without Timers)',
        content: ReactLesson14
      },
      {
        id: 'lesson-15',
        title: 'React Hooks: useEffectEvent (Uninterrupted Background Tasks)',
        content: ReactLesson15
      },
      {
        id: 'lesson-16',
        title: 'React Hooks: useMemo (Caching Expensive Calculations)',
        content: ReactLesson16
      },
      {
        id: 'lesson-17',
        title: 'React Hooks: useTransition (Non-Blocking UI, Like AbortController)',
        content: ReactLesson17
      }
    ]
  },
  'golang-mastery': {
    title: 'Learn Golang (Go Tour)',
    description: 'Golang learning notes from basics to advanced concepts like methods and interfaces.',
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
        title: 'Advanced Types (Pointers, Structs, Slices, Maps)',
        content: GolangLesson3
      },
      {
        id: 'lesson-4',
        title: 'Methods and Interfaces (OOP style in Golang)',
        content: GolangLesson4
      }
    ]
  }
};
