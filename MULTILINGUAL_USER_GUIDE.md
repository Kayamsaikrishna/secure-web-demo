# Multilingual Support User Guide

## Overview
The Fin-Agentix India platform now supports 12 Indian languages to ensure accessibility for users across the country. This guide explains how to use and manage the multilingual features.

## Supported Languages
1. English (en)
2. Hindi (hi)
3. Tamil (ta)
4. Telugu (te)
5. Malayalam (ml)
6. Kannada (kn)
7. Bengali (bn)
8. Gujarati (gu)
9. Odia (or)
10. Punjabi (pa)
11. Marathi (mr)
12. Urdu (ur)

## How to Use Multilingual Features

### Changing Language
1. Visit the Fin-Agentix India website
2. Look for the language selector in the top right corner of the navigation bar (🌐 icon)
3. Click on the selector to open the language dropdown
4. Choose your preferred language from the list
5. The entire interface will automatically translate to your selected language

### Language Persistence
- Your language preference is automatically saved in your browser
- The next time you visit the site, it will remember your preferred language
- You can change the language at any time using the selector

## Testing Multilingual Features

### Multilingual Test Page
We've created a dedicated test page to verify all languages are working correctly:
1. Visit `/multilingual-test` on your local development server
2. Use the language buttons to switch between all 12 supported languages
3. Verify that the interface translates correctly
4. Check that all key content areas are properly translated

### What to Look For
When testing, verify these key areas translate correctly:
- Navigation menu items
- Home page content
- Loan sector names and descriptions
- Button labels
- Language names in the selector

## For Developers

### Adding New Content
When adding new content to the application:
1. Add new translation keys to `public/locales/en/common.json`
2. Use the translation helper script to propagate keys to all languages:
   ```bash
   node translation_helper.js add new.section.key "Default English value"
   ```
3. Manually translate the new keys for non-English languages

### Using Translations in Components
To use translations in React components:
1. Import the translation hook:
   ```typescript
   import { useTranslation } from 'react-i18next';
   ```
2. Use the hook in your component:
   ```typescript
   const { t } = useTranslation('common');
   ```
3. Access translations in your JSX:
   ```jsx
   <h1>{t('home.title')}</h1>
   ```

### Client Components
Remember to add `"use client"` at the top of any file that uses React hooks like `useTranslation`.

## Maintenance

### Regular Tasks
1. **Validate translation files**: Run `node translation_helper.js validate` periodically
2. **Check for missing translations**: Run `node translation_helper.js check` after adding new content
3. **Compare translation files**: Run `node translation_helper.js compare` to ensure consistency

### Adding New Languages
To add support for additional languages:
1. Create a new directory in `public/locales/` with the language code
2. Create a `common.json` file with translated content
3. Add the language to the `languages` array in `LanguageSelector.tsx`
4. Update the i18n configuration in `src/lib/i18n.ts` to import the new translation file

## Troubleshooting

### Common Issues
1. **Text not translating**: Ensure you're using the `t()` function and the key exists in translation files
2. **Language selector not working**: Check that the I18nProvider is properly wrapping your application
3. **JSON syntax errors**: Use the validation script to check translation files

### Getting Help
If you encounter issues:
1. Check the browser console for error messages
2. Verify translation file syntax with the helper script
3. Ensure all translation keys are consistent across languages

## Future Enhancements
1. Automatic translation using cloud services (for development/testing)
2. Right-to-left layout support for Urdu
3. Font optimization for better rendering of regional languages
4. SEO improvements with hreflang tags