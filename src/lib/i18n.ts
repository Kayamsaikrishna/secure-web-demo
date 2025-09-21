import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Configure i18n with proper settings to avoid warnings
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      // Order and from where user language should be detected
      order: ['querystring', 'localStorage', 'cookie', 'navigator', 'htmlTag'],
      
      // Keys or params to lookup language from
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'selectedLanguage', // Use our custom key
      
      // Cache user language on
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'], // Languages to not persist (cookie, localStorage)
      
      // Optional set cookie options, reference: https://github.com/js-cookie/js-cookie#cookie-attributes
      cookieOptions: { path: '/', sameSite: 'strict', secure: false }
    },
    react: {
      useSuspense: false, // Important for Next.js server-side rendering
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
      // Ensure no missing translation warnings
      bindI18n: 'languageChanged loaded',
      bindI18nStore: 'added removed',
      transEmptyNodeValue: '',
    },
    // Fix for i18next warning about missing keys
    saveMissing: false,
    // Ensure compatibility with React 18+
    compatibilityJSON: 'v4',
    // Namespace configuration
    ns: ['common'],
    defaultNS: 'common',
    // Additional settings to prevent warnings
    keySeparator: false, // We do not use keys in form 'app.menu.home'
    nsSeparator: false, // We do not use namespaces in form 'common:home'
    pluralSeparator: '_',
    contextSeparator: '_'
  });

// Function to load translation files at runtime
const loadTranslationFile = async (locale: string) => {
  try {
    // Use fetch to load the JSON file from the public directory
    const response = await fetch(`/locales/${locale}/common.json`);
    if (!response.ok) {
      throw new Error(`Failed to load translation file for ${locale}`);
    }
    return await response.json();
  } catch (error) {
    console.warn(`Failed to load translations for ${locale}:`, error);
    // Try to load English as fallback
    if (locale !== 'en') {
      return loadTranslationFile('en');
    }
    return {};
  }
};

// Dynamically load translation files after initialization to avoid build issues
const loadTranslations = async () => {
  try {
    const locales = ['en', 'hi', 'ta', 'te', 'ml', 'kn', 'bn', 'gu', 'or', 'pa', 'mr', 'ur'];
    const translations: Record<string, Record<string, string>> = {};

    // Load all translation files
    for (const locale of locales) {
      console.log(`Loading translations for ${locale}`);
      translations[locale] = await loadTranslationFile(locale);
      console.log(`Loaded ${Object.keys(translations[locale]).length} keys for ${locale}`);
    }

    // Add resources to i18n with proper flattening
    Object.keys(translations).forEach(lang => {
      console.log(`Adding resource bundle for ${lang}`);
      // Flatten the nested JSON structure for i18next
      const flattenedTranslations = flattenTranslations(translations[lang]);
      i18n.addResourceBundle(lang, 'common', flattenedTranslations, true, true);
      console.log(`Added resource bundle for ${lang} with ${Object.keys(flattenedTranslations).length} keys`);
      
      // Also add the resource bundle for language codes with region (e.g., en-US)
      if (lang === 'en') {
        i18n.addResourceBundle('en-US', 'common', flattenedTranslations, true, true);
        console.log(`Added resource bundle for en-US with ${Object.keys(flattenedTranslations).length} keys`);
      }
    });

    console.log('Translations loaded successfully');
    
    // Check if there's a language stored in localStorage
    let storedLanguage = null;
    if (typeof window !== 'undefined') {
      storedLanguage = localStorage.getItem('selectedLanguage');
      console.log('Stored language in localStorage:', storedLanguage);
    }
    
    // Trigger a language change to ensure components re-render with new translations
    const detectedLanguage = storedLanguage || i18n.language || 'en';
    const baseLanguage = detectedLanguage.split('-')[0]; // Get base language code
    console.log(`Changing language to ${baseLanguage}`);
    await i18n.changeLanguage(baseLanguage);
    console.log('Language changed successfully');
    
    // Log available languages and current language
    console.log('Available languages:', Object.keys(translations));
    console.log('Current language:', i18n.language);
    
    // Emit an event to notify that translations are loaded
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('translationsLoaded'));
    }
    
    return translations;
  } catch (error) {
    console.error('Failed to load translations:', error);
    throw error;
  }
};

// Helper function to flatten nested JSON translations for i18next
const flattenTranslations = (obj: any, prefix = ''): Record<string, string> => {
  const flattened: Record<string, string> = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        // Recursively flatten nested objects
        Object.assign(flattened, flattenTranslations(obj[key], newKey));
      } else {
        // Add leaf values
        flattened[newKey] = obj[key];
      }
    }
  }
  
  return flattened;
};

// Load translations
if (typeof window !== 'undefined') {
  // Load translations in browser
  loadTranslations().then(translations => {
    console.log('Translations loaded and ready to use');
  }).catch(err => {
    console.error('Error loading translations:', err);
  });
} else {
  // For server-side, we'll load translations when needed
  console.log('Translations will be loaded server-side as needed');
}

// Export a function to check if translations are loaded
export const areTranslationsLoaded = (language: string = 'en') => {
  // Check both the base language and language with region
  return i18n.hasResourceBundle(language, 'common') || 
         i18n.hasResourceBundle(language.split('-')[0], 'common');
};

export default i18n;