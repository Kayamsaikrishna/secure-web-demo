import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";

// This secret should match the one you'll provide in the URL
const ADMIN_SECRET = process.env.ADMIN_SETUP_SECRET || "your-secret-key";

const adminSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
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
  secret: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = adminSchema.parse(body);

    // Verify the secret key
    if (validatedData.secret !== ADMIN_SECRET) {
      return NextResponse.json(
        { error: "Invalid secret key" },
        { status: 403 }
      );
    }

    // Check if any admin already exists
    const existingAdmin = await prisma.user.findFirst({
      where: { role: "ADMIN" },
    });

    if (existingAdmin) {
      return NextResponse.json(
        { error: "Admin user already exists" },
        { status: 400 }
      );
    }

    // Check if email is already registered
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 12);

    // Create admin user
    const admin = await prisma.user.create({
      data: {
        email: validatedData.email,
        password: hashedPassword,
        role: "ADMIN",
        profile: {
          create: {
            firstName: validatedData.name.split(' ')[0] || validatedData.name,
            lastName: validatedData.name.split(' ').slice(1).join(' ') || '',
            fullName: validatedData.name,
            gender: "PREFER_NOT_TO_SAY",
            dateOfBirth: new Date('1990-01-01'), // Default date
            maritalStatus: "SINGLE",
            primaryPhone: "+91-0000000000", // Default phone
            fatherName: "Not Specified",
            motherName: "Not Specified",
          }
        }
      },
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
        profile: {
          select: {
            fullName: true,
            primaryPhone: true,
          }
        }
      },
    });

    return NextResponse.json({
      message: "Admin user created successfully",
      user: admin,
    }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }

    console.error("[ADMIN_SETUP_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to create admin user" },
      { status: 500 }
    );
  }
}
