import Link from "next/link";
import { 
  QuestionMarkCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline";

const faqs = [
  {
    category: "Loan Application",
    questions: [
      {
        q: "How long does the loan approval process take?",
        a: "Most personal loans are approved within 24-48 hours. Home loans may take 7-15 days for complete processing."
      },
      {
        q: "What documents are required for loan application?",
        a: "Basic documents include Aadhaar Card, PAN Card, income proof (salary slips/ITR), and bank statements. Additional documents may be required based on loan type."
      },
      {
        q: "What is the minimum CIBIL score required?",
        a: "Generally, a CIBIL score of 650+ is preferred for most loans. However, we evaluate applications holistically considering multiple factors."
      }
    ]
  },
  {
    category: "EMI and Repayment",
    questions: [
      {
        q: "Can I prepay my loan?",
        a: "Yes, you can prepay your loan. Prepayment charges may apply as per the loan agreement terms."
      },
      {
        q: "What happens if I miss an EMI payment?",
        a: "Missing EMI payments may attract late payment charges and impact your credit score. Contact us immediately if you anticipate payment difficulties."
      },
      {
        q: "How is EMI calculated?",
        a: "EMI is calculated using the formula: [P x R x (1+R)^N]/[(1+R)^N-1], where P=Principal, R=Monthly interest rate, N=Number of months."
      }
    ]
  },
  {
    category: "KYC and Verification",
    questions: [
      {
        q: "How long does KYC verification take?",
        a: "KYC verification typically takes 24-48 hours after submitting all required documents."
      },
      {
        q: "Is Aadhaar verification mandatory?",
        a: "Yes, Aadhaar verification is mandatory as per RBI guidelines for all loan applications."
      },
      {
        q: "Can I update my KYC documents after verification?",
        a: "Yes, you can update your KYC documents. The updated documents will need to be re-verified."
      }
    ]
  }
];

const contactMethods = [
  {
    title: "Phone Support",
    description: "Speak directly with our customer service team",
    contact: "1800-123-LOAN (5626)",
    hours: "24/7 Available",
    icon: PhoneIcon,
    color: "bg-blue-500"
  },
  {
    title: "Email Support",
    description: "Send us your detailed queries",
    contact: "support@fin-agentix.com",
    hours: "Response within 2 hours",
    icon: EnvelopeIcon,
    color: "bg-green-500"
  },
  {
    title: "Live Chat",
    description: "Instant support through website chat",
    contact: "Available on website",
    hours: "Mon-Sat: 9 AM - 9 PM",
    icon: ChatBubbleLeftRightIcon,
    color: "bg-purple-500"
  }
];

export default function HelpPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Find answers to common questions and get the support you need
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Get Immediate Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className={`${method.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-lg font-semibold text-gray-900">{method.contact}</p>
                <p className="text-sm text-gray-500 flex items-center justify-center mt-2">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  {method.hours}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <QuestionMarkCircleIcon className="h-6 w-6 text-blue-600 mr-2" />
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h4>
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-red-50 border border-red-200 rounded-xl p-8">
          <div className="flex items-center mb-4">
            <ExclamationTriangleIcon className="h-8 w-8 text-red-600 mr-3" />
            <h3 className="text-2xl font-bold text-red-900">Emergency Support</h3>
          </div>
          <p className="text-red-800 mb-4">
            For urgent loan-related issues or payment emergencies, contact our 24/7 helpline:
          </p>
          <div className="bg-white rounded-lg p-4 inline-block">
            <p className="text-2xl font-bold text-red-600">1800-123-LOAN (5626)</p>
            <p className="text-sm text-gray-600">Available 24/7 for emergencies</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/contact" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Contact Us
            </Link>
            <Link href="/loans/track" className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200">
              Track Application
            </Link>
            <Link href="/loans/calculator" className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200">
              EMI Calculator
            </Link>
            <Link href="/grievance" className="bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors duration-200">
              File Grievance
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}