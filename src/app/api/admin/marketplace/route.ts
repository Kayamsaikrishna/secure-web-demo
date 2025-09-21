import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Schema for marketplace offer creation
const marketplaceOfferSchema = z.object({
  partnerId: z.string(),
  loanSector: z.enum([
    "PERSONAL_LOAN", "HOME_LOAN", "VEHICLE_LOAN", "BUSINESS_LOAN", 
    "GOLD_LOAN", "EDUCATION_LOAN", "AGRICULTURE_LOAN", "MICROFINANCE", 
    "CREDIT_CARD", "TWO_WHEELER_LOAN", "HEALTHCARE_LOAN", "DIGITAL_LOAN"
  ]),
  minAmount: z.number().positive(),
  maxAmount: z.number().positive(),
  interestRate: z.number().min(0).max(100),
  processingFee: z.number().min(0),
  tenureOptions: z.array(z.number().positive()),
  isActive: z.boolean().default(true),
  priority: z.number().default(0),
  tags: z.array(z.string()).default([]),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "You must be an admin to create marketplace offers" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const validatedData = marketplaceOfferSchema.parse(body);

    // Convert arrays to JSON strings for storage
    const tenureOptionsJson = JSON.stringify(validatedData.tenureOptions);
    const tagsJson = JSON.stringify(validatedData.tags);

    const offer = await prisma.marketplaceOffer.create({
      data: {
        partnerId: validatedData.partnerId,
        loanSector: validatedData.loanSector,
        minAmount: validatedData.minAmount,
        maxAmount: validatedData.maxAmount,
        interestRate: validatedData.interestRate,
        processingFee: validatedData.processingFee,
        tenureOptionsJson,
        isActive: validatedData.isActive,
        priority: validatedData.priority,
        tagsJson,
      },
    });

    // Parse JSON fields for response
    const offerWithParsedFields = {
      ...offer,
      tenureOptions: JSON.parse(offer.tenureOptionsJson),
      tags: JSON.parse(offer.tagsJson),
    };

    return NextResponse.json(offerWithParsedFields, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.issues },
        { status: 400 }
      );
    }

    console.error("[MARKETPLACE_OFFER_CREATION_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Get all marketplace offers (admin view - includes inactive offers)
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "You must be an admin to view all marketplace offers" },
        { status: 401 }
      );
    }

    const offers = await prisma.marketplaceOffer.findMany({
      include: {
        partner: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Parse JSON fields for each offer
    const offersWithParsedFields = offers.map((offer) => ({
      ...offer,
      tenureOptions: JSON.parse(offer.tenureOptionsJson),
      tags: JSON.parse(offer.tagsJson),
    }));

    return NextResponse.json(offersWithParsedFields);
  } catch (error) {
    console.error("[MARKETPLACE_OFFERS_FETCH_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}