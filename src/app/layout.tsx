import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import I18nProvider from "../components/I18nProvider";
import SmoothScroll from "../components/SmoothScroll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Ubay Dillah - Software Developer",
  description: "Crafting digital experiences through code and aesthetics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
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
        {/* Commento SDK — test aja */}
        <Script
          src="https://commento-feedback.netlify.app/commento-sdk.js?token=ebb0ace0-6035-4bec-9fcf-776ec1055199"
          data-token="ebb0ace0-6035-4bec-9fcf-776ec1055199"
          data-api="https://commento-feedback.netlify.app"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
