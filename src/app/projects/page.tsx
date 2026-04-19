"use client";

import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../../constants";
import { cn } from "../../lib/utils";

export default function ProjectsPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = ["frontend", "backend", "mobile", "fullstack", "library"];

  const filteredProjects = activeCategory
    ? PROJECTS.filter((p) => p.category === activeCategory)
    : PROJECTS;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 items-start min-h-[calc(100vh-73px)]">
      {/* Sticky Sidebar */}
      <section className="md:col-span-5 lg:col-span-4 md:sticky md:top-[73px] md:h-[calc(100vh-73px)] border-b md:border-b-0 border-line bg-white/5 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 lg:p-10">
          <span className="label-mono italic text-accent/50">
            {t("portfolio.label")}
          </span>

          <div className="my-8 lg:my-10">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black tracking-[-0.04em] leading-[0.85] uppercase">
              <Trans i18nKey="portfolio.title" components={{ br: <br /> }} />
            </h2>
            <div className="w-16 lg:w-20 h-1 bg-accent mt-4 lg:mt-6"></div>
          </div>

          <div className="mb-8 lg:mb-10">
            <span className="label-mono mb-4! text-white/40">
              {t("portfolio.filter")}
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={cn(
                  "px-3 py-1 border font-mono text-[9px] uppercase tracking-wider transition-all",
                  activeCategory === null
                    ? "bg-accent text-black border-accent"
                    : "border-line text-white/40 hover:border-accent hover:text-accent",
                )}
              >
                {t("portfolio.all")}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-3 py-1 border font-mono text-[9px] uppercase tracking-wider transition-all",
                    activeCategory === cat
                      ? "bg-accent text-black border-accent"
                      : "border-line text-white/40 hover:border-accent hover:text-accent",
                  )}
                >
                  {t(`portfolio.categories.${cat}`)}
                </button>
              ))}
            </div>
          </div>

          <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest max-w-xs leading-relaxed opacity-60">
            {t("portfolio.description")}
          </p>
        </div>

        <div className="px-6 md:px-8 lg:px-10 py-6 lg:py-8 border-t border-line bg-white/2">
          <div className="flex justify-between items-end">
            <div>
              <span className="label-mono mb-1! opacity-30 italic text-white">
                {t("portfolio.total")}
              </span>
              <span className="text-3xl lg:text-4xl font-black text-accent">
                {filteredProjects.length.toString().padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="md:col-span-7 lg:col-span-8 cell-border min-h-screen">
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2">
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
                    <span className="label-mono italic opacity-50 text-white/40">
                      #{String(PROJECTS.indexOf(project) + 1).padStart(3, "0")}{" "}
                      / {project.tech[0]}
                    </span>
                  </div>

                  <h3 className="text-3xl font-black uppercase tracking-tight mt-auto group-hover:text-accent transition-colors duration-300">
                    {t(`portfolio.featured_projects.${PROJECTS.indexOf(project)}.title`)}
                  </h3>
                  <p className="text-white/40 mt-4 text-sm leading-relaxed max-w-md line-clamp-4">
                    {t(`portfolio.featured_projects.${PROJECTS.indexOf(project)}.description`)}
                  </p>

                  <div className="mt-8 flex items-center gap-6">
                    <a
                      href={project.link}
                      target="_blank"
                      className="group/link flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] hover:text-accent transition-colors"
                    >
                      {t("portfolio.visit")}{" "}
                      <ExternalLink
                        size={12}
                        className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                      />
                    </a>
                    <div className="h-px flex-1 bg-line/30"></div>
                  </div>
                </div>

                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-5 group-hover:opacity-30 transition-all duration-700 grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent opacity-60"></div>
                </div>
              </motion.div>
            ))}

            {filteredProjects.length % 2 !== 0 && (
              <div className="grid-cell hidden sm:flex border-r border-b border-line justify-center items-center group overflow-hidden">
                <div className="font-mono text-[8vw] select-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 rotate-12">
                  {activeCategory ? activeCategory.toUpperCase() : "PROJECTS"}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-40">
            <span className="label-mono opacity-40 italic text-white">
              {t("portfolio.no_projects")}
            </span>
          </div>
        )}
      </section>
    </div>
  );
}
