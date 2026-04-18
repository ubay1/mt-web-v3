'use client';

import { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Link from 'next/link';
import { 
  Github, 
  Linkedin, 
  ArrowUpRight
} from 'lucide-react';
import { SKILLS, PROJECTS } from '../constants';

export default function HomePage() {
  const { t, i18n } = useTranslation();
  
  const [currentTime, setCurrentTime] = useState<string>('');
  
  useEffect(() => {
    const updateTime = () => {
      const lang = i18n.language || 'en';
      setCurrentTime(new Date().toLocaleTimeString(lang.startsWith('id') ? 'id-ID' : 'en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [i18n.language]);
  
  const lang = i18n.language || 'en';

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
                Semarang, ID / {currentTime} {lang.startsWith('id') ? 'WIB' : 'GMT+7'}
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
              <Trans i18nKey="hero.title" components={{ br: <br /> }} />
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
                href="/projects"
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
            <Link href="/projects" className="grid-cell group border-line justify-center items-center hover:bg-accent hover:text-black transition-all min-h-[300px] border-b-0">
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
            <Trans i18nKey="inquiries.title" components={{ br: <br /> }} />
          </h2>
          
          <form 
            className="mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name') as string;
              const message = formData.get('message') as string;
              const text = `Halo Ubay, saya ${name}. ${message}`;
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
