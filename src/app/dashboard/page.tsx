"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  CreditCardIcon,
  DocumentTextIcon,
  UserIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PlusIcon,
  IdentificationIcon,
  HomeIcon,
  BriefcaseIcon,
  CurrencyRupeeIcon
} from "@heroicons/react/24/outline";

interface UserProfile {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  kycStatus?: string;
  profileCompleteness?: number;
}

interface LoanApplication {
  id: string;
  loanType: string;
  amount: number;
  status: string;
  appliedDate: string;
}

interface SessionUser {
  role?: string;
  name?: string;
  email?: string;
}

interface Session {
  user?: SessionUser;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [applications, setApplications] = useState<LoanApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalApplications: 0,
    pendingApplications: 0,
    approvedLoans: 0,
    totalLoanAmount: 0
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if ((session?.user as SessionUser)?.role === "ADMIN") {
      router.push("/admin");
      return;
    }

    if (session?.user) {
      fetchDashboardData();
    }
  }, [session, status, router]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch profile data
      const profileResponse = await fetch('/api/profile');
      if (profileResponse.ok) {
        const profileData = await profileResponse.json();
        setProfile(profileData.user.profile || {});
      }

      // Mock applications data (replace with actual API call)
      const mockApplications = [
        {
          id: "LA2024001",
          loanType: "Personal Loan",
          amount: 500000,
          status: "UNDER_REVIEW",
          appliedDate: "2024-01-20T10:30:00Z"
        },
        {
          id: "LA2024002",
          loanType: "Vehicle Loan",
          amount: 800000,
          status: "APPROVED",
          appliedDate: "2024-01-18T14:15:00Z"
        }
      ];
      
      setApplications(mockApplications);
      
      // Calculate stats
      setStats({
        totalApplications: mockApplications.length,
        pendingApplications: mockApplications.filter(app => app.status === 'UNDER_REVIEW' || app.status === 'PENDING').length,
        approvedLoans: mockApplications.filter(app => app.status === 'APPROVED' || app.status === 'DISBURSED').length,
        totalLoanAmount: mockApplications.reduce((sum, app) => sum + app.amount, 0)
      });
      
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      // Set fallback data
      setProfile({ firstName: "User", lastName: "Profile", kycStatus: "PENDING", profileCompleteness: 30 });
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} L`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "APPROVED": case "DISBURSED": return "text-green-600 bg-green-100";
      case "UNDER_REVIEW": case "PENDING": return "text-yellow-600 bg-yellow-100";
      case "REJECTED": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getKYCStatusColor = (status: string) => {
    switch (status) {
      case "VERIFIED": return "text-green-600 bg-green-100";
      case "PENDING": return "text-yellow-600 bg-yellow-100";
      case "REJECTED": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome back, {profile?.firstName || session?.user?.name || 'User'}! 👋
            </h1>
            <p className="text-blue-100 mt-1">
              Here&apos;s what&apos;s happening with your account today
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-blue-200">Account Status</div>
            <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
              profile?.kycStatus ? getKYCStatusColor(profile.kycStatus) : 'text-yellow-600 bg-yellow-100'
            }`}>
              KYC {profile?.kycStatus || 'PENDING'}
            </span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <DocumentTextIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-blue-600">Total Applications</p>
              <p className="text-2xl font-bold text-blue-900">{stats.totalApplications}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <ClockIcon className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-yellow-600">Pending Review</p>
              <p className="text-2xl font-bold text-yellow-900">{stats.pendingApplications}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <CheckCircleIcon className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-green-600">Approved Loans</p>
              <p className="text-2xl font-bold text-green-900">{stats.approvedLoans}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <CurrencyRupeeIcon className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-purple-600">Total Amount</p>
              <p className="text-2xl font-bold text-purple-900">{formatCurrency(stats.totalLoanAmount)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
              <PlusIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/loans/apply"
                className="flex items-center p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
              >
                <CreditCardIcon className="h-6 w-6 mr-3" />
                <div>
                  <div className="font-semibold">Apply for Loan</div>
                  <div className="text-blue-100 text-sm">Start new application</div>
                </div>
                <ArrowRightIcon className="h-5 w-5 ml-auto" />
              </Link>
              
              <Link
                href="/profile/edit"
                className="flex items-center p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200"
              >
                <UserIcon className="h-6 w-6 mr-3" />
                <div>
                  <div className="font-semibold">Complete Profile</div>
                  <div className="text-green-100 text-sm">Update information</div>
                </div>
                <ArrowRightIcon className="h-5 w-5 ml-auto" />
              </Link>
              
              <Link
                href="/kyc"
                className="flex items-center p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200"
              >
                <IdentificationIcon className="h-6 w-6 mr-3" />
                <div>
                  <div className="font-semibold">Complete KYC</div>
                  <div className="text-purple-100 text-sm">Verify identity</div>
                </div>
                <ArrowRightIcon className="h-5 w-5 ml-auto" />
              </Link>
              
              <Link
                href="/loans/calculator"
                className="flex items-center p-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
              >
                <ChartBarIcon className="h-6 w-6 mr-3" />
                <div>
                  <div className="font-semibold">EMI Calculator</div>
                  <div className="text-orange-100 text-sm">Calculate payments</div>
                </div>
                <ArrowRightIcon className="h-5 w-5 ml-auto" />
              </Link>
            </div>
          </div>

          {/* Recent Applications */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Applications</h2>
              <Link href="/loans/my-applications" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All →
              </Link>
            </div>
            
            {applications.length > 0 ? (
              <div className="space-y-4">
                {applications.slice(0, 3).map((application) => (
                  <div key={application.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <DocumentTextIcon className="h-8 w-8 text-blue-600 mr-3" />
                        <div>
                          <h3 className="font-semibold text-gray-900">{application.loanType}</h3>
                          <p className="text-sm text-gray-500">Application ID: {application.id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{formatCurrency(application.amount)}</div>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(application.status)}`}>
                          {application.status.replace('_', ' ')}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      Applied on: {new Date(application.appliedDate).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <DocumentTextIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Applications Yet</h3>
                <p className="text-gray-600 mb-4">Start your loan application journey today</p>
                <Link
                  href="/loans/apply"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Apply Now
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Profile Completion */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Profile Completion</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span>Profile Strength</span>
                <span className="font-medium">{profile?.profileCompleteness || 30}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${profile?.profileCompleteness || 30}%` }}
                ></div>
              </div>
              <div className="space-y-2">
                <Link href="/profile/edit" className="flex items-center justify-between text-sm p-2 rounded hover:bg-gray-50">
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 text-gray-400 mr-2" />
                    <span>Complete Personal Info</span>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-gray-400" />
                </Link>
                <Link href="/kyc" className="flex items-center justify-between text-sm p-2 rounded hover:bg-gray-50">
                  <div className="flex items-center">
                    <IdentificationIcon className="h-4 w-4 text-gray-400 mr-2" />
                    <span>Complete KYC</span>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-gray-400" />
                </Link>
              </div>
            </div>
          </div>

          {/* Loan Products */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Available Products</h3>
            <div className="space-y-4">
              <Link href="/loans/apply?type=personal" className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Personal Loan</h4>
                    <p className="text-sm text-gray-600">Up to ₹15 Lakhs</p>
                    <p className="text-xs text-green-600">Starting @ 12.5% p.a.</p>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-gray-400" />
                </div>
              </Link>
              
              <Link href="/loans/apply?type=home" className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Home Loan</h4>
                    <p className="text-sm text-gray-600">Up to ₹5 Crores</p>
                    <p className="text-xs text-green-600">Starting @ 8.5% p.a.</p>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-gray-400" />
                </div>
              </Link>
              
              <Link href="/loans/apply?type=vehicle" className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Vehicle Loan</h4>
                    <p className="text-sm text-gray-600">Up to ₹50 Lakhs</p>
                    <p className="text-xs text-green-600">Starting @ 9.5% p.a.</p>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-gray-400" />
                </div>
              </Link>
              
              <Link href="/loans/apply?type=business" className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Loan</h4>
                    <p className="text-sm text-gray-600">Up to ₹1 Crore</p>
                    <p className="text-xs text-green-600">Starting @ 14% p.a.</p>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-gray-400" />
                </div>
              </Link>
            </div>
          </div>

          {/* Help & Support */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-4">Our support team is here to assist you with any questions.</p>
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Contact Support
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
