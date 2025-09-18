"use client";

import { ArrowRightIcon, CheckCircleIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import i18n from '@/lib/i18n';

const loanSectors = [
  {
    id: 'personal',
    name: 'Personal Loans',
    description: 'Quick personal loans with minimal documentation',
    amount: '₹2L - ₹15L',
    rate: '12.5%',
    tenure: '12-60 months',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face',
    features: ['No Collateral', 'Quick Approval', 'Flexible Tenure']
  },
  {
    id: 'home',
    name: 'Home Loans',
    description: 'Home loan for purchasing residential property',
    amount: '₹5L - ₹5Cr',
    rate: '8.5%',
    tenure: '5-25 years',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
    features: ['Tax Benefits', 'Long Tenure', 'RERA Verified']
  },
  {
    id: 'vehicle',
    name: 'Vehicle Loans',
    description: 'Car and two-wheeler loans with competitive rates',
    amount: '₹2L - ₹50L',
    rate: '9.5%',
    tenure: '1-7 years',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop',
    features: ['Instant Approval', 'Zero Down Payment', 'Insurance']
  },
  {
    id: 'business',
    name: 'Business Loans',
    description: 'Working capital and expansion loans for MSMEs',
    amount: '₹1L - ₹1Cr',
    rate: '14.0%',
    tenure: '1-5 years',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop&crop=face',
    features: ['GST Based', 'Quick Disbursal', 'Flexible Repayment']
  },
  {
    id: 'education',
    name: 'Education Loans',
    description: 'Education loan for higher studies in India and abroad',
    amount: '₹1L - ₹75L',
    rate: '10.5%',
    tenure: '5-15 years',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    features: ['Moratorium Period', 'Full Coverage', 'Tax Benefits']
  },
  {
    id: 'agriculture',
    name: 'Agriculture Loans',
    description: 'Comprehensive agricultural loans for farmers',
    amount: '₹50K - ₹20L',
    rate: '7.0%',
    tenure: '6-36 months',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
    features: ['Weather Insurance', 'Flexible Repayment', 'Subsidy']
  },
  {
    id: 'gold',
    name: 'Gold Loans',
    description: 'Instant loan against gold jewelry',
    amount: '₹10K - ₹20L',
    rate: '12.0%',
    tenure: '6-36 months',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=300&fit=crop',
    features: ['Instant Approval', 'Safe Storage', 'Flexible']
  },
  {
    id: 'credit-card',
    name: 'Credit Cards',
    description: 'Premium credit cards with exclusive rewards',
    amount: '₹50K - ₹20L',
    rate: '42.0%',
    tenure: 'Revolving',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    features: ['Reward Points', 'Lounge Access', 'Cashback']
  },
  {
    id: 'two-wheeler',
    name: 'Two Wheeler',
    description: 'Quick loan for two-wheeler purchase',
    amount: '₹30K - ₹3L',
    rate: '13.5%',
    tenure: '1-3 years',
    image: 'https://images.unsplash.com/photo-1449824913935-59a1b58e7e9c?w=400&h=300&fit=crop',
    features: ['Minimal Docs', 'Same Day', 'Insurance']
  },
  {
    id: 'healthcare',
    name: 'Healthcare Loans',
    description: 'Emergency loan for medical expenses',
    amount: '₹25K - ₹10L',
    rate: '14.5%',
    tenure: '6-48 months',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    features: ['Hospital Network', 'Quick Approval', 'EMI Moratorium']
  },
  {
    id: 'digital',
    name: 'Digital Loans',
    description: 'Completely digital loan with instant approval',
    amount: '₹5K - ₹5L',
    rate: '18.0%',
    tenure: '3-24 months',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    features: ['100% Digital', 'Instant Disbursal', 'Flexible']
  },
  {
    id: 'microfinance',
    name: 'Microfinance',
    description: 'Small business start-ups and income generation',
    amount: '₹15K - ₹1L',
    rate: '16.0%',
    tenure: '6-36 months',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop',
    features: ['Group Lending', 'Financial Literacy', 'Easy Access']
  }
];

const keyFeatures = [
  {
    title: 'AI-Powered Credit Scoring',
    description: 'Advanced algorithms analyze 500+ data points for instant credit decisions',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'
  },
  {
    title: '24-Hour Processing',
    description: 'From application to disbursal in just 24 hours for most loan types',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
  },
  {
    title: 'Government Integration',
    description: 'Direct integration with Aadhaar, PAN, GST for seamless verification',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop'
  },
  {
    title: 'Multi-Language Support',
    description: 'Available in Hindi and 6 regional languages for rural accessibility',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=400&h=300&fit=crop'
  },
  {
    title: 'Competitive Rates',
    description: 'Best-in-market interest rates across all 12 loan sectors',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop'
  },
  {
    title: 'Fraud Prevention',
    description: 'Bank-grade security with real-time fraud detection systems',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop'
  }
];

const stats = [
  { label: 'Loans Disbursed', value: '₹2,850 Cr', image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=300&h=200&fit=crop' },
  { label: 'Happy Customers', value: '5.8L+', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=face' },
  { label: 'Approval Rate', value: '68%', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop' },
  { label: 'Cities Covered', value: '250+', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=300&h=200&fit=crop' }
];

export default function Home() {
  const { t } = useTranslation('common');

  // Initialize i18n if not already done
  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('selectedLanguage') : null;
    if (savedLanguage && i18n.hasResourceBundle(savedLanguage, 'common')) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop"
            alt="Professional Financial Services Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <Logo size="lg" className="mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-yellow-300">Fin-Agentix</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              {t('home.title')}
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-80">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center"
              >
                {t('home.apply_now')}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/login"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                {t('home.login_dashboard')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={stat.image}
                    alt={stat.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{t(`stats.${stat.label.toLowerCase().replace(' ', '_')}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Sectors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.loan_sectors')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.loan_sectors_desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {loanSectors.map((sector) => (
              <div key={sector.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={sector.image}
                    alt={sector.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{t(`loan_sectors.${sector.id}.name`)}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">{t(`loan_sectors.${sector.id}.description`)}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Amount:</span>
                      <span className="font-medium">{sector.amount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Rate:</span>
                      <span className="font-medium text-green-600">{sector.rate}*</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Tenure:</span>
                      <span className="font-medium">{sector.tenure}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1 mb-4">
                    {sector.features.map((feature, index) => (
                      <div key={feature} className="flex items-center text-xs text-gray-600">
                        <CheckCircleIcon className="h-3 w-3 text-green-500 mr-1" />
                        {t(`loan_sectors.${sector.id}.features.${index}`)}
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={`/loans/apply?type=${sector.id}`}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center block font-medium"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.why_choose')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.why_choose_desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t(`features.${feature.title.toLowerCase().replace(/ /g, '_').replace(/-/g, '_')}.title`)}</h3>
                <p className="text-gray-600">{t(`features.${feature.title.toLowerCase().replace(/ /g, '_').replace(/-/g, '_')}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.ready_to_start')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('home.ready_to_start_desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center"
            >
              {t('home.start_application')}
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/loans"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              {t('home.explore_loans')}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Logo size="md" className="mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400">Fin-Agentix</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                AI-powered digital lending platform revolutionizing financial services in India. 
                Connecting borrowers with the right lenders across 12 comprehensive loan sectors.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center text-sm text-gray-400">
                  <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                  4.6/5 Customer Rating
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/loans" className="hover:text-white">All Loans</Link></li>
                <li><Link href="/register" className="hover:text-white">Apply Now</Link></li>
                <li><Link href="/login" className="hover:text-white">Login</Link></li>
                <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>📧 support@fin-agentix.com</li>
                <li>📞 1800-FIN-AGENTIX</li>
                <li>🕒 24/7 Customer Support</li>
                <li>💬 Live Chat Available</li>
                <li>🏢 Head Office: Bangalore</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Fin-Agentix. All rights reserved. | RBI Compliant | ISO 27001 Certified</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
