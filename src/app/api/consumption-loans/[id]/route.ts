import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Schema for consumption loan update
const consumptionLoanUpdateSchema = z.object({
  status: z.enum(["PENDING", "DISBURSED", "CONFIRMED", "COMPLETED", "CANCELLED"]).optional(),
  partnerReference: z.string().optional(),
}).partial();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to view consumption loan details" },
        { status: 401 }
      );
    }

    const consumptionLoan = await prisma.consumptionLoan.findUnique({
      where: {
        id: params.id,
      },
      include: {
        application: true,
        partner: true,
      },
    });

    if (!consumptionLoan) {
      return NextResponse.json(
        { error: "Consumption loan not found" },
        { status: 404 }
      );
    }

    // Check if user has permission to view this consumption loan
    if (session.user.role !== "ADMIN" && consumptionLoan.application.userId !== session.user.id) {
      return NextResponse.json(
        { error: "You don't have permission to view this consumption loan" },
        { status: 403 }
      );
    }

    return NextResponse.json(consumptionLoan);
  } catch (error) {
    console.error("[CONSUMPTION_LOAN_FETCH_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to update consumption loans" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const validatedData = consumptionLoanUpdateSchema.parse(body);

    // Check if consumption loan exists
    const existingLoan = await prisma.consumptionLoan.findUnique({
      where: {
        id: params.id,
      },
      include: {
        application: true,
      },
    });

    if (!existingLoan) {
      return NextResponse.json(
        { error: "Consumption loan not found" },
        { status: 404 }
      );
    }

    // Check if user has permission to update this consumption loan
    if (session.user.role !== "ADMIN" && existingLoan.application.userId !== session.user.id) {
      return NextResponse.json(
        { error: "You don't have permission to update this consumption loan" },
        { status: 403 }
      );
    }

    const consumptionLoan = await prisma.consumptionLoan.update({
      where: {
        id: params.id,
      },
      data: validatedData,
    });

    return NextResponse.json(consumptionLoan);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("[CONSUMPTION_LOAN_UPDATE_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}