"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  PlayIcon,
  UserIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  HomeIcon,
  TruckIcon,
  CurrencyRupeeIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  StarIcon
} from "@heroicons/react/24/outline";

const demoScenarios = [
  {
    id: "rural_farmer",
    title: "Rural Farmer - Agriculture Loan",
    category: "Agriculture",
    icon: "🌾",
    color: "bg-green-500",
    difficulty: "Beginner",
    duration: "5-8 minutes",
    description: "Follow Sunita Devi, a farmer from Rajasthan, as she applies for an agriculture loan for crop cultivation using traditional documents and government schemes.",
    keyFeatures: [
      "Rural user interface with vernacular support",
      "Government scheme integration (PM-KISAN)",
      "Land record verification",
      "Seasonal repayment structure",
      "Weather insurance integration"
    ],
    demoData: {
      user: {
        name: "Sunita Devi",
        aadhaar: "789123456789",
        pan: "QRSTU3456V",
        location: "Khetri, Sikar, Rajasthan",
        occupation: "Farmer",
        landArea: "5 acres",
        crops: ["Wheat", "Mustard", "Millet"]
      },
      loan: {
        amount: 150000,
        purpose: "Crop cultivation and irrigation setup",
        tenure: 12,
        interestRate: 7.0,
        expectedEMI: 13125
      }
    },
    workflow: [
      "User registration with Aadhaar",
      "Land record verification",
      "Government scheme eligibility check",
      "Crop plan submission",
      "Risk assessment (weather, market)",
      "Loan approval and disbursement"
    ]
  },
  {
    id: "urban_professional",
    title: "Urban Professional - Personal Loan",
    category: "Personal",
    icon: "👔",
    color: "bg-blue-500",
    difficulty: "Beginner",
    duration: "3-5 minutes",
    description: "Experience Rajesh Kumar's journey for a personal loan to consolidate debt, showcasing instant credit scoring and digital documentation.",
    keyFeatures: [
      "Instant credit assessment",
      "Digital salary certificate",
      "Bank statement analysis",
      "Debt consolidation calculator",
      "Quick approval process"
    ],
    demoData: {
      user: {
        name: "Rajesh Kumar Singh",
        aadhaar: "123456789012",
        pan: "ABCDE1234F",
        location: "New Delhi",
        occupation: "Software Engineer",
        company: "Tech Solutions Pvt Ltd",
        salary: 75000
      },
      loan: {
        amount: 500000,
        purpose: "Debt consolidation",
        tenure: 36,
        interestRate: 12.5,
        expectedEMI: 16758
      }
    },
    workflow: [
      "Quick registration",
      "Digital KYC completion",
      "Credit score retrieval",
      "Income verification",
      "Instant loan approval",
      "Fund transfer"
    ]
  },
  {
    id: "small_business",
    title: "Small Business Owner - Working Capital",
    category: "Business",
    icon: "🏪",
    color: "bg-purple-500",
    difficulty: "Intermediate",
    duration: "8-12 minutes",
    description: "Follow Mohammed Ali's experience applying for business working capital, including GST analysis and business performance evaluation.",
    keyFeatures: [
      "GST return analysis",
      "Business vintage assessment",
      "Cash flow analysis",
      "Collateral evaluation",
      "Business growth projections"
    ],
    demoData: {
      user: {
        name: "Mohammed Ali Khan",
        aadhaar: "321654987012",
        pan: "WXYZF7890G",
        location: "Bangalore, Karnataka",
        business: "Electronics Retail",
        gst: "29WXYZF7890G1ZX",
        vintage: "8 years"
      },
      loan: {
        amount: 1200000,
        purpose: "Working capital for inventory",
        tenure: 36,
        interestRate: 14.0,
        expectedEMI: 41203
      }
    },
    workflow: [
      "Business registration verification",
      "GST compliance check",
      "Financial statement analysis",
      "Market assessment",
      "Risk evaluation",
      "Structured approval process"
    ]
  },
  {
    id: "first_time_home",
    title: "First-Time Home Buyer",
    category: "Home Loan",
    icon: "🏠",
    color: "bg-green-600",
    difficulty: "Advanced",
    duration: "15-20 minutes",
    description: "Experience Priya Sharma's comprehensive home loan journey, including property evaluation and legal verification.",
    keyFeatures: [
      "Property valuation integration",
      "Legal title verification",
      "Builder approval status",
      "Co-applicant assessment",
      "Insurance integration"
    ],
    demoData: {
      user: {
        name: "Priya Sharma",
        aadhaar: "987654321098",
        pan: "FGHIJ5678K",
        location: "Mumbai, Maharashtra",
        occupation: "Marketing Manager",
        salary: 125000
      },
      loan: {
        amount: 2500000,
        purpose: "First home purchase",
        tenure: 240,
        interestRate: 8.5,
        expectedEMI: 23394
      }
    },
    workflow: [
      "Property search and selection",
      "Loan eligibility assessment",
      "Property verification",
      "Legal document review",
      "Technical evaluation",
      "Final approval and disbursement"
    ]
  },
  {
    id: "student_education",
    title: "Student Education Loan",
    category: "Education",
    icon: "🎓",
    color: "bg-indigo-500",
    difficulty: "Intermediate",
    duration: "10-15 minutes",
    description: "Follow a student's education loan application for higher studies abroad, including co-applicant evaluation and scholarship integration.",
    keyFeatures: [
      "Institution verification",
      "Course fee structure analysis",
      "Co-applicant income assessment",
      "Scholarship integration",
      "Moratorium period calculation"
    ],
    demoData: {
      user: {
        name: "Vikram Singh",
        aadhaar: "456789123456",
        pan: "KLMNO9012P",
        location: "Pune, Maharashtra",
        course: "MS in Computer Science",
        institution: "Stanford University",
        coApplicant: "Parent (Government Employee)"
      },
      loan: {
        amount: 4500000,
        purpose: "Master's degree in USA",
        tenure: 120,
        interestRate: 10.5,
        expectedEMI: 59392
      }
    },
    workflow: [
      "Student profile creation",
      "Institution verification",
      "Course and fee validation",
      "Co-applicant assessment",
      "Scholarship consideration",
      "Loan structuring and approval"
    ]
  },
  {
    id: "vehicle_purchase",
    title: "Vehicle Loan - Commercial Use",
    category: "Vehicle",
    icon: "🚛",
    color: "bg-yellow-500",
    difficulty: "Intermediate",
    duration: "6-10 minutes",
    description: "Experience a commercial vehicle loan application for business expansion, including route profitability analysis.",
    keyFeatures: [
      "Vehicle selection assistance",
      "Route profitability analysis",
      "Driver verification",
      "Insurance integration",
      "Fleet management tools"
    ],
    demoData: {
      user: {
        name: "Amit Patel",
        aadhaar: "456789123456",
        pan: "KLMNO9012P",
        location: "Ahmedabad, Gujarat",
        business: "Transportation Services",
        experience: "5 years"
      },
      loan: {
        amount: 1800000,
        purpose: "Commercial vehicle for logistics",
        tenure: 60,
        interestRate: 11.5,
        expectedEMI: 39324
      }
    },
    workflow: [
      "Business verification",
      "Vehicle selection",
      "Route analysis",
      "Earning potential assessment",
      "Insurance evaluation",
      "Approval and delivery"
    ]
  }
];

const difficultyColors = {
  "Beginner": "bg-green-100 text-green-800",
  "Intermediate": "bg-yellow-100 text-yellow-800",
  "Advanced": "bg-red-100 text-red-800"
};

export default function DemoScenariosPage() {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const startDemo = (scenarioId: string) => {
    setSelectedScenario(scenarioId);
    setCurrentStep(0);
  };

  const nextStep = () => {
    const scenario = demoScenarios.find(s => s.id === selectedScenario);
    if (scenario && currentStep < scenario.workflow.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const resetDemo = () => {
    setSelectedScenario(null);
    setCurrentStep(0);
  };

  const selectedScenarioData = demoScenarios.find(s => s.id === selectedScenario);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Interactive Demo Scenarios</h1>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Experience real-world loan application journeys across different user personas and loan types. 
              Each scenario demonstrates our comprehensive digital lending platform capabilities.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!selectedScenario ? (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-blue-600">{demoScenarios.length}</div>
                <div className="text-gray-600">Demo Scenarios</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-green-600">12</div>
                <div className="text-gray-600">Loan Categories</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-purple-600">5-20</div>
                <div className="text-gray-600">Minutes Each</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-yellow-600">100%</div>
                <div className="text-gray-600">Interactive</div>
              </div>
            </div>

            {/* Scenarios Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demoScenarios.map((scenario) => (
                <div key={scenario.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className={`${scenario.color} p-4`}>
                    <div className="flex items-center justify-between">
                      <div className="text-4xl">{scenario.icon}</div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        difficultyColors[scenario.difficulty as keyof typeof difficultyColors]
                      }`}>
                        {scenario.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{scenario.title}</h3>
                      <span className="text-sm text-gray-500">{scenario.duration}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {scenario.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {scenario.keyFeatures.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {scenario.keyFeatures.length > 3 && (
                          <li className="text-blue-600 text-sm">
                            +{scenario.keyFeatures.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {scenario.workflow.length} steps
                      </div>
                      <button
                        onClick={() => startDemo(scenario.id)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center text-sm font-medium"
                      >
                        <PlayIcon className="h-4 w-4 mr-1" />
                        Start Demo
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience Live Scenarios?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Each demo scenario uses real synthetic data and follows actual loan processing workflows. 
                Select any scenario above to begin your interactive journey.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Link
                  href="/loans/apply"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
                >
                  Apply for Real Loan
                </Link>
                <Link
                  href="/admin"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Admin Dashboard
                </Link>
              </div>
            </div>
          </>
        ) : (
          /* Demo Walkthrough */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Demo Header */}
              <div className={`${selectedScenarioData?.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-5xl mr-4">{selectedScenarioData?.icon}</div>
                    <div>
                      <h1 className="text-2xl font-bold">{selectedScenarioData?.title}</h1>
                      <p className="opacity-90">{selectedScenarioData?.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={resetDemo}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    Exit Demo
                  </button>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                  <div
                    className="bg-white h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentStep + 1) / selectedScenarioData!.workflow.length) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm mt-2 opacity-90">
                  <span>Step {currentStep + 1} of {selectedScenarioData?.workflow.length}</span>
                  <span>{Math.round(((currentStep + 1) / selectedScenarioData!.workflow.length) * 100)}% Complete</span>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* User Profile */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <UserIcon className="h-5 w-5 mr-2" />
                      User Profile
                    </h3>
                    <div className="space-y-3 text-sm">
                      {Object.entries(selectedScenarioData?.demoData.user || {}).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="font-medium text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Loan Details */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <CurrencyRupeeIcon className="h-5 w-5 mr-2" />
                      Loan Details
                    </h3>
                    <div className="space-y-3 text-sm">
                      {Object.entries(selectedScenarioData?.demoData.loan || {}).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="font-medium text-gray-900">
                            {key.includes('amount') || key.includes('EMI') ? `₹${Number(value).toLocaleString()}` : value}
                            {key.includes('Rate') && '%'}
                            {key.includes('tenure') && ' months'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Current Step */}
                <div className="mt-8 p-6 border-2 border-blue-200 rounded-lg bg-blue-50">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Current Step: {selectedScenarioData?.workflow[currentStep]}
                  </h3>
                  <p className="text-blue-800 mb-4">
                    {currentStep === 0 && "Beginning the loan application process with user registration and basic information collection."}
                    {currentStep === 1 && "Performing identity verification and document validation using government databases."}
                    {currentStep === 2 && "Conducting comprehensive risk assessment and credit evaluation."}
                    {currentStep === 3 && "Analyzing financial capacity and loan eligibility criteria."}
                    {currentStep === 4 && "Processing final approval and preparing loan documentation."}
                    {currentStep === 5 && "Completing the loan disbursement and post-approval processes."}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-blue-700">
                      <span className="flex items-center">
                        <DocumentTextIcon className="h-4 w-4 mr-1" />
                        Documents processed
                      </span>
                      <span className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 mr-1" />
                        Verification complete
                      </span>
                    </div>
                    
                    {currentStep < selectedScenarioData!.workflow.length - 1 ? (
                      <button
                        onClick={nextStep}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
                      >
                        Next Step
                        <ArrowRightIcon className="h-4 w-4 ml-2" />
                      </button>
                    ) : (
                      <div className="flex items-center space-x-4">
                        <span className="text-green-600 font-medium flex items-center">
                          <CheckCircleIcon className="h-5 w-5 mr-1" />
                          Demo Complete!
                        </span>
                        <Link
                          href="/loans/apply"
                          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                        >
                          Apply Now
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                {/* Workflow Overview */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Complete Workflow</h3>
                  <div className="space-y-2">
                    {selectedScenarioData?.workflow.map((step, index) => (
                      <div
                        key={index}
                        className={`flex items-center p-3 rounded-lg ${
                          index <= currentStep 
                            ? 'bg-green-50 border border-green-200' 
                            : 'bg-gray-50 border border-gray-200'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${
                          index <= currentStep 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          {index < currentStep ? '✓' : index + 1}
                        </div>
                        <span className={`${
                          index <= currentStep ? 'text-green-800 font-medium' : 'text-gray-600'
                        }`}>
                          {step}
                        </span>
                        {index === currentStep && (
                          <span className="ml-auto text-blue-600 text-sm font-medium">Current</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}