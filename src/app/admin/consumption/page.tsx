"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { 
  BuildingOfficeIcon, 
  CurrencyRupeeIcon, 
  ArrowPathIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon
} from "@heroicons/react/24/outline";

interface Partner {
  id: string;
  name: string;
  type: string;
  sector: string;
  status: string;
  commissionRate: number;
  createdAt: string;
}

interface ConsumptionLoan {
  id: string;
  applicationId: string;
  partnerId: string;
  disbursementType: string;
  consumptionType: string;
  partnerReference: string;
  status: string;
  createdAt: string;
  application: {
    id: string;
    amount: number;
    tenure: number;
    status: string;
    user: {
      id: string;
      email: string;
    };
  };
  partner: {
    id: string;
    name: string;
  };
}

export default function ConsumptionAdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("partners");
  const [partners, setPartners] = useState<Partner[]>([]);
  const [consumptionLoans, setConsumptionLoans] = useState<ConsumptionLoan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated" || (status === "authenticated" && session?.user?.role !== "ADMIN")) {
      router.push("/login");
      return;
    }

    if (status === "authenticated" && session?.user?.role === "ADMIN") {
      fetchData();
    }
  }, [status, router, session]);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch partners
      const partnersResponse = await fetch("/api/partners");
      if (!partnersResponse.ok) {
        throw new Error("Failed to fetch partners");
      }
      const partnersData = await partnersResponse.json();
      setPartners(partnersData);
      
      // Fetch consumption loans
      const loansResponse = await fetch("/api/consumption-loans");
      if (!loansResponse.ok) {
        throw new Error("Failed to fetch consumption loans");
      }
      const loansData = await loansResponse.json();
      setConsumptionLoans(loansData);
    } catch (err) {
      setError("Failed to load data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updatePartnerStatus = async (partnerId: string, status: string) => {
    try {
      const response = await fetch(`/api/partners/${partnerId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to update partner status");
      }
      
      // Refresh data
      fetchData();
    } catch (error) {
      console.error("Error updating partner status:", error);
      alert("Failed to update partner status");
    }
  };

  const updateLoanStatus = async (loanId: string, status: string) => {
    try {
      const response = await fetch(`/api/consumption-loans/${loanId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to update loan status");
      }
      
      // Refresh data
      fetchData();
    } catch (error) {
      console.error("Error updating loan status:", error);
      alert("Failed to update loan status");
    }
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (status === "unauthenticated" || session?.user?.role !== "ADMIN") {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h2 className="text-lg font-semibold text-red-800 mb-2">Access Denied</h2>
          <p className="text-red-700">You must be an admin to access this page.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-red-800">{error}</h2>
          <button
            onClick={fetchData}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Consumption Ecosystem Management</h1>
              <p className="text-blue-100 mt-1">
                Manage partners and consumption-linked loans
              </p>
            </div>
            <button
              onClick={fetchData}
              className="flex items-center px-4 py-2 bg-blue-800 hover:bg-blue-900 rounded-lg transition-colors"
            >
              <ArrowPathIcon className="h-5 w-5 mr-2" />
              Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("partners")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "partners"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center">
                <BuildingOfficeIcon className="h-5 w-5 mr-2" />
                Partner Management ({partners.length})
              </div>
            </button>
            <button
              onClick={() => setActiveTab("loans")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "loans"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center">
                <CurrencyRupeeIcon className="h-5 w-5 mr-2" />
                Loan Disbursement ({consumptionLoans.length})
              </div>
            </button>
          </nav>
        </div>

        {/* Partners Tab */}
        {activeTab === "partners" && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Registered Partners</h2>
              <p className="text-gray-600 mt-1">
                Manage partner registrations and status
              </p>
            </div>
            
            {partners.length === 0 ? (
              <div className="text-center py-12">
                <BuildingOfficeIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No partners</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get started by registering a new partner.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/partners")}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    <BuildingOfficeIcon className="-ml-1 mr-2 h-5 w-5" />
                    Register Partner
                  </button>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Partner
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sector
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Commission
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {partners.map((partner) => (
                      <tr key={partner.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{partner.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{partner.type.replace(/_/g, " ")}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{partner.sector.replace(/_/g, " ")}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{partner.commissionRate}%</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            partner.status === "ACTIVE" 
                              ? "bg-green-100 text-green-800" 
                              : partner.status === "PENDING" 
                                ? "bg-yellow-100 text-yellow-800" 
                                : "bg-red-100 text-red-800"
                          }`}>
                            {partner.status.replace(/_/g, " ")}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {partner.status === "PENDING" && (
                            <>
                              <button
                                onClick={() => updatePartnerStatus(partner.id, "ACTIVE")}
                                className="text-green-600 hover:text-green-900 mr-3"
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => updatePartnerStatus(partner.id, "REJECTED")}
                                className="text-red-600 hover:text-red-900"
                              >
                                Reject
                              </button>
                            </>
                          )}
                          {partner.status === "ACTIVE" && (
                            <button
                              onClick={() => updatePartnerStatus(partner.id, "SUSPENDED")}
                              className="text-yellow-600 hover:text-yellow-900"
                            >
                              Suspend
                            </button>
                          )}
                          {partner.status === "SUSPENDED" && (
                            <button
                              onClick={() => updatePartnerStatus(partner.id, "ACTIVE")}
                              className="text-green-600 hover:text-green-900"
                            >
                              Activate
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Consumption Loans Tab */}
        {activeTab === "loans" && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Consumption Loan Disbursements</h2>
              <p className="text-gray-600 mt-1">
                Track and manage consumption-linked loan disbursements
              </p>
            </div>
            
            {consumptionLoans.length === 0 ? (
              <div className="text-center py-12">
                <CurrencyRupeeIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No consumption loans</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Consumption loans will appear here when users apply for partner-linked financing.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Loan ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Partner
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {consumptionLoans.map((loan) => (
                      <tr key={loan.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            #{loan.applicationId?.substring(0, 8) || "N/A"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {loan.application?.user?.email || "No email provided"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{loan.partner?.name || "Unknown partner"}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            ₹{loan.application?.amount?.toLocaleString() || "0"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {loan.consumptionType?.replace(/_/g, " ") || "N/A"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            loan.status === "CONFIRMED" 
                              ? "bg-green-100 text-green-800" 
                              : loan.status === "DISBURSED" 
                                ? "bg-blue-100 text-blue-800" 
                                : loan.status === "PENDING" 
                                  ? "bg-yellow-100 text-yellow-800" 
                                  : "bg-gray-100 text-gray-800"
                          }`}>
                            {loan.status.replace(/_/g, " ")}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {loan.status === "PENDING" && (
                            <>
                              <button
                                onClick={() => updateLoanStatus(loan.id, "DISBURSED")}
                                className="text-green-600 hover:text-green-900 mr-3"
                              >
                                Disburse
                              </button>
                              <button
                                onClick={() => updateLoanStatus(loan.id, "CANCELLED")}
                                className="text-red-600 hover:text-red-900"
                              >
                                Cancel
                              </button>
                            </>
                          )}
                          {loan.status === "DISBURSED" && (
                            <button
                              onClick={() => updateLoanStatus(loan.id, "CONFIRMED")}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Confirm
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}