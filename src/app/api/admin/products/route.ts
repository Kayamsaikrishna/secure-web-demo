import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Schema for loan product creation
const loanProductSchema = z.object({
  name: z.string().min(1),
  code: z.string().min(1),
  sector: z.enum([
    "PERSONAL_LOAN", "HOME_LOAN", "VEHICLE_LOAN", "BUSINESS_LOAN", 
    "GOLD_LOAN", "EDUCATION_LOAN", "AGRICULTURE_LOAN", "MICROFINANCE", 
    "CREDIT_CARD", "TWO_WHEELER_LOAN", "HEALTHCARE_LOAN", "DIGITAL_LOAN"
  ]),
  category: z.string().optional(),
  description: z.string().optional(),
  minAmount: z.number().positive(),
  maxAmount: z.number().positive(),
  minTenure: z.number().positive(),
  maxTenure: z.number().positive(),
  baseInterestRate: z.number().min(0).max(100),
  processingFeeRate: z.number().min(0).max(100).optional(),
  minAge: z.number().min(18).max(100).default(18),
  maxAge: z.number().min(18).max(100).default(65),
  minIncome: z.number().min(0).optional(),
  minCreditScore: z.number().min(0).max(900).optional(),
  eligibilityCriteria: z.string().optional(), // JSON string
  features: z.string().optional(), // JSON string
  benefits: z.string().optional(), // JSON string
  requiredDocuments: z.string().optional(), // JSON string
  active: z.boolean().default(true),
  priority: z.number().default(0),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "You must be an admin to create loan products" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const validatedData = loanProductSchema.parse(body);

    const product = await prisma.loanProduct.create({
      data: validatedData,
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.issues },
        { status: 400 }
      );
    }

    console.error("[LOAN_PRODUCT_CREATION_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Get all loan products (admin view)
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "You must be an admin to view loan products" },
        { status: 401 }
      );
    }

    const products = await prisma.loanProduct.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("[LOAN_PRODUCTS_FETCH_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}