import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation, Trans } from 'react-i18next';
import { 
  Github, 
  Linkedin, 
  ExternalLink,
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react';
import { cn } from './lib/utils';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import ReactMarkdown from 'react-markdown';
import { NAV_LINKS, SKILLS, PROJECTS, NOTES } from './constants';

function Navbar({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen }: any) {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'id' ? 'en' : 'id');
  };
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-line px-6 py-4 bg-bg/80 backdrop-blur-sm",
        isScrolled ? "py-3" : "py-4"
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-black tracking-tighter">UBAY DILLAH</Link>
        
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              to={link.href.startsWith('#') ? `/${link.href}` : link.href}
              className={cn(
                "text-[10px] font-mono uppercase tracking-[2px] transition-colors",
                location.hash === link.href || (location.pathname === '/projects' && link.href === '#projects')
                  ? "text-accent" 
                  : "text-white/50 hover:text-accent"
              )}
            >
              {t(link.name)}
            </Link>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="text-[10px] font-mono border border-line px-2 py-1 rounded hover:border-accent hover:text-accent transition-all uppercase"
          >
            {i18n.language.startsWith('id') ? 'ID' : 'EN'}
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="text-[10px] font-mono border border-line px-2 py-1 rounded uppercase"
          >
            {i18n.language.startsWith('id') ? 'ID' : 'EN'}
          </button>
          <button 
            className="p-2 text-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      {/* Hero & About Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Hero */}
        <section id="home" className="grid-cell md:col-span-8 justify-between min-h-[600px]">
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col gap-1">
              <span className="label-mono !mb-0 italic text-accent opacity-100 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                AVAILABLE FOR HIRE
              </span>
              <span className="font-mono text-[9px] text-white/30 uppercase tracking-[3px]">
                Semarang, ID / {new Date().toLocaleTimeString(i18n.language === 'id' ? 'id-ID' : 'en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })} {i18n.language === 'id' ? 'WIB' : 'GMT+7'}
              </span>
            </div>
            <div className="hidden sm:block text-right">
              <span className="label-mono !mb-0 text-[8px] opacity-30">SCROLL TO EXPLORE</span>
              <div className="w-px h-12 bg-line mx-auto mt-2 origin-top animate-bounce"></div>
            </div>
          </div>
          
          <div className="mt-20">
            <span className="label-mono italic">{t('hero.subtitle')}</span>
            <h1 className="header-display mb-4">
              <Trans i18nKey="hero.title">UBAY<br />DILLAH</Trans>
            </h1>
            <p className="font-mono text-accent text-sm tracking-[2px] uppercase">
              {t('hero.description')}
            </p>
          </div>
        </section>

        <section id="about" className="grid-cell md:col-span-4 bg-white/5">
          <span className="label-mono italic text-accent/50">{t('about.label')}</span>
          <div className="mt-auto">
            <p className="text-lg md:text-xl leading-relaxed text-white/80">
              {t('about.text')}
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#" className="p-2 border border-line rounded-lg hover:border-accent hover:text-accent transition-all">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 border border-line rounded-lg hover:border-accent hover:text-accent transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Skills & Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 items-start">
        <section id="skills" className="grid-cell md:col-span-3">
          <span className="label-mono">{t('expertise.label')}</span>
          <div className="space-y-10 mt-6">
            {SKILLS.map((skillGroup, idx) => (
              <div key={idx}>
                <h3 className="text-[10px] font-mono text-accent/50 uppercase tracking-widest mb-4">{skillGroup.name}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="text-lg font-medium border-b border-line pb-2 flex justify-between items-center group cursor-default">
                      <span>{skill}</span>
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Preview - Sticky */}
        <section id="projects" className="md:col-span-6 cell-border md:sticky md:top-[73px]">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {PROJECTS.slice(0, 3).map((project, idx) => (
              <Link 
                key={idx} 
                to="/projects"
                className="grid-cell group relative overflow-hidden transition-all hover:bg-white/5 border-r border-b border-line min-h-[300px]"
              >
                <div className="flex flex-col h-full relative z-10">
                  <span className="label-mono italic opacity-40">#00{idx + 1} / {project.tech[0]}</span>
                  <div className="mt-auto">
                    <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </Link>
            ))}
            <Link to="/projects" className="grid-cell group border-line justify-center items-center hover:bg-accent hover:text-black transition-all min-h-[300px] border-b-0">
              <div className="text-center group-hover:scale-110 transition-transform">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] block mb-2 opacity-50">{t('portfolio.explore')}</span>
                <span className="font-black text-2xl uppercase tracking-tighter block">{t('portfolio.label')}</span>
                <ArrowUpRight size={24} className="mx-auto mt-4" />
              </div>
            </Link>
          </div>
        </section>

        {/* Contact - Sticky */}
        <section id="contact" className="grid-cell md:col-span-3 bg-accent text-black md:sticky md:top-[73px]">
          <span className="label-mono !text-black/50">{t('inquiries.label')}</span>
          <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-6">
            <Trans i18nKey="inquiries.title">LET'S<br />COLLAB</Trans>
          </h2>
          
          <form 
            className="mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              const target = e.target as typeof e.target & {
                name: { value: string };
                message: { value: string };
              };
              const text = `Halo Ubay, saya ${target.name.value}. ${target.message.value}`;
              window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
            }}
          >
            <input type="text" name="name" placeholder={t('inquiries.name')} required className="input-brutal border-black/20 focus:border-black/50" />
            <input type="email" placeholder={t('inquiries.email')} required className="input-brutal border-black/20 focus:border-black/50" />
            <textarea name="message" placeholder={t('inquiries.message')} required className="input-brutal border-black/20 focus:border-black/50 min-h-[80px] resize-none" />
            
            <button type="submit" className="btn-brutal mt-4 bg-transparent border-black hover:bg-black hover:text-accent transition-all">
              {t('inquiries.submit')}
            </button>
          </form>
          
          <div className="mt-6 pt-6 border-t border-black/10">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity">
              {t('inquiries.whatsapp')} <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

function ProjectsPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = ['frontend', 'backend', 'mobile', 'fullstack'];
  
  const filteredProjects = activeCategory 
    ? PROJECTS.filter(p => (p as any).category === activeCategory)
    : PROJECTS;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 items-start min-h-[calc(100vh-73px)]">
      {/* Sticky Sidebar */}
      <section className="md:col-span-5 lg:col-span-4 md:sticky md:top-[73px] md:h-[calc(100vh-73px)] border-b md:border-b-0 border-line bg-white/5 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 lg:p-10">
          <span className="label-mono italic text-accent/50">{t('portfolio.label')}</span>
          
          <div className="my-8 lg:my-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] leading-[0.85] uppercase">
              <Trans i18nKey="portfolio.title">MY<br />WORKS.</Trans>
            </h2>
            <div className="w-16 lg:w-20 h-1 bg-accent mt-4 lg:mt-6"></div>
          </div>

          <div className="mb-8 lg:mb-10">
            <span className="label-mono opacity-30 !mb-4">{t('portfolio.filter')}</span>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setActiveCategory(null)}
                className={cn(
                  "px-3 py-1 border font-mono text-[9px] uppercase tracking-wider transition-all",
                  activeCategory === null 
                    ? "bg-accent text-black border-accent" 
                    : "border-line text-white/40 hover:border-accent hover:text-accent"
                )}
              >
                {t('portfolio.all')}
              </button>
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-3 py-1 border font-mono text-[9px] uppercase tracking-wider transition-all",
                    activeCategory === cat 
                      ? "bg-accent text-black border-accent" 
                      : "border-line text-white/40 hover:border-accent hover:text-accent"
                  )}
                >
                  {t(`portfolio.categories.${cat}`)}
                </button>
              ))}
            </div>
          </div>

          <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest max-w-xs leading-relaxed opacity-60">
            {t('portfolio.description')}
          </p>
        </div>

        <div className="px-6 md:px-8 lg:px-10 py-6 lg:py-8 border-t border-line bg-white/[0.02]">
          <div className="flex justify-between items-end">
            <div>
              <span className="label-mono !mb-1 opacity-30 italic">{t('portfolio.total')}</span>
              <span className="text-3xl lg:text-4xl font-black text-accent">{filteredProjects.length.toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-10 -right-10 font-black text-[15rem] lg:text-[20rem] text-white/[0.01] select-none pointer-events-none leading-none">
          UB.
        </div>
      </section>

      {/* Projects List */}
      <section className="md:col-span-7 lg:col-span-8 cell-border min-h-screen">
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                key={project.title} 
                className="grid-cell p-0 group relative overflow-hidden border-r border-b border-line min-h-[450px]"
              >
                <div className="p-10 flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start">
                    <span className="label-mono italic opacity-40">#00{idx + 1} / {project.tech[0]}</span>
                    <div className="w-8 h-8 rounded-full border border-line flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-accent scale-50 group-hover:scale-100">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black uppercase tracking-tight mt-auto group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 mt-4 text-sm leading-relaxed max-w-md line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-6">
                    <a 
                      href={project.link} 
                      className="group/link flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] hover:text-accent transition-colors"
                    >
                      {t('portfolio.visit')} <ExternalLink size={12} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                    <div className="h-px flex-1 bg-line/30"></div>
                  </div>
                </div>
                
                <div className="absolute inset-0 z-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-all duration-700 grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60"></div>
                </div>
              </motion.div>
            ))}
            
            {filteredProjects.length % 2 !== 0 && (
              <div className="grid-cell hidden sm:flex border-r border-b border-line justify-center items-center group overflow-hidden">
                <div className="font-mono text-[8vw] select-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 rotate-12">
                  {t(`portfolio.categories.${activeCategory}`) || 'PROJECTS'}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-40">
            <span className="label-mono opacity-20 italic">{t('portfolio.no_projects')}</span>
          </div>
        )}
      </section>
    </div>
  );
}

function NotesPage() {
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

  const getNoteTitle = (note: any) => note.title[i18n.language.startsWith('id') ? 'id' : 'en'];
  const getNoteContent = (note: any) => note.content[i18n.language.startsWith('id') ? 'id' : 'en'];

  return (
    <div className="min-h-screen pb-20">
      {/* Header & Filter */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-line bg-white/5">
        <div className="md:col-span-8 grid-cell justify-center">
          <span className="label-mono italic text-accent/50">{t('notes.label')}</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mt-4 mb-8">
            <Trans i18nKey="notes.title">MY<br />NOTES.</Trans>
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

export default function App() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section when hash changes
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-bg text-ink selection:bg-accent selection:text-black">
      <Navbar 
        isScrolled={isScrolled} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg pt-24 px-6 md:hidden flex flex-col gap-6 items-center justify-center text-center"
          >
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                to={link.href.startsWith('#') ? `/${link.href}` : link.href}
                className="text-4xl font-black uppercase tracking-tighter hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(link.name)}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-[1400px] mx-auto border-x border-line pt-[73px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </main>

      <footer className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 border-x border-b border-line">
        <div className="grid-cell border-line py-8">
          <p className="text-[10px] font-mono text-white/30 uppercase tracking-[2px]">
            {t('footer.rights', { year: new Date().getFullYear() })}
          </p>
        </div>
        <div className="grid-cell flex-row items-center gap-8 justify-end py-8 border-l border-line">
          <a href="#" className="label-mono mb-0 hover:text-accent">GitHub</a>
          <a href="#" className="label-mono mb-0 hover:text-accent transition-all hover:-translate-y-1">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}


