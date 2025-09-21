"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  BuildingOfficeIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  InformationCircleIcon
} from "@heroicons/react/24/outline";

// Schema for partner onboarding
const partnerSchema = z.object({
  name: z.string().min(1, "Partner name is required"),
  type: z.enum(["UNIVERSITY", "HOSPITAL", "DEALER", "SUPPLIER", "ECOMMERCE", "SERVICE_PROVIDER", "OTHER"]),
  sector: z.enum([
    "PERSONAL_LOAN", "HOME_LOAN", "VEHICLE_LOAN", "BUSINESS_LOAN", 
    "GOLD_LOAN", "EDUCATION_LOAN", "AGRICULTURE_LOAN", "MICROFINANCE", 
    "CREDIT_CARD", "TWO_WHEELER_LOAN", "HEALTHCARE_LOAN", "DIGITAL_LOAN"
  ]),
  commissionRate: z.number().min(0).max(100),
  contactPerson: z.string().min(1, "Contact person is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
});

// Define the data type for form submission
interface PartnerFormData {
  name: string;
  type: "UNIVERSITY" | "HOSPITAL" | "DEALER" | "SUPPLIER" | "ECOMMERCE" | "SERVICE_PROVIDER" | "OTHER";
  sector: "PERSONAL_LOAN" | "HOME_LOAN" | "VEHICLE_LOAN" | "BUSINESS_LOAN" | "GOLD_LOAN" | "EDUCATION_LOAN" | "AGRICULTURE_LOAN" | "MICROFINANCE" | "CREDIT_CARD" | "TWO_WHEELER_LOAN" | "HEALTHCARE_LOAN" | "DIGITAL_LOAN";
  commissionRate: number;
  contactPerson: string;
  email: string;
  phone: string;
}

export default function PartnerOnboardingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<PartnerFormData>({
    resolver: zodResolver(partnerSchema),
  });

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

  const onSubmit = async (data: PartnerFormData) => {
    try {
      setIsSubmitting(true);
      
      const response = await fetch("/api/partners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Failed to create partner");
      }
      
      setSuccess(true);
      
      // Redirect to partners list after 2 seconds
      setTimeout(() => {
        router.push("/admin/partners");
      }, 2000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to create partner. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center">
            <BuildingOfficeIcon className="h-8 w-8 mr-3" />
            <h1 className="text-3xl font-bold">Partner Onboarding</h1>
          </div>
          <p className="text-blue-100 mt-2">
            Register a new partner for the consumption ecosystem
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {success ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircleIcon className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Partner Registered Successfully!</h2>
            <p className="text-gray-600 mb-6">
              The partner has been successfully registered in the system.
            </p>
            <p className="text-gray-500">
              Redirecting to partners list...
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Partner Information</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Partner Name *
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter partner name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Partner Type *
                  </label>
                  <select
                    {...register("type")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Partner Type</option>
                    <option value="UNIVERSITY">University/Educational Institution</option>
                    <option value="HOSPITAL">Hospital/Medical Center</option>
                    <option value="DEALER">Vehicle Dealer</option>
                    <option value="SUPPLIER">Agricultural Supplier</option>
                    <option value="ECOMMERCE">E-commerce Platform</option>
                    <option value="SERVICE_PROVIDER">Service Provider</option>
                    <option value="OTHER">Other</option>
                  </select>
                  {errors.type && (
                    <p className="text-red-500 text-sm mt-1">{errors.type.message as string}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Sector *
                  </label>
                  <select
                    {...register("sector")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Loan Sector</option>
                    <option value="PERSONAL_LOAN">Personal Loan</option>
                    <option value="HOME_LOAN">Home Loan</option>
                    <option value="VEHICLE_LOAN">Vehicle Loan</option>
                    <option value="BUSINESS_LOAN">Business Loan</option>
                    <option value="GOLD_LOAN">Gold Loan</option>
                    <option value="EDUCATION_LOAN">Education Loan</option>
                    <option value="AGRICULTURE_LOAN">Agriculture Loan</option>
                    <option value="MICROFINANCE">Microfinance</option>
                    <option value="CREDIT_CARD">Credit Card</option>
                    <option value="TWO_WHEELER_LOAN">Two Wheeler Loan</option>
                    <option value="HEALTHCARE_LOAN">Healthcare Loan</option>
                    <option value="DIGITAL_LOAN">Digital Loan</option>
                  </select>
                  {errors.sector && (
                    <p className="text-red-500 text-sm mt-1">{errors.sector.message as string}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Commission Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="100"
                    {...register("commissionRate", { valueAsNumber: true })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter commission rate"
                  />
                  {errors.commissionRate && (
                    <p className="text-red-500 text-sm mt-1">{errors.commissionRate.message as string}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    {...register("contactPerson")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Name of primary contact"
                  />
                  {errors.contactPerson && (
                    <p className="text-red-500 text-sm mt-1">{errors.contactPerson.message as string}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="contact@partner.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>
                  )}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex">
                  <InformationCircleIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900">Partner Integration</h4>
                    <p className="text-sm text-blue-800 mt-1">
                      After registration, the partner will receive an API key for integration with the Fin-Agentix platform.
                      They will be able to create loan offers and receive direct disbursements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Registering...
                    </>
                  ) : (
                    <>
                      Register Partner
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}