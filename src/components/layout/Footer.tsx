"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  StarIcon,
  BuildingOfficeIcon,
  CreditCardIcon,
  DocumentTextIcon,
  UserIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";
import Logo from "@/components/ui/Logo";
import { useTranslation } from 'react-i18next';

const contactInfo = {
  phone: "1800-123-LOAN (5626)",
  email: "support@fin-agentix.com",
  businessEmail: "business@fin-agentix.com",
  address: "Fin-Agentix Tower, Electronics City Phase 1, Bangalore - 560100",
  hours: "24/7 Customer Support Available"
};

const offices = [
  {
    city: "Bangalore (Head Office)",
    address: "Fin-Agentix Tower, Electronics City Phase 1, Bangalore - 560100",
    phone: "+91 80 4567 8900",
    email: "bangalore@fin-agentix.com"
  },
  {
    city: "Mumbai",
    address: "Business Park, Bandra Kurla Complex, Mumbai - 400051",
    phone: "+91 22 6789 0000",
    email: "mumbai@fin-agentix.com"
  },
  {
    city: "Delhi NCR",
    address: "Cyber Hub, DLF Cyber City, Gurgaon - 122002",
    phone: "+91 124 456 7890",
    email: "delhi@fin-agentix.com"
  },
  {
    city: "Hyderabad",
    address: "HITEC City, Madhapur, Hyderabad - 500081",
    phone: "+91 40 2345 6789",
    email: "hyderabad@fin-agentix.com"
  }
];

export default function Footer() {
  const { data: session } = useSession();
  const { t } = useTranslation('common');
  
  const publicLinks = [
    { name: t('navigation.home'), href: "/" },
    { name: t('navigation.all_loans'), href: "/loans" },
    { name: t('navigation.emi_calculator'), href: "/loans/calculator" },
    { name: "Track Application", href: "/loans/track" },
    { name: t('navigation.about'), href: "/about" },
    { name: t('navigation.contact'), href: "/contact" }
  ];

  const userLinks = [
    { name: t('navigation.dashboard'), href: "/dashboard" },
    { name: t('navigation.apply_for_loan'), href: "/loans/apply" },
    { name: t('navigation.my_applications'), href: "/loans/my-applications" },
    { name: t('navigation.kyc_verification'), href: "/kyc" },
    { name: t('navigation.profile'), href: "/profile" },
    { name: t('navigation.emi_calculator'), href: "/loans/calculator" }
  ];

  const adminLinks = [
    { name: t('navigation.admin_dashboard'), href: "/admin" },
    { name: t('navigation.applications'), href: "/admin/applications" },
    { name: t('navigation.users'), href: "/admin/users" },
    { name: t('navigation.analytics'), href: "/admin/analytics" },
    { name: t('navigation.reports'), href: "/admin/reports" },
    { name: t('navigation.admin_profile'), href: "/admin/profile" }
  ];

  const loanProducts = [
    { name: t('loan_sectors.personal.name'), href: "/loans/personal" },
    { name: t('loan_sectors.home.name'), href: "/loans/home" },
    { name: t('loan_sectors.vehicle.name'), href: "/loans/vehicle" },
    { name: t('loan_sectors.business.name'), href: "/loans/business" },
    { name: t('loan_sectors.education.name'), href: "/loans/education" },
    { name: t('loan_sectors.gold.name'), href: "/loans/gold" }
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "FAQs", href: "/faq" },
    { name: t('navigation.contact'), href: "/contact" },
    { name: "Grievance Redressal", href: "/grievance" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Fair Practice Code", href: "/fair-practice" },
    { name: "Grievance Policy", href: "/grievance" },
    { name: "Interest Rate Policy", href: "/interest-rates" }
  ];

  const getQuickLinks = () => {
    if (!session) return publicLinks;
    return (session?.user as any)?.role === "ADMIN" ? adminLinks : userLinks;
  };

  const quickLinks = getQuickLinks();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Logo size="md" className="mr-3" />
              <div>
                <h3 className="text-2xl font-bold text-yellow-400">Fin-Agentix</h3>
                <p className="text-sm text-gray-400">India's AI-Powered Lending Platform</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              {t('home.subtitle')}
            </p>
            
            {/* Trust Indicators */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <ShieldCheckIcon className="h-4 w-4 text-green-400 mr-2" />
                <span>RBI Compliant Platform</span>
              </div>
              <div className="flex items-center">
                <ShieldCheckIcon className="h-4 w-4 text-green-400 mr-2" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center">
                <StarIcon className="h-4 w-4 text-yellow-400 mr-2" />
                <span>4.6/5 Customer Rating</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t('navigation.quick_links')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm flex items-center"
                  >
                    {link.name === t('navigation.dashboard') && <ChartBarIcon className="h-4 w-4 mr-2" />}
                    {link.name === t('navigation.profile') && <UserIcon className="h-4 w-4 mr-2" />}
                    {link.name === t('navigation.apply_for_loan') && <CreditCardIcon className="h-4 w-4 mr-2" />}
                    {link.name === t('navigation.my_applications') && <DocumentTextIcon className="h-4 w-4 mr-2" />}
                    {link.href.includes("admin") && <BuildingOfficeIcon className="h-4 w-4 mr-2" />}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t('home.loan_sectors')}</h4>
            <ul className="space-y-3">
              {loanProducts.map((product) => (
                <li key={product.name}>
                  <Link 
                    href={product.href} 
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold text-yellow-400 mb-2">{t('navigation.emi_calculator')}</h5>
              <p className="text-xs text-gray-400 mb-3">{t('home.ready_to_start_desc')}</p>
              <Link 
                href="/loans/calculator" 
                className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded text-xs font-semibold hover:bg-yellow-300 transition-colors duration-200"
              >
                {t('home.start_application')}
              </Link>
            </div>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t('navigation.contact')}</h4>
            
            {/* Contact Information */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <PhoneIcon className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">{contactInfo.phone}</p>
                  <p className="text-xs text-gray-400">{contactInfo.hours}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm">{contactInfo.email}</p>
                  <p className="text-xs text-gray-400">Response within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">Head Office - Bangalore</p>
                  <p className="text-xs text-gray-400">{contactInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-sm text-gray-300">Live Chat Available</span>
              </div>
            </div>

            {/* Support Links */}
            <div>
              <h5 className="text-sm font-semibold text-gray-200 mb-3">Support Resources</h5>
              <ul className="space-y-2">
                {supportLinks.slice(0, 4).map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-xs"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h4 className="text-lg font-semibold mb-6 text-white text-center">Our Office Locations</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="text-center p-4 bg-gray-800 rounded-lg">
                <h5 className="font-semibold text-white mb-2 text-sm">{office.city}</h5>
                <p className="text-xs text-gray-400 mb-2">{office.address}</p>
                <p className="text-xs text-gray-400">{office.phone}</p>
                <p className="text-xs text-gray-400">{office.email}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright & Legal */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Fin-Agentix India. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Licensed by Reserve Bank of India | NBFC Registration Number: N-14.03268
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-xs">
              {legalLinks.slice(0, 4).map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                  {index < 3 && <span className="text-gray-600 ml-4">|</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Legal Links Row */}
          <div className="mt-4 flex flex-wrap justify-center space-x-4 text-xs">
            {legalLinks.slice(4).map((link, index) => (
              <span key={link.name} className="flex items-center">
                <Link 
                  href={link.href} 
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
                {index < legalLinks.slice(4).length - 1 && <span className="text-gray-600 ml-4">|</span>}
              </span>
            ))}
          </div>

          {/* Additional Compliance Info */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              <span className="inline-block mr-4">🔒 256-bit SSL Encrypted</span>
              <span className="inline-block mr-4">🛡️ PCI DSS Compliant</span>
              <span className="inline-block mr-4">📊 Credit Information Bureau Member</span>
              <span className="inline-block">⚡ Instant Loan Approvals</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}