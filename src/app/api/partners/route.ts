import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Schema for partner creation
const partnerSchema = z.object({
  name: z.string().min(1),
  type: z.enum([
    "UNIVERSITY",
    "HOSPITAL",
    "DEALER",
    "SUPPLIER",
    "ECOMMERCE",
    "SERVICE_PROVIDER",
    "OTHER"
  ]),
  sector: z.enum([
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
  contactPerson: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  commissionRate: z.number().min(0).max(100).default(2.5),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "You must be an admin to create partners" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const validatedData = partnerSchema.parse(body);

    // Generate a unique API key for the partner
    const apiKey = `${validatedData.name.toLowerCase().replace(/\s+/g, '-')}-api-key-${Date.now()}`;

    const partner = await prisma.partner.create({
      data: {
        ...validatedData,
        apiKey,
        status: "PENDING",
        integrationStatus: "NOT_INTEGRATED",
      },
    });

    return NextResponse.json(partner, { status: 201 });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.issues },
        { status: 400 }
      );
    }

    console.error("[PARTNER_CREATION_ERROR]", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

// Get all partners
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "You must be an admin to view partners" },
        { status: 401 }
      );
    }

    const partners = await prisma.partner.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(partners);
  } catch (error: any) {
    console.error("[PARTNERS_FETCH_ERROR]", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}