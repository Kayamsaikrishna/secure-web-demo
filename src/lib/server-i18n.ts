import fs from 'fs';
import path from 'path';

// Load translation files
const loadTranslations = (locale: string) => {
  try {
    const filePath = path.join(process.cwd(), 'public', 'locales', locale, 'common.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Failed to load translations for locale ${locale}:`, error);
    // Fallback to English
    try {
      const filePath = path.join(process.cwd(), 'public', 'locales', 'en', 'common.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContents);
    } catch (fallbackError) {
      console.error('Failed to load fallback translations:', fallbackError);
      return {};
    }
  }
};

// Get nested property from object using dot notation
const getNestedProperty = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : path;
  }, obj);
};

// Translation function for server components
export const getServerTranslation = (locale: string = 'en') => {
  const translations = loadTranslations(locale);
  
  return {
    t: (key: string) => {
      return getNestedProperty(translations, key);
    },
    locale
  };
};

// Get accepted language from headers
export const getAcceptedLanguage = (headers: Headers): string => {
  const acceptLanguageHeader = headers.get('accept-language');
  if (!acceptLanguageHeader) return 'en';
  
  // Simple language parsing (you might want to use a more robust solution)
  const languages = acceptLanguageHeader.split(',').map(lang => {
    const [language] = lang.trim().split(';');
    return language.split('-')[0]; // Get base language code
  });
  
  // Supported languages
  const supportedLanguages = ['en', 'hi', 'ta', 'te', 'ml', 'kn', 'bn', 'gu', 'or', 'pa', 'mr', 'ur'];
  
  // Find first supported language
  for (const lang of languages) {
    if (supportedLanguages.includes(lang)) {
      return lang;
    }
  }
  
  return 'en';
};