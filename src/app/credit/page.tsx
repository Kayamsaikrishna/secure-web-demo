"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CreditCardIcon,
  BanknotesIcon,
  CalendarIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  ArrowPathIcon
} from "@heroicons/react/24/outline";

// Mock credit score data simulating real credit bureau responses
const mockCreditData = {
  userId: "USER001",
  lastUpdated: "2024-01-20T10:30:00Z",
  overallScore: 742,
  creditBureaus: {
    cibil: {
      score: 745,
      grade: "Good",
      lastUpdated: "2024-01-15",
      factors: {
        paymentHistory: { score: 85, weight: 35 },
        creditUtilization: { score: 78, weight: 30 },
        creditHistory: { score: 82, weight: 15 },
        creditMix: { score: 75, weight: 10 },
        newCredit: { score: 88, weight: 10 }
      }
    },
    experian: {
      score: 738,
      grade: "Good",
      lastUpdated: "2024-01-12",
      riskCategory: "Low-Medium"
    },
    equifax: {
      score: 741,
      grade: "Good", 
      lastUpdated: "2024-01-10",
      riskCategory: "Low"
    },
    crif: {
      score: 744,
      grade: "Good",
      lastUpdated: "2024-01-08",
      riskCategory: "Low"
    }
  },
  creditAccounts: {
    total: 8,
    active: 6,
    closed: 2,
    types: {
      creditCards: 3,
      personalLoans: 1,
      homeLoans: 1,
      vehicleLoans: 1,
      others: 2
    }
  },
  creditUtilization: {
    current: 32,
    recommended: 30,
    totalLimit: 450000,
    totalUsed: 144000
  },
  paymentHistory: {
    onTimePayments: 94,
    missedPayments: 2,
    totalPayments: 36,
    lastMissedPayment: "2023-11-15"
  },
  creditInquiries: {
    soft: 5,
    hard: 2,
    lastHardInquiry: "2023-12-20"
  },
  recommendations: [
    {
      type: "improvement",
      title: "Reduce Credit Utilization",
      description: "Your current utilization is 32%. Reduce it to below 30% to improve your score.",
      impact: "+15 points",
      priority: "high"
    },
    {
      type: "maintain",
      title: "Continue Timely Payments",
      description: "You have an excellent payment history. Keep making payments on time.",
      impact: "Maintain current score",
      priority: "medium"
    },
    {
      type: "warning",
      title: "Avoid New Credit Applications",
      description: "Limit hard inquiries for the next 6 months to avoid score dips.",
      impact: "Prevent -5 to -10 points",
      priority: "medium"
    }
  ],
  riskFactors: [
    {
      factor: "High Credit Utilization",
      severity: "medium",
      description: "32% utilization is slightly above recommended 30%"
    },
    {
      factor: "Recent Credit Inquiry",
      severity: "low",
      description: "Had a hard inquiry 1 month ago"
    }
  ],
  positiveFactors: [
    "94% on-time payment history",
    "6+ years of credit history",
    "Good mix of credit types",
    "No recent defaults or settlements"
  ],
  nextUpdate: "2024-02-20",
  eligibility: {
    personalLoan: { eligible: true, maxAmount: 1500000, rate: 12.5 },
    homeLoan: { eligible: true, maxAmount: 5000000, rate: 8.5 },
    creditCard: { eligible: true, maxLimit: 200000, rate: 42.0 },
    vehicleLoan: { eligible: true, maxAmount: 2000000, rate: 9.5 }
  }
};

const scoreRanges = {
  excellent: { min: 800, max: 900, color: "text-green-600", bg: "bg-green-100" },
  veryGood: { min: 740, max: 799, color: "text-blue-600", bg: "bg-blue-100" },
  good: { min: 670, max: 739, color: "text-yellow-600", bg: "bg-yellow-100" },
  fair: { min: 580, max: 669, color: "text-orange-600", bg: "bg-orange-100" },
  poor: { min: 300, max: 579, color: "text-red-600", bg: "bg-red-100" }
};

const getScoreCategory = (score: number) => {
  if (score >= 800) return { category: "excellent", label: "Excellent", ...scoreRanges.excellent };
  if (score >= 740) return { category: "veryGood", label: "Very Good", ...scoreRanges.veryGood };
  if (score >= 670) return { category: "good", label: "Good", ...scoreRanges.good };
  if (score >= 580) return { category: "fair", label: "Fair", ...scoreRanges.fair };
  return { category: "poor", label: "Poor", ...scoreRanges.poor };
};

export default function CreditScorePage() {
  const [creditData, setCreditData] = useState(mockCreditData);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedBureau, setSelectedBureau] = useState("cibil");

  const refreshCreditScore = async () => {
    setRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRefreshing(false);
  };

  const scoreCategory = getScoreCategory(creditData.overallScore);
  const selectedBureauData = creditData.creditBureaus[selectedBureau as keyof typeof creditData.creditBureaus];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                <ChartBarIcon className="h-8 w-8 mr-3" />
                AI Credit Score Analysis
              </h1>
              <p className="text-blue-100 mt-1">Comprehensive credit assessment powered by AI and multiple bureau data</p>
            </div>
            <button
              onClick={refreshCreditScore}
              disabled={refreshing}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg flex items-center transition-colors duration-200"
            >
              <ArrowPathIcon className={`h-5 w-5 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              {refreshing ? 'Updating...' : 'Refresh Score'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overall Score Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(creditData.overallScore / 900) * 314} 314`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${scoreCategory.color}`}>{creditData.overallScore}</div>
                    <div className="text-xs text-gray-500">out of 900</div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Credit Score</h2>
            <p className={`text-lg font-semibold ${scoreCategory.color}`}>{scoreCategory.label}</p>
            <p className="text-sm text-gray-600 mt-2">
              Last updated: {new Date(creditData.lastUpdated).toLocaleDateString()}
            </p>
          </div>

          {/* Score Range Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {Object.entries(scoreRanges).map(([key, range]) => {
              const isCurrentRange = creditData.overallScore >= range.min && creditData.overallScore <= range.max;
              return (
                <div key={key} className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  isCurrentRange ? `${range.bg} border-current ${range.color}` : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="text-center">
                    <div className={`text-sm font-semibold ${isCurrentRange ? range.color : 'text-gray-600'}`}>
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </div>
                    <div className={`text-xs ${isCurrentRange ? range.color : 'text-gray-500'}`}>
                      {range.min} - {range.max}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Credit Bureau Scores */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bureau Comparison */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Credit Bureau Scores</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {Object.entries(creditData.creditBureaus).map(([bureau, data]) => (
                  <button
                    key={bureau}
                    onClick={() => setSelectedBureau(bureau)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedBureau === bureau 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{data.score}</div>
                      <div className="text-xs text-gray-600 uppercase">{bureau}</div>
                      <div className={`text-xs px-2 py-1 rounded mt-1 ${getScoreCategory(data.score).bg} ${getScoreCategory(data.score).color}`}>
                        {data.grade}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Selected Bureau Details */}
              {selectedBureauData.factors && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Score Factors - {selectedBureau.toUpperCase()}</h4>
                  {Object.entries(selectedBureauData.factors).map(([factor, data]) => (
                    <div key={factor} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="capitalize text-gray-700">
                          {factor.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="font-medium">{data.score}% (Weight: {data.weight}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${data.score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Loan Eligibility */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Loan Eligibility</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(creditData.eligibility).map(([loanType, details]) => (
                  <div key={loanType} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 capitalize">
                        {loanType.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      {details.eligible ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      ) : (
                        <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    {details.eligible ? (
                      <div className="space-y-1 text-sm text-gray-600">
                        <div>Max Amount: ₹{(details.maxAmount/100000).toFixed(1)}L</div>
                        <div>Interest Rate: {details.rate}% p.a.</div>
                      </div>
                    ) : (
                      <p className="text-sm text-red-600">Not eligible at current score</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Recommendations & Insights */}
          <div className="space-y-6">
            {/* Recommendations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <ArrowTrendingUpIcon className="h-5 w-5 mr-2" />
                Recommendations
              </h3>
              
              <div className="space-y-4">
                {creditData.recommendations.map((rec, index) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${
                    rec.priority === 'high' ? 'border-red-500 bg-red-50' :
                    rec.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                    'border-green-500 bg-green-50'
                  }`}>
                    <h4 className="font-semibold text-gray-900 mb-1">{rec.title}</h4>
                    <p className="text-sm text-gray-700 mb-2">{rec.description}</p>
                    <div className="text-xs font-medium text-blue-600">{rec.impact}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                href="/loans/apply"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 text-center font-semibold block"
              >
                Apply for Loan
              </Link>
              
              <Link
                href="/credit/report"
                className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 text-center font-semibold block"
              >
                Download Full Report
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}