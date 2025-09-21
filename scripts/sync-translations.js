#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get the base English translation file
const enTranslationPath = path.join(__dirname, '../public/locales/en/common.json');
const enTranslations = JSON.parse(fs.readFileSync(enTranslationPath, 'utf8'));

// Get all language directories
const localesDir = path.join(__dirname, '../public/locales');
const languageDirs = fs.readdirSync(localesDir).filter(dir => 
  fs.statSync(path.join(localesDir, dir)).isDirectory() && dir !== 'en'
);

console.log('Syncing translation files...');

// For each language directory
languageDirs.forEach(langDir => {
  const langTranslationPath = path.join(localesDir, langDir, 'common.json');
  
  // Check if translation file exists
  if (fs.existsSync(langTranslationPath)) {
    try {
      const langTranslations = JSON.parse(fs.readFileSync(langTranslationPath, 'utf8'));
      
      // Merge English structure with existing translations
      const mergedTranslations = mergeTranslations(enTranslations, langTranslations);
      
      // Write back the merged translations
      fs.writeFileSync(langTranslationPath, JSON.stringify(mergedTranslations, null, 2) + '\n');
      console.log(`✓ Synced ${langDir}/common.json`);
    } catch (error) {
      console.error(`✗ Error syncing ${langDir}/common.json:`, error.message);
    }
  } else {
    // Create new translation file with English structure
    fs.writeFileSync(langTranslationPath, JSON.stringify(enTranslations, null, 2) + '\n');
    console.log(`✓ Created ${langDir}/common.json`);
  }
});

console.log('Translation sync complete!');

/**
 * Recursively merge English structure with existing translations
 * Preserves existing translations while adding missing keys
 */
function mergeTranslations(enObj, langObj) {
  const result = {};
  
  // Copy all keys from English object
  for (const key in enObj) {
    if (typeof enObj[key] === 'object' && enObj[key] !== null && !Array.isArray(enObj[key])) {
      // Recursive merge for nested objects
      result[key] = mergeTranslations(enObj[key], langObj[key] || {});
    } else {
      // Use existing translation if available, otherwise use English
      result[key] = langObj[key] !== undefined ? langObj[key] : enObj[key];
    }
  }
  
  return result;
}