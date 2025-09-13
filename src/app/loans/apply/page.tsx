"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  ArrowLeftIcon, 
  ArrowRightIcon, 
  CheckCircleIcon,
  CurrencyRupeeIcon,
  ClockIcon
} from "@heroicons/react/24/outline";

// Comprehensive loan sector configurations
const loanSectors = {
  personal: {
    name: "Personal Loan",
    icon: "👤",
    color: "bg-blue-500",
    minAmount: 200000,
    maxAmount: 1500000,
    rate: 12.5,
    tenure: [12, 24, 36, 48, 60],
    documents: ["Aadhaar Card", "PAN Card", "Salary Slips (3 months)", "Bank Statements (6 months)"],
    specificFields: ["monthlyExpenses", "existingLoans", "references"]
  },
  home: {
    name: "Home Loan",
    icon: "🏠",
    color: "bg-green-500",
    minAmount: 500000,
    maxAmount: 50000000,
    rate: 8.5,
    tenure: [60, 120, 180, 240, 300],
    documents: ["Property Documents", "NOC from Builder", "Approved Plan", "Sale Agreement"],
    specificFields: ["propertyValue", "propertyAddress", "constructionStatus", "coApplicant"]
  },
  vehicle: {
    name: "Vehicle Loan", 
    icon: "🚗",
    color: "bg-purple-500",
    minAmount: 200000,
    maxAmount: 5000000,
    rate: 9.5,
    tenure: [12, 24, 36, 48, 60, 72, 84],
    documents: ["Vehicle Invoice", "RC Book", "Insurance", "Driving License"],
    specificFields: ["vehicleModel", "vehicleVariant", "dealerName", "downPayment"]
  },
  business: {
    name: "Business Loan",
    icon: "💼", 
    color: "bg-indigo-500",
    minAmount: 100000,
    maxAmount: 10000000,
    rate: 14.0,
    tenure: [12, 24, 36, 48, 60],
    documents: ["GST Returns", "ITR (2 years)", "Bank Statements (12 months)", "Business Registration"],
    specificFields: ["businessType", "annualTurnover", "businessVintage", "gstNumber"]
  },
  education: {
    name: "Education Loan",
    icon: "🎓",
    color: "bg-yellow-500", 
    minAmount: 100000,
    maxAmount: 7500000,
    rate: 10.5,
    tenure: [60, 84, 120, 144, 180],
    documents: ["Admission Letter", "Fee Structure", "Academic Records", "Co-applicant Documents"],
    specificFields: ["instituteName", "courseName", "courseDuration", "coApplicantIncome"]
  },
  agriculture: {
    name: "Agriculture Loan",
    icon: "🌾",
    color: "bg-green-600",
    minAmount: 50000, 
    maxAmount: 2000000,
    rate: 7.0,
    tenure: [6, 12, 18, 24, 30, 36],
    documents: ["Land Records", "Revenue Documents", "Crop Plan", "Identity Proof"],
    specificFields: ["landArea", "cropType", "irrigationSource", "farmingExperience"]
  },
  gold: {
    name: "Gold Loan",
    icon: "🥇",
    color: "bg-yellow-600",
    minAmount: 10000,
    maxAmount: 2000000,
    rate: 12.0,
    tenure: [6, 12, 18, 24, 30, 36],
    documents: ["Gold Jewelry", "Purchase Invoice", "Identity Proof", "Address Proof"],
    specificFields: ["goldWeight", "goldPurity", "jewelryType", "goldValue"]
  },
  "credit-card": {
    name: "Credit Card",
    icon: "💳",
    color: "bg-red-500",
    minAmount: 50000,
    maxAmount: 2000000,
    rate: 42.0,
    tenure: [12, 24, 36],
    documents: ["Salary Certificate", "Bank Statements", "Identity Proof", "Address Proof"],
    specificFields: ["cardType", "existingCards", "creditHistory", "preferredLimit"]
  },
  "two-wheeler": {
    name: "Two Wheeler Loan",
    icon: "🏍️",
    color: "bg-orange-500",
    minAmount: 30000,
    maxAmount: 300000,
    rate: 13.5,
    tenure: [12, 18, 24, 30, 36],
    documents: ["Vehicle Invoice", "Identity Proof", "Income Proof", "Address Proof"],
    specificFields: ["vehicleBrand", "vehicleModel", "vehicleType", "dealerDetails"]
  },
  healthcare: {
    name: "Healthcare Loan",
    icon: "🏥",
    color: "bg-red-600",
    minAmount: 25000,
    maxAmount: 1000000,
    rate: 14.5,
    tenure: [6, 12, 18, 24, 36, 48],
    documents: ["Medical Bills", "Doctor Prescription", "Identity Proof", "Income Proof"],
    specificFields: ["treatmentType", "hospitalName", "doctorName", "emergencyNature"]
  },
  digital: {
    name: "Digital Loan",
    icon: "📱",
    color: "bg-purple-600",
    minAmount: 5000,
    maxAmount: 500000,
    rate: 18.0,
    tenure: [3, 6, 9, 12, 18, 24],
    documents: ["Digital KYC", "Bank Statements", "UPI Transactions", "Credit Score"],
    specificFields: ["digitalFootprint", "upiTransactions", "socialMedia", "deviceInfo"]
  },
  microfinance: {
    name: "Microfinance Loan",
    icon: "🤝",
    color: "bg-green-700",
    minAmount: 10000,
    maxAmount: 100000,
    rate: 20.0,
    tenure: [12, 18, 24, 30, 36],
    documents: ["Group Formation", "Identity Proof", "Business Plan", "Guarantor Details"],
    specificFields: ["groupMembers", "businessPlan", "guarantorDetails", "weeklyIncome"]
  }
};

// Enhanced application form schema with sector-specific fields
const baseApplicationSchema = z.object({
  loanType: z.string().min(1, "Please select a loan type"),
  amount: z.number().min(1000, "Amount must be at least ₹1,000"),
  tenure: z.number().min(1, "Please select tenure"),
  purpose: z.string().min(5, "Please describe loan purpose"),
  
  // Personal details
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  
  // Employment
  monthlyIncome: z.number().min(1000, "Monthly income is required"),
  employmentType: z.string().min(1, "Employment type is required"),
  
  // Consent
  termsAccepted: z.boolean().refine(val => val === true, "Please accept terms and conditions")
});

// Sector-specific field schemas
const sectorSpecificSchemas = {
  personal: z.object({
    monthlyExpenses: z.number().optional(),
    existingLoans: z.string().optional(),
    references: z.string().optional()
  }),
  home: z.object({
    propertyValue: z.number().optional(),
    propertyAddress: z.string().optional(),
    constructionStatus: z.string().optional(),
    coApplicant: z.string().optional()
  }),
  vehicle: z.object({
    vehicleModel: z.string().optional(),
    vehicleVariant: z.string().optional(),
    dealerName: z.string().optional(),
    downPayment: z.number().optional()
  }),
  business: z.object({
    businessType: z.string().optional(),
    annualTurnover: z.number().optional(),
    businessVintage: z.number().optional(),
    gstNumber: z.string().optional()
  }),
  education: z.object({
    instituteName: z.string().optional(),
    courseName: z.string().optional(),
    courseDuration: z.number().optional(),
    coApplicantIncome: z.number().optional()
  }),
  agriculture: z.object({
    landArea: z.number().optional(),
    cropType: z.string().optional(),
    irrigationSource: z.string().optional(),
    farmingExperience: z.number().optional()
  })
};

const applicationSchema = baseApplicationSchema;

export default function LoanApplicationPage() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLoanType, setSelectedLoanType] = useState<string>("");
  const [calculatedEMI, setCalculatedEMI] = useState<number>(0);
  
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      loanType: searchParams?.get("type") || "",
      termsAccepted: false
    }
  });

  const watchedValues = watch();
  
  useEffect(() => {
    const type = searchParams?.get("type") || "";
    if (type && loanSectors[type as keyof typeof loanSectors]) {
      setSelectedLoanType(type);
      setValue("loanType", type);
    }
  }, [searchParams, setValue]);

  useEffect(() => {
    // Calculate EMI when amount, tenure, or loan type changes
    if (watchedValues.amount && watchedValues.tenure && selectedLoanType) {
      const sector = loanSectors[selectedLoanType as keyof typeof loanSectors];
      if (sector) {
        const principal = watchedValues.amount;
        const rate = sector.rate / 100 / 12; // Monthly rate
        const tenure = watchedValues.tenure;
        
        const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
        setCalculatedEMI(Math.round(emi));
      }
    }
  }, [watchedValues.amount, watchedValues.tenure, selectedLoanType]);

  const handleLoanTypeSelect = (type: string) => {
    setSelectedLoanType(type);
    setValue("loanType", type);
    const sector = loanSectors[type as keyof typeof loanSectors];
    if (sector) {
      setValue("amount", sector.minAmount);
      setValue("tenure", sector.tenure[0]);
    }
  };

  const onSubmit = async (data: any) => {
    console.log("Application Data:", data);
    // Here you would submit to your API
    alert("Application submitted successfully! You will receive a confirmation email shortly.");
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const currentSector = selectedLoanType ? loanSectors[selectedLoanType as keyof typeof loanSectors] : null;

  // Render sector-specific fields
  const renderSectorSpecificFields = () => {
    if (!selectedLoanType || !currentSector) return null;

    switch (selectedLoanType) {
      case 'home':
        return (
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h4 className="font-semibold text-gray-900 mb-4">Property Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Value (₹)
                </label>
                <input
                  type="number"
                  {...register("propertyValue", { valueAsNumber: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Estimated property value"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Construction Status
                </label>
                <select
                  {...register("constructionStatus")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Status</option>
                  <option value="ready">Ready to Move</option>
                  <option value="under_construction">Under Construction</option>
                  <option value="new_construction">New Construction</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Address
                </label>
                <textarea
                  {...register("propertyAddress")}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Complete property address"
                />
              </div>
            </div>
          </div>
        );

      case 'vehicle':
        return (
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h4 className="font-semibold text-gray-900 mb-4">Vehicle Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Model
                </label>
                <input
                  type="text"
                  {...register("vehicleModel")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Maruti Swift"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Variant
                </label>
                <input
                  type="text"
                  {...register("vehicleVariant")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., VXI, ZXI"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dealer Name
                </label>
                <input
                  type="text"
                  {...register("dealerName")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Authorized dealer name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment (₹)
                </label>
                <input
                  type="number"
                  {...register("downPayment", { valueAsNumber: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Amount you can pay upfront"
                />
              </div>
            </div>
          </div>
        );

      case 'business':
        return (
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h4 className="font-semibold text-gray-900 mb-4">Business Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type
                </label>
                <select
                  {...register("businessType")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Business Type</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="trading">Trading</option>
                  <option value="services">Services</option>
                  <option value="retail">Retail</option>
                  <option value="wholesale">Wholesale</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Turnover (₹)
                </label>
                <input
                  type="number"
                  {...register("annualTurnover", { valueAsNumber: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Last year's turnover"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Vintage (Years)
                </label>
                <input
                  type="number"
                  {...register("businessVintage", { valueAsNumber: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Years in business"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GST Number
                </label>
                <input
                  type="text"
                  {...register("gstNumber")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="15-digit GST number"
                />
              </div>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h4 className="font-semibold text-gray-900 mb-4">Education Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Institute Name
                </label>
                <input
                  type="text"
                  {...register("instituteName")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Name of educational institution"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Name
                </label>
                <input
                  type="text"
                  {...register("courseName")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Course you want to pursue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Duration (Years)
                </label>
                <input
                  type="number"
                  {...register("courseDuration", { valueAsNumber: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Duration in years"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Co-applicant Income (₹/month)
                </label>
                <input
                  type="number"
                  {...register("coApplicantIncome", { valueAsNumber: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Parent/Guardian's monthly income"
                />
              </div>
            </div>
          </div>
        );

      case 'agriculture':
        return (
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h4 className="font-semibold text-gray-900 mb-4">Agricultural Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Land Area (Acres)
                </label>
                <input
                  type="number"
                  {...register("landArea", { valueAsNumber: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Total land area"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Crop Type
                </label>
                <select
                  {...register("cropType")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Crop Type</option>
                  <option value="rice">Rice</option>
                  <option value="wheat">Wheat</option>
                  <option value="sugarcane">Sugarcane</option>
                  <option value="cotton">Cotton</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="fruits">Fruits</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Irrigation Source
                </label>
                <select
                  {...register("irrigationSource")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Irrigation Source</option>
                  <option value="bore_well">Bore Well</option>
                  <option value="canal">Canal</option>
                  <option value="river">River</option>
                  <option value="rainwater">Rainwater</option>
                  <option value="drip">Drip Irrigation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Farming Experience (Years)
                </label>
                <input
                  type="number"
                  {...register("farmingExperience", { valueAsNumber: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Years of farming experience"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Loan Application</h1>
              <p className="text-blue-100 mt-1">Complete your application in 3 simple steps</p>
            </div>
            <Link
              href="/loans"
              className="flex items-center text-blue-100 hover:text-white transition-colors duration-200"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-1" />
              Back to Loans
            </Link>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= step ? 'bg-yellow-400 text-gray-900' : 'bg-blue-800 text-blue-300'
                  }`}>
                    {currentStep > step ? <CheckCircleIcon className="h-5 w-5" /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`flex-1 h-1 mx-4 ${
                      currentStep > step ? 'bg-yellow-400' : 'bg-blue-800'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-blue-100">
              <span>Loan Details</span>
              <span>Personal Info</span>
              <span>Submit</span>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step 1: Loan Type Selection */}
        {currentStep === 1 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Loan Type & Amount</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {Object.entries(loanSectors).map(([key, sector]) => (
                <div
                  key={key}
                  onClick={() => handleLoanTypeSelect(key)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedLoanType === key
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{sector.icon}</span>
                    <h3 className="font-semibold text-gray-900">{sector.name}</h3>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Rate: {sector.rate}% onwards</div>
                    <div>Amount: ₹{(sector.minAmount/100000).toFixed(1)}L - ₹{(sector.maxAmount/100000).toFixed(1)}L</div>
                  </div>
                </div>
              ))}
            </div>

            {selectedLoanType && currentSector && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Amount (₹) *
                    </label>
                    <input
                      type="number"
                      {...register("amount", { valueAsNumber: true })}
                      min={currentSector.minAmount}
                      max={currentSector.maxAmount}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={`Min: ₹${currentSector.minAmount.toLocaleString()}`}
                    />
                    {errors.amount && (
                      <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tenure (Months) *
                    </label>
                    <select
                      {...register("tenure", { valueAsNumber: true })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {currentSector.tenure.map((months) => (
                        <option key={months} value={months}>
                          {months} months ({Math.round(months/12 * 10)/10} years)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="text-sm text-green-700 mb-1">Estimated EMI</div>
                    <div className="text-2xl font-bold text-green-800">
                      ₹{calculatedEMI.toLocaleString()}
                    </div>
                    <div className="text-xs text-green-600">*Indicative amount</div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Purpose of Loan *
                  </label>
                  <textarea
                    {...register("purpose")}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe the purpose for this loan"
                  />
                  {errors.purpose && (
                    <p className="text-red-500 text-sm mt-1">{errors.purpose.message}</p>
                  )}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Required Documents</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {currentSector.documents.map((doc, index) => (
                      <div key={index} className="flex items-center text-sm text-blue-800">
                        <CheckCircleIcon className="h-4 w-4 mr-2" />
                        {doc}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                disabled={!selectedLoanType}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center font-semibold"
              >
                Continue
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Personal Information */}
        {currentStep === 2 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal & Financial Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  {...register("firstName")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  {...register("lastName")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...register("phone")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+91"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  {...register("dateOfBirth")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.dateOfBirth && (
                  <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Type *
                </label>
                <select
                  {...register("employmentType")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Employment Type</option>
                  <option value="SALARIED">Salaried</option>
                  <option value="SELF_EMPLOYED_PROFESSIONAL">Self Employed Professional</option>
                  <option value="SELF_EMPLOYED_BUSINESS">Self Employed Business</option>
                  <option value="STUDENT">Student</option>
                  <option value="RETIRED">Retired</option>
                </select>
                {errors.employmentType && (
                  <p className="text-red-500 text-sm mt-1">{errors.employmentType.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Income (₹) *
                </label>
                <input
                  type="number"
                  {...register("monthlyIncome", { valueAsNumber: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter monthly income"
                />
                {errors.monthlyIncome && (
                  <p className="text-red-500 text-sm mt-1">{errors.monthlyIncome.message}</p>
                )}
              </div>
            </div>

            {/* Sector-specific fields */}
            {renderSectorSpecificFields()}

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 flex items-center font-semibold"
              >
                <ArrowLeftIcon className="mr-2 h-5 w-5" />
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center font-semibold"
              >
                Continue
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Review & Submit */}
        {currentStep === 3 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Review & Submit Application</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Loan Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Loan Type:</span>
                    <span className="ml-2 font-medium">{currentSector?.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Amount:</span>
                    <span className="ml-2 font-medium">₹{watchedValues.amount?.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Tenure:</span>
                    <span className="ml-2 font-medium">{watchedValues.tenure} months</span>
                  </div>
                  <div>
                    <span className="text-gray-600">EMI:</span>
                    <span className="ml-2 font-medium text-green-600">₹{calculatedEMI.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Name:</span>
                    <span className="ml-2 font-medium">{watchedValues.firstName} {watchedValues.lastName}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Email:</span>
                    <span className="ml-2 font-medium">{watchedValues.email}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Phone:</span>
                    <span className="ml-2 font-medium">{watchedValues.phone}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Monthly Income:</span>
                    <span className="ml-2 font-medium">₹{watchedValues.monthlyIncome?.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register("termsAccepted")}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  I accept the <Link href="/terms" className="text-blue-600 hover:underline">terms and conditions</Link> and 
                  <Link href="/privacy" className="text-blue-600 hover:underline ml-1">privacy policy</Link>
                </span>
              </label>
              {errors.termsAccepted && (
                <p className="text-red-500 text-sm mt-1">{errors.termsAccepted.message}</p>
              )}
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 flex items-center font-semibold"
              >
                <ArrowLeftIcon className="mr-2 h-5 w-5" />
                Previous
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 flex items-center font-semibold"
              >
                Submit Application
                <CheckCircleIcon className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}