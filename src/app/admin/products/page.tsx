"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { 
  CreditCardIcon,
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon
} from "@heroicons/react/24/outline";

const mockProducts = [
  {
    id: "PRD001",
    name: "Personal Loan Premium",
    category: "Personal Loan",
    interestRate: "10.5% - 18.0%",
    minAmount: 50000,
    maxAmount: 1500000,
    tenure: "12-60 months",
    processingFee: "2.0%",
    status: "ACTIVE",
    applications: 245
  },
  {
    id: "PRD002",
    name: "Home Loan Fixed",
    category: "Home Loan", 
    interestRate: "8.5% - 12.0%",
    minAmount: 500000,
    maxAmount: 50000000,
    tenure: "60-300 months",
    processingFee: "0.5%",
    status: "ACTIVE",
    applications: 189
  },
  {
    id: "PRD003",
    name: "Business Growth Loan",
    category: "Business Loan",
    interestRate: "12.0% - 19.0%",
    minAmount: 200000,
    maxAmount: 5000000,
    tenure: "12-48 months", 
    processingFee: "1.5%",
    status: "INACTIVE",
    applications: 134
  }
];

export default function AdminProductsPage() {
  const { data: session } = useSession();
  const [products] = useState(mockProducts);

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
          <h1 className="text-3xl font-bold text-gray-900">Loan Products</h1>
          <p className="text-gray-600 mt-1">Configure loan products and interest rates</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center font-semibold">
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Product
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <CreditCardIcon className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                product.status === 'ACTIVE' 
                  ? 'text-green-600 bg-green-100'
                  : 'text-red-600 bg-red-100'
              }`}>
                {product.status}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Interest Rate:</span>
                <span className="text-sm font-medium text-gray-900">{product.interestRate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Amount Range:</span>
                <span className="text-sm font-medium text-gray-900">
                  {formatCurrency(product.minAmount)} - {formatCurrency(product.maxAmount)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Tenure:</span>
                <span className="text-sm font-medium text-gray-900">{product.tenure}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Processing Fee:</span>
                <span className="text-sm font-medium text-gray-900">{product.processingFee}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Applications:</span>
                <span className="text-sm font-medium text-gray-900">{product.applications}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
              <span className="text-xs text-gray-500">{product.id}</span>
              <div className="flex items-center space-x-2">
                <button className="text-blue-600 hover:text-blue-900" title="View Details">
                  <EyeIcon className="h-4 w-4" />
                </button>
                <button className="text-green-600 hover:text-green-900" title="Edit Product">
                  <PencilIcon className="h-4 w-4" />
                </button>
                <button className="text-red-600 hover:text-red-900" title="Delete Product">
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}