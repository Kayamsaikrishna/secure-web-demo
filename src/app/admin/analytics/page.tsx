"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { 
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CurrencyRupeeIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CalendarIcon
} from "@heroicons/react/24/outline";

const analyticsData = {
  overview: {
    totalRevenue: 12450000000, // 124.5 Cr
    revenueGrowth: 15.2,
    totalApplications: 2847,
    applicationsGrowth: 12.5,
    approvalRate: 68.7,
    approvalRateChange: 2.1,
    avgTicketSize: 320000,
    avgTicketGrowth: 8.3
  },
  monthlyData: [
    { month: "Jan", applications: 234, approvals: 156, disbursements: 45600000 },
    { month: "Feb", applications: 267, approvals: 178, disbursements: 52300000 },
    { month: "Mar", applications: 298, approvals: 201, disbursements: 61200000 },
    { month: "Apr", applications: 312, approvals: 219, disbursements: 58900000 },
    { month: "May", applications: 345, approvals: 238, disbursements: 67800000 },
    { month: "Jun", applications: 289, approvals: 201, disbursements: 55400000 }
  ],
  sectorPerformance: [
    { sector: "Personal Loans", amount: 12450000000, applications: 856, npa: 2.8 },
    { sector: "Home Loans", amount: 18900000000, applications: 423, npa: 1.2 },
    { sector: "Vehicle Loans", amount: 8100000000, applications: 267, npa: 3.1 },
    { sector: "Business Loans", amount: 5900000000, applications: 398, npa: 4.2 }
  ]
};

export default function AdminAnalyticsPage() {
  const { data: session } = useSession();
  const [timeRange, setTimeRange] = useState("6months");

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

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-1">Comprehensive business intelligence and performance metrics</p>
        </div>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="1month">Last Month</option>
          <option value="3months">Last 3 Months</option>
          <option value="6months">Last 6 Months</option>
          <option value="1year">Last Year</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(analyticsData.overview.totalRevenue)}</p>
            </div>
            <CurrencyRupeeIcon className="h-8 w-8 text-green-600" />
          </div>
          <div className="mt-2 flex items-center">
            <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+{analyticsData.overview.revenueGrowth}%</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Applications</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.totalApplications}</p>
            </div>
            <DocumentTextIcon className="h-8 w-8 text-blue-600" />
          </div>
          <div className="mt-2 flex items-center">
            <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+{analyticsData.overview.applicationsGrowth}%</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Approval Rate</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.overview.approvalRate}%</p>
            </div>
            <ChartBarIcon className="h-8 w-8 text-purple-600" />
          </div>
          <div className="mt-2 flex items-center">
            <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+{analyticsData.overview.approvalRateChange}%</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Ticket Size</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(analyticsData.overview.avgTicketSize)}</p>
            </div>
            <UserGroupIcon className="h-8 w-8 text-orange-600" />
          </div>
          <div className="mt-2 flex items-center">
            <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-600 ml-1">+{analyticsData.overview.avgTicketGrowth}%</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Trends */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Trends</h3>
          <div className="space-y-4">
            {analyticsData.monthlyData.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">{data.month}</span>
                <div className="flex space-x-4 text-sm">
                  <span className="text-blue-600">Apps: {data.applications}</span>
                  <span className="text-green-600">Approved: {data.approvals}</span>
                  <span className="text-purple-600">{formatCurrency(data.disbursements)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sector Performance */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sector Performance</h3>
          <div className="space-y-4">
            {analyticsData.sectorPerformance.map((sector, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-900">{sector.sector}</h4>
                  <span className="text-sm text-red-600">NPA: {sector.npa}%</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  <span>{formatCurrency(sector.amount)} • {sector.applications} applications</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}