import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import { useTranslation } from 'react-i18next';

const features = [
  {
    name: "instant_approval",
    description: "ai_driven_instant_loan_approvals_with_real_time_processing",
    icon: CheckCircleIcon,
  },
  {
    name: "secure_transactions",
    description: "bank_grade_security_with_end_to_end_encryption",
    icon: ClockIcon,
  },
  {
    name: "competitive_rates",
    description: "lowest_interest_rates_in_the_market",
    icon: CurrencyRupeeIcon,
  },
];

const loanSectors = [
  {
    id: 'personal',
    name: 'loan_sectors.personal.name',
    description: 'loan_sectors.personal.description',
    amount: '₹2L - ₹15L',
    maxAmount: 1500000,
    rate: '12.5%',
    tenure: '12-60 months',
    maxTenure: 60,
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
    maxAmount: 50000000,
    rate: '8.5%',
    tenure: '5-25 years',
    maxTenure: 300,
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
    maxAmount: 5000000,
    rate: '9.5%',
    tenure: '1-7 years',
    maxTenure: 84,
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
    maxAmount: 10000000,
    rate: '14.0%',
    tenure: '1-5 years',
    maxTenure: 60,
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
    maxAmount: 7500000,
    rate: '10.5%',
    tenure: '5-15 years',
    maxTenure: 180,
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
    maxAmount: 2000000,
    rate: '7.0%',
    tenure: '6-36 months',
    maxTenure: 36,
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
    maxAmount: 2000000,
    rate: '12.0%',
    tenure: '6-36 months',
    maxTenure: 36,
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
    maxAmount: 2000000,
    rate: '3.5%/month',
    tenure: 'Revolving Credit',
    maxTenure: 60,
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
    maxAmount: 300000,
    rate: '13.5%',
    tenure: '1-3 years',
    maxTenure: 36,
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
    maxAmount: 1000000,
    rate: '14.5%',
    tenure: '6-48 months',
    maxTenure: 48,
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
    maxAmount: 500000,
    rate: '18.0%',
    tenure: '3-24 months',
    maxTenure: 24,
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
    maxAmount: 100000,
    rate: '16.0%',
    tenure: '6-36 months',
    maxTenure: 36,
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

export default function LoansPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {t("ai_powered_digital_lending_platform")}
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-blue-100 sm:max-w-3xl">
              {t("access_credit_in_minutes_with_our_ai_driven_platform")}
            </p>
          </div>
        </div>
      </div>

      {/* Marketplace Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">{t("consumption_marketplace")}</h2>
              <p className="mt-1 text-green-100">
                {t("get_financing_for_real_consumption_needs")}
              </p>
            </div>
            <Link
              href="/loans/marketplace"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-600 bg-white hover:bg-green-50 focus:outline-none"
            >
              {t("explore_offers")}
              <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Loan Sectors Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t("our_comprehensive_loan_sectors")}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t("tailored_financial_solutions_for_every_need")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loanSectors.map((sector) => (
            <Link
              key={sector.id}
              href={`/loans/${sector.id}`}
              className="block group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                <div className={`${sector.color} p-6 text-white`}>
                  <div className="text-4xl mb-4">{sector.icon}</div>
                  <h3 className="text-xl font-bold">{t(`loan_sectors.${sector.id}.name`)}</h3>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {sector.rate}% {t("interest_rate_from")}
                    </span>
                    <span className="text-sm text-gray-500">
                      {t("tenure_upto")} {sector.maxTenure} {t("months")}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {t(`loan_sectors.${sector.id}.description`)}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">
                      {t("loan_amount_upto")} ₹{(sector.maxAmount / 100000).toFixed(1)}L
                    </span>
                    <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
              {t("why_choose_fin_agentix")}
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t("innovative_features_for_your_financial_needs")}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {t("experience_the_future_of_digital_lending")}
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">{t(feature.name)}</h3>
                    <p className="mt-2 text-gray-600">
                      {t(feature.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">{t("ready_to_get_started")}</span>
            <span className="block text-blue-200">
              {t("apply_for_a_loan_today")}
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/loans/apply"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                {t("apply_now")}
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
              >
                {t("contact_sales")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}