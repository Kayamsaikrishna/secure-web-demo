"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

interface Partner {
  id: string;
  name: string;
  type: string;
  sector: string;
  status: string;
  commissionRate: number;
  contactPerson: string;
  email: string;
  phone: string;
  integrationStatus: string;
  apiKey: string;
  createdAt: string;
}

interface ErrorData {
  error: string;
}

export default function PartnersManagementPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { t } = useTranslation();
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newPartner, setNewPartner] = useState({
    name: "",
    type: "UNIVERSITY",
    sector: "EDUCATION_LOAN",
    contactPerson: "",
    email: "",
    phone: "",
    commissionRate: 2.5,
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (status === "authenticated" && session?.user?.role === "ADMIN") {
      fetchPartners();
    } else if (status === "authenticated" && session?.user?.role !== "ADMIN") {
      router.push("/dashboard");
    }
  }, [status, session, router]);

  const fetchPartners = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch("/api/partners");
      
      if (!response.ok) {
        throw new Error("Failed to fetch partners");
      }
      
      const data = await response.json();
      setPartners(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to load partners";
      setError(errorMessage);
      console.error("[PARTNERS_FETCH_ERROR]", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePartner = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/partners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPartner),
      });
      
      if (!response.ok) {
        const errorData: ErrorData = await response.json();
        throw new Error(errorData.error || "Failed to create partner");
      }
      
      const createdPartner = await response.json();
      setPartners([createdPartner, ...partners]);
      setShowCreateForm(false);
      setNewPartner({
        name: "",
        type: "UNIVERSITY",
        sector: "EDUCATION_LOAN",
        contactPerson: "",
        email: "",
        phone: "",
        commissionRate: 2.5,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to create partner";
      setError(errorMessage);
      console.error("[PARTNER_CREATION_ERROR]", err);
    }
  };

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
          <h2 className="text-lg font-semibold text-red-800">{t("error")}</h2>
          <p className="text-red-700">{error}</p>
          <button
            onClick={fetchPartners}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            {t("try_again")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{t("admin_partners_management")}</h1>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {showCreateForm ? t("cancel") : t("add_new_partner")}
        </button>
      </div>

      {showCreateForm && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">{t("create_new_partner")}</h2>
          <form onSubmit={handleCreatePartner}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("partner_name")}
                </label>
                <input
                  type="text"
                  value={newPartner.name}
                  onChange={(e) => setNewPartner({...newPartner, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact_person")}
                </label>
                <input
                  type="text"
                  value={newPartner.contactPerson}
                  onChange={(e) => setNewPartner({...newPartner, contactPerson: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("email")}
                </label>
                <input
                  type="email"
                  value={newPartner.email}
                  onChange={(e) => setNewPartner({...newPartner, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("phone")}
                </label>
                <input
                  type="tel"
                  value={newPartner.phone}
                  onChange={(e) => setNewPartner({...newPartner, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("partner_type")}
                </label>
                <select
                  value={newPartner.type}
                  onChange={(e) => setNewPartner({...newPartner, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="UNIVERSITY">{t("university")}</option>
                  <option value="HOSPITAL">{t("hospital")}</option>
                  <option value="DEALER">{t("dealer")}</option>
                  <option value="SUPPLIER">{t("supplier")}</option>
                  <option value="ECOMMERCE">{t("ecommerce")}</option>
                  <option value="SERVICE_PROVIDER">{t("service_provider")}</option>
                  <option value="OTHER">{t("other")}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("loan_sector")}
                </label>
                <select
                  value={newPartner.sector}
                  onChange={(e) => setNewPartner({...newPartner, sector: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="PERSONAL_LOAN">{t("personal_loan")}</option>
                  <option value="HOME_LOAN">{t("home_loan")}</option>
                  <option value="VEHICLE_LOAN">{t("vehicle_loan")}</option>
                  <option value="BUSINESS_LOAN">{t("business_loan")}</option>
                  <option value="GOLD_LOAN">{t("gold_loan")}</option>
                  <option value="EDUCATION_LOAN">{t("education_loan")}</option>
                  <option value="AGRICULTURE_LOAN">{t("agriculture_loan")}</option>
                  <option value="MICROFINANCE">{t("microfinance")}</option>
                  <option value="CREDIT_CARD">{t("credit_card")}</option>
                  <option value="TWO_WHEELER_LOAN">{t("two_wheeler_loan")}</option>
                  <option value="HEALTHCARE_LOAN">{t("healthcare_loan")}</option>
                  <option value="DIGITAL_LOAN">{t("digital_loan")}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("commission_rate")} (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="100"
                  value={newPartner.commissionRate}
                  onChange={(e) => setNewPartner({...newPartner, commissionRate: parseFloat(e.target.value) || 0})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowCreateForm(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                {t("cancel")}
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {t("create_partner")}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t("partner")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t("type")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t("sector")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t("contact")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t("commission_rate")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t("status")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t("integration")}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {partners.map((partner) => (
                <tr key={partner.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{partner.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{t(partner.type.toLowerCase())}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{t(partner.sector.toLowerCase().replace(/_/g, " "))}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{partner.contactPerson}</div>
                    <div className="text-sm text-gray-500">{partner.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{partner.commissionRate}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${partner.status === "ACTIVE" ? "bg-green-100 text-green-800" : 
                        partner.status === "PENDING" ? "bg-yellow-100 text-yellow-800" : 
                        partner.status === "VERIFIED" ? "bg-blue-100 text-blue-800" : 
                        "bg-red-100 text-red-800"}`}>
                      {t(partner.status.toLowerCase())}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${partner.integrationStatus === "INTEGRATED" ? "bg-green-100 text-green-800" : 
                        partner.integrationStatus === "INTEGRATION_IN_PROGRESS" ? "bg-yellow-100 text-yellow-800" : 
                        "bg-gray-100 text-gray-800"}`}>
                      {t(partner.integrationStatus.toLowerCase().replace(/_/g, " "))}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {partners.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-lg p-8 max-w-md mx-auto">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{t("no_partners_found")}</h3>
              <p className="text-gray-500 mb-4">{t("create_first_partner")}</p>
              <button
                onClick={() => setShowCreateForm(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {t("add_new_partner")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}