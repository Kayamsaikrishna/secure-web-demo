'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ScatterChart, Scatter, Treemap, ComposedChart, RadialBarChart, RadialBar } from 'recharts';
import { Button } from '@/components/ui/button';
import { Download, Users, CreditCard, IndianRupee, AlertTriangle, TrendingUp, TrendingDown, Activity, DollarSign, PieChartIcon, BarChartIcon } from 'lucide-react';
import { AdminAnalyticsService } from '@/lib/services/adminAnalyticsService';

interface Lender {
  id: number;
  name: string;
  totalLoans: number;
  totalAmount: number;
  activeLoans: number;
  defaultRate: number;
  sectors: string[];
  performance: {
    month: string;
    loans: number;
    amount: number;
  }[];
}

interface ChartData {
  name: string;
  [key: string]: string | number;
}

// Define specific interfaces for chart data types
interface TreemapData {
  name: string;
  size: number;
  value?: number;
  children?: TreemapData[];
}

interface RadialBarData {
  name: string;
  defaultRate: number;
  value?: number;
  [key: string]: string | number | undefined;
}

interface GrowthData {
  name: string;
  growth: number;
}

interface PerformanceTrendData {
  name: string;
  value?: number;
  [key: string]: string | number | undefined;
}

interface SectorPerformanceData {
  sector: string;
  totalAmount: number;
  totalLoans: number;
  defaultRate: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('monthly');
  const [lenderData, setLenderData] = useState<Lender[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the service
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await AdminAnalyticsService.fetchLenderAnalytics(timeRange);
        setLenderData(data.lenders);
        setError(null);
      } catch (err) {
        setError('Failed to fetch analytics data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [timeRange]);

  const handleExport = async () => {
    try {
      const blob = await AdminAnalyticsService.exportAnalyticsData();
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

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Lender Analytics Dashboard</h1>
        <div className="flex justify-center items-center h-64">
          <p>Loading analytics data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Lender Analytics Dashboard</h1>
        <div className="flex justify-center items-center h-64">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  // Use the enhanced service methods for data processing
  const topLenders = AdminAnalyticsService.getTopLendersByVolume(lenderData);
  const sectorData = AdminAnalyticsService.getSectorDistribution(lenderData);
  const defaultRateData: RadialBarData[] = AdminAnalyticsService.getRadialBarData(lenderData);
  const monthlyTrends = AdminAnalyticsService.getMonthlyTrends(lenderData);
  const performanceData = AdminAnalyticsService.getPerformanceComparison(lenderData);
  const riskData = AdminAnalyticsService.getRiskAssessment(lenderData);
  const loanVolumeData = AdminAnalyticsService.getLoanVolumeData(lenderData);
  const activeLoansData = AdminAnalyticsService.getActiveLoansData(lenderData);
  const radarData = AdminAnalyticsService.getRadarData(lenderData);
  const scatterData = AdminAnalyticsService.getScatterData(lenderData);

  // Additional data processing for more visualizations
  const loanGrowthData: GrowthData[] = AdminAnalyticsService.getLoanGrowthData(lenderData);
  const sectorTreemapData: TreemapData[] = AdminAnalyticsService.getTreemapData(lenderData);
  const lenderPerformanceTrend: PerformanceTrendData[] = AdminAnalyticsService.getPerformanceTrendData(lenderData);
  const sectorPerformanceData: SectorPerformanceData[] = AdminAnalyticsService.getSectorPerformanceData(lenderData);

  const totalLenders = lenderData.length;
  const totalLoans = lenderData.reduce((sum, lender) => sum + lender.totalLoans, 0);
  const totalAmount = lenderData.reduce((sum, lender) => sum + lender.totalAmount, 0);
  const avgDefaultRate = lenderData.reduce((sum, lender) => sum + lender.defaultRate, 0) / lenderData.length;

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Lender Analytics Dashboard</h1>
        <div className="flex gap-4">
          <select 
            value={timeRange} 
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTimeRange(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
          <Button onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" /> Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Lenders</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalLenders}</div>
            <p className="text-xs text-muted-foreground">Active organizations</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Loans</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalLoans.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Across all lenders</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₹{totalAmount.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Disbursed funds</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Default Rate</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {avgDefaultRate.toFixed(2)}%
            </div>
            <p className="text-xs text-muted-foreground">Organization-wide</p>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Loan Volume Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Loan Volume Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={loanVolumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, 'Loan Volume']} />
                <Legend />
                <Bar dataKey="volume" name="Loan Volume (₹)" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        {/* Sector Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Loan Distribution by Sector</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sectorData as ChartData[]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sectorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [value, 'Lenders']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Default Rates */}
        <Card>
          <CardHeader>
            <CardTitle>Default Rates by Lender</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={defaultRateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Default Rate']} />
                <Legend />
                <Bar dataKey="defaultRate" name="Default Rate (%)" fill="#ff6b6b" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        {/* Active vs Total Loans */}
        <Card>
          <CardHeader>
            <CardTitle>Active vs Total Loans</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={activeLoansData} stackOffset="expand">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [value, 'Loans']} />
                <Legend />
                <Bar dataKey="active" name="Active Loans" fill="#00C49F" stackId="a" />
                <Bar dataKey="total" name="Total Loans" fill="#FFBB28" stackId="a" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Monthly Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Loan Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value, name) => {
                  if (name === 'totalLoans') return [value, 'Loans'];
                  if (name === 'totalAmount') return [`₹${Number(value).toLocaleString()}`, 'Amount'];
                  return [value, name];
                }} />
                <Legend />
                <Line type="monotone" dataKey="totalLoans" name="Total Loans" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="totalAmount" name="Total Amount (₹)" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        {/* Performance Radar */}
        <Card>
          <CardHeader>
            <CardTitle>Lender Performance Radar</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
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
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Risk vs Volume Scatter */}
        <Card>
          <CardHeader>
            <CardTitle>Risk vs Volume Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart
                width={400}
                height={400}
                data={scatterData}
              >
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="Total Loans" />
                <YAxis type="number" dataKey="y" name="Default Rate" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="Lenders" dataKey="z" fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        {/* Performance Area Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Lender Performance Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, 'Avg Loan Amount']} />
                <Legend />
                <Area type="monotone" dataKey="performance" name="Avg Loan Amount (₹)" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Additional Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Sector Treemap */}
        <Card>
          <CardHeader>
            <CardTitle>Sector Distribution Treemap</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <Treemap
                data={sectorTreemapData}
                dataKey="size"
                stroke="#fff"
                fill="#8884d8"
              >
                <Tooltip formatter={(value) => [value, 'Lenders']} />
              </Treemap>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        {/* Loan Growth Rate */}
        <Card>
          <CardHeader>
            <CardTitle>Loan Growth Rate by Lender</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={loanGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`${Number(value).toFixed(2)}%`, 'Growth Rate']} />
                <Legend />
                <Bar dataKey="growth" name="Growth Rate (%)" fill="#82ca9d" />
                <Line type="monotone" dataKey="growth" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Lender Performance Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Lender Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lenderPerformanceTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Jan" name="January" stroke="#8884d8" />
                <Line type="monotone" dataKey="Feb" name="February" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Mar" name="March" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        {/* Sector Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Sector Performance Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sectorPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="sector" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip formatter={(value, name) => {
                  if (name === 'totalAmount') return [`₹${Number(value).toLocaleString()}`, 'Amount'];
                  if (name === 'totalLoans') return [value, 'Loans'];
                  if (name === 'defaultRate') return [`${value}%`, 'Default Rate'];
                  return [value, name];
                }} />
                <Legend />
                <Bar yAxisId="left" dataKey="totalAmount" name="Total Amount (₹)" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="defaultRate" name="Default Rate (%)" fill="#ff6b6b" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Lender Details Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lender Details</CardTitle>
        </CardHeader>
        <CardContent>
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
                {lenderData.map((lender) => (
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
        </CardContent>
      </Card>
    </div>
  );
}