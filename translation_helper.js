/**
 * Translation Helper Script
 * 
 * This script helps maintain and update translation files for the multilingual implementation.
 * It can be used to:
 * 1. Check for missing translations
 * 2. Add new translation keys
 * 3. Validate JSON syntax
 * 4. Compare translation files
 */

const fs = require('fs');
const path = require('path');

// Supported languages
const LANGUAGES = [
  'en', 'hi', 'ta', 'te', 'ml', 'kn', 'bn', 
  'gu', 'or', 'pa', 'mr', 'ur'
];

// Path to locales directory
const LOCALES_PATH = './public/locales';

/**
 * Check for missing translations in language files
 */
function checkMissingTranslations() {
  console.log('Checking for missing translations...\n');
  
  // Load English translations as reference
  const enTranslations = JSON.parse(
    fs.readFileSync(path.join(LOCALES_PATH, 'en', 'common.json'), 'utf8')
  );
  
  const missingKeys = {};
  
  // Check each language
  LANGUAGES.forEach(lang => {
    if (lang === 'en') return; // Skip English as reference
    
    try {
      const langTranslations = JSON.parse(
        fs.readFileSync(path.join(LOCALES_PATH, lang, 'common.json'), 'utf8')
      );
      
      const missing = findMissingKeys(enTranslations, langTranslations);
      if (missing.length > 0) {
        missingKeys[lang] = missing;
      }
    } catch (error) {
      console.error(`Error reading ${lang} translations:`, error.message);
    }
  });
  
  // Report missing translations
  if (Object.keys(missingKeys).length > 0) {
    console.log('Missing translations found:');
    Object.entries(missingKeys).forEach(([lang, keys]) => {
      console.log(`\n${lang}:`);
      keys.forEach(key => console.log(`  - ${key}`));
    });
  } else {
    console.log('No missing translations found!');
  }
}

/**
 * Recursively find missing keys in translation objects
 */
function findMissingKeys(reference, target, prefix = '') {
  const missing = [];
  
  for (const key in reference) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (!(key in target)) {
      missing.push(fullKey);
    } else if (
      typeof reference[key] === 'object' && 
      reference[key] !== null && 
      !Array.isArray(reference[key])
    ) {
      if (typeof target[key] === 'object' && target[key] !== null) {
        missing.push(...findMissingKeys(reference[key], target[key], fullKey));
      } else {
        missing.push(fullKey);
      }
    }
  }
  
  return missing;
}

/**
 * Add a new translation key to all language files
 */
function addTranslationKey(keyPath, defaultValue = '') {
  console.log(`Adding translation key: ${keyPath}\n`);
  
  LANGUAGES.forEach(lang => {
    try {
      const filePath = path.join(LOCALES_PATH, lang, 'common.json');
      const translations = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      // Add the new key
      const keys = keyPath.split('.');
      let current = translations;
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) {
          current[keys[i]] = {};
        }
        current = current[keys[i]];
      }
      
      // Set default value for English, empty for others
      current[keys[keys.length - 1]] = lang === 'en' ? defaultValue : '';
      
      // Write back to file
      fs.writeFileSync(filePath, JSON.stringify(translations, null, 2));
      console.log(`✓ Added to ${lang}`);
    } catch (error) {
      console.error(`✗ Error updating ${lang}:`, error.message);
    }
  });
  
  console.log('\nNew translation key added to all language files.');
  console.log('Remember to update the non-English translations manually.');
}

/**
 * Validate JSON syntax of all translation files
 */
function validateTranslationFiles() {
  console.log('Validating translation files...\n');
  
  let hasErrors = false;
  
  LANGUAGES.forEach(lang => {
    try {
      const filePath = path.join(LOCALES_PATH, lang, 'common.json');
      const content = fs.readFileSync(filePath, 'utf8');
      JSON.parse(content);
      console.log(`✓ ${lang} - Valid JSON`);
    } catch (error) {
      console.error(`✗ ${lang} - Invalid JSON:`, error.message);
      hasErrors = true;
    }
  });
  
  console.log(`\n${hasErrors ? 'Some files have errors!' : 'All files are valid!'}`);
}

/**
 * Compare translation files to ensure consistency
 */
function compareTranslationFiles() {
  console.log('Comparing translation files...\n');
  
  // Load English translations as reference
  const enTranslations = JSON.parse(
    fs.readFileSync(path.join(LOCALES_PATH, 'en', 'common.json'), 'utf8')
  );
  
  const referenceKeys = getObjectKeys(enTranslations);
  
  LANGUAGES.forEach(lang => {
    if (lang === 'en') return; // Skip English as reference
    
    try {
      const langTranslations = JSON.parse(
        fs.readFileSync(path.join(LOCALES_PATH, lang, 'common.json'), 'utf8')
      );
      
      const langKeys = getObjectKeys(langTranslations);
      
      // Check for extra keys
      const extraKeys = langKeys.filter(key => !referenceKeys.includes(key));
      // Check for missing keys
      const missingKeys = referenceKeys.filter(key => !langKeys.includes(key));
      
      if (extraKeys.length > 0 || missingKeys.length > 0) {
        console.log(`${lang}:`);
        if (extraKeys.length > 0) {
          console.log(`  Extra keys: ${extraKeys.join(', ')}`);
        }
        if (missingKeys.length > 0) {
          console.log(`  Missing keys: ${missingKeys.join(', ')}`);
        }
      } else {
        console.log(`${lang}: Consistent ✓`);
      }
    } catch (error) {
      console.error(`Error comparing ${lang}:`, error.message);
    }
  });
}

/**
 * Get all keys from an object (including nested keys)
 */
function getObjectKeys(obj, prefix = '') {
  const keys = [];
  
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    keys.push(fullKey);
    
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys.push(...getObjectKeys(obj[key], fullKey));
    }
  }
  
  return keys;
}

// Command line interface
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'check':
    checkMissingTranslations();
    break;
  case 'add':
    if (args[1]) {
      addTranslationKey(args[1], args[2] || '');
    } else {
      console.log('Usage: node translation_helper.js add <key.path> [default_value]');
    }
    break;
  case 'validate':
    validateTranslationFiles();
    break;
  case 'compare':
    compareTranslationFiles();
    break;
  default:
    console.log('Translation Helper Script');
    console.log('Usage:');
    console.log('  node translation_helper.js check      - Check for missing translations');
    console.log('  node translation_helper.js add <key>  - Add a new translation key');
    console.log('  node translation_helper.js validate   - Validate JSON syntax');
    console.log('  node translation_helper.js compare    - Compare translation files');
    break;
}

console.log('\nFor more information, check the MULTILINGUAL_IMPLEMENTATION.md file.');