import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Define types for the marketplace offer
interface MarketplaceOffer {
  id: string;
  partnerId: string;
  loanSector: string;
  minAmount: number;
  maxAmount: number;
  interestRate: number;
  processingFee: number;
  tenureOptionsJson: string;
  isActive: boolean;
  priority: number;
  tagsJson: string;
  createdAt: Date;
  updatedAt: Date;
  partner: {
    id: string;
    name: string;
    type: string;
    sector: string;
    commissionRate: number;
  };
}

interface OfferWithParsedFields extends Omit<MarketplaceOffer, 'tenureOptionsJson' | 'tagsJson'> {
  tenureOptions: number[];
  tags: string[];
}

// Get all active marketplace offers - PUBLIC endpoint
export async function GET(req: NextRequest) {
  try {
    const offers = await prisma.marketplaceOffer.findMany({
      where: {
        isActive: true,
      },
      include: {
        partner: true,
      },
      orderBy: {
        priority: "desc",
      },
    });

    // Parse JSON fields for each offer
    const offersWithParsedFields: OfferWithParsedFields[] = offers.map((offer) => ({
      ...offer,
      tenureOptions: JSON.parse(offer.tenureOptionsJson),
      tags: JSON.parse(offer.tagsJson),
    }));

    return NextResponse.json(offersWithParsedFields);
  } catch (error: any) {
    console.error("[MARKETPLACE_OFFERS_FETCH_ERROR]", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}