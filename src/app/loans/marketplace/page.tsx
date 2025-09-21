"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
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

export default function MarketplacePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { t } = useTranslation();
  const [offers, setOffers] = useState<MarketplaceOffer[]>([]);
  const [filteredOffers, setFilteredOffers] = useState<MarketplaceOffer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("ALL");
  const [sortBy, setSortBy] = useState("priority");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (status === "authenticated") {
      fetchOffers();
    }
  }, [status, router]);

  useEffect(() => {
    // Filter and sort offers
    let result = [...offers];
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(offer => 
        offer.partner.name.toLowerCase().includes(term) ||
        offer.tags.some(tag => tag.toLowerCase().includes(term)) ||
        offer.loanSector.toLowerCase().includes(term)
      );
    }
    
    // Apply sector filter
    if (selectedSector !== "ALL") {
      result = result.filter(offer => offer.loanSector === selectedSector);
    }
    
    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === "interestRate") {
        return a.interestRate - b.interestRate;
      } else if (sortBy === "amount") {
        return b.maxAmount - a.maxAmount;
      } else {
        return b.priority - a.priority;
      }
    });
    
    setFilteredOffers(result);
  }, [offers, searchTerm, selectedSector, sortBy]);

  const fetchOffers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch("/api/marketplace/offers");
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("You must be logged in to view offers");
        } else if (response.status === 500) {
          throw new Error("Server error. Please try again later.");
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch offers");
        }
      }
      
      const data: MarketplaceOffer[] = await response.json();
      setOffers(data);
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "Failed to load marketplace offers");
      console.error("[MARKETPLACE_FETCH_ERROR]", error);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = (offerId: string) => {
    // Redirect to loan application with pre-filled offer data
    router.push(`/loans/apply?offerId=${offerId}`);
  };

  // Get unique sectors for filter dropdown
  const getSectors = () => {
    const sectors = [...new Set(offers.map(offer => offer.loanSector))];
    return sectors;
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
            onClick={fetchOffers}
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
      <h1 className="text-3xl font-bold mb-6">{t("consumption_marketplace")}</h1>
      
      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("search")}
            </label>
            <input
              type="text"
              placeholder={t("search_offers")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("loan_sector")}
            </label>
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ALL">{t("all_sectors")}</option>
              {getSectors().map(sector => (
                <option key={sector} value={sector}>
                  {t(`loan_sectors.${sector.toLowerCase().replace(/_loan$/, '').replace(/_/g, "-")}`)}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("sort_by")}
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="priority">{t("recommended")}</option>
              <option value="interestRate">{t("lowest_interest_rate")}</option>
              <option value="amount">{t("highest_amount")}</option>
            </select>
          </div>
        </div>
      </div>
      
      {filteredOffers.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-gray-100 rounded-lg p-8 max-w-md mx-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-2">{t("no_offers_available")}</h3>
            <p className="text-gray-500 mb-4">
              {searchTerm || selectedSector !== "ALL" 
                ? t("no_offers_match_criteria") 
                : t("check_back_later_for_new_offers")}
            </p>
            <button
              onClick={fetchOffers}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {t("refresh")}
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{offer.partner.name}</h2>
                    <p className="text-sm text-gray-500 capitalize">
                      {t(`loan_sectors.${offer.loanSector.toLowerCase().replace(/_loan$/, '').replace(/_/g, "-")}`)}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {offer.interestRate}% {t("interest_rate")}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t("loan_amount")}:</span>
                    <span className="font-medium">
                      ₹{offer.minAmount.toLocaleString()} - ₹{offer.maxAmount.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t("processing_fee")}:</span>
                    <span className="font-medium">₹{offer.processingFee.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t("tenure_options")}:</span>
                    <span className="font-medium">
                      {offer.tenureOptions.join(", ")} {t("months")}
                    </span>
                  </div>
                  
                  {offer.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {offer.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                      {offer.tags.length > 3 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          +{offer.tags.length - 3} {t("more")}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="mt-4">
                  <button
                    onClick={() => handleApply(offer.id)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                  >
                    {t("apply_now")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}