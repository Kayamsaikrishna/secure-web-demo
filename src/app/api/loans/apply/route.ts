import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  loanType: z.string(),
  amount: z.number().min(10000).max(5000000),
  tenure: z.number().min(3).max(60),
  purpose: z.string().min(10).max(500),
  income: z.number().min(10000),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to apply for a loan" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const validatedData = schema.parse(body);

    const application = await prisma.loanApplication.create({
      data: {
        userId: session.user.id as string,
        loanType: validatedData.loanType,
        amount: validatedData.amount,
        tenure: validatedData.tenure,
        purpose: validatedData.purpose,
        status: "SUBMITTED",
      },
    });

    return NextResponse.json(application);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("[LOAN_APPLICATION_ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
