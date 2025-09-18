"use client";

import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function TestPage() {
  const { t, i18n } = useTranslation('common');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Multilingual Test Page</h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Current Language: {i18n.language}</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <button 
                onClick={() => changeLanguage('en')} 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                English
              </button>
              <button 
                onClick={() => changeLanguage('hi')} 
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Hindi
              </button>
              <button 
                onClick={() => changeLanguage('ta')} 
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Tamil
              </button>
              <button 
                onClick={() => changeLanguage('te')} 
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
              >
                Telugu
              </button>
              <button 
                onClick={() => changeLanguage('ml')} 
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
              >
                Malayalam
              </button>
              <button 
                onClick={() => changeLanguage('kn')} 
                className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors"
              >
                Kannada
              </button>
              <button 
                onClick={() => changeLanguage('bn')} 
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
              >
                Bengali
              </button>
              <button 
                onClick={() => changeLanguage('gu')} 
                className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors"
              >
                Gujarati
              </button>
              <button 
                onClick={() => changeLanguage('or')} 
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
              >
                Odia
              </button>
              <button 
                onClick={() => changeLanguage('pa')} 
                className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors"
              >
                Punjabi
              </button>
              <button 
                onClick={() => changeLanguage('mr')} 
                className="px-4 py-2 bg-lime-500 text-white rounded hover:bg-lime-600 transition-colors"
              >
                Marathi
              </button>
              <button 
                onClick={() => changeLanguage('ur')} 
                className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors"
              >
                Urdu
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Home Page Content</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Title:</strong> {t('home.title')}</p>
                <p className="text-gray-700 mb-2"><strong>Subtitle:</strong> {t('home.subtitle')}</p>
                <p className="text-gray-700 mb-2"><strong>Apply Now:</strong> {t('home.apply_now')}</p>
                <p className="text-gray-700"><strong>Login Dashboard:</strong> {t('home.login_dashboard')}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Navigation Items</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-1"><strong>Home:</strong> {t('navigation.home')}</p>
                <p className="text-gray-700 mb-1"><strong>All Loans:</strong> {t('navigation.all_loans')}</p>
                <p className="text-gray-700 mb-1"><strong>EMI Calculator:</strong> {t('navigation.emi_calculator')}</p>
                <p className="text-gray-700 mb-1"><strong>About:</strong> {t('navigation.about')}</p>
                <p className="text-gray-700"><strong>Contact:</strong> {t('navigation.contact')}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Loan Sectors</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-1"><strong>Personal Loans:</strong> {t('loan_sectors.personal.name')}</p>
                <p className="text-gray-700 mb-1"><strong>Home Loans:</strong> {t('loan_sectors.home.name')}</p>
                <p className="text-gray-700 mb-1"><strong>Vehicle Loans:</strong> {t('loan_sectors.vehicle.name')}</p>
                <p className="text-gray-700"><strong>Business Loans:</strong> {t('loan_sectors.business.name')}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Language Names</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-1"><strong>English:</strong> {t('languages.en')}</p>
                <p className="text-gray-700 mb-1"><strong>Hindi:</strong> {t('languages.hi')}</p>
                <p className="text-gray-700 mb-1"><strong>Tamil:</strong> {t('languages.ta')}</p>
                <p className="text-gray-700 mb-1"><strong>Telugu:</strong> {t('languages.te')}</p>
                <p className="text-gray-700 mb-1"><strong>Malayalam:</strong> {t('languages.ml')}</p>
                <p className="text-gray-700 mb-1"><strong>Kannada:</strong> {t('languages.kn')}</p>
                <p className="text-gray-700 mb-1"><strong>Bengali:</strong> {t('languages.bn')}</p>
                <p className="text-gray-700 mb-1"><strong>Gujarati:</strong> {t('languages.gu')}</p>
                <p className="text-gray-700 mb-1"><strong>Odia:</strong> {t('languages.or')}</p>
                <p className="text-gray-700 mb-1"><strong>Punjabi:</strong> {t('languages.pa')}</p>
                <p className="text-gray-700 mb-1"><strong>Marathi:</strong> {t('languages.mr')}</p>
                <p className="text-gray-700"><strong>Urdu:</strong> {t('languages.ur')}</p>
              </div>
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