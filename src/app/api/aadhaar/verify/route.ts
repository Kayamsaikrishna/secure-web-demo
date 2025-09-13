import { NextRequest, NextResponse } from 'next/server';

// Mock Aadhaar database with synthetic data
const mockAadhaarDB = {
  "123456789012": {
    aadhaarNumber: "123456789012",
    name: "Rajesh Kumar Singh",
    dateOfBirth: "1985-06-15",
    gender: "Male",
    fatherName: "Ram Kumar Singh",
    address: {
      houseNumber: "123",
      street: "MG Road",
      area: "Sector 5",
      city: "New Delhi",
      state: "Delhi",
      pincode: "110001"
    },
    mobileNumber: "+91-9876543210",
    email: "rajesh.kumar@email.com",
    photo: "/api/placeholder/aadhaar-photo",
    isValid: true,
    lastUpdated: "2023-12-15"
  },
  "987654321098": {
    aadhaarNumber: "987654321098",
    name: "Priya Sharma",
    dateOfBirth: "1990-08-22",
    gender: "Female",
    fatherName: "Ashok Sharma",
    address: {
      houseNumber: "456",
      street: "Park Street",
      area: "Andheri West",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400058"
    },
    mobileNumber: "+91-9876543211",
    email: "priya.sharma@email.com",
    photo: "/api/placeholder/aadhaar-photo",
    isValid: true,
    lastUpdated: "2023-11-20"
  },
  "456789123456": {
    aadhaarNumber: "456789123456",
    name: "Amit Patel",
    dateOfBirth: "1988-03-10",
    gender: "Male",
    fatherName: "Kiran Patel",
    address: {
      houseNumber: "789",
      street: "SG Highway",
      area: "Satellite",
      city: "Ahmedabad",
      state: "Gujarat",
      pincode: "380015"
    },
    mobileNumber: "+91-9876543212",
    email: "amit.patel@email.com",
    photo: "/api/placeholder/aadhaar-photo",
    isValid: true,
    lastUpdated: "2023-10-05"
  },
  "789123456789": {
    aadhaarNumber: "789123456789",
    name: "Sunita Devi",
    dateOfBirth: "1975-12-03",
    gender: "Female",
    fatherName: "Ramesh Singh",
    address: {
      houseNumber: "45",
      street: "Village Road",
      area: "Khetri",
      city: "Sikar",
      state: "Rajasthan",
      pincode: "332027"
    },
    mobileNumber: "+91-9876543213",
    email: "sunita.devi@email.com",
    photo: "/api/placeholder/aadhaar-photo",
    isValid: true,
    lastUpdated: "2023-09-18"
  },
  "321654987012": {
    aadhaarNumber: "321654987012",
    name: "Mohammed Ali Khan",
    dateOfBirth: "1982-07-28",
    gender: "Male",
    fatherName: "Abdul Rahman Khan",
    address: {
      houseNumber: "67",
      street: "Commercial Street",
      area: "Fraser Town",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560005"
    },
    mobileNumber: "+91-9876543214",
    email: "mohammed.ali@email.com",
    photo: "/api/placeholder/aadhaar-photo",
    isValid: true,
    lastUpdated: "2023-08-12"
  }
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { aadhaarNumber, otp } = body;

    // Simulate API processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Validate Aadhaar number format
    if (!aadhaarNumber || aadhaarNumber.length !== 12 || !/^\d{12}$/.test(aadhaarNumber)) {
      return NextResponse.json({
        success: false,
        error: {
          code: "INVALID_AADHAAR",
          message: "Invalid Aadhaar number format"
        }
      }, { status: 400 });
    }

    // Simulate OTP validation (for demo, any 6-digit number is valid)
    if (otp && (otp.length !== 6 || !/^\d{6}$/.test(otp))) {
      return NextResponse.json({
        success: false,
        error: {
          code: "INVALID_OTP",
          message: "Invalid OTP format"
        }
      }, { status: 400 });
    }

    // Check if Aadhaar exists in mock database
    const aadhaarData = mockAadhaarDB[aadhaarNumber as keyof typeof mockAadhaarDB];

    if (!aadhaarData) {
      return NextResponse.json({
        success: false,
        error: {
          code: "AADHAAR_NOT_FOUND",
          message: "Aadhaar number not found in UIDAI database"
        }
      }, { status: 404 });
    }

    // Return verification result
    return NextResponse.json({
      success: true,
      data: {
        aadhaarNumber: aadhaarData.aadhaarNumber,
        name: aadhaarData.name,
        dateOfBirth: aadhaarData.dateOfBirth,
        gender: aadhaarData.gender,
        fatherName: aadhaarData.fatherName,
        address: {
          fullAddress: `${aadhaarData.address.houseNumber} ${aadhaarData.address.street}, ${aadhaarData.address.area}, ${aadhaarData.address.city}, ${aadhaarData.address.state} - ${aadhaarData.address.pincode}`,
          ...aadhaarData.address
        },
        mobileNumber: aadhaarData.mobileNumber,
        email: aadhaarData.email,
        verificationStatus: "VERIFIED",
        verificationTimestamp: new Date().toISOString(),
        transactionId: `AADHAAR_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      },
      meta: {
        apiVersion: "v2.5",
        provider: "UIDAI",
        responseTime: "1.2s"
      }
    });

  } catch (error) {
    console.error('Aadhaar verification error:', error);
    return NextResponse.json({
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: "Internal server error during Aadhaar verification"
      }
    }, { status: 500 });
  }
}

// Generate OTP for Aadhaar verification
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const aadhaarNumber = searchParams.get('aadhaar');

    if (!aadhaarNumber || aadhaarNumber.length !== 12) {
      return NextResponse.json({
        success: false,
        error: {
          code: "INVALID_AADHAAR",
          message: "Invalid Aadhaar number"
        }
      }, { status: 400 });
    }

    // Simulate OTP generation delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Check if Aadhaar exists
    const aadhaarData = mockAadhaarDB[aadhaarNumber as keyof typeof mockAadhaarDB];

    if (!aadhaarData) {
      return NextResponse.json({
        success: false,
        error: {
          code: "AADHAAR_NOT_FOUND",
          message: "Aadhaar number not found"
        }
      }, { status: 404 });
    }

    // Return OTP sent confirmation (in real scenario, OTP would be sent to registered mobile)
    return NextResponse.json({
      success: true,
      data: {
        message: "OTP sent successfully",
        maskedMobile: aadhaarData.mobileNumber.replace(/(\+91-)(\d{3})(\d{4})(\d{3})/, '$1$2****$4'),
        transactionId: `OTP_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        otpValidFor: "10 minutes",
        // For demo purposes, we'll include the OTP (in production, this would never be returned)
        demoOtp: "123456"
      },
      meta: {
        apiVersion: "v2.5",
        provider: "UIDAI"
      }
    });

  } catch (error) {
    console.error('OTP generation error:', error);
    return NextResponse.json({
      success: false,
      error: {
        code: "INTERNAL_ERROR",
        message: "Internal server error during OTP generation"
      }
    }, { status: 500 });
  }
}