import LearnView from "../../../components/learn/LearnView";

export const metadata = {
  title: "Belajar Dart Modern - Panduan Terstruktur",
  description: "Materi belajar bahasa pemrograman Dart dari dasar hingga mahir: Null Safety, OOP, Records Dart 3, dan Asynchronous.",
};

export default function DartLearnPage() {
  return <LearnView defaultTrack="dart" />;
}
