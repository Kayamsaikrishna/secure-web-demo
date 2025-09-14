"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeftIcon,
  PlusIcon,
  MinusIcon,
  InformationCircleIcon
} from "@heroicons/react/24/outline";

const loanCategories = [
  "Personal Loan",
  "Home Loan", 
  "Vehicle Loan",
  "Business Loan",
  "Education Loan",
  "Agriculture Loan",
  "Gold Loan",
  "Property Loan",
  "Working Capital",
  "Equipment Finance",
  "Consumer Durable",
  "Microfinance"
];

const targetSegments = [
  "Salaried Professionals",
  "Self Employed",
  "Business Owners", 
  "First Time Borrowers",
  "Existing Customers",
  "Women Entrepreneurs",
  "Rural Customers",
  "Urban Customers",
  "Students",
  "Senior Citizens"
];

interface SchemeFormData {
  schemeName: string;
  schemeCode: string;
  category: string;
  targetSegment: string;
  description: string;
  campaignPeriod: {
    startDate: string;
    endDate: string;
  };
  loanParameters: {
    minAmount: number;
    maxAmount: number;
    tenureOptions: number[];
    processingFee: number;
    prepaymentCharges: number;
  };
  interestRates: {
    category: string;
    scoreRange: string;
    minRate: number;
    maxRate: number;
  }[];
  eligibilityCriteria: {
    minAge: number;
    maxAge: number;
    minIncome: number;
    minCreditScore: number;
    maxEmiRatio: number;
    workExperience: number;
  };
  documents: string[];
  features: string[];
}

export default function CreateLoanSchemePage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<SchemeFormData>({
    schemeName: "",
    schemeCode: "",
    category: "",
    targetSegment: "",
    description: "",
    campaignPeriod: {
      startDate: "",
      endDate: ""
    },
    loanParameters: {
      minAmount: 0,
      maxAmount: 0,
      tenureOptions: [],
      processingFee: 0,
      prepaymentCharges: 0
    },
    interestRates: [
      { category: "Excellent (>750)", scoreRange: ">750", minRate: 0, maxRate: 0 },
      { category: "Good (650-750)", scoreRange: "650-750", minRate: 0, maxRate: 0 },
      { category: "Fair (550-649)", scoreRange: "550-649", minRate: 0, maxRate: 0 }
    ],
    eligibilityCriteria: {
      minAge: 21,
      maxAge: 65,
      minIncome: 0,
      minCreditScore: 650,
      maxEmiRatio: 50,
      workExperience: 2
    },
    documents: [],
    features: []
  });

  if ((session?.user as any)?.role !== "ADMIN") {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900">Access Denied</h1>
        <p className="text-gray-600">You don't have permission to access this page.</p>
      </div>
    );
  }

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Here you would submit the form data
    console.log("Scheme Data:", formData);
    router.push("/admin/loan-schemes");
  };

  const addTenureOption = () => {
    setFormData(prev => ({
      ...prev,
      loanParameters: {
        ...prev.loanParameters,
        tenureOptions: [...prev.loanParameters.tenureOptions, 12]
      }
    }));
  };

  const removeTenureOption = (index: number) => {
    setFormData(prev => ({
      ...prev,
      loanParameters: {
        ...prev.loanParameters,
        tenureOptions: prev.loanParameters.tenureOptions.filter((_, i) => i !== index)
      }
    }));
  };

  const addDocument = () => {
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, ""]
    }));
  };

  const removeDocument = (index: number) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index)
    }));
  };

  const addFeature = () => {
    setFormData(prev => ({
      ...prev,
      features: [...prev.features, ""]
    }));
  };

  const removeFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link 
            href="/admin/loan-schemes"
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Create New Loan Scheme</h1>
            <p className="text-gray-600 mt-1">Configure a new loan product for your customers</p>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                currentStep >= step 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {step}
              </div>
              {step < 4 && (
                <div className={`w-24 h-1 mx-2 ${
                  currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Basic Info</span>
          <span>Loan Parameters</span>
          <span>Eligibility</span>
          <span>Review</span>
        </div>
      </div>

      {/* Step 1: Basic Information */}
      {currentStep === 1 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Basic Scheme Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scheme Name *
              </label>
              <input
                type="text"
                value={formData.schemeName}
                onChange={(e) => setFormData(prev => ({ ...prev, schemeName: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., HDFC Festive Personal Loan 2025"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scheme Code *
              </label>
              <input
                type="text"
                value={formData.schemeCode}
                onChange={(e) => setFormData(prev => ({ ...prev, schemeCode: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., HPL-FEST-2025"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Category</option>
                {loanCategories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Segment *
              </label>
              <select
                value={formData.targetSegment}
                onChange={(e) => setFormData(prev => ({ ...prev, targetSegment: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Target Segment</option>
                {targetSegments.map((segment) => (
                  <option key={segment} value={segment}>{segment}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Campaign Period
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Start Date</label>
                  <input
                    type="date"
                    value={formData.campaignPeriod.startDate}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      campaignPeriod: { ...prev.campaignPeriod, startDate: e.target.value }
                    }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">End Date</label>
                  <input
                    type="date"
                    value={formData.campaignPeriod.endDate}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      campaignPeriod: { ...prev.campaignPeriod, endDate: e.target.value }
                    }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe the loan scheme, its benefits, and target audience..."
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Loan Parameters */}
      {currentStep === 2 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Loan Parameters Configuration</h2>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Amount (₹) *
                </label>
                <input
                  type="number"
                  value={formData.loanParameters.minAmount}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    loanParameters: { ...prev.loanParameters, minAmount: Number(e.target.value) }
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="50000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum Amount (₹) *
                </label>
                <input
                  type="number"
                  value={formData.loanParameters.maxAmount}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    loanParameters: { ...prev.loanParameters, maxAmount: Number(e.target.value) }
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="1500000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Processing Fee (%) *
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.loanParameters.processingFee}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    loanParameters: { ...prev.loanParameters, processingFee: Number(e.target.value) }
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="2.0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prepayment Charges (%) *
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.loanParameters.prepaymentCharges}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    loanParameters: { ...prev.loanParameters, prepaymentCharges: Number(e.target.value) }
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="2.5"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tenure Options (months)
              </label>
              <div className="space-y-2">
                {formData.loanParameters.tenureOptions.map((tenure, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="number"
                      value={tenure}
                      onChange={(e) => {
                        const newOptions = [...formData.loanParameters.tenureOptions];
                        newOptions[index] = Number(e.target.value);
                        setFormData(prev => ({
                          ...prev,
                          loanParameters: { ...prev.loanParameters, tenureOptions: newOptions }
                        }));
                      }}
                      className="w-32 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={() => removeTenureOption(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <MinusIcon className="h-5 w-5" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={addTenureOption}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <PlusIcon className="h-4 w-4 mr-1" />
                  Add Tenure Option
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Interest Rate Matrix</h3>
              <div className="space-y-4">
                {formData.interestRates.map((rate, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-gray-200 rounded-lg">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Credit Category</label>
                      <input
                        type="text"
                        value={rate.category}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Score Range</label>
                      <input
                        type="text"
                        value={rate.scoreRange}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Min Rate (%)</label>
                      <input
                        type="number"
                        step="0.1"
                        value={rate.minRate}
                        onChange={(e) => {
                          const newRates = [...formData.interestRates];
                          newRates[index].minRate = Number(e.target.value);
                          setFormData(prev => ({ ...prev, interestRates: newRates }));
                        }}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Max Rate (%)</label>
                      <input
                        type="number"
                        step="0.1"
                        value={rate.maxRate}
                        onChange={(e) => {
                          const newRates = [...formData.interestRates];
                          newRates[index].maxRate = Number(e.target.value);
                          setFormData(prev => ({ ...prev, interestRates: newRates }));
                        }}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Eligibility Criteria */}
      {currentStep === 3 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Eligibility Criteria & Documentation</h2>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Age (years) *
                </label>
                <input
                  type="number"
                  value={formData.eligibilityCriteria.minAge}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    eligibilityCriteria: { ...prev.eligibilityCriteria, minAge: Number(e.target.value) }
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum Age (years) *
                </label>
                <input
                  type="number"
                  value={formData.eligibilityCriteria.maxAge}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    eligibilityCriteria: { ...prev.eligibilityCriteria, maxAge: Number(e.target.value) }
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Income (₹/month) *
                </label>
                <input
                  type="number"
                  value={formData.eligibilityCriteria.minIncome}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    eligibilityCriteria: { ...prev.eligibilityCriteria, minIncome: Number(e.target.value) }
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="25000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Credit Score *
                </label>
                <input
                  type="number"
                  value={formData.eligibilityCriteria.minCreditScore}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    eligibilityCriteria: { ...prev.eligibilityCriteria, minCreditScore: Number(e.target.value) }
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max EMI Ratio (%) *
                </label>
                <input
                  type="number"
                  value={formData.eligibilityCriteria.maxEmiRatio}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    eligibilityCriteria: { ...prev.eligibilityCriteria, maxEmiRatio: Number(e.target.value) }
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Work Experience (years) *
                </label>
                <input
                  type="number"
                  value={formData.eligibilityCriteria.workExperience}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    eligibilityCriteria: { ...prev.eligibilityCriteria, workExperience: Number(e.target.value) }
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Required Documents
              </label>
              <div className="space-y-2">
                {formData.documents.map((doc, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={doc}
                      onChange={(e) => {
                        const newDocs = [...formData.documents];
                        newDocs[index] = e.target.value;
                        setFormData(prev => ({ ...prev, documents: newDocs }));
                      }}
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Aadhaar Card"
                    />
                    <button
                      onClick={() => removeDocument(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <MinusIcon className="h-5 w-5" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={addDocument}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <PlusIcon className="h-4 w-4 mr-1" />
                  Add Document
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Key Features
              </label>
              <div className="space-y-2">
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => {
                        const newFeatures = [...formData.features];
                        newFeatures[index] = e.target.value;
                        setFormData(prev => ({ ...prev, features: newFeatures }));
                      }}
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Quick Approval"
                    />
                    <button
                      onClick={() => removeFeature(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <MinusIcon className="h-5 w-5" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={addFeature}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <PlusIcon className="h-4 w-4 mr-1" />
                  Add Feature
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Review */}
      {currentStep === 4 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Review & Confirm</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex">
                <InformationCircleIcon className="h-5 w-5 text-blue-400" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Scheme Summary</h3>
                  <div className="text-sm text-blue-700 mt-1">
                    <p><strong>Name:</strong> {formData.schemeName}</p>
                    <p><strong>Category:</strong> {formData.category}</p>
                    <p><strong>Amount Range:</strong> ₹{formData.loanParameters.minAmount?.toLocaleString()} - ₹{formData.loanParameters.maxAmount?.toLocaleString()}</p>
                    <p><strong>Interest Rate:</strong> {formData.interestRates[0]?.minRate}% - {formData.interestRates[formData.interestRates.length - 1]?.maxRate}%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Please review all the details above. Once you click "Create Scheme", 
                the loan scheme will be created and can be activated for customers to apply.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        {currentStep < 4 ? (
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Create Scheme
          </button>
        )}
      </div>
    </div>
  );
}