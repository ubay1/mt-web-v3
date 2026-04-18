import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const isBrowser = typeof window !== 'undefined';

const i18nInstance = i18n
  .use(initReactI18next);

if (isBrowser) {
  i18nInstance.use(LanguageDetector);
}

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        expertise: 'Expertise',
        skills: 'Skills',
        projects: 'Works',
        notes: 'Notes',
        contact: 'Contact',
      },
      hero: {
        subtitle: 'Creative Developer & Designer',
        title: 'UBAY<br />DILLAH',
        description: 'Crafting digital experiences through code and aesthetics. Specialized in full-stack development and interactive design.',
      },
      about: {
        label: 'The Story',
        text: 'I am a passionate developer from Semarang, Indonesia, with a deep interest in modern web architecture and user-centric design. My goal is to bridge the gap between complex backend logic and elegant frontend experiences.',
      },
      expertise: {
        label: 'Core Expertise',
      },
      portfolio: {
        label: 'Works',
        title: 'MY<br />WORKS.',
        filter: 'Category Filter',
        all: 'All Projects',
        total: 'Total Projects',
        explore: 'Explore Full',
        visit: 'Visit Project',
        no_projects: 'No projects found in this category.',
        description: 'A curated selection of my professional and personal projects, showcasing my technical capabilities and design sense.',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          mobile: 'Mobile',
          fullstack: 'Fullstack'
        }
      },
      notes: {
        label: 'Thoughts',
        title: 'MY<br />NOTES.',
        description: 'A collection of technical notes, implementation details, and professional insights gathered throughout my journey.',
        select: 'Select a note to read more',
        last_updated: 'Last Updated'
      },
      inquiries: {
        label: 'Get in Touch',
        title: 'LET\'S<br />COLLAB',
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'Send Message',
        whatsapp: 'Contact via WhatsApp',
      },
      footer: {
        rights: '© {{year}} Ubay Dillah. All rights reserved.',
      }
    },
  },
  id: {
    translation: {
      nav: {
        home: 'Beranda',
        about: 'Tentang',
        expertise: 'Keahlian',
        skills: 'Skill',
        projects: 'Karya',
        notes: 'Catatan',
        contact: 'Kontak',
      },
      hero: {
        subtitle: 'Creative Developer & Designer',
        title: 'UBAY<br />DILLAH',
        description: 'Membangun pengalaman digital melalui kode dan estetika. Spesialisasi dalam full-stack development dan interaksi desain.',
      },
      about: {
        label: 'Cerita Saya',
        text: 'Saya adalah pengembang yang bersemangat dari Semarang, Indonesia, dengan ketertarikan mendalam pada arsitektur web modern dan desain yang berpusat pada pengguna. Tujuan saya adalah menjembatani kesenjangan antara logika backend yang kompleks dan pengalaman frontend yang elegan.',
      },
      expertise: {
        label: 'Keahlian Inti',
      },
      portfolio: {
        label: 'Karya Saya',
        title: 'KARYA<br />SAYA.',
        filter: 'Filter Kategori',
        all: 'Semua Proyek',
        total: 'Total Proyek',
        explore: 'Lihat Semua',
        visit: 'Kunjungi Proyek',
        no_projects: 'Tidak ada proyek ditemukan dalam kategori ini.',
        description: 'Pilihan kurasi dari proyek profesional dan pribadi saya, menunjukkan kemampuan teknis dan rasa desain saya.',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          mobile: 'Mobile',
          fullstack: 'Fullstack'
        }
      },
      notes: {
        label: 'Pemikiran',
        title: 'CATATAN<br />SAYA.',
        description: 'Kumpulan catatan teknis, detail implementasi, dan wawasan profesional yang dikumpulkan sepanjang perjalanan saya.',
        select: 'Pilih catatan untuk membaca lebih lanjut',
        last_updated: 'Terakhir Diperbarui'
      },
      inquiries: {
        label: 'Hubungi Saya',
        title: 'AYO<br />KOLAB',
        name: 'Nama Anda',
        email: 'Email Anda',
        message: 'Pesan Anda',
        submit: 'Kirim Pesan',
        whatsapp: 'Kontak via WhatsApp',
      },
      footer: {
        rights: '© {{year}} Ubay Dillah. Hak cipta dilindungi.',
      }
    },
  },
};

i18nInstance.init({
  resources,
  lng: isBrowser ? undefined : 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
    caches: ['localStorage', 'cookie'],
  },
});

export default i18nInstance;

