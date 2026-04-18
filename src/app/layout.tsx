import './globals.css';
import type { Metadata } from 'next';
import I18nProvider from '../components/I18nProvider';
import SmoothScroll from '../components/SmoothScroll';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Ubay Dillah - Creative Developer & Designer',
  description: 'Crafting digital experiences through code and aesthetics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-bg text-ink selection:bg-accent selection:text-black">
        <I18nProvider>
          <SmoothScroll>
            <Navbar />
            <main className="max-w-[1400px] mx-auto border-x border-line pt-[73px]">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </I18nProvider>
      </body>
    </html>
  );
}
