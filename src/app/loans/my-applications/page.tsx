"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ClockIcon, 
  CheckCircleIcon, 
  XCircleIcon, 
  EyeIcon,
  DocumentTextIcon,
  CurrencyRupeeIcon,
  CalendarIcon,
  ArrowPathIcon
} from "@heroicons/react/24/outline";

// Mock data for demo purposes
const mockApplications = [
  {
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
    documents: [
      { name: "Application Form", status: "completed" },
      { name: "KYC Verification", status: "completed" },
      { name: "Credit Score Check", status: "completed" },
      { name: "Income Verification", status: "completed" },
      { name: "Final Approval", status: "completed" },
      { name: "Disbursement", status: "completed" }
    ]
  },
  {
    id: "LA002", 
    loanType: "Home Loan",
    amount: 2500000,
    appliedDate: "2024-01-20",
    status: "IN_PROGRESS",
    processingStep: 4,
    totalSteps: 6,
    interestRate: 8.5,
    tenure: 240,
    documents: [
      { name: "Application Form", status: "completed" },
      { name: "KYC Verification", status: "completed" },
      { name: "Property Verification", status: "completed" },
      { name: "Credit Assessment", status: "in_progress" },
      { name: "Legal Verification", status: "pending" },
      { name: "Final Approval", status: "pending" }
    ]
  },
  {
    id: "LA003",
    loanType: "Vehicle Loan", 
    amount: 800000,
    appliedDate: "2024-01-25",
    status: "UNDER_REVIEW",
    processingStep: 2,
    totalSteps: 6,
    interestRate: 9.5,
    tenure: 60,
    documents: [
      { name: "Application Form", status: "completed" },
      { name: "KYC Verification", status: "in_progress" },
      { name: "Income Verification", status: "pending" },
      { name: "Vehicle Verification", status: "pending" },
      { name: "Credit Assessment", status: "pending" },
      { name: "Final Approval", status: "pending" }
    ]
  },
  {
    id: "LA004",
    loanType: "Business Loan",
    amount: 1200000,
    appliedDate: "2024-01-10",
    status: "REJECTED",
    processingStep: 3,
    totalSteps: 6,
    interestRate: 14.0,
    tenure: 36,
    rejectionReason: "Insufficient business turnover for requested amount",
    documents: [
      { name: "Application Form", status: "completed" },
      { name: "KYC Verification", status: "completed" },
      { name: "Business Verification", status: "completed" },
      { name: "Credit Assessment", status: "rejected" },
      { name: "Final Approval", status: "rejected" },
      { name: "Disbursement", status: "rejected" }
    ]
  }
];

const statusColors = {
  APPROVED: "bg-green-100 text-green-800 border-green-200",
  IN_PROGRESS: "bg-blue-100 text-blue-800 border-blue-200", 
  UNDER_REVIEW: "bg-yellow-100 text-yellow-800 border-yellow-200",
  REJECTED: "bg-red-100 text-red-800 border-red-200",
  DISBURSED: "bg-purple-100 text-purple-800 border-purple-200"
};

const statusIcons = {
  APPROVED: CheckCircleIcon,
  IN_PROGRESS: ClockIcon,
  UNDER_REVIEW: ArrowPathIcon,
  REJECTED: XCircleIcon,
  DISBURSED: CurrencyRupeeIcon
};

export default function MyApplicationsPage() {
  const [applications, setApplications] = useState(mockApplications);
  const [selectedApplication, setSelectedApplication] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);

  const getProgressPercentage = (step: number, total: number) => {
    return Math.round((step / total) * 100);
  };

  const handleViewDetails = (application: any) => {
    setSelectedApplication(application);
    setShowDetails(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">My Loan Applications</h1>
              <p className="text-blue-100 mt-1">Track the status of all your loan applications</p>
            </div>
            <Link
              href="/loans/apply"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
            >
              Apply for New Loan
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Applications Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <DocumentTextIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold text-gray-900">{applications.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircleIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-gray-900">
                  {applications.filter(app => app.status === 'APPROVED').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <ClockIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">
                  {applications.filter(app => app.status === 'IN_PROGRESS' || app.status === 'UNDER_REVIEW').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <CurrencyRupeeIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Approved Amount</p>
                <p className="text-2xl font-bold text-gray-900">
                  ₹{applications
                    .filter(app => app.status === 'APPROVED' && app.disbursedAmount)
                    .reduce((total, app) => total + app.disbursedAmount, 0)
                    .toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Applications List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Applications</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Application
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applied Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.map((application) => {
                  const StatusIcon = statusIcons[application.status as keyof typeof statusIcons];
                  
                  return (
                    <tr key={application.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {application.id}
                          </div>
                          <div className="text-sm text-gray-500">
                            {application.loanType}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          ₹{application.amount.toLocaleString()}
                        </div>
                        {application.emi && (
                          <div className="text-sm text-gray-500">
                            EMI: ₹{application.emi.toLocaleString()}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                          statusColors[application.status as keyof typeof statusColors]
                        }`}>
                          <StatusIcon className="h-4 w-4 mr-1" />
                          {application.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ 
                              width: `${getProgressPercentage(application.processingStep, application.totalSteps)}%` 
                            }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Step {application.processingStep} of {application.totalSteps}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {new Date(application.appliedDate).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleViewDetails(application)}
                          className="text-blue-600 hover:text-blue-900 flex items-center"
                        >
                          <EyeIcon className="h-4 w-4 mr-1" />
                          View Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Application Details Modal */}
        {showDetails && selectedApplication && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Application Details - {selectedApplication.id}
                  </h3>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XCircleIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Basic Info */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Loan Information</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Loan Type:</span>
                        <span className="ml-2 font-medium">{selectedApplication.loanType}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Amount:</span>
                        <span className="ml-2 font-medium">₹{selectedApplication.amount.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Interest Rate:</span>
                        <span className="ml-2 font-medium">{selectedApplication.interestRate}%</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Tenure:</span>
                        <span className="ml-2 font-medium">{selectedApplication.tenure} months</span>
                      </div>
                      {selectedApplication.emi && (
                        <div>
                          <span className="text-gray-600">EMI:</span>
                          <span className="ml-2 font-medium">₹{selectedApplication.emi.toLocaleString()}</span>
                        </div>
                      )}
                      {selectedApplication.nextDueDate && (
                        <div>
                          <span className="text-gray-600">Next Due:</span>
                          <span className="ml-2 font-medium">
                            {new Date(selectedApplication.nextDueDate).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Processing Status */}
                  <div>
                    <h4 className="font-semibold mb-4">Processing Status</h4>
                    <div className="space-y-3">
                      {selectedApplication.documents.map((doc: any, index: number) => (
                        <div key={index} className="flex items-center">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center mr-3 ${
                            doc.status === 'completed' ? 'bg-green-500' :
                            doc.status === 'in_progress' ? 'bg-blue-500' :
                            doc.status === 'rejected' ? 'bg-red-500' : 'bg-gray-300'
                          }`}>
                            {doc.status === 'completed' && (
                              <CheckCircleIcon className="h-3 w-3 text-white" />
                            )}
                            {doc.status === 'in_progress' && (
                              <ClockIcon className="h-3 w-3 text-white" />
                            )}
                          </div>
                          <span className={`text-sm ${
                            doc.status === 'completed' ? 'text-gray-900' :
                            doc.status === 'in_progress' ? 'text-blue-600' :
                            doc.status === 'rejected' ? 'text-red-600' : 'text-gray-500'
                          }`}>
                            {doc.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rejection Reason */}
                  {selectedApplication.status === 'REJECTED' && selectedApplication.rejectionReason && (
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Rejection Reason</h4>
                      <p className="text-sm text-red-700">{selectedApplication.rejectionReason}</p>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setShowDetails(false)}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}