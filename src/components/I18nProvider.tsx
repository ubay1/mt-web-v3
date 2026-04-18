'use client';

import { ReactNode, useEffect, useState } from 'react';
import i18n from '../lib/i18n';
import { I18nextProvider } from 'react-i18next';

export default function I18nProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use a minimal wrapper during the initial server-client handshake 
  // to avoid hydration mismatch while translations are being detected.
  if (!mounted) {
    return <div className="min-h-screen bg-[#050505]" />;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
