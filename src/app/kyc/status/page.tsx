"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  IdentificationIcon,
  FingerPrintIcon,
  EyeIcon,
  ArrowPathIcon
} from "@heroicons/react/24/outline";

// Mock KYC status data
const mockKYCStatus = {
  userId: "USER001",
  overallStatus: "IN_PROGRESS", // PENDING, IN_PROGRESS, COMPLETED, REJECTED, REQUIRES_UPDATE
  lastUpdated: "2024-01-20T10:30:00Z",
  steps: {
    identity: {
      status: "COMPLETED",
      completedAt: "2024-01-20T09:15:00Z",
      aadhaar: {
        number: "XXXX-XXXX-8012",
        verified: true,
        verifiedAt: "2024-01-20T09:10:00Z"
      },
      pan: {
        number: "ABCDE****F",
        verified: true,
        verifiedAt: "2024-01-20T09:12:00Z"
      }
    },
    documents: {
      status: "IN_PROGRESS",
      startedAt: "2024-01-20T09:20:00Z",
      uploads: {
        aadhaarFront: { uploaded: true, verified: true },
        aadhaarBack: { uploaded: true, verified: true },
        panCard: { uploaded: true, verified: false },
        selfie: { uploaded: true, verified: true },
        signature: { uploaded: false, verified: false }
      }
    },
    biometrics: {
      status: "PENDING",
      fingerprint: { captured: false },
      iris: { captured: false }
    },
    creditCheck: {
      status: "PENDING",
      consentGiven: false
    }
  },
  verificationScore: 75,
  estimatedCompletion: "2024-01-21T12:00:00Z"
};

const statusConfig = {
  PENDING: {
    color: "text-gray-600 bg-gray-100",
    icon: ClockIcon,
    message: "Not started"
  },
  IN_PROGRESS: {
    color: "text-blue-600 bg-blue-100", 
    icon: ArrowPathIcon,
    message: "In progress"
  },
  COMPLETED: {
    color: "text-green-600 bg-green-100",
    icon: CheckCircleIcon,
    message: "Completed"
  },
  REJECTED: {
    color: "text-red-600 bg-red-100",
    icon: XCircleIcon,
    message: "Rejected"
  },
  REQUIRES_UPDATE: {
    color: "text-yellow-600 bg-yellow-100",
    icon: ExclamationTriangleIcon,
    message: "Requires update"
  }
};

export default function KYCStatusPage() {
  const [kycData, setKYCData] = useState(mockKYCStatus);
  const [refreshing, setRefreshing] = useState(false);

  const refreshStatus = async () => {
    setRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setRefreshing(false);
  };

  const getStepProgress = () => {
    const steps = kycData.steps;
    let completed = 0;
    if (steps.identity.status === "COMPLETED") completed++;
    if (steps.documents.status === "COMPLETED") completed++;
    if (steps.biometrics.status === "COMPLETED") completed++;
    if (steps.creditCheck.status === "COMPLETED") completed++;
    return { completed, total: 4 };
  };

  const progress = getStepProgress();
  const overallConfig = statusConfig[kycData.overallStatus as keyof typeof statusConfig];
  const OverallIcon = overallConfig.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                <ShieldCheckIcon className="h-8 w-8 mr-3" />
                KYC Status
              </h1>
              <p className="text-blue-100 mt-1">Track your Know Your Customer verification progress</p>
            </div>
            <button
              onClick={refreshStatus}
              disabled={refreshing}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg flex items-center transition-colors duration-200"
            >
              <ArrowPathIcon className={`h-5 w-5 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              {refreshing ? 'Refreshing...' : 'Refresh Status'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overall Status Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <OverallIcon className="h-8 w-8 text-gray-600 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">KYC Verification Status</h2>
                <p className="text-gray-600">Last updated: {new Date(kycData.lastUpdated).toLocaleString()}</p>
              </div>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${overallConfig.color}`}>
              {overallConfig.message}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Overall Progress</span>
              <span>{progress.completed}/{progress.total} steps completed</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(progress.completed / progress.total) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Verification Score */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{kycData.verificationScore}%</div>
                <div className="text-sm text-blue-700">Verification Score</div>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{progress.completed}</div>
                <div className="text-sm text-green-700">Steps Completed</div>
              </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-yellow-600">
                  {new Date(kycData.estimatedCompletion).toLocaleDateString()}
                </div>
                <div className="text-sm text-yellow-700">Est. Completion</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Steps */}
        <div className="space-y-6">
          {/* Step 1: Identity Verification */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <IdentificationIcon className="h-6 w-6 text-gray-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Identity Verification</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                statusConfig[kycData.steps.identity.status as keyof typeof statusConfig].color
              }`}>
                {statusConfig[kycData.steps.identity.status as keyof typeof statusConfig].message}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Aadhaar Verification</p>
                  <p className="text-sm text-gray-600">{kycData.steps.identity.aadhaar.number}</p>
                </div>
                {kycData.steps.identity.aadhaar.verified ? (
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <ClockIcon className="h-5 w-5 text-gray-400" />
                )}\n              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">PAN Verification</p>
                  <p className="text-sm text-gray-600">{kycData.steps.identity.pan.number}</p>
                </div>
                {kycData.steps.identity.pan.verified ? (
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <ClockIcon className="h-5 w-5 text-gray-400" />
                )}
              </div>
            </div>
          </div>

          {/* Step 2: Document Upload */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <DocumentTextIcon className="h-6 w-6 text-gray-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Document Verification</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                statusConfig[kycData.steps.documents.status as keyof typeof statusConfig].color
              }`}>
                {statusConfig[kycData.steps.documents.status as keyof typeof statusConfig].message}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(kycData.steps.documents.uploads).map(([docType, status]) => (
                <div key={docType} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 capitalize">
                      {docType.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-sm text-gray-600">
                      {status.uploaded ? (status.verified ? 'Verified' : 'Under Review') : 'Not Uploaded'}
                    </p>
                  </div>
                  {status.uploaded ? (
                    status.verified ? (
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    ) : (
                      <ClockIcon className="h-5 w-5 text-yellow-500" />
                    )
                  ) : (
                    <XCircleIcon className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              ))}
            </div>

            {kycData.steps.documents.status === "IN_PROGRESS" && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <ExclamationTriangleIcon className="h-4 w-4 inline mr-1" />
                  Please upload missing documents to continue verification.
                </p>
              </div>
            )}
          </div>

          {/* Step 3: Biometric Verification */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <FingerPrintIcon className="h-6 w-6 text-gray-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Biometric Verification</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                statusConfig[kycData.steps.biometrics.status as keyof typeof statusConfig].color
              }`}>
                {statusConfig[kycData.steps.biometrics.status as keyof typeof statusConfig].message}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <FingerPrintIcon className="h-5 w-5 text-gray-600 mr-2" />
                  <div>
                    <p className="font-medium text-gray-900">Fingerprint</p>
                    <p className="text-sm text-gray-600">
                      {kycData.steps.biometrics.fingerprint.captured ? 'Captured' : 'Pending'}
                    </p>
                  </div>
                </div>
                {kycData.steps.biometrics.fingerprint.captured ? (
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <ClockIcon className="h-5 w-5 text-gray-400" />
                )}
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <EyeIcon className="h-5 w-5 text-gray-600 mr-2" />
                  <div>
                    <p className="font-medium text-gray-900">Iris Scan</p>
                    <p className="text-sm text-gray-600">
                      {kycData.steps.biometrics.iris.captured ? 'Captured' : 'Pending'}
                    </p>
                  </div>
                </div>
                {kycData.steps.biometrics.iris.captured ? (
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <ClockIcon className="h-5 w-5 text-gray-400" />
                )}
              </div>
            </div>
          </div>

          {/* Step 4: Credit Check Authorization */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <ShieldCheckIcon className="h-6 w-6 text-gray-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Credit Assessment Authorization</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                statusConfig[kycData.steps.creditCheck.status as keyof typeof statusConfig].color
              }`}>
                {statusConfig[kycData.steps.creditCheck.status as keyof typeof statusConfig].message}
              </span>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Credit Bureau Authorization</p>
                  <p className="text-sm text-gray-600">
                    {kycData.steps.creditCheck.consentGiven ? 'Consent provided' : 'Consent required'}
                  </p>
                </div>
                {kycData.steps.creditCheck.consentGiven ? (
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                ) : (
                  <ClockIcon className="h-5 w-5 text-gray-400" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {kycData.overallStatus !== "COMPLETED" && (
            <Link
              href="/kyc"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-center font-semibold flex items-center justify-center"
            >
              {kycData.overallStatus === "PENDING" ? "Start KYC Verification" : "Continue KYC Process"}
              <ArrowPathIcon className="ml-2 h-5 w-5" />
            </Link>
          )}
          
          <Link
            href="/dashboard"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 text-center font-semibold"
          >
            Back to Dashboard
          </Link>

          <Link
            href="/support"
            className="border border-blue-300 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-50 text-center font-semibold"
          >
            Need Help?
          </Link>
        </div>

        {/* Information Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 mb-3">Why Complete KYC?</h4>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>✓ Access to all loan products</li>
              <li>✓ Higher loan limits</li>
              <li>✓ Better interest rates</li>
              <li>✓ Faster loan approvals</li>
              <li>✓ Enhanced security features</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 mb-3">Data Security</h4>
            <ul className="text-sm text-green-800 space-y-2">
              <li>🔒 256-bit SSL encryption</li>
              <li>🏛️ RBI compliant processes</li>
              <li>🛡️ UIDAI approved verification</li>
              <li>📱 Secure biometric storage</li>
              <li>🔐 Regular security audits</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}