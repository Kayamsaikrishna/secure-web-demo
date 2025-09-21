import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Schema for marketplace offer update
const marketplaceOfferUpdateSchema = z.object({
  partnerId: z.string().optional(),
  loanSector: z.enum([
    "PERSONAL_LOAN", "HOME_LOAN", "VEHICLE_LOAN", "BUSINESS_LOAN", 
    "GOLD_LOAN", "EDUCATION_LOAN", "AGRICULTURE_LOAN", "MICROFINANCE", 
    "CREDIT_CARD", "TWO_WHEELER_LOAN", "HEALTHCARE_LOAN", "DIGITAL_LOAN"
  ]).optional(),
  minAmount: z.number().positive().optional(),
  maxAmount: z.number().positive().optional(),
  interestRate: z.number().min(0).max(100).optional(),
  processingFee: z.number().min(0).optional(),
  tenureOptions: z.array(z.number().positive()).optional(),
  isActive: z.boolean().optional(),
  priority: z.number().optional(),
  tags: z.array(z.string()).optional(),
}).partial();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "You must be an admin to view marketplace offer details" },
        { status: 401 }
      );
    }

    const offer = await prisma.marketplaceOffer.findUnique({
      where: {
        id: params.id,
      },
      include: {
        partner: true,
      },
    });

    if (!offer) {
      return NextResponse.json(
        { error: "Marketplace offer not found" },
        { status: 404 }
      );
    }

    // Parse JSON fields for response
    const offerWithParsedFields = {
      ...offer,
      tenureOptions: JSON.parse(offer.tenureOptionsJson),
      tags: JSON.parse(offer.tagsJson),
    };

    return NextResponse.json(offerWithParsedFields);
  } catch (error) {
    console.error("[MARKETPLACE_OFFER_FETCH_ERROR]", error);
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
        { error: "You must be an admin to update marketplace offers" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const validatedData = marketplaceOfferUpdateSchema.parse(body);

    // Convert arrays to JSON strings for storage if provided
    const updateData: Record<string, unknown> = { ...validatedData };
    if (validatedData.tenureOptions) {
      updateData.tenureOptionsJson = JSON.stringify(validatedData.tenureOptions);
      delete updateData.tenureOptions;
    }
    if (validatedData.tags) {
      updateData.tagsJson = JSON.stringify(validatedData.tags);
      delete updateData.tags;
    }

    const offer = await prisma.marketplaceOffer.update({
      where: {
        id: params.id,
      },
      data: updateData,
    });

    // Parse JSON fields for response
    const offerWithParsedFields = {
      ...offer,
      tenureOptions: JSON.parse(offer.tenureOptionsJson),
      tags: JSON.parse(offer.tagsJson),
    };

    return NextResponse.json(offerWithParsedFields);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.issues },
        { status: 400 }
      );
    }

    console.error("[MARKETPLACE_OFFER_UPDATE_ERROR]", error);
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
        { error: "You must be an admin to delete marketplace offers" },
        { status: 401 }
      );
    }

    await prisma.marketplaceOffer.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({ message: "Marketplace offer deleted successfully" });
  } catch (error) {
    console.error("[MARKETPLACE_OFFER_DELETE_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}