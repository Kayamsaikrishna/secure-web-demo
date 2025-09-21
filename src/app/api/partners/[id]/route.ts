import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Schema for partner update
const partnerUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  type: z.enum(["UNIVERSITY", "HOSPITAL", "DEALER", "SUPPLIER", "ECOMMERCE", "SERVICE_PROVIDER", "OTHER"]).optional(),
  sector: z.enum([
    "PERSONAL_LOAN", "HOME_LOAN", "VEHICLE_LOAN", "BUSINESS_LOAN", 
    "GOLD_LOAN", "EDUCATION_LOAN", "AGRICULTURE_LOAN", "MICROFINANCE", 
    "CREDIT_CARD", "TWO_WHEELER_LOAN", "HEALTHCARE_LOAN", "DIGITAL_LOAN"
  ]).optional(),
  status: z.enum(["PENDING", "VERIFIED", "ACTIVE", "SUSPENDED", "TERMINATED", "BLACKLISTED"]).optional(),
  commissionRate: z.number().min(0).max(100).optional(),
  contactPerson: z.string().min(1).optional(),
  email: z.string().email().optional(),
  phone: z.string().min(10).max(15).optional(),
  integrationStatus: z.enum(["NOT_INTEGRATED", "INTEGRATION_IN_PROGRESS", "INTEGRATED", "FAILED"]).optional(),
}).partial();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to view partner details" },
        { status: 401 }
      );
    }

    const partner = await prisma.partner.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!partner) {
      return NextResponse.json(
        { error: "Partner not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(partner);
  } catch (error) {
    console.error("[PARTNER_FETCH_ERROR]", error);
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
        { error: "You must be an admin to update partners" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const validatedData = partnerUpdateSchema.parse(body);

    const partner = await prisma.partner.update({
      where: {
        id: params.id,
      },
      data: validatedData,
    });

    return NextResponse.json(partner);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("[PARTNER_UPDATE_ERROR]", error);
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
        { error: "You must be an admin to delete partners" },
        { status: 401 }
      );
    }

    await prisma.partner.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({ message: "Partner deleted successfully" });
  } catch (error) {
    console.error("[PARTNER_DELETE_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}