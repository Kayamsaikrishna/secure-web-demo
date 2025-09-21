"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { 
  PlusIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon
} from "@heroicons/react/24/outline";

// Mock loan schemes data
const mockSchemes = [
  {
    id: "LS2024001",
    name: "HDFC Festive Personal Loan 2025",
    category: "Personal Loan",
    status: "ACTIVE" as const,
    minAmount: 50000,
    maxAmount: 1500000,
    interestRate: "10.5% - 18.0%",
    tenure: "12-60 months",
    eligibilityScore: 650,
    createdAt: "2024-01-15T10:30:00Z",
    applications: 245,
    approvals: 198,
    disbursed: 15600000
  },
  {
    id: "LS2024002",
    name: "HDFC Prime Home Loan Scheme",
    category: "Home Loan",
    status: "ACTIVE" as const,
    minAmount: 500000,
    maxAmount: 50000000,
    interestRate: "8.5% - 12.0%",
    tenure: "60-300 months",
    eligibilityScore: 750,
    createdAt: "2024-01-10T09:15:00Z",
    applications: 189,
    approvals: 156,
    disbursed: 45200000
  },
  {
    id: "LS2024003",
    name: "Business Growth Loan 2024",
    category: "Business Loan",
    status: "INACTIVE" as const,
    minAmount: 200000,
    maxAmount: 5000000,
    interestRate: "12.0% - 19.0%",
    tenure: "12-48 months",
    eligibilityScore: 600,
    createdAt: "2024-01-05T08:45:00Z",
    applications: 134,
    approvals: 89,
    disbursed: 8900000
  }
];

const statusColors = {
  ACTIVE: "text-green-600 bg-green-100",
  INACTIVE: "text-red-600 bg-red-100",
  DRAFT: "text-yellow-600 bg-yellow-100"
} as const;

interface Scheme {
  id: string;
  name: string;
  category: string;
  status: keyof typeof statusColors;
  minAmount: number;
  maxAmount: number;
  interestRate: string;
  tenure: string;
  eligibilityScore: number;
  createdAt: string;
  applications: number;
  approvals: number;
  disbursed: number;
}

export default function LoanSchemesPage() {
  const { data: session } = useSession();
  const [schemes] = useState<Scheme[]>(mockSchemes);
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

  const filteredSchemes = schemes.filter(scheme => 
    scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    scheme.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    scheme.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Loan Schemes Management</h1>
          <p className="text-gray-600 mt-1">Create and manage loan schemes and products</p>
        </div>
        <Link 
          href="/admin/loan-schemes/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center font-semibold"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Create New Scheme
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <CheckCircleIcon className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-green-600">Active Schemes</p>
              <p className="text-2xl font-bold text-green-900">{schemes.filter(s => s.status === 'ACTIVE').length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <ClockIcon className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-yellow-600">Total Applications</p>
              <p className="text-2xl font-bold text-yellow-900">{schemes.reduce((sum, s) => sum + s.applications, 0)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <CheckCircleIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-blue-600">Total Approvals</p>
              <p className="text-2xl font-bold text-blue-900">{schemes.reduce((sum, s) => sum + s.approvals, 0)}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="h-8 w-8 text-purple-600 font-bold text-lg flex items-center justify-center">₹</div>
            <div className="ml-4">
              <p className="text-sm font-medium text-purple-600">Total Disbursed</p>
              <p className="text-2xl font-bold text-purple-900">{formatCurrency(schemes.reduce((sum, s) => sum + s.disbursed, 0))}</p>
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
              placeholder="Search schemes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Schemes Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Scheme Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category & Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount Range
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Interest Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSchemes.map((scheme) => (
                <tr key={scheme.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {scheme.name}
                        </div>
                        <div className="text-sm text-gray-500">{scheme.id}</div>
                        <div className="text-xs text-gray-400">
                          Created: {new Date(scheme.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{scheme.category}</div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      statusColors[scheme.status]
                    }`}>
                      {scheme.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatCurrency(scheme.minAmount)} - {formatCurrency(scheme.maxAmount)}
                    </div>
                    <div className="text-sm text-gray-500">Tenure: {scheme.tenure}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{scheme.interestRate}</div>
                    <div className="text-sm text-gray-500">Min Score: {scheme.eligibilityScore}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      Applications: {scheme.applications}
                    </div>
                    <div className="text-sm text-gray-500">
                      Approved: {scheme.approvals} ({((scheme.approvals / scheme.applications) * 100).toFixed(1)}%)
                    </div>
                    <div className="text-sm text-gray-500">
                      Disbursed: {formatCurrency(scheme.disbursed)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/admin/loan-schemes/${scheme.id}`}
                        className="text-blue-600 hover:text-blue-900"
                        title="View Details"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`/admin/loan-schemes/${scheme.id}/edit`}
                        className="text-green-600 hover:text-green-900"
                        title="Edit Scheme"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </Link>
                      <button
                        className="text-red-600 hover:text-red-900"
                        title="Delete Scheme"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredSchemes.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No schemes found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}