/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import { X, Menu, ChevronDown, Check, BookOpen, Sparkles, Layers, ArrowLeft } from "lucide-react";
import { LEARNS } from "../../constants";
import { cn } from "../../lib/utils";
import { MarkdownRenderer } from "../../components/MarkdownRenderer";

export const TRACK_OPTIONS = [
  { id: "all", labelKey: "learn.all_tracks", defaultLabel: "Semua Jalur (All Tracks)", icon: "⚡", tag: "ALL" },
  { id: "dart", labelKey: "Dart Mastery", defaultLabel: "Dart Mastery", icon: "🎯", tag: "Dart", count: 10 },
  { id: "flutter", labelKey: "Flutter Mastery", defaultLabel: "Flutter Mastery", icon: "💙", tag: "Flutter", count: 7 },
  { id: "react", labelKey: "React.js Mastery", defaultLabel: "React.js Mastery", icon: "⚛️", tag: "React", count: 17 },
  { id: "golang", labelKey: "Golang Mastery", defaultLabel: "Golang Mastery", icon: "🐹", tag: "Golang", count: 8 },
];

interface LearnViewProps {
  defaultTrack?: string;
}

export default function LearnView({ defaultTrack = "all" }: LearnViewProps) {
  const { t, i18n } = useTranslation();
  const [activeTrack, setActiveTrack] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const trackParam = urlParams.get("track");
      if (trackParam && TRACK_OPTIONS.some((opt) => opt.id === trackParam)) {
        return trackParam;
      }
    }
    return defaultTrack;
  });
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedLearn, setSelectedLearn] = useState<any>(null);
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isTrackDropdownOpen, setIsTrackDropdownOpen] = useState(false);
  const [isModalTrackDropdownOpen, setIsModalTrackDropdownOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mainDropdownRef = useRef<HTMLDivElement>(null);
  const modalDropdownRef = useRef<HTMLDivElement>(null);

  // Sync state if browser back/forward button is clicked (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const trackParam = urlParams.get("track");
      if (trackParam && TRACK_OPTIONS.some((opt) => opt.id === trackParam)) {
        setActiveTrack(trackParam);
      } else {
        setActiveTrack(defaultTrack);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [defaultTrack]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (mainDropdownRef.current && !mainDropdownRef.current.contains(target)) {
        setIsTrackDropdownOpen(false);
      }
      if (modalDropdownRef.current && !modalDropdownRef.current.contains(target)) {
        setIsModalTrackDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset scroll on lesson change
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, [selectedLesson]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedLearn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedLearn]);

  // Switch active track helper
  const handleSelectTrack = (trackId: string) => {
    setActiveTrack(trackId);
    setActiveTag(null);
    setIsTrackDropdownOpen(false);
    setIsModalTrackDropdownOpen(false);

    // Update query params without full page reload
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (trackId === "all") {
        url.searchParams.delete("track");
      } else {
        url.searchParams.set("track", trackId);
      }
      window.history.pushState({}, "", url.toString());
    }

    // If modal is currently open and switching track, switch selected course accordingly
    if (selectedLearn) {
      const matchingCourse = LEARNS.find((item: any) => item.track === trackId || item.id.startsWith(trackId));
      if (matchingCourse) {
        setSelectedLearn(matchingCourse);
        if (matchingCourse.lessons && matchingCourse.lessons.length > 0) {
          setSelectedLesson(matchingCourse.lessons[0]);
        }
      }
    }
  };

  // Filter learns based on track and tag
  const trackFilteredLearns = activeTrack === "all"
    ? LEARNS
    : LEARNS.filter((item: any) => item.track === activeTrack || item.id.startsWith(activeTrack));

  const allTags = Array.from(new Set(trackFilteredLearns.flatMap((n) => n.tags)));

  const filteredLearns = activeTag
    ? trackFilteredLearns.filter((note) => note.tags.includes(activeTag))
    : trackFilteredLearns;

  const currentTrackOption = TRACK_OPTIONS.find((t) => t.id === activeTrack) || TRACK_OPTIONS[0];

  const getNoteTitle = (note: any) =>
    note?.title?.[(i18n.language || "en").startsWith("id") ? "id" : "en"] || "";
  const getNoteContent = (note: any) =>
    note?.content?.[(i18n.language || "en").startsWith("id") ? "id" : "en"];
  const getNoteDescription = (note: any) =>
    note?.description ? note.description[(i18n.language || "en").startsWith("id") ? "id" : "en"] : "";

  return (
    <div className="min-h-screen pb-20">
      {/* Header & Filter */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-line bg-white/5">
        <div className="md:col-span-7 grid-cell justify-center">
          <div className="flex items-center gap-3 mb-2">
            <span className="label-mono italic text-accent/70">
              {t("learn.label", "LEARN")}
            </span>
            <span className="text-[10px] font-mono border border-accent/40 bg-accent/10 text-accent px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <span>{currentTrackOption.icon}</span>
              <span>{currentTrackOption.defaultLabel}</span>
            </span>
          </div>

          <div className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mt-2 mb-6">
            <Trans i18nKey="learn.title" components={{ br: <br /> }} />
          </div>
          <p className="text-white/60 font-mono text-[10px] uppercase tracking-widest max-w-lg leading-relaxed">
            {t("learn.description", "Eksplorasi berbagai topik dan perluas pengetahuan Anda dengan jalur belajar terstruktur.")}
          </p>
        </div>

        {/* Track Dropdown & Filters */}
        <div className="md:col-span-5 grid-cell bg-accent/5 justify-between flex flex-col gap-6">
          {/* Dropdown Track Selector */}
          <div className="w-full" ref={mainDropdownRef}>
            <div className="flex items-center justify-between mb-2">
              <span className="label-mono italic text-white/70 flex items-center gap-1.5">
                <Layers size={13} className="text-accent" />
                {t("learn.select_track", "Pilih Jalur Belajar")}
              </span>
              <span className="text-[9px] font-mono text-white/40">
                {filteredLearns.length} Modul Aktif
              </span>
            </div>

            <div className="relative">
              <button
                onClick={() => setIsTrackDropdownOpen(!isTrackDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-bg/90 hover:bg-white/10 border border-line hover:border-accent text-left transition-all rounded"
                aria-haspopup="listbox"
                aria-expanded={isTrackDropdownOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{currentTrackOption.icon}</span>
                  <div>
                    <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      {currentTrackOption.defaultLabel}
                    </div>
                    <div className="text-[10px] font-mono text-white/50">
                      {activeTrack === "all"
                        ? "Menampilkan seluruh materi pemrograman"
                        : `Jalur pembelajaran spesifik ${currentTrackOption.tag}`}
                    </div>
                  </div>
                </div>
                <ChevronDown
                  size={18}
                  className={cn(
                    "text-white/50 transition-transform duration-200",
                    isTrackDropdownOpen ? "rotate-180 text-accent" : ""
                  )}
                />
              </button>

              {/* Dropdown Menu Items */}
              {isTrackDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#0c0c0c] border border-line rounded-lg shadow-2xl z-40 overflow-hidden py-1 animate-fade-in divide-y divide-white/10">
                  {TRACK_OPTIONS.map((track) => {
                    const isSelected = activeTrack === track.id;
                    return (
                      <button
                        key={track.id}
                        onClick={() => handleSelectTrack(track.id)}
                        className={cn(
                          "w-full px-4 py-3 flex items-center justify-between text-left transition-colors font-mono text-xs",
                          isSelected
                            ? "bg-accent/15 text-accent font-bold"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{track.icon}</span>
                          <div>
                            <div className="uppercase tracking-wider">{track.defaultLabel}</div>
                            {track.count && (
                              <div className="text-[9px] opacity-60 font-normal">
                                {track.count} {t("learn.total_lessons", "Pelajaran")}
                              </div>
                            )}
                          </div>
                        </div>
                        {isSelected && <Check size={16} className="text-accent" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Quick Track Chips */}
          <div>
            <div className="text-[9px] font-mono text-white/50 uppercase tracking-wider mb-2">
              Jalur Cepat:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {TRACK_OPTIONS.map((track) => (
                <button
                  key={track.id}
                  onClick={() => handleSelectTrack(track.id)}
                  className={cn(
                    "px-2.5 py-1 border font-mono text-[9px] uppercase tracking-wider transition-all flex items-center gap-1.5 rounded",
                    activeTrack === track.id
                      ? "bg-accent text-black border-accent font-bold"
                      : "border-line text-white/60 hover:border-accent hover:text-accent bg-white/2"
                  )}
                >
                  <span>{track.icon}</span>
                  <span>{track.tag}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tag Filter */}
          {allTags.length > 0 && (
            <div>
              <span className="label-mono mb-2! italic text-white/60 block">
                Filter by Tags
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setActiveTag(null)}
                  className={cn(
                    "px-2.5 py-1 border font-mono text-[9px] uppercase tracking-wider transition-all rounded",
                    activeTag === null
                      ? "bg-accent text-black border-accent font-bold"
                      : "border-line text-white/60 hover:border-accent hover:text-accent"
                  )}
                >
                  {t("portfolio.all", "ALL")}
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={cn(
                      "px-2.5 py-1 border font-mono text-[9px] uppercase tracking-wider transition-all rounded",
                      activeTag === tag
                        ? "bg-accent text-black border-accent font-bold"
                        : "border-line text-white/60 hover:border-accent hover:text-accent"
                    )}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Grid of Courses */}
      <section className="px-6 md:px-10 py-12">
        <div className="columns-1 sm:columns-2 lg:columns-2 xl:columns-3 gap-6 space-y-6">
          {filteredLearns.map((note, idx) => {
            const trackOption = TRACK_OPTIONS.find((t) => t.id === note.track) || TRACK_OPTIONS[0];
            const lessonCount = note.lessons?.length || 0;

            return (
              <div
                key={note.id}
                onClick={() => {
                  setSelectedLearn(note);
                  if (window.innerWidth < 768) {
                    setIsSidebarOpen(false);
                  } else {
                    setIsSidebarOpen(true);
                  }
                  if (note.lessons && note.lessons.length > 0) {
                    setSelectedLesson(note.lessons[0]);
                  }
                }}
                className="break-inside-avoid group cursor-pointer border border-line p-8 hover:border-accent transition-all bg-white/2 hover:bg-white/5 relative overflow-hidden animate-fade-in rounded-lg"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[9px] text-accent/80 italic flex items-center gap-1.5">
                      <span>{trackOption.icon}</span>
                      <span>{note.date}</span>
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 border border-line bg-white/5 text-white/60 rounded">
                      {lessonCount} {t("learn.total_lessons", "Pelajaran")}
                    </span>
                  </div>

                  <div className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-accent transition-colors leading-tight">
                    {getNoteTitle(note)}
                  </div>

                  <div className="flex gap-2 flex-wrap mb-6">
                    {note.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-[8px] px-2 py-0.5 border border-line text-white/50 uppercase font-mono tracking-wider rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-white/60 text-sm line-clamp-3 font-medium leading-relaxed mb-6">
                    {getNoteDescription(note)}
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-accent group-hover:translate-x-1 transition-transform">
                    <BookOpen size={14} />
                    <span>Mulai Belajar</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Decorative Background Watermark */}
                <div
                  className="absolute -bottom-4 -right-2 text-6xl font-black text-transparent select-none group-hover:text-accent/5 transition-colors leading-none uppercase font-mono"
                  aria-hidden="true"
                >
                  {note.track || "LEARN"}
                </div>
              </div>
            );
          })}
        </div>

        {filteredLearns.length === 0 && (
          <div className="text-center py-20 border border-dashed border-line rounded-xl">
            <Sparkles className="mx-auto mb-4 text-accent/50" size={32} />
            <div className="text-xl font-bold font-mono uppercase text-white mb-2">
              Tidak Ada Materi Ditemukan
            </div>
            <p className="text-sm font-mono text-white/50 mb-6">
              Silakan pilih jalur belajar lain atau reset filter tag.
            </p>
            <button
              onClick={() => handleSelectTrack("all")}
              className="px-4 py-2 border border-accent bg-accent text-black font-mono text-xs uppercase font-bold tracking-wider rounded"
            >
              Lihat Semua Materi
            </button>
          </div>
        )}
      </section>

      {/* Full-screen Modal Detail View with Sidebar */}
      {selectedLearn && (
        <div className="fixed inset-0 z-60 bg-bg flex flex-col animate-fade-in">
          {/* Top Bar Header */}
          <div className="flex-none bg-[#050505]/95 backdrop-blur-md border-b border-line px-6 py-4 flex items-center justify-between gap-4 relative z-30">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-white/70 hover:text-white p-1 hover:bg-white/5 rounded transition-colors"
                title="Toggle Sidebar"
              >
                <Menu size={20} />
              </button>

              <div className="hidden sm:flex items-center gap-3 border-l border-line pl-4">
                <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
                  {getNoteTitle(selectedLearn)}
                </span>
              </div>
            </div>

            {/* Modal Track Switcher Dropdown */}
            <div className="flex items-center gap-3">
              <div className="relative" ref={modalDropdownRef}>
                <button
                  onClick={() => setIsModalTrackDropdownOpen(!isModalTrackDropdownOpen)}
                  className="flex items-center gap-2 border border-line bg-white/5 hover:border-accent hover:bg-white/10 px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider text-white transition-all"
                  aria-expanded={isModalTrackDropdownOpen}
                >
                  <span>{TRACK_OPTIONS.find((t) => t.id === selectedLearn.track)?.icon || "⚡"}</span>
                  <span className="hidden md:inline font-bold">
                    {TRACK_OPTIONS.find((t) => t.id === selectedLearn.track)?.defaultLabel || "Ganti Track"}
                  </span>
                  <ChevronDown
                    size={14}
                    className={cn(
                      "text-white/50 transition-transform duration-200",
                      isModalTrackDropdownOpen ? "rotate-180 text-accent" : ""
                    )}
                  />
                </button>

                {isModalTrackDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-72 sm:w-80 bg-[#0c0c0c] border border-line rounded-lg shadow-2xl z-50 overflow-hidden py-1 divide-y divide-white/10 animate-fade-in">
                    {LEARNS.map((course: any) => {
                      const isCurrent = selectedLearn.id === course.id;
                      const trackOpt = TRACK_OPTIONS.find((t) => t.id === course.track) || TRACK_OPTIONS[0];

                      return (
                        <button
                          key={course.id}
                          onClick={() => {
                            setSelectedLearn(course);
                            if (course.lessons && course.lessons.length > 0) {
                              setSelectedLesson(course.lessons[0]);
                            }
                            setIsModalTrackDropdownOpen(false);
                          }}
                          className={cn(
                            "w-full px-4 py-3 flex items-center justify-between text-left transition-colors font-mono text-xs",
                            isCurrent
                              ? "bg-accent/15 text-accent font-bold"
                              : "text-white/80 hover:bg-white/10 hover:text-white"
                          )}
                        >
                          <div className="flex items-center gap-3 min-w-0 pr-2">
                            <span className="text-base shrink-0">{trackOpt.icon}</span>
                            <div className="min-w-0 flex-1">
                              <div className="truncate uppercase font-bold text-[11px] tracking-wider text-white">
                                {trackOpt.defaultLabel}
                              </div>
                              <div className="truncate text-[10px] text-white/50 font-normal mt-0.5">
                                {getNoteTitle(course)}
                              </div>
                            </div>
                          </div>
                          {isCurrent && <Check size={14} className="text-accent shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <button
                onClick={() => setSelectedLearn(null)}
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[2px] text-white/50 hover:text-white transition-colors border border-line px-3 py-1.5 rounded hover:border-white/40"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                <span>{(i18n.language || "en").startsWith("id") ? "KEMBALI" : "CLOSE"}</span>
                <X size={16} className="hidden sm:inline" />
              </button>
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden relative">
            {/* Sidebar List */}
            <div
              className={cn(
                "flex-none bg-bg/95 md:bg-bg/50 backdrop-blur-xl border-r border-line overflow-y-auto custom-scrollbar transition-all duration-300 absolute md:relative z-20 h-full",
                isSidebarOpen ? "w-full md:w-80 opacity-100 translate-x-0" : "w-0 opacity-0 -translate-x-full overflow-hidden border-r-0"
              )}
            >
              <div className="p-6">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-white/50 mb-6">
                  <span>Daftar Pelajaran</span>
                  <span className="text-[10px] px-2 py-0.5 border border-line rounded">
                    {selectedLearn.lessons?.length || 0} Topics
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  {(() => {
                    const lessons = selectedLearn.lessons || [];
                    const generalLessons: any[] = [];
                    const groupedLessons: Record<string, any[]> = {};

                    lessons.forEach((item: any, idx: number) => {
                      const title = getNoteTitle(item);
                      if (title.includes(": ")) {
                        const parts = title.split(": ");
                        const groupName = parts[0];
                        if (!groupedLessons[groupName]) {
                          groupedLessons[groupName] = [];
                        }
                        groupedLessons[groupName].push({ item, idx, displayTitle: parts.slice(1).join(": ") });
                      } else {
                        generalLessons.push({ item, idx, displayTitle: title });
                      }
                    });

                    return (
                      <>
                        {/* General Lessons */}
                        {generalLessons.map(({ item, idx, displayTitle }: any) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              setSelectedLesson(item);
                              if (window.innerWidth < 768) setIsSidebarOpen(false);
                            }}
                            className={cn(
                              "text-left px-4 py-3 border text-sm transition-all flex flex-col gap-1 rounded",
                              selectedLesson?.id === item.id
                                ? "bg-accent/10 border-accent text-accent"
                                : "border-transparent text-white/70 hover:border-line hover:bg-white/5"
                            )}
                          >
                            <div className="text-[10px] font-mono opacity-60 uppercase tracking-wider">
                              Lesson {idx + 1}
                            </div>
                            <div className="font-bold line-clamp-3">{displayTitle}</div>
                          </button>
                        ))}

                        {/* Accordion Groups */}
                        {Object.entries(groupedLessons).map(([groupName, groupItems]) => {
                          const isExpanded = expandedGroups[groupName] !== false;

                          return (
                            <div key={groupName} className="mt-4 flex flex-col gap-2">
                              <button
                                onClick={() =>
                                  setExpandedGroups((prev) => ({
                                    ...prev,
                                    [groupName]: !isExpanded,
                                  }))
                                }
                                className="flex items-center justify-between text-left group px-2 py-1 hover:bg-white/5 rounded transition-colors"
                              >
                                <span className="font-bold tracking-tight text-sm font-mono text-white group-hover:text-accent transition-colors flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                  {groupName}
                                </span>
                                <ChevronDown
                                  size={16}
                                  className={cn(
                                    "text-white/50 group-hover:text-accent transition-transform duration-200",
                                    isExpanded ? "rotate-180" : ""
                                  )}
                                />
                              </button>

                              <div
                                className={cn(
                                  "flex flex-col gap-1.5 overflow-hidden transition-all duration-300",
                                  isExpanded ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
                                )}
                              >
                                <div className="bg-white/5 border border-line p-1.5 rounded-lg flex flex-col gap-1">
                                  {groupItems.map(({ item, idx, displayTitle }: any) => (
                                    <button
                                      key={item.id}
                                      onClick={() => {
                                        setSelectedLesson(item);
                                        if (window.innerWidth < 768) setIsSidebarOpen(false);
                                      }}
                                      className={cn(
                                        "text-left px-3 py-2.5 border text-xs transition-all flex flex-col gap-0.5 rounded-md",
                                        selectedLesson?.id === item.id
                                          ? "bg-accent/20 border-accent text-accent font-semibold"
                                          : "border-transparent text-white/70 hover:bg-white/10 hover:text-white"
                                      )}
                                    >
                                      <div className="text-[9px] font-mono opacity-60 uppercase tracking-wider">
                                        Pelajaran {idx + 1}
                                      </div>
                                      <div className="line-clamp-2 leading-relaxed">{displayTitle}</div>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div
              ref={scrollContainerRef}
              className="flex-1 overflow-y-auto custom-scrollbar bg-bg p-6 md:p-12 lg:p-20 relative z-10 w-full"
            >
              <div className="max-w-4xl mx-auto animate-slide-up">
                <div className="flex gap-2 flex-wrap mb-8">
                  <span className="font-mono text-[10px] px-2.5 py-1 border border-accent bg-accent/10 text-accent uppercase tracking-[2px] rounded font-bold">
                    {TRACK_OPTIONS.find((t) => t.id === selectedLearn.track)?.icon}{" "}
                    {TRACK_OPTIONS.find((t) => t.id === selectedLearn.track)?.defaultLabel || selectedLearn.track}
                  </span>
                  {selectedLearn.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-1 border border-line text-white/60 uppercase tracking-[1px] rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {selectedLesson && (() => {
                  const Content = getNoteContent(selectedLesson);
                  const isMDXComponent =
                    typeof Content === "function" ||
                    (typeof Content === "object" && Content !== null);

                  return (
                    <>
                      <div className="text-3xl sm:text-4xl md:text-6xl font-black tracking-normal mb-8 leading-tight">
                        {getNoteTitle(selectedLesson)}
                      </div>

                      <div className="markdown-content mt-12 border-t border-line pt-12">
                        {isMDXComponent ? (
                          <Content />
                        ) : (
                          <MarkdownRenderer content={Content} />
                        )}
                      </div>
                    </>
                  );
                })()}

                <div className="mt-20 pt-10 border-t border-line flex justify-between items-center text-white/50">
                  <span className="font-mono text-[10px]">
                    {t("notes.last_updated", "LAST UPDATED")}: {selectedLearn.date}
                  </span>
                  <div className="font-black text-xl italic tracking-tighter">UBAY DILLAH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
