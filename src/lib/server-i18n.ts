// Supported languages
const supportedLanguages = ['en', 'hi', 'ta', 'te', 'ml', 'kn', 'bn', 'gu', 'or', 'pa', 'mr', 'ur'];

// Load translation files with better error handling
const loadTranslations = (locale: string) => {
  try {
    // Validate locale
    if (!supportedLanguages.includes(locale)) {
      console.warn(`Unsupported locale: ${locale}, falling back to 'en'`);
      return loadTranslations('en');
    }
    
    // Dynamically import the translation file
    // Using require to load JSON files server-side
    try {
      const translations = require(`../../public/locales/${locale}/common.json`);
      return translations;
    } catch (importError) {
      console.warn(`Failed to load translation file for ${locale}:`, importError);
      // Fallback to English only if not already trying to load English
      if (locale !== 'en') {
        return loadTranslations('en');
      }
      return {};
    }
  } catch (error) {
    console.warn(`Failed to load translations for locale ${locale}:`, error);
    // Fallback to English only if not already trying to load English
    if (locale !== 'en') {
      return loadTranslations('en');
    }
    return {};
  }
};

// Get nested property from object using dot notation with better error handling
const getNestedProperty = (obj: Record<string, unknown>, path: string): string => {
  try {
    if (!obj || typeof obj !== 'object') {
      return path;
    }
    
    const keys = path.split('.');
    let current: unknown = obj;
    
    for (const key of keys) {
      if (current && typeof current === 'object' && key in (current as Record<string, unknown>)) {
        current = (current as Record<string, unknown>)[key];
      } else {
        return path;
      }
    }
    
    return typeof current === 'string' ? current : path;
  } catch (error) {
    console.warn(`Error accessing translation key: ${path}`, error);
    return path;
  }
};

// Translation function for server components
export const getServerTranslation = (locale: string = 'en') => {
  // Validate and normalize locale
  const normalizedLocale = supportedLanguages.includes(locale) ? locale : 'en';
  const translations = loadTranslations(normalizedLocale);
  
  return {
    t: (key: string) => {
      if (!key) return '';
      const result = getNestedProperty(translations, key);
      // If the result is the same as the key, it means the translation wasn't found
      // In that case, we try to load English as a last resort
      if (result === key && normalizedLocale !== 'en') {
        const englishTranslations = loadTranslations('en');
        const englishResult = getNestedProperty(englishTranslations, key);
        return englishResult === key ? key : englishResult;
      }
      return result;
    },
    locale: normalizedLocale
  };
};

// Get accepted language from headers with improved parsing
export const getAcceptedLanguage = (headers: Headers): string => {
  const acceptLanguageHeader = headers.get('accept-language');
  if (!acceptLanguageHeader) return 'en';
  
  try {
    // Parse Accept-Language header properly
    const languages = acceptLanguageHeader.split(',').map(lang => {
      const [languagePart] = lang.trim().split(';');
      // Extract language code (e.g., 'en-US' -> 'en')
      const [language] = languagePart.split('-');
      return language.toLowerCase();
    });
    
    // Find first supported language
    for (const lang of languages) {
      if (supportedLanguages.includes(lang)) {
        return lang;
      }
    }
  } catch (error) {
    console.warn('Error parsing accept-language header:', error);
  }
  
  return 'en';
};