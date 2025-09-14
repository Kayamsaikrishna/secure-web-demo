"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { 
  UserIcon, 
  ShieldCheckIcon,
  CogIcon,
  ChartBarIcon,
  UsersIcon,
  DocumentTextIcon,
  PencilIcon,
  CheckBadgeIcon,
  XCircleIcon,
  ClockIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

interface AdminProfile {
  id: string;
  fullName: string;
  role: string;
  adminLevel: string;
  permissions: string[];
  lastLogin: string;
  sessionsCount: number;
}

interface SystemStats {
  totalUsers: number;
  totalApplications: number;
  pendingApplications: number;
  approvedApplications: number;
  totalLoanSchemes: number;
  activeLoanSchemes: number;
  totalDisbursed: number;
}

export default function AdminProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [profile, setProfile] = useState<AdminProfile | null>(null);
  const [systemStats, setSystemStats] = useState<SystemStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (session?.user && (session.user as any)?.role !== "ADMIN") {
      router.push("/profile");
      return;
    }

    if (session?.user) {
      // Set mock admin data
      setProfile({
        id: session?.user?.id || "admin-1",
        fullName: session?.user?.name || "System Administrator",
        role: "ADMIN",
        adminLevel: "SUPER_ADMIN",
        permissions: ["USER_MANAGEMENT", "APPLICATION_MANAGEMENT", "SYSTEM_CONFIG", "REPORTS", "ANALYTICS"],
        lastLogin: new Date().toISOString(),
        sessionsCount: 142
      });

      setSystemStats({
        totalUsers: 1247,
        totalApplications: 589,
        pendingApplications: 23,
        approvedApplications: 456,
        totalLoanSchemes: 18,
        activeLoanSchemes: 15,
        totalDisbursed: 45630000000
      });
      
      setLoading(false);
    }
  }, [session, status]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin profile...</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", name: "System Overview", icon: ChartBarIcon },
    { id: "personal", name: "Admin Info", icon: UserIcon },
    { id: "permissions", name: "Permissions", icon: ShieldCheckIcon },
    { id: "settings", name: "Settings", icon: CogIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Admin Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 shadow rounded-lg mb-6">
          <div className="px-6 py-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-red-800 flex items-center justify-center text-white text-2xl font-bold">
                  <ShieldCheckIcon className="w-8 h-8" />
                </div>
                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-white">{profile?.fullName}</h1>
                  <p className="text-red-100">{session?.user?.email}</p>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900 text-red-100">
                      <ShieldCheckIcon className="w-3 h-3 mr-1" />
                      ADMINISTRATOR
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-400 text-yellow-900">
                      <CheckBadgeIcon className="w-3 h-3 mr-1" />
                      VERIFIED
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <Link
                  href="/admin/settings"
                  className="inline-flex items-center px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-100 hover:bg-red-800"
                >
                  <CogIcon className="w-4 h-4 mr-2" />
                  System Settings
                </Link>
              </div>
            </div>
          </div>
          
          {/* Admin Tabs */}
          <div className="px-6 border-t border-red-500">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                      activeTab === tab.id
                        ? "border-white text-white"
                        : "border-transparent text-red-200 hover:text-white hover:border-red-300"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-6">
            {activeTab === "overview" && systemStats && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">System Overview & Statistics</h3>
                
                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center">
                      <UsersIcon className="w-8 h-8 text-blue-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-blue-600">Total Users</p>
                        <p className="text-2xl font-bold text-blue-900">{systemStats.totalUsers.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center">
                      <DocumentTextIcon className="w-8 h-8 text-green-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-green-600">Total Applications</p>
                        <p className="text-2xl font-bold text-green-900">{systemStats.totalApplications.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <div className="flex items-center">
                      <ClockIcon className="w-8 h-8 text-yellow-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-yellow-600">Pending Review</p>
                        <p className="text-2xl font-bold text-yellow-900">{systemStats.pendingApplications}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center">
                      <CheckBadgeIcon className="w-8 h-8 text-green-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-green-600">Approved</p>
                        <p className="text-2xl font-bold text-green-900">{systemStats.approvedApplications}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <div className="flex items-center">
                      <DocumentTextIcon className="w-8 h-8 text-purple-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-purple-600">Active Loan Schemes</p>
                        <p className="text-2xl font-bold text-purple-900">{systemStats.activeLoanSchemes}/{systemStats.totalLoanSchemes}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                    <div className="flex items-center">
                      <ChartBarIcon className="w-8 h-8 text-indigo-600" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-indigo-600">Total Disbursed</p>
                        <p className="text-2xl font-bold text-indigo-900">₹{(systemStats.totalDisbursed / 10000000).toFixed(1)}Cr</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Admin Quick Actions */}
                <div className="border-t pt-6">
                  <h4 className="text-md font-medium text-gray-900 mb-4">Loan Management Actions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link href="/admin/loan-schemes" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-center">
                      <DocumentTextIcon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900">Manage Loan Schemes</p>
                    </Link>
                    <Link href="/admin/applications" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-center">
                      <UsersIcon className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900">Review Applications</p>
                    </Link>
                    <Link href="/admin/loan-schemes/create" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-center">
                      <ChartBarIcon className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900">Create New Scheme</p>
                    </Link>
                    <Link href="/admin/disbursements" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-center">
                      <DocumentTextIcon className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-900">Loan Disbursements</p>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "personal" && profile && (
              <div className="max-w-2xl">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Administrator Information</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                    <dd className="text-sm text-gray-900">{profile.fullName}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email Address</dt>
                    <dd className="text-sm text-gray-900">{session?.user?.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Admin Level</dt>
                    <dd className="text-sm text-gray-900">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        {profile.adminLevel.replace('_', ' ')}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Last Login</dt>
                    <dd className="text-sm text-gray-900">{new Date(profile.lastLogin).toLocaleString()}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Total Sessions</dt>
                    <dd className="text-sm text-gray-900">{profile.sessionsCount}</dd>
                  </div>
                </dl>
              </div>
            )}

            {activeTab === "permissions" && profile && (
              <div className="max-w-4xl">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Admin Permissions & Access Control</h3>
                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex">
                      <ShieldCheckIcon className="w-5 h-5 text-red-400" />
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">Security Notice</h3>
                        <p className="text-sm text-red-700 mt-1">
                          As a {profile.adminLevel.replace('_', ' ')}, you have elevated access to system functions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-3">Current Permissions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {profile.permissions.map((permission, index) => (
                        <div key={index} className="flex items-center p-3 border border-gray-200 rounded-lg">
                          <CheckBadgeIcon className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-sm font-medium text-gray-900">
                            {permission.replace('_', ' ')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="max-w-4xl">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Admin System Settings</h3>
                <div className="space-y-6">
                  {/* System Configuration */}
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-md font-medium text-gray-900 mb-4">System Configuration</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Auto-Approval Threshold</span>
                          <span className="text-sm text-gray-900 font-medium">₹5,00,000</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Minimum Credit Score</span>
                          <span className="text-sm text-gray-900 font-medium">650</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Maximum EMI Ratio</span>
                          <span className="text-sm text-gray-900 font-medium">50%</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Daily Processing Limit</span>
                          <span className="text-sm text-gray-900 font-medium">₹10 Crores</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Risk Assessment AI</span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Active
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Real-time Verification</span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Enabled
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Admin Security */}
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-md font-medium text-gray-900 mb-4">Admin Security Settings</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Two-Factor Authentication</span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Enabled
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Session Timeout</span>
                          <span className="text-sm text-gray-900 font-medium">30 minutes</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">IP Restrictions</span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Active
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Audit Logging</span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Enabled
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Data Backup</span>
                          <span className="text-sm text-gray-900 font-medium">Daily at 2:00 AM</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">System Monitoring</span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            24/7 Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notification Settings */}
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-md font-medium text-gray-900 mb-4">System Notifications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">High-Value Application Alerts</span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Enabled
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Risk Assessment Warnings</span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Enabled
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">System Performance Alerts</span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Enabled
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Daily Reports</span>
                          <span className="text-sm text-gray-900 font-medium">9:00 AM</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Weekly Summary</span>
                          <span className="text-sm text-gray-900 font-medium">Monday 10:00 AM</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-700">Emergency Notifications</span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            Immediate
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}