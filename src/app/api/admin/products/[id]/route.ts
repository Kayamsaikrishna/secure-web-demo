import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Schema for loan product update
const loanProductUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  code: z.string().min(1).optional(),
  sector: z.enum([
    "PERSONAL_LOAN", "HOME_LOAN", "VEHICLE_LOAN", "BUSINESS_LOAN", 
    "GOLD_LOAN", "EDUCATION_LOAN", "AGRICULTURE_LOAN", "MICROFINANCE", 
    "CREDIT_CARD", "TWO_WHEELER_LOAN", "HEALTHCARE_LOAN", "DIGITAL_LOAN"
  ]).optional(),
  category: z.string().optional(),
  description: z.string().optional(),
  minAmount: z.number().positive().optional(),
  maxAmount: z.number().positive().optional(),
  minTenure: z.number().positive().optional(),
  maxTenure: z.number().positive().optional(),
  baseInterestRate: z.number().min(0).max(100).optional(),
  processingFeeRate: z.number().min(0).max(100).optional(),
  minAge: z.number().min(18).max(100).optional(),
  maxAge: z.number().min(18).max(100).optional(),
  minIncome: z.number().min(0).optional(),
  minCreditScore: z.number().min(0).max(900).optional(),
  eligibilityCriteria: z.string().optional(), // JSON string
  features: z.string().optional(), // JSON string
  benefits: z.string().optional(), // JSON string
  requiredDocuments: z.string().optional(), // JSON string
  active: z.boolean().optional(),
  priority: z.number().optional(),
}).partial();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "You must be an admin to view loan product details" },
        { status: 401 }
      );
    }

    const product = await prisma.loanProduct.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!product) {
      return NextResponse.json(
        { error: "Loan product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("[LOAN_PRODUCT_FETCH_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "You must be an admin to update loan products" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const validatedData = loanProductUpdateSchema.parse(body);

    const product = await prisma.loanProduct.update({
      where: {
        id: params.id,
      },
      data: validatedData,
    });

    return NextResponse.json(product);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.issues },
        { status: 400 }
      );
    }

    console.error("[LOAN_PRODUCT_UPDATE_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "You must be an admin to delete loan products" },
        { status: 401 }
      );
    }

    await prisma.loanProduct.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({ message: "Loan product deleted successfully" });
  } catch (error) {
    console.error("[LOAN_PRODUCT_DELETE_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}