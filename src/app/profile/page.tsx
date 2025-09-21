"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { 
  UserIcon, 
  IdentificationIcon, 
  PhoneIcon, 
  HomeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CreditCardIcon,
  ChartBarIcon,
  PencilIcon,
  CheckBadgeIcon,
  XCircleIcon,
  ClockIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: string;
  dateOfBirth: string;
  maritalStatus: string;
  nationality: string;
  primaryPhone: string;
  secondaryPhone?: string;
  alternateEmail?: string;
  fatherName: string;
  motherName: string;
  dependents: number;
  preferredLanguage: string;
  communicationMode: string;
  currentAddress?: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  employment?: {
    type: string;
    companyName?: string;
    designation?: string;
    monthlyIncome?: number;
    annualIncome?: number;
  };
}

interface KYCData {
  kycStatus: string;
  kycLevel: string;
  aadhaarVerified: boolean;
  panVerified: boolean;
  overallScore: number;
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [kycData, setKycData] = useState<KYCData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("personal");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (session?.user) {
      fetchProfileData();
    }
  }, [session, status]);

  const fetchProfileData = async () => {
    try {
      setLoading(true);
      
      // Include credentials in the fetch request
      const response = await fetch('/api/profile', {
        credentials: 'include'
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Profile API error response:", errorText);
        throw new Error(`Failed to fetch profile: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      const user = data.user;
      
      if (user.profile) {
        setProfile({
          id: user.profile.id,
          firstName: user.profile.firstName,
          lastName: user.profile.lastName,
          fullName: user.profile.fullName,
          gender: user.profile.gender,
          dateOfBirth: user.profile.dateOfBirth,
          maritalStatus: user.profile.maritalStatus,
          nationality: user.profile.nationality,
          primaryPhone: user.profile.primaryPhone,
          secondaryPhone: user.profile.secondaryPhone,
          alternateEmail: user.profile.alternateEmail,
          fatherName: user.profile.fatherName,
          motherName: user.profile.motherName,
          dependents: user.profile.dependents,
          preferredLanguage: user.profile.preferredLanguage,
          communicationMode: user.profile.communicationMode,
          currentAddress: user.profile.currentAddress,
          employment: user.profile.employment,
        });
      }
      
      if (user.kycData) {
        setKycData({
          kycStatus: user.kycData.kycStatus,
          kycLevel: user.kycData.kycLevel,
          aadhaarVerified: user.kycData.aadhaarVerified,
          panVerified: user.kycData.panVerified,
          overallScore: user.kycData.overallScore,
        });
      } else {
        // Default KYC data if not set
        setKycData({
          kycStatus: "PENDING",
          kycLevel: "BASIC",
          aadhaarVerified: false,
          panVerified: false,
          overallScore: 0,
        });
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      
      // Fallback to mock data if API fails
      const mockProfile: UserProfile = {
        id: session?.user?.id || "1",
        firstName: "User",
        lastName: "Profile",
        fullName: session?.user?.email?.split('@')[0] || "User Profile",
        gender: "PREFER_NOT_TO_SAY",
        dateOfBirth: "1990-01-01",
        maritalStatus: "SINGLE",
        nationality: "Indian",
        primaryPhone: "+91-0000000000",
        fatherName: "To be updated",
        motherName: "To be updated",
        dependents: 0,
        preferredLanguage: "English",
        communicationMode: "Email",
      };

      const mockKYC: KYCData = {
        kycStatus: "PENDING",
        kycLevel: "BASIC",
        aadhaarVerified: false,
        panVerified: false,
        overallScore: 0,
      };

      setProfile(mockProfile);
      setKycData(mockKYC);
    } finally {
      setLoading(false);
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

  const getKYCStatusIcon = (status: string) => {
    switch (status) {
      case "VERIFIED": return <CheckBadgeIcon className="w-5 h-5" />;
      case "PENDING": return <ClockIcon className="w-5 h-5" />;
      case "REJECTED": return <XCircleIcon className="w-5 h-5" />;
      default: return <ClockIcon className="w-5 h-5" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile Not Found</h2>
          <p className="text-gray-600 mb-6">We couldn't load your profile information.</p>
          <button 
            onClick={fetchProfileData}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "personal", name: "Personal Info", icon: UserIcon },
    { id: "contact", name: "Contact", icon: PhoneIcon },
    { id: "address", name: "Address", icon: HomeIcon },
    { id: "employment", name: "Employment", icon: BriefcaseIcon },
    { id: "kyc", name: "KYC Status", icon: IdentificationIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                  {profile.firstName[0]}{profile.lastName[0]}
                </div>
                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-gray-900">{profile.fullName}</h1>
                  <p className="text-gray-600">{session?.user?.email}</p>
                  <div className="flex items-center mt-1">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getKYCStatusColor(kycData?.kycStatus || "PENDING")}`}>
                      {getKYCStatusIcon(kycData?.kycStatus || "PENDING")}
                      <span className="ml-1">KYC {kycData?.kycStatus || "PENDING"}</span>
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="/profile/edit"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <PencilIcon className="w-4 h-4 mr-2" />
                Edit Profile
              </Link>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="px-6">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
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
            {activeTab === "personal" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                      <dd className="text-sm text-gray-900">{profile.fullName}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Gender</dt>
                      <dd className="text-sm text-gray-900">{profile.gender}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
                      <dd className="text-sm text-gray-900">{new Date(profile.dateOfBirth).toLocaleDateString()}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Marital Status</dt>
                      <dd className="text-sm text-gray-900">{profile.maritalStatus}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Nationality</dt>
                      <dd className="text-sm text-gray-900">{profile.nationality}</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Family Information</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Father&apos;s Name</dt>
                      <dd className="text-sm text-gray-900">{profile.fatherName}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Mother&apos;s Name</dt>
                      <dd className="text-sm text-gray-900">{profile.motherName}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Dependents</dt>
                      <dd className="text-sm text-gray-900">{profile.dependents}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Preferred Language</dt>
                      <dd className="text-sm text-gray-900">{profile.preferredLanguage}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Communication Mode</dt>
                      <dd className="text-sm text-gray-900">{profile.communicationMode}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="max-w-2xl">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Primary Email</dt>
                    <dd className="text-sm text-gray-900">{session?.user?.email}</dd>
                  </div>
                  {profile.alternateEmail && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Alternate Email</dt>
                      <dd className="text-sm text-gray-900">{profile.alternateEmail}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Primary Phone</dt>
                    <dd className="text-sm text-gray-900">{profile.primaryPhone}</dd>
                  </div>
                  {profile.secondaryPhone && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Secondary Phone</dt>
                      <dd className="text-sm text-gray-900">{profile.secondaryPhone}</dd>
                    </div>
                  )}
                </dl>
              </div>
            )}

            {activeTab === "address" && (
              <div className="max-w-2xl">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Current Address</h3>
                {profile.currentAddress ? (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-900">{profile.currentAddress.line1}</p>
                    {profile.currentAddress.line2 && (
                      <p className="text-sm text-gray-900">{profile.currentAddress.line2}</p>
                    )}
                    <p className="text-sm text-gray-900">
                      {profile.currentAddress.city}, {profile.currentAddress.state} - {profile.currentAddress.pincode}
                    </p>
                    <p className="text-sm text-gray-900">{profile.currentAddress.country}</p>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No address information available</p>
                )}
              </div>
            )}

            {activeTab === "employment" && (
              <div className="max-w-2xl">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Employment Details</h3>
                {profile.employment ? (
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Employment Type</dt>
                      <dd className="text-sm text-gray-900">{profile.employment.type}</dd>
                    </div>
                    {profile.employment.companyName && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Company</dt>
                        <dd className="text-sm text-gray-900">{profile.employment.companyName}</dd>
                      </div>
                    )}
                    {profile.employment.designation && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Designation</dt>
                        <dd className="text-sm text-gray-900">{profile.employment.designation}</dd>
                      </div>
                    )}
                    {profile.employment.monthlyIncome && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Monthly Income</dt>
                        <dd className="text-sm text-gray-900">₹{profile.employment.monthlyIncome.toLocaleString()}</dd>
                      </div>
                    )}
                    {profile.employment.annualIncome && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Annual Income</dt>
                        <dd className="text-sm text-gray-900">₹{profile.employment.annualIncome.toLocaleString()}</dd>
                      </div>
                    )}
                  </dl>
                ) : (
                  <p className="text-sm text-gray-500">No employment information available</p>
                )}
              </div>
            )}

            {activeTab === "kyc" && kycData && (
              <div className="max-w-2xl">
                <h3 className="text-lg font-medium text-gray-900 mb-4">KYC Verification Status</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-900">Overall KYC Status</span>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getKYCStatusColor(kycData.kycStatus)}`}>
                        {getKYCStatusIcon(kycData.kycStatus)}
                        <span className="ml-1">{kycData.kycStatus}</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">KYC Level</span>
                      <span className="text-sm font-medium text-gray-900">{kycData.kycLevel}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Overall Score</span>
                      <span className="text-sm font-medium text-gray-900">{kycData.overallScore}/100</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Aadhaar Verification</span>
                        {kycData.aadhaarVerified ? (
                          <CheckBadgeIcon className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircleIcon className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {kycData.aadhaarVerified ? "Verified" : "Not Verified"}
                      </p>
                    </div>

                    <div className="border border-gray-200 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">PAN Verification</span>
                        {kycData.panVerified ? (
                          <CheckBadgeIcon className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircleIcon className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {kycData.panVerified ? "Verified" : "Not Verified"}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Link
                      href="/kyc"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Complete KYC
                    </Link>
                    <Link
                      href="/kyc/status"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View KYC Status
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/loans/apply" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <CreditCardIcon className="w-8 h-8 text-blue-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Apply for Loan</h3>
                <p className="text-sm text-gray-600">Start a new loan application</p>
              </div>
            </div>
          </Link>

          <Link href="/loans/my-applications" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <ChartBarIcon className="w-8 h-8 text-green-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">My Applications</h3>
                <p className="text-sm text-gray-600">Track your loan applications</p>
              </div>
            </div>
          </Link>

          <Link href="/kyc" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <IdentificationIcon className="w-8 h-8 text-purple-600" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">KYC Verification</h3>
                <p className="text-sm text-gray-600">Complete your verification</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}