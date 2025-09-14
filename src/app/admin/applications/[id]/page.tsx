"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeftIcon,
  UserIcon,
  DocumentTextIcon,
  CurrencyRupeeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  EyeIcon
} from "@heroicons/react/24/outline";

// Mock detailed application data
const mockApplicationDetails = {
  id: "LA2024001",
  applicantName: "Rajesh Kumar Singh",
  loanType: "Personal Loan",
  amount: 500000,
  purpose: "Home renovation",
  status: "UNDER_REVIEW",
  appliedDate: "2024-01-20T10:30:00Z",
  
  // Personal Information
  personalInfo: {
    age: 32,
    gender: "Male",
    maritalStatus: "Married",
    dependents: 2,
    email: "rajesh.kumar@email.com",
    phone: "+91 98765 43210",
    address: "B-204, Shanti Apartments, Andheri West, Mumbai - 400058",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400058"
  },

  // Financial Information
  financialInfo: {
    monthlyIncome: 85000,
    employmentType: "Salaried",
    company: "Tech Solutions Pvt Ltd",
    workExperience: 8,
    currentJobTenure: 4,
    existingEMIs: 12500,
    monthlyExpenses: 45200,
    bankBalance: 125000,
    savings: 32
  },

  // Credit Assessment
  creditAssessment: {
    cibilScore: 742,
    creditHistory: 8,
    recentInquiries: 2,
    currentEMIs: 12500,
    maxEMICapacity: 25500,
    proposedEMI: 12850,
    riskScore: 72,
    riskCategory: "MEDIUM",
    debtToIncomeRatio: 15
  },

  // Documents
  documents: [
    { type: "Aadhaar Card", status: "VERIFIED", uploadDate: "2024-01-20T10:30:00Z" },
    { type: "PAN Card", status: "VERIFIED", uploadDate: "2024-01-20T10:32:00Z" },
    { type: "Salary Slips (3 months)", status: "VERIFIED", uploadDate: "2024-01-20T10:35:00Z" },
    { type: "Bank Statements (6 months)", status: "VERIFIED", uploadDate: "2024-01-20T10:40:00Z" },
    { type: "Employment Letter", status: "PENDING", uploadDate: "2024-01-20T10:45:00Z" }
  ],

  // AI Analysis
  aiAnalysis: {
    overallRecommendation: "CONDITIONAL_APPROVE",
    confidence: 78,
    positiveFactors: [
      "Stable employment with 4 years at current company",
      "Good CIBIL score of 742",
      "Regular salary credits verified",
      "Healthy savings rate of 32%",
      "No recent payment defaults"
    ],
    riskFactors: [
      "Existing EMI burden of ₹12,500",
      "Recent credit inquiries (2 in last 6 months)",
      "High loan amount relative to income",
      "Location in high-cost city (Mumbai)"
    ],
    recommendedAmount: 450000,
    recommendedRate: 13.5,
    recommendedTenure: 48
  }
};

export default function ApplicationDetailPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const params = useParams();
  const [application, setApplication] = useState(mockApplicationDetails);
  const [decision, setDecision] = useState({
    action: "",
    approvedAmount: application.amount,
    interestRate: 12.5,
    tenure: 48,
    conditions: "",
    comments: ""
  });
  const [showDecisionPanel, setShowDecisionPanel] = useState(false);

  useEffect(() => {
    if ((session?.user as any)?.role !== "ADMIN") {
      router.push("/admin/applications");
    }
  }, [session, router]);

  if ((session?.user as any)?.role !== "ADMIN") {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900">Access Denied</h1>
        <p className="text-gray-600">You don't have permission to access this page.</p>
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} L`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  const calculateEMI = (principal: number, rate: number, tenure: number) => {
    const monthlyRate = rate / (12 * 100);
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / 
                (Math.pow(1 + monthlyRate, tenure) - 1);
    return Math.round(emi);
  };

  const handleDecision = (action: string) => {
    setDecision(prev => ({ ...prev, action }));
    setShowDecisionPanel(true);
  };

  const submitDecision = () => {
    // Here you would submit the decision to the backend
    console.log("Decision submitted:", decision);
    alert(`Application ${decision.action.toLowerCase()}ed successfully!`);
    router.push("/admin/applications");
  };

  const getRiskColor = (riskCategory: string) => {
    switch (riskCategory) {
      case "LOW": return "text-green-600 bg-green-100";
      case "MEDIUM": return "text-yellow-600 bg-yellow-100";
      case "HIGH": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link 
            href="/admin/applications"
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Application Review</h1>
            <p className="text-gray-600 mt-1">Detailed review for {application.id}</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={() => handleDecision("APPROVE")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center font-semibold"
          >
            <CheckCircleIcon className="h-5 w-5 mr-2" />
            Approve
          </button>
          <button
            onClick={() => handleDecision("REJECT")}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center font-semibold"
          >
            <XCircleIcon className="h-5 w-5 mr-2" />
            Reject
          </button>
        </div>
      </div>

      {/* Application Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <p className="text-blue-200 text-sm">Applicant</p>
            <p className="text-xl font-bold">{application.applicantName}</p>
            <p className="text-blue-200 text-sm">{application.personalInfo.age} years, {application.personalInfo.city}</p>
          </div>
          <div>
            <p className="text-blue-200 text-sm">Loan Details</p>
            <p className="text-xl font-bold">{application.loanType}</p>
            <p className="text-blue-200 text-sm">{formatCurrency(application.amount)} • {application.purpose}</p>
          </div>
          <div>
            <p className="text-blue-200 text-sm">Applied Date</p>
            <p className="text-xl font-bold">{new Date(application.appliedDate).toLocaleDateString()}</p>
            <p className="text-blue-200 text-sm">{new Date(application.appliedDate).toLocaleTimeString()}</p>
          </div>
          <div>
            <p className="text-blue-200 text-sm">Status</p>
            <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-800">
              {application.status.replace('_', ' ')}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Detailed Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <UserIcon className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Full Name</label>
                <p className="text-gray-900">{application.applicantName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Age / Gender</label>
                <p className="text-gray-900">{application.personalInfo.age} years / {application.personalInfo.gender}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Marital Status</label>
                <p className="text-gray-900">{application.personalInfo.maritalStatus}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Dependents</label>
                <p className="text-gray-900">{application.personalInfo.dependents}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Email</label>
                <p className="text-gray-900 flex items-center">
                  <EnvelopeIcon className="h-4 w-4 mr-1" />
                  {application.personalInfo.email}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Phone</label>
                <p className="text-gray-900 flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-1" />
                  {application.personalInfo.phone}
                </p>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-500">Address</label>
                <p className="text-gray-900 flex items-start">
                  <MapPinIcon className="h-4 w-4 mr-1 mt-0.5" />
                  {application.personalInfo.address}
                </p>
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <CurrencyRupeeIcon className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Financial Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Monthly Income</label>
                <p className="text-xl font-bold text-green-600">{formatCurrency(application.financialInfo.monthlyIncome)}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Existing EMIs</label>
                <p className="text-xl font-bold text-red-600">{formatCurrency(application.financialInfo.existingEMIs)}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Monthly Expenses</label>
                <p className="text-xl font-bold text-gray-900">{formatCurrency(application.financialInfo.monthlyExpenses)}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Employment</label>
                <p className="text-gray-900">{application.financialInfo.employmentType}</p>
                <p className="text-sm text-gray-500">{application.financialInfo.company}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Work Experience</label>
                <p className="text-gray-900">{application.financialInfo.workExperience} years total</p>
                <p className="text-sm text-gray-500">{application.financialInfo.currentJobTenure} years current job</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Savings Rate</label>
                <p className="text-gray-900">{application.financialInfo.savings}%</p>
                <p className="text-sm text-gray-500">Bank Balance: {formatCurrency(application.financialInfo.bankBalance)}</p>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <DocumentTextIcon className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Document Verification</h2>
            </div>
            
            <div className="space-y-3">
              {application.documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">{doc.type}</p>
                      <p className="text-sm text-gray-500">
                        Uploaded: {new Date(doc.uploadDate).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      doc.status === 'VERIFIED' 
                        ? 'text-green-600 bg-green-100'
                        : 'text-yellow-600 bg-yellow-100'
                    }`}>
                      {doc.status}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Credit Assessment & Decision */}
        <div className="space-y-6">
          {/* Credit Assessment */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <ChartBarIcon className="h-6 w-6 text-indigo-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Credit Assessment</h2>
            </div>
            
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">{application.creditAssessment.cibilScore}</div>
                <div className="text-sm text-gray-500">CIBIL Score</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Risk Score</span>
                  <span className="font-medium">{application.creditAssessment.riskScore}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Risk Category</span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getRiskColor(application.creditAssessment.riskCategory)}`}>
                    {application.creditAssessment.riskCategory}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Debt-to-Income</span>
                  <span className="font-medium">{application.creditAssessment.debtToIncomeRatio}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">EMI Capacity</span>
                  <span className="font-medium">{formatCurrency(application.creditAssessment.maxEMICapacity)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Proposed EMI</span>
                  <span className="font-medium">{formatCurrency(application.creditAssessment.proposedEMI)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Analysis */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <ShieldCheckIcon className="h-6 w-6 text-orange-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">AI Analysis</h2>
            </div>
            
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{application.aiAnalysis.confidence}%</div>
                <div className="text-sm text-gray-500">Confidence Score</div>
                <div className="mt-2">
                  <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-orange-100 text-orange-800">
                    {application.aiAnalysis.overallRecommendation.replace('_', ' ')}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-800 mb-2">✅ Positive Factors</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {application.aiAnalysis.positiveFactors.map((factor, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Risk Factors</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {application.aiAnalysis.riskFactors.map((factor, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-blue-800 mb-2">AI Recommendation</h4>
                <div className="text-sm space-y-1">
                  <p><span className="font-medium">Amount:</span> {formatCurrency(application.aiAnalysis.recommendedAmount)}</p>
                  <p><span className="font-medium">Rate:</span> {application.aiAnalysis.recommendedRate}% p.a.</p>
                  <p><span className="font-medium">Tenure:</span> {application.aiAnalysis.recommendedTenure} months</p>
                  <p><span className="font-medium">EMI:</span> {formatCurrency(calculateEMI(application.aiAnalysis.recommendedAmount, application.aiAnalysis.recommendedRate, application.aiAnalysis.recommendedTenure))}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Panel */}
      {showDecisionPanel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {decision.action === 'APPROVE' ? 'Approve Application' : 'Reject Application'}
            </h2>
            
            {decision.action === 'APPROVE' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Approved Amount (₹)
                    </label>
                    <input
                      type="number"
                      value={decision.approvedAmount}
                      onChange={(e) => setDecision(prev => ({ ...prev, approvedAmount: Number(e.target.value) }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interest Rate (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={decision.interestRate}
                      onChange={(e) => setDecision(prev => ({ ...prev, interestRate: Number(e.target.value) }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tenure (months)
                  </label>
                  <select
                    value={decision.tenure}
                    onChange={(e) => setDecision(prev => ({ ...prev, tenure: Number(e.target.value) }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={12}>12 months</option>
                    <option value={24}>24 months</option>
                    <option value={36}>36 months</option>
                    <option value={48}>48 months</option>
                    <option value={60}>60 months</option>
                  </select>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Calculated EMI:</strong> {formatCurrency(calculateEMI(decision.approvedAmount, decision.interestRate, decision.tenure))}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Conditions (if any)
                  </label>
                  <textarea
                    value={decision.conditions}
                    onChange={(e) => setDecision(prev => ({ ...prev, conditions: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    placeholder="e.g., Salary account to be maintained, Insurance required, etc."
                  />
                </div>
              </div>
            )}

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comments
              </label>
              <textarea
                value={decision.comments}
                onChange={(e) => setDecision(prev => ({ ...prev, comments: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                placeholder="Add your decision rationale and any additional notes..."
              />
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => setShowDecisionPanel(false)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={submitDecision}
                className={`px-6 py-3 rounded-lg text-white font-semibold ${
                  decision.action === 'APPROVE' 
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                Confirm {decision.action === 'APPROVE' ? 'Approval' : 'Rejection'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}