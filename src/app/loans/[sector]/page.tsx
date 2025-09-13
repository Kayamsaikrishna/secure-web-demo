"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, CurrencyRupeeIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

const loanDetails = {
  personal: {
    name: "Personal Loans",
    icon: "👤",
    color: "bg-blue-500",
    description: "Get instant personal loans for your immediate financial needs with minimal documentation and quick approval process.",
    amount: "₹2L - ₹15L",
    rate: "12.5%",
    tenure: "12-60 months",
    processingTime: "24-48 hours",
    features: [
      "No collateral or security required",
      "Quick approval within 24 hours",
      "Flexible repayment tenure",
      "Minimal documentation required",
      "Competitive interest rates",
      "Pre-closure facility available"
    ],
    eligibility: [
      "Age: 21 to 60 years",
      "Minimum monthly income: ₹25,000",
      "CIBIL score: 650 and above",
      "Employment: Salaried or Self-employed",
      "Work experience: Minimum 2 years",
      "Bank account with regular transactions"
    ],
    documents: [
      "Aadhaar Card (Identity proof)",
      "PAN Card (Tax identification)",
      "Salary slips (Last 3 months)",
      "Bank statements (Last 6 months)",
      "Form 16 or ITR (Last 2 years)",
      "Employment certificate",
      "Recent passport size photographs"
    ],
    process: [
      "Fill online application form",
      "Upload required documents",
      "Instant eligibility check",
      "Application review and verification",
      "Loan approval and sanction letter",
      "Agreement signing and disbursement"
    ],
    useCases: [
      "Medical emergencies and healthcare expenses",
      "Wedding and family celebration costs",
      "Home renovation and furniture purchase",
      "Travel and vacation expenses",
      "Debt consolidation and credit card payments",
      "Education and skill development costs"
    ]
  },
  home: {
    name: "Home Loans",
    icon: "🏠",
    color: "bg-green-500",
    description: "Fulfill your dream of owning a home with our competitive home loan rates and flexible repayment options.",
    amount: "₹5L - ₹5Cr",
    rate: "8.5%",
    tenure: "5-25 years",
    processingTime: "7-15 days",
    features: [
      "Tax benefits under Section 80C and 24B",
      "RERA verified projects and properties",
      "Flexible repayment options",
      "Property insurance included",
      "Balance transfer facility",
      "Top-up loan facility available"
    ],
    eligibility: [
      "Age: 23 to 65 years",
      "Minimum monthly income: ₹40,000",
      "CIBIL score: 650 and above",
      "Stable employment for 3+ years",
      "Property documents verified",
      "Debt-to-income ratio under 50%"
    ],
    documents: [
      "Property sale agreement",
      "Approved building plan",
      "NOC from builder/society",
      "Property registration documents",
      "Income and employment proof",
      "Bank statements and ITR",
      "Property valuation report"
    ],
    process: [
      "Property selection and price negotiation",
      "Home loan application submission",
      "Document verification and processing",
      "Property technical and legal verification",
      "Loan approval and sanction letter",
      "Property registration and disbursement"
    ],
    useCases: [
      "Purchase of new residential property",
      "Buying resale flats and apartments",
      "Construction of new house",
      "Home extension and major renovation",
      "Plot purchase for future construction",
      "Balance transfer from other banks"
    ]
  },
  vehicle: {
    name: "Vehicle Loans",
    icon: "🚗",
    color: "bg-purple-500",
    description: "Drive your dream car today with our easy vehicle financing options and competitive interest rates.",
    amount: "₹2L - ₹50L",
    rate: "9.5%",
    tenure: "1-7 years",
    processingTime: "2-5 days",
    features: [
      "Up to 100% on-road price financing",
      "Comprehensive insurance included",
      "Quick processing and approval",
      "Flexible down payment options",
      "Extended warranty coverage",
      "Doorstep documentation service"
    ],
    eligibility: [
      "Age: 21 to 65 years",
      "Minimum monthly income: ₹30,000",
      "CIBIL score: 600 and above",
      "Valid driving license required",
      "Stable employment history",
      "Existing relationship preferred"
    ],
    documents: [
      "Vehicle proforma invoice",
      "Driving license (valid)",
      "RC book (for used vehicles)",
      "Insurance documents",
      "Income and employment proof",
      "Bank statements (3 months)",
      "Address and identity proof"
    ],
    process: [
      "Vehicle selection and price finalization",
      "Loan application with documents",
      "Credit assessment and verification",
      "Vehicle inspection (for used cars)",
      "Loan approval and documentation",
      "Vehicle registration and delivery"
    ],
    useCases: [
      "New car purchase from authorized dealers",
      "Used car financing with warranties",
      "Commercial vehicle for business",
      "Luxury car financing options",
      "Vehicle refinancing and upgrades",
      "Fleet financing for businesses"
    ]
  },
  business: {
    name: "Business Loans",
    icon: "💼",
    color: "bg-indigo-500",
    description: "Fuel your business growth with our flexible business loans designed for MSMEs and entrepreneurs.",
    amount: "₹1L - ₹1Cr",
    rate: "14.0%",
    tenure: "1-5 years",
    processingTime: "5-10 days",
    features: [
      "GST-based quick assessment",
      "Working capital support",
      "Business expansion funding",
      "Flexible repayment schedules",
      "Minimal collateral requirements",
      "Digital loan management"
    ],
    eligibility: [
      "Business vintage: 3+ years",
      "Annual turnover: ₹10L+",
      "GST registration mandatory",
      "Good credit history required",
      "Profitable business operations",
      "Clear business plan"
    ],
    documents: [
      "GST returns (Last 12 months)",
      "ITR with computation (2 years)",
      "Bank statements (12 months)",
      "Business registration certificate",
      "Financial statements audited",
      "Business profile and plan",
      "Collateral documents if any"
    ],
    process: [
      "Business assessment and planning",
      "Loan application with financials",
      "Credit analysis and due diligence",
      "Business verification visit",
      "Loan structuring and approval",
      "Documentation and disbursement"
    ],
    useCases: [
      "Working capital for operations",
      "Machinery and equipment purchase",
      "Business expansion and new locations",
      "Inventory and stock financing",
      "Technology upgrades and automation",
      "Contract and order financing"
    ]
  },
  education: {
    name: "Education Loans",
    icon: "🎓",
    color: "bg-yellow-500",
    description: "Invest in your future with our comprehensive education loans for higher studies in India and abroad.",
    amount: "₹1L - ₹75L",
    rate: "10.5%",
    tenure: "5-15 years",
    processingTime: "7-14 days",
    features: [
      "Moratorium period during studies",
      "Covers complete course expenses",
      "Tax benefits under Section 80E",
      "Study abroad loan facility",
      "Co-applicant based assessment",
      "Flexible repayment options"
    ],
    eligibility: [
      "Admission confirmed in recognized institution",
      "Co-applicant with stable income",
      "Good academic track record",
      "Course recognized by authorities",
      "Age limit: 16-35 years",
      "Future earning potential"
    ],
    documents: [
      "Admission letter from institution",
      "Course fee structure details",
      "Academic records and certificates",
      "Co-applicant income documents",
      "Bank statements and ITR",
      "Passport (for abroad studies)",
      "Entrance exam scorecards"
    ],
    process: [
      "Course and institution selection",
      "Admission confirmation process",
      "Education loan application",
      "Document verification and assessment",
      "Loan approval and sanction",
      "Fee payment and disbursement"
    ],
    useCases: [
      "Engineering and medical courses",
      "MBA and management programs",
      "Study abroad programs",
      "Professional certification courses",
      "PhD and research programs",
      "Skill development and vocational training"
    ]
  },
  agriculture: {
    name: "Agriculture Loans",
    icon: "🌾",
    color: "bg-green-600",
    description: "Support your farming activities with our specialized agriculture loans and government subsidies.",
    amount: "₹50K - ₹20L",
    rate: "7.0%",
    tenure: "6-36 months",
    processingTime: "10-15 days",
    features: [
      "Government interest subsidy available",
      "Weather insurance coverage",
      "Crop-based flexible repayment",
      "Seasonal loan facility",
      "Input cost financing",
      "Kisan Credit Card facility"
    ],
    eligibility: [
      "Land ownership or lease documents",
      "Farming experience required",
      "Valid revenue records",
      "Crop cultivation plan",
      "Age: 18-70 years",
      "Active farming operations"
    ],
    documents: [
      "Land ownership documents",
      "Revenue records (7/12 extract)",
      "Crop cultivation plan",
      "Identity and address proof",
      "Bank account statements",
      "Previous loan repayment history",
      "Soil health card"
    ],
    process: [
      "Land verification and assessment",
      "Crop plan evaluation",
      "Loan application processing",
      "Field verification visit",
      "Subsidy calculation and approval",
      "Disbursement as per requirement"
    ],
    useCases: [
      "Crop cultivation and input costs",
      "Farm equipment and machinery",
      "Irrigation and infrastructure",
      "Livestock and dairy farming",
      "Horticulture and plantation",
      "Food processing and storage"
    ]
  }
};

export default function LoanSectorPage() {
  const params = useParams();
  const sector = params?.sector as string;
  
  const loan = loanDetails[sector as keyof typeof loanDetails];
  
  if (!loan) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Loan Type Not Found</h1>
          <p className="text-gray-600 mb-8">The requested loan type does not exist.</p>
          <Link
            href="/loans"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            View All Loans
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`${loan.color} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="text-6xl mb-4">{loan.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{loan.name}</h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">{loan.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <CurrencyRupeeIcon className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="text-2xl font-bold">{loan.amount}</div>
                <div className="text-sm opacity-80">Loan Amount</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{loan.rate}*</div>
                <div className="text-sm opacity-80">Interest Rate</div>
              </div>
              <div className="text-center">
                <ClockIcon className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="text-2xl font-bold">{loan.tenure}</div>
                <div className="text-sm opacity-80">Tenure</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{loan.processingTime}</div>
                <div className="text-sm opacity-80">Processing Time</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/loans/apply?type=${sector}`}
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center"
              >
                Apply Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#calculator"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Calculate EMI
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loan.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Eligibility Criteria */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-3">
                {loan.eligibility.map((criteria, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Required Documents */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-3">
                {loan.documents.map((document, index) => (
                  <li key={index} className="flex items-start">
                    <DocumentTextIcon className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{document}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Application Process */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loan.process.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <p className="text-gray-700 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loan.useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <p className="text-gray-700 font-medium">{useCase}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Apply?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get started with your {loan.name.toLowerCase()} application today and experience our quick approval process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/loans/apply?type=${sector}`}
              className={`${loan.color} text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 flex items-center justify-center`}
            >
              Start Application
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              Contact Expert
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}