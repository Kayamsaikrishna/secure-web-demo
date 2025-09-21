import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Read the English translation file as a template
const englishTranslations = JSON.parse(readFileSync('./public/locales/en/common.json', 'utf8'));

// List of all Indian language codes we want to support
const languages = [
  { code: 'te', name: 'Telugu' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'kn', name: 'Kannada' },
  { code: 'bn', name: 'Bengali' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'or', name: 'Odia' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'mr', name: 'Marathi' },
  { code: 'ur', name: 'Urdu' }
];

// Create translation files for each language
languages.forEach(lang => {
  const filePath = `./public/locales/${lang.code}/common.json`;
  
  // For now, we'll just copy the English translations
  // In a real implementation, these would be properly translated
  writeFileSync(filePath, JSON.stringify(englishTranslations, null, 2));
  
  console.log(`Created translation file for ${lang.name} (${lang.code})`);
});

console.log('All translation files created successfully!');