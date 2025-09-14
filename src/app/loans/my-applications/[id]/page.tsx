"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { 
  ArrowLeftIcon,
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  CurrencyRupeeIcon,
  CalendarIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  BriefcaseIcon,
  CreditCardIcon,
  EyeIcon,
  ArrowDownTrayIcon
} from "@heroicons/react/24/outline";

// Mock detailed application data
const getApplicationDetails = (id: string) => ({
  id: id,
  applicationNumber: `FIN${id.slice(-6).toUpperCase()}`,
  loanType: "Personal Loan",
  amount: 500000,
  appliedDate: "2024-01-20T10:30:00Z",
  status: "UNDER_REVIEW",
  emi: 12850,
  tenure: 48,
  interestRate: 12.5,
  processingFee: 5000,
  
  // Application Timeline
  timeline: [
    {
      status: "APPLICATION_SUBMITTED",
      title: "Application Submitted",
      description: "Your loan application has been successfully submitted",
      date: "2024-01-20T10:30:00Z",
      completed: true
    },
    {
      status: "DOCUMENT_VERIFICATION",
      title: "Document Verification",
      description: "Documents are being verified by our team",
      date: "2024-01-20T14:00:00Z",
      completed: true
    },
    {
      status: "CREDIT_ASSESSMENT",
      title: "Credit Assessment",
      description: "Credit score and financial profile evaluation",
      date: "2024-01-21T09:00:00Z",
      completed: true
    },
    {
      status: "UNDERWRITING_REVIEW",
      title: "Underwriting Review",
      description: "Application under review by underwriting team",
      date: null,
      completed: false,
      current: true
    },
    {
      status: "APPROVAL_DECISION",
      title: "Approval Decision",
      description: "Final approval decision",
      date: null,
      completed: false
    },
    {
      status: "DISBURSEMENT",
      title: "Loan Disbursement",
      description: "Loan amount transfer to your account",
      date: null,
      completed: false
    }
  ],

  // Applicant Details
  applicant: {
    name: "Rajesh Kumar Singh",
    email: "rajesh.kumar@email.com",
    phone: "+91 98765 43210",
    dateOfBirth: "1990-05-15",
    address: "B-204, Shanti Apartments, Andheri West, Mumbai - 400058",
    employment: {
      type: "Salaried",
      company: "Tech Solutions Pvt Ltd",
      designation: "Senior Software Engineer",
      monthlyIncome: 85000,
      workExperience: 8
    }
  },

  // Documents
  documents: [
    {
      type: "Aadhaar Card",
      status: "VERIFIED",
      uploadDate: "2024-01-20T10:32:00Z",
      verifiedDate: "2024-01-20T14:15:00Z"
    },
    {
      type: "PAN Card", 
      status: "VERIFIED",
      uploadDate: "2024-01-20T10:35:00Z",
      verifiedDate: "2024-01-20T14:20:00Z"
    },
    {
      type: "Salary Slips (3 months)",
      status: "VERIFIED",
      uploadDate: "2024-01-20T10:40:00Z",
      verifiedDate: "2024-01-20T16:30:00Z"
    },
    {
      type: "Bank Statements (6 months)",
      status: "VERIFIED",
      uploadDate: "2024-01-20T10:45:00Z",
      verifiedDate: "2024-01-21T10:00:00Z"
    },
    {
      type: "Employment Letter",
      status: "PENDING",
      uploadDate: "2024-01-20T10:50:00Z",
      verifiedDate: null
    }
  ],

  // Loan Terms
  loanTerms: {
    principalAmount: 500000,
    processingFee: 5000,
    gst: 900,
    totalDeductions: 5900,
    netDisbursement: 494100,
    firstEMIDate: "2024-03-01",
    lastEMIDate: "2027-02-28"
  },

  // Credit Assessment
  creditAssessment: {
    cibilScore: 742,
    creditHistory: "Good",
    riskCategory: "MEDIUM",
    eligibleAmount: 600000,
    recommendedAmount: 500000,
    debtToIncomeRatio: 15
  }
});

const statusColors = {
  PENDING: "text-yellow-600 bg-yellow-100",
  UNDER_REVIEW: "text-blue-600 bg-blue-100",
  APPROVED: "text-green-600 bg-green-100",
  REJECTED: "text-red-600 bg-red-100",
  DISBURSED: "text-purple-600 bg-purple-100"
};

const documentStatusColors = {
  VERIFIED: "text-green-600 bg-green-100",
  PENDING: "text-yellow-600 bg-yellow-100",
  REJECTED: "text-red-600 bg-red-100"
};

export default function ApplicationDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { data: session, status } = useSession();
  const [application, setApplication] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (params?.id) {
      // Simulate API call delay
      setTimeout(() => {
        setApplication(getApplicationDetails(params.id as string));
        setLoading(false);
      }, 1000);
    }
  }, [params?.id, status, router]);

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} L`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  const downloadDocument = (docType: string) => {
    // Simulate document download
    alert(`Downloading ${docType}...`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading application details...</p>
        </div>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Not Found</h2>
          <p className="text-gray-600 mb-6">The requested application could not be found.</p>
          <Link
            href="/loans/my-applications"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Applications
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", name: "Overview", icon: DocumentTextIcon },
    { id: "timeline", name: "Timeline", icon: ClockIcon },
    { id: "documents", name: "Documents", icon: DocumentTextIcon },
    { id: "loan-terms", name: "Loan Terms", icon: CurrencyRupeeIcon },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link 
              href="/loans/my-applications"
              className="text-blue-100 hover:text-white"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Application Details</h1>
              <p className="text-blue-100 mt-1">{application.applicationNumber} • {application.loanType}</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold">{formatCurrency(application.amount)}</div>
            <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
              statusColors[application.status as keyof typeof statusColors]
            }`}>
              {application.status.replace('_', ' ')}
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="px-6 flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Application Summary */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Application Summary</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-600">Application Number</span>
                        <p className="font-semibold">{application.applicationNumber}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Applied Date</span>
                        <p className="font-semibold">{new Date(application.appliedDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Loan Type</span>
                        <p className="font-semibold">{application.loanType}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Status</span>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          statusColors[application.status as keyof typeof statusColors]
                        }`}>
                          {application.status.replace('_', ' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Loan Details</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="text-sm text-blue-600">Loan Amount</div>
                      <div className="text-xl font-bold text-blue-900">{formatCurrency(application.amount)}</div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="text-sm text-green-600">Monthly EMI</div>
                      <div className="text-xl font-bold text-green-900">₹{application.emi.toLocaleString()}</div>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                      <div className="text-sm text-purple-600">Interest Rate</div>
                      <div className="text-xl font-bold text-purple-900">{application.interestRate}% p.a.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applicant Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Applicant Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <UserIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm text-gray-600">Full Name</div>
                        <div className="font-semibold">{application.applicant.name}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm text-gray-600">Email</div>
                        <div className="font-semibold">{application.applicant.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <PhoneIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm text-gray-600">Phone</div>
                        <div className="font-semibold">{application.applicant.phone}</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPinIcon className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-600">Address</div>
                        <div className="font-semibold">{application.applicant.address}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <BriefcaseIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm text-gray-600">Employment</div>
                        <div className="font-semibold">{application.applicant.employment.company}</div>
                        <div className="text-sm text-gray-500">{application.applicant.employment.designation}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Timeline Tab */}
          {activeTab === "timeline" && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Application Timeline</h3>
              <div className="space-y-6">
                {application.timeline.map((step: any, index: number) => (
                  <div key={step.status} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.completed 
                          ? 'bg-green-100 text-green-600' 
                          : step.current 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-gray-100 text-gray-400'
                      }`}>
                        {step.completed ? (
                          <CheckCircleIcon className="w-5 h-5" />
                        ) : step.current ? (
                          <ClockIcon className="w-5 h-5" />
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                        )}
                      </div>
                      {index < application.timeline.length - 1 && (
                        <div className="ml-4 mt-2 h-12 w-0.5 bg-gray-200"></div>
                      )}
                    </div>
                    <div className="ml-4">
                      <h4 className={`font-semibold ${
                        step.completed || step.current ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                      {step.date && (
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(step.date).toLocaleString()}
                        </p>
                      )}
                      {step.current && (
                        <div className="mt-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            In Progress
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === "documents" && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Document Verification</h3>
              <div className="space-y-4">
                {application.documents.map((doc: any, index: number) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <DocumentTextIcon className="h-6 w-6 text-gray-400 mr-3" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{doc.type}</h4>
                          <p className="text-sm text-gray-500">
                            Uploaded: {new Date(doc.uploadDate).toLocaleString()}
                          </p>
                          {doc.verifiedDate && (
                            <p className="text-sm text-gray-500">
                              Verified: {new Date(doc.verifiedDate).toLocaleString()}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          documentStatusColors[doc.status as keyof typeof documentStatusColors]
                        }`}>
                          {doc.status}
                        </span>
                        <button
                          onClick={() => downloadDocument(doc.type)}
                          className="text-blue-600 hover:text-blue-700"
                          title="Download Document"
                        >
                          <ArrowDownTrayIcon className="h-4 w-4" />
                        </button>
                        <button
                          className="text-blue-600 hover:text-blue-700"
                          title="View Document"
                        >
                          <EyeIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Loan Terms Tab */}
          {activeTab === "loan-terms" && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Loan Terms & Conditions</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Disbursement Details</h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Principal Amount</span>
                      <span className="font-semibold">{formatCurrency(application.loanTerms.principalAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Processing Fee</span>
                      <span className="font-semibold">₹{application.loanTerms.processingFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">GST (18%)</span>
                      <span className="font-semibold">₹{application.loanTerms.gst.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 flex justify-between">
                      <span className="text-gray-600">Total Deductions</span>
                      <span className="font-semibold text-red-600">₹{application.loanTerms.totalDeductions.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 flex justify-between">
                      <span className="font-semibold text-gray-900">Net Disbursement</span>
                      <span className="font-bold text-green-600">{formatCurrency(application.loanTerms.netDisbursement)}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Repayment Schedule</h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly EMI</span>
                      <span className="font-semibold">₹{application.emi.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tenure</span>
                      <span className="font-semibold">{application.tenure} months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interest Rate</span>
                      <span className="font-semibold">{application.interestRate}% p.a.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">First EMI Date</span>
                      <span className="font-semibold">{new Date(application.loanTerms.firstEMIDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last EMI Date</span>
                      <span className="font-semibold">{new Date(application.loanTerms.lastEMIDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Credit Assessment</h4>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">{application.creditAssessment.cibilScore}</div>
                      <div className="text-sm text-blue-600">CIBIL Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">{application.creditAssessment.debtToIncomeRatio}%</div>
                      <div className="text-sm text-blue-600">Debt-to-Income Ratio</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">{application.creditAssessment.riskCategory}</div>
                      <div className="text-sm text-blue-600">Risk Category</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}