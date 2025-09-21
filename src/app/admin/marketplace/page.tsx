"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

interface Partner {
  id: string;
  name: string;
  sector: string;
}

interface MarketplaceOfferFormData {
  partnerId: string;
  loanSector: string;
  minAmount: number;
  maxAmount: number;
  interestRate: number;
  processingFee: number;
  tenureOptions: number[];
  isActive: boolean;
  priority: number;
  tags: string[];
}

interface ErrorData {
  error: string;
}

export default function AdminMarketplacePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { t } = useTranslation();
  
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<MarketplaceOfferFormData>({
    partnerId: "",
    loanSector: "PERSONAL_LOAN",
    minAmount: 100000,
    maxAmount: 1000000,
    interestRate: 12.0,
    processingFee: 1000,
    tenureOptions: [12, 24, 36],
    isActive: true,
    priority: 0,
    tags: [],
  });
  
  const [tagsInput, setTagsInput] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (status === "authenticated" && session?.user?.role === "ADMIN") {
      fetchPartners();
    } else if (status === "authenticated" && session?.user?.role !== "ADMIN") {
      router.push("/");
    }
  }, [status, session, router]);

  const fetchPartners = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/partners");
      
      if (!response.ok) {
        throw new Error("Failed to fetch partners");
      }
      
      const data = await response.json();
      setPartners(data);
    } catch (err) {
      setError("Failed to load partners");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    
    try {
      const response = await fetch("/api/marketplace/offers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          tags: tagsInput.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0),
        }),
      });
      
      if (!response.ok) {
        const errorData: ErrorData = await response.json();
        throw new Error(errorData.error || "Failed to create offer");
      }
      
      const newOffer = await response.json();
      setSuccess("Offer created successfully!");
      
      // Reset form
      setFormData({
        partnerId: "",
        loanSector: "PERSONAL_LOAN",
        minAmount: 100000,
        maxAmount: 1000000,
        interestRate: 12.0,
        processingFee: 1000,
        tenureOptions: [12, 24, 36],
        isActive: true,
        priority: 0,
        tags: [],
      });
      setTagsInput("");
      
      // Optionally refresh the page or show the new offer
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to create offer";
      setError(errorMessage);
      console.error(err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked,
      }));
    } else if (type === "number") {
      setFormData(prev => ({
        ...prev,
        [name]: parseFloat(value) || 0,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  if (status === "loading" || loading) {
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
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{t("admin_marketplace_management")}</h1>
      
      {success && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-700">{success}</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">{t("create_new_offer")}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("partner")}
            </label>
            <select
              name="partnerId"
              value={formData.partnerId}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">{t("select_partner")}</option>
              {partners.map((partner) => (
                <option key={partner.id} value={partner.id}>
                  {partner.name} ({partner.sector})
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("loan_sector")}
            </label>
            <select
              name="loanSector"
              value={formData.loanSector}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="PERSONAL_LOAN">{t("loan_sectors.personal.name")}</option>
              <option value="HOME_LOAN">{t("loan_sectors.home.name")}</option>
              <option value="VEHICLE_LOAN">{t("loan_sectors.vehicle.name")}</option>
              <option value="BUSINESS_LOAN">{t("loan_sectors.business.name")}</option>
              <option value="EDUCATION_LOAN">{t("loan_sectors.education.name")}</option>
              <option value="HEALTHCARE_LOAN">{t("loan_sectors.healthcare.name")}</option>
              <option value="GOLD_LOAN">{t("loan_sectors.gold.name")}</option>
              <option value="AGRICULTURE_LOAN">{t("loan_sectors.agriculture.name")}</option>
              <option value="TWO_WHEELER_LOAN">{t("loan_sectors.two_wheeler.name")}</option>
              <option value="CREDIT_CARD">{t("loan_sectors.credit_card.name")}</option>
              <option value="DIGITAL_LOAN">{t("loan_sectors.digital.name")}</option>
              <option value="MICROFINANCE">{t("loan_sectors.microfinance.name")}</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("min_amount")}
              </label>
              <input
                type="number"
                name="minAmount"
                value={formData.minAmount}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("max_amount")}
              </label>
              <input
                type="number"
                name="maxAmount"
                value={formData.maxAmount}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("interest_rate")} (%)
              </label>
              <input
                type="number"
                step="0.1"
                name="interestRate"
                value={formData.interestRate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("processing_fee")}
              </label>
              <input
                type="number"
                name="processingFee"
                value={formData.processingFee}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("tenure_options")} ({t("comma_separated")})
            </label>
            <input
              type="text"
              value={formData.tenureOptions.join(", ")}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                tenureOptions: e.target.value.split(",").map(opt => parseInt(opt.trim())).filter(opt => !isNaN(opt))
              }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="12, 24, 36"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("tags")} ({t("comma_separated")})
            </label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="education, student, university"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("priority")}
              </label>
              <input
                type="number"
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                {t("is_active")}
              </label>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {t("create_offer")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}