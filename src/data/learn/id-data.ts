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

// Dart Lessons
import DartLesson1 from './id/dart-lesson-1-intro.mdx';
import DartLesson2 from './id/dart-lesson-2-types-variables.mdx';
import DartLesson3 from './id/dart-lesson-3-null-safety.mdx';
import DartLesson4 from './id/dart-lesson-4-collections.mdx';
import DartLesson5 from './id/dart-lesson-5-control-flow.mdx';
import DartLesson6 from './id/dart-lesson-6-functions.mdx';
import DartLesson7 from './id/dart-lesson-7-oop-basics.mdx';
import DartLesson8 from './id/dart-lesson-8-oop-inheritance-interfaces.mdx';
import DartLesson9 from './id/dart-lesson-9-dart3-records-patterns.mdx';
import DartLesson10 from './id/dart-lesson-10-async-future-streams.mdx';

// Flutter Lessons
import FlutterLesson1 from './id/flutter-lesson-1-intro-widgets.mdx';
import FlutterLesson2 from './id/flutter-lesson-2-layouts.mdx';
import FlutterLesson3 from './id/flutter-lesson-3-inputs-forms.mdx';
import FlutterLesson4 from './id/flutter-lesson-4-navigation.mdx';
import FlutterLesson5 from './id/flutter-lesson-5-state-management.mdx';
import FlutterLesson6 from './id/flutter-lesson-6-networking-api.mdx';
import FlutterLesson7 from './id/flutter-lesson-7-theming-animations.mdx';

import BigONotation from './id/big-o-notation.mdx';
import SecurityLesson1 from './id/security-lesson-1-backup-files.mdx';
import SecurityLesson2 from './id/security-lesson-2-debug-pages.mdx';
import SecurityLesson3 from './id/security-lesson-3-exposed-git.mdx';
import SecurityLesson4 from './id/security-lesson-4-cookie-manipulation.mdx';
import SecurityLesson5 from './id/security-lesson-5-access-private-user-data.mdx';
import SecurityLesson6 from './id/security-lesson-6-user-role-modification.mdx';
import SecurityLesson7 from './id/security-lesson-7-http-trace-access-control.mdx';
import SecurityLesson8 from './id/security-lesson-8-directory-traversal-absolute-path.mdx';
import SecurityLesson9 from './id/security-lesson-9-directory-traversal-hardcoded-extension.mdx';
import SecurityLesson10 from './id/security-lesson-10-directory-traversal-bypassing-filters.mdx';
import SecurityLesson11 from './id/security-lesson-11-directory-traversal-hardcoded-path.mdx';
import SecurityLesson12 from './id/security-lesson-12-directory-traversal-extreme-filtering-intruder.mdx';
import SecurityLesson13 from './id/security-lesson-13-csrf-tokens-vulnerabilities.mdx';
import SecurityLesson14 from './id/security-lesson-14-xss-vectors-and-angularjs.mdx';
import SecurityLesson15 from './id/security-lesson-15-xss-real-world-and-bug-hunting.mdx';
import SecurityLesson16 from './id/security-lesson-16-xss-bypassing-filters-and-intruder.mdx';

export const learnId = {
  'security-mastery': {
    title: 'Belajar Bug Hunting & Web Security',
    description: 'Panduan praktis belajar bug hunting dan keamanan web: pengujian celah keamanan, reconnaissance, hingga teknik eksploitasi dan mitigasi.',
    lessons: [
      {
        id: 'security-lesson-1',
        title: 'Information Disclosure: Kebocoran File Backup & Database Password',
        content: SecurityLesson1,
      },
      {
        id: 'security-lesson-2',
        title: 'Information Disclosure: Debug Page & Feroxbuster Discovery',
        content: SecurityLesson2,
      },
      {
        id: 'security-lesson-3',
        title: 'Information Disclosure: Exposed Version Control (.git) di Server',
        content: SecurityLesson3,
      },
      {
        id: 'security-lesson-4',
        title: 'Broken Access Control: Cookie Manipulation',
        content: SecurityLesson4,
      },
      {
        id: 'security-lesson-5',
        title: 'Broken Access Control: Mengakses Data Pribadi Pengguna (IDOR)',
        content: SecurityLesson5,
      },
      {
        id: 'security-lesson-6',
        title: 'Broken Access Control: Modifikasi Role Pengguna pada Profil',
        content: SecurityLesson6,
      },
      {
        id: 'security-lesson-7',
        title: 'Broken Access Control: Debugging Flow Menggunakan HTTP TRACE',
        content: SecurityLesson7,
      },
      {
        id: 'security-lesson-8',
        title: 'Directory Traversal: Bypassing dengan Absolute Path',
        content: SecurityLesson8,
      },
      {
        id: 'security-lesson-9',
        title: 'Directory Traversal: Bypassing Hardcoded Extension',
        content: SecurityLesson9,
      },
      {
        id: 'security-lesson-10',
        title: 'Directory Traversal: Bypassing Filter Pertahanan',
        content: SecurityLesson10,
      },
      {
        id: 'security-lesson-11',
        title: 'Directory Traversal: Bypassing Hardcoded Base Path',
        content: SecurityLesson11,
      },
      {
        id: 'security-lesson-12',
        title: 'Directory Traversal: Extreme Filtering dengan Intruder',
        content: SecurityLesson12,
      },
      {
        id: 'security-lesson-13',
        title: 'Cross-Site Request Forgery (CSRF): Memahami Celah & Token',
        content: SecurityLesson13,
      },
      {
        id: 'security-lesson-14',
        title: 'Cross-Site Scripting (XSS): Vektor Tag Link, Gambar, Script, & AngularJS',
        content: SecurityLesson14,
      },
      {
        id: 'security-lesson-15',
        title: 'Cross-Site Scripting (XSS): Dampak Serangan Nyata & Metodologi Bug Hunter',
        content: SecurityLesson15,
      },
      {
        id: 'security-lesson-16',
        title: 'Cross-Site Scripting (XSS): Bypassing Filter & Intruder Fuzzing',
        content: SecurityLesson16,
      },
    ],
  },
  'big-o': {
    title: 'Big O',
    description: 'Belajar Big O Notation, cara mengukur efisiensi kode.',
    lessons: [
      {
        id: 'big-o',
        title: 'Big O',
        content: BigONotation,
      },
    ],
  },
  'dart-mastery': {
    title: 'Belajar Bahasa Dart Modern',
    description: 'Panduan lengkap belajar bahasa Dart dari dasar hingga mahir: Null Safety, OOP, Records Dart 3, dan Asynchronous.',
    lessons: [
      {
        id: 'big-o',
        title: 'Big O',
        content: BigONotation,
      },
      {
        id: 'dart-1',
        title: 'Dart Dasar: Pengenalan Dart & Struktur Dasar',
        content: DartLesson1,
      },
      {
        id: 'dart-2',
        title: 'Dart Dasar: Tipe Data, Variabel & Immutability',
        content: DartLesson2,
      },
      {
        id: 'dart-3',
        title: 'Dart Dasar: Sound Null Safety & Operator Null-Aware',
        content: DartLesson3,
      },
      {
        id: 'dart-4',
        title: 'Alur & Koleksi: List, Set, Map & Collection-If/For',
        content: DartLesson4,
      },
      {
        id: 'dart-5',
        title: 'Alur & Koleksi: Alur Kontrol & Perulangan',
        content: DartLesson5,
      },
      {
        id: 'dart-6',
        title: 'Fungsi: Parameter, Arrow & Higher-Order Functions',
        content: DartLesson6,
      },
      {
        id: 'dart-7',
        title: 'OOP: Class, Object & Konstruktor',
        content: DartLesson7,
      },
      {
        id: 'dart-8',
        title: 'OOP: Inheritance, Interface, Mixin & Extension',
        content: DartLesson8,
      },
      {
        id: 'dart-9',
        title: 'Dart Modern: Records, Pattern Matching & Switch Expression',
        content: DartLesson9,
      },
      {
        id: 'dart-10',
        title: 'Asinkron: Future, Async/Await & Streams',
        content: DartLesson10,
      },
    ],
  },
  'flutter-mastery': {
    title: 'Menguasai Flutter Mobile Development',
    description: 'Panduan komprehensif membangun aplikasi mobile multiplatform dengan Flutter: Arsitektur Widget, Layout, State Management, API, & Animasi.',
    lessons: [
      {
        id: 'flutter-1',
        title: 'Dasar Flutter: Pengenalan Flutter & Fondasi Widget',
        content: FlutterLesson1,
      },
      {
        id: 'flutter-2',
        title: 'Layout: Menguasai Layout Flutter (Container, Flex, Stack, ListView)',
        content: FlutterLesson2,
      },
      {
        id: 'flutter-3',
        title: 'Interaksi & Form: Interaktivitas, Form & Validasi Input',
        content: FlutterLesson3,
      },
      {
        id: 'flutter-4',
        title: 'Navigasi: Routing dengan Navigator vs go_router',
        content: FlutterLesson4,
      },
      {
        id: 'flutter-5',
        title: 'State Management: Arsitektur setState, Riverpod & BLoC',
        content: FlutterLesson5,
      },
      {
        id: 'flutter-6',
        title: 'Networking: Integrasi REST API, JSON & FutureBuilder',
        content: FlutterLesson6,
      },
      {
        id: 'flutter-7',
        title: 'Theming & Animasi: Dark Mode & Animasi Modern di Flutter',
        content: FlutterLesson7,
      },
    ],
  },
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
        title: 'React Hooks: useEffectEvent (Background Task Tanpa Gangguan)',
        content: ReactLesson15
      },
      {
        id: 'lesson-16',
        title: 'React Hooks: useMemo (Mengingat Hasil Komputasi)',
        content: ReactLesson16
      },
      {
        id: 'lesson-17',
        title: 'React Hooks: useTransition (Non-Blocking UI, Mirip AbortController)',
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
