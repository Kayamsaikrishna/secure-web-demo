"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { 
  MagnifyingGlassIcon,
  CheckCircleIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  DocumentTextIcon,
  EyeIcon
} from "@heroicons/react/24/outline";

// Mock disbursement data
const mockDisbursements = [
  {
    id: "DIS2024001",
    applicationId: "LA2024003",
    applicantName: "Amit Patel",
    loanAmount: 800000,
    approvedAmount: 750000,
    disbursedAmount: 750000,
    loanType: "Vehicle Loan",
    disbursementDate: "2024-01-21T14:30:00Z",
    accountNumber: "****8765",
    status: "COMPLETED",
    referenceNumber: "HDFC240121001"
  },
  {
    id: "DIS2024002", 
    applicationId: "LA2024005",
    applicantName: "Vikram Singh",
    loanAmount: 750000,
    approvedAmount: 750000,
    disbursedAmount: 750000,
    loanType: "Education Loan",
    disbursementDate: "2024-01-20T16:45:00Z", 
    accountNumber: "****4321",
    status: "COMPLETED",
    referenceNumber: "HDFC240120002"
  },
  {
    id: "DIS2024003",
    applicationId: "LA2024006",
    applicantName: "Priya Sharma",
    loanAmount: 2500000,
    approvedAmount: 2200000,
    disbursedAmount: 0,
    loanType: "Home Loan",
    disbursementDate: null,
    accountNumber: "****9876",
    status: "PENDING",
    referenceNumber: null
  }
];

const statusColors = {
  COMPLETED: "text-green-600 bg-green-100",
  PENDING: "text-yellow-600 bg-yellow-100",
  FAILED: "text-red-600 bg-red-100",
  IN_PROGRESS: "text-blue-600 bg-blue-100"
};

export default function DisbursementsPage() {
  const { data: session } = useSession();
  const [disbursements] = useState(mockDisbursements);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredDisbursements = disbursements.filter(disbursement => 
    disbursement.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disbursement.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disbursement.applicationId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalDisbursed = disbursements
    .filter(d => d.status === 'COMPLETED')
    .reduce((sum, d) => sum + d.disbursedAmount, 0);

  const pendingDisbursements = disbursements.filter(d => d.status === 'PENDING').length;
  const completedDisbursements = disbursements.filter(d => d.status === 'COMPLETED').length;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Loan Disbursements</h1>
          <p className="text-gray-600 mt-1">Track and manage loan disbursements</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <CheckCircleIcon className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-green-600">Completed</p>
              <p className="text-2xl font-bold text-green-900">{completedDisbursements}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <ClockIcon className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-yellow-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-900">{pendingDisbursements}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <CurrencyRupeeIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-blue-600">Total Disbursed</p>
              <p className="text-2xl font-bold text-blue-900">{formatCurrency(totalDisbursed)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <DocumentTextIcon className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-purple-600">Total Requests</p>
              <p className="text-2xl font-bold text-purple-900">{disbursements.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search disbursements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Disbursements Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Disbursement Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applicant Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Disbursement Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDisbursements.map((disbursement) => (
                <tr key={disbursement.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {disbursement.id}
                      </div>
                      <div className="text-sm text-gray-500">
                        App: {disbursement.applicationId}
                      </div>
                      <div className="text-sm text-gray-500">
                        {disbursement.loanType}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{disbursement.applicantName}</div>
                    <div className="text-sm text-gray-500">A/c: {disbursement.accountNumber}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      Applied: {formatCurrency(disbursement.loanAmount)}
                    </div>
                    <div className="text-sm text-green-600">
                      Approved: {formatCurrency(disbursement.approvedAmount)}
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      Disbursed: {formatCurrency(disbursement.disbursedAmount)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      statusColors[disbursement.status as keyof typeof statusColors]
                    }`}>
                      {disbursement.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {disbursement.disbursementDate ? (
                      <div>
                        <div className="text-sm text-gray-900">
                          {new Date(disbursement.disbursementDate).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(disbursement.disbursementDate).toLocaleTimeString()}
                        </div>
                        {disbursement.referenceNumber && (
                          <div className="text-xs text-gray-400">
                            Ref: {disbursement.referenceNumber}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-sm text-gray-400">Pending disbursement</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        className="text-blue-600 hover:text-blue-900"
                        title="View Details"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      {disbursement.status === 'PENDING' && (
                        <button
                          className="text-green-600 hover:text-green-900"
                          title="Process Disbursement"
                        >
                          <CheckCircleIcon className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredDisbursements.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No disbursements found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}