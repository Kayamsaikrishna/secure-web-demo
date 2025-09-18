"use client";

import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function MultilingualTest() {
  const { t, i18n } = useTranslation('common');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ta', name: 'Tamil' },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multilingual Support Test
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Test the multilingual capabilities of the Fin-Agentix India platform. 
              Select a language below to see the interface translated in real-time.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Current Language: <span className="text-blue-600">{i18n.language}</span>
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className={`px-4 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 ${
                    i18n.language === language.code
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  <div className="font-medium">{language.name}</div>
                  <div className="text-sm opacity-75">{language.code}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Home Page Content</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Title</p>
                  <p className="text-gray-800">{t('home.title')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Subtitle</p>
                  <p className="text-gray-800">{t('home.subtitle')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Apply Now Button</p>
                  <p className="text-gray-800">{t('home.apply_now')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Login Dashboard Button</p>
                  <p className="text-gray-800">{t('home.login_dashboard')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Navigation Items</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Home</p>
                  <p className="text-gray-800">{t('navigation.home')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">All Loans</p>
                  <p className="text-gray-800">{t('navigation.all_loans')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">EMI Calculator</p>
                  <p className="text-gray-800">{t('navigation.emi_calculator')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">About</p>
                  <p className="text-gray-800">{t('navigation.about')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contact</p>
                  <p className="text-gray-800">{t('navigation.contact')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Loan Sectors</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Personal Loans</p>
                  <p className="text-gray-800">{t('loan_sectors.personal.name')}</p>
                  <p className="text-sm text-gray-600">{t('loan_sectors.personal.description')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Home Loans</p>
                  <p className="text-gray-800">{t('loan_sectors.home.name')}</p>
                  <p className="text-sm text-gray-600">{t('loan_sectors.home.description')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Vehicle Loans</p>
                  <p className="text-gray-800">{t('loan_sectors.vehicle.name')}</p>
                  <p className="text-sm text-gray-600">{t('loan_sectors.vehicle.description')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Language Names</h3>
              <div className="space-y-2">
                {languages.map((language) => (
                  <div key={language.code} className="flex justify-between">
                    <span className="text-gray-600">{language.name}:</span>
                    <span className="text-gray-800 font-medium">{t(`languages.${language.code}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}