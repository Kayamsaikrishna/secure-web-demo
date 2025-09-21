import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Schema for loan application update
const loanApplicationUpdateSchema = z.object({
  status: z.enum([
    "DRAFT", "SUBMITTED", "DOCUMENT_VERIFICATION", "UNDER_REVIEW", 
    "TECHNICAL_REVIEW", "CREDIT_ASSESSMENT", "MANUAL_REVIEW", 
    "APPROVED", "REJECTED", "DISBURSED", "ACTIVE", "CLOSED", 
    "CANCELLED", "ON_HOLD"
  ]).optional(),
  substatus: z.string().optional(),
  approvedAmount: z.number().positive().optional(),
  interestRate: z.number().min(0).max(100).optional(),
  processingFee: z.number().min(0).optional(),
  assignedTo: z.string().optional(),
  comments: z.string().optional(),
  rejectionReason: z.string().optional(),
}).partial();

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "You must be an admin to view loan application details" },
        { status: 401 }
      );
    }

    // Resolve the params promise
    const resolvedParams = await params;

    const application = await prisma.loanApplication.findUnique({
      where: {
        id: resolvedParams.id,
      },
      include: {
        user: {
          include: {
            profile: true,
            kycData: true,
            financialProfile: true,
            bankAccounts: true,
          },
        },
        product: true,
        documents: true,
        verifications: true,
        approvals: true,
        disbursement: true,
        emi: true,
        consumptionLoan: true,
      },
    });

    if (!application) {
      return NextResponse.json(
        { error: "Loan application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(application);
  } catch (error) {
    console.error("[LOAN_APPLICATION_FETCH_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "You must be an admin to update loan applications" },
        { status: 401 }
      );
    }

    // Resolve the params promise
    const resolvedParams = await params;

    const body = await req.json();
    const validatedData = loanApplicationUpdateSchema.parse(body);

    const application = await prisma.loanApplication.update({
      where: {
        id: resolvedParams.id,
      },
      data: validatedData,
    });

    return NextResponse.json(application);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.issues },
        { status: 400 }
      );
    }

    console.error("[LOAN_APPLICATION_UPDATE_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}