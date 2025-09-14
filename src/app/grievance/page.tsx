import Link from "next/link";
import { 
  ExclamationTriangleIcon,
  PhoneIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  ClockIcon,
  UserIcon,
  BuildingOfficeIcon
} from "@heroicons/react/24/outline";

const grievanceTypes = [
  {
    type: "Loan Processing Delays",
    description: "Issues related to loan application processing time",
    escalation: "Level 1: Branch Manager → Level 2: Regional Manager → Level 3: Chief Grievance Officer"
  },
  {
    type: "Interest Rate Disputes",
    description: "Concerns about interest rates and charges",
    escalation: "Level 1: Customer Service → Level 2: Credit Manager → Level 3: Chief Grievance Officer"
  },
  {
    type: "Documentation Issues",
    description: "Problems with document verification or requirements",
    escalation: "Level 1: Operations Team → Level 2: Operations Manager → Level 3: Chief Grievance Officer"
  },
  {
    type: "EMI and Payment Issues",
    description: "Payment processing or EMI-related concerns",
    escalation: "Level 1: Collections Team → Level 2: Collections Manager → Level 3: Chief Grievance Officer"
  },
  {
    type: "Customer Service",
    description: "Service quality and staff behavior issues",
    escalation: "Level 1: Supervisor → Level 2: Customer Service Manager → Level 3: Chief Grievance Officer"
  }
];

const resolutionProcess = [
  {
    step: 1,
    title: "Submit Grievance",
    description: "Submit your complaint through any of our available channels",
    timeframe: "Immediate"
  },
  {
    step: 2,
    title: "Acknowledgment",
    description: "Receive acknowledgment with unique reference number",
    timeframe: "Within 24 hours"
  },
  {
    step: 3,
    title: "Investigation",
    description: "Our team investigates the matter thoroughly",
    timeframe: "2-7 working days"
  },
  {
    step: 4,
    title: "Resolution",
    description: "Resolution provided and communicated to customer",
    timeframe: "Within 15 working days"
  }
];

export default function GrievancePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Grievance Redressal</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We are committed to resolving your concerns promptly and fairly
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ExclamationTriangleIcon className="h-6 w-6 text-red-600 mr-2" />
            Grievance Contact Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Chief Grievance Officer</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">Mr. Rajesh Kumar</span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">+91 80 4567 8901</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">grievance@fin-agentix.com</span>
                </div>
                <div className="flex items-start">
                  <BuildingOfficeIcon className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <span className="text-gray-700">
                    Fin-Agentix Tower, Electronics City Phase 1,<br />
                    Bangalore - 560100
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-gray-400 mr-3" />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-gray-400 mr-3" />
                  <span>Saturday: 9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-gray-400 mr-3" />
                  <span>Sunday: Closed</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>Emergency Helpline:</strong> 1800-123-LOAN (5626) - Available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grievance Types */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Types of Grievances We Handle</h2>
          
          <div className="space-y-6">
            {grievanceTypes.map((grievance, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{grievance.type}</h3>
                <p className="text-gray-600 mb-3">{grievance.description}</p>
                <div className="text-sm text-gray-500">
                  <strong>Escalation Path:</strong> {grievance.escalation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resolution Process */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Grievance Resolution Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {resolutionProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <p className="text-sm font-semibold text-blue-600">{step.timeframe}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to File a Grievance */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">How to File a Grievance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">By Phone</h3>
              <p className="text-gray-600 mb-2">Call our grievance helpline</p>
              <p className="text-xl font-bold text-green-600">+91 80 4567 8901</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <EnvelopeIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">By Email</h3>
              <p className="text-gray-600 mb-2">Send detailed complaint</p>
              <p className="text-lg font-semibold text-blue-600">grievance@fin-agentix.com</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DocumentTextIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Written Application</h3>
              <p className="text-gray-600 mb-2">Submit at any branch</p>
              <p className="text-lg font-semibold text-purple-600">Head Office: Bangalore</p>
            </div>
          </div>
        </div>

        {/* RBI Ombudsman */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">RBI Banking Ombudsman</h2>
          <p className="text-gray-700 mb-4">
            If you are not satisfied with our grievance resolution, you can approach the RBI Banking Ombudsman:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">RBI Ombudsman - Karnataka</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p>Reserve Bank of India</p>
                <p>Ombudsman Office, Bangalore</p>
                <p>Phone: 080-22268000</p>
                <p>Email: cgmincbangalore@rbi.org.in</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Online Portal</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p>File complaints online at:</p>
                <p className="text-blue-600">cms.rbi.org.in</p>
                <p>or call RBI Helpline: 14448</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/contact" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Contact Support
            </Link>
            <Link href="/help" className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200">
              Help Center
            </Link>
            <Link href="/loans/track" className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200">
              Track Application
            </Link>
            <Link href="/dashboard" className="bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors duration-200">
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}