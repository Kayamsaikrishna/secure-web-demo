"use client";

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '@/components/ui/LanguageSelector';

export default function TestTranslations() {
  const { t, i18n } = useTranslation('common');
  const [loading, setLoading] = useState(true);
  const [translationsLoaded, setTranslationsLoaded] = useState(false);

  useEffect(() => {
    // Check if translations are loaded
    const checkTranslations = () => {
      console.log('Checking translations...');
      console.log('i18n.language:', i18n.language);
      const baseLanguage = i18n.language?.split('-')[0] || 'en';
      console.log('Base language:', baseLanguage);
      console.log('Has resource bundle:', i18n.hasResourceBundle(baseLanguage, 'common'));
      
      if (i18n.hasResourceBundle(baseLanguage, 'common')) {
        setTranslationsLoaded(true);
        setLoading(false);
      } else {
        setTimeout(checkTranslations, 100);
      }
    };
    
    checkTranslations();
  }, [i18n]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading translations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Translation Test Page</h1>
          <LanguageSelector />
        </div>
        
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Current Language Info</h2>
          <p>Current language: {i18n.language}</p>
          <p>Language split: {i18n.language.split('-')[0]}</p>
          <p>Translations loaded: {translationsLoaded ? 'Yes' : 'No'}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">English Translations</h2>
            <ul className="space-y-2">
              <li><strong>Home:</strong> {t('navigation.home', { lng: 'en' })}</li>
              <li><strong>Dashboard:</strong> {t('navigation.dashboard', { lng: 'en' })}</li>
              <li><strong>Quick Links:</strong> {t('navigation.quick_links', { lng: 'en' })}</li>
            </ul>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">Current Language Translations</h2>
            <ul className="space-y-2">
              <li><strong>Home:</strong> {t('navigation.home')}</li>
              <li><strong>Dashboard:</strong> {t('navigation.dashboard')}</li>
              <li><strong>Quick Links:</strong> {t('navigation.quick_links')}</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">Change Language Test</h2>
          <div className="flex space-x-3">
            <button 
              onClick={() => i18n.changeLanguage('en')}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              English
            </button>
            <button 
              onClick={() => i18n.changeLanguage('hi')}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Hindi
            </button>
            <button 
              onClick={() => i18n.changeLanguage('ta')}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Tamil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}