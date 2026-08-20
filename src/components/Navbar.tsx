"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import { NAV_LINKS } from "../constants";

const LEARN_TRACKS = [
  { name: "Semua Materi (All)", href: "/learn", icon: "⚡" },
  { name: "Dart Mastery", href: "/learn/dart", icon: "🎯" },
  { name: "Flutter Mastery", href: "/learn/flutter", icon: "💙" },
  { name: "React.js Mastery", href: "/learn?track=react", icon: "⚛️" },
  { name: "Golang Mastery", href: "/learn?track=golang", icon: "🐹" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false);
  const [isMobileLearnOpen, setIsMobileLearnOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLearnDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLearnDropdownOpen(false);
  }, [pathname]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "id" ? "en" : "id");
  };

  const isLearnActive = pathname.startsWith("/learn");

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

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              if (link.href === "/learn") {
                return (
                  <div
                    key={link.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setIsLearnDropdownOpen(true)}
                    onMouseLeave={() => setIsLearnDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setIsLearnDropdownOpen(!isLearnDropdownOpen)}
                      className={cn(
                        "flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[2px] transition-colors py-1",
                        isLearnActive
                          ? "text-accent"
                          : "text-white/50 hover:text-accent",
                      )}
                    >
                      <span>{t(link.name)}</span>
                      <ChevronDown
                        size={12}
                        className={cn(
                          "transition-transform duration-200",
                          isLearnDropdownOpen ? "rotate-180 text-accent" : "opacity-60"
                        )}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 transition-all duration-200 origin-top",
                        isLearnDropdownOpen
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none"
                      )}
                    >
                      <div className="bg-bg/95 backdrop-blur-xl border border-line rounded-lg shadow-2xl p-1.5 divide-y divide-line/30">
                        {LEARN_TRACKS.map((track) => (
                          <Link
                            key={track.name}
                            href={track.href}
                            className="flex items-center gap-2.5 px-3 py-2 text-[11px] font-mono text-white/70 hover:text-accent hover:bg-white/5 rounded transition-colors"
                            onClick={() => setIsLearnDropdownOpen(false)}
                          >
                            <span>{track.icon}</span>
                            <span className="truncate">{track.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
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
              );
            })}

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
              aria-label="btn-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-bg pt-24 px-6 md:hidden flex flex-col gap-5 items-center justify-center text-center transition-opacity duration-200 overflow-y-auto",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        {NAV_LINKS.map((link) => {
          if (link.href === "/learn") {
            return (
              <div key={link.name} className="flex flex-col items-center gap-3">
                <button
                  onClick={() => setIsMobileLearnOpen(!isMobileLearnOpen)}
                  className="text-3xl font-black uppercase tracking-tighter hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span>{t(link.name)}</span>
                  <ChevronDown
                    size={22}
                    className={cn(
                      "transition-transform duration-200 text-white/50",
                      isMobileLearnOpen ? "rotate-180 text-accent" : ""
                    )}
                  />
                </button>

                {isMobileLearnOpen && (
                  <div className="flex flex-col gap-2 bg-white/5 border border-line p-3 rounded-lg w-64 animate-fade-in">
                    {LEARN_TRACKS.map((track) => (
                      <Link
                        key={track.name}
                        href={track.href}
                        className="text-sm font-mono text-white/70 hover:text-accent py-1.5 flex items-center justify-center gap-2 border-b border-line/30 last:border-0"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{track.icon}</span>
                        <span>{track.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={link.name}
              href={link.href.startsWith("#") ? `/${link.href}` : link.href}
              className="text-3xl font-black uppercase tracking-tighter hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t(link.name)}
            </Link>
          );
        })}
      </div>
    </>
  );
}
