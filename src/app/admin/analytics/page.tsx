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
  CalendarIcon,
  BuildingOfficeIcon,
  ChartPieIcon,
  ArrowDownTrayIcon,
  BanknotesIcon,
  CreditCardIcon,
  ArrowsRightLeftIcon
} from "@heroicons/react/24/outline";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ScatterChart, Scatter } from 'recharts';

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

// Mock lender data
const mockLenderData = [
  { id: 1, name: 'ABC Financial Services', totalLoans: 1245, totalAmount: 25000000, activeLoans: 890, defaultRate: 2.3, sectors: ['Personal', 'Home', 'Vehicle'], performance: [{ month: 'Jan', loans: 95, amount: 1900000 }, { month: 'Feb', loans: 102, amount: 2100000 }, { month: 'Mar', loans: 115, amount: 2400000 }] },
  { id: 2, name: 'XYZ Credit Union', totalLoans: 980, totalAmount: 18500000, activeLoans: 720, defaultRate: 1.8, sectors: ['Business', 'Education', 'Gold'], performance: [{ month: 'Jan', loans: 78, amount: 1450000 }, { month: 'Feb', loans: 85, amount: 1650000 }, { month: 'Mar', loans: 92, amount: 1800000 }] },
  { id: 3, name: 'Global Lending Corp', totalLoans: 1560, totalAmount: 32000000, activeLoans: 1120, defaultRate: 3.1, sectors: ['Agriculture', 'Healthcare', 'Microfinance'], performance: [{ month: 'Jan', loans: 120, amount: 2500000 }, { month: 'Feb', loans: 135, amount: 2800000 }, { month: 'Mar', loans: 145, amount: 3100000 }] },
  { id: 4, name: 'National Bank Ltd', totalLoans: 2100, totalAmount: 45000000, activeLoans: 1650, defaultRate: 1.2, sectors: ['Home', 'Business', 'Vehicle'], performance: [{ month: 'Jan', loans: 165, amount: 3500000 }, { month: 'Feb', loans: 180, amount: 3800000 }, { month: 'Mar', loans: 195, amount: 4200000 }] },
  { id: 5, name: 'Regional Finance Co', totalLoans: 750, totalAmount: 12000000, activeLoans: 580, defaultRate: 2.7, sectors: ['Personal', 'Education', 'Digital'], performance: [{ month: 'Jan', loans: 60, amount: 950000 }, { month: 'Feb', loans: 65, amount: 1100000 }, { month: 'Mar', loans: 70, amount: 1250000 }] },
];

// Chart colors
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FF6B6B', '#4ECDC4'];

export default function AdminAnalyticsPage() {
  const { data: session } = useSession();
  const [timeRange, setTimeRange] = useState("6months");
  const [activeTab, setActiveTab] = useState("overview");

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

  const handleExport = async () => {
    try {
      // In a real implementation, this would call your API to generate and download a CSV:
      // const response = await fetch('/api/admin/analytics/export', { method: 'POST' });
      // const blob = await response.blob();
      // const url = window.URL.createObjectURL(blob);
      // const a = document.createElement('a');
      // a.href = url;
      // a.download = 'lender-analytics.csv';
      // document.body.appendChild(a);
      // a.click();
      // document.body.removeChild(a);
      // window.URL.revokeObjectURL(url);
      
      // For now, create a mock CSV
      const csvContent = "Lender Name,Total Loans,Total Amount,Active Loans,Default Rate,Sectors,Avg Loan Amount,Performance Rating\n" +
        "ABC Financial Services,1245,25000000,890,2.3,\"Personal, Home, Vehicle\",20080,Good\n" +
        "XYZ Credit Union,980,18500000,720,1.8,\"Business, Education, Gold\",18878,Excellent\n" +
        "Global Lending Corp,1560,32000000,1120,3.1,\"Agriculture, Healthcare, Microfinance\",20513,Fair\n" +
        "National Bank Ltd,2100,45000000,1650,1.2,\"Home, Business, Vehicle\",21429,Excellent\n" +
        "Regional Finance Co,750,12000000,580,2.7,\"Personal, Education, Digital\",16000,Good\n";
      
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'lender-analytics.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Export failed:', err);
    }
  };

  const topLenders = [...mockLenderData]
    .sort((a, b) => b.totalAmount - a.totalAmount)
    .slice(0, 5);

  const defaultRateData = mockLenderData.map(lender => ({
    name: lender.name,
    defaultRate: lender.defaultRate
  }));

  // Calculate sector distribution
  const sectorDistribution = mockLenderData.reduce((acc, lender) => {
    lender.sectors.forEach(sector => {
      acc[sector] = (acc[sector] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const sectorDistributionData = Object.entries(sectorDistribution).map(([name, value]) => ({
    name,
    value
  }));

  // Calculate monthly trends for lenders
  const monthlyTrends = mockLenderData.reduce((acc, lender) => {
    lender.performance.forEach((perf, index) => {
      if (!acc[index]) {
        acc[index] = { month: perf.month, totalLoans: 0, totalAmount: 0 };
      }
      acc[index].totalLoans += perf.loans;
      acc[index].totalAmount += perf.amount;
    });
    return acc;
  }, [] as { month: string; totalLoans: number; totalAmount: number }[]);

  // Additional visualizations
  const loanVolumeData = mockLenderData.map(lender => ({
    name: lender.name,
    volume: lender.totalAmount,
    loans: lender.totalLoans
  }));

  const activeLoansData = mockLenderData.map(lender => ({
    name: lender.name,
    active: lender.activeLoans,
    total: lender.totalLoans
  }));

  // Performance data for area chart
  const performanceData = mockLenderData.map(lender => ({
    name: lender.name,
    performance: lender.totalAmount / lender.totalLoans
  }));

  // Risk assessment data for scatter plot
  const riskData = mockLenderData.map(lender => ({
    name: lender.name,
    loans: lender.totalLoans,
    defaultRate: lender.defaultRate,
    amount: lender.totalAmount / 1000000 // In millions for sizing
  }));

  // Radar chart data
  const radarData = mockLenderData.map(lender => ({
    subject: lender.name,
    volume: (lender.totalAmount / Math.max(...mockLenderData.map(l => l.totalAmount))) * 100,
    loans: (lender.totalLoans / Math.max(...mockLenderData.map(l => l.totalLoans))) * 100,
    active: (lender.activeLoans / Math.max(...mockLenderData.map(l => l.activeLoans))) * 100,
    default: 100 - (lender.defaultRate / Math.max(...mockLenderData.map(l => l.defaultRate))) * 100
  }));

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-1">Comprehensive business intelligence and performance metrics</p>
        </div>
        <div className="flex space-x-4">
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
          <button
            onClick={handleExport}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "overview"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <ChartBarIcon className="h-5 w-5 inline-block mr-2" />
            Platform Overview
          </button>
          <button
            onClick={() => setActiveTab("lenders")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "lenders"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <BuildingOfficeIcon className="h-5 w-5 inline-block mr-2" />
            Lender Analytics
          </button>
        </nav>
      </div>

      {activeTab === "overview" ? (
        <>
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
        </>
      ) : (
        <>
          {/* Lender Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Lenders</p>
                  <p className="text-2xl font-bold text-gray-900">{mockLenderData.length}</p>
                </div>
                <BuildingOfficeIcon className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-xs text-gray-500 mt-2">Active organizations</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Loans</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {mockLenderData.reduce((sum, lender) => sum + lender.totalLoans, 0).toLocaleString()}
                  </p>
                </div>
                <DocumentTextIcon className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-xs text-gray-500 mt-2">Across all lenders</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Amount</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{mockLenderData.reduce((sum, lender) => sum + lender.totalAmount, 0).toLocaleString()}
                  </p>
                </div>
                <CurrencyRupeeIcon className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-xs text-gray-500 mt-2">Disbursed funds</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Default Rate</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {(mockLenderData.reduce((sum, lender) => sum + lender.defaultRate, 0) / mockLenderData.length).toFixed(2)}%
                  </p>
                </div>
                <ChartBarIcon className="h-8 w-8 text-orange-600" />
              </div>
              <p className="text-xs text-gray-500 mt-2">Organization-wide</p>
            </div>
          </div>

          {/* Enhanced Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Loan Volume Comparison - Bar Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Volume Comparison</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={loanVolumeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`} />
                    <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, 'Loan Volume']} />
                    <Legend />
                    <Bar dataKey="volume" name="Loan Volume (₹)" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Sector Distribution - Pie Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sector Distribution</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sectorDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent as number * 100).toFixed(0)}%`}
                    >
                      {sectorDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [value, 'Lenders']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Default Rates - Bar Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Default Rates by Lender</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={defaultRateData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value}%`, 'Default Rate']} />
                    <Legend />
                    <Bar dataKey="defaultRate" name="Default Rate (%)" fill="#ff6b6b" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Active vs Total Loans - Stacked Bar Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Active vs Total Loans</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activeLoansData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [value, 'Loans']} />
                    <Legend />
                    <Bar dataKey="active" name="Active Loans" fill="#00C49F" stackId="a" />
                    <Bar dataKey="total" name="Total Loans" fill="#FFBB28" stackId="a" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Monthly Loan Trends - Line Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Loan Trends</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`} />
                    <Tooltip formatter={(value, name) => {
                      if (name === 'totalLoans') return [value, 'Loans'];
                      if (name === 'totalAmount') return [`₹${Number(value).toLocaleString()}`, 'Amount'];
                      return [value, name];
                    }} />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="totalLoans" name="Total Loans" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line yAxisId="right" type="monotone" dataKey="totalAmount" name="Total Amount (₹)" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Lender Performance Radar */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Lender Performance Radar</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="Performance"
                      dataKey="volume"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.6}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Risk vs Volume Scatter */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk vs Volume Analysis</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart>
                    <CartesianGrid />
                    <XAxis type="number" dataKey="loans" name="Total Loans" />
                    <YAxis type="number" dataKey="defaultRate" name="Default Rate" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} formatter={(value, name) => {
                      if (name === 'loans') return [value, 'Total Loans'];
                      if (name === 'defaultRate') return [`${value}%`, 'Default Rate'];
                      return [value, name];
                    }} />
                    <Legend />
                    <Scatter name="Lenders" data={riskData} fill="#8884d8">
                      {riskData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Performance Area Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Lender Performance Comparison</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `₹${value.toLocaleString()}`} />
                    <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, 'Avg Loan Amount']} />
                    <Legend />
                    <Bar dataKey="performance" name="Avg Loan Amount (₹)" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Additional Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sector Distribution</h3>
              <div className="space-y-4">
                {sectorDistributionData.map((sector, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div>
                      <p className="font-medium text-gray-900">{sector.name}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-4">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(sector.value / mockLenderData.length) * 100}%` }}
                        ></div>
                      </div>
                      <span className="font-medium text-gray-900">{sector.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Loan Trends</h3>
              <div className="space-y-4">
                {monthlyTrends.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div>
                      <p className="font-medium text-gray-900">{trend.month}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{trend.totalLoans} loans</p>
                      <p className="text-sm text-gray-500">₹{trend.totalAmount.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active vs Total Loans Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Active vs Total Loans</h3>
              <div className="space-y-4">
                {mockLenderData.map((lender) => (
                  <div key={lender.id} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">{lender.name}</span>
                      <span className="text-sm font-medium text-gray-900">{lender.activeLoans}/{lender.totalLoans}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-green-600 h-2.5 rounded-full" 
                        style={{ width: `${(lender.activeLoans / lender.totalLoans) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Volume Comparison</h3>
              <div className="space-y-4">
                {loanVolumeData.map((lender) => (
                  <div key={lender.name} className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div>
                      <p className="font-medium text-gray-900">{lender.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">₹{lender.volume.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">{lender.loans} loans</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lender Details Table */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Lender Details</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lender</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Loans</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active Loans</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sectors</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockLenderData.map((lender) => (
                    <tr key={lender.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lender.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lender.totalLoans}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{lender.totalAmount.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lender.activeLoans}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          lender.defaultRate > 3 
                            ? 'bg-red-100 text-red-800' 
                            : lender.defaultRate > 2 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-green-100 text-green-800'
                        }`}>
                          {lender.defaultRate}%
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex flex-wrap gap-1">
                          {lender.sectors.map((sector, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {sector}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}