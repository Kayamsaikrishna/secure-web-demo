import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files using relative paths
import enTranslation from '../../public/locales/en/common.json';
import hiTranslation from '../../public/locales/hi/common.json';
import taTranslation from '../../public/locales/ta/common.json';
import teTranslation from '../../public/locales/te/common.json';
import mlTranslation from '../../public/locales/ml/common.json';
import knTranslation from '../../public/locales/kn/common.json';
import bnTranslation from '../../public/locales/bn/common.json';
import guTranslation from '../../public/locales/gu/common.json';
import orTranslation from '../../public/locales/or/common.json';
import paTranslation from '../../public/locales/pa/common.json';
import mrTranslation from '../../public/locales/mr/common.json';
import urTranslation from '../../public/locales/ur/common.json';

const resources = {
  en: {
    common: enTranslation
  },
  hi: {
    common: hiTranslation
  },
  ta: {
    common: taTranslation
  },
  te: {
    common: teTranslation
  },
  ml: {
    common: mlTranslation
  },
  kn: {
    common: knTranslation
  },
  bn: {
    common: bnTranslation
  },
  gu: {
    common: guTranslation
  },
  or: {
    common: orTranslation
  },
  pa: {
    common: paTranslation
  },
  mr: {
    common: mrTranslation
  },
  ur: {
    common: urTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie']
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;