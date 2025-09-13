"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  DocumentTextIcon,
  CurrencyRupeeIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  CalendarIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  CreditCardIcon
} from "@heroicons/react/24/outline";

// Mock admin dashboard data
const mockDashboardData = {
  overview: {
    totalApplications: 2847,
    totalApplicationsChange: 12.5,
    approvedApplications: 1956,
    approvedApplicationsChange: 8.3,
    totalDisbursed: 45630000000, // 456.3 Crores
    totalDisbursedChange: 15.2,
    activeUsers: 18453,
    activeUsersChange: 6.7,
    averageProcessingTime: 3.2, // days
    averageProcessingTimeChange: -12.5,
    approvalRate: 68.7,
    approvalRateChange: 2.1
  },
  applications: {
    pending: 234,
    underReview: 156,
    approved: 89,
    rejected: 45,
    disbursed: 67
  },
  sectors: [
    { name: "Personal Loans", applications: 856, amount: 12450000000, approvalRate: 72.3 },
    { name: "Home Loans", applications: 423, amount: 18900000000, approvalRate: 89.2 },
    { name: "Business Loans", applications: 398, amount: 8760000000, approvalRate: 54.1 },
    { name: "Vehicle Loans", applications: 267, amount: 4320000000, approvalRate: 78.5 },
    { name: "Education Loans", applications: 189, amount: 2890000000, approvalRate: 85.7 },
    { name: "Agriculture Loans", applications: 134, amount: 1540000000, approvalRate: 91.2 }
  ],
  recentApplications: [
    { id: "LA2024001", applicant: "Rajesh Kumar", type: "Personal Loan", amount: 500000, status: "pending", submittedAt: "2024-01-20T10:30:00Z" },
    { id: "LA2024002", applicant: "Priya Sharma", type: "Home Loan", amount: 2500000, status: "underReview", submittedAt: "2024-01-20T09:15:00Z" },
    { id: "LA2024003", applicant: "Amit Patel", type: "Vehicle Loan", amount: 800000, status: "approved", submittedAt: "2024-01-20T08:45:00Z" },
    { id: "LA2024004", applicant: "Neha Gupta", type: "Business Loan", amount: 1200000, status: "rejected", submittedAt: "2024-01-19T16:20:00Z" },
    { id: "LA2024005", applicant: "Vikram Singh", type: "Education Loan", amount: 750000, status: "disbursed", submittedAt: "2024-01-19T14:10:00Z" }
  ],
  alerts: [
    { type: "warning", message: "High volume of applications pending review (234)", priority: "high" },
    { type: "info", message: "Monthly target achievement: 87% completed", priority: "medium" },
    { type: "success", message: "KYC completion rate improved by 15%", priority: "low" },
    { type: "error", message: "3 applications flagged for potential fraud", priority: "high" }
  ],
  performance: {
    monthlyTargets: {
      applications: { target: 3000, achieved: 2610, percentage: 87 },
      disbursement: { target: 50000000000, achieved: 43500000000, percentage: 87 },
      newUsers: { target: 2000, achieved: 1750, percentage: 87.5 }
    },
    teamMetrics: [
      { name: "Processing Team", efficiency: 94, workload: 78 },
      { name: "Verification Team", efficiency: 89, workload: 82 },
      { name: "Disbursement Team", efficiency: 96, workload: 65 },
      { name: "Customer Support", efficiency: 91, workload: 71 }
    ]
  }
};

const statusColors = {
  pending: "text-yellow-600 bg-yellow-100",
  underReview: "text-blue-600 bg-blue-100",
  approved: "text-green-600 bg-green-100",
  rejected: "text-red-600 bg-red-100",
  disbursed: "text-purple-600 bg-purple-100"
};

const alertColors = {
  error: "bg-red-50 border-red-200 text-red-800",
  warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
  info: "bg-blue-50 border-blue-200 text-blue-800",
  success: "bg-green-50 border-green-200 text-green-800"
};

export default function AdminDashboard() {
  const { data: session } = useSession();
  const [dashboardData, setDashboardData] = useState(mockDashboardData);
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d");

  if ((session?.user as any)?.role !== "ADMIN") {
    return (
      <div className="text-center py-12">
        <ShieldCheckIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Access Denied</h1>
        <p className="text-gray-600">
          You don't have permission to access the admin dashboard.
        </p>
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

  const formatChange = (change: number) => {
    const isPositive = change > 0;
    return (
      <span className={`flex items-center text-sm ${
        isPositive ? 'text-green-600' : 'text-red-600'
      }`}>
        {isPositive ? (
          <ChevronUpIcon className="h-3 w-3 mr-1" />
        ) : (
          <ChevronDownIcon className="h-3 w-3 mr-1" />
        )}
        {Math.abs(change).toFixed(1)}%
      </span>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Fin-Agentix Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Comprehensive platform analytics and management</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="1d">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          <span className="inline-flex items-center rounded-md bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Administrator
          </span>
        </div>
      </div>
      {/* Alerts Section */}
      {dashboardData.alerts.length > 0 && (
        <div className="space-y-3">
          {dashboardData.alerts.map((alert, index) => (
            <div key={index} className={`p-4 rounded-lg border ${alertColors[alert.type as keyof typeof alertColors]}`}>
              <div className="flex items-center">
                {alert.type === 'error' && <XCircleIcon className="h-5 w-5 mr-2" />}
                {alert.type === 'warning' && <ExclamationTriangleIcon className="h-5 w-5 mr-2" />}
                {alert.type === 'info' && <ClockIcon className="h-5 w-5 mr-2" />}
                {alert.type === 'success' && <CheckCircleIcon className="h-5 w-5 mr-2" />}
                <span className="font-medium">{alert.message}</span>
                <span className={`ml-auto px-2 py-1 rounded text-xs ${
                  alert.priority === 'high' ? 'bg-red-100 text-red-800' :
                  alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {alert.priority} priority
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <div className="bg-white overflow-hidden shadow-lg rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <DocumentTextIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Applications</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {dashboardData.overview.totalApplications.toLocaleString()}
                    </div>
                    <div className="ml-2">
                      {formatChange(dashboardData.overview.totalApplicationsChange)}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow-lg rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircleIcon className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Approved</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {dashboardData.overview.approvedApplications.toLocaleString()}
                    </div>
                    <div className="ml-2">
                      {formatChange(dashboardData.overview.approvedApplicationsChange)}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow-lg rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CurrencyRupeeIcon className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Disbursed</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {formatCurrency(dashboardData.overview.totalDisbursed)}
                    </div>
                    <div className="ml-2">
                      {formatChange(dashboardData.overview.totalDisbursedChange)}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow-lg rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UserGroupIcon className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Active Users</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {dashboardData.overview.activeUsers.toLocaleString()}
                    </div>
                    <div className="ml-2">
                      {formatChange(dashboardData.overview.activeUsersChange)}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow-lg rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ClockIcon className="h-6 w-6 text-yellow-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Avg Processing</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {dashboardData.overview.averageProcessingTime} days
                    </div>
                    <div className="ml-2">
                      {formatChange(dashboardData.overview.averageProcessingTimeChange)}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow-lg rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ArrowTrendingUpIcon className="h-6 w-6 text-indigo-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Approval Rate</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {dashboardData.overview.approvalRate}%
                    </div>
                    <div className="ml-2">
                      {formatChange(dashboardData.overview.approvalRateChange)}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Applications & Sector Analysis */}
        <div className="lg:col-span-2 space-y-8">
          {/* Application Status Overview */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Application Pipeline</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Object.entries(dashboardData.applications).map(([status, count]) => (
                <div key={status} className="text-center">
                  <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    status === 'pending' ? 'bg-yellow-100' :
                    status === 'underReview' ? 'bg-blue-100' :
                    status === 'approved' ? 'bg-green-100' :
                    status === 'rejected' ? 'bg-red-100' :
                    'bg-purple-100'
                  }`}>
                    <span className={`text-lg font-bold ${
                      status === 'pending' ? 'text-yellow-600' :
                      status === 'underReview' ? 'text-blue-600' :
                      status === 'approved' ? 'text-green-600' :
                      status === 'rejected' ? 'text-red-600' :
                      'text-purple-600'
                    }`}>
                      {count}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-gray-900 capitalize">
                    {status.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sector Performance */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Sector Performance</h3>
              <Link
                href="/admin/analytics"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View Detailed Analytics →
              </Link>
            </div>
            <div className="space-y-4">
              {dashboardData.sectors.map((sector, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{sector.name}</h4>
                    <span className="text-sm text-gray-600">{sector.approvalRate}% approval rate</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Applications:</span>
                      <span className="ml-2 font-medium">{sector.applications}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Amount:</span>
                      <span className="ml-2 font-medium">{formatCurrency(sector.amount)}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${sector.approvalRate}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Applications */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Applications</h3>
              <Link
                href="/admin/applications"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All Applications →
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Application
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applicant
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dashboardData.recentApplications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{app.id}</div>
                          <div className="text-sm text-gray-500">{app.type}</div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                        {app.applicant}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatCurrency(app.amount)}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          statusColors[app.status as keyof typeof statusColors]
                        }`}>
                          {app.status.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(app.submittedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column - Quick Actions & Performance */}
        <div className="space-y-8">
          {/* Quick Actions */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
            <div className="space-y-4">
              <Link
                href="/admin/applications?filter=pending"
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <DocumentTextIcon className="h-5 w-5 text-yellow-500 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Review Pending Applications</div>
                  <div className="text-sm text-gray-500">{dashboardData.applications.pending} applications waiting</div>
                </div>
              </Link>

              <Link
                href="/admin/users?filter=kyc-pending"
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <UserGroupIcon className="h-5 w-5 text-blue-500 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">KYC Verifications</div>
                  <div className="text-sm text-gray-500">Manage user verifications</div>
                </div>
              </Link>

              <Link
                href="/admin/products"
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <CreditCardIcon className="h-5 w-5 text-green-500 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Loan Products</div>
                  <div className="text-sm text-gray-500">Configure rates and terms</div>
                </div>
              </Link>

              <Link
                href="/admin/reports"
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <ChartBarIcon className="h-5 w-5 text-purple-500 mr-3" />
                <div>
                  <div className="font-medium text-gray-900">Generate Reports</div>
                  <div className="text-sm text-gray-500">Business insights and analytics</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Monthly Targets */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Monthly Targets</h3>
            <div className="space-y-6">
              {Object.entries(dashboardData.performance.monthlyTargets).map(([key, target]) => (
                <div key={key}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="capitalize text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="font-medium">{target.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        target.percentage >= 90 ? 'bg-green-500' :
                        target.percentage >= 70 ? 'bg-blue-500' :
                        target.percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${Math.min(target.percentage, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Achieved: {key === 'disbursement' ? formatCurrency(target.achieved) : target.achieved.toLocaleString()}</span>
                    <span>Target: {key === 'disbursement' ? formatCurrency(target.target) : target.target.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Performance */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Team Performance</h3>
            <div className="space-y-4">
              {dashboardData.performance.teamMetrics.map((team, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium text-gray-900">{team.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      team.efficiency >= 90 ? 'bg-green-100 text-green-800' :
                      team.efficiency >= 80 ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {team.efficiency}% efficiency
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Workload</span>
                        <span className="font-medium">{team.workload}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            team.workload >= 90 ? 'bg-red-500' :
                            team.workload >= 70 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${team.workload}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
