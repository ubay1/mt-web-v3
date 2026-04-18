import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        notes: "Notes",
        contact: "Contact"
      },
      hero: {
        title: "UBAY<1/>DILLAH",
        subtitle: "Creative Engineer",
        description: "Full Stack Developer & Technical Architect"
      },
      about: {
        label: "01 — Profile",
        text: "I build digital architectures that bridge the gap between human intuition and technical excellence. Specializing in modern web stacks and interactive storytelling."
      },
      expertise: {
        label: "02 — Expertise"
      },
      inquiries: {
        label: "03 — Inquiries",
        title: "LET'S<1/>COLLAB",
        name: "NAME",
        email: "EMAIL",
        message: "MESSAGE",
        submit: "Send Message",
        whatsapp: "WhatsApp"
      },
      notes: {
        label: "Knowledge Base",
        title: "MY<1/>NOTES.",
        description: "A collection of technical notes, case studies, and digital insights about modern web craftsmanship.",
        select: "Select a note to read",
        last_updated: "Last Updated"
      },
      portfolio: {
        label: "Portfolio",
        title: "MY<1/>WORKS.",
        filter: "Filter Category",
        description: "A selection of curated projects showcasing technical expertise, creative problem solving, and attention to detail.",
        total: "Total Projects",
        explore: "Explore All",
        visit: "Visit",
        no_projects: "No projects found",
        all: "All",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          mobile: "Mobile",
          fullstack: "Fullstack"
        }
      },
      footer: {
        rights: "© {{year}} Ubay Dillah / All rights reserved"
      }
    }
  },
  id: {
    translation: {
      nav: {
        home: "Beranda",
        about: "Tentang",
        skills: "Keahlian",
        projects: "Proyek",
        notes: "Catatan",
        contact: "Kontak"
      },
      hero: {
        title: "UBAY<1/>DILLAH",
        subtitle: "Creative Engineer",
        description: "Full Stack Developer & Technical Architect"
      },
      about: {
        label: "01 — Profile",
        text: "Saya membangun arsitektur digital yang menjembatani kesenjangan antara intuisi manusia dan keunggulan teknis. Spesialisasi dalam tumpukan web modern dan penceritaan interaktif."
      },
      expertise: {
        label: "02 — Expertise"
      },
      inquiries: {
        label: "03 — Inquiries",
        title: "LET'S<1/>KOLAB",
        name: "NAMA",
        email: "EMAIL",
        message: "PESAN",
        submit: "Kirim Pesan",
        whatsapp: "WhatsApp"
      },
      notes: {
        label: "Basis Pengetahuan",
        title: "CATATAN<1/>SAYA.",
        description: "Kumpulan catatan teknis, studi kasus, dan wawasan digital tentang keahlian web modern.",
        select: "Pilih catatan untuk dibaca",
        last_updated: "Terakhir Diperbarui"
      },
      portfolio: {
        label: "Portofolio",
        title: "KARYA<1/>SAYA.",
        filter: "Filter Kategori",
        description: "Kumpulan proyek pilihan yang menunjukkan keahlian teknis, pemecahan masalah secara kreatif, dan perhatian terhadap detail.",
        total: "Total Proyek",
        explore: "Eksplorasi Semua",
        visit: "Kunjungi",
        no_projects: "Tidak ada proyek ditemukan",
        all: "Semua",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          mobile: "Mobile",
          fullstack: "Fullstack"
        }
      },
      footer: {
        rights: "© {{year}} Ubay Dillah / Seluruh hak cipta dilindungi"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'id',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
