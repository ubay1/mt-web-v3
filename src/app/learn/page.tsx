/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import { X, Menu } from "lucide-react";
import { LEARNS } from "../../constants";
import { cn } from "../../lib/utils";
import { MarkdownRenderer } from "../../components/MarkdownRenderer";

export default function LearnPage() {
  const { t, i18n } = useTranslation();
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedLearn, setSelectedLearn] = useState<any>(null);
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

  const allTags = Array.from(new Set(LEARNS.flatMap((n) => n.tags)));

  const filteredLearns = activeTag
    ? LEARNS.filter((note) => note.tags.includes(activeTag))
    : LEARNS;

  const getNoteTitle = (note: any) =>
    note.title[(i18n.language || "en").startsWith("id") ? "id" : "en"];
  const getNoteContent = (note: any) =>
    note.content[(i18n.language || "en").startsWith("id") ? "id" : "en"];
  const getNoteDescription = (note: any) =>
    note.description ? note.description[(i18n.language || "en").startsWith("id") ? "id" : "en"] : "";

  return (
    <div className="min-h-screen pb-20">
      {/* Header & Filter */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-line bg-white/5">
        <div className="md:col-span-8 grid-cell justify-center">
          <span className="label-mono italic text-accent/70">
            {t("learn.label")}
          </span>
          <div className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mt-4 mb-8">
            <Trans i18nKey="learn.title" components={{ br: <br /> }} />
          </div>
          <p className="text-white/60 font-mono text-[10px] uppercase tracking-widest max-w-md leading-relaxed">
            {t("learn.description")}
          </p>
        </div>

        <div className="md:col-span-4 grid-cell bg-accent/5 justify-end">
          <span className="label-mono mb-4! italic text-white/60">
            Filter by Tags
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={cn(
                "px-3 py-1 border font-mono text-[9px] uppercase tracking-wider transition-all",
                activeTag === null
                  ? "bg-accent text-black border-accent"
                  : "border-line text-white/60 hover:border-accent hover:text-accent",
              )}
            >
              {t("portfolio.all", "ALL")}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={cn(
                  "px-3 py-1 border font-mono text-[9px] uppercase tracking-wider transition-all",
                  activeTag === tag
                    ? "bg-accent text-black border-accent"
                    : "border-line text-white/60 hover:border-accent hover:text-accent",
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-6 md:px-10 py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredLearns.map((note, idx) => (
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
              className="break-inside-avoid group cursor-pointer border border-line p-8 hover:border-accent transition-all bg-white/2 hover:bg-white/5 relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="relative z-10">
                <span className="font-mono text-[9px] text-accent/70 block mb-4 italic">
                  {note.date}
                </span>
                <div className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-accent transition-colors leading-none">
                  {getNoteTitle(note)}
                </div>
                <div className="flex gap-2 flex-wrap mb-6">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] px-1.5 py-0.5 border border-line text-white/50 uppercase font-mono tracking-tighter"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="text-white/60 text-sm line-clamp-3 font-medium leading-relaxed">
                  {getNoteDescription(note)}
                </div>
              </div>
              {/* Decorative Element */}
              <div
                className="absolute -bottom-4 -right-2 text-6xl font-black text-transparent select-none group-hover:text-accent/5 transition-colors leading-none"
                aria-hidden="true"
              >
                LEARN.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-screen Modal Detail View with Sidebar */}
      {selectedLearn && (
        <div className="fixed inset-0 z-60 bg-bg flex flex-col animate-fade-in">
          {/* Header */}
          <div className="flex-none bg-bg/80 backdrop-blur-md border-b border-line px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <Menu size={20} />
              </button>
              <span className="label-mono mb-0! italic text-accent hidden md:inline-block">
                {t("learn.label", "LEARN")}
              </span>
            </div>

            <button
              onClick={() => setSelectedLearn(null)}
              className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[2px] text-white/50 hover:text-white transition-colors"
            >
              {(i18n.language || "en").startsWith("id") ? "TUTUP" : "CLOSE"}{" "}
              <X
                size={20}
                className="group-hover:rotate-90 transition-transform duration-300"
              />
            </button>
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
                <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-6">Contents</div>
                <div className="flex flex-col gap-2">
                  {selectedLearn.lessons?.map((item: any, idx: number) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedLesson(item);
                        // Optional: auto-close sidebar on mobile
                        if (window.innerWidth < 768) {
                          setIsSidebarOpen(false);
                        }
                      }}
                      className={cn(
                        "text-left px-4 py-3 border text-sm transition-all flex flex-col gap-1",
                        selectedLesson?.id === item.id
                          ? "bg-accent/10 border-accent text-accent"
                          : "border-transparent text-white/70 hover:border-line hover:bg-white/5"
                      )}
                    >
                      <div className="text-[10px] font-mono opacity-60 uppercase tracking-wider">Lesson {idx + 1}</div>
                      <div className="font-bold line-clamp-4">{getNoteTitle(item)}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-bg p-6 md:p-12 lg:p-20 relative z-10 w-full">
              <div className="max-w-4xl mx-auto animate-slide-up">
                <div className="flex gap-4 mb-8">
                  {selectedLearn.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-1 border border-accent/20 text-accent uppercase tracking-[2px]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {selectedLesson && (() => {
                  const Content = getNoteContent(selectedLesson);
                  const isMDXComponent = typeof Content === "function" || (typeof Content === "object" && Content !== null);
                  return (
                    <>
                      <div className="text-4xl md:text-6xl lg:text-7xl font-black tracking-normal mb-8">
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
                  <div className="font-black text-2xl italic">UBAY DILLAH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
