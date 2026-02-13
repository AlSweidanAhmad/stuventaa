import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import de from './locales/de.json';

i18n
  .use(LanguageDetector) // detects browser language
  .use(initReactI18next)  // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en
      },
      de: {
        translation: de
      }
    },

    fallbackLng: 'en',      // English as default
    supportedLngs: ['en', 'de'],

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },

    interpolation: {
      escapeValue: false // React already protects from XSS
    },

    react: {
      useSuspense: false
    }
  });

export default i18n;
