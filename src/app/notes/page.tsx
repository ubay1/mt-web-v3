'use client';

import { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { NOTES } from '../../constants';
import { cn } from '../../lib/utils';

export default function NotesPage() {
  const { t, i18n } = useTranslation();
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedNote, setSelectedNote] = useState<any>(null);

  useEffect(() => {
    if (selectedNote) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedNote]);

  const allTags = Array.from(new Set(NOTES.flatMap(n => n.tags)));
  
  const filteredNotes = activeTag 
    ? NOTES.filter(note => note.tags.includes(activeTag))
    : NOTES;

  const getNoteTitle = (note: any) => note.title[(i18n.language || 'en').startsWith('id') ? 'id' : 'en'];
  const getNoteContent = (note: any) => note.content[(i18n.language || 'en').startsWith('id') ? 'id' : 'en'];

  return (
    <div className="min-h-screen pb-20">
      {/* Header & Filter */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-line bg-white/5">
        <div className="md:col-span-8 grid-cell justify-center">
          <span className="label-mono italic text-accent/50">{t('notes.label')}</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mt-4 mb-8">
            <Trans i18nKey="notes.title" components={{ br: <br /> }} />
          </h2>
          <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest max-w-md leading-relaxed opacity-60">
            {t('notes.description')}
          </p>
        </div>
        
        <div className="md:col-span-4 grid-cell bg-accent/5 justify-end">
          <span className="label-mono opacity-30 !mb-4 italic">Filter by Tags</span>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setActiveTag(null)}
              className={cn(
                "px-3 py-1 border font-mono text-[9px] uppercase tracking-wider transition-all",
                activeTag === null 
                  ? "bg-accent text-black border-accent" 
                  : "border-line text-white/40 hover:border-accent hover:text-accent"
              )}
            >
              {t('portfolio.all')}
            </button>
            {allTags.map(tag => (
              <button 
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={cn(
                  "px-3 py-1 border font-mono text-[9px] uppercase tracking-wider transition-all",
                  activeTag === tag 
                    ? "bg-accent text-black border-accent" 
                    : "border-line text-white/40 hover:border-accent hover:text-accent"
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
          <AnimatePresence mode="popLayout">
            {filteredNotes.map((note) => (
              <motion.div
                layout
                key={note.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setSelectedNote(note)}
                className="break-inside-avoid group cursor-pointer border border-line p-8 hover:border-accent transition-all bg-white/[0.02] hover:bg-white/[0.05] relative overflow-hidden"
              >
                <div className="relative z-10">
                  <span className="font-mono text-[9px] text-accent/50 block mb-4 italic">{note.date}</span>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-accent transition-colors leading-none">
                    {getNoteTitle(note)}
                  </h3>
                  <div className="flex gap-2 flex-wrap mb-6">
                    {note.tags.map(tag => (
                      <span key={tag} className="text-[8px] px-1.5 py-0.5 border border-line text-white/30 uppercase font-mono tracking-tighter">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-white/40 text-sm line-clamp-3 font-medium leading-relaxed">
                    {getNoteContent(note).replace(/[#*`>]/g, '').slice(0, 150)}...
                  </div>
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-4 -right-2 text-6xl font-black text-white/[0.02] select-none group-hover:text-accent/[0.05] transition-colors leading-none">
                  UB.
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Full-screen Modal Detail View */}
      <AnimatePresence>
        {selectedNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-lenis-prevent
            className="fixed inset-0 z-[60] bg-bg overflow-y-auto custom-scrollbar"
          >
            {/* Modal Header */}
            <div className="sticky top-0 left-0 right-0 z-10 bg-bg/80 backdrop-blur-md border-b border-line px-6 py-4 flex items-center justify-between">
              <span className="label-mono !mb-0 italic text-accent">{selectedNote.date}</span>
              <button 
                onClick={() => setSelectedNote(null)}
                className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[2px] text-white/50 hover:text-white transition-colors"
              >
                {i18n.language === 'id' ? 'TUTUP' : 'CLOSE'} <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="max-w-4xl mx-auto px-6 py-20 lg:py-32">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex gap-4 mb-8">
                  {selectedNote.tags.map((tag: string) => (
                    <span key={tag} className="font-mono text-[10px] px-2 py-1 border border-accent/20 text-accent uppercase tracking-[2px]">#{tag}</span>
                  ))}
                </div>
                
                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
                  {getNoteTitle(selectedNote)}
                </h2>

                <div className="markdown-content mt-20 border-t border-line pt-20">
                  <ReactMarkdown>{getNoteContent(selectedNote)}</ReactMarkdown>
                </div>
                
                <div className="mt-20 pt-10 border-t border-line flex justify-between items-center opacity-30">
                  <span className="font-mono text-[10px]">{t('notes.last_updated')}: {selectedNote.date}</span>
                  <div className="font-black text-2xl italic">UBAY DILLAH</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
