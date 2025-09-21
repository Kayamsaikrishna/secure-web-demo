// Preload all translation resources to avoid i18next warnings
import i18n from './i18n';

// Function to preload all resources
export const preloadTranslations = async () => {
  try {
    // Ensure i18n is initialized
    if (i18n && !i18n.isInitialized) {
      console.log('Initializing i18n');
      await i18n.init();
    }
    
    // Wait for translations to be loaded
    await new Promise((resolve, reject) => {
      let attempts = 0;
      const maxAttempts = 100; // Max 5 seconds
      
      const checkReady = () => {
        attempts++;
        console.log(`Checking if translations are ready... (attempt ${attempts})`);
        console.log('Current language:', i18n.language);
        
        // Check if we have resource bundles for the current language
        const currentLang = i18n.language?.split('-')[0] || 'en';
        // Check both the base language and language with region
        const hasBundle = i18n.hasResourceBundle(currentLang, 'common') || 
                          i18n.hasResourceBundle(i18n.language || 'en', 'common');
        console.log(`Has resource bundle for ${currentLang}:`, hasBundle);
        
        if (hasBundle) {
          console.log('Translations are ready');
          resolve(true);
        } else if (attempts >= maxAttempts) {
          console.log('Max attempts reached, giving up');
          reject(new Error('Translations failed to load after maximum attempts'));
        } else {
          console.log('Translations not ready yet, checking again in 50ms');
          setTimeout(checkReady, 50);
        }
      };
      
      checkReady();
    });
    
    console.log('Translations preloaded successfully');
    return i18n;
  } catch (error) {
    console.warn('Failed to preload translations:', error);
    return i18n;
  }
};

// Preload translations on module import
console.log('Preloading translations');
preloadTranslations().then(() => {
  console.log('Translations preloaded and ready');
}).catch(err => {
  console.error('Error preloading translations:', err);
});

export default i18n;