"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";

interface MarketplaceOffer {
  id: string;
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
  createdAt: string;
  updatedAt: string;
  partner: {
    id: string;
    name: string;
    type: string;
    sector: string;
    commissionRate: number;
  };
}

export default function LoanApplicationPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useTranslation();
  const offerId = searchParams.get("offerId");
  
  const [offer, setOffer] = useState<MarketplaceOffer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    amount: "",
    tenure: "",
    purpose: "",
    partnerReference: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (status === "authenticated" && offerId) {
      fetchOfferDetails();
    } else if (status === "authenticated" && !offerId) {
      // If no offerId, redirect to marketplace
      router.push("/loans/marketplace");
    }
  }, [status, offerId, router]);

  const fetchOfferDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/marketplace/offers`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch offer details");
      }
      
      const offers = await response.json();
      const selectedOffer = offers.find((o: MarketplaceOffer) => o.id === offerId);
      
      if (!selectedOffer) {
        throw new Error("Offer not found");
      }
      
      setOffer(selectedOffer);
      setFormData({
        amount: selectedOffer.minAmount.toString(),
        tenure: selectedOffer.tenureOptions[0].toString(),
        purpose: "",
        partnerReference: ""
      });
    } catch (err: any) {
      setError(err.message || "Failed to load offer details");
      console.error("[OFFER_FETCH_ERROR]", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!offer) return;
    
    try {
      setIsSubmitting(true);
      setError(null);
      
      // Validate form data
      const amount = parseFloat(formData.amount);
      const tenure = parseInt(formData.tenure);
      
      if (amount < offer.minAmount || amount > offer.maxAmount) {
        throw new Error(`Amount must be between ₹${offer.minAmount.toLocaleString()} and ₹${offer.maxAmount.toLocaleString()}`);
      }
      
      if (!offer.tenureOptions.includes(tenure)) {
        throw new Error("Invalid tenure option selected");
      }
      
      // Create loan application
      const applicationData = {
        loanSector: offer.loanSector,
        loanType: "CONSUMPTION_LOAN",
        amount: amount,
        tenure: tenure,
        purpose: formData.purpose,
        partnerId: offer.partnerId,
        partnerReference: formData.partnerReference
      };
      
      const response = await fetch("/api/loans/consumption", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit loan application");
      }
      
      const result = await response.json();
      setSubmitSuccess(true);
      
      // Redirect to application status page after 3 seconds
      setTimeout(() => {
        router.push(`/loans/status/${result.applicationId}`);
      }, 3000);
    } catch (err: any) {
      setError(err.message || "Failed to submit loan application");
      console.error("[LOAN_APPLICATION_ERROR]", err);
    } finally {
      setIsSubmitting(false);
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
            onClick={fetchOfferDetails}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            {t("try_again")}
          </button>
        </div>
      </div>
    );
  }

  if (submitSuccess) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h2 className="text-2xl font-semibold text-green-800 mb-2">{t("application_submitted")}</h2>
          <p className="text-green-700 mb-4">{t("application_submitted_description")}</p>
          <p className="text-sm text-gray-500">{t("redirecting_to_status")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{t("apply_for_loan")}</h1>
      
      {offer && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-gray-50 px-6 py-4 border-b">
            <h2 className="text-xl font-semibold">{t("selected_offer")}</h2>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{offer.partner.name}</h3>
                <p className="text-gray-500 capitalize">
                  {t(offer.loanSector.toLowerCase().replace(/_/g, " "))}
                </p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {offer.interestRate}% {t("interest_rate")}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">{t("loan_amount")}</p>
                <p className="font-medium">₹{offer.minAmount.toLocaleString()} - ₹{offer.maxAmount.toLocaleString()}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">{t("processing_fee")}</p>
                <p className="font-medium">₹{offer.processingFee.toLocaleString()}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">{t("tenure_options")}</p>
                <p className="font-medium">{offer.tenureOptions.join(", ")} {t("months")}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">{t("loan_application_form")}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("loan_amount")} *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">₹</span>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  min={offer?.minAmount}
                  max={offer?.maxAmount}
                  className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {t("amount_range")}: ₹{offer?.minAmount.toLocaleString()} - ₹{offer?.maxAmount.toLocaleString()}
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("tenure")} ({t("months")}) *
              </label>
              <select
                value={formData.tenure}
                onChange={(e) => setFormData({...formData, tenure: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                {offer?.tenureOptions.map(option => (
                  <option key={option} value={option}>{option} {t("months")}</option>
                ))}
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("loan_purpose")}
              </label>
              <textarea
                value={formData.purpose}
                onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t("describe_purpose_of_loan")}
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("partner_reference")} *
              </label>
              <input
                type="text"
                value={formData.partnerReference}
                onChange={(e) => setFormData({...formData, partnerReference: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t("invoice_order_number")}
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                {t("partner_reference_help")}
              </p>
            </div>
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-700">{error}</p>
            </div>
          )}
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => router.push("/loans/marketplace")}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              {t("cancel")}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? t("submitting") : t("submit_application")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
