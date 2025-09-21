import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Enhanced rule-based chatbot responses with more specific information
const chatbotResponses = [
  {
    keywords: ["hello", "hi", "hey"],
    response: "Hello! I'm your Fin-Agentix assistant. How can I help you with our lending services today?",
    suggestions: [
      "How do I apply for a loan?",
      "What documents are required for KYC?",
      "Show me loan options",
      "Check my profile"
    ]
  },
  {
    keywords: ["loan", "apply"],
    response: "You can apply for a loan by visiting the 'Loans' section and selecting the type of loan you need. Our platform offers 12 different loan sectors including Personal, Home, Vehicle, Business, Gold, Education, Agriculture, Microfinance, Credit Card, Two Wheeler, Healthcare, and Digital loans.",
    suggestions: [
      "Show me loan options",
      "What documents do I need?",
      "How long does approval take?"
    ]
  },
  {
    keywords: ["marketplace", "consumption"],
    response: "Our Consumption Marketplace connects you directly with partners in education, healthcare, vehicle, and other sectors. You can browse offers and apply for consumption-linked loans where funds are disbursed directly to the service provider.",
    suggestions: [
      "Show me marketplace",
      "How does consumption lending work?",
      "What partners are available?"
    ]
  },
  {
    keywords: ["document", "kyc"],
    response: "For KYC verification, you'll typically need to provide your Aadhaar card, PAN card, and bank statements. The exact requirements may vary based on the loan type. Our platform offers multiple verification methods including video KYC and biometric verification.",
    suggestions: [
      "How do I complete KYC?",
      "What if I don't have Aadhaar?",
      "How long does KYC take?"
    ]
  },
  {
    keywords: ["interest", "rate"],
    response: "Our interest rates vary based on the loan type, your credit score, and other factors. Typical ranges are: Personal Loans (10.5%-18%), Home Loans (8.5%-12%), Vehicle Loans (9%-15%), and Business Loans (12%-19%). You can check specific rates for each loan product in the 'Loans' section.",
    suggestions: [
      "Show me current rates",
      "How is my rate determined?",
      "Can I negotiate my rate?"
    ]
  },
  {
    keywords: ["profile", "account"],
    response: "You can view and update your profile information by clicking on your profile icon in the top right corner and selecting 'Profile'. Your profile includes personal information, contact details, employment information, and financial data used for loan processing.",
    suggestions: [
      "Take me to my profile",
      "How do I update my information?",
      "What information is required?"
    ]
  },
  {
    keywords: ["support", "help"],
    response: "Our support team is available 24/7 to assist you. You can reach us through the contact form, by calling our helpline, or through the in-app support chat. Common support topics include loan application issues, document submission problems, and account access questions.",
    suggestions: [
      "What is your helpline number?",
      "How do I submit a support ticket?",
      "Do you have a FAQ section?"
    ]
  },
  {
    keywords: ["eligibility", "qualify"],
    response: "Eligibility criteria vary by loan type, but generally include: Age (18-65 years), Stable income source, Valid KYC documents, and Minimum credit score (varies by loan type). You can check specific requirements for each loan in the 'Loans' section.",
    suggestions: [
      "Check my eligibility",
      "What is the minimum income?",
      "How does credit score affect eligibility?"
    ]
  },
  {
    keywords: ["tenure", "duration"],
    response: "Loan tenure varies by loan type. Personal loans typically range from 12-60 months, home loans from 60-300 months, vehicle loans from 12-84 months, and business loans from 12-60 months. Longer tenures result in lower EMIs but higher total interest.",
    suggestions: [
      "Show me tenure options",
      "Can I prepay my loan?",
      "Are there penalties for early repayment?"
    ]
  },
  {
    keywords: ["emi", "payment"],
    response: "EMI (Equated Monthly Installment) is the fixed amount you pay monthly towards your loan. It includes both principal and interest components. You can calculate your EMI using our loan calculator in the 'Loans' section. Payments can be made through auto-debit, net banking, or UPI.",
    suggestions: [
      "Calculate my EMI",
      "How do I set up auto-debit?",
      "What if I miss a payment?"
    ]
  },
  {
    keywords: ["partner", "vendor"],
    response: "Our platform partners with over 500+ service providers across 12 sectors. These include educational institutions, healthcare providers, vehicle dealers, e-commerce platforms, and more. When you apply for a consumption loan, funds are directly disbursed to these partners.",
    suggestions: [
      "Show me partner categories",
      "How do I become a partner?",
      "What sectors do you cover?"
    ]
  },
  {
    keywords: ["sector", "category"],
    response: "We operate in 12 key sectors: 1. Personal Loans, 2. Home Loans, 3. Vehicle Loans, 4. Business Loans, 5. Gold Loans, 6. Education Loans, 7. Agriculture Loans, 8. Microfinance, 9. Credit Card, 10. Two Wheeler Loans, 11. Healthcare Loans, 12. Digital Loans. Each sector has specialized products and partners.",
    suggestions: [
      "Show me all sectors",
      "Which sector has the best rates?",
      "How do I apply for a specific sector loan?"
    ]
  },
  {
    keywords: ["approval", "process"],
    response: "Our AI-powered approval process typically takes 15-30 minutes for initial assessment. The process includes: 1. Document submission, 2. Automated credit assessment, 3. Partner verification (for consumption loans), 4. Final approval. You'll receive real-time updates throughout the process.",
    suggestions: [
      "Check my application status",
      "What affects approval time?",
      "Can I expedite my application?"
    ]
  }
];

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const lowerMessage = message.toLowerCase();
    
    // Find the best matching response
    let bestMatch = null;
    let highestScore = 0;
    
    for (const response of chatbotResponses) {
      let score = 0;
      for (const keyword of response.keywords) {
        if (lowerMessage.includes(keyword)) {
          score++;
        }
      }
      
      if (score > highestScore) {
        highestScore = score;
        bestMatch = response;
      }
    }
    
    // If no good match found, use a default response
    if (!bestMatch || highestScore === 0) {
      bestMatch = {
        response: "I can help you with loan applications, KYC requirements, interest rates, and navigating our platform. What would you like to know?",
        suggestions: [
          "Show me loan options",
          "How do I apply for a loan?",
          "What documents are required?",
          "Check my profile"
        ]
      };
    }
    
    // Add user context to response if logged in
    let contextualResponse = bestMatch.response;
    if (session?.user) {
      // Get user-specific information if available
      try {
        const user = await prisma.user.findUnique({
          where: { id: session.user.id },
          include: { profile: true }
        });
        
        if (user && user.profile) {
          contextualResponse += ` Hello ${user.profile.firstName || 'there'}! I can see you're logged in with ${user.email}.`;
        }
        
        // Check if user has any active loans
        const activeLoans = await prisma.loanApplication.count({
          where: { 
            userId: session.user.id,
            status: { in: ["SUBMITTED", "DOCUMENT_VERIFICATION", "UNDER_REVIEW", "TECHNICAL_REVIEW", "CREDIT_ASSESSMENT", "MANUAL_REVIEW", "APPROVED", "DISBURSED", "ACTIVE"] }
          }
        });
        
        if (activeLoans > 0) {
          contextualResponse += ` I see you have ${activeLoans} active loan application(s).`;
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
      
      contextualResponse += ` As a logged-in user, you can access personalized features like tracking your applications and managing your profile.`;
    } else {
      contextualResponse += ` If you're not logged in yet, you might want to sign in to access personalized features.`;
    }

    return NextResponse.json({
      response: contextualResponse,
      suggestions: bestMatch.suggestions
    });
  } catch (error) {
    console.error("[CHATBOT_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}