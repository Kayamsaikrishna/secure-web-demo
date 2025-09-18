"use client";

import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function LanguageTest() {
  const { t, i18n } = useTranslation('common');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Language Test</h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Current Language: <span className="text-blue-600">{i18n.language}</span>
            </h2>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {['en', 'hi', 'ta', 'te', 'ml', 'kn', 'bn', 'gu', 'or', 'pa', 'mr', 'ur'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    i18n.language === lang
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Home Page Content</h3>
              <p className="text-gray-700"><strong>Title:</strong> {t('home.title')}</p>
              <p className="text-gray-700"><strong>Subtitle:</strong> {t('home.subtitle')}</p>
              <p className="text-gray-700"><strong>Apply Now:</strong> {t('home.apply_now')}</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Navigation</h3>
              <p className="text-gray-700"><strong>Home:</strong> {t('navigation.home')}</p>
              <p className="text-gray-700"><strong>All Loans:</strong> {t('navigation.all_loans')}</p>
              <p className="text-gray-700"><strong>Contact:</strong> {t('navigation.contact')}</p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Loan Sectors</h3>
              <p className="text-gray-700"><strong>Personal:</strong> {t('loan_sectors.personal.name')}</p>
              <p className="text-gray-700"><strong>Home:</strong> {t('loan_sectors.home.name')}</p>
              <p className="text-gray-700"><strong>Business:</strong> {t('loan_sectors.business.name')}</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Language Names</h3>
              <p className="text-gray-700"><strong>English:</strong> {t('languages.en')}</p>
              <p className="text-gray-700"><strong>Hindi:</strong> {t('languages.hi')}</p>
              <p className="text-gray-700"><strong>Tamil:</strong> {t('languages.ta')}</p>
            </div>
          </div>

          <div className="mt-8">
            <Link 
              href="/" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}