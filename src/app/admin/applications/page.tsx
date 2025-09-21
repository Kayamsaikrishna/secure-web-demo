"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { 
  DocumentTextIcon,
  MagnifyingGlassIcon,
  CheckCircleIcon,
  XCircleIcon,
  EyeIcon
} from "@heroicons/react/24/outline";

// Mock application data
const mockApplications = [
  {
    id: "LA2024001",
    applicantName: "Rajesh Kumar Singh",
    loanType: "Personal Loan",
    amount: 500000,
    status: "PENDING" as const,
    submittedAt: "2024-01-20T10:30:00Z",
    creditScore: 742
  },
  {
    id: "LA2024002",
    applicantName: "Priya Sharma",
    loanType: "Home Loan",
    amount: 2500000,
    status: "UNDER_REVIEW" as const,
    submittedAt: "2024-01-20T09:15:00Z",
    creditScore: 789
  },
  {
    id: "LA2024003", 
    applicantName: "Amit Patel",
    loanType: "Vehicle Loan",
    amount: 800000,
    status: "APPROVED" as const,
    submittedAt: "2024-01-20T08:45:00Z",
    creditScore: 756
  }
];

const statusColors = {
  PENDING: "text-yellow-600 bg-yellow-100",
  UNDER_REVIEW: "text-blue-600 bg-blue-100", 
  APPROVED: "text-green-600 bg-green-100",
  REJECTED: "text-red-600 bg-red-100",
  DISBURSED: "text-purple-600 bg-purple-100"
} as const;

interface Application {
  id: string;
  applicantName: string;
  loanType: string;
  amount: number;
  status: keyof typeof statusColors;
  submittedAt: string;
  creditScore: number;
}

export default function AdminApplicationsPage() {
  const { data: session } = useSession();
  const [applications] = useState<Application[]>(mockApplications);
  const [searchTerm, setSearchTerm] = useState("");

  if (session?.user.role !== "ADMIN") {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900">Access Denied</h1>
        <p className="text-gray-600">You don&apos;t have permission to access this page.</p>
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

  const filteredApplications = applications.filter(app => 
    app.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Loan Applications</h1>
          <p className="text-gray-600 mt-1">Manage and review loan applications</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search applications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Applications Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Application
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Loan Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Credit Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredApplications.map((application) => (
                <tr key={application.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <DocumentTextIcon className="h-8 w-8 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {application.applicantName}
                        </div>
                        <div className="text-sm text-gray-500">{application.id}</div>
                        <div className="mt-2">
                          <Link
                            href={`/admin/applications/${application.id}`}
                            className="inline-flex items-center px-3 py-1 border border-transparent text-xs leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            <EyeIcon className="h-3 w-3 mr-1" />
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{application.loanType}</div>
                    <div className="text-sm text-gray-500">{formatCurrency(application.amount)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      statusColors[application.status]
                    }`}>
                      {application.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {application.creditScore}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/admin/applications/${application.id}`}
                        className="text-blue-600 hover:text-blue-900"
                        title="View Details"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </Link>
                      {application.status === 'PENDING' && (
                        <>
                          <button
                            className="text-green-600 hover:text-green-900"
                            title="Quick Approve"
                          >
                            <CheckCircleIcon className="h-4 w-4" />
                          </button>
                          <button
                            className="text-red-600 hover:text-red-900"
                            title="Quick Reject"
                          >
                            <XCircleIcon className="h-4 w-4" />
                          </button>
                        </>
                      )}
                      {application.status === 'UNDER_REVIEW' && (
                        <button
                          className="text-green-600 hover:text-green-900"
                          title="Quick Approve"
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

        {filteredApplications.length === 0 && (
          <div className="text-center py-12">
            <DocumentTextIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
            <p className="text-gray-500">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}