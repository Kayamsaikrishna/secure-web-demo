"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { 
  CogIcon,
  ShieldCheckIcon,
  BellIcon,
  ServerIcon,
  KeyIcon
} from "@heroicons/react/24/outline";

export default function AdminSettingsPage() {
  const { data: session } = useSession();
  const [settings, setSettings] = useState({
    autoApprovalLimit: 500000,
    minCreditScore: 650,
    maxEmiRatio: 50,
    sessionTimeout: 30,
    dailyProcessingLimit: 1000000000,
    backupFrequency: 'daily',
    notificationsEnabled: true,
    twoFactorEnabled: true,
    auditLogging: true
  });

  if ((session?.user as any)?.role !== "ADMIN") {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900">Access Denied</h1>
        <p className="text-gray-600">You don't have permission to access this page.</p>
      </div>
    );
  }

  const handleSave = () => {
    // Save settings logic
    alert("Settings saved successfully!");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
        <p className="text-gray-600 mt-1">Configure system-wide parameters and security settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Loan Configuration */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <CogIcon className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">Loan Configuration</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Auto-Approval Limit (₹)
              </label>
              <input
                type="number"
                value={settings.autoApprovalLimit}
                onChange={(e) => setSettings(prev => ({ ...prev, autoApprovalLimit: Number(e.target.value) }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Credit Score
              </label>
              <input
                type="number"
                value={settings.minCreditScore}
                onChange={(e) => setSettings(prev => ({ ...prev, minCreditScore: Number(e.target.value) }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum EMI Ratio (%)
              </label>
              <input
                type="number"
                value={settings.maxEmiRatio}
                onChange={(e) => setSettings(prev => ({ ...prev, maxEmiRatio: Number(e.target.value) }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Daily Processing Limit (₹)
              </label>
              <input
                type="number"
                value={settings.dailyProcessingLimit}
                onChange={(e) => setSettings(prev => ({ ...prev, dailyProcessingLimit: Number(e.target.value) }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <ShieldCheckIcon className="h-6 w-6 text-green-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">Security Settings</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Session Timeout (minutes)
              </label>
              <input
                type="number"
                value={settings.sessionTimeout}
                onChange={(e) => setSettings(prev => ({ ...prev, sessionTimeout: Number(e.target.value) }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <label className="text-sm font-medium text-gray-700">Two-Factor Authentication</label>
                <p className="text-xs text-gray-500">Enable 2FA for admin accounts</p>
              </div>
              <input
                type="checkbox"
                checked={settings.twoFactorEnabled}
                onChange={(e) => setSettings(prev => ({ ...prev, twoFactorEnabled: e.target.checked }))}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <label className="text-sm font-medium text-gray-700">Audit Logging</label>
                <p className="text-xs text-gray-500">Log all admin actions</p>
              </div>
              <input
                type="checkbox"
                checked={settings.auditLogging}
                onChange={(e) => setSettings(prev => ({ ...prev, auditLogging: e.target.checked }))}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* System Configuration */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <ServerIcon className="h-6 w-6 text-purple-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">System Configuration</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data Backup Frequency
              </label>
              <select
                value={settings.backupFrequency}
                onChange={(e) => setSettings(prev => ({ ...prev, backupFrequency: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <label className="text-sm font-medium text-gray-700">System Notifications</label>
                <p className="text-xs text-gray-500">Enable system alerts and notifications</p>
              </div>
              <input
                type="checkbox"
                checked={settings.notificationsEnabled}
                onChange={(e) => setSettings(prev => ({ ...prev, notificationsEnabled: e.target.checked }))}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <BellIcon className="h-6 w-6 text-orange-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">Notification Preferences</h2>
          </div>
          
          <div className="space-y-4">
            <div className="text-sm text-gray-600">
              <h4 className="font-medium text-gray-900 mb-2">Email Notifications</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  High-value applications (above ₹10L)
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  Risk assessment alerts
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  System performance warnings
                </label>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <h4 className="font-medium text-gray-900 mb-2">Report Schedule</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  Daily summary at 9:00 AM
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  Weekly report on Monday
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}