import { NextRequest, NextResponse } from 'next/server';

// Mock PAN database with synthetic data
const mockPANDB = {
  "ABCDE1234F": {
    panNumber: "ABCDE1234F",
    name: "RAJESH KUMAR SINGH",
    fatherName: "RAM KUMAR SINGH",
    dateOfBirth: "15/06/1985",
    status: "VALID",
    category: "Individual",
    aadhaarLinked: true,
    lastUpdated: "2023-12-01",
    address: {
      city: "NEW DELHI",
      state: "DELHI",
      pincode: "110001"
    }
  },
  "FGHIJ5678K": {
    panNumber: "FGHIJ5678K",
    name: "PRIYA SHARMA",
    fatherName: "ASHOK SHARMA",
    dateOfBirth: "22/08/1990",
    status: "VALID",
    category: "Individual",
    aadhaarLinked: true,
    lastUpdated: "2023-11-15",
    address: {
      city: "MUMBAI",
      state: "MAHARASHTRA",
      pincode: "400058"
    }
  },
  "KLMNO9012P": {
    panNumber: "KLMNO9012P",
    name: "AMIT PATEL",
    fatherName: "KIRAN PATEL",
    dateOfBirth: "10/03/1988",
    status: "VALID",
    category: "Individual",
    aadhaarLinked: true,
    lastUpdated: "2023-10-20",
    address: {
      city: "AHMEDABAD",
      state: "GUJARAT",
      pincode: "380015"
    }
  },
  "QRSTU3456V": {
    panNumber: "QRSTU3456V",
    name: "SUNITA DEVI",
    fatherName: "RAMESH SINGH",
    dateOfBirth: "03/12/1975",
    status: "VALID",
    category: "Individual",
    aadhaarLinked: false,
    lastUpdated: "2023-09-05",
    address: {
      city: "SIKAR",
      state: "RAJASTHAN",
      pincode: "332027"
    }
  },
  "WXYZF7890G": {
    panNumber: "WXYZF7890G",
    name: "MOHAMMED ALI KHAN",
    fatherName: "ABDUL RAHMAN KHAN",
    dateOfBirth: "28/07/1982",
    status: "VALID",
    category: "Individual",
    aadhaarLinked: true,
    lastUpdated: "2023-08-25",
    address: {
      city: "BANGALORE",
      state: "KARNATAKA",
      pincode: "560005"
    }
  },
  "ABCXY1234Z": {
    panNumber: "ABCXY1234Z",
    name: "TECH SOLUTIONS PVT LTD",
    fatherName: "N/A",
    dateOfBirth: "01/04/2018",
    status: "VALID",
    category: "Company",
    aadhaarLinked: false,
    lastUpdated: "2023-12-10",
    address: {
      city: "BANGALORE",
      state: "KARNATAKA",
      pincode: "560001"
    }
  }
};

// Mock ITR data (linked to PAN)
const mockITRData = {
  "ABCDE1234F": {
    assessmentYear: "2023-24",
    filingStatus: "FILED",
    totalIncome: 1200000,
    taxPaid: 120000,
    refundAmount: 0,
    filingDate: "2023-07-15",
    verificationStatus: "VERIFIED"
  },
  "FGHIJ5678K": {
    assessmentYear: "2023-24",
    filingStatus: "FILED",
    totalIncome: 1800000,
    taxPaid: 180000,
    refundAmount: 15000,
    filingDate: "2023-07-20",
    verificationStatus: "VERIFIED"
  },
  "KLMNO9012P": {
    assessmentYear: "2023-24",
    filingStatus: "FILED",
    totalIncome: 1500000,
    taxPaid: 150000,
    refundAmount: 0,
    filingDate: "2023-06-30",
    verificationStatus: "VERIFIED"
  }
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { panNumber, purpose = "LOAN_VERIFICATION" } = body;

    // Simulate API processing delay
    await new Promise(resolve => setTimeout(resolve, 1200));

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

    // Check if PAN exists in mock database
    const panData = mockPANDB[panNumber as keyof typeof mockPANDB];

    if (!panData) {
      return NextResponse.json({
        success: false,
        error: {
          code: "PAN_NOT_FOUND",
          message: "PAN number not found in Income Tax database"
        }
      }, { status: 404 });
    }

    // Get ITR data if available
    const itrData = mockITRData[panNumber as keyof typeof mockITRData];

    // Return verification result
    return NextResponse.json({
      success: true,
      data: {
        panNumber: panData.panNumber,
        name: panData.name,
        fatherName: panData.fatherName,
        dateOfBirth: panData.dateOfBirth,
        status: panData.status,
        category: panData.category,
        aadhaarLinked: panData.aadhaarLinked,
        lastUpdated: panData.lastUpdated,
        address: panData.address,
        verificationStatus: "VERIFIED",
        verificationTimestamp: new Date().toISOString(),
        transactionId: `PAN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        // Include ITR data if available and purpose is loan verification
        ...(itrData && purpose === "LOAN_VERIFICATION" && {
          itrDetails: {
            ...itrData,
            incomeVerified: true,
            creditworthiness: itrData.totalIncome > 1000000 ? "HIGH" : itrData.totalIncome > 500000 ? "MEDIUM" : "LOW"
          }
        })
      },
      meta: {
        apiVersion: "v3.1",
        provider: "Income Tax Department",
        responseTime: "1.0s",
        dataSource: "PAN Database"
      }
    });

  } catch (error) {
    console.error('PAN verification error:', error);
    return NextResponse.json({
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: "Internal server error during PAN verification"
      }
    }, { status: 500 });
  }
}

// Get PAN status and basic details
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const panNumber = searchParams.get('pan');

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
    await new Promise(resolve => setTimeout(resolve, 800));

    // Check if PAN exists
    const panData = mockPANDB[panNumber as keyof typeof mockPANDB];

    if (!panData) {
      return NextResponse.json({
        success: false,
        error: {
          code: "PAN_NOT_FOUND",
          message: "PAN number not found"
        }
      }, { status: 404 });
    }

    // Return basic PAN details
    return NextResponse.json({
      success: true,
      data: {
        panNumber: panData.panNumber,
        name: panData.name,
        status: panData.status,
        category: panData.category,
        aadhaarLinked: panData.aadhaarLinked,
        lastUpdated: panData.lastUpdated,
        isValid: panData.status === "VALID",
        transactionId: `PAN_STATUS_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      },
      meta: {
        apiVersion: "v3.1",
        provider: "Income Tax Department",
        queryType: "STATUS_CHECK"
      }
    });

  } catch (error) {
    console.error('PAN status check error:', error);
    return NextResponse.json({
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: "Internal server error during PAN status check"
      }
    }, { status: 500 });
  }
}