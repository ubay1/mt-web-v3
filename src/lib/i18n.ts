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
        subtitle: 'Software Developer',
        title: 'UBAY<br />DILLAH',
        description: 'Building digital experiences through code and design.',
      },
      about: {
        label: 'About Me',
        text: 'A Software Developer focused on building modern web applications that are fast, efficient, and easy to use. Enjoys simplifying complex problems into simple, functional solutions, and continuously learning to keep up with evolving technology.',
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
          fullstack: 'Fullstack',
          library: 'Library',
        },
        featured_projects: [
          {
            title: 'Sveltekit HPKE Wrapper',
            description: 'A wrapper library for data encryption built using TypeScript and hpke-js.',
          },
          {
            title: 'Mini Super Fetch',
            description: 'A small library for fetching data that has features like axios and tanstack query.',
          },
          {
            title: 'Meme Generator',
            description: 'A meme generator application for fun and sharing on social media.',
          },
          {
            title: 'Shopify - Autopro Performance',
            description: 'Shopify UI theme specifically designed for the automotive industry.',
          },
          {
            title: 'Shopify - Sun Store',
            description: 'Shopify UI theme specifically designed for the ecommerce industry.',
          },
          {
            title: 'Montrack',
            description: 'A monitoring application for domestic and international shipments that helps users track delivery status in real time.',
          },
          {
            title: 'Polri Connect',
            description: 'A video conferencing application developed for internal police needs, similar to Google Meet or Zoom. This application enables virtual meetings and remote communication, and is equipped with features such as screen sharing and multi-user support.',
          },
          {
            title: 'Sehat Indonesiaku',
            description: 'A digital health platform developed to monitor public health status in Indonesia, including routine immunization tracking, health data management, and medical history monitoring.',
          },
          {
            title: 'Dashboard Sehat Indonesiaku',
            description: 'A platform for monitoring and analyzing health data comprehensively.',
          },
          {
            title: 'Free Health Check (CKG)',
            description: 'A government program that aims to provide free health checks to the Indonesian people. so that people can detect various diseases early and monitor their health conditions periodically.',
          },
          {
            title: 'Money Management',
            description: 'A personal finance management application that is simple and easy to use.',
          },
          {
            title: 'Homi',
            description: 'A smarthome application that allows users to control and manage smart home devices from a single platform.',
          },
        ],
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
        subtitle: 'Software Developer',
        title: 'UBAY<br />DILLAH',
        description: 'Membangun pengalaman digital melalui kode dan desain.',
      },
      about: {
        label: 'Tentang Saya',
        text: 'Seorang Software Developer yang fokus membangun aplikasi web modern yang cepat, efisien, dan mudah digunakan. Senang menyederhanakan hal-hal kompleks menjadi solusi yang simpel dan fungsional, serta terus belajar mengikuti perkembangan teknologi.',
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
          fullstack: 'Fullstack',
          library: 'Library',
        },
        featured_projects: [
          {
            title: 'Sveltekit HPKE Wrapper',
            description: 'Library wrapper untuk encryption data yang dibuat menggunakan Typescript dan hpke-js.',
          },
          {
            title: 'Mini Super Fetch',
            description: 'Library kecil untuk fetch data yang memiliki fitur seperti axios dan tanstack query.',
          },
          {
            title: 'Meme Generator',
            description: 'Aplikasi meme generator untuk senang senang dan share ke sosial media.',
          },
          {
            title: 'Shopify - Autopro Performance',
            description: 'UI Theme shopify khusus untuk automotive',
          },
          {
            title: 'Shopify - Sun Store',
            description: 'UI Theme shopify khusus untuk ecommerce',
          },
          {
            title: 'Montrack',
            description: 'Aplikasi monitoring pengiriman barang antar negara atau antar kota yang memudahkan pengguna dalam melacak status kiriman secara real-time.',
          },
          {
            title: 'Polri Connect',
            description: 'Aplikasi konferensi video yang dikembangkan untuk kebutuhan internal kepolisian, mirip dengan Google Meet atau Zoom. Aplikasi ini memungkinkan rapat virtual dan komunikasi jarak jauh, serta dilengkapi dengan fitur-fitur seperti berbagi layar dan dukungan multi-pengguna.',
          },
          {
            title: 'Sehat Indonesiaku',
            description: 'Platform untuk memantau status kesehatan masyarakat di Indonesia. Diantaranya seperti pencatatan imunisasi rutin, pengelolaan data kesehatan, dan pelacakan riwayat medis.',
          },
          {
            title: 'Dashboard Sehat Indonesiaku',
            description: 'Platform untuk memantau dan menganalisis data kesehatan secara komprehensif.',
          },
          {
            title: 'Cek Kesehatan Gratis (CKG)',
            description: 'Program pemerintah yang bertujuan memberikan pemeriksaan kesehatan tanpa biaya kepada masyarakat Indonesia. agar masyarakat bisa melakukan deteksi dini berbagai penyakit serta memantau kondisi kesehatannya secara berkala.',
          },
          {
            title: 'Kelola Uang',
            description: 'Aplikasi pengelola keuangan pribadi yang simpel dan mudah digunakan.',
          },
          {
            title: 'Homi',
            description: 'Aplikasi smarthome yang memungkinkan pengguna mengontrol dan mengelola perangkat rumah pintar dari satu platform.',
          },

        ],
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

