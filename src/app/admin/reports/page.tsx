"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { 
  DocumentChartBarIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FunnelIcon,
  ChartBarIcon,
  CurrencyRupeeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

const reportTemplates = [
  {
    id: "loan_performance",
    name: "Loan Performance Report",
    description: "Comprehensive analysis of loan applications, approvals, and disbursements",
    icon: ChartBarIcon,
    color: "bg-blue-500",
    frequency: ["Daily", "Weekly", "Monthly", "Quarterly"],
    formats: ["PDF", "Excel", "CSV"]
  },
  {
    id: "sector_analysis",
    name: "Sector-wise Analysis",
    description: "Performance breakdown across all 12 loan sectors",
    icon: DocumentChartBarIcon,
    color: "bg-green-500",
    frequency: ["Weekly", "Monthly", "Quarterly"],
    formats: ["PDF", "Excel", "PowerPoint"]
  },
  {
    id: "risk_assessment",
    name: "Risk Assessment Report",
    description: "Credit risk analysis and default rate monitoring",
    icon: DocumentTextIcon,
    color: "bg-red-500",
    frequency: ["Weekly", "Monthly"],
    formats: ["PDF", "Excel"]
  },
  {
    id: "user_analytics",
    name: "User Analytics Report",
    description: "User acquisition, KYC completion, and engagement metrics",
    icon: UserGroupIcon,
    color: "bg-purple-500",
    frequency: ["Daily", "Weekly", "Monthly"],
    formats: ["PDF", "Excel", "CSV"]
  },
  {
    id: "financial_summary",
    name: "Financial Summary",
    description: "Revenue, disbursements, and financial performance overview",
    icon: CurrencyRupeeIcon,
    color: "bg-yellow-500",
    frequency: ["Daily", "Weekly", "Monthly", "Quarterly"],
    formats: ["PDF", "Excel"]
  },
  {
    id: "operational_efficiency",
    name: "Operational Efficiency",
    description: "Processing times, team performance, and workflow analysis",
    icon: ClockIcon,
    color: "bg-indigo-500",
    frequency: ["Weekly", "Monthly"],
    formats: ["PDF", "Excel", "PowerPoint"]
  }
];

const recentReports = [
  {
    id: "RPT2024001",
    name: "Monthly Loan Performance - January 2024",
    type: "loan_performance",
    generatedAt: "2024-01-20T09:30:00Z",
    generatedBy: "Admin User",
    format: "PDF",
    size: "2.3 MB",
    status: "completed"
  },
  {
    id: "RPT2024002",
    name: "Sector Analysis Q4 2023",
    type: "sector_analysis",
    generatedAt: "2024-01-19T14:15:00Z",
    generatedBy: "Admin User",
    format: "Excel",
    size: "4.1 MB",
    status: "completed"
  },
  {
    id: "RPT2024003",
    name: "Weekly Risk Assessment",
    type: "risk_assessment",
    generatedAt: "2024-01-18T11:45:00Z",
    generatedBy: "Risk Manager",
    format: "PDF",
    size: "1.8 MB",
    status: "completed"
  },
  {
    id: "RPT2024004",
    name: "User Analytics - January",
    type: "user_analytics",
    generatedAt: "2024-01-17T16:20:00Z",
    generatedBy: "Analytics Team",
    format: "CSV",
    size: "856 KB",
    status: "completed"
  }
];

export default function AdminReportsPage() {
  const { data: session } = useSession();
  const [selectedReport, setSelectedReport] = useState("");
  const [dateRange, setDateRange] = useState("monthly");
  const [selectedFormat, setSelectedFormat] = useState("PDF");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateReport = async (reportId: string) => {
    setIsGenerating(true);
    // Simulate report generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsGenerating(false);
    alert(`${reportTemplates.find(r => r.id === reportId)?.name} generated successfully!`);
  };

  if ((session?.user as any)?.role !== "ADMIN") {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900">Access Denied</h1>
        <p className="text-gray-600">You don't have permission to access reports.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Generate and download comprehensive business reports</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
            <DocumentChartBarIcon className="h-5 w-5 mr-2" />
            Schedule Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Report Generation */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Generate New Report</h2>
            
            {/* Report Templates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {reportTemplates.map((template) => {
                const IconComponent = template.icon;
                return (
                  <div
                    key={template.id}
                    onClick={() => setSelectedReport(template.id)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedReport === template.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${template.color} text-white`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{template.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>Formats: {template.formats.join(", ")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Report Configuration */}
            {selectedReport && (
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date Range
                    </label>
                    <select
                      value={dateRange}
                      onChange={(e) => setDateRange(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="custom">Custom Range</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Format
                    </label>
                    <select
                      value={selectedFormat}
                      onChange={(e) => setSelectedFormat(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {reportTemplates
                        .find(r => r.id === selectedReport)
                        ?.formats.map(format => (
                          <option key={format} value={format}>{format}</option>
                        ))
                      }
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button
                      onClick={() => generateReport(selectedReport)}
                      disabled={isGenerating}
                      className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isGenerating ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Generating...
                        </>
                      ) : (
                        <>
                          <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                          Generate Report
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Custom Date Range */}
                {dateRange === 'custom' && (
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Start Date
                      </label>
                      <input
                        type="date"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        End Date
                      </label>
                      <input
                        type="date"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Recent Reports */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Reports</h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{report.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <span>Generated by {report.generatedBy}</span>
                          <span>{new Date(report.generatedAt).toLocaleDateString()}</span>
                          <span>{report.format} • {report.size}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 p-2">
                      <ArrowDownTrayIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Reports Generated Today</span>
                <span className="font-semibold text-gray-900">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">This Week</span>
                <span className="font-semibold text-gray-900">42</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">This Month</span>
                <span className="font-semibold text-gray-900">187</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Downloads</span>
                <span className="font-semibold text-gray-900">2,143</span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Scheduled Reports</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <div className="font-medium text-blue-900">Daily Financial Summary</div>
                  <div className="text-sm text-blue-700">Every day at 9:00 AM</div>
                </div>
                <div className="text-blue-600">
                  <CalendarIcon className="h-4 w-4" />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <div className="font-medium text-green-900">Weekly Performance</div>
                  <div className="text-sm text-green-700">Every Monday at 8:00 AM</div>
                </div>
                <div className="text-green-600">
                  <CalendarIcon className="h-4 w-4" />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div>
                  <div className="font-medium text-purple-900">Monthly Analytics</div>
                  <div className="text-sm text-purple-700">1st of every month</div>
                </div>
                <div className="text-purple-600">
                  <CalendarIcon className="h-4 w-4" />
                </div>
              </div>
            </div>
            
            <button className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
              Manage Schedules
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Options</h3>
            <div className="space-y-3">
              <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center">
                <DocumentTextIcon className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-gray-900">Export to PDF</span>
              </button>
              
              <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center">
                <DocumentChartBarIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-900">Export to Excel</span>
              </button>
              
              <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center">
                <ChartBarIcon className="h-5 w-5 text-blue-500 mr-3" />
                <span className="text-gray-900">Export to PowerPoint</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}