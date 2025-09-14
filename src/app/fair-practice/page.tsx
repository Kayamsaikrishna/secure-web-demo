"use client";

import { 
  ShieldCheckIcon,
  HandRaisedIcon,
  ScaleIcon,
  ClockIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline";

export default function FairPracticePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ScaleIcon className="mx-auto h-16 w-16 text-green-200 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fair Practice Code
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Our commitment to fair, transparent, and ethical lending practices
            </p>
            <p className="text-sm text-green-200 mt-4">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction */}
        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
          <div className="flex items-start">
            <HandRaisedIcon className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Our Commitment</h3>
              <p className="text-green-700">
                Fin-Agentix is committed to maintaining the highest standards of fair practice in all our lending operations, ensuring transparency, dignity, and respect for all our customers.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          
          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Principles</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Transparency</h4>
                      <p className="text-gray-700 text-sm">All loan terms, conditions, and charges are clearly disclosed upfront</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Non-Discrimination</h4>
                      <p className="text-gray-700 text-sm">Equal treatment regardless of gender, religion, caste, or social status</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Privacy Protection</h4>
                      <p className="text-gray-700 text-sm">Strict confidentiality of customer information and data protection</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Responsible Lending</h4>
                      <p className="text-gray-700 text-sm">Thorough assessment of borrower's repayment capacity</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Ethical Collection</h4>
                      <p className="text-gray-700 text-sm">Dignified and respectful collection practices</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Customer Education</h4>
                      <p className="text-gray-700 text-sm">Financial literacy and awareness programs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Loan Application and Approval</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Application Process</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Simple, easy-to-understand application forms</li>
                    <li>Clear documentation requirements with reasonable timelines</li>
                    <li>Multiple language support for better understanding</li>
                    <li>Digital and offline application options</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Credit Assessment</h4>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                      <li>Comprehensive evaluation of repayment capacity</li>
                      <li>Fair credit scoring based on verified information</li>
                      <li>Consideration of alternative credit data</li>
                      <li>No discrimination based on non-financial factors</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Approval Timeline</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded p-3 text-center">
                      <ClockIcon className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <p className="font-medium text-green-900">Quick Loans</p>
                      <p className="text-green-700 text-sm">Within 24 hours</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded p-3 text-center">
                      <ClockIcon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <p className="font-medium text-blue-900">Standard Loans</p>
                      <p className="text-blue-700 text-sm">2-5 business days</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded p-3 text-center">
                      <ClockIcon className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <p className="font-medium text-purple-900">Complex Loans</p>
                      <p className="text-purple-700 text-sm">5-10 business days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Interest Rates and Charges</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Transparent Pricing</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-50 rounded-lg">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Charge Type</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Disclosure Requirement</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Timing</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">Interest Rate</td>
                          <td className="px-4 py-3">Annual Percentage Rate (APR) clearly stated</td>
                          <td className="px-4 py-3">Before application</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">Processing Fee</td>
                          <td className="px-4 py-3">Fixed amount or percentage disclosed</td>
                          <td className="px-4 py-3">At application time</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 font-medium">Late Payment</td>
                          <td className="px-4 py-3">Clear penalty structure</td>
                          <td className="px-4 py-3">In loan agreement</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Prepayment</td>
                          <td className="px-4 py-3">Any charges for early repayment</td>
                          <td className="px-4 py-3">Before disbursement</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-2">No Hidden Charges</h4>
                      <p className="text-yellow-800 text-sm">
                        All charges are disclosed upfront. No additional fees will be imposed without prior written consent and clear explanation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Collection Practices</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Dignified Collection</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-green-900 mb-2">We Will:</h5>
                      <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                        <li>Contact during reasonable hours (9 AM - 7 PM)</li>
                        <li>Treat borrowers with respect and dignity</li>
                        <li>Provide clear repayment options</li>
                        <li>Maintain customer confidentiality</li>
                        <li>Follow legal collection procedures</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-red-900 mb-2">We Will Not:</h5>
                      <ul className="list-disc list-inside space-y-1 text-red-800 text-sm">
                        <li>Use threatening or abusive language</li>
                        <li>Contact at workplace without permission</li>
                        <li>Harass family members or references</li>
                        <li>Visit customer premises without prior notice</li>
                        <li>Disclose debt information to third parties</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Collection Process</h4>
                  <div className="space-y-3">
                    <div className="flex items-center bg-blue-50 border border-blue-200 rounded p-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                      <div>
                        <p className="font-medium text-blue-900">Friendly Reminder</p>
                        <p className="text-blue-700 text-sm">SMS/Email notification before due date</p>
                      </div>
                    </div>
                    <div className="flex items-center bg-yellow-50 border border-yellow-200 rounded p-3">
                      <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                      <div>
                        <p className="font-medium text-yellow-900">Gentle Follow-up</p>
                        <p className="text-yellow-700 text-sm">Courteous phone call to understand situation</p>
                      </div>
                    </div>
                    <div className="flex items-center bg-orange-50 border border-orange-200 rounded p-3">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                      <div>
                        <p className="font-medium text-orange-900">Payment Plan</p>
                        <p className="text-orange-700 text-sm">Offer restructuring or payment plan options</p>
                      </div>
                    </div>
                    <div className="flex items-center bg-red-50 border border-red-200 rounded p-3">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</div>
                      <div>
                        <p className="font-medium text-red-900">Legal Notice</p>
                        <p className="text-red-700 text-sm">Formal legal notice as last resort</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Customer Grievance Mechanism</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Multiple Channels</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded p-4 text-center">
                      <h5 className="font-medium text-blue-900 mb-2">Phone Support</h5>
                      <p className="text-blue-700 text-sm">1800-123-LOAN (5626)</p>
                      <p className="text-blue-600 text-xs">24/7 Available</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
                      <h5 className="font-medium text-green-900 mb-2">Email Support</h5>
                      <p className="text-green-700 text-sm">grievance@fin-agentix.com</p>
                      <p className="text-green-600 text-xs">Response within 24 hours</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded p-4 text-center">
                      <h5 className="font-medium text-purple-900 mb-2">Online Portal</h5>
                      <p className="text-purple-700 text-sm">Customer Dashboard</p>
                      <p className="text-purple-600 text-xs">Real-time tracking</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Resolution Timeline</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center bg-gray-50 rounded p-3">
                      <span className="font-medium text-gray-900">Acknowledgment</span>
                      <span className="text-gray-600">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 rounded p-3">
                      <span className="font-medium text-gray-900">Investigation</span>
                      <span className="text-gray-600">3-5 business days</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 rounded p-3">
                      <span className="font-medium text-gray-900">Resolution</span>
                      <span className="text-gray-600">Within 15 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Regulatory Compliance</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">RBI Guidelines Adherence</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    We strictly adhere to all Reserve Bank of India guidelines for digital lending and NBFC operations.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li>Master Direction on Digital Lending</li>
                    <li>Fair Practices Code for NBFCs</li>
                    <li>KYC and AML compliance</li>
                    <li>Data protection and privacy norms</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">External Oversight</h4>
                  <div className="bg-green-50 border border-green-200 rounded p-4">
                    <p className="text-green-800 text-sm">
                      Our practices are regularly audited by independent third parties and regulatory bodies to ensure compliance with fair practice standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-green-50 rounded-lg p-8 border border-green-200">
          <div className="flex items-start">
            <InformationCircleIcon className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-green-900 mb-4">Fair Practice Officer</h3>
              <p className="text-green-800 mb-4">
                For any concerns related to fair practices or ethical lending:
              </p>
              <div className="space-y-2 text-green-700">
                <p><strong>Name:</strong> Ms. Priya Sharma</p>
                <p><strong>Designation:</strong> Chief Fair Practice Officer</p>
                <p><strong>Email:</strong> fairpractice@fin-agentix.com</p>
                <p><strong>Phone:</strong> +91 80 4567 8950</p>
                <p><strong>Address:</strong> Fin-Agentix Tower, Electronics City Phase 1, Bangalore - 560100</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Fin-Agentix India. All rights reserved.</p>
          <p className="mt-2">
            This Fair Practice Code is reviewed annually and updated as necessary
          </p>
        </div>

      </div>
    </div>
  );
}