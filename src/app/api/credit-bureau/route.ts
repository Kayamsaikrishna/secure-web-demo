import { NextRequest, NextResponse } from 'next/server';

// Mock Credit Bureau data
const mockCreditData = {
  "ABCDE1234F": {
    cibil: {
      score: 742,
      reportDate: "2024-01-15",
      accounts: [
        {
          accountType: "Credit Card",
          bank: "HDFC Bank",
          creditLimit: 200000,
          currentBalance: 45000,
          paymentHistory: "Regular",
          status: "Active"
        },
        {
          accountType: "Personal Loan",
          bank: "ICICI Bank",
          sanctionedAmount: 500000,
          currentBalance: 125000,
          paymentHistory: "Regular",
          status: "Active"
        }
      ],
      inquiries: 3,
      lastInquiry: "2023-12-10"
    },
    experian: {
      score: 738,
      reportDate: "2024-01-12",
      riskGrade: "LOW",
      accountsSummary: {
        total: 5,
        active: 4,
        closed: 1
      }
    },
    equifax: {
      score: 745,
      reportDate: "2024-01-14",
      defaultHistory: false,
      settledAccounts: 0
    },
    crif: {
      score: 740,
      reportDate: "2024-01-13",
      commercialRating: "A+",
      microfinanceExposure: false
    }
  },
  "FGHIJ5678K": {
    cibil: {
      score: 789,
      reportDate: "2024-01-16",
      accounts: [
        {
          accountType: "Home Loan",
          bank: "SBI",
          sanctionedAmount: 3000000,
          currentBalance: 2100000,
          paymentHistory: "Excellent",
          status: "Active"
        },
        {
          accountType: "Credit Card",
          bank: "Axis Bank",
          creditLimit: 300000,
          currentBalance: 12000,
          paymentHistory: "Excellent",
          status: "Active"
        }
      ],
      inquiries: 2,
      lastInquiry: "2023-11-25"
    },
    experian: {
      score: 785,
      reportDate: "2024-01-14",
      riskGrade: "VERY_LOW",
      accountsSummary: {
        total: 6,
        active: 6,
        closed: 0
      }
    },
    equifax: {
      score: 792,
      reportDate: "2024-01-15",
      defaultHistory: false,
      settledAccounts: 0
    },
    crif: {
      score: 788,
      reportDate: "2024-01-16",
      commercialRating: "AAA",
      microfinanceExposure: false
    }
  },
  "KLMNO9012P": {
    cibil: {
      score: 756,
      reportDate: "2024-01-17",
      accounts: [
        {
          accountType: "Vehicle Loan",
          bank: "Bajaj Finserv",
          sanctionedAmount: 800000,
          currentBalance: 320000,
          paymentHistory: "Regular",
          status: "Active"
        },
        {
          accountType: "Credit Card",
          bank: "HDFC Bank",
          creditLimit: 150000,
          currentBalance: 35000,
          paymentHistory: "Regular",
          status: "Active"
        }
      ],
      inquiries: 4,
      lastInquiry: "2024-01-05"
    },
    experian: {
      score: 752,
      reportDate: "2024-01-15",
      riskGrade: "LOW",
      accountsSummary: {
        total: 4,
        active: 3,
        closed: 1
      }
    },
    equifax: {
      score: 758,
      reportDate: "2024-01-16",
      defaultHistory: false,
      settledAccounts: 1
    },
    crif: {
      score: 754,
      reportDate: "2024-01-17",
      commercialRating: "A",
      microfinanceExposure: true
    }
  }
};

interface CreditBureauData {
  score: number;
  reportDate: string;
  [key: string]: any; // Allow additional properties
}

interface CreditData {
  cibil: CreditBureauData;
  experian: CreditBureauData;
  equifax: CreditBureauData;
  crif: CreditBureauData;
}

// Risk assessment algorithm
function calculateRiskProfile(creditData: CreditData) {
  const avgScore = (
    creditData.cibil.score + 
    creditData.experian.score + 
    creditData.equifax.score + 
    creditData.crif.score
  ) / 4;

  let riskLevel: string;
  let recommendation: string;

  if (avgScore >= 750) {
    riskLevel = "LOW";
    recommendation = "APPROVE_WITH_BEST_RATES";
  } else if (avgScore >= 700) {
    riskLevel = "MEDIUM";
    recommendation = "APPROVE_WITH_STANDARD_RATES";
  } else if (avgScore >= 650) {
    riskLevel = "MEDIUM_HIGH";
    recommendation = "APPROVE_WITH_HIGHER_RATES";
  } else {
    riskLevel = "HIGH";
    recommendation = "REQUIRE_ADDITIONAL_SECURITY";
  }

  return {
    averageScore: Math.round(avgScore),
    riskLevel,
    recommendation,
    creditworthiness: avgScore >= 750 ? "EXCELLENT" : avgScore >= 700 ? "GOOD" : avgScore >= 650 ? "FAIR" : "POOR"
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { panNumber, requestType = "COMPREHENSIVE", bureaus = ["CIBIL", "EXPERIAN", "EQUIFAX", "CRIF"] } = body;

    // Simulate API processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Validate PAN number format
    if (!panNumber || panNumber.length !== 10 || !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panNumber)) {
      return NextResponse.json({
        success: false,
        error: {
          code: "INVALID_PAN",
          message: "Invalid PAN number format"
        }
      }, { status: 400 });
    }

    // Check if credit data exists
    const creditData = mockCreditData[panNumber as keyof typeof mockCreditData];

    if (!creditData) {
      return NextResponse.json({
        success: false,
        error: {
          code: "NO_CREDIT_HISTORY",
          message: "No credit history found for this PAN"
        }
      }, { status: 404 });
    }

    // Filter bureaus based on request
    const requestedData: Record<string, CreditBureauData> = {};
    
    bureaus.forEach((bureau: string) => {
      const bureauKey = bureau.toLowerCase();
      if (creditData[bureauKey as keyof typeof creditData]) {
        requestedData[bureauKey] = creditData[bureauKey as keyof typeof creditData];
      }
    });

    // Calculate risk profile
    const riskProfile = calculateRiskProfile(creditData);

    // Generate AI-powered insights
    const aiInsights = {
      creditBehavior: "Consistent payment history with occasional delays",
      utilizationPattern: "Moderate credit utilization across accounts",
      inquiryFrequency: "Reasonable inquiry frequency indicating credit-seeking behavior",
      accountMix: "Good mix of secured and unsecured credit",
      stabilityIndicators: [
        "Long-standing relationship with primary bank",
        "Consistent employment history",
        "Stable residential address"
      ],
      riskFactors: [
        "Recent credit inquiries",
        "High utilization on one credit card"
      ],
      recommendations: [
        "Consider debt consolidation for better utilization",
        "Maintain current payment discipline",
        "Avoid new credit applications for next 3 months"
      ]
    };

    return NextResponse.json({
      success: true,
      data: {
        panNumber,
        requestType,
        creditScores: requestedData,
        riskProfile,
        aiInsights,
        verificationStatus: "VERIFIED",
        reportGeneratedAt: new Date().toISOString(),
        transactionId: `CREDIT_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days
      },
      meta: {
        apiVersion: "v4.2",
        dataFreshness: "Real-time",
        bureausQueried: bureaus,
        processingTime: "2.1s"
      }
    });

  } catch (error) {
    console.error('Credit bureau API error:', error);
    return NextResponse.json({
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: "Internal server error during credit verification"
      }
    }, { status: 500 });
  }
}

// Get credit score summary
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const panNumber = searchParams.get('pan');
    const bureau = searchParams.get('bureau') || 'CIBIL';

    if (!panNumber || panNumber.length !== 10) {
      return NextResponse.json({
        success: false,
        error: {
          code: "INVALID_PAN",
          message: "Invalid PAN number"
        }
      }, { status: 400 });
    }

    // Simulate API processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if credit data exists
    const creditData = mockCreditData[panNumber as keyof typeof mockCreditData];

    if (!creditData) {
      return NextResponse.json({
        success: false,
        error: {
          code: "NO_CREDIT_HISTORY",
          message: "No credit history found"
        }
      }, { status: 404 });
    }

    const bureauKey = bureau.toLowerCase();
    const bureauData = creditData[bureauKey as keyof typeof creditData];

    if (!bureauData) {
      return NextResponse.json({
        success: false,
        error: {
          code: "BUREAU_NOT_AVAILABLE",
          message: `Credit data not available for ${bureau}`
        }
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: {
        panNumber,
        bureau: bureau.toUpperCase(),
        score: bureauData.score,
        reportDate: bureauData.reportDate,
        category: bureauData.score >= 750 ? "EXCELLENT" : 
                 bureauData.score >= 700 ? "GOOD" : 
                 bureauData.score >= 650 ? "FAIR" : "POOR",
        transactionId: `SCORE_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      },
      meta: {
        apiVersion: "v4.2",
        provider: bureau.toUpperCase(),
        queryType: "SCORE_ONLY"
      }
    });

  } catch (error) {
    console.error('Credit score API error:', error);
    return NextResponse.json({
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: "Internal server error during credit score check"
      }
    }, { status: 500 });
  }
}