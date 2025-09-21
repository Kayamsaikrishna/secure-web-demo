"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import Link from "next/link";

interface Stats {
  totalPartners: number;
  totalOffers: number;
  activeLoans: number;
  pendingApprovals: number;
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { t } = useTranslation();
  const [stats, setStats] = useState<Stats>({
    totalPartners: 0,
    totalOffers: 0,
    activeLoans: 0,
    pendingApprovals: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (status === "authenticated" && session?.user?.role === "ADMIN") {
      fetchStats();
    } else if (status === "authenticated" && session?.user?.role !== "ADMIN") {
      router.push("/dashboard");
    }
  }, [status, session, router]);

  const fetchStats = async () => {
    try {
      setLoading(true);
      
      // Fetch partners count
      const partnersRes = await fetch("/api/partners");
      const partners = partnersRes.ok ? await partnersRes.json() : [];
      
      // Fetch offers count
      const offersRes = await fetch("/api/marketplace/offers");
      const offers = offersRes.ok ? await offersRes.json() : [];
      
      // For now, we'll simulate the other counts
      setStats({
        totalPartners: partners.length,
        totalOffers: offers.length,
        activeLoans: 12, // Simulated data
        pendingApprovals: 5 // Simulated data
      });
    } catch (error) {
      console.error("[ADMIN_DASHBOARD_STATS_ERROR]", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: t("total_partners"),
      value: stats.totalPartners,
      icon: "🏢",
      color: "bg-blue-500",
      link: "/admin/partners"
    },
    {
      title: t("total_offers"),
      value: stats.totalOffers,
      icon: "💼",
      color: "bg-green-500",
      link: "/admin/marketplace"
    },
    {
      title: t("active_loans"),
      value: stats.activeLoans,
      icon: "💰",
      color: "bg-yellow-500",
      link: "/admin/loans"
    },
    {
      title: t("pending_approvals"),
      value: stats.pendingApprovals,
      icon: "📋",
      color: "bg-purple-500",
      link: "/admin/approvals"
    }
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{t("admin_dashboard")}</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <Link 
            key={index} 
            href={stat.link}
            className="block"
          >
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center">
                <div className={`${stat.color} rounded-full p-3 mr-4`}>
                  <span className="text-white text-xl">{stat.icon}</span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">{t("quick_actions")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link 
            href="/admin/partners" 
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <span className="text-blue-600">🏢</span>
              </div>
              <div>
                <h3 className="font-medium">{t("manage_partners")}</h3>
                <p className="text-sm text-gray-500">{t("add_edit_partners")}</p>
              </div>
            </div>
          </Link>
          
          <Link 
            href="/admin/marketplace" 
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <span className="text-green-600">💼</span>
              </div>
              <div>
                <h3 className="font-medium">{t("manage_marketplace")}</h3>
                <p className="text-sm text-gray-500">{t("create_edit_offers")}</p>
              </div>
            </div>
          </Link>
          
          <Link 
            href="/admin/loans" 
            className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center">
              <div className="bg-yellow-100 rounded-full p-2 mr-3">
                <span className="text-yellow-600">💰</span>
              </div>
              <div>
                <h3 className="font-medium">{t("manage_loans")}</h3>
                <p className="text-sm text-gray-500">{t("view_track_loans")}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">{t("recent_activity")}</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-gray-100 rounded-full p-2 mr-3">
              <span className="text-gray-600">📝</span>
            </div>
            <div>
              <p className="font-medium">{t("new_partner_registered")}</p>
              <p className="text-sm text-gray-500">IIT Madras - {t("education_loan")}</p>
              <p className="text-xs text-gray-400">2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-100 rounded-full p-2 mr-3">
              <span className="text-gray-600">✅</span>
            </div>
            <div>
              <p className="font-medium">{t("loan_offer_created")}</p>
              <p className="text-sm text-gray-500">Test University - {t("education_loan")}</p>
              <p className="text-xs text-gray-400">5 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-100 rounded-full p-2 mr-3">
              <span className="text-gray-600">🏦</span>
            </div>
            <div>
              <p className="font-medium">{t("consumption_loan_disbursed")}</p>
              <p className="text-sm text-gray-500">Application #APP-12345 - ₹2,50,000</p>
              <p className="text-xs text-gray-400">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}