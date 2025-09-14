"use client";

import { useState } from "react";
import { 
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  // General Questions
  {
    id: 1,
    category: "General",
    question: "What is Fin-Agentix and how does it work?",
    answer: "Fin-Agentix is India's AI-powered digital lending platform that connects borrowers with the right lenders. We offer 12 comprehensive loan sectors including personal, home, vehicle, business, education, and gold loans. Our platform uses advanced AI algorithms to match your profile with suitable lenders for quick approvals and competitive rates."
  },
  {
    id: 2,
    category: "General",
    question: "Is Fin-Agentix a licensed financial institution?",
    answer: "Yes, Fin-Agentix operates under RBI guidelines and holds NBFC registration (N-14.03268). We are fully compliant with all regulatory requirements and follow strict fair practice codes for digital lending in India."
  },
  {
    id: 3,
    category: "General",
    question: "What are the operating hours for customer support?",
    answer: "Our customer support is available 24/7 through phone (1800-123-LOAN) and live chat. Email support responds within 2 hours during business hours (9 AM - 7 PM, Monday to Friday). Our physical offices operate Monday to Friday 9 AM - 7 PM and Saturday 10 AM - 4 PM."
  },

  // Loan Application
  {
    id: 4,
    category: "Loan Application",
    question: "What types of loans do you offer?",
    answer: "We offer 12 comprehensive loan categories: Personal Loans, Home Loans, Vehicle Loans (Car/Two-wheeler), Business Loans, Education Loans, Gold Loans, Agriculture Loans, Professional Loans, Travel Loans, Medical Loans, Wedding Loans, and Property Loans. Each category has specific terms and eligibility criteria."
  },
  {
    id: 5,
    category: "Loan Application",
    question: "How long does the loan approval process take?",
    answer: "Approval times vary by loan type: Quick Personal Loans can be approved within 24 hours, Standard loans take 2-5 business days, and Complex loans (like Home/Business loans) may take 5-10 business days. Pre-approved customers can get instant approval for eligible loan amounts."
  },
  {
    id: 6,
    category: "Loan Application",
    question: "What documents are required for loan application?",
    answer: "Basic requirements include: Valid Aadhaar Card, PAN Card, Bank statements (3-6 months), Income proof (salary slips/ITR), and Address proof. Additional documents may be required based on loan type - for example, property documents for home loans or business registration for business loans."
  },
  {
    id: 7,
    category: "Loan Application",
    question: "What is the minimum and maximum loan amount?",
    answer: "Loan amounts vary by category: Personal Loans: ₹25,000 - ₹40,00,000 | Home Loans: ₹5,00,000 - ₹5,00,00,000 | Vehicle Loans: ₹1,00,000 - ₹1,50,00,000 | Business Loans: ₹1,00,000 - ₹10,00,00,000. Final amount depends on your eligibility and repayment capacity."
  },

  // Eligibility & Credit
  {
    id: 8,
    category: "Eligibility",
    question: "What are the basic eligibility criteria?",
    answer: "You must be: 18+ years old, Indian resident, have a stable income source, and valid KYC documents. Minimum income requirements vary by loan type (typically ₹15,000/month for personal loans). Credit score of 650+ is preferred but we also consider alternative credit data for assessment."
  },
  {
    id: 9,
    category: "Eligibility",
    question: "Can I apply if I have a low credit score?",
    answer: "Yes! While a credit score of 650+ is preferred, we use AI-powered alternative credit assessment including bank transaction analysis, digital footprint, and employment history. We believe in financial inclusion and consider multiple factors beyond just credit scores."
  },
  {
    id: 10,
    category: "Eligibility",
    question: "Do you provide loans to self-employed individuals?",
    answer: "Absolutely! We have specific loan products for self-employed professionals, freelancers, and business owners. We assess income through ITR, bank statements, business vintage, and GST returns. Professional loans are available for doctors, CAs, lawyers, and other certified professionals."
  },

  // Interest Rates & Fees
  {
    id: 11,
    category: "Rates & Fees",
    question: "What are your interest rates?",
    answer: "Interest rates are competitive and vary by loan type and your credit profile: Personal Loans: 10.49% - 24% p.a. | Home Loans: 8.40% - 11.50% p.a. | Vehicle Loans: 8.70% - 15% p.a. | Business Loans: 12% - 20% p.a. Final rates depend on credit assessment and lender policies."
  },
  {
    id: 12,
    category: "Rates & Fees",
    question: "Are there any processing fees or hidden charges?",
    answer: "We believe in complete transparency. Processing fees range from 0.5% - 3% of loan amount depending on the loan type. All charges including processing fee, documentation charges, and any applicable taxes are disclosed upfront. We have a strict no hidden charges policy."
  },
  {
    id: 13,
    category: "Rates & Fees",
    question: "Is there a penalty for prepayment?",
    answer: "Prepayment charges vary by loan type and lender: Personal Loans: 2-3% of outstanding amount | Home Loans: Usually 0.5-1% after 1 year | Vehicle Loans: 2-4% in first year, then reducing. Many lenders offer zero prepayment charges after a certain period. Details are clearly mentioned in your loan agreement."
  },

  // Technology & Security
  {
    id: 14,
    category: "Technology",
    question: "How secure is my personal and financial information?",
    answer: "We use bank-grade security with 256-bit SSL encryption, multi-factor authentication, and ISO 27001 certified data protection. Your information is stored in secure Indian data centers and never shared without consent. We comply with RBI data localization norms and privacy regulations."
  },
  {
    id: 15,
    category: "Technology",
    question: "Can I track my loan application status online?",
    answer: "Yes! Our customer dashboard provides real-time application tracking with status updates. You'll receive SMS and email notifications at every stage. You can also use our mobile app or call customer support for instant status updates."
  },
  {
    id: 16,
    category: "Technology",
    question: "Do you have a mobile app?",
    answer: "Yes, our mobile app is available on Google Play Store and Apple App Store. The app offers all features including loan application, EMI calculator, document upload, application tracking, and customer support. It's optimized for Indian users with multi-language support."
  },

  // EMI & Repayment
  {
    id: 17,
    category: "EMI & Repayment",
    question: "How is my EMI calculated?",
    answer: "EMI is calculated using the formula: [P x R x (1+R)^N] / [(1+R)^N-1], where P=Principal amount, R=Monthly interest rate, N=Number of months. Use our EMI calculator for instant calculations. EMI includes both principal and interest components."
  },
  {
    id: 18,
    category: "EMI & Repayment",
    question: "What are the EMI payment options?",
    answer: "Multiple payment options available: Auto-debit from bank account (recommended), Online payment through net banking/UPI, Mobile app payments, Bank NEFT/RTGS, and Cheque deposits. Auto-debit ensures you never miss a payment and helps maintain good credit history."
  },
  {
    id: 19,
    category: "EMI & Repayment",
    question: "What happens if I miss an EMI payment?",
    answer: "Missing EMI payments incurs late payment charges (typically ₹500-1000) and affects your credit score. We provide grace period of 3-7 days and send multiple reminders. If you're facing financial difficulties, contact us immediately - we offer restructuring options and payment holidays in genuine cases."
  },

  // KYC & Documentation
  {
    id: 20,
    category: "KYC",
    question: "How does the KYC verification process work?",
    answer: "Our KYC process is completely digital: Upload Aadhaar & PAN documents, Instant verification through government APIs, Video KYC call (if required), Bank account verification, and Address verification. Most KYC processes are completed within 30 minutes to 2 hours."
  },
  {
    id: 21,
    category: "KYC",
    question: "Can I complete KYC without visiting a branch?",
    answer: "Yes! Our entire KYC process is digital and can be completed from home. We use Aadhaar-based eKYC, Video KYC, and digital document verification. Branch visits are only required for specific high-value loans or in cases where digital verification faces technical issues."
  },

  // Customer Support
  {
    id: 22,
    category: "Support",
    question: "How can I contact customer support?",
    answer: "Multiple support channels: 24/7 Phone support: 1800-123-LOAN (5626), Live chat on website/app, Email: support@fin-agentix.com (2-hour response), WhatsApp support, and Visit our offices in Bangalore, Mumbai, Delhi, and Hyderabad. We also have dedicated relationship managers for high-value customers."
  },
  {
    id: 23,
    category: "Support",
    question: "How do I file a complaint or grievance?",
    answer: "Grievance channels: Email grievance@fin-agentix.com, Call our grievance cell: +91 80 4567 8950, Use the grievance portal on our website, or Write to our Chief Grievance Officer. All complaints are acknowledged within 24 hours and resolved within 15 days. You can also escalate to RBI Ombudsman if unsatisfied."
  }
];

const categories = ["All", "General", "Loan Application", "Eligibility", "Rates & Fees", "Technology", "EMI & Repayment", "KYC", "Support"];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <QuestionMarkCircleIcon className="mx-auto h-16 w-16 text-purple-200 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Find quick answers to common questions about Fin-Agentix lending platform
            </p>
            <p className="text-sm text-purple-200 mt-4">
              Can't find what you're looking for? Contact our 24/7 support team
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            {/* Search Bar */}
            <div className="relative mb-6">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredFAQs.length} of {faqData.length} questions
              {searchTerm && (
                <span className="ml-2">
                  for "<span className="font-medium text-purple-600">{searchTerm}</span>"
                </span>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border">
              <QuestionMarkCircleIcon className="mx-auto h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs Found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or category filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full mr-3">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {openItems.includes(faq.id) ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(faq.id) && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 border border-purple-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our support team is here to help you 24/7. Choose the most convenient way to reach us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
              <PhoneIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 text-sm mb-4">24/7 customer support hotline</p>
              <p className="text-xl font-bold text-purple-600 mb-2">1800-123-LOAN</p>
              <p className="text-sm text-gray-500">(5626)</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
              <ChatBubbleLeftRightIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm mb-4">Instant chat support on website</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Start Chat
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
              <EnvelopeIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 text-sm mb-4">Response within 2 hours</p>
              <p className="text-lg font-semibold text-green-600">support@fin-agentix.com</p>
            </div>
          </div>
        </div>

        {/* Popular Loan Types */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8 border">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Loan Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Personal Loans",
              "Home Loans", 
              "Vehicle Loans",
              "Business Loans",
              "Education Loans",
              "Gold Loans"
            ].map((loanType) => (
              <div key={loanType} className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center hover:bg-purple-100 transition-colors duration-200 cursor-pointer">
                <p className="text-sm font-medium text-purple-900">{loanType}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Fin-Agentix India. All rights reserved.</p>
          <p className="mt-2">
            For more information, visit our <a href="/help" className="text-purple-600 hover:underline">Help Center</a> or 
            <a href="/contact" className="text-purple-600 hover:underline ml-1">Contact Us</a>
          </p>
        </div>

      </div>
    </div>
  );
}