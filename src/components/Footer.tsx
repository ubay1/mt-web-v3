'use client';

import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
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
  );
}
