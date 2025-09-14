"use client";

import { useState } from "react";
import { 
  ClockIcon, 
  CheckCircleIcon, 
  XCircleIcon,
  MagnifyingGlassIcon,
  CurrencyRupeeIcon,
  CalendarIcon,
  DocumentTextIcon
} from "@heroicons/react/24/outline";

export default function TrackApplicationPage() {
  const [applicationId, setApplicationId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [applicationData, setApplicationData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Mock data for demo
  const mockApplications: { [key: string]: any } = {
    "LA001": {
      id: "LA001",
      loanType: "Personal Loan",
      amount: 500000,
      appliedDate: "2024-01-15",
      status: "APPROVED",
      disbursedAmount: 500000,
      emi: 12500,
      tenure: 48,
      interestRate: 12.5,
      nextDueDate: "2024-02-15",
      processingStep: 6,
      totalSteps: 6,
      applicantName: "Rajesh Kumar",
      mobileNumber: "+91-9876543210",
      steps: [
        { name: "Application Submitted", status: "completed", date: "2024-01-15" },
        { name: "Document Verification", status: "completed", date: "2024-01-16" },
        { name: "KYC Verification", status: "completed", date: "2024-01-17" },
        { name: "Credit Assessment", status: "completed", date: "2024-01-18" },
        { name: "Final Approval", status: "completed", date: "2024-01-19" },
        { name: "Amount Disbursed", status: "completed", date: "2024-01-20" }
      ]
    },
    "LA002": {
      id: "LA002", 
      loanType: "Home Loan",
      amount: 2500000,
      appliedDate: "2024-01-20",
      status: "IN_PROGRESS",
      processingStep: 4,
      totalSteps: 6,
      interestRate: 8.5,
      tenure: 240,
      applicantName: "Priya Sharma",
      mobileNumber: "+91-8765432109",
      steps: [
        { name: "Application Submitted", status: "completed", date: "2024-01-20" },
        { name: "Document Verification", status: "completed", date: "2024-01-21" },
        { name: "Property Verification", status: "completed", date: "2024-01-23" },
        { name: "Credit Assessment", status: "in_progress", date: null },
        { name: "Legal Verification", status: "pending", date: null },
        { name: "Final Approval", status: "pending", date: null }
      ]
    },
    "LA003": {
      id: "LA003",
      loanType: "Vehicle Loan", 
      amount: 800000,
      appliedDate: "2024-01-25",
      status: "UNDER_REVIEW",
      processingStep: 2,
      totalSteps: 6,
      interestRate: 9.5,
      tenure: 60,
      applicantName: "Amit Patel",
      mobileNumber: "+91-7654321098",
      steps: [
        { name: "Application Submitted", status: "completed", date: "2024-01-25" },
        { name: "Document Verification", status: "in_progress", date: null },
        { name: "Vehicle Verification", status: "pending", date: null },
        { name: "Credit Assessment", status: "pending", date: null },
        { name: "Final Approval", status: "pending", date: null },
        { name: "Amount Disbursed", status: "pending", date: null }
      ]
    }
  };

  const handleSearch = async () => {
    setError("");
    setLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const application = mockApplications[applicationId.toUpperCase()];
      
      if (!application) {
        setError("Application not found. Please check your Application ID.");
        setApplicationData(null);
      } else if (application.mobileNumber !== mobileNumber) {
        setError("Mobile number does not match our records.");
        setApplicationData(null);
      } else {
        setApplicationData(application);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setApplicationData(null);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "APPROVED": return "text-green-600 bg-green-100";
      case "IN_PROGRESS": return "text-blue-600 bg-blue-100";
      case "UNDER_REVIEW": return "text-yellow-600 bg-yellow-100";
      case "REJECTED": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case "in_progress":
        return <ClockIcon className="h-5 w-5 text-blue-500" />;
      case "rejected":
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      default:
        return <div className="h-5 w-5 rounded-full border-2 border-gray-300" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold flex items-center justify-center">
              <DocumentTextIcon className="h-8 w-8 mr-3" />
              Track Your Application
            </h1>
            <p className="text-blue-100 mt-2">Enter your details to check the status of your loan application</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Application Tracking</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Application ID *
              </label>
              <input
                type="text"
                value={applicationId}
                onChange={(e) => setApplicationId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., LA001"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Registered Mobile Number *
              </label>
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+91-XXXXXXXXXX"
                disabled={loading}
              />
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <button
            onClick={handleSearch}
            disabled={!applicationId || !mobileNumber || loading}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center font-semibold"
          >
            {loading ? (
              <>
                <ClockIcon className="animate-spin h-5 w-5 mr-2" />
                Searching...
              </>
            ) : (
              <>
                <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                Track Application
              </>
            )}
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have your Application ID? 
              <a href="/support" className="text-blue-600 hover:text-blue-700 ml-1">Contact Support</a>
            </p>
          </div>
        </div>

        {/* Application Details */}
        {applicationData && (
          <div className="space-y-8">
            {/* Basic Information */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Application Details</h2>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(applicationData.status)}`}>
                  {applicationData.status.replace('_', ' ')}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <DocumentTextIcon className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">Application ID</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{applicationData.id}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CurrencyRupeeIcon className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">Loan Amount</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">₹{applicationData.amount.toLocaleString()}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CalendarIcon className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">Applied Date</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    {new Date(applicationData.appliedDate).toLocaleDateString()}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-gray-600">Loan Type</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{applicationData.loanType}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-gray-600">Interest Rate</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{applicationData.interestRate}% p.a.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-gray-600">Tenure</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    {applicationData.tenure} months
                  </p>
                </div>
              </div>

              {applicationData.emi && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-700">Monthly EMI</p>
                      <p className="text-2xl font-bold text-green-800">₹{applicationData.emi.toLocaleString()}</p>
                    </div>
                    {applicationData.nextDueDate && (
                      <div className="text-right">
                        <p className="text-sm text-green-700">Next Due Date</p>
                        <p className="text-lg font-semibold text-green-800">
                          {new Date(applicationData.nextDueDate).toLocaleDateString()}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Progress Timeline */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Application Progress</h3>
              
              <div className="space-y-6">
                {applicationData.steps.map((step: any, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      {getStepIcon(step.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-medium ${
                          step.status === 'completed' ? 'text-gray-900' :
                          step.status === 'in_progress' ? 'text-blue-600' :
                          step.status === 'rejected' ? 'text-red-600' : 'text-gray-500'
                        }`}>
                          {step.name}
                        </h4>
                        {step.date && (
                          <span className="text-sm text-gray-500">
                            {new Date(step.date).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                      {step.status === 'in_progress' && (
                        <p className="text-sm text-blue-600 mt-1">Currently being processed...</p>
                      )}
                      {step.status === 'pending' && (
                        <p className="text-sm text-gray-500 mt-1">Waiting for previous step to complete</p>
                      )}
                    </div>
                    {index < applicationData.steps.length - 1 && (
                      <div className="absolute left-6 mt-8 w-0.5 h-6 bg-gray-200"></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>What's next?</strong> {
                    applicationData.status === 'APPROVED' 
                      ? 'Your loan has been approved and amount has been disbursed to your account.'
                      : applicationData.status === 'IN_PROGRESS'
                      ? 'Your application is currently under review. You will be notified of any updates via SMS and email.'
                      : 'Please wait while we process your application. You can track progress here anytime.'
                  }
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Customer Support</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📞 1800-FIN-AGENTIX (24/7)</p>
                    <p>📧 support@fin-agentix.com</p>
                    <p>💬 Live chat available on website</p>
                    <p>🏢 Head Office: Bangalore</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Loan Officer</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>👤 Dedicated relationship manager assigned</p>
                    <p>📞 Will contact you for any required documents</p>
                    <p>📧 Updates sent to registered email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Demo Instructions */}
        {!applicationData && !loading && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">Demo Instructions</h3>
            <p className="text-yellow-700 mb-3">Try these sample applications:</p>
            <div className="space-y-2 text-sm text-yellow-700">
              <div className="bg-white p-3 rounded-lg">
                <strong>Application ID:</strong> LA001 | <strong>Mobile:</strong> +91-9876543210 (Approved Personal Loan)
              </div>
              <div className="bg-white p-3 rounded-lg">
                <strong>Application ID:</strong> LA002 | <strong>Mobile:</strong> +91-8765432109 (In Progress Home Loan)
              </div>
              <div className="bg-white p-3 rounded-lg">
                <strong>Application ID:</strong> LA003 | <strong>Mobile:</strong> +91-7654321098 (Under Review Vehicle Loan)
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}