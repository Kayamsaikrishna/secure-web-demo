"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { t } = useTranslation();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (status === "unauthenticated" || session?.user?.role !== "ADMIN") {
    router.push("/login");
    return null;
  }

  const adminStats = [
    { name: "Total Applications", value: "1,234" },
    { name: "Active Loans", value: "856" },
    { name: "Partners", value: "42" },
    { name: "Marketplace Offers", value: "128" },
  ];

  const quickActions = [
    { name: "Create Marketplace Offer", href: "/admin/marketplace" },
    { name: "Manage Partners", href: "/admin/partners" },
    { name: "View Applications", href: "/admin/applications" },
    { name: "User Management", href: "/admin/users" },
  ];

  return (
    <div className="py-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            {t("admin_dashboard")}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            {t("welcome_admin_dashboard")}
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {adminStats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <div className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {t(stat.name)}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          {t("quick_actions")}
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => (
            <Link
              key={action.name}
              href={action.href}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
            >
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <div className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">{t(action.name)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          {t("consumption_ecosystem_overview")}
        </h3>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {t("consumption_driven_lending")}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {t("consumption_ecosystem_description")}
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  {t("key_benefits")}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <span className="ml-2 flex-1 w-0 truncate">
                          {t("funds_used_for_intended_purpose")}
                        </span>
                      </div>
                    </li>
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <span className="ml-2 flex-1 w-0 truncate">
                          {t("reduced_default_risk")}
                        </span>
                      </div>
                    </li>
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <span className="ml-2 flex-1 w-0 truncate">
                          {t("enhanced_partner_relationships")}
                        </span>
                      </div>
                    </li>
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <span className="ml-2 flex-1 w-0 truncate">
                          {t("real_time_disbursement_tracking")}
                        </span>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  {t("supported_sectors")}
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {t("education")}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {t("healthcare")}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      {t("vehicle")}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {t("agriculture")}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {t("home")}
                    </span>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
