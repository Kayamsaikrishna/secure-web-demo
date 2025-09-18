import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const loanSectors = [
  {
    id: 'personal',
    name: 'loan_sectors.personal.name',
    description: 'loan_sectors.personal.description',
    amount: '₹2L - ₹15L',
    rate: '12.5%',
    tenure: '12-60 months',
    icon: '👤',
    features: [
      'loan_sectors.personal.features.0',
      'loan_sectors.personal.features.1', 
      'loan_sectors.personal.features.2'
    ],
    eligibility: ['Age: 21-60 years', 'Min Income: ₹25,000/month', 'CIBIL Score: 650+', 'Salaried/Self-employed'],
    documents: ['Aadhaar Card', 'PAN Card', 'Salary Slips/ITR', 'Bank Statements'],
    processingTime: '24-48 hours',
    color: 'bg-blue-500'
  },
  {
    id: 'home',
    name: 'loan_sectors.home.name',
    description: 'loan_sectors.home.description',
    amount: '₹5L - ₹5Cr',
    rate: '8.5%',
    tenure: '5-25 years',
    icon: '🏠',
    features: [
      'loan_sectors.home.features.0',
      'loan_sectors.home.features.1',
      'loan_sectors.home.features.2'
    ],
    eligibility: ['Age: 23-65 years', 'Min Income: ₹40,000/month', 'CIBIL Score: 650+', 'Property Documents'],
    documents: ['Property Papers', 'NOC from Builder', 'Approved Plan', 'Sale Agreement'],
    processingTime: '7-15 days',
    color: 'bg-green-500'
  },
  {
    id: 'vehicle',
    name: 'loan_sectors.vehicle.name',
    description: 'loan_sectors.vehicle.description',
    amount: '₹2L - ₹50L',
    rate: '9.5%',
    tenure: '1-7 years',
    icon: '🚗',
    features: [
      'loan_sectors.vehicle.features.0',
      'loan_sectors.vehicle.features.1',
      'loan_sectors.vehicle.features.2'
    ],
    eligibility: ['Age: 21-65 years', 'Min Income: ₹30,000/month', 'CIBIL Score: 600+', 'Valid Driving License'],
    documents: ['RC Book', 'Insurance', 'Invoice', 'Driving License'],
    processingTime: '2-5 days',
    color: 'bg-purple-500'
  },
  {
    id: 'business',
    name: 'loan_sectors.business.name',
    description: 'loan_sectors.business.description',
    amount: '₹1L - ₹1Cr',
    rate: '14.0%',
    tenure: '1-5 years',
    icon: '💼',
    features: [
      'loan_sectors.business.features.0',
      'loan_sectors.business.features.1',
      'loan_sectors.business.features.2'
    ],
    eligibility: ['Business Age: 3+ years', 'Annual Turnover: ₹10L+', 'GST Registration', 'Good Credit History'],
    documents: ['GST Returns', 'ITR', 'Bank Statements', 'Business Registration'],
    processingTime: '5-10 days',
    color: 'bg-indigo-500'
  },
  {
    id: 'education',
    name: 'loan_sectors.education.name',
    description: 'loan_sectors.education.description',
    amount: '₹1L - ₹75L',
    rate: '10.5%',
    tenure: '5-15 years',
    icon: '🎓',
    features: [
      'loan_sectors.education.features.0',
      'loan_sectors.education.features.1',
      'loan_sectors.education.features.2'
    ],
    eligibility: ['Admission Confirmed', 'Co-applicant Required', 'Academic Performance', 'Course Recognition'],
    documents: ['Admission Letter', 'Fee Structure', 'Academic Records', 'Co-applicant Documents'],
    processingTime: '7-14 days',
    color: 'bg-yellow-500'
  },
  {
    id: 'agriculture',
    name: 'loan_sectors.agriculture.name',
    description: 'loan_sectors.agriculture.description',
    amount: '₹50K - ₹20L',
    rate: '7.0%',
    tenure: '6-36 months',
    icon: '🌾',
    features: [
      'loan_sectors.agriculture.features.0',
      'loan_sectors.agriculture.features.1',
      'loan_sectors.agriculture.features.2'
    ],
    eligibility: ['Land Ownership', 'Farming Experience', 'Crop Details', 'Village Revenue Records'],
    documents: ['Land Records', 'Revenue Documents', 'Crop Plan', 'Identity Proof'],
    processingTime: '10-15 days',
    color: 'bg-green-600'
  },
  {
    id: 'gold',
    name: 'loan_sectors.gold.name',
    description: 'loan_sectors.gold.description',
    amount: '₹10K - ₹20L',
    rate: '12.0%',
    tenure: '6-36 months',
    icon: '🥇',
    features: [
      'loan_sectors.gold.features.0',
      'loan_sectors.gold.features.1',
      'loan_sectors.gold.features.2'
    ],
    eligibility: ['18+ years', 'Gold Purity 18K+', 'Valid Identity', 'Gold Ownership Proof'],
    documents: ['Gold Jewelry', 'Purchase Receipt', 'Identity Proof', 'Address Proof'],
    processingTime: '30 minutes',
    color: 'bg-yellow-600'
  },
  {
    id: 'credit-card',
    name: 'loan_sectors.credit-card.name',
    description: 'loan_sectors.credit-card.description',
    amount: '₹50K - ₹20L',
    rate: '3.5%/month',
    tenure: 'Revolving Credit',
    icon: '💳',
    features: [
      'loan_sectors.credit-card.features.0',
      'loan_sectors.credit-card.features.1',
      'loan_sectors.credit-card.features.2'
    ],
    eligibility: ['Age: 21-60 years', 'Min Income: ₹50,000/month', 'CIBIL Score: 750+', 'Stable Employment'],
    documents: ['Income Proof', 'Identity Documents', 'Address Proof', 'Bank Statements'],
    processingTime: '7-10 days',
    color: 'bg-pink-500'
  },
  {
    id: 'two-wheeler',
    name: 'loan_sectors.two-wheeler.name',
    description: 'loan_sectors.two-wheeler.description',
    amount: '₹30K - ₹3L',
    rate: '13.5%',
    tenure: '1-3 years',
    icon: '🏍️',
    features: [
      'loan_sectors.two-wheeler.features.0',
      'loan_sectors.two-wheeler.features.1',
      'loan_sectors.two-wheeler.features.2'
    ],
    eligibility: ['Age: 18-65 years', 'Min Income: ₹15,000/month', 'CIBIL Score: 550+', 'Valid License'],
    documents: ['Vehicle Invoice', 'Identity Proof', 'Income Proof', 'Driving License'],
    processingTime: 'Same day',
    color: 'bg-red-500'
  },
  {
    id: 'healthcare',
    name: 'loan_sectors.healthcare.name',
    description: 'loan_sectors.healthcare.description',
    amount: '₹25K - ₹10L',
    rate: '14.5%',
    tenure: '6-48 months',
    icon: '🏥',
    features: [
      'loan_sectors.healthcare.features.0',
      'loan_sectors.healthcare.features.1',
      'loan_sectors.healthcare.features.2'
    ],
    eligibility: ['Medical Emergency', 'Hospital Empanelment', 'Treatment Estimate', 'Guarantor Support'],
    documents: ['Medical Reports', 'Treatment Estimate', 'Doctor Prescription', 'Hospital Bills'],
    processingTime: '4-6 hours',
    color: 'bg-teal-500'
  },
  {
    id: 'digital',
    name: 'loan_sectors.digital.name',
    description: 'loan_sectors.digital.description',
    amount: '₹5K - ₹5L',
    rate: '18.0%',
    tenure: '3-24 months',
    icon: '📱',
    features: [
      'loan_sectors.digital.features.0',
      'loan_sectors.digital.features.1',
      'loan_sectors.digital.features.2'
    ],
    eligibility: ['Age: 21-60 years', 'Digital Footprint', 'UPI Transaction History', 'Mobile Banking'],
    documents: ['Digital KYC', 'Bank Statements', 'UPI History', 'Digital Signatures'],
    processingTime: '15 minutes',
    color: 'bg-cyan-500'
  },
  {
    id: 'microfinance',
    name: 'loan_sectors.microfinance.name',
    description: 'loan_sectors.microfinance.description',
    amount: '₹15K - ₹1L',
    rate: '16.0%',
    tenure: '6-36 months',
    icon: '🏪',
    features: [
      'loan_sectors.microfinance.features.0',
      'loan_sectors.microfinance.features.1',
      'loan_sectors.microfinance.features.2'
    ],
    eligibility: ['Women Entrepreneurs', 'Self Help Groups', 'Income Generation Plan', 'Group Guarantee'],
    documents: ['SHG Documents', 'Income Plan', 'Group Consent', 'Identity Proof'],
    processingTime: '3-7 days',
    color: 'bg-orange-500'
  }
];

export default function LoansPage({ t }: { t: any }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('home.loan_sectors')}
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              12 Specialized Loan Sectors for Every Financial Need
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              {t('home.loan_sectors_desc')}
            </p>
          </div>
        </div>
      </div>

      {/* Loans Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {loanSectors.map((loan) => (
            <div key={loan.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Header */}
              <div className={`${loan.color} text-white p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{loan.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{loan.rate}*</div>
                    <div className="text-sm opacity-90">Starting Rate</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{t(loan.name)}</h3>
                <p className="text-sm opacity-90">{t(loan.description)}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Loan Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <CurrencyRupeeIcon className="h-6 w-6 mx-auto mb-1 text-gray-600" />
                    <div className="text-sm text-gray-600">Amount</div>
                    <div className="font-semibold">{loan.amount}</div>
                  </div>
                  <div className="text-center">
                    <ClockIcon className="h-6 w-6 mx-auto mb-1 text-gray-600" />
                    <div className="text-sm text-gray-600">Tenure</div>
                    <div className="font-semibold">{loan.tenure}</div>
                  </div>
                </div>

                {/* Processing Time */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-green-800">
                      Processing Time: {loan.processingTime}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {loan.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {t(feature)}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link
                    href={`/loans/apply?type=${loan.id}`}
                    className={`w-full ${loan.color} text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200 text-center block font-semibold flex items-center justify-center`}
                  >
                    Apply Now
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href={`/loans/${loan.id}`}
                    className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center block font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.why_choose')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.why_choose_desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('features.hour_processing.title')}</h3>
              <p className="text-gray-600">{t('features.hour_processing.description')}</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('features.competitive_rates.title')}</h3>
              <p className="text-gray-600">{t('features.competitive_rates.description')}</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('features.fraud_prevention.title')}</h3>
              <p className="text-gray-600">{t('features.fraud_prevention.description')}</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('features.multi_language.title')}</h3>
              <p className="text-gray-600">{t('features.multi_language.description')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.ready_to_start')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('home.ready_to_start_desc')}
          </p>
          <Link
            href="/register"
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 inline-flex items-center"
          >
            {t('home.start_application')}
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}