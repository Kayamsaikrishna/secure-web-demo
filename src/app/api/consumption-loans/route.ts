import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Schema for consumption loan creation
const consumptionLoanSchema = z.object({
  applicationId: z.string(),
  partnerId: z.string(),
  disbursementType: z.enum(["DIRECT_TO_PARTNER", "ESCROW", "MULTI_PARTNER"]),
  consumptionType: z.enum([
    "EDUCATION", "HEALTHCARE", "VEHICLE", "AGRICULTURE", 
    "HOME", "PERSONAL", "BUSINESS", "DIGITAL", "LIFESTYLE", "OTHER"
  ]),
  partnerReference: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to create consumption loans" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const validatedData = consumptionLoanSchema.parse(body);

    // Check if loan application exists and belongs to user (or user is admin)
    const application = await prisma.loanApplication.findUnique({
      where: {
        id: validatedData.applicationId,
      },
    });

    if (!application) {
      return NextResponse.json(
        { error: "Loan application not found" },
        { status: 404 }
      );
    }

    // If user is not admin, verify the application belongs to them
    if (session.user.role !== "ADMIN" && application.userId !== session.user.id) {
      return NextResponse.json(
        { error: "You don't have permission to create a consumption loan for this application" },
        { status: 403 }
      );
    }

    const consumptionLoan = await prisma.consumptionLoan.create({
      data: {
        ...validatedData,
        status: "PENDING",
      },
    });

    return NextResponse.json(consumptionLoan);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("[CONSUMPTION_LOAN_CREATION_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to view consumption loans" },
        { status: 401 }
      );
    }

    // Admins can see all consumption loans, regular users only theirs
    const whereClause = session.user.role === "ADMIN" 
      ? {}
      : {
          application: {
            userId: session.user.id,
          },
        };

    const consumptionLoans = await prisma.consumptionLoan.findMany({
      where: whereClause,
      include: {
        application: true,
        partner: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(consumptionLoans);
  } catch (error) {
    console.error("[CONSUMPTION_LOANS_FETCH_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}