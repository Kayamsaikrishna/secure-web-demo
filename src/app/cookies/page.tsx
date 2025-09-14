"use client";

import { 
  ShieldCheckIcon,
  CakeIcon,
  CogIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  EyeIcon,
  UserIcon
} from "@heroicons/react/24/outline";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <CakeIcon className="mx-auto h-16 w-16 text-orange-200 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              How we use cookies and similar technologies on Fin-Agentix platform
            </p>
            <p className="text-sm text-orange-200 mt-4">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Quick Summary */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Quick Summary</h3>
              <p className="text-blue-700">
                We use cookies to enhance your experience, remember your preferences, and ensure the security of our platform. You can control cookie settings through your browser or our cookie consent banner.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          
          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling essential website functions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <CakeIcon className="h-5 w-5 text-orange-600 mr-2" />
                    <span className="font-semibold text-orange-800">Session Cookies</span>
                  </div>
                  <p className="text-orange-700 text-sm">
                    Temporary cookies that expire when you close your browser
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <CakeIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-blue-800">Persistent Cookies</span>
                  </div>
                  <p className="text-blue-700 text-sm">
                    Cookies that remain on your device for a set period or until deleted
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-6">
              
              {/* Essential Cookies */}
              <div className="bg-white rounded-lg shadow-sm p-6 border">
                <div className="flex items-center mb-4">
                  <ShieldCheckIcon className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Essential Cookies (Required)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  These cookies are necessary for the website to function properly and cannot be disabled.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-gray-50 rounded-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Cookie Name</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Purpose</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-2 font-medium">next-auth.session-token</td>
                        <td className="px-4 py-2">Authentication and session management</td>
                        <td className="px-4 py-2">Session</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-2 font-medium">csrf-token</td>
                        <td className="px-4 py-2">Security protection against CSRF attacks</td>
                        <td className="px-4 py-2">Session</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">fin-agentix-splash-shown</td>
                        <td className="px-4 py-2">Remember splash screen preference</td>
                        <td className="px-4 py-2">Session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="bg-white rounded-lg shadow-sm p-6 border">
                <div className="flex items-center mb-4">
                  <CogIcon className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Functional Cookies (Optional)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  These cookies enhance your experience by remembering your preferences and choices.
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <p className="font-medium text-blue-900">User Preferences</p>
                    <p className="text-blue-700 text-sm">Language, theme, and dashboard layout preferences</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <p className="font-medium text-blue-900">Form Data</p>
                    <p className="text-blue-700 text-sm">Temporary storage of loan application progress</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <p className="font-medium text-blue-900">Location Services</p>
                    <p className="text-blue-700 text-sm">Remember your location for relevant loan offers</p>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-white rounded-lg shadow-sm p-6 border">
                <div className="flex items-center mb-4">
                  <EyeIcon className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Analytics Cookies (Optional)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  These cookies help us understand how you use our website to improve our services.
                </p>
                <div className="space-y-3">
                  <div className="bg-purple-50 border border-purple-200 rounded p-3">
                    <p className="font-medium text-purple-900">Usage Analytics</p>
                    <p className="text-purple-700 text-sm">Page views, time spent, and user journey tracking</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded p-3">
                    <p className="font-medium text-purple-900">Performance Monitoring</p>
                    <p className="text-purple-700 text-sm">Website performance and error tracking</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded p-3">
                    <p className="font-medium text-purple-900">A/B Testing</p>
                    <p className="text-purple-700 text-sm">Testing different features to improve user experience</p>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-white rounded-lg shadow-sm p-6 border">
                <div className="flex items-center mb-4">
                  <UserIcon className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Marketing Cookies (Optional)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  These cookies are used to deliver relevant advertisements and track campaign effectiveness.
                </p>
                <div className="space-y-3">
                  <div className="bg-orange-50 border border-orange-200 rounded p-3">
                    <p className="font-medium text-orange-900">Personalized Ads</p>
                    <p className="text-orange-700 text-sm">Show relevant loan offers based on your interests</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded p-3">
                    <p className="font-medium text-orange-900">Campaign Tracking</p>
                    <p className="text-orange-700 text-sm">Measure effectiveness of our marketing campaigns</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded p-3">
                    <p className="font-medium text-orange-900">Social Media Integration</p>
                    <p className="text-orange-700 text-sm">Enable social media features and tracking</p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Third-Party Cookies</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <p className="text-gray-700 mb-4">
                We may use third-party services that set their own cookies. These include:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Analytics Services:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Google Analytics</li>
                    <li>Hotjar (User behavior)</li>
                    <li>Microsoft Clarity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Security Services:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Cloudflare (Security & CDN)</li>
                    <li>reCAPTCHA (Bot protection)</li>
                    <li>Fraud detection services</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Payment Processing:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Razorpay</li>
                    <li>PayU</li>
                    <li>Banking partners</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Communication:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Zendesk (Customer support)</li>
                    <li>Intercom (Live chat)</li>
                    <li>Email service providers</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Managing Your Cookie Preferences</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <p className="text-gray-700 mb-6">
                You have several options to control and manage cookies:
              </p>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Cookie Consent Banner</h4>
                  <p className="text-green-800 text-sm mb-3">
                    When you first visit our website, you'll see a cookie consent banner where you can:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
                    <li>Accept all cookies</li>
                    <li>Reject non-essential cookies</li>
                    <li>Customize your preferences</li>
                    <li>Learn more about each cookie type</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Browser Settings</h4>
                  <p className="text-blue-800 text-sm mb-3">
                    You can control cookies through your browser settings:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-blue-900 text-sm">Chrome:</p>
                      <p className="text-blue-700 text-xs">Settings → Privacy and Security → Cookies</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-900 text-sm">Firefox:</p>
                      <p className="text-blue-700 text-xs">Preferences → Privacy & Security</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-900 text-sm">Safari:</p>
                      <p className="text-blue-700 text-xs">Preferences → Privacy → Cookies</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-900 text-sm">Edge:</p>
                      <p className="text-blue-700 text-xs">Settings → Cookies and site permissions</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-2">Important Note</h4>
                      <p className="text-yellow-800 text-sm">
                        Disabling essential cookies may affect the functionality of our website, including login, security features, and loan application processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookie Retention Periods</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Cookie Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Retention Period</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-medium">Session Cookies</td>
                      <td className="px-4 py-3">Until browser closes</td>
                      <td className="px-4 py-3">Temporary functionality</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-medium">Authentication</td>
                      <td className="px-4 py-3">30 days</td>
                      <td className="px-4 py-3">Keep you logged in</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-medium">Preferences</td>
                      <td className="px-4 py-3">1 year</td>
                      <td className="px-4 py-3">Remember your settings</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-medium">Analytics</td>
                      <td className="px-4 py-3">2 years</td>
                      <td className="px-4 py-3">Usage patterns and improvements</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Marketing</td>
                      <td className="px-4 py-3">1 year</td>
                      <td className="px-4 py-3">Personalized advertising</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Updates to This Policy</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. We will notify you of any significant changes through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Email notifications to registered users</li>
                <li>Prominent notices on our website</li>
                <li>Updated cookie consent banners</li>
                <li>In-app notifications</li>
              </ul>
            </div>
          </section>

        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-orange-50 rounded-lg p-8 border border-orange-200">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-orange-900 mb-4">Questions About Cookies?</h3>
              <p className="text-orange-800 mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="space-y-2 text-orange-700">
                <p><strong>Email:</strong> privacy@fin-agentix.com</p>
                <p><strong>Phone:</strong> 1800-123-LOAN (5626)</p>
                <p><strong>Address:</strong> Fin-Agentix Tower, Electronics City Phase 1, Bangalore - 560100</p>
                <p><strong>Data Protection Officer:</strong> dpo@fin-agentix.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Fin-Agentix India. All rights reserved.</p>
          <p className="mt-2">
            This Cookie Policy is part of our Privacy Policy and Terms of Service
          </p>
        </div>

      </div>
    </div>
  );
}