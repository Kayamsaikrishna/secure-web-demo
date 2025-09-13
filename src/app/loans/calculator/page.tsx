"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  CalculatorIcon,
  CurrencyRupeeIcon,
  CalendarIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";

// Loan sector configurations for calculator
const calculatorSectors = {
  personal: { name: "Personal Loan", rate: 12.5, maxAmount: 1500000, maxTenure: 60 },
  home: { name: "Home Loan", rate: 8.5, maxAmount: 50000000, maxTenure: 300 },
  vehicle: { name: "Vehicle Loan", rate: 9.5, maxAmount: 5000000, maxTenure: 84 },
  business: { name: "Business Loan", rate: 14.0, maxAmount: 10000000, maxTenure: 60 },
  education: { name: "Education Loan", rate: 10.5, maxAmount: 7500000, maxTenure: 180 },
  agriculture: { name: "Agriculture Loan", rate: 7.0, maxAmount: 2000000, maxTenure: 36 },
  gold: { name: "Gold Loan", rate: 12.0, maxAmount: 2000000, maxTenure: 36 },
  "credit-card": { name: "Credit Card", rate: 42.0, maxAmount: 2000000, maxTenure: 36 },
  "two-wheeler": { name: "Two Wheeler", rate: 13.5, maxAmount: 300000, maxTenure: 36 },
  healthcare: { name: "Healthcare Loan", rate: 14.5, maxAmount: 1000000, maxTenure: 48 },
  digital: { name: "Digital Loan", rate: 18.0, maxAmount: 500000, maxTenure: 24 },
  microfinance: { name: "Microfinance", rate: 20.0, maxAmount: 100000, maxTenure: 36 }
};

export default function LoanCalculatorPage() {
  const [selectedLoanType, setSelectedLoanType] = useState("personal");
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(12.5);
  const [tenure, setTenure] = useState(36);
  const [emi, setEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [monthlyBreakdown, setMonthlyBreakdown] = useState<any[]>([]);

  useEffect(() => {
    // Update rate when loan type changes
    const sector = calculatorSectors[selectedLoanType as keyof typeof calculatorSectors];
    if (sector) {
      setRate(sector.rate);
    }
  }, [selectedLoanType]);

  useEffect(() => {
    // Calculate EMI
    const monthlyRate = rate / 100 / 12;
    const emiCalculated = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / 
                         (Math.pow(1 + monthlyRate, tenure) - 1);
    
    if (isFinite(emiCalculated)) {
      setEMI(Math.round(emiCalculated));
      const totalAmountCalculated = emiCalculated * tenure;
      const totalInterestCalculated = totalAmountCalculated - principal;
      
      setTotalAmount(Math.round(totalAmountCalculated));
      setTotalInterest(Math.round(totalInterestCalculated));
      
      // Generate monthly breakdown for first 12 months
      const breakdown = [];
      let balance = principal;
      
      for (let month = 1; month <= Math.min(12, tenure); month++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = emiCalculated - interestPayment;
        balance -= principalPayment;
        
        breakdown.push({
          month,
          emi: Math.round(emiCalculated),
          principal: Math.round(principalPayment),
          interest: Math.round(interestPayment),
          balance: Math.round(Math.max(0, balance))
        });
      }
      
      setMonthlyBreakdown(breakdown);
    }
  }, [principal, rate, tenure]);

  const currentSector = calculatorSectors[selectedLoanType as keyof typeof calculatorSectors];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                <CalculatorIcon className="h-8 w-8 mr-3" />
                Loan EMI Calculator
              </h1>
              <p className="text-blue-100 mt-1">Calculate your EMI across all loan types with detailed breakdown</p>
            </div>
            <Link
              href="/loans"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
            >
              View All Loans
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Input Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Calculator</h2>
              
              {/* Loan Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Loan Type
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.entries(calculatorSectors).map(([key, sector]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedLoanType(key)}
                      className={`p-3 text-sm font-medium rounded-lg border transition-all duration-200 ${
                        selectedLoanType === key
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      {sector.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount (₹)
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max={currentSector.maxAmount}
                    step="10000"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹10K</span>
                    <span className="font-semibold text-blue-600">₹{(principal/100000).toFixed(1)}L</span>
                    <span>₹{(currentSector.maxAmount/100000).toFixed(1)}L</span>
                  </div>
                  <input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest Rate (% per annum)
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>5%</span>
                    <span className="font-semibold text-blue-600">{rate}%</span>
                    <span>50%</span>
                  </div>
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    step="0.1"
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter rate"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Tenure (Months)
                  </label>
                  <input
                    type="range"
                    min="6"
                    max={currentSector.maxTenure}
                    step="6"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>6 months</span>
                    <span className="font-semibold text-blue-600">
                      {tenure} months ({Math.round(tenure/12 * 10)/10} years)
                    </span>
                    <span>{currentSector.maxTenure} months</span>
                  </div>
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter tenure in months"
                  />
                </div>
              </div>

              {/* Apply Now Button */}
              <div className="mt-6">
                <Link
                  href={`/loans/apply?type=${selectedLoanType}&amount=${principal}&tenure=${tenure}`}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center"
                >
                  Apply for {currentSector.name}
                  <CurrencyRupeeIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Monthly Breakdown Table */}
            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <ChartBarIcon className="h-6 w-6 mr-2" />
                Monthly Payment Breakdown (First 12 Months)
              </h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Month
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        EMI
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Principal
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Interest
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Balance
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {monthlyBreakdown.map((month) => (
                      <tr key={month.month} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {month.month}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₹{month.emi.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                          ₹{month.principal.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">
                          ₹{month.interest.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₹{month.balance.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            {/* EMI Result */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CurrencyRupeeIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Monthly EMI</h3>
                <p className="text-3xl font-bold text-blue-600">₹{emi.toLocaleString()}</p>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <CurrencyRupeeIcon className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">Principal Amount</span>
                  </div>
                  <span className="font-semibold text-gray-900">₹{principal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center">
                    <ArrowTrendingUpIcon className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-sm text-gray-600">Total Interest</span>
                  </div>
                  <span className="font-semibold text-red-600">₹{totalInterest.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Total Amount</span>
                  </div>
                  <span className="font-semibold text-green-600">₹{totalAmount.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-sm text-gray-600">Loan Tenure</span>
                  </div>
                  <span className="font-semibold text-blue-600">
                    {tenure} months ({Math.round(tenure/12 * 10)/10} years)
                  </span>
                </div>
              </div>
            </div>

            {/* Interest vs Principal Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Breakdown</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Principal</span>
                    <span className="font-medium">{((principal/totalAmount)*100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-green-500 h-3 rounded-full"
                      style={{ width: `${(principal/totalAmount)*100}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Interest</span>
                    <span className="font-medium">{((totalInterest/totalAmount)*100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-red-500 h-3 rounded-full"
                      style={{ width: `${(totalInterest/totalAmount)*100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">💡 Quick Tips</h3>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• Lower tenure = Higher EMI but less total interest</li>
                <li>• Higher down payment reduces loan amount</li>
                <li>• Compare rates across different lenders</li>
                <li>• Check for prepayment charges</li>
                <li>• Maintain good credit score for better rates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}