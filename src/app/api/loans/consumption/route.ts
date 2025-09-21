import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Schema for consumption loan application
const consumptionLoanSchema = z.object({
  loanSector: z.enum([
    "PERSONAL_LOAN",
    "HOME_LOAN",
    "VEHICLE_LOAN",
    "BUSINESS_LOAN",
    "GOLD_LOAN",
    "EDUCATION_LOAN",
    "AGRICULTURE_LOAN",
    "MICROFINANCE",
    "CREDIT_CARD",
    "TWO_WHEELER_LOAN",
    "HEALTHCARE_LOAN",
    "DIGITAL_LOAN"
  ]),
  loanType: z.string(),
  amount: z.number().min(0),
  tenure: z.number().min(1),
  purpose: z.string().optional(),
  partnerId: z.string(),
  partnerReference: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to apply for a loan" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const validatedData = consumptionLoanSchema.parse(body);

    // Generate application number
    const applicationNumber = `APP-${Date.now()}`;

    const loanApplication = await prisma.loanApplication.create({
      data: {
        applicationNumber,
        userId: session.user.id,
        loanSector: validatedData.loanSector,
        loanType: validatedData.loanType,
        amount: validatedData.amount,
        requestedAmount: validatedData.amount, // Add the missing required field
        tenure: validatedData.tenure,
        purpose: validatedData.purpose,
        status: "SUBMITTED",
        consumptionLoan: {
          create: {
            partnerId: validatedData.partnerId,
            partnerReference: validatedData.partnerReference,
            disbursementType: "DIRECT_TO_PARTNER",
            consumptionType: validatedData.loanSector.replace("_LOAN", "") as any,
            status: "PENDING"
          }
        }
      },
    });

    return NextResponse.json({
      applicationId: loanApplication.id,
      applicationNumber: loanApplication.applicationNumber
    }, { status: 201 });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.issues },
        { status: 400 }
      );
    }

    console.error("[CONSUMPTION_LOAN_APPLICATION_ERROR]", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}