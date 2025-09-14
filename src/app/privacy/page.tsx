import Link from "next/link";
import { 
  ShieldCheckIcon,
  EyeIcon,
  DocumentTextIcon,
  UserIcon,
  LockClosedIcon,
  ServerIcon
} from "@heroicons/react/24/outline";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm opacity-75 mt-4">Last updated: January 15, 2025</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Key Highlights */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
            <ShieldCheckIcon className="h-6 w-6 mr-2" />
            Your Privacy Rights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <EyeIcon className="h-5 w-5 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900">Transparency</h3>
                <p className="text-blue-800 text-sm">Clear information about data collection and usage</p>
              </div>
            </div>
            <div className="flex items-start">
              <LockClosedIcon className="h-5 w-5 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900">Security</h3>
                <p className="text-blue-800 text-sm">Bank-grade encryption and security measures</p>
              </div>
            </div>
            <div className="flex items-start">
              <UserIcon className="h-5 w-5 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900">Control</h3>
                <p className="text-blue-800 text-sm">You control your data and privacy preferences</p>
              </div>
            </div>
            <div className="flex items-start">
              <DocumentTextIcon className="h-5 w-5 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900">Compliance</h3>
                <p className="text-blue-800 text-sm">Adherence to RBI and IT Act guidelines</p>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Name, contact details, and identification information</li>
                  <li>Date of birth, gender, and demographic information</li>
                  <li>Employment and income information</li>
                  <li>Bank account and financial information</li>
                  <li>Credit history and CIBIL score data</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">KYC Documents</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Aadhaar Card and PAN Card details</li>
                  <li>Address proof documents</li>
                  <li>Income proof and tax returns</li>
                  <li>Bank statements and financial records</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Information</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Device information and IP address</li>
                  <li>Browser type and operating system</li>
                  <li>Website usage and interaction data</li>
                  <li>Cookies and session information</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span className="text-sm">Process loan applications and verify eligibility</span>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span className="text-sm">Conduct credit assessment and risk analysis</span>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span className="text-sm">Comply with RBI and regulatory requirements</span>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span className="text-sm">Provide customer support and service updates</span>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span className="text-sm">Improve our services and user experience</span>
              </div>
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                <span className="text-sm">Send important notifications and updates</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-sm">We may share your information with:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2 text-sm">
                  <li><strong>Credit Bureaus:</strong> CIBIL, Experian, Equifax, CRIF High Mark for credit assessment</li>
                  <li><strong>Banking Partners:</strong> Partner banks and NBFCs for loan processing</li>
                  <li><strong>Regulatory Bodies:</strong> RBI, government agencies as required by law</li>
                  <li><strong>Service Providers:</strong> Technology partners for secure data processing</li>
                  <li><strong>Legal Requirements:</strong> Courts, law enforcement as mandated by law</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2 flex items-center">
                  <LockClosedIcon className="h-5 w-5 mr-2" />
                  Encryption
                </h3>
                <p className="text-green-800 text-sm">256-bit SSL encryption for all data transmission and storage</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                  <ServerIcon className="h-5 w-5 mr-2" />
                  Infrastructure
                </h3>
                <p className="text-blue-800 text-sm">Secure cloud infrastructure with regular security audits</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <p><strong>Access:</strong> Request copies of your personal data</p>
              <p><strong>Correction:</strong> Update or correct inaccurate information</p>
              <p><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</p>
              <p><strong>Portability:</strong> Transfer your data to another service provider</p>
              <p><strong>Objection:</strong> Object to processing for marketing purposes</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <p>We use cookies to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Remember your preferences and login status</li>
                <li>Analyze website usage and improve performance</li>
                <li>Provide personalized content and recommendations</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
              <p>You can control cookie preferences through your browser settings.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <p>We retain your information for:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Active loan accounts: Duration of the loan plus 3 years</li>
                <li>Rejected applications: 3 years from application date</li>
                <li>KYC documents: As per RBI guidelines (minimum 5 years)</li>
                <li>Marketing data: Until you opt out</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Data Protection Officer</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Name:</strong> Ms. Priya Sharma</p>
                <p><strong>Email:</strong> privacy@fin-agentix.com</p>
                <p><strong>Phone:</strong> +91 80 4567 8902</p>
                <p><strong>Address:</strong> Fin-Agentix Tower, Electronics City Phase 1, Bangalore - 560100</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Updates to This Policy</h2>
            <div className="text-gray-700 text-sm space-y-2">
              <p>We may update this privacy policy periodically. Changes will be posted on this page with an updated revision date.</p>
              <p>For significant changes, we will notify you via email or through our website.</p>
            </div>
          </section>

        </div>

        {/* Quick Actions */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Need More Information?</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/contact" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Contact Us
            </Link>
            <Link href="/terms" className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/help" className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}