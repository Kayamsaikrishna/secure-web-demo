"use client";

import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';
import { useEffect } from 'react';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  // Initialize i18n
  useEffect(() => {
    // Check for saved language preference in localStorage
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('selectedLanguage') : null;
    if (savedLanguage && i18n.hasResourceBundle(savedLanguage, 'common')) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}