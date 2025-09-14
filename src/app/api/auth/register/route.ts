import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";

const schema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name is too long")
    .regex(/^[a-zA-Z\s]+$/, "First name can only contain letters and spaces"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name is too long")
    .regex(/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces"),
  email: z
    .string()
    .email("Invalid email format")
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password is too long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w\W]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long")
    .regex(/^\+?[\d\s-]+$/, "Invalid phone number format"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = schema.parse(body);

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        email: validatedData.email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { 
          error: "Email already registered",
        },
        { status: 400 }
      );
    }

    // Hash password with increased security
    const hashedPassword = await bcrypt.hash(validatedData.password, 12);

    // Create user with profile
    const fullName = `${validatedData.firstName} ${validatedData.lastName}`;
    const user = await prisma.user.create({
      data: {
        email: validatedData.email,
        password: hashedPassword,
        role: "USER",
        profile: {
          create: {
            firstName: validatedData.firstName,
            lastName: validatedData.lastName,
            fullName: fullName,
            primaryPhone: validatedData.phone,
            gender: "PREFER_NOT_TO_SAY",
            dateOfBirth: new Date('1990-01-01'), // Default, user can update later
            maritalStatus: "SINGLE",
            fatherName: "To be updated",
            motherName: "To be updated",
          },
        },
      },
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
        profile: {
          select: {
            firstName: true,
            lastName: true,
            fullName: true,
            primaryPhone: true,
          },
        },
      },
    });

    return NextResponse.json({
      user,
      message: "Registration successful",
    }, { 
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.issues[0]?.message || "Invalid request data";
      return NextResponse.json(
        { error: errorMessage },
        { status: 400 }
      );
    }

    console.error("[REGISTRATION_ERROR]", error);
    return NextResponse.json(
      { error: "An error occurred during registration. Please try again." },
      { status: 500 }
    );
  }
}
