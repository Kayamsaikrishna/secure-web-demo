"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
  EyeIcon,
  CurrencyRupeeIcon
} from "@heroicons/react/24/outline";

const mockApplications = [
  {
    id: "LA2024001",
    loanType: "Personal Loan",
    amount: 500000,
    appliedDate: "2024-01-20T10:30:00Z",
    status: "UNDER_REVIEW",
    emi: 12850,
    tenure: 48,
    interestRate: 12.5
  },
  {
    id: "LA2024002",
    loanType: "Vehicle Loan",
    amount: 800000,
    appliedDate: "2024-01-18T14:15:00Z",
    status: "APPROVED",
    emi: 18234,
    tenure: 60,
    interestRate: 9.5
  },
  {
    id: "LA2024003",
    loanType: "Home Loan",
    amount: 2500000,
    appliedDate: "2024-01-15T09:45:00Z",
    status: "DISBURSED",
    emi: 22456,
    tenure: 240,
    interestRate: 8.5
  }
];

const statusColors = {
  PENDING: "text-yellow-600 bg-yellow-100",
  UNDER_REVIEW: "text-blue-600 bg-blue-100",
  APPROVED: "text-green-600 bg-green-100",
  REJECTED: "text-red-600 bg-red-100",
  DISBURSED: "text-purple-600 bg-purple-100"
};

export default function MyApplicationsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [applications] = useState(mockApplications);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if ((session?.user as { role: string })?.role === "ADMIN") {
      router.push("/admin");
      return;
    }
  }, [session, status, router]);

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} L`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your applications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Loan Applications</h1>
        <p className="text-gray-600 mt-1">Track the status of your loan applications</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <DocumentTextIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-blue-600">Total Applications</p>
              <p className="text-2xl font-bold text-blue-900">{applications.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <ClockIcon className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-yellow-600">Under Review</p>
              <p className="text-2xl font-bold text-yellow-900">
                {applications.filter(app => app.status === 'UNDER_REVIEW').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <CheckCircleIcon className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-green-600">Approved</p>
              <p className="text-2xl font-bold text-green-900">
                {applications.filter(app => app.status === 'APPROVED' || app.status === 'DISBURSED').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <CurrencyRupeeIcon className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-purple-600">Total Amount</p>
              <p className="text-2xl font-bold text-purple-900">
                {formatCurrency(applications.reduce((sum, app) => sum + app.amount, 0))}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Applications List */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Application History</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {applications.map((application) => (
            <div key={application.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <DocumentTextIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{application.loanType}</h3>
                    <p className="text-sm text-gray-500">Application ID: {application.id}</p>
                    <p className="text-sm text-gray-500">
                      Applied on: {new Date(application.appliedDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                    statusColors[application.status as keyof typeof statusColors]
                  }`}>
                    {application.status.replace('_', ' ')}
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Loan Amount</p>
                  <p className="text-lg font-bold text-gray-900">{formatCurrency(application.amount)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">EMI</p>
                  <p className="text-lg font-bold text-gray-900">₹{application.emi.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Tenure</p>
                  <p className="text-lg font-bold text-gray-900">{application.tenure} months</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Interest Rate</p>
                  <p className="text-lg font-bold text-gray-900">{application.interestRate}% p.a.</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex space-x-4">
                  {application.status === 'UNDER_REVIEW' && (
                    <div className="text-sm text-blue-600">
                      ⏱️ Expected approval within 24-48 hours
                    </div>
                  )}
                  {application.status === 'APPROVED' && (
                    <div className="text-sm text-green-600">
                      ✅ Approved! Disbursement in progress
                    </div>
                  )}
                  {application.status === 'DISBURSED' && (
                    <div className="text-sm text-purple-600">
                      💰 Amount disbursed to your account
                    </div>
                  )}
                </div>
                
                <button className="text-blue-600 hover:text-blue-700 flex items-center">
                  <Link href={`/loans/my-applications/${application.id}`} className="flex items-center">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    View Details
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {applications.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <DocumentTextIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Applications Yet</h3>
          <p className="text-gray-600 mb-6">You haven&apos;t submitted any loan applications.</p>
          <Link
            href="/loans/apply"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Apply for a Loan
          </Link>
        </div>
      )}
    </div>
  );
}
