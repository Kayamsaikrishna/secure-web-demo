"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { 
  DocumentTextIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FunnelIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";

interface ReportType {
  id: string;
  name: string;
  description: string;
}

interface DateRange {
  start: string;
  end: string;
}

interface RecentReport {
  name: string;
  date: string;
  size: string;
}

const reportTypes: ReportType[] = [
  { id: "portfolio", name: "Portfolio Report", description: "Complete loan portfolio analysis" },
  { id: "performance", name: "Performance Report", description: "Monthly business performance metrics" },
  { id: "risk", name: "Risk Assessment Report", description: "Credit risk and NPA analysis" },
  { id: "customer", name: "Customer Analytics", description: "Customer behavior and satisfaction" },
  { id: "compliance", name: "Compliance Report", description: "Regulatory compliance status" },
];

export default function AdminReportsPage() {
  const { data: session } = useSession();
  const [selectedReport, setSelectedReport] = useState("");
  const [dateRange, setDateRange] = useState<DateRange>({ start: "", end: "" });
  const [isGenerating, setIsGenerating] = useState(false);

  if ((session?.user as { role: string })?.role !== "ADMIN") {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900">Access Denied</h1>
        <p className="text-gray-600">You don&apos;t have permission to access this page.</p>
      </div>
    );
  }

  const generateReport = async () => {
    setIsGenerating(true);
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false);
      alert("Report generated successfully! Check your downloads folder.");
    }, 3000);
  };

  const recentReports: RecentReport[] = [
    { name: "Portfolio Report - Dec 2024", date: "2024-12-01", size: "2.3 MB" },
    { name: "Performance Report - Nov 2024", date: "2024-11-01", size: "1.8 MB" },
    { name: "Risk Assessment - Nov 2024", date: "2024-11-01", size: "945 KB" },
    { name: "Customer Analytics - Oct 2024", date: "2024-10-01", size: "1.2 MB" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Reports &#38; Analytics</h1>
        <p className="text-gray-600 mt-1">Generate comprehensive business reports and insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Report Generation */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Generate New Report</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Report Type</label>
              <div className="grid grid-cols-1 gap-3">
                {reportTypes.map((report) => (
                  <div
                    key={report.id}
                    onClick={() => setSelectedReport(report.id)}
                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedReport === report.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <h3 className="font-medium text-gray-900">{report.name}</h3>
                        <p className="text-sm text-gray-500">{report.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <button
              onClick={generateReport}
              disabled={!selectedReport || isGenerating}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Generating Report...
                </>
              ) : (
                <>
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                  Generate Report
                </>
              )}
            </button>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Reports</h2>
          
          <div className="space-y-4">
            {recentReports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{report.name}</p>
                    <p className="text-xs text-gray-500">{report.date} • {report.size}</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700">
                  <ArrowDownTrayIcon className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}