"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { NAV_LINKS } from "../constants";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "id" ? "en" : "id");
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-line px-6 py-4 bg-bg/80 backdrop-blur-sm",
          isScrolled ? "py-3" : "py-4",
        )}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter">
            UD.
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                className={cn(
                  "text-[10px] font-mono uppercase tracking-[2px] transition-colors",
                  pathname === link.href ||
                    (pathname === "/projects" && link.href === "#projects")
                    ? "text-accent"
                    : "text-white/50 hover:text-accent",
                )}
              >
                {t(link.name)}
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="text-[10px] font-mono border border-line px-2 py-1 rounded hover:border-accent hover:text-accent transition-all uppercase"
            >
              {i18n.language.startsWith("id") ? "ID" : "EN"}
            </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleLanguage}
              className="text-[10px] font-mono border border-line px-2 py-1 rounded uppercase"
            >
              {i18n.language.startsWith("id") ? "ID" : "EN"}
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
                href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                className="text-4xl font-black uppercase tracking-tighter hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(link.name)}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
