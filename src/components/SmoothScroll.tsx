'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add('smooth-scroll');
    return () => {
      document.documentElement.classList.remove('smooth-scroll');
    };
  }, []);

  return <>{children}</>;
}
