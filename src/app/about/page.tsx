"use client";

import { 
  BuildingOfficeIcon,
  UsersIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CurrencyRupeeIcon,
  TrophyIcon,
  HandRaisedIcon,
  HeartIcon
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "AI-Powered Risk Assessment",
    description: "Advanced machine learning algorithms evaluate loan applications with 99.2% accuracy, reducing default rates and enabling faster approvals.",
    icon: ChartBarIcon,
  },
  {
    name: "Instant Digital Verification",
    description: "Real-time KYC and document verification through Aadhaar, PAN, and banking APIs for seamless customer onboarding.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Multi-Sector Expertise",
    description: "Specialized loan products across 12 sectors including personal, home, business, agriculture, and education financing.",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Customer-Centric Service",
    description: "24/7 support, transparent pricing, and flexible repayment options designed around customer convenience.",
    icon: UsersIcon,
  },
];

const stats = [
  { name: "Loans Disbursed", value: "₹2,450+ Cr", icon: CurrencyRupeeIcon },
  { name: "Happy Customers", value: "1.2L+", icon: HeartIcon },
  { name: "Cities Covered", value: "850+", icon: BuildingOfficeIcon },
  { name: "Industry Awards", value: "25+", icon: TrophyIcon },
];

const team = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Chief Executive Officer",
    description: "Former RBI Deputy Governor with 25+ years in banking and financial services regulation.",
    image: "/api/placeholder/150/150",
  },
  {
    name: "Priya Mehta",
    role: "Chief Technology Officer", 
    description: "Ex-Google engineering leader specializing in AI/ML and fintech infrastructure.",
    image: "/api/placeholder/150/150",
  },
  {
    name: "Amit Patel",
    role: "Chief Risk Officer",
    description: "Former HDFC Bank risk management head with expertise in credit underwriting.",
    image: "/api/placeholder/150/150",
  },
  {
    name: "Kavya Singh",
    role: "Chief Customer Officer",
    description: "Customer experience expert with track record in digital transformation.",
    image: "/api/placeholder/150/150",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Fin-Agentix
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Revolutionizing financial inclusion through AI-powered lending solutions that make credit accessible, transparent, and fair for everyone.
            </p>
            <div className="flex justify-center">
              <HandRaisedIcon className="h-24 w-24 text-yellow-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              To democratize access to credit by leveraging cutting-edge technology and data science, 
              ensuring that every individual and business gets fair access to financial opportunities 
              regardless of their traditional credit history.
            </p>
            <div className="flex items-center text-blue-600">
              <HeartIcon className="h-6 w-6 mr-2" />
              <span className="font-semibold">Financial Inclusion for All</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-6">
              To become India's most trusted and innovative lending platform, setting new standards 
              for transparency, speed, and customer satisfaction in the financial services industry 
              through responsible AI and ethical lending practices.
            </p>
            <div className="flex items-center text-indigo-600">
              <TrophyIcon className="h-6 w-6 mr-2" />
              <span className="font-semibold">Excellence in Innovation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-yellow-300" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Fin-Agentix?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine advanced technology with deep financial expertise to deliver 
            superior lending solutions that benefit both borrowers and lenders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <feature.icon className="h-10 w-10 text-blue-600 mr-4" />
                <h3 className="text-xl font-bold text-gray-900">{feature.name}</h3>
              </div>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders from top financial institutions and technology companies, 
              united by a shared vision of financial innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Trust & Security</h3>
            <p className="text-gray-600">
              We prioritize data security and maintain the highest standards of financial compliance 
              to protect our customers' information and investments.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <UsersIcon className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
            <p className="text-gray-600">
              Every decision we make is guided by what's best for our customers, ensuring 
              transparent, fair, and beneficial financial solutions.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <ChartBarIcon className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              We continuously evolve our technology and services to stay ahead of customer 
              needs and industry trends.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Financial Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who have experienced the future of lending.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/register"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
            >
              Start Application
            </a>
            <a
              href="/contact"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}