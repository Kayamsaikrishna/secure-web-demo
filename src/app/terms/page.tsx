"use client";

import { 
  ShieldCheckIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from "@heroicons/react/24/outline";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <DocumentTextIcon className="mx-auto h-16 w-16 text-blue-200 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Important legal terms and conditions for using Fin-Agentix platform
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <div className="flex items-start">
            <ExclamationTriangleIcon className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
              <p className="text-yellow-700">
                Please read these Terms of Service carefully before using our platform. By accessing or using Fin-Agentix services, you agree to be bound by these terms.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          
          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <p className="text-gray-700 mb-4">
                By accessing and using the Fin-Agentix platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You must be at least 18 years old to use our services</li>
                <li>You must be a legal resident of India</li>
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <p className="text-gray-700 mb-4">
                Fin-Agentix is an AI-powered digital lending platform that connects borrowers with lenders across India. Our services include:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Loan Services:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Personal Loans</li>
                    <li>Home Loans</li>
                    <li>Vehicle Loans</li>
                    <li>Business Loans</li>
                    <li>Education Loans</li>
                    <li>Gold Loans</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Platform Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>EMI Calculator</li>
                    <li>KYC Verification</li>
                    <li>Credit Score Integration</li>
                    <li>Application Tracking</li>
                    <li>Document Management</li>
                    <li>Secure Communications</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Account Security:</h4>
                  <p className="text-gray-700 text-sm">
                    You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Accurate Information:</h4>
                  <p className="text-gray-700 text-sm">
                    You must provide accurate, current, and complete information during registration and loan application processes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Prohibited Uses:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Providing false or misleading information</li>
                    <li>Using the service for illegal purposes</li>
                    <li>Attempting to circumvent security measures</li>
                    <li>Interfering with the proper functioning of the platform</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Loan Terms and Conditions</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Loan Approval:</h4>
                  <p className="text-gray-700 text-sm">
                    Loan approval is subject to credit evaluation and lender policies. Fin-Agentix does not guarantee loan approval.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interest Rates and Fees:</h4>
                  <p className="text-gray-700 text-sm">
                    Interest rates and fees are determined by individual lenders and may vary based on creditworthiness and loan type.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Repayment:</h4>
                  <p className="text-gray-700 text-sm">
                    Borrowers are obligated to repay loans according to the agreed terms. Late payments may incur additional fees and affect credit scores.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy and Data Protection</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center">
                  <ShieldCheckIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium">Data Security:</span>
                </div>
                <p className="text-blue-700 text-sm mt-2">
                  We implement industry-standard security measures to protect your personal and financial information.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <p className="text-gray-700 mb-4">
                The service is provided "as is" without any warranties, expressed or implied. Fin-Agentix disclaims all warranties including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Continuous or error-free operation</li>
                <li>Accuracy of information provided by third parties</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <p className="text-gray-700 mb-4">
                Fin-Agentix shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Loss of profits or revenue</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Loan rejection or approval decisions</li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Regulatory Compliance</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">RBI Compliance:</h4>
                  <p className="text-gray-700 text-sm">
                    Fin-Agentix operates in compliance with Reserve Bank of India guidelines and regulations for digital lending platforms.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fair Practice Code:</h4>
                  <p className="text-gray-700 text-sm">
                    We adhere to fair lending practices and ensure transparent communication about loan terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <p className="text-gray-700 mb-4">
                Either party may terminate this agreement at any time:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Users may close their accounts at any time</li>
                <li>We may suspend or terminate accounts for violation of terms</li>
                <li>Existing loan agreements remain valid after account termination</li>
                <li>Data retention follows our Privacy Policy guidelines</li>
              </ul>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law and Jurisdiction</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <p className="text-gray-700 mb-4">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <p className="text-gray-700 mb-4">
                Fin-Agentix reserves the right to modify these terms at any time. We will notify users of significant changes through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Email notifications to registered users</li>
                <li>Platform notifications upon login</li>
                <li>Updates to the website with effective dates</li>
              </ul>
            </div>
          </section>

        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 border border-blue-200">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Questions About These Terms?</h3>
              <p className="text-blue-800 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-blue-700">
                <p><strong>Email:</strong> legal@fin-agentix.com</p>
                <p><strong>Phone:</strong> 1800-123-LOAN (5626)</p>
                <p><strong>Address:</strong> Fin-Agentix Tower, Electronics City Phase 1, Bangalore - 560100</p>
                <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 7:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Fin-Agentix India. All rights reserved.</p>
          <p className="mt-2">
            Licensed by Reserve Bank of India | NBFC Registration Number: N-14.03268
          </p>
        </div>

      </div>
    </div>
  );
}