"use client";

import { useState } from "react";
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon
} from "@heroicons/react/24/outline";

const contactMethods = [
  {
    name: "Customer Support",
    description: "Get instant help with your loan applications and account queries",
    icon: ChatBubbleLeftRightIcon,
    contact: "1800-123-LOAN (5626)",
    hours: "24/7 Available",
    color: "bg-blue-500",
  },
  {
    name: "Email Support",
    description: "Send us detailed queries and documentation for assistance",
    icon: EnvelopeIcon,
    contact: "support@fin-agentix.com",
    hours: "Response within 2 hours",
    color: "bg-green-500",
  },
  {
    name: "Business Inquiries",
    description: "Partnership and business development opportunities",
    icon: BuildingOfficeIcon,
    contact: "business@fin-agentix.com",
    hours: "Mon-Fri, 9 AM - 6 PM",
    color: "bg-purple-500",
  },
];

const offices = [
  {
    city: "Bangalore (Head Office)",
    address: "Fin-Agentix Tower, Electronics City Phase 1, Bangalore - 560100",
    phone: "+91 80 4567 8900",
    email: "bangalore@fin-agentix.com",
  },
  {
    city: "Mumbai",
    address: "Business Park, Bandra Kurla Complex, Mumbai - 400051",
    phone: "+91 22 6789 0000",
    email: "mumbai@fin-agentix.com",
  },
  {
    city: "Delhi NCR",
    address: "Cyber Hub, DLF Cyber City, Gurgaon - 122002",
    phone: "+91 124 456 7890",
    email: "delhi@fin-agentix.com",
  },
  {
    city: "Hyderabad",
    address: "HITEC City, Madhapur, Hyderabad - 500081",
    phone: "+91 40 2345 6789",
    email: "hyderabad@fin-agentix.com",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    loanType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        loanType: "",
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              We&apos;re here to help you with all your lending needs. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Can We Help You?
          </h2>
          <p className="text-xl text-gray-600">
            Choose the most convenient way to reach us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className={`${method.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6`}>
                <method.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{method.name}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-900">{method.contact}</p>
                <p className="text-sm text-gray-500 flex items-center justify-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  {method.hours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form & Office Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <ChatBubbleLeftRightIcon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-green-600">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Type (if applicable)
                    </label>
                    <select
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select loan type</option>
                      <option value="personal">Personal Loan</option>
                      <option value="home">Home Loan</option>
                      <option value="vehicle">Vehicle Loan</option>
                      <option value="business">Business Loan</option>
                      <option value="education">Education Loan</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please provide detailed information about your query..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Office Locations */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h2>
            
            <div className="space-y-6">
              {offices.map((office, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6 pb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{office.city}</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600 flex items-start">
                      <MapPinIcon className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      {office.address}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                      {office.phone}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" />
                      {office.email}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Business Hours</h4>
              <div className="text-sm text-blue-800 space-y-1">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Customer Support Only (Phone &amp; Chat)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How long does loan approval take?</h3>
              <p className="text-gray-600">Most loan applications are processed within 24-48 hours. Pre-approved customers can get instant approval.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What documents are required?</h3>
              <p className="text-gray-600">Basic KYC documents (Aadhaar, PAN), income proof, and bank statements. Specific requirements vary by loan type.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Can I track my application status?</h3>
              <p className="text-gray-600">Yes, you can track your application in real-time through your dashboard or by calling our customer support.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Is there a prepayment penalty?</h3>
              <p className="text-gray-600">Prepayment charges vary by loan type and tenure. Personal loans typically have 2-3% charges, while home loans may be lower.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}